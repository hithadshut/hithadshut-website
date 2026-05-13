# Active Blockers — Day 3

## PR #3 not merged
- Status: OPEN as of 2026-05-14
- Impact: Blocks Step 3 (IndexNow + GSC ping) per Day 3 mandate ("ship fix BEFORE crawler sees page")
- Workaround: continue with Steps 4–7 in parallel; Step 3 fires immediately after merge

## VERCEL_TOKEN missing
- Status: not set in .env.local
- Impact: cannot run `vercel inspect` for deploy status verification
- Workaround: live-URL HTTP 200 checks substitute (all 6 URLs returned 200 in Step 0)

## PSI API quota exhausted
- Status: HTTP 429 on unauthenticated PSI calls (project-wide shared quota)
- Impact: Step 7 (CWV baseline) cannot run automatically
- Workaround: Ofek runs https://pagespeed.web.dev/ manually for 6 URLs × 2 strategies (15 min) OR provisions a PSI API key
- File ready for manual fill: reports/week-1-review/CWV-BASELINE.md

## GSC API service account
- Status: assumed not yet configured (carried from daily-2026-05-13.md Open Questions)
- Impact: `node scripts/gsc-ping.ts` may fail in Step 3
- Workaround per mandate: log failure, do not stop; Ofek can submit sitemap from GSC UI manually
