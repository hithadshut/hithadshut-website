/**
 * Doorway-risk gate for city×service pages - OVERRIDDEN 2026-07-17.
 *
 * The /areas/[city]/[service] template renders 112 pages (28 cities × 4
 * services) with rotated intro paragraphs. That structure is the textbook
 * doorway-pages pattern that Google's March-2026 update penalizes.
 *
 * Original policy (2026-05-03 - 2026-07-17): noindex by default, promoted
 * per-pair only after a human pass added genuinely city-specific content.
 * Only the 8 pairs below were ever promoted under that policy.
 *
 * 2026-07-17 owner decision (weekly cycle, docs/WEEKLY_SEO_LOG.md "Cycle
 * 2026-07-17"): index all pairs immediately, overriding the promotion
 * gate. This was surfaced to the owner as a real doorway-pages risk
 * (this is not a bug fix - the original gate was working as designed)
 * before the override was confirmed. `INDEXABLE_GEO_PAIRS` is kept below
 * as the historical record of which pairs have hand-authored
 * `geoIntros`/`extendedNotes` content (the page template still branches
 * on `isGeoPairIndexable()` to decide whether to render that richer
 * content vs. the rotated generic intro); it no longer gates indexing.
 *
 * Adding a pair's hand-authored content:
 *   1. Confirm the rendered page has real, verifiable, city-specific
 *      content beyond the rotated intro template.
 *   2. Add `"<city-slug>/<service-slug>"` to INDEXABLE_GEO_PAIRS so its
 *      geoIntros/extendedNotes render.
 *   3. Log the promotion in seo/AREA_PAGES.md.
 */
export const INDEXABLE_GEO_PAIRS = new Set<string>([
  // Promoted 2026-05-03 after content-lead pair-by-pair sign-off.
  // Each pair has hand-authored geoIntros + city extendedNotes rendering
  // via src/app/areas/[city]/[service]/page.tsx (commit 0c8d1c0).
  "ramat-gan/building-mamad",
  "ramat-gan/room-reinforcement",
  "givatayim/building-mamad",
  "givatayim/room-reinforcement",
  "herzliya/building-mamad",
  "herzliya/prefab-mamad",
  "modiin/room-reinforcement",
  "modiin/building-mamad",
]);

/**
 * Always true as of 2026-07-17 (owner override, see file header). Kept
 * as a function rather than inlined at call sites so the override is a
 * one-line revert if the owner reinstates the promotion gate.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- signature kept so callers (areas/[city]/[service]/page.tsx, sitemap.ts) don't need edits if this reverts.
export function isGeoPairIndexable(citySlug: string, serviceSlug: string): boolean {
  return true;
}
