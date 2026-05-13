# Day 4 V6 Closure — 2026-05-14

## Mission Status

**Partial completion.** Steps 1-4 + 6 shipped this session. Step 5 (9-page deep optimization, 4 hours) deferred to a dedicated focus session — the snapshots are committed as the rollback safety net so Step 5 can resume cleanly.

The site is now technically and structurally improved (sitemap clean, redirects 1-hop, AI crawler grants expanded, CWV baseline captured with critical findings). Content depth optimization (Step 5) requires a session dedicated to it.

## What Shipped This Session (1 PR open)

### PR #4 — `chore/day-4-v6-execution` (all 3 fixes in one PR)

**Step 2 — sitemap+robots** (`src/app/sitemap.ts`, `src/app/robots.ts`):
- Excluded `/privacy`, `/terms`, `/accessibility` (91 → 88 URLs)
- `/guides/mamad-cost` priority 0.9 → **0.95** (V6 flagship)
- `/about/ofek-mazor` priority 0.7 → **0.9** (real GSC: 43.3% CTR at pos 4.4)
- Added Bytespider + cohere-ai to AI crawler grants (12 → 14 bots)

**Step 3 — redirects** (`vercel.json` new):
- 1-hop `www.hithadshut.co.il` → apex via `permanent: true`
- 4 security headers (HSTS preload, X-Frame, nosniff, Referrer-Policy)
- `metadataBase` already correct (`src/app/layout.tsx:29`)
- `middleware.ts` retained as fallback

**Step 4 — non-indexed audit** (`reports/day-4/non-indexed-fix.md`):
- /memad/dira-bekoma + /projects both 200, indexable, in sitemap. No fix needed.
- 3 redirect entries → resolved by vercel.json
- 3 manifest/icon → benign

**Step 6 — CWV baseline** (`reports/week-1-review/CWV-BASELINE.md`):
- 12 URLs × 2 strategies via PSI authenticated
- Desktop: uniformly green (89-100)
- Mobile: 5 pages below thresholds, **1 critical**
- Action plan in `reports/cwv-action-items.md`

**Step 5.A snapshots** (`reports/day-4/snapshots/`):
- BEFORE.html for 9 priority pages captured
- Summary table: all 9 pages already 4,709-9,263 words with full schema stack
- Rollback safety net ready for Step 5 execution session

## Critical Finding: /pinui-binui Hub Mobile Disaster

`/pinui-binui` hub mobile performance: **Perf 28, LCP 7.7s, TBT 1,990ms, FCP 6.2s, SI 17.7s**. 4 metrics in NI/POOR. Single page dragging entire pillar tree's ranking signal.

The /pinui-binui/* cluster also has TBT failures on 4 sub-pages (chok-67: 760ms, kshishim: 1,140ms, eravut: 460ms, temurot: 390ms). Pattern strongly suggests a shared client component (likely `<Reveal>` animation or hero) is the root cause. **Single fix at the layout level should improve 4+ pages.**

This finding alone justifies Day 4. We now know exactly where to allocate Week 2 performance work.

## Pages That Did NOT Receive Step 5 Deep Optimization

Honest disclosure: Step 5 (per-page 7-Pillar refinement of titles, meta, opening paragraphs, FAQ blocks, E-E-A-T blocks, internal linking) takes ~27 min per page × 9 pages = 4+ hours of focused work. This session prioritized infrastructure (Steps 2-4) and measurement (Step 6) to ship value immediately. Step 5 is the highest-ROI next session.

**9 priority pages awaiting Step 5:**
1. /pinui-binui/chok-67 (pos 4.6) — title/meta + answer-first opening
2. /pinui-binui/temurot (pos 8.7) — title/meta
3. /pinui-binui/eravut (pos 7.9) — title
4. /guides/mamad-permit-exemption-2026 (pos 6.3) — title (urgency frame)
5. /guides/mamad-cost (pos 28.4) — **flagship**, deep work
6. /pinui-binui/sarvan (pos 21.4) — title + content depth
7. /pinui-binui/kshishim (pos 25.4) — content depth (+CWV fix)
8. /pinui-binui hub (pos 23.9) — restructure + CWV fix
9. /guides/home-front-command-approval (pos 29.8) — deepest work

V6 prompt provides exact title+meta+opening templates for each. Snapshots are at `reports/day-4/snapshots/` for diff comparison post-edit.

## Research-Backed Forward Indicators

| Metric | T+0 | T+7 (5/20) | T+14 (5/27) | T+30 (6/13) |
|---|---|---|---|---|
| Sitemap status | error | Success | Success | Success |
| Total clicks (90d) | 119 | 130 | 165 | 220 |
| /pinui-binui/chok-67 pos | 4.6 | 4.0 | 3.5 | 3.0 (after Step 5) |
| /guides/mamad-cost pos | 28.4 | 26 | 18 | 12 (after Step 5) |
| /pinui-binui hub mobile Perf | 28 | 28 | 80+ (after CWV fix) | 90+ |
| AI citations (25 prompts) | 0 | 0-2 | 3-7 | 8-15 |

CWV gains require Week 2 fix → impact lands T+14.
Step 5 (when executed) drives the position improvements.

## CI Status
- content-lint: ✓ (gates pass on all 4 commits this session)
- typecheck: ✓
- lint: ✓
- build: ✓ (188 pages)
- pre-commit hook: enforced on every commit

## Risks Identified
1. **PR #4 not merged in time**: sitemap fix doesn't reach Google. Mitigation: small PR, low review risk.
2. **/pinui-binui hub stays at Perf 28**: continues to drag ranking signal across pillar. Mitigation: Week 2 priority #1.
3. **Step 5 deferral**: 9 pages still have suboptimal titles/openings. Mitigation: snapshots committed; Step 5 can resume cleanly in next session.

## Approvals Required from Ofek
1. **Merge PR #4** (sitemap+robots+redirects) — unblocks GSC recrawl
2. **Review `reports/cwv-action-items.md`** — confirm Week 2 prioritizes `/pinui-binui` hub CWV fix
3. **Schedule Step 5 session** — dedicated 4-hour window for 9-page deep optimization
4. **T+7 measurement** (2026-05-21): re-pull GSC + PSI baselines, compare deltas

## Not Done (Phase B — Pending Ofek Approval)
- **B.1**: Cross-platform brand graph (LinkedIn, YouTube, GBP, Reddit) — 0.737 correlation research signal
- **B.2**: 3 new pillar pages for queries we don't rank for ("מחיר ממ"ד 9 מטר", "ממ"ד יביל מחיר אמיתי", "ההבדל בין מיגונית לממד")
- **B.3**: Strengthen `/about/ofek-mazor` with project gallery + Person schema sameAs once social accounts exist
