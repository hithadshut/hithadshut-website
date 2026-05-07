import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import FAQ from "@/components/FAQ";
import InlineLeadForm from "@/components/InlineLeadForm";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import ReadingTimeBadge from "@/components/ReadingTimeBadge";
import Byline from "@/components/Byline";
import TableOfContents from "@/components/TableOfContents";
import RelatedArticles from "@/components/RelatedArticles";
import KeyStats from "@/components/KeyStats";
import { buildMetadata } from "@/lib/metadata";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  ofekPersonJsonLd,
  OFEK_PERSON_ID,
} from "@/lib/schema";

const DATE_MODIFIED = "2026-04-30";
const DATE_PUBLISHED = "2026-04-15";

// Word count for the main prose: TL;DR + 10 H2 sections of detailed content + 10 FAQs.
// Manual estimate: this page is ~2,700 words of Hebrew prose + tables.
const WORD_COUNT = 2700;

const TOC_ITEMS = [
  { id: "price-tables", label: "טבלאות מחיר לפי גודל ותוספות" },
  { id: "what-drives-price", label: "מה משפיע על המחיר: 12 גורמים" },
  { id: "cost-breakdown", label: "פירוט רכיבי המחיר" },
  { id: "hidden-costs", label: "עלויות נסתרות שכדאי לדעת" },
  { id: "save-smart", label: "איך לחסוך בלי להתפשר" },
  { id: "real-vs-surprise", label: "הצעה אמיתית מול הצעה שמפתיעה" },
  { id: "compare-solutions", label: "השוואה: ממ״ד / מיגון / מיגונית" },
  { id: "payment-schedule", label: "חוזה תשלומים: איך זה עובד" },
  { id: "mistakes", label: "טעויות שמייקרות את הפרויקט" },
  { id: "how-to-compare", label: "איך משווים הצעות מחיר" },
  { id: "our-approach", label: "הצעת מחיר אצלנו בהתחדשות" },
];

const PATH = "/guides/mamad-cost";
const TITLE = "מחיר ממ״ד 2026: כמה עולה לבנות ממ״ד | התחדשות";
const DESCRIPTION =
  "כמה עולה ממ״ד ב-2026? בית פרטי 160,000-220,000 ₪, מיגון חדר 40,000-150,000 ₪. פירוט עלויות, טבלאות השוואה ומה משפיע על המחיר.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const faqs = [
  {
    q: "כמה עולה ממ\"ד 9 מ\"ר בבית פרטי?",
    a: "ממ\"ד בגודל סטנדרטי (9 מ\"ר) בבית פרטי עולה לרוב בטווח של 160,000-200,000 ₪ + מע״מ. ממ״ד 12 מ״ר: 200,000-220,000 ₪ + מע״מ. הטווח מניח גמר סטנדרטי, גישה סבירה לשטח ועובי קירות רגיל. באזורי קו קדמי או עובי קירות 40 ס\"מ יש תוספת של 15%-25%. כל פרויקט נבדק פרטנית.",
  },
  {
    q: "מה המחיר למ\"ר של ממ\"ד?",
    a: "עדיף להסתכל על מחיר לממ״ד שלם ולא מחיר למ״ר. הממ״ד הוא מבנה קונסטרוקטיבי עם רכיבי תקן (דלת הדף, חלון, סינון) שלא משתנים עם הגודל. ממ״ד 9 מ״ר: 160,000-200,000 ₪ + מע״מ. ממ״ד 12 מ״ר: 200,000-220,000 ₪ + מע״מ. המחיר למ״ר נגזר ולא יכול להיות מדד אמיתי.",
  },
  {
    q: "מה גורם לשונות כזו במחירים?",
    a: "גודל הממ\"ד, תנאי הגישה לאתר, עובי קירות ותקרה (באזורים קדמיים נדרש יותר), רמת הגמר (ריצוף, דלתות, חלונות, צבע), דלת הדף נבחרת, מערכת אוורור וסינון, תוספות כמו חשמל/אינטרנט/מיזוג, והאזור הגיאוגרפי (עלויות עבודה שונות).",
  },
  {
    q: "מה לא כלול בהצעת מחיר מקובלת?",
    a: "פעמים רבות הצעת המחיר לא כוללת: עבודות פיתוח חצר חיצוניות, חיבורים לחשמל/מים (אם נדרש חיבור חדש), אגרות וועדה, היטלי פיתוח, ציוד נוסף במערכת סינון, ולפעמים גמרים מעבר לסטנדרט. חשוב לראות את ההצעה מפורטת: כל מה שלא בכתב, לא סגור.",
  },
  {
    q: "האם יש סובסידיה או מענק ממשלתי?",
    a: "ברירת המחדל היא שאין סובסידיה קבועה לבניית ממ\"ד בבתים פרטיים. מענקים נקודתיים או הקלות רגולטוריות נפתחו בעבר לאזורי קו קדמי ולאחר אירועים ביטחוניים גדולים, והכללים מתעדכנים. לפני תחילת פרויקט יש לבדוק מול משרד הביטחון, משרד הפנים, הרשות המקומית ופיקוד העורף אם קיימת תכנית פעילה באזור שלכם.",
  },
  {
    q: "האם ממ\"ד מעלה את שווי הדירה/הבית?",
    a: "כן, נכסים עם ממ\"ד מוערכים יותר בשוק. פער המחירים משתנה משמעותית בין אזורים ותקופות. מעבר לערך בשוק, ממ\"ד הוא ערך שימושי: הגנה, חדר נוסף, ושקט נפשי.",
  },
  {
    q: "מה העלויות שאפשר לחסוך עליהן?",
    a: "גמר פנים: אפשר להתחיל בסיסי ולשדרג בהמשך; תכנון חכם: ניצול ממ\"ד גם כחדר שינה/עבודה ולא כמרחב נפרד מצמצם עלויות; השוואת הצעות: הבדלים של 10-20% בין קבלנים מקצועיים הם שכיחים. מה לא לחסוך: קבלן מוסמך, חישוב סטטי, מערכת סינון תקנית.",
  },
  {
    q: "חוזה תשלומים: איך זה מקובל לעבוד?",
    a: "הסדר מקובל: מקדמה קטנה (5-15%), תשלום לפי אבני דרך (אחרי יסודות, אחרי יציקה, אחרי התקנת דלת וחלון, אחרי גמר), ותשלום סופי רק אחרי בדיקות ואישור גמר. להימנע מתשלום גבוה מראש ומ'שלבי תשלום' שלא קשורים לשלבי ביצוע אמיתיים.",
  },
  {
    q: "כמה עולה ממ״ד 16 מ״ר?",
    a: "ממ״ד גדול של 16 מ״ר בבית פרטי נע בטווח של 230,000-280,000 ₪ + מע״מ. גודל זה מתאים למשפחות גדולות או לשימוש כחדר שינה ראשי. התוספת על ממ״ד 12 מ״ר נובעת מיותר בטון, יסודות חזקים יותר, ויותר שטח גמר.",
  },
  {
    q: "כמה עולה ממ״ד בדירה בקומה גבוהה?",
    a: "ממ\"ד בדירה בקומה עולה 200,000-260,000 ₪ + מע״מ, בהתאם לגישה, הקומה וסוג הבניין. התוספת לעומת בית פרטי נובעת משינוע חומרים במעלית או במנוף, הגנה על שכנים וחיזוק רצפה. כל פרויקט נבדק פרטנית לפני הצעת מחיר.",
  },
];

type ImpactRow = { factor: string; delta: string; note: string };
const impactRows: ImpactRow[] = [
  { factor: "קו קדמי / קירות 40 ס״מ", delta: "+15% עד +25%", note: "דרישת תקן מוגברת באזורי גבול." },
  { factor: "דירה בקומה", delta: "+10% עד +30%", note: "שינוע חומרים, הגנה על שכנים, חיזוק רצפה." },
  { factor: "גישה קשה לאתר", delta: "+5% עד +15%", note: "סמטאות צרות, ללא גישת משאית לבטון." },
  { factor: "גמר יוקרתי", delta: "+15,000 עד +40,000 ₪", note: "ריצוף פורצלן, דלתות פנים, גופי תאורה, חשמל מורחב." },
  { factor: "מערכת סינון מתקדמת", delta: "+8,000 עד +20,000 ₪", note: "סינון NBC מעבר לסטנדרט פקע״ר המינימלי." },
  { factor: "מיזוג בתוך הממ״ד", delta: "+4,000 עד +12,000 ₪", note: "מזגן מיני מרכזי, תשתית סמויה, יחידת עיבוי בחוץ." },
  { factor: "קונסטרוקציה מחוזקת", delta: "+5% עד +12%", note: "חיזוק יסודות בקרקע חלשה או חישוב סיסמי מוגבר." },
  { factor: "הריסת מבנה קיים", delta: "+10,000 עד +35,000 ₪", note: "פירוק קיר נושא, הגנה על הבית, פינוי פסולת." },

];

type SizeRow = { size: string; volume: string; price: string; time: string };
const sizeRows: SizeRow[] = [
  { size: "9 מ״ר", volume: "22.5 מ״ק", price: "160,000-200,000 ₪ + מע״מ", time: "6-10 שבועות" },
  { size: "12 מ״ר", volume: "30 מ״ק", price: "200,000-220,000 ₪ + מע״מ", time: "8-12 שבועות" },
  { size: "16 מ״ר", volume: "40 מ״ק", price: "230,000-280,000 ₪ + מע״מ", time: "10-14 שבועות" },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="מדריך מחיר"
        title="כמה עולה ממ״ד? המדריך המלא למחיר ולעלויות"
        subtitle="טווחי מחירים מבוססי שוק, מה באמת מרכיב את המחיר, איפה אפשר לחסוך ואיפה לא כדאי, ושאלות שיחסכו לכם עשרות אלפי שקלים."
        crumbs={[{ name: "מדריכים", href: "/#guides" }, { name: "מחיר ממ״ד", href: PATH }]}
      />

      <JsonLd
        data={articleJsonLd({
          headline: TITLE,
          description: DESCRIPTION,
          url: PATH,
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          authorPersonId: OFEK_PERSON_ID,
        })}
      />
      <JsonLd data={ofekPersonJsonLd()} />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "בית", url: "/" },
          { name: "מדריכים", url: "/#guides" },
          { name: "מחיר ממ״ד", url: PATH },
        ])}
      />

      {/* TL;DR callout */}
      <Section tone="soft">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-6 md:p-8">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              בקצרה
            </div>
            <h2 id="tldr" className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-4">
              כמה עולה ממ״ד: תשובה ישירה
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-3">
              <strong>ממ״ד 9 מ״ר בבית פרטי עולה 160,000-200,000 ₪ + מע״מ. ממ״ד 12 מ״ר עולה 200,000-220,000 ₪ + מע״מ. ממ״ד 16 מ״ר עולה 230,000-280,000 ₪ + מע״מ.</strong>
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-3">
              באזורי קו קדמי או עובי קירות 40 ס״מ יש תוספת של 15%-25%. ממ״ד בדירה בקומה, בגישה קשה או בגמר יוקרתי יגיע לצד הגבוה של הטווח. המחיר תלוי בגודל, סוג, עובי קירות, גמר פנים, דלת הדף, מערכת סינון ותנאי הגישה לאתר.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              להצעת מחיר מדויקת לבית שלכם,{" "}
              <Link href="/contact" className="font-bold text-[var(--color-primary)] underline">
                צרו קשר עם התחדשות
              </Link>
              . נגיע לסיור ונוציא לכם פירוט מלא פריט-פריט.
            </p>
          </div>
        </div>
      </Section>

      {/* Trust differentiators — three sharp angles. AI Overviews
          extract these as cite-worthy "what only this site says". */}
      <Section tone="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              מה שלא תמיד אומרים מראש
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
              שלוש נקודות מקצועיות שמשפיעות על המחיר
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <article
              className="h-full p-6 rounded-2xl border-2 border-red-200 bg-red-50/40"
              aria-labelledby="cost-warn-migunit"
            >
              <div className="text-2xl mb-2" aria-hidden>⚠️</div>
              <h3 id="cost-warn-migunit" className="font-extrabold text-red-900 text-lg mb-2">
                הצעות &ldquo;מיגונית&rdquo; לבית פרטי במרכז
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                הצעות מחיר זולות במיוחד (30,000-80,000 ₪) ל&ldquo;מיגונית&rdquo; כפתרון
                לבית פרטי במרכז הארץ הן מצג שגוי מבחינה מקצועית. <strong>מיגונית</strong>{" "}
                מאושרת על ידי פיקוד העורף בעיקר לאזורי גבול ולמרחב הציבורי, לא כפתרון
                לבית פרטי. הפתרון הנכון: ממ״ד תקני (תקן 4422) או{" "}
                <Link
                  href="/services/room-reinforcement"
                  className="font-bold text-red-900 underline underline-offset-4"
                >
                  שיפור מיגון
                </Link>{" "}
                מאושר.
              </p>
            </article>

            <article
              className="h-full p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/40"
              aria-labelledby="cost-hidden-filter"
            >
              <div className="text-2xl mb-2" aria-hidden>💰</div>
              <h3 id="cost-hidden-filter" className="font-extrabold text-amber-900 text-lg mb-2">
                העלות שלא תמיד מציינים: סינון אב״כ
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                מערכת אוורור וסינון לפי <strong>תקן 4570</strong> היא תנאי לקבלת אישור
                גמר פקע״ר. עלות אופיינית: <strong>8,000-15,000 ₪</strong> מעבר לתקציב
                הבסיס. אם הצעת מחיר &ldquo;כולל הכל&rdquo; לא מציינת מערכת סינון פרטנית,
                עם דגם וחותמת היצרן, זה דגל אדום. בקשו פירוט בכתב לפני חתימה.
              </p>
            </article>

            <article
              className="h-full p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40"
              aria-labelledby="cost-savings-30b"
            >
              <div className="text-2xl mb-2" aria-hidden>💡</div>
              <h3 id="cost-savings-30b" className="font-extrabold text-emerald-900 text-lg mb-2">
                החיסכון הלא ידוע: סעיף 30ב׳ (פטור מהיתר)
              </h3>
              <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                מסלול הפטור (תקנה 30ב׳, הוראת שעה) חוסך{" "}
                <strong>4-6 שבועות בירוקרטיה</strong> ו-<strong>15,000-25,000 ₪</strong>{" "}
                של עלויות תכנון ואגרות. בתוקף עד <strong>אוקטובר 2026</strong> לבתים
                צמודי קרקע ולבניינים עד 2 קומות. ראו{" "}
                <Link
                  href="/guides/mamad-permit-exemption-2026"
                  className="font-bold text-emerald-900 underline underline-offset-4"
                >
                  מדריך מסלול הפטור
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </Section>

      {/* Byline + reading-time */}
      <Section tone="white">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Byline author="ofek-mazor" dateModified={DATE_MODIFIED} />
          <ReadingTimeBadge words={WORD_COUNT} />
        </div>
      </Section>

      {/* Mobile TOC: collapses into an accordion. Desktop TOC lives in the sidebar below. */}
      <Section tone="white">
        <div className="max-w-4xl mx-auto lg:hidden">
          <TableOfContents items={TOC_ITEMS} />
        </div>
      </Section>

      {/* Main content + sidebar */}
      <Section tone="white">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
          <div>
            <Prose>
              <h2 id="price-tables">טבלאות מחיר: גודל ותוספות</h2>
              <p>
                טווחי המחיר למטה מבוססים על שוק ישראל 2026, עבור ממ״ד בבית פרטי עם גישה סבירה וגמר סטנדרטי. הטווחים אינדיקטיביים. הצעת מחיר סופית נקבעת לפי ביקור באתר, בדיקת תכנית אדריכלית ובדיקת מפרט טכני.
              </p>
            </Prose>

            <KeyStats
              eyebrow="נתונים מאומתים · 2026"
              title="מספרי מחיר וזמן בתמצית"
              stats={[
                {
                  value: "160-200K ₪",
                  label: "ממ״ד 9 מ״ר בבית פרטי",
                  note: "טווח מחיר בנייה סטנדרטית, לא כולל מע״מ.",
                  source: { label: "התחדשות בינוי ויזמות" },
                },
                {
                  value: "200-220K ₪",
                  label: "ממ״ד 12 מ״ר בבית פרטי",
                  note: "טווח מחיר בנייה סטנדרטית, לא כולל מע״מ.",
                  source: { label: "התחדשות בינוי ויזמות" },
                },
                {
                  value: "+15-25%",
                  label: "תוספת קו קדמי / קיר 40 ס״מ",
                  note: "ערים בקו קדמי או דרישות פקע״ר מחמירות.",
                  source: { label: "התחדשות בינוי ויזמות" },
                },
                {
                  value: "עד 14 ימי עבודה",
                  label: "אישור פיקוד העורף",
                  note: "במסלול פטור עם הגשה אלקטרונית מלאה.",
                  source: {
                    label: "פיקוד העורף: מערכת רישוי",
                    href: "https://www.oref-rishuy.org.il",
                  },
                },
                {
                  value: "6-10 שבועות",
                  label: "ביצוע ממ״ד סטנדרטי",
                  note: "מתחילת יציקה ועד מסירה, גודל 9-12 מ״ר.",
                  source: { label: "התחדשות בינוי ויזמות" },
                },
                {
                  value: "45 ימים",
                  label: "הודעת סיום ביצוע",
                  note: "במסלול פטור: עורך הבקשה מודיע לרשות הרישוי ולפקע״ר.",
                  source: {
                    label: "מינהל התכנון",
                    href: "https://www.iplan.gov.il",
                  },
                },
              ]}
            />

            <h3 className="text-lg md:text-xl font-black text-[var(--color-primary)] mt-8 mb-4">
              טבלה 1: מחיר ממ״ד לפי גודל
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)]">
              <table className="w-full text-right">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr>
                    <th className="p-4 font-black text-sm md:text-base">גודל ממ״ד</th>
                    <th className="p-4 font-black text-sm md:text-base">נפח פנימי</th>
                    <th className="p-4 font-black text-sm md:text-base">טווח מחיר</th>
                    <th className="p-4 font-black text-sm md:text-base">זמן ביצוע</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeRows.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-soft)]"}>
                      <td className="p-4 font-bold text-[var(--color-ink)]">{row.size}</td>
                      <td className="p-4 text-[var(--color-muted)]">{row.volume}</td>
                      <td className="p-4 text-[var(--color-ink)]">{row.price}</td>
                      <td className="p-4 text-[var(--color-muted)]">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--color-muted)] mt-3">
              טווחים אינדיקטיביים לבתים פרטיים, גישה סבירה, גמר סטנדרטי. כל המחירים לא כוללים מע״מ.
            </p>

            <h3 className="text-lg md:text-xl font-black text-[var(--color-primary)] mt-10 mb-4">
              טבלה 2: תוספות מחיר נפוצות
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)]">
              <table className="w-full text-right">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr>
                    <th className="p-4 font-black text-sm md:text-base">גורם תוספת</th>
                    <th className="p-4 font-black text-sm md:text-base">השפעה על המחיר</th>
                    <th className="p-4 font-black text-sm md:text-base">הסבר</th>
                  </tr>
                </thead>
                <tbody>
                  {impactRows.map((row, i) => (
                    <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-soft)]"}>
                      <td className="p-4 font-bold text-[var(--color-ink)]">{row.factor}</td>
                      <td className="p-4 text-[var(--color-primary)] font-extrabold">{row.delta}</td>
                      <td className="p-4 text-[var(--color-muted)]">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--color-muted)] mt-3">
              התוספות מצטברות. ממ״ד באזור קו קדמי עם גמר יוקרתי יכול לעלות משמעותית מעל הטווח הבסיסי.
            </p>

            <Prose>
              <h2 id="what-drives-price">מה משפיע על המחיר: 12 גורמים מרכזיים</h2>
              <p>
                ההפרש בין ממ״ד שעולה 160 אלף ₪ לממ״ד שעולה 260 אלף ₪ לא מגיע מ&quot;קבלן יקר&quot;. הוא מגיע מגורמים טכניים ברורים. להלן הגורמים שמזיזים את המחיר:
              </p>
              <ol>
                <li>
                  <strong>גודל הממ״ד.</strong> 9 מ״ר, 12 מ״ר, 16 מ״ר. בכל קפיצה יש עוד בטון, יותר זיון, יסודות גדולים יותר וזמן עבודה ארוך יותר.
                </li>
                <li>
                  <strong>עובי הקירות לפי אזור.</strong> בקו קדמי התקן מחייב עובי קירות ותקרה גבוה יותר: יותר בטון, יותר ברזל זיון, יותר שעות עבודה. תוספת של 15-25%.
                </li>
                <li>
                  <strong>מיקום הממ״ד בבית.</strong> ממ״ד בקומת קרקע עם גישה ישירה זול משמעותית מ
                  <Link
                    href="/memad/bayit-prati"
                    className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                  >
                    ממ״ד בבית פרטי
                  </Link>
                  {" "}עם תכנון פנימי, ממ״ד בקומה שנייה עם מעלית שירות מוגבלת, או{" "}
                  <Link
                    href="/memad/tat-karkai"
                    className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                  >
                    ממ״ד תת-קרקעי
                  </Link>
                  {" "}עם חפירה עמוקה (תוספת 25%-40%).
                </li>
                <li>
                  <strong>תנאי הגישה לאתר.</strong> האם משאית בטון יכולה להגיע עד ליציקה? האם צריך משאבת בטון? האם הדרך עוברת דרך סמטה צרה או שכונה עם חניה מוגבלת?
                </li>
                <li>
                  <strong>דלת הדף וחלון ממ״ד.</strong> יש פערים של עד 20,000 ₪ בין דגמים בסיסיים לדגמים פרמיום. דלתות ברונזה, דלתות מעוצבות, חלונות דו-שמשה עם מסגרת מעוצבת, כל אלה מעלים את המחיר.
                </li>
                <li>
                  <strong>מערכת סינון.</strong> סינון פקע״ר בסיסי הוא סטנדרט. סינון NBC (כימי-ביולוגי-גרעיני) מתקדם מהווה תוספת משמעותית. באזורי גבול הדרישה לרוב מחמירה יותר.
                </li>
                <li>
                  <strong>רמת הגמר.</strong> טיח, צבע וריצוף בסיסיים לעומת ריצוף פורצלן גדול, קירות מעוצבים, ספוטים שקועים ומזגן מרכזי, כשההפרש מגיע לעשרות אלפי ₪.
                </li>
                <li>
                  <strong>חשמל ותקשורת.</strong> נקודות חשמל מעטות לעומת חשמל חכם, נקודות תקשורת, רשת, טעינה וכדומה.
                </li>
                <li>
                  <strong>מיזוג.</strong> מזגן נפרד לממ״ד, תשתית סמויה, יחידת עיבוי בחוץ: תוספת של 4-12 אלף ₪.
                </li>
                <li>
                  <strong>חיזוקים מיוחדים.</strong> בקרקע חלשה, בקרבת מים תת-קרקעיים, או במבנה ישן, קונסטרוקטור עשוי לדרוש חיזוק יסודות, דיפון או ביסוס עמוק.
                </li>
                <li>
                  <strong>עבודות הריסה והכנה.</strong> אם הממ״ד מחליף חדר קיים, יש להרוס קיר נושא, להגן על הבית בזמן העבודה, לפנות פסולת. עלות של 10-35 אלף ₪.
                </li>
                <li>
                  <strong>פיתוח חוץ ושיקום הסביבה.</strong> שיקום חצר, אבנים משתלבות חדשות, קיר תומך, עץ שעברה הריסה. לעיתים לא כלול בהצעה הראשונית. חשוב לבדוק בכתב.
                </li>
              </ol>

              <h2 id="cost-breakdown">פירוט רכיבי המחיר: איך מורכבת הצעת מחיר טובה</h2>
              <p>
                הצעת מחיר מקצועית לא מסתפקת במספר אחד &quot;הכל כלול&quot;. היא מפרטת כל סעיף בנפרד כדי שתוכלו להשוות בין קבלנים ולהבין איפה הולך הכסף.
              </p>
              <h3>1. עבודות בנייה וקונסטרוקציה (40%-55% מהתקציב)</h3>
              <p>
                יסודות, יציקת בטון מזוין לקירות, לתקרה ולרצפה. זיון פלדה לפי חישוב קונסטרוקטור. תבניות, משאבת בטון, עבודת זיון ויציקה.
              </p>
              <p>
                זה החלק הכבד של התקציב, ועל זה לא חוסכים. בטון באיכות נמוכה או זיון חסר: סכנה אמיתית.
              </p>
              <h3>2. דלת הדף וחלון ממ״ד (8%-15% מהתקציב)</h3>
              <p>
                דלת הדף תקנית: 12,000-25,000 ₪ לדלת רגילה; 25,000-45,000 ₪ לדגמים פרמיום. חלון ממ״ד: 5,000-15,000 ₪ לחלון סטנדרטי. יש יצרנים מובילים כמו שחם, רב-בריח, ראב, כרמל מיגון, עם אישור פקע״ר לכל דגם.
              </p>
              <h3>3. מערכת אוורור וסינון (5%-10% מהתקציב)</h3>
              <p>
                גוף סינון כימי-ביולוגי תקני, פתחי יניקה ומאווררים. מערכת סטנדרט: 6,000-12,000 ₪. מערכת NBC מתקדמת: 15,000-25,000 ₪. באזורי גבול או בדרישות מיוחדות, לפעמים חובה מערכת משופרת.
              </p>
              <h3>4. חשמל, מיזוג ותקשורת (4%-10% מהתקציב)</h3>
              <p>
                נקודות חשמל, תאורה, שקעים, חיבור מיזוג, רשת, אינטרנט. הטווח משתנה לפי מספר הנקודות ורמת האבזור: מזגן קומפקטי, מזגן מיני-מרכזי, תאורה שקועה, מערכות בית חכם.
              </p>
              <h3>5. גמרים (8%-18% מהתקציב)</h3>
              <p>
                טיח, ריצוף, צבע, סיפים, אבזרי חשמל. כאן יש הכי הרבה גמישות: אפשר להתחיל בסיסי ולשדרג בהמשך. ריצוף פורצלן איכותי במקום קרמיקה בסיסית: 10,000-20,000 ₪ תוספת. דלתות פנים עם קופינג עיצוב: עוד 3-8 אלף.
              </p>
              <h3>6. תכנון, ניהול ואישורים (7%-12% מהתקציב)</h3>
              <p>
                אדריכל, קונסטרוקטור, הגשה לפקע״ר ולוועדה, אגרות רישוי. חלק מהסכום הוא שכר טרחה מקצועי, חלק הוא אגרות שמועברות לרשות. חלקים מהעלות משולמים ישירות לרשות ולא לקבלן. חשוב להפריד בהצעה.
              </p>
              <h3>7. עבודות הכנה, הריסה ופינוי (2%-8% מהתקציב)</h3>
              <p>
                פירוק קיר קיים, הגנת הבית, פינוי פסולת, ניקיון סופי. לפעמים לא כלול בהצעה הראשונית. חשוב לוודא בכתב שזה בפנים.
              </p>

              <h2 id="hidden-costs">עלויות נסתרות שכדאי לדעת עליהן לפני שחותמים</h2>
              <p>
                גם בהצעות מפורטות יש עלויות שמופיעות רק אחרי שהפרויקט מתחיל. זה לא תמיד &quot;רמאות&quot;; לפעמים זה סעיפים שאף אחד לא חשב עליהם מראש. להלן העלויות הנסתרות הנפוצות ביותר:
              </p>
              <ul>
                <li>
                  <strong>אגרות וועדה והיטלי פיתוח.</strong> תלויים ברשות המקומית ויכולים להגיע לאלפי ₪. לא כלולים בהצעות רוב הקבלנים.
                </li>
                <li>
                  <strong>שכ״ט אדריכל וקונסטרוקטור.</strong> לפעמים הקבלן מספק כחלק מהשירות, לפעמים לא. לוודא בכתב.
                </li>
                <li>
                  <strong>שינוי בתב״ע / הקלות.</strong> אם הממ״ד חורג מזכויות הבנייה: תהליך נפרד, עלות נפרדת.
                </li>
                <li>
                  <strong>חיבורי חשמל וביוב חדשים.</strong> אם צריך נקודת חשמל חדשה מעבר לבית, או חיבור מים: דרך חברת החשמל ורשות המים, לא דרך הקבלן.
                </li>
                <li>
                  <strong>העתקת מערכות קיימות.</strong> אם הממ״ד מחליף חלל שכבר יש בו חשמל/אינסטלציה/מיזוג, הסרה והעתקה יכולים לעלות אלפי ₪.
                </li>
                <li>
                  <strong>גינון והחזרת מצב.</strong> עץ שנעקר, גדר שפורקה, דשא שנחפר: שיקום זה לעיתים לא כלול.
                </li>
                <li>
                  <strong>פיקוח בנייה חיצוני.</strong> חלק מהלקוחות שוכרים מפקח עצמאי. שירות חשוב: 1%-3% מעלות הפרויקט.
                </li>
                <li>
                  <strong>ביטוח עבודות קבלניות.</strong> צריך להיות על שם הקבלן, אבל בדקו את הפוליסה לפני שמתחילים.
                </li>
              </ul>

              <h2 id="save-smart">איך לחסוך בלי להתפשר על איכות</h2>
              <p>
                ממ״ד הוא פרויקט שאי אפשר לעשות בו &quot;קיצורי דרך&quot;: זה מרחב הגנה, לא סלון. אבל יש מקומות שאפשר לחסוך בהם בלי לפגוע באיכות וביכולת ההגנה:
              </p>
              <ul>
                <li>
                  <strong>להתחיל בגמר בסיסי ולשדרג בהמשך.</strong> ריצוף פשוט, דלתות פנים סטנדרטיות, צבע לבן. אפשר לשדרג בעוד כמה שנים בלי להרוס שום דבר.
                </li>
                <li>
                  <strong>לנצל את הממ״ד כחדר רגיל.</strong> במקום לבנות חדר נוסף ומרחב מוגן בנפרד, לנצל את הממ״ד כחדר שינה, חדר עבודה או חדר ילדים. חיסכון של עשרות אלפי ₪ על חדר נוסף.
                </li>
                <li>
                  <strong>לשלב עם תוספת בנייה קיימת.</strong> אם מתכננים ממילא תוספת חדר או קומה, שילוב הממ״ד בה חוסך יציקות נפרדות, גגות נפרדים וחוזים כפולים.
                </li>
                <li>
                  <strong>להוציא 3 הצעות מחיר מפורטות.</strong> הפרשים של 10-20% בין קבלנים מקצועיים הם שכיחים. חשוב: אותו מפרט טכני לשלושתם.
                </li>
                <li>
                  <strong>להיות גמיש בלוח זמנים.</strong> קבלנים מעדיפים פרויקטים שאפשר לתזמן בחורף או בין עונות שיא. לפעמים זה מוריד 3-7%.
                </li>
                <li>
                  <strong>לסגור תוספות מראש בכתב.</strong> &quot;יתכן שנגלה משהו בחפירה&quot;, אוקיי, אבל שיהיה מחיר סגור למקרה הזה, לא פתיחה חופשית של חשבון.
                </li>
              </ul>
              <p>
                <strong>מה <em>לא</em> לחסוך עליו:</strong> קבלן רשום ומבוטח, קונסטרוקטור, דלת הדף תקנית, מערכת סינון, פיקוח מקצועי. על הדברים האלה לעולם אין קיצורי דרך.
              </p>

              <h2 id="real-vs-surprise">ההבדל בין הצעת מחיר אמיתית להצעה שמפתיעה באמצע</h2>
              <p>
                שתי הצעות שנראות זהות במספר הסופי יכולות להיות רחוקות מאוד אחת מהשנייה. הנה איך לזהות את ההבדל:
              </p>
              <h3>הצעה אמיתית: מה מאפיין אותה</h3>
              <ul>
                <li>פירוט מלא לפי סעיפים, לא &quot;חבילה כוללת&quot; עם מספר אחד.</li>
                <li>מחיר נפרד לדלת הדף (כולל דגם ויצרן), לחלון, למערכת סינון.</li>
                <li>אבני דרך ברורות לתשלום, צמודות לשלבי ביצוע ולא לתאריכי לוח.</li>
                <li>רשימה מסודרת של מה <em>לא</em> כלול, לא רק מה כן.</li>
                <li>הפניה למסמכים: תכניות, מפרט טכני, חישוב קונסטרוקטיבי.</li>
                <li>חוזה כתוב עם תנאי תשלום, אחריות וביטוח.</li>
              </ul>
              <h3>הצעה שמפתיעה: סימני אזהרה</h3>
              <ul>
                <li>מחיר כולל בלי פירוט, בסגנון &quot;אבל אל תדאג, הכל בפנים&quot;.</li>
                <li>דרישה למקדמה גבוהה (מעל 15%) לפני שום עבודה באתר.</li>
                <li>אין אזכור של קבלן רשום בפנקס הקבלנים או סיווג מתאים.</li>
                <li>לוח זמנים מעורפל: &quot;בערך חודשיים&quot; בלי אבני דרך.</li>
                <li>שפה כמו &quot;יכול להיות שיהיה צורך בתוספות&quot; בלי מחיר סגור לתוספות.</li>
                <li>מחיר נמוך משמעותית מהטווח המקובל בשוק, לרוב חוסר ברכיב חיוני או עבודה לא מקצועית.</li>
              </ul>
              <p>
                <Link href="/guides/choosing-mamad-contractor">המדריך המלא לבחירת קבלן ממ״ד</Link> מסביר איך לבדוק קבלן לפני שחותמים: רישיון, ביטוח, פרויקטים קודמים, 10 שאלות שחובה לשאול.
              </p>

              <h2 id="compare-solutions">השוואת עלויות: ממ״ד מול מיגון חדר מול מיגונית</h2>
              <p>
                ממ״ד הוא הפתרון היקר ביותר והיחיד שמקבל אישור תקני מלא של פקע״ר עבור בנייה חדשה. מיגון חדר קיים הוא פתרון ביניים לבתים שאי אפשר לבנות בהם ממ״ד חדש. מיגונית היא פתרון חיצוני מהיר.
              </p>
              <ul>
                <li>
                  <strong>ממ״ד:</strong> 160,000-220,000 ₪ + מע״מ (9-12 מ״ר). הגנה תקנית מלאה, משמש כחדר ביום-יום, מעלה שווי נכס. זמן: 2-4 חודשים.
                </li>
                <li>
                  <strong>מיגון חדר קיים:</strong> 40,000-150,000 ₪ + מע״מ. שיפור הגנה ניכר אבל <em>לא</em> אישור ממ״ד תקני. זמן: 2-8 שבועות.
                </li>
                <li>
                  <strong>מיגונית:</strong> 30,000-80,000 ₪ + מע״מ. פתרון מהיר חיצוני, דורש יציאה מהבית בחירום. זמן: 4-8 שבועות.
                </li>
              </ul>
              <p>
                להחלטה פרטנית בין שלושת הפתרונות ראו{" "}
                <Link href="/compare/mamad-vs-miggun-vs-migunit">ממ״ד מול מיגון חדר מול מיגונית: השוואה מלאה</Link>. אם אתם מתלבטים בין ממ״ד צמוד לבית או ממ״ד חיצוני, ראו{" "}
                <Link href="/compare/mamad-tzamud-vs-hitzoni">השוואה: ממ״ד צמוד מול חיצוני</Link>.
              </p>

              <h2 id="payment-schedule">חוזה תשלומים: איך זה מקובל לעבוד</h2>
              <p>
                חלוקת תשלום סבירה ובטוחה צמודה לאבני דרך ביצוע. להלן מבנה מקובל בשוק:
              </p>
              <ol>
                <li><strong>מקדמה:</strong> 5%-15% עם חתימת החוזה, מכסה חומרים ראשוניים, אגרות, תכניות.</li>
                <li><strong>לאחר יסודות וחפירה:</strong> 20%-25%.</li>
                <li><strong>לאחר יציקת בטון (קירות + תקרה):</strong> 25%-30%.</li>
                <li><strong>לאחר התקנת דלת הדף וחלון:</strong> 15%-20%.</li>
                <li><strong>לאחר גמרים ומערכות:</strong> 10%-15%.</li>
                <li><strong>תשלום סופי:</strong> 5%-10% רק אחרי בדיקות ואישור גמר פקע״ר.</li>
              </ol>
              <p>
                <strong>מה להימנע ממנו:</strong> מקדמה של 30%+ לפני שום עבודה, תשלומים לפי תאריכים קבועים במקום לפי אבני דרך, &quot;תשלום נוסף&quot; שלא מופיע בחוזה. כל שינוי חייב להיות בכתב, עם מחיר, חתום.
              </p>

              <h2 id="mistakes">טעויות שמייקרות את הפרויקט</h2>
              <ul>
                <li>
                  <strong>מתחילים בלי תכנית קונסטרוקטיבית מסודרת.</strong> התוצאה כמעט תמיד: תוספות מחיר באמצע הפרויקט, אחרי שהבטון כבר נוצק.
                </li>
                <li>
                  <strong>משווים הצעות מחיר שהן לא באותה רמה.</strong> הצעה זולה שלא כוללת את כל העבודות תגיע בסוף למחיר ההצעה היקרה, או אפילו יותר.
                </li>
                <li>
                  <strong>לא סוגרים מראש תוספות בכתב.</strong> &quot;אנחנו נראה באמצע הפרויקט&quot; זו טעות של 10,000-40,000 ₪.
                </li>
                <li>
                  <strong>חוסכים על דלת ומערכת סינון.</strong> זה החלק שמבצע את ההגנה בפועל. לא מקום לחסוך.
                </li>
                <li>
                  <strong>בוחרים קבלן לפי מחיר בלבד ולא לפי ניסיון בממ״דים.</strong> זו עבודה מיוחדת שדורשת התמחות.
                </li>
                <li>
                  <strong>לא בודקים ביטוח עבודות קבלניות.</strong> אם קורה נזק במהלך העבודה, ההבדל בין ביטוח לאין ביטוח הוא עשרות אלפי ₪.
                </li>
                <li>
                  <strong>לא מגדירים קנסות איחור בחוזה.</strong> פרויקט שהתאחר בחודשיים: מי משלם? בלי קנס, אף אחד.
                </li>
              </ul>
              <p>
                מדריך מלא לטעויות יקרות זמין ב{" "}
                <Link href="/guides/mamad-mistakes">10 טעויות נפוצות בבניית ממ״ד ואיך להימנע מהן</Link>.
              </p>

              <h2 id="how-to-compare">איך משווים הצעות מחיר: פרוטוקול מעשי</h2>
              <ol>
                <li>
                  <strong>להכין תכנית אדריכלית ומפרט טכני כתוב.</strong> בלי זה, כל הצעה מחיר היא ניחוש.
                </li>
                <li>
                  <strong>לבקש הצעה עם פירוט:</strong> עבודות בנייה, דלת, חלון, סינון, גמרים, חשמל, בסעיפים נפרדים.
                </li>
                <li>
                  <strong>להגדיר מה לא כלול בכתב.</strong> אגרות, חיבורים חיצוניים, פיתוח חצר, שכ״ט אדריכל.
                </li>
                <li>
                  <strong>לפרק את אבני הדרך של התשלום</strong> באותו מפרט בכל ההצעות.
                </li>
                <li>
                  <strong>לבקש את אותו מפרט מ-3 קבלנים לפחות.</strong> פחות מזה: אי אפשר להשוות.
                </li>
                <li>
                  <strong>לבדוק רישום בפנקס הקבלנים, ביטוח וסיווג.</strong>{" "}
                  <Link href="/compare/katlan-rashum-vs-hafer">קבלן רשום מול חאפר: מה ההבדל המשפטי</Link>.
                </li>
                <li>
                  <strong>לבקש פרויקטים קודמים ולדבר עם לקוחות עבר.</strong> לא רק תמונות, גם דיבור ישיר.
                </li>
                <li>
                  <strong>לקרוא את החוזה לפני חתימה.</strong> אבני דרך, אחריות, קנסות, ביטוח, מנגנון שינויים.
                </li>
              </ol>

              <h2 id="our-approach">הצעת מחיר אצלנו בהתחדשות</h2>
              <p>
                בהתחדשות ההצעה פריט-פריט: כל מרכיב של הממ״ד במחיר נפרד, ברור ומנומק. אין &quot;כולל הכל&quot; עם מספר אחד, ואין תוספות מפתיעות באמצע. המחיר הסגור בחוזה הוא המחיר שתשלמו. ליווי אחד מתחילת הפרויקט ועד קבלת תיק הפרויקט הסופי עם כל התעודות והאישורים.
              </p>
              <p>
                בהתחדשות מבצעים את העבודה בצוותים שלנו, עם אחריות מלאה על כל סעיף בחוזה. כל פרויקט נבדק פרטנית: ביקור באתר, בדיקת אפשרויות הנדסיות, ייעוץ ראשוני ללא עלות.
              </p>
            </Prose>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Desktop TOC (hidden on mobile: mobile gets the accordion version above) */}
            <div className="hidden lg:block">
              <TableOfContents items={TOC_ITEMS} />
            </div>
            <div className="card-premium p-6 sticky top-24">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                לקריאה נוספת
              </div>
              <h3 className="text-lg font-black text-[var(--color-primary)] mb-4">קישורים פנימיים</h3>

              <div className="text-xs font-extrabold text-[var(--color-muted)] uppercase tracking-wider mb-2">שירותים</div>
              <ul className="space-y-1.5 mb-5 text-sm">
                <li><Link href="/services/building-mamad" className="text-[var(--color-primary)] hover:underline">בניית ממ״ד</Link></li>
                <li><Link href="/services/room-reinforcement" className="text-[var(--color-primary)] hover:underline">מיגון חדר קיים</Link></li>
                <li><Link href="/compare/mamad-vs-miggun-vs-migunit" className="text-[var(--color-primary)] hover:underline">ממ״ד, מיגון או מיגונית</Link></li>
                <li><Link href="/services/prefab-mamad" className="text-[var(--color-primary)] hover:underline">ממ״ד מוכן</Link></li>
              </ul>

              <div className="text-xs font-extrabold text-[var(--color-muted)] uppercase tracking-wider mb-2">מדריכים</div>
              <ul className="space-y-1.5 mb-5 text-sm">
                <li><Link href="/guides/mamad-process" className="text-[var(--color-primary)] hover:underline">תהליך בניית ממ״ד</Link></li>
                <li><Link href="/guides/home-front-command-approval" className="text-[var(--color-primary)] hover:underline">אישורי פיקוד העורף</Link></li>
                <li><Link href="/guides/choosing-mamad-contractor" className="text-[var(--color-primary)] hover:underline">בחירת קבלן ממ״ד</Link></li>
                <li><Link href="/guides/mamad-mistakes" className="text-[var(--color-primary)] hover:underline">10 טעויות נפוצות</Link></li>
                <li><Link href="/guides/mamad-cost" className="text-[var(--color-primary)] hover:underline">מחיר ממ״ד (עמוד זה)</Link></li>
              </ul>

              <div className="text-xs font-extrabold text-[var(--color-muted)] uppercase tracking-wider mb-2">השוואות</div>
              <ul className="space-y-1.5 mb-5 text-sm">
                <li><Link href="/compare/mamad-vs-miggun-vs-migunit" className="text-[var(--color-primary)] hover:underline">ממ״ד / מיגון / מיגונית</Link></li>
                <li><Link href="/compare/mamad-tzamud-vs-hitzoni" className="text-[var(--color-primary)] hover:underline">ממ״ד צמוד vs חיצוני</Link></li>
                <li><Link href="/services/prefab-mamad" className="text-[var(--color-primary)] hover:underline">ממ״ד מוכן (טרומי)</Link></li>
                <li><Link href="/compare/katlan-rashum-vs-hafer" className="text-[var(--color-primary)] hover:underline">קבלן רשום vs חאפר</Link></li>
              </ul>

              <div className="text-xs font-extrabold text-[var(--color-muted)] uppercase tracking-wider mb-2">אזורי שירות</div>
              <ul className="space-y-1.5 mb-5 text-sm">
                <li><Link href="/areas/tel-aviv" className="text-[var(--color-primary)] hover:underline">בניית ממ״ד בתל אביב</Link></li>
                <li><Link href="/areas/jerusalem" className="text-[var(--color-primary)] hover:underline">בניית ממ״ד בירושלים</Link></li>
                <li><Link href="/areas/haifa" className="text-[var(--color-primary)] hover:underline">בניית ממ״ד בחיפה</Link></li>
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center bg-[var(--color-primary)] text-white font-extrabold px-5 py-3 rounded-xl hover:brightness-110 transition"
              >
                קבלו הצעת מחיר →
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <InlineLeadForm
        title="רוצים הצעת מחיר מדויקת לממ״ד שלכם?"
        subtitle="השאירו פרטים. נגיע לסיור, נבדוק אפשרויות ונחזור אליכם עם הצעה מפורטת פריט-פריט."
        defaultService="mamad"
      />

      <FAQ items={faqs} title="שאלות נפוצות: מחיר ממ״ד" eyebrow="שאלות ותשובות" includeSchema={false} />

      <RelatedArticles currentSlug="mamad-cost" />

      <RelatedLinks
        seed="guides/mamad-cost"
        targets={[
          "building-mamad",
          "room-reinforcement",
          "compare-main",
          "mamad-process",
          "choosing-mamad-contractor",
        ]}
      />

      <div id="faq" />
    </>
  );
}
