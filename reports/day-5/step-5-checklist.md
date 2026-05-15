# Step 5 Checklist — 9 Pages, Priority Order

Source: V6 Layer 9 + real GSC opportunity gap. One line per page. Sorted by impact-per-effort: pages closer to top 5 first (small lift = big traffic win), then deeper-work pages.

| # | Page | GSC pos | Imp | Top job | Snapshot ready |
|---|---|---|---|---|---|
| 1 | `/pinui-binui/chok-67` | 4.6 | 208 | Title + meta (already pos 4 — needs CTR fix, not depth) | `pinui-binui-chok-67-BEFORE.html` ✓ |
| 2 | `/pinui-binui/temurot` | 8.7 | 232 | Title + meta + answer-first opening | `pinui-binui-temurot-BEFORE.html` ✓ |
| 3 | `/pinui-binui/eravut` | 7.9 | 120 | Title only — page is solid otherwise | `pinui-binui-eravut-BEFORE.html` ✓ |
| 4 | `/guides/mamad-permit-exemption-2026` | 6.3 | 91 | Title (urgency: "פוקעת 25.10.2026") + opening | `guides-mamad-permit-exemption-2026-BEFORE.html` ✓ |
| 5 | `/guides/mamad-cost` ⚑ flagship | 28.4 | 84 | Answer-first opening (4 scenarios) + 12 FAQs + Pillar 6 freshness | `guides-mamad-cost-BEFORE.html` ✓ |
| 6 | `/pinui-binui/sarvan` | 21.4 | 98 | Title + answer-first opening + content depth | `pinui-binui-sarvan-BEFORE.html` ✓ |
| 7 | `/pinui-binui/kshishim` | 25.4 | 102 | Title + 70+/75+ rights depth + (CWV will fix mobile separately) | `pinui-binui-kshishim-BEFORE.html` ✓ |
| 8 | `/pinui-binui` (hub) | 23.9 | 129 | Restructure + answer-first + (CWV fixed by PR #5) | `pinui-binui-BEFORE.html` ✓ |
| 9 | `/guides/home-front-command-approval` | 29.8 | 206 | Deepest work: title + opening + process detail + 14-day timeline | `guides-home-front-command-approval-BEFORE.html` ✓ |

## Execution per page (~27 min)
Follow V6 Layer 9 sub-steps 5.A through 5.I:
- 5.A Snapshot already captured (skip — done in Day 4)
- 5.B SERP intent via WebSearch (3 min) — save to `reports/day-4/serp-intent/<slug>.md`
- 5.C Locate source file (1 min)
- 5.D Title + meta rewrite per V6 templates (3 min)
- 5.E Answer-first opening 50-100 words (5 min) — per V6 templates
- 5.F FAQ block 8-12 Qs × 40-60 word answers (5 min)
- 5.G Schema verification: FAQPage=1, Article=1, Breadcrumb=1 (3 min)
- 5.H E-E-A-T byline if missing (2 min)
- 5.I Internal links audit ≥5 inbound (2 min)
- Commit per page (atomic save state)

## Hard rules during Step 5
- **Snapshot is the rollback safety net** — diff against `reports/day-4/snapshots/<slug>-BEFORE.html` after each page to verify nothing critical was lost
- No em-dashes (pre-commit will block — confirmed working)
- Every price number from `PRICING.*` (single source of truth)
- Every regulatory date from CLAUDE.md verified facts
- Cite source inline ("לפי אתר כל זכות..." / "על פי תקנות פיקוד העורף...")

## Time budget
9 pages × 27 min = 4 hours focused work. Realistic: 4.5–5h with breaks and verification.
Recommended: dedicated 5-hour session, no other tasks interleaved.

## After Step 5: re-measure
- IndexNow ping all 9 URLs immediately after merge
- T+7: re-pull GSC positions, compare vs baseline
- T+14: re-run 25-prompt AI citation test, compare vs baseline (currently 0/25)
- T+21: target — 3-5 of these 9 pages in Google top 5

## Order rationale
- Pages 1–4: near top of page 2 (positions 4–9) — small position lifts compound CTR sharply
- Page 5: flagship; biggest depth investment but also biggest long-term ranking play
- Pages 6–9: deeper from pos 20+; need both title fix AND content work, harder to move quickly
