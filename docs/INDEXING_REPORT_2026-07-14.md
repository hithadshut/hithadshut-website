# Indexing report — 2026-07-14 pinui-binui cluster domination cycle

## Sitemap coverage

`npm run build` generated 197 routes (196 prior + 1 new), matching the
expected +1 for `/pinui-binui/mechirat-dira`. All 6 touched/new URLs this
cycle are covered in `src/app/sitemap.ts`:

| URL | Sitemap source | Change |
|---|---|---|
| `/pinui-binui/mechirat-dira` | explicit static entry (**new**, added this cycle) | Change 1: new page |
| `/pinui-binui` | explicit static entry (existing) | Change 4: pillar overhaul |
| `/pinui-binui/sarvan` | explicit static entry (existing) | Change 3b: full rewrite |
| `/pinui-binui/kshishim` | explicit static entry (existing) | Change 3a: full rewrite |
| `/pinui-binui/temurot` | explicit static entry (existing) | Change 2: additive bridge |
| `/pinui-binui/chok-67` | explicit static entry (existing) | Change 2: additive bridge |

`npm run build` confirms every route compiles and prerenders (static ○ for
all `pinui-binui/*` routes, no ƒ/dynamic fallback needed for this cluster).

## Orphan check

`findOrphanCandidates()` in `src/data/internal-links.ts` requires >=2
inbound links per page. The new page `/pinui-binui/mechirat-dira` has 7
inbound entries recorded this cycle: pillar (`מדריכי המשך` box +
sub-question hub + RelatedLinks = 3 separate placements on one page),
`/pinui-binui/temurot` (additive bridge), `/pinui-binui/chok-67` (additive
bridge), `/pinui-binui/kshishim` (rewrite), `/pinui-binui/sarvan` (rewrite),
and the homepage banner card. Well above the 2-link floor.

A full 189+-page orphan crawl across the entire site (beyond this cycle's
pinui-binui-cluster scope) was not re-run; the 2026-07-13 cycle's report
already noted this as a follow-up item requiring a purpose-built crawl
script, still outstanding.

## robots.txt

`src/app/robots.ts` unchanged this cycle; already allows Googlebot
(wildcard) and all 14 named AI-search bots (GPTBot, OAI-SearchBot,
ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, anthropic-ai,
Claude-Web, Google-Extended, CCBot, Bingbot, Applebot-Extended, Bytespider,
cohere-ai). No noindex accidentally applied to any of the 6 touched URLs
(verified via grep for `robots:` / `noindex` across the touched files: none
found).

## llms.txt

Updated `src/content/llms-txt-manifest.ts`:
- Added `/pinui-binui/mechirat-dira` entry under "התחדשות עירונית".
- Updated `/pinui-binui` label/description to reflect the sub-question-hub
  restructure (Change 4).
- Updated `/pinui-binui/kshishim` description to mention the new "or sell"
  section.
- Updated `/pinui-binui/sarvan` label to match the rewritten title (Change 3b).

## Canonical + schema spot-check

All 6 touched pages carry `SchemaArticle` + `SchemaBreadcrumb` with
absolute canonical URLs via `buildMetadata()` (single source of truth,
`src/lib/metadata.ts`). The new page additionally carries `FAQPage` schema
(`includeSchema` on `<FAQ>`) mirroring its 7 visible FAQ items exactly.

## Indexing cannot be forced

Sitemap + internal links + GSC manual URL Inspection requests are the
available levers; none guarantee crawl timing. The 6 URLs below are the
ones the owner should submit via GSC URL Inspection → Request Indexing:

1. `https://hithadshut.co.il/pinui-binui/mechirat-dira` (new)
2. `https://hithadshut.co.il/pinui-binui` (pillar overhaul)
3. `https://hithadshut.co.il/pinui-binui/sarvan` (full rewrite)
4. `https://hithadshut.co.il/pinui-binui/kshishim` (full rewrite)
5. `https://hithadshut.co.il/pinui-binui/temurot` (additive bridge)
6. `https://hithadshut.co.il/pinui-binui/chok-67` (additive bridge)
