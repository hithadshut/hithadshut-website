import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import InlineLeadForm from "@/components/InlineLeadForm";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessJsonLd } from "@/lib/schema";
import { areas } from "@/content/areas";

const PATH = "/areas";
const TITLE = "אזורי שירות | בניית ממ״ד בכל הארץ — התחדשות";
const DESCRIPTION =
  "חברת התחדשות בונה ממ״דים, מיגון חדרים ומיגוניות בכל הארץ — 28 אזורי שירות מרכזיים. קבלו הצעת מחיר תוך 24 שעות.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "באילו אזורים בארץ אתם עובדים?",
    a: "אנחנו פועלים בכל הארץ — ממרכז ותל אביב, דרך השרון, השפלה והדרום, ועד חיפה, הקריות והצפון. בעמוד זה מרוכזים 28 אזורי שירות מרכזיים.",
  },
  {
    q: "האם המחיר משתנה בין אזור לאזור?",
    a: "כן. באזורי קו קדמי (אשדוד, אשקלון, נהריה ועוד) דרישות פקע״ר מחמירות יותר — עובי קירות גדול יותר ותוספת עלות אופיינית של 15%–25%. במרכז המחיר סטנדרטי יותר.",
  },
  {
    q: "האם פיקוד העורף דורש דרישות שונות בכל אזור?",
    a: "כן. פקע״ר מגדיר רמות איום לאזורים שונים, ובהתאם לכך עובי הקירות, סוג הדלת וחלון ההדף. אנחנו מכירים את ההנחיות בכל אזור ומתכננים בהתאם.",
  },
  {
    q: "עד כמה זמן אתם מגיעים לסיור ראשוני?",
    a: "במרבית המקרים בתוך ימי עסקים ספורים מהפנייה. בפרויקטים דחופים אנו מתאמים מועד מהיר יותר.",
  },
  {
    q: "האם יש תוספת עלות לאזורים מרוחקים?",
    a: "הצעת המחיר מותאמת לפי מיקום הפרויקט — עלות הביצוע כוללת את מרכיב הלוגיסטיקה. בכל מקרה, ההצעה סגורה וברורה לפני חתימה.",
  },
];

export default function AreasIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="אזורי שירות"
        title="בניית ממ״ד בכל הארץ"
        subtitle="חברת התחדשות — בינוי ויזמות — פועלת ב-28 אזורי שירות מרכזיים. בחרו את העיר שלכם לפרטים מלאים ולקבלת הצעת מחיר מותאמת."
        crumbs={[{ name: "אזורי שירות", href: PATH }]}
      />

      <JsonLd data={localBusinessJsonLd()} />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight">
              28 אזורי שירות מרכזיים
            </h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              לחצו על האזור שלכם כדי לראות מידע מקומי מפורט על בניית ממ״ד, מיגון חדר, מיגונית וממ״ד
              מוכן — כולל השירותים הזמינים באזור, טווחי זמנים ויצירת קשר מהירה עם צוות מקצועי.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="card-premium p-5 md:p-6 hover:shadow-[var(--shadow-deep)] transition block"
            >
              <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
                {a.district}
              </div>
              <div className="text-lg md:text-xl font-black text-[var(--color-primary)]">
                {a.name}
              </div>
              <div className="mt-3 text-xs text-[var(--color-muted)]">
                ממ״ד · מיגון · מיגונית
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <InlineLeadForm
        title="לא רואים את האזור שלכם?"
        subtitle="אנחנו פועלים בכל הארץ. השאירו פרטים — נחזור אליכם עם מענה מקצועי לאזור שלכם."
        defaultService="בניית ממ״ד"
      />

      <FAQ items={faqs} eyebrow="שאלות ותשובות" title="שאלות נפוצות על אזורי שירות" tone="soft" />
    </>
  );
}
