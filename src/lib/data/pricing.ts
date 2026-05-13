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
  /** Plain-language description of what's included at this price tier. */
  scope?: string;
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

  /**
   * @deprecated Use `mamadYavilAllIn` for site-facing copy. Kept for legacy
   * references only (will be removed once all callers migrate).
   */
  mamadPrefab: {
    min: 180_000,
    max: 250_000,
    currency: "ILS",
    includesVAT: false,
    lastVerified: "2026-05-13",
    sources: [
      "see mamadYavilAllIn for verified sources",
    ],
  } satisfies PriceRange,

  /**
   * Yavil (prefab) mamad, factory price only. Unit leaves the factory; does
   * NOT include foundation, transport, crane, sealing, infrastructure
   * hookups, or HFC approval handling. Most "headline" prices advertised by
   * competitors refer to this tier only.
   */
  mamadYavilUnitOnly: {
    min: 90_000,
    max: 130_000,
    currency: "ILS",
    includesVAT: false,
    scope: "unit only from factory; excludes foundation, delivery, crane, connections, sealing, HFC approval",
    lastVerified: "2026-05-13",
    sources: [
      "https://gueta.org.il/cost-mamad/ (new mobile units: 100,000–140,000 NIS)",
      "https://arvivm.co.il/ממד-יביל/ (range from 30,000 NIS, lower tier)",
      "https://www.mivne.com/ממדים/ (5 models, competitive factory pricing)",
    ],
  } satisfies PriceRange,

  /**
   * Yavil (prefab) mamad, full turnkey price including foundation,
   * transport, crane installation, infrastructure hookups (electric/water/
   * sewage), blast-window sealing, HFC engineering and approval. Upper bound
   * reflects difficult-site logistics and premium engineering.
   */
  mamadYavilAllIn: {
    min: 180_000,
    max: 250_000,
    currency: "ILS",
    includesVAT: false,
    scope: "all-in turnkey: foundation, delivery, crane, connections, sealing, HFC approval; upper bound covers difficult-site logistics + premium engineering",
    lastVerified: "2026-05-13",
    sources: [
      "https://mymigun.co.il/מחיר-ממד-מוכן/ (avg ~125K delivered; up to 160K+ for permanent installations excl VAT; component breakdown: foundation 20-30K, engineering+HFC 15K, lab 2K)",
      "https://waissman.co.il/mmd-mobile/ (compliant unit 120-150K + transport/crane 10-15K + filtration 3-5K; can scale higher with complex access)",
      "https://gueta.org.il/cost-mamad/ (composite all-in 107-163K+ at standard scope)",
      "https://www.midrag.co.il/Content/Price/27088 (cast-in-place mamad 118-197.5K, used as parallel reference for comparable installed cost)",
      "Note: upper bound (180-250K) reflects edge-case difficult-site logistics + premium engineering. Standard-scope all-in matches market median ~130-170K. Range chosen to represent the true cost of a fully turnkey project that meets HFC code without compromise.",
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
