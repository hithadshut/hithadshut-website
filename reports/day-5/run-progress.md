# 9-Page Money Run + Pre-Merge Verification — COMPLETE

Started: 2026-05-14
Branch: `feat/step-5-9-page-money-run`
Status: **all 4 verification tasks complete + 9 pages optimized + SchemaArticle credential fix**

## 9-page run
- [x] 1. /pinui-binui/chok-67
- [x] 2. /pinui-binui/temurot
- [x] 3. /pinui-binui/eravut
- [x] 4. /guides/mamad-permit-exemption-2026
- [x] 5. /guides/mamad-cost (FLAGSHIP)
- [x] 6. /pinui-binui/sarvan
- [x] 7. /pinui-binui/kshishim
- [x] 8. /pinui-binui (hub)
- [x] 9. /guides/home-front-command-approval

## Pre-merge verification (4 tasks from Ofek's review)
- [x] **Task 1**: PSI variance test — 3 runs, 5-min gaps. Gate PASSES (3/3 ≥70, 2/3 LCP<4s, 0 below 50). `reports/day-5/psi-variance-test.txt`
- [x] **Task 2**: Schema validation — found license missing on 6 pages, fixed SchemaArticle component. All 9 pages now have license 3246290. `reports/day-5/schema-validation.txt`
- [x] **Task 3**: AI baseline T+0 — Bing proxy 0/25 (floor); Ofek manual worksheet ready for 4 engines × 25 prompts. `reports/day-5/ai-tests/`
- [x] **Task 4**: 3 deferred pages got minimum viable answer-first boxes (sarvan, kshishim, hub) + hub got 7-link contextual sub-page list.

## PSI variance summary
| Run | Score | LCP | TBT | Gate |
|---|---|---|---|---|
| 1 | 94 | 2.4s | 190ms | ✓ pass |
| 2 | 76 | 4.7s | 140ms | borderline (LCP just over 4s) |
| 3 | 74 | 2.6s | 910ms | ✓ score pass, TBT poor |

Verdict: passes V7 gate, but variance suggests PR #5 (Reveal CWV fix) still wanted for consistency.

## Schema validation summary (all 9 pages, post-fix)
| Schema | Status |
|---|---|
| Article=1 | ✓ all 9 |
| FAQPage=1 | ✓ all 9 |
| BreadcrumbList≥1 | ✓ all 9 |
| Person≥1 | ✓ all 9 (2 each) |
| License 3246290 | ✓ all 9 (was 0 on 6) |

## AI baseline T+0
- Bing proxy: 0/25 (floor, consistent with Day 3 Google baseline)
- Ofek manual worksheet: 100 cells, ready for execution

## Status for merge
- PR #5 (Reveal CWV): still open, recommended to merge first
- PR #6 (this branch): 16+ commits, ready for review

## Commits on branch (most recent first)
- 48dea32: Task 2 — SchemaArticle license fix
- d5aadbb: Task 1 — PSI variance test (gate passed)
- 83374fb: Task 3 — AI baseline T+0 + Ofek worksheet
- dcadda6: Task 4C — /pinui-binui hub answer-first + sub-page links
- cdafd83: Task 4B — kshishim answer-first box
- 97e8f5b: Task 4A — sarvan answer-first box
- c28445e: tracker update
- 23961ee: Page 9 home-front-command-approval
- 2c1cf65: Page 8 pinui-binui hub
- 79b4b95: Page 7 kshishim
- d3a3e8a: Page 6 sarvan
- f8edc77: Page 5 mamad-cost FLAGSHIP
- 2e5ad3f: Page 4 mamad-permit-exemption-2026
- b9b0e76: Page 3 eravut
- 4fdb0f2: Page 2 temurot
- 746d796: Page 1 chok-67
- a079361: branch init
