# Indexing report — cycle 2026-07-14 (cycle #3)

Inheritance-seller pillar + F-cluster domination.

## Changed / new URLs

| URL | Type | Notes |
|---|---|---|
| `/madrichim/mechirat-dira-beyerusha` | New page | General inheritance-sale pillar (cluster C). Static prerender confirmed in `npm run build` output. |
| `/pinui-binui/yazam` | Changed | Strengthened: short-answer block, new "מי מחליט" section, expanded ערבויות coverage, title/meta rewrite. |
| `/pinui-binui/yorshim` | Changed | Intent-separation paragraph + cross-link added, title/meta sharpened to in-project scope. |
| `/madrichim` | Changed | New card added to "זכויות, ערבויות וירושה" category (inbound link + hub `CollectionPage`/`ItemList` schema auto-updates from the `ALL_ARTICLES` array). |

No URLs were removed, renamed, or noindexed this cycle.

## Sitemap

`src/app/sitemap.ts` updated with an explicit entry for
`/madrichim/mechirat-dira-beyerusha` (priority 0.7, matching sibling
`/madrichim/*` articles). Verified in the `npm run build` route table: the
new route renders as `○ /madrichim/mechirat-dira-beyerusha` (static).

## Canonical / robots / noindex audit

- All 4 touched/new pages use `buildMetadata()`, which sets
  `alternates.canonical` to the absolute `site.url + path` and
  `robots: { index: true, follow: true }` unconditionally. No noindex
  anywhere in this cycle's diff.
- `robots.txt` (`src/app/robots.ts`) unchanged this cycle; already allows
  Googlebot, Bingbot, and all enumerated AI-crawler user agents (GPTBot,
  PerplexityBot, ClaudeBot, Google-Extended, etc.), disallows only `/api/`.
- `llms.txt` manifest updated: new pillar added under "התחדשות עירונית"
  (cross-cluster placement — the page's own scope is broader than urban
  renewal, but it's most discoverable there given its heavy cross-linking
  to `/pinui-binui/mechirat-dira` and `/pinui-binui/yorshim`); `/pinui-binui/yazam`
  and `/pinui-binui/yorshim` manifest descriptions updated to match their
  sharpened on-page content.

## Orphan check

Per `technical.md` §6 (page needs ≥2 inbound links):

- `/madrichim/mechirat-dira-beyerusha`: **3 inbound links** —
  `/madrichim` (hub card), `/pinui-binui/yorshim` (intent-separation
  cross-link), `/madrichim/zechut-baalut-vs-zechut-yorshim` (sibling
  inheritance article). Not an orphan.
- No other page's inbound count changed this cycle (only outbound links
  were added from `/pinui-binui/yazam`, `/pinui-binui/yorshim`, and the
  new page itself — none of those are removals).

## JSON-LD / schema validation

- New page ships `Article` + `BreadcrumbList` + `FAQPage` (7 questions,
  matches visible FAQ exactly) schema, all rendered server-side via the
  standard `SchemaArticle` / `SchemaBreadcrumb` / `FAQ` components.
- `/pinui-binui/yazam`'s existing `HowTo` schema (12 steps) and `Article`
  schema were left as-is; content additions (מי מחליט section, ערבויות
  paragraph) are supplementary and don't require new step entries.
- `Organization` schema `serviceType` array (`src/lib/schema.ts`) gained
  one entry — "רכישת דירות תפוסות (המוכר ממשיך לגור בדירה)" — added only
  because that claim is now visible body content on the new page (Change
  4b requirement: schema must mirror visible content, never precede it).
- `npm run build` completed with no JSON-LD/type errors across all 198
  routes; `npm run typecheck` and `npm run lint` both pass clean.

## Live verification

No browser-automation tool (Playwright) was available in this session —
`npx playwright` requires a package install this sandboxed session
couldn't complete offline, consistent with the same limitation noted in
the cycle #1 and #2 logs. Post-deploy verification for this cycle uses
plain HTTPS fetch checks (status code, canonical tag, FAQ visibility, no
BIDI corruption) against the 4 production URLs above instead of full
Playwright automation. See the cycle report for results.

## GSC submission list (owner action)

1. `https://hithadshut.co.il/madrichim/mechirat-dira-beyerusha`
2. `https://hithadshut.co.il/pinui-binui/yazam`
3. `https://hithadshut.co.il/pinui-binui/yorshim`
4. `https://hithadshut.co.il/madrichim`
