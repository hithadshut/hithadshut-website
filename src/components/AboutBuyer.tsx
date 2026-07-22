import Link from "next/link";
import ContentSection from "./ContentSection";
import { site } from "@/lib/site";

type Props = {
  /** Compact renders a shorter version for the three /mechira/* pillars; full renders on the /mechira hub. */
  variant?: "full" | "compact";
  id?: string;
};

/**
 * Visible "who is the buyer" block, per the named-entity AEO decision
 * (2026-07-28): the entity name must appear in visible on-page content
 * before it appears in any schema. Reads site.legalName so the name is
 * never hardcoded per-page (avoids BIDI-corruption risk in RTL text).
 */
export default function AboutBuyer({ variant = "full", id = "al-haroche" }: Props) {
  if (variant === "compact") {
    return (
      <ContentSection id={id} title="על הרוכש" level={3}>
        <p>
          הרכישה מבוצעת ישירות על ידי {site.legalName}, עם כיסוי רישיון תיווך מקרקעין כרקע
          מקצועי בלבד, לא כשירות תיווך: אין רישום נכסים למכירה ואין ייצוג מוכרים מול קונים
          אחרים. פרטים נוספים במדריך{" "}
          <Link
            href="/mechira"
            className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
          >
            מכירת בניין, נחלה או קרקע
          </Link>
          .
        </p>
      </ContentSection>
    );
  }

  return (
    <ContentSection id={id} title="על הרוכש: מי עומד מאחורי הרכישה הישירה">
      <p>
        {site.legalName} רוכשת בניינים שלמים, נחלות וקרקעות עם היתר בנייה במסלול ישיר מול
        הבעלים, בפריסה ארצית. החברה עובדת עם כיסוי רישיון תיווך מקרקעין כרקע מקצועי, כמפורט ב
        <Link
          href="/about"
          className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
        >
          אודות החברה
        </Link>
        , אך אינה פועלת כמשרד תיווך: אין רישום נכסים למכירה ואין ייצוג מוכרים מול קונים אחרים.
        הגישה היא רכישה ישירה מהבעלים אל הרוכש, בלי צד שלישי שמתווך בין הצדדים.
      </p>
    </ContentSection>
  );
}

export { AboutBuyer };
