"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PRICING } from "@/lib/data/pricing";

/**
 * Interactive mamad cost estimator for /guides/mamad-cost.
 *
 * V8 B.2.C: lets a visitor pick (size, build type, region) and receive a
 * specific NIS range plus a CTA prefilled with their selection. In-memory
 * state only (no localStorage, no DB, no analytics ping). All numbers
 * source from PRICING (single source of truth).
 *
 * Region multipliers applied to the base range:
 *   center / Gush Dan: 1.00 (baseline)
 *   Sharon:            0.95
 *   Jerusalem:         1.075
 *   North (kav rishon 1-5km): 1.20 (subsidy disclosed separately)
 *   North (regular):   1.20
 *   South:             0.875
 *
 * Multipliers are illustrative ranges drawn from internal field data and
 * cross-checked against midrag.co.il regional surveys. They are a starting
 * point for a quote, not a binding number; the CTA always sends to /contact.
 */

type BuildType = "standard" | "yavil-unit" | "yavil-allin" | "improvement";
type Region =
  | "merkaz"
  | "sharon"
  | "jerusalem"
  | "tzafon"
  | "tzafon-kav-rishon"
  | "darom";

const BUILD_TYPES: { value: BuildType; label: string; pricingKey: keyof typeof PRICING }[] = [
  { value: "standard", label: "ממ״ד תקני בנייה רגילה (9-12 מ״ר)", pricingKey: "mamadStandard" },
  { value: "yavil-unit", label: "ממ״ד יביל Unit-Only (יחידה מהמפעל בלבד)", pricingKey: "mamadYavilUnitOnly" },
  { value: "yavil-allin", label: "ממ״ד יביל All-In (כולל יסודות, הובלה, חיבורים, אטימה ואישור)", pricingKey: "mamadYavilAllIn" },
  { value: "improvement", label: "שיפור מיגון לחדר קיים", pricingKey: "migunImprovement" },
];

const REGIONS: { value: Region; label: string; multiplier: number; subsidyHint?: string }[] = [
  { value: "merkaz", label: "מרכז / גוש דן", multiplier: 1.0 },
  { value: "sharon", label: "השרון", multiplier: 0.95 },
  { value: "jerusalem", label: "ירושלים", multiplier: 1.075 },
  { value: "tzafon", label: "צפון (מעל 5 ק״מ מהגבול)", multiplier: 1.2 },
  {
    value: "tzafon-kav-rishon",
    label: "צפון, קו ראשון (1-5 ק״מ מהגבול)",
    multiplier: 1.2,
    subsidyHint: "ביישובי קו ראשון בצפון המדינה מסבסדת עד 132,000 ש״ח במסלול \"מימוש עצמי\". הסכום העצמי בפועל נמוך משמעותית.",
  },
  { value: "darom", label: "דרום", multiplier: 0.875 },
];

const fmt = (n: number) => n.toLocaleString("en-US");

export default function MamadCostCalculator() {
  const [buildType, setBuildType] = useState<BuildType>("standard");
  const [region, setRegion] = useState<Region>("merkaz");

  const { lo, hi, subsidyHint, prefillSummary } = useMemo(() => {
    const bt = BUILD_TYPES.find((b) => b.value === buildType)!;
    const base = PRICING[bt.pricingKey];
    const rg = REGIONS.find((r) => r.value === region)!;
    const loVal = Math.round((base.min * rg.multiplier) / 1000) * 1000;
    const hiVal = Math.round((base.max * rg.multiplier) / 1000) * 1000;
    const summary = `${bt.label} | אזור: ${rg.label} | טווח משוער: ${fmt(loVal)}-${fmt(hiVal)} ש״ח`;
    return {
      lo: loVal,
      hi: hiVal,
      subsidyHint: rg.subsidyHint,
      prefillSummary: summary,
    };
  }, [buildType, region]);

  const contactHref = `/contact?utm_source=mamad-cost-calculator&utm_medium=in-page&utm_campaign=memad-domination&note=${encodeURIComponent(prefillSummary)}`;

  return (
    <div
      className="rounded-2xl border-2 border-[var(--color-primary)] bg-white p-6 md:p-8 shadow-[var(--shadow-card)]"
      aria-labelledby="calc-heading"
    >
      <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-2">
        מחשבון מחיר ממ״ד
      </div>
      <h3
        id="calc-heading"
        className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-5"
      >
        כמה זה יעלה לכם? חישוב מהיר
      </h3>

      <div className="space-y-5">
        <fieldset>
          <legend className="block font-bold text-[var(--color-primary)] mb-2">
            סוג הפתרון
          </legend>
          <div className="space-y-2">
            {BUILD_TYPES.map((b) => (
              <label
                key={b.value}
                className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition ${
                  buildType === b.value
                    ? "border-[var(--color-primary)] bg-[var(--color-soft)]"
                    : "border-[var(--color-border)] hover:border-[var(--color-accent)]"
                }`}
              >
                <input
                  type="radio"
                  name="buildType"
                  value={b.value}
                  checked={buildType === b.value}
                  onChange={() => setBuildType(b.value)}
                  className="mt-1"
                />
                <span className="text-[15px] leading-snug text-[var(--color-ink)]">{b.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="block font-bold text-[var(--color-primary)] mb-2">
            אזור גיאוגרפי
          </legend>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value as Region)}
            className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-white text-[15px] focus:border-[var(--color-primary)] focus:outline-none"
          >
            {REGIONS.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </fieldset>
      </div>

      {/* Result block */}
      <div className="mt-6 rounded-xl border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/10 p-5">
        <div className="text-sm font-bold text-[var(--color-accent-dark)] mb-1">
          טווח מחיר משוער (לא כולל מע״מ)
        </div>
        <div className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-2" dir="ltr">
          {fmt(lo)}–{fmt(hi)} ₪
        </div>
        <p className="text-[14px] text-[var(--color-ink)] leading-relaxed mb-0">
          טווח כללי על בסיס נתוני שוק ו-PRICING של התחדשות. המחיר הסופי תלוי בגישת הרכב לאתר, מצב הקרקע, מורכבות חיבורי התשתית, ובמפרט הגמר. הצעת מחיר מחייבת רק אחרי ביקור באתר.
        </p>
        {subsidyHint && (
          <p className="mt-3 text-[14px] text-[var(--color-primary)] font-bold leading-relaxed mb-0">
            {subsidyHint}
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href={contactHref}
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[var(--color-primary)] text-white font-bold text-lg shadow-[var(--shadow-cta)] hover:bg-[var(--color-primary-2)] transition"
        >
          קבלו הצעת מחיר מותאמת
        </Link>
        <a
          href="tel:+972546712130"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold text-lg hover:bg-[var(--color-soft)] transition"
        >
          חיוג ישיר
        </a>
      </div>
      <p className="mt-3 text-[12px] text-[var(--color-muted)] text-center">
        ייעוץ ראשוני ללא עלות וללא התחייבות. אופק מזור, מתווך מקרקעין רישיון 3246290.
      </p>
    </div>
  );
}
