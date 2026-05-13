import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import { faqJsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { PRICING, formatPriceRange } from "@/lib/data/pricing";

const PATH = "/compare/mamad-vs-miggun-vs-migunit";
const TITLE = "ממ״ד, שיפור מיגון או מיגונית: מה מותר באמת לבית פרטי";
const DESCRIPTION =
  "מדריך מתקן: מהם 4 פתרונות המיגון של פיקוד העורף, מה מותר באמת לבית פרטי במרכז ומה רק לאזורי גבול ולמרחב הציבורי. הסבר שמתחיל איפה הרבה אחרים מטעים.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

type Option = {
  key: string;
  title: string;
  href: string;
  highlight?: boolean;
  badge?: string;
  rows: { label: string; value: string }[];
};

const privateHomeOptions: Option[] = [
  {
    key: "mamad",
    title: "ממ״ד תקני",
    href: "/services/building-mamad",
    highlight: true,
    badge: "פתרון תקני מלא",
    rows: [
      { label: "סטטוס תקנו", value: "מרחב מוגן דירתי תקני, מוכר על ידי פיקוד העורף" },
      { label: "אישור פקע״ר", value: "חובה ומתקבל בכל בית פרטי בארץ" },
      { label: "טווח מחיר", value: formatPriceRange(PRICING.mamadStandard) },
      { label: "זמן ביצוע", value: "2-4 חודשים במסלול פטור מהיתר" },
      { label: "למי מתאים", value: "כל בית פרטי שאפשר בו לבנות חדר חדש מבטון" },
      { label: "יתרון עיקרי", value: "הגנה תקנית מלאה וחדר פונקציונלי בשגרה" },
    ],
  },
  {
    key: "reinforce",
    title: "שיפור מיגון לחדר קיים",
    href: "/services/room-reinforcement",
    rows: [
      { label: "סטטוס תקנו", value: "חיזוק חדר קיים, רמת הגנה משופרת אך נמוכה מתקן ממ״ד" },
      { label: "אישור פקע״ר", value: "אישור פרטני, לרוב לא כממ״ד תקני אלא כחדר משופר" },
      { label: "טווח מחיר", value: formatPriceRange(PRICING.migunImprovement) },
      { label: "זמן ביצוע", value: "2 שבועות עד 2 חודשים" },
      { label: "למי מתאים", value: "בתים שבהם בנייה של ממ״ד חדש לא אפשרית מבחינה מבנית" },
      { label: "יתרון עיקרי", value: "מהיר, פולשני פחות, פתרון כשממ״ד תקני לא אפשרי" },
    ],
  },
  {
    key: "prefab",
    title: "ממ״ד מוכן (יביל)",
    href: "/services/prefab-mamad",
    rows: [
      { label: "סטטוס תקנו", value: "ממ״ד תקני בתנאי שהדגם והיצרן מאושרים פקע״ר ספציפית לכתובת" },
      { label: "אישור פקע״ר", value: "חובה, פר-כתובת. אישור גנרי של היצרן לא מספיק" },
      { label: "טווח מחיר", value: `${formatPriceRange(PRICING.mamadYavilAllIn)} (all-in); unit-only ${formatPriceRange(PRICING.mamadYavilUnitOnly, { withCurrency: false })} ₪` },
      { label: "זמן ביצוע", value: "6-12 שבועות, הצבה בימים בודדים" },
      { label: "למי מתאים", value: "בית פרטי עם גישה לכלי הרמה ומקום למיקום היחידה" },
      { label: "יתרון עיקרי", value: "ייצור במפעל, התקנה מהירה, פחות בלגן באתר" },
    ],
  },
];

const faqs = [
  {
    q: "האם מותר לי להתקין מיגונית בחצר במקום לבנות ממ״ד בתל אביב?",
    a: "לא במסלול פתרון פרטי תקני. במרכז הארץ הפתרון הפרטי המוכר על ידי פיקוד העורף הוא ממ״ד תקני (יצוק או יביל מאושר), או שיפור מיגון לחדר קיים כשממ״ד אינו אפשרי. מיגונית מיועדת בעיקר לאזורי גבול ולמרחב הציבורי על פי הנחיות פיקוד העורף הנוכחיות, ולא משמשת כתחליף לממ״ד דירתי בבית פרטי במרכז הארץ.",
  },
  {
    q: "אז למה אני רואה הצעות מחיר למיגונית כפתרון לבית פרטי?",
    a: "השוק לא תמיד מבחין בין מה שיצרן מציע לבין מה שפיקוד העורף מאשר ספציפית לכתובת שלך. מיגונית בחצר פרטית במרכז הארץ אינה תקנית כממ״ד דירתי גם אם היא מאושרת לסוג השימוש שלה במקום אחר. הבחירה שלכם בפועל נשארת בין ממ״ד תקני לבין שיפור מיגון בחדר קיים.",
  },
  {
    q: "מה ההבדל בין ממ״ד יצוק לממ״ד מוכן (יביל)?",
    a: "שניהם ממ״דים תקניים עם אישור פקע״ר. ממ״ד יצוק נבנה באתר, עם גמישות מלאה במידות ובשילוב עם הבית. ממ״ד יביל מיוצר במפעל ומותקן בבית, מהיר יותר ובמידות קבועות. חשוב: אישור פקע״ר לממ״ד יביל ניתן פר-כתובת, לא כדגם גנרי, ואת זה צריך לבדוק לפני חתימה על הצעת מחיר.",
  },
  {
    q: "אם אני באזור קו קדמי, מתי מיגונית כן רלוונטית?",
    a: "באזורי גבול ובמרחב הציבורי, פיקוד העורף מאשר מיגוניות כפתרון מיגון משלים בעיקר עבור גופים ציבוריים. גם שם, ממ״ד תקני נשאר הפתרון העדיף לבית פרטי. ההכרעה לגבי מיקום ספציפי דורשת בדיקה מול פיקוד העורף האזורי.",
  },
  {
    q: "כשאי אפשר לבנות ממ״ד תקני, מה עדיף, שיפור מיגון או ממ״ד יביל?",
    a: "ממ״ד יביל עדיף כשהוא אפשרי, כי הוא מספק רמת הגנה תקנית מלאה. הוא מצריך מקום בחצר וגישה לכלי הרמה. שיפור מיגון מתאים כשאין מקום ליחידה חיצונית או כשהתקציב מצומצם, אבל רמת ההגנה נמוכה יותר ולא מקבלת סיווג של מרחב מוגן דירתי.",
  },
  {
    q: "האם המחירים שמופיעים כאן כוללים אישור פקע״ר?",
    a: "המחירים בטווח שלנו כוללים את ליווי תיק הרישוי מול פיקוד העורף ומול הוועדה המקומית: הגשה, מענה על הערות, תיק פרויקט סופי. הם לא כוללים אגרות עירוניות (משתנות לפי רשות), בדיקות קרקע במגרשים מורכבים, או תוספות שאינן בתקן הסטנדרטי כמו מערכת סינון פרמיום או מיזוג ייעודי.",
  },
  {
    q: "מה אתם ממליצים בפועל לבית פרטי במרכז?",
    a: "ברירת המחדל היא ממ״ד תקני יצוק באתר. הוא הפתרון שמשלב הגנה מלאה עם חדר שמשמש בשגרה, ושומר על ערך הנכס. כשהבית או המגרש לא מאפשרים, ממ״ד יביל מאושר לכתובת הוא חלופה מצוינת. שיפור מיגון נשאר אופציה לבתים שבהם שתי האפשרויות הראשונות אינן ישימות.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="מדריך מתקן"
        title="ממ״ד, שיפור מיגון או מיגונית: מה מותר באמת לבית פרטי"
        subtitle="פיקוד העורף מגדיר ארבעה פתרוני מיגון, וכל אחד עם קהל יעד וסביבה משלו. עמוד זה מסביר מה מותר באמת לבית פרטי במרכז הארץ, ולמה מיגונית אינה תחליף לממ״ד דירתי."
        crumbs={[
          { name: "השוואות", href: "/hashvaa" },
          { name: "ממ״ד vs מיגון vs מיגונית", href: PATH },
        ]}
      />

      <JsonLd data={faqJsonLd(faqs)} />

      <Section>
        <div className="max-w-3xl mb-10">
          <p className="text-[17px] text-[var(--color-ink)] leading-8">
            לבית פרטי במרכז הארץ, הפתרונות שפיקוד העורף מכיר כמרחב מוגן הם ממ״ד תקני (יצוק באתר או יביל מאושר ספציפית לכתובת) ושיפור מיגון לחדר קיים שלא ניתן להמיר לממ״ד תקני. מיגונית, על אף השם הדומה, היא קטגוריה אחרת לגמרי: יחידה זמנית או חצי קבועה לאזורי גבול, למרחב הציבורי ולמתחמים קהילתיים, ולא לבית פרטי במרכז. בעמוד הזה תמצאו את ההבחנה המלאה, טווחי מחיר עדכניים והנחיות מעשיות לבחירה.
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
          שלוש האפשרויות הריאליות לבית פרטי
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-6 max-w-3xl">
          הטבלה הבאה משווה את הפתרונות שאכן רלוונטיים כשמדובר בבית פרטי במרכז: ממ״ד תקני יצוק, ממ״ד יביל מאושר פר-כתובת, ושיפור מיגון לחדר קיים. מיגונית, שמופיעה הרבה בחיפושים בגוגל, אינה כלולה כאן בכוונה, ובסעיף הבא נסביר למה.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {privateHomeOptions.map((o) => (
            <div
              key={o.key}
              className={`card-premium p-6 flex flex-col h-full ${
                o.highlight ? "ring-2 ring-[var(--color-accent)] shadow-xl relative" : ""
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
                    <dd className="text-sm text-[var(--color-ink)] leading-relaxed">{r.value}</dd>
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
                למידע נוסף על השירות ←
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[var(--color-muted)] max-w-3xl">
          טווחי המחיר אינם כוללים מע״מ. הנתונים אופייניים למרכז הארץ ב-2026 ויכולים להשתנות לפי גודל המגרש, הוועדה המקומית ומורכבות הקונסטרוקציה. כל פרויקט נבחן פרטנית.
        </p>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-4">
            מיגונית: מה זה באמת ולמה היא לא הפתרון לבית פרטי במרכז
          </h2>
          <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-4">
            מיגונית היא יחידת מיגון מתועשת, לרוב טרומית, שפיקוד העורף מאשר בעיקר לאזורי גבול, למתחמים ציבוריים, לגנים ולסביבות קהילתיות שבהן צריך לפרוס פתרון מהיר באזור פתוח. אינה מוגדרת כמרחב מוגן דירתי תקני. ההבחנה בין מיגונית לבין ממ״ד תקני ניכרת בסוג האישורים הנדרשים ובדרישות הטכניות.
          </p>
          <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-4">
            הסיבה שהשם בכל זאת חוזר בחיפושים פרטיים היא בעיקר שיווקית: ספקים שמייצרים יחידות חצי-מיגוניות מציעים אותן בעלות נמוכה יחסית, והקונה הסביר מבלבל בין מה שמותר במשרד הביטחון לבין מה שמתאים לחצר הביתית בעיר במרכז. ההבחנה הזאת קריטית. ההבדל בין יחידה תקנית מאושרת פר-כתובת לבין יחידה גנרית הוא ההבדל בין הגנה אמיתית במקרה חירום לבין תחושת ביטחון בלי כיסוי תקני.
          </p>
          <p className="text-[17px] text-[var(--color-ink)] leading-8">
            הכלל המעשי שאנחנו עובדים לפיו: כשבית פרטי במרכז שואל מיגונית, ב-95 אחוז מהמקרים מה שמתאים בפועל הוא ממ״ד תקני, ובמקרים שבהם ממ״ד תקני לא אפשרי, שיפור מיגון לחדר קיים. ההפניה לפתרון יביל מתאימה כשהיצרן יכול להמציא אישור פיקוד עורף ספציפי לכתובת, לא רק תעודת מוצר.
          </p>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-4">
            איך משנה האזור הגאוגרפי את ההמלצה
          </h2>
          <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-4">
            במרכז הארץ זמני ההתרעה ארוכים יחסית, הקירות סטנדרטיים, והמטרה היא חדר תקני שאפשר להגיע אליו תוך שניות מתוך הבית. בקו קדמי בדרום (אשדוד, אשקלון, נתיבות) ובצפון (נהריה, שלומי, הקריות הצפוניות) זמני ההתרעה קצרים בהרבה, ופיקוד העורף מחיל דרישות מחמירות יותר על עובי הקירות, על דלת ההדף ועל מסגרות החלון. שם, גם פתרונות יבילים נדרשים לעבור התאמה אזורית.
          </p>
          <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-4">
            מיגוניות מאושרות משמשות באזורים אלה לעיתים כתוספת מיגון ציבורי במרחבים פתוחים. גם בישוב גבול, אם בית פרטי שואל פתרון, ההמלצה לרוב היא ממ״ד תקני יצוק או יביל מאושר.
          </p>
          <p className="text-[17px] text-[var(--color-ink)] leading-8">
            לפני קבלת החלטה ביישוב מסוים, מומלץ לבדוק מול אגף ההגנה האזרחית האזורי או מול הוועדה המקומית מה הפתרון שמאושר ספציפית לכתובת שלך, ובאיזו רמת מפרט.
          </p>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-4">
            איך לבחור בין ממ״ד תקני, ממ״ד יביל ושיפור מיגון
          </h2>
          <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-4">
            הבחירה בין שלושת הפתרונות לבית פרטי תלויה בשלושה משתנים: מה אפשרי מבחינה מבנית בבית הקיים, האם יש מקום במגרש ליחידה חיצונית, ואיזה תקציב ולוח זמנים מתאימים. בית עם הרחבה אפשרית או חדר שאפשר להמיר לבטון מוצק מתאים לממ״ד תקני יצוק. מגרש עם גישה לכלי הרמה וללא אפשרות הרחבה פנימה מתאים לממ״ד יביל. בית קטן עם חדר קיים שאפשר לחזק אבל לא להוסיף לו תקרת ממ״ד מתאים לשיפור מיגון.
          </p>
          <p className="text-[17px] text-[var(--color-ink)] leading-8">
            בכל מקרה, הצעדים הראשונים זהים: סיור בבית, מדידות, בדיקת תכניות קיימות והבנת מגבלות הוועדה המקומית. רק על בסיס המידע הזה אפשר לתת המלצה אמיתית. אנחנו מגיעים לסיור ראשוני ללא עלות וללא התחייבות.
          </p>
        </div>
      </Section>

      <FAQ items={faqs} includeSchema={false} />

      <RelatedLinks
        seed="compare/mamad-vs-miggun-vs-migunit"
        targets={[
          "building-mamad",
          "room-reinforcement",
          "prefab-mamad",
          "mamad-cost",
          "compare-tzamud",
        ]}
      />

      <ContactCTA />
    </>
  );
}
