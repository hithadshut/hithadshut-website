/**
 * Doorway-risk gate for city×service pages.
 *
 * The /areas/[city]/[service] template renders 120 pages (30 cities × 4
 * services) with rotated intro paragraphs. That structure is the textbook
 * doorway-pages pattern that Google's March-2026 update penalizes.
 *
 * Default policy: noindex. A pair is promoted to indexable only after a
 * human pass adds genuinely city-specific content (committee posture,
 * neighborhood building stock, anonymous case study) — not just a longer
 * city name in the prose.
 *
 * Adding a pair here:
 *   1. Confirm the rendered page has real, verifiable, city-specific
 *      content beyond the rotated intro template.
 *   2. Add `"<city-slug>/<service-slug>"` to INDEXABLE_GEO_PAIRS.
 *   3. Re-add the URL to sitemap.ts (currently filtered out by this set).
 *   4. Log the promotion in seo/AREA_PAGES.md.
 */
export const INDEXABLE_GEO_PAIRS = new Set<string>([
  // Empty by default. Promote pairs after content differentiation.
]);

export function isGeoPairIndexable(citySlug: string, serviceSlug: string): boolean {
  return INDEXABLE_GEO_PAIRS.has(`${citySlug}/${serviceSlug}`);
}
