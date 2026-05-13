import Link from "next/link";
import { PRICING } from "@/lib/data/pricing";

/**
 * HomeQuickAnswer - direct-answer block surfaced below the hero on /.
 * 60–80 words covering: cost, time, permit-exemption window, and the
 * standards (4422 / 4577) that separate a real ממ״ד from a strong room.
 *
 * AI-citation optimized: opens with the figure, names the regulation,
 * and links to the canonical guides. Does not modify the hero or the
 * services grid - sits as its own band between them.
 */
export default function HomeQuickAnswer() {
  return (
    <section
      aria-labelledby="home-quick-answer-heading"
      className="bg-soft py-14 md:py-16"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-card)] p-6 md:p-8"
          style={{ borderInlineStartWidth: 6, borderInlineStartColor: "var(--color-accent)" }}
        >
          <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
            בקצרה
          </div>
          <h2
            id="home-quick-answer-heading"
            className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-4"
          >
            בניית ממ״ד בישראל 2026: תמונה מהירה
          </h2>
          <p className="text-base md:text-[17px] text-[var(--color-ink)] leading-relaxed mb-3">
            <strong>בנייה של ממ״ד תקני לבית פרטי בישראל ב-2026 עולה {PRICING.mamadStandard.min.toLocaleString("en-US")}–{PRICING.mamadStandard.max.toLocaleString("en-US")} ₪ + מע״מ ולוקחת 2–4 חודשים</strong>{" "}
            מתכנון ועד מסירה. במסגרת{" "}
            <Link href="/guides/mamad-permit-exemption-2026" className="font-bold text-[var(--color-primary)] underline">
              הוראת חרבות ברזל
            </Link>{" "}
            (תוקפה הצפוי עד נובמבר 2026), בתים פרטיים עד 2 קומות זכאים למסלול פטור מהיתר. אישור פיקוד העורף ניתן עד 14 ימי עבודה. דלת הדף, מערכת סינון, חישוב סטטי וקירות בעובי תקני: חובה.
          </p>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            לקריאה מעמיקה:{" "}
            <Link href="/guides/mamad-cost" className="font-bold text-[var(--color-primary)] hover:underline">
              מחיר ממ״ד מפורט
            </Link>
            {" · "}
            <Link href="/guides/mamad-vs-shelter" className="font-bold text-[var(--color-primary)] hover:underline">
              ממ״ד מול מקלט בבניין
            </Link>
            {" · "}
            <Link href="/guides/mamad-air-filter-system" className="font-bold text-[var(--color-primary)] hover:underline">
              מערכת אוורור וסינון
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
