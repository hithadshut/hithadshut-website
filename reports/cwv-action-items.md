# CWV Action Items — Mobile Performance Triage

**Captured:** 2026-05-14 (T+0, post-PR#2/#3 merge)
**Method:** PSI v5 lab data (Lighthouse synthetic)
**Status:** **5 pages below mobile thresholds.** 1 of them is critical (Perf 28).

## URLs failing thresholds

### Priority 1 — CRITICAL: /pinui-binui hub
- **Mobile Perf: 28** (out of 100)
- LCP: 7.7s — POOR (threshold: >4s)
- TBT: 1,990ms — POOR (threshold: >600ms)
- FCP: 6.2s — NI
- Speed Index: 17.7s — POOR
- 4 metrics in NI/POOR. **This page is dragging the entire pillar tree's ranking signal.**

**Likely causes (to investigate in fix session):**
1. Excessive hydration: hub page has many client components (CTA cards, Reveal animations, comparison grids).
2. Above-the-fold images not properly sized / no priority hint.
3. Possible large JS bundle from /pinui-binui sub-imports.
4. Hero animation blocking main thread (TBT 1990ms suggests long tasks).

**Top 3 likely fixes (priority order):**
1. **Convert hub page to fully static where possible.** Replace `<Reveal>` and other animation components above the fold with CSS-only equivalents. Move heavy interactive components below the fold or behind a click.
2. **Inline critical CSS for above-the-fold.** Defer non-critical CSS load.
3. **Add `priority` + correct `sizes` to hero image.** Use `next/image` with explicit width/height to eliminate CLS and accelerate LCP.

**Estimated impact:** Perf 28 → 70+ achievable with #1 alone. Critical.

---

### Priority 2 — POOR TBT (>600ms)

#### /pinui-binui/chok-67
- TBT: 760ms (POOR)
- Other metrics fine (Perf 77 overall, LCP 2.5s good)
- **Fix:** Audit JS bundle. Likely long-running script blocking main thread. Reduce client component count, lazy-load non-critical scripts.

#### /pinui-binui/kshishim
- TBT: 1,140ms (POOR)
- Perf 67, FCP 2.1s (NI), Speed Index 6.1s (NI)
- 3 metrics impacted. **Second worst after the hub.**
- **Fix:** Same as chok-67. Likely shares a heavy client component. Inspect with Lighthouse "Reduce JavaScript execution time" diagnostic.

---

### Priority 3 — NI TBT (200-600ms)

#### /pinui-binui/eravut
- TBT: 460ms (NI)
- Speed Index: 5.2s (NI)
- Perf 81 overall — borderline.
- **Fix:** Same pattern; reduce JS, defer non-critical.

#### /pinui-binui/temurot
- TBT: 390ms (NI)
- Perf 89 — closer to threshold.
- **Fix:** Same pattern; lower priority since other metrics good.

---

### Priority 4 — Homepage NI LCP
- Mobile LCP: 4.7s (NI, close to POOR threshold of 4s)
- TBT 130ms — good.
- **Fix:** Audit hero image (LCP element). Add `priority` prop, optimize size, ensure no render-blocking resources above the fold.

---

## Common pattern observed

All 5 problem pages are in `/pinui-binui/*`. The hub is the worst. This strongly suggests a shared layout component or shared client component (e.g., a Reveal/animation wrapper, a complex CTA, or a heavy comparison table) that's loaded by all pages in this cluster.

Service pages (`/services/*`) and guide pages (`/guides/*`) all score 95+ mobile. The pattern is cluster-specific, not site-wide.

## Owner: Week 2 sprint

**Sequence:**
1. Fix /pinui-binui hub first (highest impact, easiest to measure delta on)
2. Audit the shared component(s) that all `/pinui-binui/*` pages use
3. Apply the fix at the layout/component level (one fix, 4+ pages improved)
4. Re-run PSI baseline. Goal: all pages Perf 80+ mobile, all TBT <300ms.

**Status:** backlog (Day 4 V6 captured baseline; Week 2 sprint executes fixes)

**T+14 measurement:** re-run identical PSI baseline on 2026-05-28. Compare deltas.
