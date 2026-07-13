# Indexing report — 2026-07-13 weekly cycle

## Sitemap coverage

Cross-checked all 189 page rows in `data/gsc/2026-07-13/דפים.csv` against the
route tree. Every GSC path resolves to either a static `page.tsx` or one of
the three dynamic routes (`/areas/[city]`, `/areas/[city]/[service]`,
`/projects/[slug]`). **No missing routes, no 404s found.**

`src/app/sitemap.ts` is programmatic, not a hand-maintained list: it pulls
from `services`, `guides`, `compares`, `areas` (`.filter(a => !a.noindexReason)`),
`serviceMatrix` × `isGeoPairIndexable`, and `projects`, plus explicit static
entries for the pinui-binui / tama-38 / memad / madrichim / hashvaa
sub-trees. All 5 touched/new URLs this cycle are covered:

| URL | Sitemap source |
|---|---|
| `/guides/home-front-command-approval` | `guides` array (existing) |
| `/services/room-reinforcement` | `services` array (existing) |
| `/pinui-binui/eravut` | explicit static entry (existing) |
| `/tama-38/sug-1` | explicit static entry (existing) |
| `/guides/migun-solutions` | `guides` array (**new entry added** in `src/lib/site.ts`, cycle 2026-07-13) |

No orphan pages found among the 5 touched/new URLs: each has verified inbound
links (see `src/data/internal-links.ts`, entries tagged "cycle 2026-07-13").
A full 189-page orphan crawl (every page checked for >=1 inbound link)
was not run this cycle — it requires either a live crawl or a purpose-built
static-analysis script beyond this cycle's link-level scope. Recommended as
a follow-up if a next cycle has budget for it.

## robots.txt

`src/app/robots.ts` (dynamic route, not a static file) already allows:
Googlebot (via wildcard `*`), `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`,
`PerplexityBot`, `Perplexity-User`, `ClaudeBot`, `anthropic-ai`,
`Claude-Web`, `Google-Extended`, `CCBot`, `Bingbot`, `Applebot-Extended`,
`Bytespider`, `cohere-ai`. No changes needed; verified compliant with the
Change 5c requirement.

## llms.txt

Updated `src/content/llms-txt-manifest.ts`:
- `/guides/home-front-command-approval` description expanded to mention the
  new "מי צריך אישור" and "ערוצי פנייה רשמיים לפקע״ר" sections (Change 1).
- Added `/guides/migun-solutions` as a new entry under the guides section
  (Change 4).

## Indexing cannot be forced

Sitemap + internal links + `npm run indexnow` + GSC manual URL Inspection
requests are the available levers. None of them guarantee crawl timing.
The 5 URLs below are the ones the owner should submit via GSC URL Inspection
→ Request Indexing:

1. `https://hithadshut.co.il/guides/home-front-command-approval` (updated)
2. `https://hithadshut.co.il/services/room-reinforcement` (updated)
3. `https://hithadshut.co.il/pinui-binui/eravut` (metadata only)
4. `https://hithadshut.co.il/tama-38/sug-1` (metadata only)
5. `https://hithadshut.co.il/guides/migun-solutions` (new)
