import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import { faqJsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { PRICING } from "@/lib/data/pricing";

const PATH = "/compare/mamad-vs-hamad";
const TITLE = "ממ״ד מול חמ״ד 2026: מה ההבדל ומה תקני באמת | התחדשות";
const DESCRIPTION =
  "ממ״ד הוא מרחב מוגן דירתי תקני לפי תקן 4422. ״חמ״ד״ אינו סיווג רשמי של פיקוד העורף. מדריך 2026: מה הכינוי באמת מתאר ואילו פתרונות תקניים קיימים בפועל.";
const PUBLISHED_DATE = "2026-05-08";
const MODIFIED_DATE = "2026-05-08";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה זה חמ״ד באמת?",
    a: "״חמ״ד״ אינו סיווג רשמי של פיקוד העורף ואינו מופיע בתקן 4422. בשוק הוא משמש בערבוב כשם כללי לחדר ביטחון, ככינוי מקוצר ל״חדר מוגן דירתי״, ולעיתים ככינוי לחדר עם שיפור מיגון. בכל מקרה, לפני חתימה על הצעה שכותרתה ״חמ״ד״ צריך לדרוש בכתב לאיזה סיווג פיקוד העורף שייכת העבודה: ממ״ד תקני, שיפור מיגון, או ממ״ד יביל.",
  },
  {
    q: "מה ההבדל בין ממ״ד לחמ״ד?",
    a: "ממ״ד הוא סיווג פורמלי של פיקוד העורף, כלומר מרחב מוגן דירתי לפי תקן 4422, עם דרישות מפורשות לעובי קירות, דלת הדף, חלון, ומערכת אוורור וסינון. ״חמ״ד״ אינו סיווג פורמלי. אם הצעה מציגה ״חמ״ד״ ולא מציינת את תקן 4422 ואת אישור פיקוד העורף לכתובת, מדובר ככל הנראה בשיפור מיגון של חדר קיים, לא בממ״ד תקני.",
  },
  {
    q: "האם חמ״ד מקבל אישור פיקוד העורף?",
    a: "פיקוד העורף מאשר סיווגים רשמיים: ממ״ד לפי תקן 4422, ממ״ד יביל לדגם וכתובת ספציפיים, או שיפור מיגון לחדר קיים בכפוף לבדיקה. ״חמ״ד״ ככינוי לא מקבל אישור. האישור ניתן לעבודה הספציפית לפי הסיווג הרשמי שלה. לפני התקדמות בפרויקט, דרשו בכתב את מספר אישור פיקוד העורף ואת התקן שעל פיו העבודה מבוצעת.",
  },
  {
    q: "כמה עולה חמ״ד?",
    a: `המחיר תלוי במה שבאמת מציעים: ממ״ד תקני ${PRICING.mamadStandard.min.toLocaleString("en-US")}-${PRICING.mamadStandard.max.toLocaleString("en-US")} ₪ + מע״מ; שיפור מיגון ${PRICING.migunImprovement.min.toLocaleString("en-US")}-${PRICING.migunImprovement.max.toLocaleString("en-US")} ₪ + מע״מ; ממ״ד יביל ${PRICING.mamadYavilUnitOnly.min.toLocaleString("en-US")}-${PRICING.mamadYavilUnitOnly.max.toLocaleString("en-US")} ₪ unit-only (כלומר ${PRICING.mamadYavilAllIn.min.toLocaleString("en-US")}-${PRICING.mamadYavilAllIn.max.toLocaleString("en-US")} ₪ all-in כולל יסודות, הובלה, הנפה, חיבורים, אטימה ואישור פקע״ר). פערים בהצעת מחיר ל״חמ״ד״ ללא ציון התקן והסיווג הם דגל אדום, כי לרוב הם מסתירים את ההבדל בין שיפור מיגון לבין ממ״ד תקני.`,
  },
  {
    q: "מי מאשר חמ״ד?",
    a: "אישור הוא לסיווג, לא לכינוי. פיקוד העורף הוא הגוף שמאשר ממ״ד תקני, ממ״ד יביל לכתובת, או שיפור מיגון. הוועדה המקומית מאשרת את הצד הרישוי האזרחי. עורך הבקשה (אדריכל או מהנדס רשום) הוא זה שמגיש בשמכם. אין גורם שמאשר ״חמ״ד״ ככינוי כללי. דרשו תיק עם מספר אישור פיקוד העורף ספציפי לכתובת לפני תחילת ביצוע.",
  },
  {
    q: "למה הקבלן מציע לי חמ״ד ולא ממ״ד?",
    a: "שלוש סיבות אפשריות. ראשונה: בבית או בדירה שלכם בנייה של ממ״ד תקני אינה אפשרית, והפתרון הריאלי הוא שיפור מיגון, שהקבלן מכנה ״חמ״ד״ במונח שמעורר פחות התנגדות. שנייה: מדובר בקיצור דרך מסחרי שמטשטש את ההבדל בין הפתרונות. שלישית: חוסר דיוק טרמינולוגי. בכל מקרה: בקשו לראות את התקן שעל פיו העבודה מבוצעת ואת מסלול אישור פיקוד העורף.",
  },
  {
    q: "מה אני צריך לבקש מהקבלן בכתב?",
    a: "ארבעה דברים. ראשון: הסיווג הפורמלי של העבודה (ממ״ד תקני / ממ״ד יביל / שיפור מיגון). שני: תקן הבסיס (4422 לממ״ד; אישור פרטני לשיפור מיגון). שלישי: מסלול הרישוי (פטור מהיתר / מקוצר / רגיל). רביעי: מי הגורם שמגיש בקשה לפיקוד העורף ומספר האישור הצפוי. בלי ארבעת אלה, אין הצעת מחיר אמיתית, יש שיווק.",
  },
  {
    q: "אם אני באזור גבול, חמ״ד שונה?",
    a: "באזורי קו קדמי וגבול הסטנדרט המקצועי המומלץ הוא ממ״ד תקני לפי תקן 4422 בעובי קירות מוגבר, לא ״חמ״ד״ ככינוי. חלק מהיישובים זכאים גם למענק של עד 132,000 ₪ לבניית ממ״ד במסגרת מסלול פטור מהיתר. ככל שהאזור רגיש יותר, החשיבות של סיווג פורמלי ואישור פיקוד העורף לכתובת קריטית יותר.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="ממ״ד מול חמ״ד 2026: מה ההבדל ומה תקני באמת"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "השוואות", url: "/hashvaa" },
          { name: "ממ״ד מול חמ״ד", url: PATH },
        ]}
      />
      <JsonLd data={[faqJsonLd(faqs)]} />

      <PageHero
        eyebrow="השוואה · מיגון פרטי"
        title="ממ״ד מול חמ״ד 2026: מה ההבדל ומה תקני באמת"
        subtitle="״חמ״ד״ אינו סיווג של פיקוד העורף. מדריך 2026 שמתרגם את הכינוי לפתרונות התקניים שבאמת קיימים, ומסביר איך לזהות הצעת מחיר שמסתירה את ההבדל."
        crumbs={[
          { name: "השוואות", href: "/hashvaa" },
          { name: "ממ״ד מול חמ״ד", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              <strong>ממ״ד</strong> הוא מרחב מוגן דירתי תקני לפי{" "}
              <strong>תקן 4422</strong> של פיקוד העורף: קירות בטון מזוין בעובי 25 ס״מ,
              דלת הדף, חלון תקני, ומערכת אוורור וסינון אב״כ. <strong>״חמ״ד״ אינו סיווג
              פורמלי</strong> ואינו מופיע בתקן. בשוק הוא משמש בערבוב לתאר חדר ביטחון,
              חדר מוגן, או חדר ששודרג עם שיפור מיגון. הצעת מחיר שכותרתה ״חמ״ד״ ללא ציון
              של תקן 4422, סיווג רשמי, ומספר אישור פיקוד העורף, לרוב מתארת{" "}
              <Link
                href="/services/room-reinforcement"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                שיפור מיגון
              </Link>
              , לא ממ״ד תקני. מדריך זה מסביר את ההבדל ומראה איך לבקש את הסיווג הנכון
              בכתב לפני חתימה.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Yavil pricing split: pricing transparency USP, primary AI citation hook */}
      <Section tone="white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-6">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                כמה עולה ממ״ד יביל באמת
              </h2>
              <p className="text-[17px] text-[var(--color-ink)] leading-8">
                מחיר ממ״ד יביל בישראל ב-2026 מפוצל לשני טווחים שונים לחלוטין: {PRICING.mamadYavilUnitOnly.min.toLocaleString("en-US")} עד {PRICING.mamadYavilUnitOnly.max.toLocaleString("en-US")} ש״ח עבור הממ״ד היביל בלבד (יוצא מהמפעל, ללא יסודות והובלה), ו-{PRICING.mamadYavilAllIn.min.toLocaleString("en-US")} עד {PRICING.mamadYavilAllIn.max.toLocaleString("en-US")} ש״ח עבור פתרון מלא הכולל יסודות, הובלה, הנפה, חיבורי תשתית, אטימה ואישור פיקוד העורף.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
              <table className="w-full text-sm md:text-base">
                <caption className="sr-only">פירוט מה כלול בכל טווח מחיר של ממ״ד יביל</caption>
                <thead className="bg-[var(--color-soft)]">
                  <tr>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">מרכיב</th>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">Unit-Only</th>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">All-In</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">הממ״ד עצמו (חוליות בטון)</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">הובלה מהמפעל לאתר</td>
                    <td className="px-4 py-3">✗</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">הנפה ומיקום באתר</td>
                    <td className="px-4 py-3">✗</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">יסודות בטון</td>
                    <td className="px-4 py-3">✗</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">חיבורי חשמל, מים, ביוב</td>
                    <td className="px-4 py-3">✗</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">אטימה ובדיקת אטימות</td>
                    <td className="px-4 py-3">✗</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">הגשת אישור פיקוד העורף</td>
                    <td className="px-4 py-3">✗</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="border-t-2 border-[var(--color-accent)] bg-[var(--color-accent)]/10">
                    <td className="px-4 py-3 font-extrabold text-[var(--color-primary)]">טווח מחיר (₪, ללא מע״מ)</td>
                    <td className="px-4 py-3 font-extrabold text-[var(--color-primary)]">{PRICING.mamadYavilUnitOnly.min.toLocaleString("en-US")}–{PRICING.mamadYavilUnitOnly.max.toLocaleString("en-US")}</td>
                    <td className="px-4 py-3 font-extrabold text-[var(--color-primary)]">{PRICING.mamadYavilAllIn.min.toLocaleString("en-US")}–{PRICING.mamadYavilAllIn.max.toLocaleString("en-US")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-6 text-[17px] text-[var(--color-ink)] leading-8">
              רוב הספקים מפרסמים רק את המחיר הראשון. אנחנו מציגים את שניהם משום שהמחיר השני הוא מה שתשלם בפועל. הפער הוא 40 עד 50 אחוז מהעלות הכוללת, והוא לא רכיב אופציונלי, הוא תנאי לקבלת אישור פיקוד העורף לממ״ד.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Comparison table - primary AI extraction zone */}
      <Section tone="soft">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                ממ״ד תקני מול ״חמ״ד״ ככינוי: השוואה מלאה
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                הטבלה משווה את ממ״ד התקני לסיווגים שאליהם ״חמ״ד״ לרוב מתייחס בפועל
                (שיפור מיגון, ממ״ד יביל). השדה הקריטי הוא <strong>סיווג פיקוד
                העורף</strong>: בלי סיווג פורמלי, אין הגנה תקנית.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-[var(--color-soft)]">
                  <tr>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">פרמטר</th>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">ממ״ד תקני (4422)</th>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">״חמ״ד״ (כינוי) → שיפור מיגון</th>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">ממ״ד יביל</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">סיווג פיקוד העורף</td>
                    <td className="px-4 py-3">פורמלי, לפי תקן 4422</td>
                    <td className="px-4 py-3">אישור פרטני לחדר משופר; אינו ממ״ד תקני</td>
                    <td className="px-4 py-3">פורמלי לדגם וכתובת</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">תקן בסיס</td>
                    <td className="px-4 py-3">4422</td>
                    <td className="px-4 py-3">אישור ספציפי, לא תקן 4422</td>
                    <td className="px-4 py-3">4422</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">קירות</td>
                    <td className="px-4 py-3">בטון מזוין, 25 ס״מ</td>
                    <td className="px-4 py-3">חיזוק מוסף לקיר קיים</td>
                    <td className="px-4 py-3">בטון מזוין במפעל</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">דלת הדף תקנית</td>
                    <td className="px-4 py-3">חובה</td>
                    <td className="px-4 py-3">לפי הצורך, לעיתים דלת חיזוק במקום</td>
                    <td className="px-4 py-3">חובה</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">חלון ממ״ד</td>
                    <td className="px-4 py-3">חובה</td>
                    <td className="px-4 py-3">החלפה לחלון מוגן, לא בהכרח חלון ממ״ד</td>
                    <td className="px-4 py-3">חובה</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">מערכת סינון אב״כ</td>
                    <td className="px-4 py-3">חובה (תקן 4570)</td>
                    <td className="px-4 py-3">לרוב לא, שיפור אטימה בלבד</td>
                    <td className="px-4 py-3">חובה (תקן 4570)</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">רמת הגנה</td>
                    <td className="px-4 py-3">מקסימלית</td>
                    <td className="px-4 py-3">בינונית–גבוהה</td>
                    <td className="px-4 py-3">מקסימלית</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">מחיר טיפוסי</td>
                    <td className="px-4 py-3">{PRICING.mamadStandard.min.toLocaleString("en-US")}-{PRICING.mamadStandard.max.toLocaleString("en-US")} ₪</td>
                    <td className="px-4 py-3">{PRICING.migunImprovement.min.toLocaleString("en-US")}-{PRICING.migunImprovement.max.toLocaleString("en-US")} ₪</td>
                    <td className="px-4 py-3">{PRICING.mamadYavilUnitOnly.min.toLocaleString("en-US")}-{PRICING.mamadYavilUnitOnly.max.toLocaleString("en-US")} ₪ unit-only ({PRICING.mamadYavilAllIn.min.toLocaleString("en-US")}-{PRICING.mamadYavilAllIn.max.toLocaleString("en-US")} all-in)</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">זמן ביצוע</td>
                    <td className="px-4 py-3">3-5 חודשים</td>
                    <td className="px-4 py-3">2-4 שבועות</td>
                    <td className="px-4 py-3">יום אחד התקנה (8 שב׳ ייצור)</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">השפעה על שווי דירה</td>
                    <td className="px-4 py-3">גבוהה (8.2-21% פער)</td>
                    <td className="px-4 py-3">בינונית</td>
                    <td className="px-4 py-3">גבוהה</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">מתי מאושר כפתרון</td>
                    <td className="px-4 py-3">כברירת מחדל בכל בית פרטי</td>
                    <td className="px-4 py-3">רק כשממ״ד אינו אפשרי מבנית</td>
                    <td className="px-4 py-3">בית פרטי עם נגישות לעגורן</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">הגנה כימית מלאה</td>
                    <td className="px-4 py-3">כן</td>
                    <td className="px-4 py-3">לא</td>
                    <td className="px-4 py-3">כן</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-[var(--color-muted-2)] leading-relaxed">
              ראו גם את ההשוואה המלאה{" "}
              <Link
                href="/compare/mamad-vs-miggun-vs-migunit"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ממ״ד, שיפור מיגון או מיגונית
              </Link>
              {" "}לסקירה רחבה יותר של ארבעת פתרונות פיקוד העורף.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Trust differentiators - three sharp angles */}
      <Section tone="white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-8 text-center">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                לפני שחותמים על הצעה ל&ldquo;חמ״ד&rdquo;
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
                שלוש נקודות שמפרידות בין הצעה תקנית לבין שיווק מטעה
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            <Reveal>
              <article
                className="h-full p-6 rounded-2xl border-2 border-red-200 bg-red-50/40"
                aria-labelledby="hamad-warn-classification"
              >
                <div className="text-2xl mb-2" aria-hidden>⚠️</div>
                <h3 id="hamad-warn-classification" className="font-extrabold text-red-900 text-lg mb-2">
                  הצעה ל&ldquo;חמ״ד&rdquo; ללא סיווג רשמי = דגל אדום
                </h3>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                  פיקוד העורף לא מאשר &ldquo;חמ״ד&rdquo; ככינוי. הוא מאשר{" "}
                  <strong>סיווגים פורמליים</strong>: ממ״ד תקני (4422), ממ״ד יביל לדגם
                  וכתובת, או שיפור מיגון. אם הצעה לא מציינת לאיזה משלושת הסיווגים
                  היא שייכת, ולא נותנת מספר אישור פיקוד העורף הצפוי, היא לא הצעת
                  מחיר תקנית. דרשו את הסיווג בכתב לפני חתימה.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article
                className="h-full p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/40"
                aria-labelledby="hamad-hidden-spec"
              >
                <div className="text-2xl mb-2" aria-hidden>💰</div>
                <h3 id="hamad-hidden-spec" className="font-extrabold text-amber-900 text-lg mb-2">
                  שיפור מיגון במחיר של ממ״ד תקני
                </h3>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                  הסיכון הגדול של המונח &ldquo;חמ״ד&rdquo;: לקוח משלם מחיר של ממ״ד
                  תקני ({PRICING.mamadStandard.min.toLocaleString("en-US")}-{PRICING.mamadStandard.max.toLocaleString("en-US")} ₪) ומקבל בפועל שיפור מיגון של חדר קיים
                  ({PRICING.migunImprovement.min.toLocaleString("en-US")}-{PRICING.migunImprovement.max.toLocaleString("en-US")} ₪). השוואת המחיר לסיווג שמופיע בחוזה היא הדרך
                  היחידה למנוע את הפער. בקשו פירוט של תקן 4422, מערכת סינון לפי
                  4570, ודלת הדף תקנית. אם חסר אחד מהשלושה, אין ממ״ד תקני.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article
                className="h-full p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40"
                aria-labelledby="hamad-what-to-ask"
              >
                <div className="text-2xl mb-2" aria-hidden>✓</div>
                <h3 id="hamad-what-to-ask" className="font-extrabold text-emerald-900 text-lg mb-2">
                  ארבע השאלות בכתב לפני חתימה
                </h3>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                  מה הסיווג הפורמלי? מה התקן (4422 לממ״ד / אישור פרטני לשיפור)?
                  מה מסלול הרישוי (פטור / מקוצר / רגיל)? מי מגיש לפיקוד העורף ומה
                  מספר האישור הצפוי? תשובה ברורה לארבעתם בכתב, וההצעה תקנית.
                  גמגום באחת מהן? לפני חתימה דרשו{" "}
                  <Link
                    href="/contact"
                    className="font-bold text-emerald-900 underline underline-offset-4"
                  >
                    חוות דעת שנייה
                  </Link>
                  .
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Body content - for word count + AI depth */}
      <Section tone="white">
        <div className="max-w-3xl mx-auto prose prose-headings:text-[var(--color-primary)] prose-p:text-[17px] prose-p:leading-8 prose-p:text-[var(--color-ink)]">
          <h2 id="why-the-confusion">למה בכלל קיים בלבול בין ממ״ד לחמ״ד</h2>
          <p>
            הכינוי &ldquo;חמ״ד&rdquo; נכנס לשפה המקצועית בעיקר בשני הקשרים. ראשית,
            כקיצור ל&ldquo;חדר מוגן דירתי&rdquo;, שזהו תיאור של הפונקציה (חדר ביטחון
            בתוך הדירה), לא של תקן רגולטורי. שנית, כקיצור עצמאי שמשמש קבלנים ויועצים
            לתאר חדר ששודרג ברמת מיגון אך אינו עומד בתקן 4422 המלא.
          </p>
          <p>
            הבעיה: שני השימושים הללו לא מבחינים בין <strong>ממ״ד תקני</strong> (סיווג
            פורמלי, רישיון פיקוד העורף, תקן 4422) לבין <strong>שיפור מיגון</strong>{" "}
            (חיזוק חדר קיים, אישור פרטני, רמת הגנה נמוכה יותר). הלקוח שמע
            &ldquo;חמ״ד&rdquo; ולא יודע אם הוא מקבל ממ״ד תקני, או חיזוק יחסית של חדר
            קיים. ההפרש בערך, בעלות ובהגנה משמעותי.
          </p>

          <h2 id="what-the-formal-options-are">מה באמת קיים: ארבעת פתרונות פיקוד העורף</h2>
          <p>
            פיקוד העורף מכיר בארבעה סיווגים רשמיים של מרחב מוגן בבית פרטי או בדירה.
            אין &ldquo;חמ״ד&rdquo; ברשימה הזו. כדי לדעת מה מציעים לכם בפועל, בקשו לדעת
            לאיזה סיווג מהארבעה ההצעה שייכת.
          </p>
          <ul>
            <li>
              <strong>
                <Link href="/services/building-mamad">ממ״ד תקני</Link>
              </strong>{" "}
              : חדר חדש מבטון מזוין לפי תקן 4422. דלת הדף, חלון תקני, מערכת אוורור
              וסינון אב״כ. אישור פיקוד העורף לכתובת. {PRICING.mamadStandard.min.toLocaleString("en-US")}-{PRICING.mamadStandard.max.toLocaleString("en-US")} ₪ + מע״מ.
            </li>
            <li>
              <strong>
                <Link href="/services/prefab-mamad">ממ״ד יביל</Link>
              </strong>{" "}
              : יחידה תקנית מיוצרת במפעל לפי תקן 4422, מותקנת באתר בעגורן. דורשת
              אישור פיקוד העורף לדגם וכתובת. {PRICING.mamadYavilUnitOnly.min.toLocaleString("en-US")}-{PRICING.mamadYavilUnitOnly.max.toLocaleString("en-US")} ₪ unit-only ({PRICING.mamadYavilAllIn.min.toLocaleString("en-US")}-{PRICING.mamadYavilAllIn.max.toLocaleString("en-US")} all-in כולל יסודות, הובלה, הנפה, חיבורים, אטימה ופקע״ר).
            </li>
            <li>
              <strong>
                <Link href="/services/room-reinforcement">שיפור מיגון</Link>
              </strong>{" "}
              : חיזוק חדר קיים. דלת הדף או דלת חיזוק, חלון מוגן, אטימה, חיזוק
              קונסטרוקטיבי. <em>אינו ממ״ד תקני.</em> מאושר על ידי פיקוד העורף רק כשבנייה
              של ממ״ד אינה אפשרית. {PRICING.migunImprovement.min.toLocaleString("en-US")}-{PRICING.migunImprovement.max.toLocaleString("en-US")} ₪ + מע״מ.
            </li>
            <li>
              <strong>מיגונית</strong>: מבנה ממוגן חיצוני קטן, מאושר בעיקר באזורי גבול
              ובמרחב הציבורי. אינו פתרון פרטי תקני במרכז הארץ. ראו את ההסבר ב
              <Link href="/compare/mamad-vs-miggun-vs-migunit"> השוואה המלאה</Link>.
            </li>
          </ul>

          <h2 id="how-to-decode-an-offer">איך לפענח הצעת מחיר ל&ldquo;חמ״ד&rdquo;</h2>
          <p>
            שלושה סימנים מבחינים בין הצעה תקנית לבין &ldquo;חמ״ד&rdquo; שיווקי. הראשון:
            ציון מפורש של תקן 4422 לעבודה (לא רק &ldquo;לפי הנחיות פיקוד העורף&rdquo;
            הכללי). השני: פירוט של מערכת אוורור וסינון אב״כ עם תקן 4570 ויצרן מאושר.
            השלישי: מסלול אישור פיקוד העורף ומספר אישור צפוי, לא הבטחה כללית של
            &ldquo;נטפל בזה&rdquo;.
          </p>
          <p>
            הצעת מחיר שמכילה את שלושת הסימנים, מתארת ככל הנראה ממ״ד תקני, גם אם
            הקבלן השתמש בכינוי &ldquo;חמ״ד&rdquo;. הצעה שחסרה אחד מהם, לא משנה איך
            היא נקראת, מתארת בפועל שיפור מיגון או חדר חיזוק שאינו ממ״ד תקני. ההבדל
            במחיר אמור לשקף את ההבדל באיכות.
          </p>

          <h2 id="when-it-actually-matters">מתי ההבדל הזה משנה</h2>
          <p>
            לא רק לרגע האמת. שווי הדירה במכירה עתידית מושפע ישירות מקיומו של ממ״ד
            תקני: דירות עם ממ״ד נמכרות בפער של 8.2-21% מעל דירות ללא ממ״ד באותו אזור.
            רוכש פוטנציאלי שיברר אם בדירה ממ״ד תקני יבדוק את אישור פיקוד העורף ואת
            הסיווג הפורמלי. &ldquo;חמ״ד&rdquo; שאינו ממ״ד יזוהה מיד ויפגע במחיר.
          </p>
          <p>
            לכן הסיווג הפורמלי הוא לא רק עניין של רגולציה, הוא עניין של ערך נכס.
            לפני שמשלמים על &ldquo;חמ״ד&rdquo;, בקשו לוודא שמדובר בממ״ד תקני עם תיק
            אישורים שלם, או שמדובר בשיפור מיגון בתמחור שמתאים לסיווג. שני הפתרונות
            לגיטימיים בנסיבות הנכונות; ערבוב הסיווגים לא.
          </p>

          <p className="mt-8 text-sm text-[var(--color-muted)]">
            לפרטי תקני המיגון המלאים (4422, 4570, 4577) ולמדריך פיקוד העורף הרשמי, ראו את
            אתר{" "}
            <a
              href="https://www.oref.org.il"
              target="_blank"
              rel="noopener nofollow"
              className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
            >
              פיקוד העורף
            </a>
            .
          </p>
        </div>
      </Section>

      <FAQ items={faqs} title="שאלות נפוצות: ממ״ד מול חמ״ד" />

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        author="ofek-mazor"
        source={{ label: "פיקוד העורף, תקן 4422", url: "https://www.oref.org.il" }}
      />

      <ContactCTA
        title="לא בטוחים אם ההצעה שלכם מתארת ממ״ד תקני או חמ״ד שיווקי?"
        subtitle="השאירו פרטים. נעבור על ההצעה ונאמר בכתב מה הסיווג הפורמלי בפועל."
      />

      <RelatedLinks
        seed="compare/mamad-vs-hamad"
        targets={[
          "compare-main",
          "building-mamad",
          "room-reinforcement",
          "home-front-command-approval",
          "mamad-cost",
        ]}
      />
    </>
  );
}
