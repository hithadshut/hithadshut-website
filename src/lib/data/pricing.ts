/**
 * Single source of truth for price ranges shown across the site.
 * Ranges reflect market data from 2026 verified against the canonical service
 * pages (`/services/building-mamad`, `/services/room-reinforcement`,
 * `/services/prefab-mamad`).
 *
 * To update a range:
 *   1. Change the value here.
 *   2. Update `lastVerified` to today's ISO date.
 *   3. Re-deploy. Every page that imports `PRICING` updates automatically.
 *
 * If a page needs a tighter sub-range (e.g. specific to 9 m² vs 12 m²), use
 * helpers like `formatPriceRange()` below or define an additional entry,
 * but don't hardcode numbers inline.
 */

export type PriceRange = {
  /** Lower bound in ש״ח (NIS), pre-VAT unless `includesVAT` is true. */
  min: number;
  /** Upper bound in ש״ח (NIS), pre-VAT unless `includesVAT` is true. */
  max: number;
  currency: "ILS";
  includesVAT: boolean;
  /** ISO date when the range was last cross-checked against market sources. */
  lastVerified: string;
  /** External references used to validate the range. */
  sources: string[];
};

export const PRICING = {
  /** Standard cast-in-place mamad per Pikud Haoref code 4422. */
  mamadStandard: {
    min: 160_000,
    max: 220_000,
    currency: "ILS",
    includesVAT: false,
    lastVerified: "2026-05-13",
    sources: [
      "midrag.co.il (market survey, 2026 Q1)",
      "kolzchut.org.il/he/בניית_ממ״ד",
      "internal field data, 12 completed projects 2024–2026",
    ],
  } satisfies PriceRange,

  /** Reinforcement of an existing room (door, window, sealing, structural). */
  migunImprovement: {
    min: 40_000,
    max: 150_000,
    currency: "ILS",
    includesVAT: false,
    lastVerified: "2026-05-13",
    sources: [
      "oref.org.il (current approval categories)",
      "internal field data, 8 reinforcement projects 2024–2026",
    ],
  } satisfies PriceRange,

  /** Prefab (yavil) factory-built mamad, delivered and installed on site. */
  mamadPrefab: {
    min: 180_000,
    max: 250_000,
    currency: "ILS",
    includesVAT: false,
    lastVerified: "2026-05-13",
    sources: [
      "manufacturer published price lists, 2026",
      "internal field data, 4 yavil installations 2024–2026",
    ],
  } satisfies PriceRange,
} as const;

/** Format a range like "160,000-220,000 ₪ + מע״מ" for display. */
export function formatPriceRange(range: PriceRange, opts?: { withCurrency?: boolean }): string {
  const withCurrency = opts?.withCurrency ?? true;
  const fmt = (n: number) => n.toLocaleString("en-US");
  const base = `${fmt(range.min)}-${fmt(range.max)}`;
  if (!withCurrency) return base;
  const suffix = range.includesVAT ? "₪ כולל מע״מ" : "₪ + מע״מ";
  return `${base} ${suffix}`;
}
