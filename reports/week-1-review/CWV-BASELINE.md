# Core Web Vitals Baseline — 2026-05-14 (T+0)

**Status:** ⚠️ Automatic capture blocked by PSI API daily quota (HTTP 429). Manual data entry required.

## What blocked
PSI v5 unauthenticated calls share a project-wide daily quota with everyone using anonymous access. Quota exhausted before our 12 requests (6 URLs × 2 strategies) could complete.

## Workarounds (Ofek picks one)

### Option A — Manual PSI UI runs (15 min, fastest)
1. Open https://pagespeed.web.dev/
2. Paste each URL below, run mobile + desktop
3. Copy 6 numbers (Performance, LCP, TBT/INP, CLS, FCP, Speed Index)
4. Fill tables below, commit

### Option B — Get PSI API key (5 min setup, 25k req/day)
1. https://console.cloud.google.com/apis/credentials → create API key
2. Add to `.env.local` as `PSI_API_KEY=...`
3. Notify Claude to rerun (key gets appended to PSI URL: `&key=$PSI_API_KEY`)

---

## Thresholds (Google 2026)
- LCP: < 2.5s good | 2.5-4.0s needs improvement | > 4.0s poor
- INP: < 200ms good | 200-500ms needs improvement | > 500ms poor
- CLS: < 0.1 good | 0.1-0.25 needs improvement | > 0.25 poor

---

## Mobile (fill from PSI UI)

| URL | Performance | LCP | INP/TBT | CLS | FCP | Speed Index |
|---|---|---|---|---|---|---|
| / | ___ | ___ | ___ | ___ | ___ | ___ |
| /services/building-mamad | ___ | ___ | ___ | ___ | ___ | ___ |
| /services/prefab-mamad | ___ | ___ | ___ | ___ | ___ | ___ |
| /services/room-reinforcement | ___ | ___ | ___ | ___ | ___ | ___ |
| /compare/mamad-vs-hamad | ___ | ___ | ___ | ___ | ___ | ___ |
| /about/ofek-mazor | ___ | ___ | ___ | ___ | ___ | ___ |

## Desktop (fill from PSI UI)

| URL | Performance | LCP | INP/TBT | CLS | FCP | Speed Index |
|---|---|---|---|---|---|---|
| / | ___ | ___ | ___ | ___ | ___ | ___ |
| /services/building-mamad | ___ | ___ | ___ | ___ | ___ | ___ |
| /services/prefab-mamad | ___ | ___ | ___ | ___ | ___ | ___ |
| /services/room-reinforcement | ___ | ___ | ___ | ___ | ___ | ___ |
| /compare/mamad-vs-hamad | ___ | ___ | ___ | ___ | ___ | ___ |
| /about/ofek-mazor | ___ | ___ | ___ | ___ | ___ | ___ |

---

## After fill: action items
- Any URL with mobile Performance < 80 → Week 2 backlog candidate
- LCP > 2.5s mobile → Week 2 fix priority
- CLS > 0.1 → check above-fold image dimensions and font swap

## Field data (CrUX)
PSI lab data is synthetic. Real-user CrUX field data lives in GSC's "Core Web Vitals" report. Ofek to pull that at T+14 (2026-05-28) for the second checkpoint.
