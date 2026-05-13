# Week 1 Closure — 2026-05-11 to 2026-05-14

## Mission Status
Foundation phase complete. Site is now technically and structurally eligible to compete for #1 ranking on memad-related queries in both Google and AI engines. T+0 baselines captured — every improvement we measure from this point forward is attributable to Week 1 work.

## What Shipped (PR #2 merged + PR #3 pending)

### Schema layer
- Article + BreadcrumbList added to ServicePageLayout (covers 6 service pages: building-mamad, room-reinforcement, prefab-mamad, private-construction, renovations, extensions)
- Person + Organization schema on /about/ofek-mazor (Knowledge Panel eligibility)
- FAQPage emission single-sourced via FAQ component on /compare/mamad-vs-hamad (PR #3, awaiting merge)
- Real per-page datePublished/dateModified pulled from git log (no more shared hardcoded defaults)

### Content layer
- /about/ofek-mazor expanded to 1,200+ words with 14 verified claims (all ✓ by Ofek)
- /compare/mamad-vs-hamad: new "yavil price transparency" section above the main comparison table, mandatory opening sentence verbatim
- /services/prefab-mamad: same opening sentence + 3 new FAQ entries (Q count: 10 → 13)
- /press: yavil quote refactored to match new pricing framework
- 8 thin city pages noindexed (crawl budget preserved)

### Infrastructure layer
- `src/lib/seo/service-dates.ts` (single source of truth for schema dates per slug)
- `src/lib/data/pricing.ts` (single source of truth for ממ"ד תקני / שיפור מיגון / ממ"ד יביל ranges; ranges sourced from 4+ public references)
- Pre-commit hook installed (`.husky/pre-commit` + `scripts/install-hooks.sh`); blocks em-dashes, forbidden phrases, [טעון בדיקה], migunit-as-private-home-in-center
- `scripts/install-hooks.sh` runs as postinstall — every fresh clone auto-installs hook
- 11+ inline price refactors → PRICING.* imports
- 135 em-dashes purged across 52 files; 0 remain
- Content-lint script tightened (false-positives handled: "מס ערך מוסף" vs "ערך מוסף"; migunit warning content)

## Baselines Captured (T+0)
| Baseline | File | Status |
|---|---|---|
| AI citations (25 queries × WebSearch) | `reports/week-1-review/AI-CITATIONS-BASELINE.md` | ✓ complete — **0/25** |
| GSC URL Inspection (6 URLs) | `reports/week-1-review/GSC-INSPECTION-BASELINE.md` | worksheet ready, awaiting Ofek |
| GSC Performance (90 days) | `reports/week-1-review/GSC-BASELINE.md` | worksheet ready, awaiting Ofek |
| Core Web Vitals (6 URLs × 2 strategies) | `reports/week-1-review/CWV-BASELINE.md` | blocked on PSI quota; manual workaround documented |
| Rich Results validation (5 URLs) | `reports/week-1-review/RICH-RESULTS-VALIDATION.md` | ✓ schema counts captured + manual-test URLs prepared for Ofek |
| Schema duplication audit | `reports/week-1-review/SCHEMA-AUDIT.md` | ✓ complete — 1 real dup fixed in PR #3 |
| Indexing submission log | `reports/indexing-log.md` | empty — Step 3 awaiting PR #3 merge |
| Active blockers | `reports/blockers.md` | 4 logged |

## Forward Indicators (measured at end of Week 2)

| Indicator | Baseline T+0 | Week 2 target | Stretch |
|---|---|---|---|
| AI citations total | 0/25 | 5/25 | 12/25 |
| At least 1 citation per theme | 0 themes | 3 themes | 5 themes |
| FAQPage enhancements in GSC | TBD by Ofek | +2 | +4 |
| Article enhancements in GSC | TBD by Ofek | +3 | +6 |
| Avg position for "מחיר ממ"ד" | TBD by Ofek | improvement | top-10 |
| Avg position for "ממ"ד יביל" | TBD by Ofek | improvement | top-5 |
| /guides/mamad-cost published | n/a (not yet written) | ✓ live | top-5 |

## Risks Identified
1. **PR #3 not merged in time**: if FAQPage duplication persists when crawler hits `/compare/mamad-vs-hamad`, Google may not apply FAQ rich result. Mitigation: merge PR #3 ASAP, then re-validate via Rich Results Test.
2. **GSC API service account not configured**: blocks automated sitemap pings; relies on Ofek's UI submissions. Manageable.
3. **PSI quota exhausted**: blocks CWV automation today; manual workaround viable, daily quota resets.
4. **AI citations baseline is proxy, not direct**: WebSearch ≠ ChatGPT/Perplexity/Gemini. Re-tests at T+14 / T+30 must include manual UI checks by Ofek on at least 5 high-value queries.

## Week 2 Mission
Publish `/guides/mamad-cost` as the definitive Israeli answer to "כמה עולה לבנות ממ"ד".
Target: top-3 ChatGPT/Perplexity citation for "מחיר ממ"ד" exact query within 21 days post-publish.

Day 4 (research foundation for /guides/mamad-cost) starts after Ofek approves baseline + closure.

## Approvals Required from Ofek
1. ✅ PR #3 (FAQPage dedup) — merge approval
2. Confirm AI citations baseline reflects reality (0/25 is the correct T+0 floor)
3. Fill in GSC-INSPECTION-BASELINE.md (6 URLs, ~5 min)
4. Fill in GSC-BASELINE.md (90-day data, ~10 min)
5. Run PSI manually OR provision PSI_API_KEY (~15 min)
6. Run Rich Results Test on 5 URLs (links in RICH-RESULTS-VALIDATION.md, ~10 min)
7. Approve Week 1 closure → unlocks Day 4
