import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/compare/mamad-vs-miggun-vs-migunit";
const TITLE = "ממ״ד מול מיגון חדר מול מיגונית | השוואה מלאה — התחדשות";
const DESCRIPTION =
  "ממ״ד, מיגון חדר או מיגונית? השוואה מלאה — עלות, זמן, רמת הגנה ואישורים. התחדשות בינוי ויזמות.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

type Option = {
  key: string;
  title: string;
  href: string;
  highlight?: boolean;
  badge?: string;
  rows: { label: string; value: string }[];
};

const options: Option[] = [
  {
    key: "mamad",
    title: "בניית ממ״ד",
    href: "/services/building-mamad",
    highlight: true,
    badge: "המומלץ",
    rows: [
      { label: "רמת הגנה", value: "גבוהה — תקני לכל דבר" },
      { label: "אישור פקע״ר", value: "חובה ומתקבל" },
      { label: "טווח מחיר", value: "160,000–220,000 ₪ + מע״מ" },
      { label: "זמן ביצוע", value: "2–4 חודשים במסלול פטור" },
      { label: "למי מתאים", value: "בית עם מקום ואפשרות מבנית לבנות חדר חדש" },
      { label: "יתרון עיקרי", value: "הגנה תקנית מלאה + חדר פונקציונלי בבית ביום-יום" },
      { label: "חיסרון עיקרי", value: "הפתרון היקר והארוך ביותר" },
    ],
  },
  {
    key: "reinforce",
    title: "מיגון חדר קיים",
    href: "/services/room-reinforcement",
    rows: [
      { label: "רמת הגנה", value: "משופרת, לא תקנית כממ״ד" },
      { label: "אישור פקע״ר", value: "לרוב לא ניתן כממ״ד תקני" },
      { label: "טווח מחיר", value: "40,000–150,000 ₪ + מע״מ" },
      { label: "זמן ביצוע", value: "2 שבועות עד 2 חודשים" },
      { label: "למי מתאים", value: "בתים שאי אפשר בהם לבנות ממ״ד חדש" },
      { label: "יתרון עיקרי", value: "מהיר, זול יחסית, לא פולשני" },
      { label: "חיסרון עיקרי", value: "רמת הגנה נמוכה יותר, לא תקני" },
    ],
  },
  {
    key: "migunit",
    title: "מיגונית",
    href: "/services/migunit",
    rows: [
      { label: "רמת הגנה", value: "טובה בדגם מאושר פקע״ר" },
      { label: "אישור פקע״ר", value: "תלוי ביצרן — בכתב" },
      { label: "טווח מחיר", value: "30,000–80,000 ₪ + מע״מ" },
      { label: "זמן ביצוע", value: "4–8 שבועות, הצבה ביום" },
      { label: "למי מתאים", value: "בית עם חצר וללא אפשרות לממ״ד" },
      { label: "יתרון עיקרי", value: "התקנה מהירה, לא דורש בנייה בתוך הבית" },
      { label: "חיסרון עיקרי", value: "יחידה חיצונית — צריך לצאת אליה בחירום" },
    ],
  },
  {
    key: "prefab",
    title: "ממ״ד מוכן",
    href: "/services/prefab-mamad",
    rows: [
      { label: "רמת הגנה", value: "גבוהה — תקנית בדגם מאושר" },
      { label: "אישור פקע״ר", value: "חובה ומתקבל לדגם מאושר" },
      { label: "טווח מחיר", value: "180,000–250,000 ₪ + מע״מ" },
      { label: "זמן ביצוע", value: "6–12 שבועות, הצבה בימים" },
      { label: "למי מתאים", value: "בית פרטי עם גישה לכלי הרמה" },
      { label: "יתרון עיקרי", value: "ייצור במפעל — התקנה מהירה, פחות בלגן" },
      { label: "חיסרון עיקרי", value: "מידות קבועות — פחות גמישות בתכנון" },
    ],
  },
];

const faqs = [
  {
    q: "איזה פתרון הכי טוב מבחינת הגנה?",
    a: "ממ״ד תקני (יצוק באתר או טרומי) — ללא מחלוקת. זה הפתרון היחיד שמוגדר רשמית כ'מרחב מוגן דירתי' על ידי פיקוד העורף. מיגונית מאושרת פקע״ר גם עומדת בתקן, אבל היא חיצונית וצריך לצאת אליה בחירום. מיגון חדר קיים — משתנה, לרוב ברמת הגנה נמוכה יותר.",
  },
  {
    q: "אם אני לא יכול לבנות ממ״ד — מה עדיף, מיגון חדר או מיגונית?",
    a: "תלוי במצב הבית. אם יש חצר גדולה עם גישה טובה — מיגונית מאושרת פקע״ר נותנת רמת הגנה טובה. אם אין מקום בחוץ או שאיש במשפחה מתקשה לצאת מהר — מיגון חדר קיים עדיף פרקטית, גם אם רמת ההגנה נמוכה יותר.",
  },
  {
    q: "מה ההבדל בין ממ״ד יצוק לממ״ד מוכן (טרומי)?",
    a: "שניהם ממ״דים תקניים עם אישור פקע״ר. ממ״ד יצוק — נבנה באתר, גמישות מלאה במידות ובשילוב עם הבית. ממ״ד מוכן (טרומי) — מיוצר במפעל ומותקן בבית, מהיר יותר ועם פחות בלגן, אבל במידות קבועות.",
  },
  {
    q: "מיגונית במקום ממ״ד — זה כדאי?",
    a: "תלוי. הפער המרכזי: בממ״ד נכנסים מהבית פנימה, במיגונית צריך לצאת החוצה. באזורי קו קדמי שבהם זמני ההתרעה קצרים, הממ״ד משמעותית עדיף. גם מבחינת נוחות — ממ״ד משמש חדר ביום-יום. המיגונית היא פתרון כשאי-אפשר ממ״ד.",
  },
  {
    q: "מה ההמלצה הכנה שלכם?",
    a: "אם אפשר מבחינה מבנית ותקציבית — ממ״ד הוא הפתרון הנכון. אם לא — לבחון אם מיגונית מאושרת פקע״ר אפשרית במקום, ובמידה שגם זה לא — מיגון חדר קיים. בהחלטה הזו אנחנו ניגשים איתכם למקום ובודקים יחד את האפשרויות הריאליות.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="השוואה"
        title="ממ״ד, מיגון חדר או מיגונית — מה מתאים לכם?"
        subtitle="השוואה מלאה בין 4 הפתרונות — עלות, זמן, רמת הגנה, אישורים, ולמי כל פתרון באמת מתאים."
        crumbs={[{ name: "השוואה", href: PATH }]}
      />

      <JsonLd data={faqJsonLd(faqs)} />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {options.map((o) => (
            <div
              key={o.key}
              className={`card-premium p-6 flex flex-col h-full ${
                o.highlight
                  ? "ring-2 ring-[var(--color-accent)] shadow-xl relative"
                  : ""
              }`}
            >
              {o.badge && (
                <span className="absolute -top-3 right-6 inline-flex items-center bg-[var(--color-accent)] text-[var(--color-primary)] text-[10px] font-extrabold uppercase tracking-[0.18em] px-3 py-1 rounded-full shadow">
                  {o.badge}
                </span>
              )}
              <h3 className="text-xl font-black text-[var(--color-primary)] mb-4 pb-4 border-b border-[var(--color-border)]">
                {o.title}
              </h3>
              <dl className="space-y-3 flex-1">
                {o.rows.map((r) => (
                  <div key={r.label}>
                    <dt className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-1">
                      {r.label}
                    </dt>
                    <dd className="text-sm text-[var(--color-ink)] leading-relaxed">
                      {r.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href={o.href}
                className={`mt-5 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl font-bold text-sm transition ${
                  o.highlight
                    ? "bg-[var(--color-accent)] text-[var(--color-primary)] hover:brightness-95"
                    : "border border-[var(--color-border)] text-[var(--color-primary)] hover:bg-[var(--color-soft)]"
                }`}
              >
                למידע נוסף ←
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[var(--color-muted)] text-center">
          המידע בטבלה כללי ומהווה הכוונה. כל פרויקט נבחן פרטנית. כל המחירים אינם כוללים מע״מ.
        </p>

        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-4">
            לא בטוחים מה מתאים לכם?
          </h2>
          <p className="text-[var(--color-muted)] mb-6 max-w-2xl mx-auto">
            דברו איתנו ונעזור לבחור. סיור וייעוץ ראשוני ללא עלות — בלי מחויבות, בלי לחץ.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-primary)] font-extrabold px-8 py-4 rounded-xl hover:brightness-95 transition shadow-lg"
          >
            דברו איתנו ונעזור לבחור ←
          </Link>
        </div>
      </Section>

      <FAQ items={faqs} />
      <ContactCTA />
    </>
  );
}
