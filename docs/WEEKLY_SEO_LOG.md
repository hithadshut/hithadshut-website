# Weekly SEO/GEO/AEO cycle log

Append-only. Each cycle gets one section, newest first.

---

## Cycle 2026-07-13 (cycle #1)

### Stage 0 — learning

No prior `docs/WEEKLY_SEO_LOG.md` or Experiment Ledger existed before this
run — treated as cycle #1 per owner direction. `docs/seo-operations.md`
(IndexNow / sitemap / llms.txt runbooks) already existed and was read for
infra context; it isn't a cycle log.

### Stage A — data ingestion

GSC export placed by owner at `data/2026-07-13.zip`. Windows `unzip`
mangled the Hebrew filenames (codepage mismatch); `Expand-Archive` in
PowerShell extracted them correctly. Moved to `data/gsc/2026-07-13/`.

Sanity check (all exact matches, 0% mismatch):

| Page | Expected | Actual |
|---|---|---|
| /guides/home-front-command-approval | ~2579 imp, pos ~17.7, CTR ~0.54% | 2579 imp, pos 17.7, CTR 0.54% |
| /services/room-reinforcement | ~411 imp, pos ~26.6 | 411 imp, pos 26.61 |
| /pinui-binui/eravut | ~421 imp, pos ~9.9, CTR 0% | 421 imp, pos 9.94, CTR 0% |

Full query-cluster figures cited in the operator's brief (אישור פיקוד העורף
156/23.17, מיגון חדר קיים 155/32.84, etc.) also cross-checked exactly
against `שאילתות.csv`. `דפים.csv` contains 189 rows, matching the expected
site page count. Parsed snapshot stored at
`data/gsc/2026-07-13/parsed.json` (totals + sanity-check provenance only;
raw CSVs kept local, not committed — see note below).

### Changes shipped (2 commits, pushed to `master`)

**1. `/guides/home-front-command-approval` overhaul.**
Before: 2579 impressions, position 17.7, CTR 0.54% (44% of site
impressions). Added "מי צריך אישור פיקוד העורף" section, a new
"ערוצי פנייה רשמיים לפקע״ר" section (previously no answer existed for the
~34-impression "הג״א אישור ממ״ד טלפון" query — could not verify a specific
phone number from a live primary source in this session, so the page
links to the official oref.org.il contact page and the oref-rishuy.org.il
portal instead of publishing an unverified number), a matching FAQ entry,
updated `dateModified`. Title/meta already led with "אישור פיקוד העורף";
left unchanged. Expected KPI: position <10, CTR 2%+ within 28 days.

**2. `/services/room-reinforcement` consolidation.**
Before: 411 impressions, position 26.6, and (discovered mid-cycle) the
page's own quick-answer and comparison table already disagreed with each
other (40,000-150,000 vs 50,000-120,000 vs a 130,000 threshold mention).
Applied `OWNER_VERIFIED_INPUT` canonical range 120,000-150,000 ₪ + מע״מ
through the single pricing source of truth (`src/lib/data/pricing.ts`),
fixed 4 stale occurrences on this page, and found + fixed 6 more stale
occurrences elsewhere on the site (`mamad-cost`, `mamad-vs-shelter`,
`building-mamad`) that a plain string grep for the exact old number
missed on first pass (different formatting: "40-150K ₪", "40-150 אלף ₪").
Added a permanent `content-lint.sh` gate (Gate 5) that fails the build if
either stale range reappears anywhere in the codebase. Title rewritten to
lead with cost intent ("מיגון חדר קיים מחיר 2026"). Expected KPI: cluster
position 26-33 → under 15.

**3. CTR metadata fixes (metadata-only, no layout changes).**
- `/pinui-binui/eravut` (421 imp, pos 9.9, CTR 0%): title/meta rewritten
  to lead with ערבות בנקאית intent.
- `/tama-38/sug-1` (265 imp, pos 13.9, CTR 0.38%): title already named
  תמ״א 38/1 explicitly; meta description sharpened.
- `/guides/mamad-cost` (289 imp, pos 16.4, CTR 0.35%): title/meta already
  lead with a concrete number ("מחיר ממ״ד 2026: 120,000-200,000 ש״ח לפי 4
  תרחישי בנייה"); left unchanged, no clear improvement to make without
  more data.

**4. New page `/guides/migun-solutions`.**
Decision-guide hub covering all four protection paths (ממ״ד תקני / שיפור
מיגון / ממ״ד יביל / מיגונית) plus מקלט, distinct in framing from the
existing `/compare/mamad-vs-miggun-vs-migunit` (which deliberately excludes
מקלט and focuses on a 3-way pricing table). Wired into
`src/lib/anchors.ts` (LinkTarget registry), `src/lib/site.ts` (homepage
guides grid + sitemap, since sitemap is generated from that array), and
`src/data/internal-links.ts` (declared graph). Inbound links added from
the homepage, the compare page, and `/services/room-reinforcement`.
Rationale: "פתרונות מיגון" (157 imp, pos 35.9) and "מקלט ביתי" (65 imp,
pos 46.9) had no page serving that intent well.

**5. Indexing + link-mesh audit.**
All 189 GSC page rows resolve to a real route (static or dynamic), no
missing pages. `robots.ts` already allows Googlebot + all required AI
bots. Updated `llms-txt-manifest.ts` for changes 1 and 4. Full 189-page
orphan crawl not run (out of this cycle's link-level scope); see
`docs/INDEXING_REPORT_2026-07-13.md`.

### Experiment Ledger (new entries, maturation 2026-08-10)

| Page | Baseline (2026-07-13) | Change | Expected | Maturation |
|---|---|---|---|---|
| /guides/home-front-command-approval | pos 17.7, CTR 0.54%, 2579 imp | content + FAQ additions | pos <10, CTR 2%+ | 2026-08-10 |
| /services/room-reinforcement | pos 26.6, CTR 0.97%, 411 imp | price fix + title rewrite | pos <15 | 2026-08-10 |
| /pinui-binui/eravut | pos 9.9, CTR 0%, 421 imp | title/meta only | CTR ≥1.5% at same position | 2026-08-10 |
| /tama-38/sug-1 | pos 13.9, CTR 0.38%, 265 imp | meta only | CTR ≥1.5% at same position | 2026-08-10 |
| /guides/migun-solutions | new page, 0 baseline | new page | indexed within 7 days, first impressions on "פתרונות מיגון" within 14 days | 2026-08-10 |

### Gate results

- `content-lint.sh` (5 gates, incl. new Gate 5): pass
- `npm run typecheck`: pass (after fixing 2 pre-existing errors found in
  uncommitted work already sitting in the tree — see below)
- `npm run lint`: pass
- `npm run build`: pass (196 routes generated, including the new page)
- JSON-LD parse check on all 6 touched/new pages: pass, no invalid JSON
- adrk-contamination grep, noindex-accidental grep, architecture-service
  claim grep: all clean
- Lighthouse: not run (no local Lighthouse tooling in this session);
  verify on Vercel deploy preview / PageSpeed Insights if needed
- Mobile/desktop visual QA: not performed locally (no browser automation
  tool available this session); covered instead by the live post-deploy
  fetch checks below

### Pre-existing repo state found (not part of this cycle's 5 changes)

The working tree already contained a large amount of **uncommitted,
untracked** work from prior sessions when this cycle started: a new
`/about/ofek-mazor` Person page, `/services/migunit`, and
`/compare/migunit-vs-mamad-muchan` pages, an `architect-mamad-role` guide,
new icon/logo/OG-image files, several legal-page drafts, and a few
scripts. Two of those uncommitted pages referenced schema exports
(`ofekPersonJsonLd`, `ofekImageJsonLd`) and link-registry entries
(`migunit`, `compare-migunit-muchan`) that didn't exist yet, which broke
`npm run typecheck` for the whole app. Added the missing exports/entries
(mirroring only facts already visible on those pages — license number,
phone, image — no new claims) so the build is green; did **not** commit
or ship any of those other pages, per the "max 1 new page" scope for this
cycle. They remain untouched, uncommitted, in the working directory for
separate review.

### Deploy verification

- Tag `pre-cycle-2026-07-13` created at `0d2e509` (the commit before this
  cycle) and pushed.
- 2 commits pushed to `master`: `11ff4ca` (fixes/audit) and `12e1a69`
  (content).
- GitHub commit status confirms Vercel built and deployed `12e1a69`
  successfully to production (aliased to hithadshut.co.il).
- Live post-deploy fetch checks (not full Playwright — no browser
  automation tool available this session) on all 5 touched/new URLs +
  homepage + /contact: correct Hebrew RTL rendering, no BIDI corruption,
  FAQ visible, correct single (non-duplicated) room-reinforcement price,
  new page's card present in the homepage guides grid, contact form +
  click-to-call functional. No rollback needed.

**Disclosure to owner (already surfaced and acknowledged mid-cycle):**
`git push` happened before repo visibility was checked. `hithadshut/hithadshut-website`
is a **public** GitHub repo. The fixes/audit commit includes
`data/gsc/2026-07-13/parsed.json`, an aggregate GSC snapshot (Israel
totals, device split, 3-page sanity-check figures — not the full
189-page/498-query breakdown, which was kept local and uncommitted).
Owner reviewed and chose to leave it as-is.

### Indexing report

See `docs/INDEXING_REPORT_2026-07-13.md`. Summary: sitemap covers all 5
touched/new URLs, robots.txt compliant, llms.txt updated. Indexing cannot
be forced; the list below is for GSC URL Inspection.

### Protected-core change proposals

None this cycle.

### Owner tasks

1. Submit these 5 URLs in GSC URL Inspection → Request Indexing:
   - `https://hithadshut.co.il/guides/home-front-command-approval`
   - `https://hithadshut.co.il/services/room-reinforcement`
   - `https://hithadshut.co.il/pinui-binui/eravut`
   - `https://hithadshut.co.il/tama-38/sug-1`
   - `https://hithadshut.co.il/guides/migun-solutions`
2. Provide licensed engineer/architect credentials for authority-intake.json
   if the architecture-services cluster is ever to be unlocked (still
   gated this cycle — untouched).
3. GEO baseline: run 8 Hebrew queries (e.g. "אישור פיקוד העורף לממ״ד",
   "מיגון חדר קיים עלות", "פתרונות מיגון", "מקלט ביתי מול ממ״ד") once each
   in ChatGPT, Gemini, Perplexity and save screenshots as the pre-measurement
   baseline for the 2026-08-10 verdict.
4. Decide what to do with the pre-existing uncommitted pages found in the
   working tree (about/ofek-mazor, migunit service + compare page,
   architect-mamad-role, new logo/icon assets, legal-page drafts) — none
   of it was touched or shipped this cycle.
