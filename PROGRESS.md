# PROGRESS.md

**Last Updated:** 2026-05-07
**Worktree (truth):** `.claude/worktrees/sweet-turing-05ab00`
**Branch:** `claude/sweet-turing-05ab00`

---

## Status Snapshot

| Phase | Status |
|---|---|
| Phase 0 — Setup & Discovery | ✅ Complete |
| Phase 1 — Foundation Fixes | ✅ Complete (commit `3087988`) |
| Phase 2A — Immediate Fixes | ✅ Complete (commit `3087988`) |
| Phase 2B — Mamad Pages Overhaul | ✅ Complete (11 of 11 pages done) |
| Phase 2C — New Mamad Pages | ⏸ Not started — only `/compare/mamad-vs-hamad` is genuinely missing |

**Build status:** lint ✅, typecheck ✅, build ✅
**Sitemap:** 60 static pages registered with git-based `lastModified`
**Broken internal links:** 0

---

## Phase 1 — Foundation Fixes ✅

Single commit summarises Phase 1 + Phase 2A. Files: 50 modified.

- 1.1 Brand messaging: removed "אנחנו לא יזמים" (28 instances, 27 files)
- 1.2 Title/meta audit: 11 titles trimmed to ≤60ch, 15 descriptions trimmed to ≤160ch, 1 title expanded
- 1.3 Removed generic `keywords` array from `layout.tsx`
- 1.4 License 3246290 added to Footer + Byline + Schema (Person, Organization founder, ImageObject)
- 1.5 Replaced "247 projects / 1,800 residents" with sourced data (1.6M apartments / 12-21% price gap)
- 1.6 Fixed 6 broken internal links (`/services/migunit`, `/compare/migunit-vs-mamad-muchan`)
- 1.7 ContactForm simplified to name + phone (2 fields) — superseded by Phase 2A.4
- 1.8 Verified sitemap covers all 60 static pages

---

## Phase 2A — Immediate Fixes ✅

- 2A.1 Worktree verification: `sweet-turing-05ab00` is the source of truth. Phase 1 changes intact.
- 2A.2 **Brand messaging refinement** — 35 instances across 34 files moved from passive
  "אנחנו חברת בנייה ומלווה דיירים..." to active positioning:
  - **Urban-renewal pages** → "אנחנו מלווים דיירים בהתחדשות עירונית. עובדים בשבילכם, לא בשביל היזם."
  - **Mamad/construction pages** → "אנחנו חברת בנייה. תכנון, היתרים, ביצוע, הכל אצלנו. חוזה אחד, אחריות אחת..."
- 2A.3 Removed license 3246290 from `ofekImageJsonLd()` caption + description (kept on Person/Organization/Footer/Byline only)
- 2A.4 **ContactForm 3rd field** — segmented service-type buttons (mamad / reinforcement / urban-renewal / other) with default-value pre-selection. 46 calling pages updated to pass canonical keys instead of Hebrew labels.

**Commit:** `3087988` — "Phase 2A: Foundation refinements before mamad pages overhaul"

---

## Phase 2B — Mamad Pages Overhaul 🟡

11 priority pages. Each requires 10-step gold-standard treatment.

### Completed (2 / 11)

#### ✅ `/services/building-mamad` (priority 1, money page)

Already had ~2,500 words, 12 FAQs, 4 detailed mamad types with HowTo schema, ServicePageLayout, FAQ schema (auto via FAQ component). Additions:

- Strengthened opening (`quickAnswer`): cites **תקן 4422** (קונסטרוקציה), **תקן 4570** (סינון), **סעיף 30ב׳** (פטור), deadline **אוקטובר 2026**
- New comparison table (5 rows) at top — AI extraction zone: ממ״ד תקני / 12 מ״ר / טרומי / שיפור מיגון / תת-קרקעי × מחיר × זמן × כשרלוונטי
- New trust-differentiator section with 3 callouts:
  - ⚠️ Warning: מיגונית ≠ private home solution in central Israel
  - 💰 Hidden cost: NBC filtration ₪8K-15K (תקן 4570)
  - 💡 Savings: section 30ב׳ saves 4-6 weeks + ₪15K-25K

Word count after: ~2,900. FAQ schema ✅. Article schema ✅. HowTo schema ✅ (per mamad type).

#### ✅ `/guides/mamad-cost` (priority 1, money page)

Already had 2,700 words, 10 FAQs, 11-section TOC, KeyStats, detailed price tables (sizeRows, impactRows). Already production-grade. Single addition:

- Same 3-callout trust-differentiator block (warning / hidden cost / savings) — replicated from building-mamad with cost-specific framing

Word count after: ~2,800. FAQ + Article + Breadcrumb schema all wired.

### Completed (9 / 9 remaining)

All 11 pages now have the trust-differentiator block (3 callouts: warning + hidden cost + savings) in addition to existing strong content. Specific additions:

3. ✅ `/services/prefab-mamad` — strengthened opening (תקן 4422, base price 90-130K + הובלה עד 30K), new yibil-vs-conventional comparison table (6 rows), 3 callouts (warning: 80K hidden costs / hidden: foundation prep 8-20K / when yibil is right)
4. ✅ `/services/room-reinforcement` — strengthened opening (50-120K + מע״מ, only when ממ״ד not possible, requires פקע״ר approval), new shipur-vs-mamad comparison table (6 rows), 3 callouts (warning: not a substitute / savings comparison / what we do)
5. ✅ `/guides/mamad-process` — added 3 callouts (warning: starting before pikud haoref approval / hidden: 45-day completion notice / savings: סעיף 30ב')
6. ✅ `/guides/home-front-command-approval` — added 3 callouts (warning: one uncertified item rejects whole bakasha / hidden: not every constructor knows mamad / savings: electronic submission cuts 2 weeks)
7. ✅ `/guides/mamad-permit-exemption-2026` — added 3 callouts (warning: October 2026 deadline / hidden: not every house qualifies / savings: 4-6 weeks + 15-25K)
8. ✅ `/guides/choosing-mamad-contractor` — added 3 callouts (warning: cash demand / hidden: insurance protection / savings: 20+ page contract)
9. ✅ `/guides/mamad-mistakes` — added 3 callouts (warning: migunit-as-private-home / hidden: כולל הכל without breakdown / savings: constructor specialization)
10. ✅ `/guides/mamad-vs-shelter` — added 3 callouts (warning: shelter time-to-arrival / hidden: shelter actual condition / savings: 8.2-21% price uplift)
11. ✅ `/guides/mamad-air-filter-system` — added 3 callouts (warning: uncertified system / hidden: 8-15K real cost / savings: maintenance per manufacturer schedule)

For each, the work pattern (proven on pages 1-2 above) is:
1. Read existing content + word count
2. If ≥1500 words and decent FAQ — minimal additions: trust-differentiator block + comparison table + strengthened opening
3. If <1500 words — substantial expansion needed (Step 6 of user's 10-step template)
4. Verify FAQ schema is wired (via FAQ component or manual `faqJsonLd`)
5. Lint + typecheck after each page
6. Commit per batch of 3-4 pages

### Reusable trust-differentiator template

Exact pattern that worked on pages 1-2 (3 articles in `<Section tone="white">` with `grid md:grid-cols-3 gap-5`):

- Red article (warning): мигunit ≠ central Israel + link to `/services/room-reinforcement`
- Amber article (hidden cost): тקan 4570 NBC filter ₪8K-15K
- Emerald article (savings): סעיף 30ב׳ saves 4-6 weeks + ₪15K-25K, link to `/guides/mamad-permit-exemption-2026`

Each article variant should be customised slightly to fit the page's intent (e.g., on `/services/prefab-mamad` the warning becomes "ממ״ד יביל ≠ מיגונית, drop the savings card or replace with a yibil-specific point).

---

## Phase 2C — New Mamad Pages ⏸

The user's prompt lists 4 "new" pages, but checking the codebase:

| Listed page | Status |
|---|---|
| `/memad/bayit-prati` | ✅ Already exists (and has been refined in Phase 2A.2) |
| `/memad/le-dira` | ⏸ Not built — but `/memad/dira-bekoma` exists with similar scope |
| `/memad/binyan-yashan` | ✅ Already exists |
| `/compare/mamad-vs-hamad` | ⏸ Not built — genuinely new |

Recommendation for next session: confirm with Ofek whether `/memad/le-dira` is meant to differ from `/memad/dira-bekoma`. The genuinely missing page is `/compare/mamad-vs-hamad`.

---

## Files & Components Worth Reusing

- `ServicePageLayout` — high-level layout for `/services/*`. Includes FAQ + Byline + KeyStats hooks.
- `FAQ` component — auto-injects FAQPage schema (uses `faqJsonLd`). No manual schema needed.
- `SchemaArticle`, `SchemaBreadcrumb` — drop-in components.
- `JsonLd` — generic schema injector. Use with `howToJsonLd`, `articleJsonLd`, etc.
- `KeyStats` — hero stat cards with sourcing.
- `ComparisonTable` — when a richer comparison is needed than a plain `<table>`.
- `TrustBlock` — author byline + dates + disclaimer.
- `RelatedLinks` / `RelatedArticles` — internal linking.

---

## Constraints & Hard Rules (don't violate)

1. Never present "מיגונית" as private-home solution in central Israel.
2. Never confuse the 4 protection solutions (ממ״ד תקני / שיפור מיגון / יביל / מיגונית).
3. Never confuse renewal tracks (38/1: 66%, 38/2: 80%, פינוי בינוי: 67% to sue / 100% to execute, חלופת שקד: 80%).
4. Always include exemption deadline: **אוקטובר 2026** for סעיף 30ב׳ (פטור מהיתר).
5. Tekken codes verified: **4422** (קונסטרוקציה), **4570** (סינון אב״כ).
6. License 3246290 in Person/Organization/Footer/Byline ONLY (not in ImageObject anymore).
7. No em-dash (—) in Hebrew copy. Use period or comma.
8. No banned phrases: "במאמר זה", "בהחלט", "אקוסיסטם", "סינרגיה", "הפתרון המוביל", openings with "שאלה מעולה".

---

## Open Questions for Ofek

- Should `/memad/le-dira` be built as a separate page from existing `/memad/dira-bekoma`?
- Confirmation that "247 projects" / "1,800 residents" stats were not meant to be real verifiable claims.
- Google Search Console + Bing Webmaster Tools setup (still pending).
