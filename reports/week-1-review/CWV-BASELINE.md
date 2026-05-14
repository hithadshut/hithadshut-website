# CWV Baseline — T+0 2026-05-14 (post-PR#2/#3 merge, pre-PR#4 merge)

**Method:** PSI API v5, authenticated (PSI_API_KEY), mobile + desktop, performance category.

## Thresholds (Google 2026)
- LCP: < 2.5s good | 2.5-4s NI | > 4s poor
- TBT (≈INP proxy): < 200ms good | 200-600ms NI | > 600ms poor
- CLS: < 0.1 good | 0.1-0.25 NI | > 0.25 poor

## Mobile

| URL | Perf | LCP | TBT | CLS | FCP | SI |
|---|---|---|---|---|---|---|
| / | 75 | 4.7 s | 130 ms | 0 | 3.0 s | 3.5 s |
| /about/ofek-mazor | 97 | 2.6 s | 60 ms | 0 | 1.2 s | 1.9 s |
| /pinui-binui/chok-67 | 77 | 2.5 s | 760 ms | 0 | 1.2 s | 4.0 s |
| /pinui-binui/temurot | 89 | 2.3 s | 390 ms | 0 | 1.2 s | 2.6 s |
| /pinui-binui/eravut | 81 | 2.5 s | 460 ms | 0 | 1.8 s | 5.2 s |
| /pinui-binui | 28 | 7.7 s | 1,990 ms | 0 | 6.2 s | 17.7 s |
| /pinui-binui/sarvan | 96 | 2.6 s | 120 ms | 0 | 1.2 s | 2.1 s |
| /pinui-binui/kshishim | 67 | 2.3 s | 1,140 ms | 0 | 2.1 s | 6.1 s |
| /guides/mamad-cost | 99 | 1.8 s | 100 ms | 0 | 1.2 s | 2.0 s |
| /guides/mamad-permit-exemption-2026 | 98 | 2.3 s | 90 ms | 0 | 1.4 s | 2.1 s |
| /guides/home-front-command-approval | 95 | 2.1 s | 240 ms | 0 | 1.1 s | 2.2 s |
| /chalufat-shaked | 97 | 2.5 s | 70 ms | 0 | 1.2 s | 2.2 s |

## Desktop

| URL | Perf | LCP | TBT | CLS | FCP | SI |
|---|---|---|---|---|---|---|
| / | 99 | 0.6 s | 100 ms | 0.001 | 0.3 s | 0.6 s |
| /about/ofek-mazor | 97 | 0.7 s | 140 ms | 0.001 | 0.5 s | 0.9 s |
| /pinui-binui/chok-67 | 99 | 0.4 s | 90 ms | 0 | 0.4 s | 0.7 s |
| /pinui-binui/temurot | 98 | 0.6 s | 110 ms | 0.001 | 0.5 s | 1.1 s |
| /pinui-binui/eravut | 89 | 1.0 s | 220 ms | 0 | 0.8 s | 1.4 s |
| /pinui-binui | 100 | 0.5 s | 80 ms | 0.001 | 0.3 s | 0.9 s |
| /pinui-binui/sarvan | 100 | 0.6 s | 30 ms | 0.001 | 0.3 s | 0.8 s |
| /pinui-binui/kshishim | 92 | 0.5 s | 220 ms | 0 | 0.4 s | 1.1 s |
| /guides/mamad-cost | 99 | 0.5 s | 100 ms | 0.001 | 0.4 s | 0.6 s |
| /guides/mamad-permit-exemption-2026 | 100 | 0.4 s | 50 ms | 0.001 | 0.4 s | 0.7 s |
| /guides/home-front-command-approval | 98 | 0.6 s | 120 ms | 0.001 | 0.5 s | 1.1 s |
| /chalufat-shaked | 98 | 0.5 s | 130 ms | 0 | 0.4 s | 0.7 s |

## Failures (mobile)

Desktop is uniformly excellent (89-100 across all 12 pages). All issues are mobile-specific.

### CRITICAL: /pinui-binui hub
- **Perf: 28** (very poor)
- LCP: 7.7s (POOR — >4s threshold)
- TBT: 1,990ms (POOR — >600ms threshold)
- FCP: 6.2s (NI)
- Speed Index: 17.7s (POOR)
- 4 metrics in NI/POOR. Single page dragging down entire pillar.

### POOR INP-proxy (TBT > 600ms)
- /pinui-binui/chok-67: TBT 760ms
- /pinui-binui/kshishim: TBT 1,140ms

### NI INP-proxy (TBT 200-600ms)
- /pinui-binui/eravut: TBT 460ms
- /pinui-binui/temurot: TBT 390ms
- /pinui-binui/eravut also has Speed Index 5.2s (NI on mobile)

### NI LCP (mobile only)
- /: LCP 4.7s (NI — close to POOR threshold)
- /pinui-binui/kshishim: Speed Index 6.1s

**Action items file:** `reports/cwv-action-items.md`

## Notes
- Lab data (Lighthouse synthetic). For real-user field data (CrUX), pull from GSC's Core Web Vitals report at T+14.
- TBT used as proxy for INP since Lighthouse can't simulate real user interaction.
- Baseline captured 2026-05-14, post-PR#2/#3 merge, pre-PR#4 merge. Re-pull at T+7.
