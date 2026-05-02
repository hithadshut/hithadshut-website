# SEO operations

Manual operational runbooks for SEO infrastructure on hithadshut.co.il.
Keep this file under version control; surface anything ad-hoc here so
future operators don't have to reverse-engineer it from commit history.

## IndexNow — Bing + Yandex programmatic submission

IndexNow is a protocol that lets sites notify search engines (Bing,
Yandex, Seznam, Naver, Yep) when URLs are added, updated, or deleted.
Google does NOT participate directly, but the signal reaches Bingbot
quickly — and Bingbot powers ChatGPT Search and Microsoft Copilot.

### Key + verification

The key is a 32-character hex string set as `INDEXNOW_KEY` in the
environment. Resolution order (see [src/lib/indexnow.ts](../src/lib/indexnow.ts)):

1. `process.env.INDEXNOW_KEY` (Vercel project env in prod, `.env.local`
   in dev)
2. Hardcoded build-time fallback inside `src/lib/indexnow.ts`

Verification path is `https://hithadshut.co.il/<KEY>.txt`. Two
mechanisms answer that path so the protocol always validates:

- **Dynamic route** — [src/app/[key]/route.ts](../src/app/[key]/route.ts).
  Reads `INDEXNOW_KEY` and returns 200 + plain-text key only when the
  request path matches `<KEY>.txt`. Every other root-level path that
  doesn't match a static route falls through here and 404s.
- **Static fallback file** — `public/<KEY>.txt`. Plain Next.js public
  asset; always available even if env resolution fails.

### Rotating the key

1. Generate a new key:
   `node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"`
2. Update the fallback constant in [src/lib/indexnow.ts](../src/lib/indexnow.ts).
3. Rename `public/<old>.txt` → `public/<new>.txt` and update its content.
4. Update `.env.local` and Vercel project env: `INDEXNOW_KEY=<new>`.
5. Deploy.
6. Re-submit a sample URL with `npm run indexnow` to confirm the new
   keyLocation validates.

### Submitting URLs

Two modes:

```sh
# Specific URLs (paths or absolute, host-checked)
npm run indexnow -- /pinui-binui /tama-38/pkia-2026

# Every URL from the live sitemap
npm run indexnow -- --all
```

Cross-host absolute URLs are rejected — IndexNow keys are scoped to a
single host.

The CLI prints the IndexNow API response. Exit code 0 on HTTP 2xx,
non-zero otherwise. A 200 `OK` from `api.indexnow.org` means accepted
for processing — Bingbot decides when to actually crawl.

### When to run

Run after meaningful content updates land in production:

- New page shipped (any /services/*, /guides/*, /compare/*, pillar pages).
- Material edits to existing pages (>20% body rewrite, headline change,
  schema change, regulatory update).
- Promoted city × service pair (per `INDEXABLE_GEO_PAIRS` change).
- 301 redirects added (submit both old and new URLs so Bing follows).

### Auto-trigger on deploy

Out of scope today. Future option: a Vercel deploy hook + GitHub Action
that runs `npm run indexnow -- --all` after a successful production
deploy. Tracked as a follow-up; not blocking.

### Server action

For application code that needs to submit programmatically (e.g. a
form-driven CMS later), use [src/actions/indexnow-submit.ts](../src/actions/indexnow-submit.ts):

```ts
import { indexnowSubmitAction } from "@/actions/indexnow-submit";

const result = await indexnowSubmitAction(["/pinui-binui", "/tama-38"]);
// result.status, result.body, result.rejected[]
```

## Sitemap

The sitemap is generated at build time from
[src/app/sitemap.ts](../src/app/sitemap.ts).

- `lastmod` is per-URL via `git log -1 --format=%cI -- <source>` of
  the page's source files + content data files. Falls back to
  `fs.statSync` mtime, then to `new Date()`.
- Priority distribution:
  - `1.0` — homepage
  - `0.9` — pillar/hub pages (services, guides, compare, about, contact, areas)
  - `0.7` — city standalone, indexable city × service, projects index, /about/ofek-mazor
  - `0.6` — project detail pages
  - `0.3` — legal pages
- Sitemap index split is needed at ~10K URLs. Far below today.

## /llms.txt

Authority manifest for AI search engines. Generated from
[src/content/llms-txt-manifest.ts](../src/content/llms-txt-manifest.ts)
and served via [src/app/llms.txt/route.ts](../src/app/llms.txt/route.ts).
Add new authority pages to the manifest as part of the launch checklist.
