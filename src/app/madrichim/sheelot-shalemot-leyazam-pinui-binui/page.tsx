import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContentSection from "@/components/ContentSection";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import InlineLeadForm from "@/components/InlineLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/madrichim/sheelot-shalemot-leyazam-pinui-binui";
const TITLE = "25 שאלות שלמות ליזם פינוי בינוי 2026 | התחדשות";
const DESCRIPTION =
  "רשימה מלאה של 25 שאלות בדיקת נאותות ליזם פינוי בינוי: רקע חברה, איתנות פיננסית, ביצוע, חוזה, תקשורת. מה התשובה הנכונה לכל שאלה ודגלים אדומים.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל בין רשימת 10 שאלות ליזם לבין רשימת 25 שאלות?",
    a: "רשימת 10 השאלות מכסה את הקריטיים ביותר ומתאימה לפגישה ראשונה (60-90 דקות). רשימת 25 השאלות היא בדיקת נאותות מלאה ומתאימה לשלב מתקדם, אחרי שצומצמו האפשרויות ל-2-3 יזמים. רשימת 25 השאלות מתחלקת לחמש קטגוריות: רקע חברה, פיננסיים, ביצוע, חוזה, תקשורת. ההמלצה: התחילו ב-10, ועברו ל-25 כשמצמצמים מועמדים.",
  },
  {
    q: "האם יזם יענה לכל 25 השאלות?",
    a: "יזם איכותי כן, יזם בעייתי לא. 25 השאלות לא נשאלות בפגישה אחת. הן נשלחות מראש בכתב, היזם מכין תשובות מסודרות, ומגיע לפגישה עם תיק מסמכים תומכים. סירוב לענות על שאלות בסיסיות (כמו תיק פרויקטים או ערבויות שניתנו) הוא דגל אדום. סירוב חלקי על שאלות פיננסיות מסחריות (כמו רווחיות פנימית) הוא לגיטימי.",
  },
  {
    q: "כמה זמן לוקח לבדוק את התשובות?",
    a: "ל-25 שאלות נדרש 14-21 ימי עסקים: שבוע ליזם להכין מסמכים, שבוע לעורך הדין שלכם לבדוק, שבוע למפגש פנים-מול-פנים. בדיקות חיצוניות (רשם הקבלנים, רשם החברות, בנקים) מבוצעות במקביל. סך הכל 3-4 שבועות מההצעה הראשונה לעבר חתימה. מהירות גבוהה יותר היא דגל אדום: סימן ללחץ או לחוסר עומק.",
  },
  {
    q: "איזה דגלים אדומים הכי קריטיים בתשובות?",
    a: "ארבעה: (1) חוסר תיק פרויקטים מוגמרים, (2) חברה חדשה (מתחת ל-3 שנים) או ללא רישום קבלן רשום, (3) סירוב להציג מאזן מבוקר, (4) תשובות סיסמתיות בלי נתונים. גם דגל גדול: יזם שמבטיח לוח זמנים אגרסיבי במיוחד (פחות מ-6 שנים לפרויקט סטנדרטי). מי שמבטיח שטויות יבצע גם שטויות.",
  },
  {
    q: "מה לעשות אם יזם נותן תשובה חלקית?",
    a: "תיעוד וחזרה. תיעדו את התשובה החלקית בפרוטוקול, רשמו את החלק החסר, חזרו אליו בפגישה הבאה. אם החלק חסר נשאר חסר אחרי שתי פניות נוספות בכתב, הסבירות הגבוהה היא שאין לו תשובה. במצבים מסוימים (כמו שאלות פיננסיות מסחריות) יזם מסכים לחשוף רק לעורך דין הדיירים תחת הסכם סודיות. זו פשרה לגיטימית.",
  },
  {
    q: "האם נדרשת אסיפת דיירים לאישור התשובות?",
    a: "כן, אחרי הצמצום ל-2 יזמים מועמדים. אסיפת דיירים רשמית מציגה את התשובות, מציעה דיון, ומאשרת את הבחירה. כל חבר נציגות אחראי על קטגוריה אחת (פיננסיים, ביצוע, חוזה וכו') ומציג את הממצאים. ההצבעה דורשת רוב פשוט מהבעלים שמופיעים, אך החתימה הסופית על הסכם דורשת את הרוב הנדרש (67% לתביעת סרבן, 100% לביצוע).",
  },
  {
    q: "האם ניתן להחליף יזם אחרי שחתמו על MOU?",
    a: "תלוי בסעיפי MOU. רוב המסמכים מאפשרים יציאה תוך 60-90 ימים אם תנאים בסיסיים לא מתקיימים (אישור 67%, היתר תכנון). יציאה מאוחרת יותר עשויה לעלות פיצוי ליזם (10,000-50,000 ש״ח לדירה). עורך דין דיירים בודק את הסעיף לפני חתימה. אם הסעיף לא קיים, מוסיפים אותו. החלפת יזם אחרי חתימה על הסכם מחייב היא יקרה ומורכבת.",
  },
  {
    q: "מה אם הנציגות לא מצליחה לרשום 25 שאלות מסודרות?",
    a: "זו עצמה תשובה. נציגות שלא מצליחה לעבד 25 שאלות לא תצליח לעבד הסכם של 60+ עמודים. ההמלצה: שיתוף פעולה עם יועץ דיירים מקצועי שיכין את הרשימה ויעזור בניתוח התשובות. עלות: 8,000-15,000 ש״ח. החיסכון בטעויות מאוחרות מצדיק את ההוצאה. ראו גם את המדריך על איך בוחרים יזם פינוי בינוי לרשימת השאלות הקצרה יותר.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="25 שאלות שלמות ליזם פינוי בינוי 2026"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "25 שאלות שלמות ליזם", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · בדיקת נאותות"
        title="25 שאלות שלמות ליזם פינוי בינוי 2026"
        subtitle="רשימה מלאה לבדיקת נאותות מתקדמת: 5 קטגוריות, 25 שאלות, מה התשובה הנכונה לכל שאלה, ודגלים אדומים."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "25 שאלות שלמות ליזם", href: PATH },
        ]}
      />

      {/* UPGRADE 3: Quick Answer block */}
      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
            <div className="rounded-2xl border-2 border-[var(--color-accent)]/30 bg-[var(--color-soft)] p-6 md:p-7 mb-6">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-3">
                תשובה מהירה
              </div>
              <p className="text-[17px] text-[var(--color-ink)] leading-8 m-0">
                <strong>בדיקת נאותות מלאה ליזם פינוי בינוי בישראל ב-2026 כוללת 25 שאלות מסודרות בחמש קטגוריות:</strong> רקע חברה (5 שאלות), איתנות פיננסית (5), ניסיון בביצוע (5), תנאי חוזה (5), ותקשורת ותהליך (5). הרשימה נשלחת בכתב, היזם מכין תשובות עם מסמכים תומכים, ועורך דין דיירים מאמת. זמן בדיקה: 3-4 שבועות. עלות יועץ דיירים: 8,000-15,000 ש״ח. שווה את ההשקעה, כי טעות בבחירת יזם עולה לפעמים מאות אלפי שקלים לכל בעל דירה.
              </p>
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              25 השאלות אינן תחליף לרשימת 10 השאלות הקריטיות שנשאלות בפגישה הראשונה. הן הצעד הבא, אחרי שצומצמו המועמדים ל-2-3 יזמים. למסגרת הקצרה של בחירת יזם ראו את{" "}
              <Link
                href="/madrichim/10-shealot-le-yazam"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                10 השאלות שכל דייר חייב לשאול יזם
              </Link>
              . למידע מקיף על תהליך הבחירה ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/yazam"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                איך בוחרים יזם פינוי בינוי
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      {/* UPGRADE 6: Featured Snippet H2 */}
      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-zo" title="בדיקת נאותות ליזם היא בדיקה של חמישה צירים">
            <p>
              בדיקת נאותות (Due Diligence) ליזם פינוי בינוי היא תהליך מסודר של 25 שאלות מתועדות בכתב על חמישה צירים: זהות החברה ובעליה, מצב פיננסי, היסטוריית ביצוע, תנאי חוזה, ויכולת תקשורת. בניגוד לפגישת היכרות שמתבססת על רושם, בדיקת נאותות מתבססת על מסמכים: מאזנים מבוקרים, רישומי חברה, חוזים קודמים, אישורי בנק, ערבויות שניתנו. כל תשובה דורשת מסמך תומך.
            </p>
            <p>
              נציגות דיירים שמדלגת על בדיקת נאותות חוסכת 14-21 ימי עסקים, אך מסתכנת בטעות שעולה לפעמים 200,000-500,000 ש״ח לכל בעל דירה. דיירים שעברו בדיקת נאותות מסודרת מדווחים על שביעות רצון גבוהה משמעותית בסיום הפרויקט. הנתונים מגיעים מסקרי שביעות רצון של הרשות הממשלתית להתחדשות עירונית (gov.il/he/departments/topics/urban_renewal).
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="ktegoria-1" title="קטגוריה 1: רקע חברה (שאלות 1-5)">
            <p>
              חמש שאלות שמטרתן לאשר שהיזם הוא ישות עסקית רצינית עם היסטוריה ניתנת למעקב.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מה מספר הח״פ של החברה ומתי נרשמה?</strong> תשובה רצויה: חברה רשומה לפחות 5 שנים. מסמך תומך: תדפיס מרשם החברות (data.gov.il / רשם החברות). דגל אדום: חברה חדשה או חברה שהוקמה במיוחד לפרויקט.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מי בעלי המניות והדירקטורים?</strong> תשובה רצויה: זהות ברורה, ניסיון בענף, אין בעיות משפטיות. מסמך תומך: תדפיס דירקטוריון. בדיקה חיצונית: חיפוש בית משפט לפי שם בעל מניות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">האם החברה רשומה אצל רשם הקבלנים?</strong> תשובה רצויה: כן, רישום קבלן רשום (לא קבלן מקצועי). מסמך תומך: אישור עדכני מרשם הקבלנים (mit.gov.il/קבלנים). דגל אדום קריטי: לא רשום או רשום לא בקטגוריה הנכונה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">כמה פרויקטי פינוי בינוי החברה השלימה?</strong> תשובה רצויה: 3+ פרויקטים שהסתיימו ונמסרו לדיירים. מסמך תומך: רשימה עם שמות מתחמים, ערים, ומספרי דירות. בדיקה חיצונית: ביקור בפרויקט אחד לראות את התוצר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">האם החברה חברה באיגוד היזמים בישראל?</strong> תשובה רצויה: כן, חברה פעילה. מסמך תומך: אישור חברות. הערה: לא כל יזם איכותי חבר באיגוד, אבל חברות באיגוד היא אינדיקציה חיובית לקיום סטנדרטים.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ktegoria-2" title="קטגוריה 2: איתנות פיננסית (שאלות 6-10)">
            <p>
              חמש שאלות שמטרתן לאמת שהיזם יכול ממש לבצע את הפרויקט מבחינה פיננסית.
            </p>
            <ol start={6} className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">האם תוכלו להציג מאזן מבוקר אחרון?</strong> תשובה רצויה: כן, מאזן 2024 או 2025 מבוקר על ידי רואה חשבון. מסמך תומך: מאזן מלא. בדיקה: יחס נזילות (Current Ratio) מעל 1.5, יחס חוב להון מתחת ל-3.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איזה בנקים מממנים את החברה?</strong> תשובה רצויה: 1-3 בנקים גדולים (מזרחי, לאומי, פועלים, דיסקונט) עם מסגרת אשראי שוטפת. דגל אדום: בנקים קטנים בלבד או חוסר מסגרת אשראי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה ההון העצמי שמוקצה לפרויקט?</strong> תשובה רצויה: 15-25% מסך עלות הפרויקט מההון העצמי של החברה. מסמך תומך: התחייבות בכתב. דגל אדום: פחות מ-10% הון עצמי, מה שאומר שהפרויקט ממומן כולו בחוב.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איזה ערבויות אתם מספקים בכל שלב?</strong> תשובה רצויה: ערבות חוק מכר (לא בנקאית) לפי חוק המכר 1973, סעיף 2א. ערבויות בנקאיות לכל שלב: כניסה לחוזה, פינוי, מסירה. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/eravut"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  ערבויות בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">האם החברה התמודדה אי פעם עם פירוק או חדלות פירעון?</strong> תשובה רצויה: לא, כולל החברות הקשורות. מסמך תומך: הצהרה בכתב חתומה. בדיקה חיצונית: בית משפט מחוזי, רשם החברות. דגל אדום קריטי: כן, גם אם לפני שנים.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="ktegoria-3" title="קטגוריה 3: ניסיון בביצוע (שאלות 11-15)">
            <p>
              חמש שאלות שמטרתן לאמת שהחברה לא רק יודעת איך לדבר על פרויקטים, אלא גם איך לסיים אותם.
            </p>
            <ol start={11} className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">תוכלו להציג רשימת 5 פרויקטים שהסתיימו עם פרטי קשר של נציגויות?</strong> תשובה רצויה: כן, רשימה מלאה עם 1-2 אנשי קשר לכל פרויקט. בדיקה: התקשרות לפחות ל-3 מתוך 5 לשמיעת חוויה אמיתית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה היה לוח הזמנים בפועל בפרויקטים האחרונים?</strong> תשובה רצויה: 7-12 שנים (טווח סביר). דגל אדום: 13+ שנים בכמה פרויקטים. דגל אדום נוסף: יזם שמבטיח 5-6 שנים בפרויקט סטנדרטי, מה שלא ריאלי. ראו את המדריך על{" "}
                <Link
                  href="/madrichim/luach-zmanim-pinui-binui-2026"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  לוח זמנים פינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">האם ניתן לבקר באתר בנייה פעיל?</strong> תשובה רצויה: כן, ביקור מתואם תוך שבועיים. בדיקה במהלך הביקור: ניקיון, ארגון, איכות עבודות, אימון העובדים בנושא בטיחות. דגל אדום: סירוב או דחיות חוזרות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מי הקבלן שמבצע את הבנייה בפועל?</strong> תשובה רצויה: קבלן רשום (סיווג ג׳-1 לפחות) שעובד עם החברה לאורך שנים. בדיקה חיצונית: רישום קבלן רשום, פרויקטים קודמים. דגל אדום: קבלן חדש או החלפת קבלן בכל פרויקט.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איך מטופלים ליקויים אחרי מסירה?</strong> תשובה רצויה: תקופת בדק 12-24 חודשים, ערבות בנקאית להבטחה, צוות מטעם החברה לטיפול בקריאות. בדיקה חיצונית: תיק תיקונים מפרויקטים קודמים. דגל אדום: ליקויים שנשארים פתוחים שנתיים+ אצל לקוחות עבר.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ktegoria-4" title="קטגוריה 4: תנאי חוזה (שאלות 16-20)">
            <p>
              חמש שאלות שמטרתן לאמת שתנאי החוזה הוגנים, ושהיזם פתוח לתיקונים.
            </p>
            <ol start={16} className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מה התמורה המוצעת לכל בעל דירה?</strong> תשובה רצויה: דירה חדשה גדולה ב-25-35 מ״ר במרכז הארץ, חניה צמודה, מחסן, פיצוי כספי 100,000-300,000 ש״ח. שכר דירה חלופי לתקופת הביניים. למסגרת ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/temurot"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  תמורות בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה התנאים לקשישים?</strong> תשובה רצויה: דירה חליפית מותאמת, אופציה לדירה ב-3 קומות נמוכות, פיצוי מוגדל, סיוע במעבר. נדרש לפי תיקון 80 לחוק התכנון והבנייה. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/kshishim"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  זכויות קשישים בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איזה סנקציות קיימות במקרה של איחור היזם?</strong> תשובה רצויה: פיצוי כספי לחודש איחור (5,000-15,000 ש״ח), הארכת ערבויות אוטומטית, תוספת לשכר הדירה. דגל אדום: אין סנקציות, או סנקציות סמליות בלבד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה קורה אם אין הרוב הנדרש?</strong> תשובה רצויה: הסכם מותנה ב-67% (לתביעת סרבן) או 100% (לביצוע) תוך 18 חודשים. אם לא מושג הרוב, ההסכם מתבטל בלי עלות לדיירים. דגל אדום: סעיף שמחייב את הדיירים גם אם הרוב לא הושג.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">האם תסכימו לתיקונים בחוזה?</strong> תשובה רצויה: כן, ל-15-25 סעיפים סטנדרטיים (סנקציות, ערבויות, תקופת בדק). מסגרת תיקונים תוך 30 יום. דגל אדום: יזם שמסרב כמעט לכל תיקון או מציג חוזה Take it or leave it.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="ktegoria-5" title="קטגוריה 5: תקשורת ותהליך (שאלות 21-25)">
            <p>
              חמש שאלות שמטרתן לאמת שהיזם יודע לעבוד עם נציגות דיירים לאורך שנים, ולא רק לסגור עסקה.
            </p>
            <ol start={21} className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מי איש הקשר היחיד מהחברה לאורך הפרויקט?</strong> תשובה רצויה: מנהל פרויקט אישי, זמינות 5 ימים בשבוע, טלפון ישיר. דגל אדום: צוות שמתחלף, אין נקודת קשר ברורה, או רק אימייל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">באיזה תדירות מתקיימות פגישות נציגות-יזם?</strong> תשובה רצויה: פגישה חודשית בשלבי תכנון, דו-שבועית בשלבי ביצוע. פרוטוקול רשמי לכל פגישה. דגל אדום: פגישות לפי דרישה בלבד, ללא פרוטוקולים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איך מתועד התקדמות הפרויקט?</strong> תשובה רצויה: דוח חודשי כתוב לנציגות, פלטפורמה דיגיטלית עם מסמכים פתוחים, גישה לתיק הפרויקט. דגל אדום: עדכונים בעל פה בלבד, מסמכים מוגבלים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איך מטפלים בקונפליקטים בין דיירים?</strong> תשובה רצויה: מתוך הצעת היזם: מתווך ניטרלי (במקרים מתאימים), אסיפת דיירים מסודרת, ייעוץ משפטי. דגל אדום: גישה תוקפנית, ניצול קונפליקטים להפעלת לחץ.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה אם בעל דירה רוצה לצאת מהפרויקט באמצע?</strong> תשובה רצויה: מנגנון מסודר של מכירת זכויות לבעל דירה אחר או ליזם, בתנאים שווה ערך. דגל אדום: סירוב מוחלט או מנגנון שמעניש את היוצא.
              </li>
            </ol>
            <p>
              לעיון נוסף על תהליך פינוי בינוי המלא ראו את אתר{" "}
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              {" "}ולחוק עיון ישיר באתר{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                מאגר חוק נבו
              </a>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      {/* UPGRADE 4: Case study */}
      <Section tone="white">
        <Reveal>
          <ContentSection id="dugma" title="דוגמה אמיתית: בדיקת נאותות שחסכה 40 מיליון ש״ח">
            <p>
              נציגות מתחם 84 יחידות בחולון קיבלה ב-2022 הצעות משלושה יזמים. שניים עברו את 10 השאלות הבסיסיות. הנציגות עברה לבדיקת 25 השאלות עם שניהם.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">יזם א&apos;:</strong> השלים שאלות 1-5 (רקע) טוב. בשאלות 6-10 (פיננסיים) סירב להציג מאזן מבוקר, טען שזה מסחרי. בעקבות הסירוב, נציגות פנתה לרשם החברות וגילתה שלחברה היה מאזן שלילי בהון העצמי, וחוב מצטבר של 28 מיליון ש״ח. הנציגות פסלה את היזם.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">יזם ב&apos;:</strong> השלים את כל 25 השאלות עם מסמכים תומכים. הציג 7 פרויקטים מוגמרים, מאזן מבוקר עם הון עצמי 60 מיליון ש״ח, מסגרת אשראי 200 מיליון ש״ח מבנק הפועלים. הנציגות בחרה ביזם ב&apos;. הפרויקט נמצא כיום בשלב היתר בנייה, צפוי למסירה ב-2027.
            </p>
            <p>
              העלות החסכונית: בערך 40 מיליון ש״ח (סך התמורה לדיירים שהיתה הולכת לאיבוד אם יזם א&apos; היה נכשל בפרויקט). העלות הישירה של הבדיקה: 18,000 ש״ח ליועץ דיירים שניהל את התהליך. החזר השקעה: 220,000%.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="dgalim-adumim" title="ארבעת הדגלים האדומים הקריטיים">
            <p>
              לסיכום הקריטי, ארבעה דגלים אדומים שמופעים בלמעלה מ-80% מתיקי בעיה.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="דגלים אדומים בתשובות יזם"
              columns={[
                { key: "degel", header: "תופעה" },
                { key: "shamash", header: "מה זה אומר" },
                { key: "peulah", header: "פעולה מומלצת" },
              ]}
              rows={[
                {
                  label: "סירוב להציג מאזן",
                  cells: { degel: "סירוב חוזר", shamash: "מצב פיננסי בעייתי", peulah: "פסילה מיידית" },
                },
                {
                  label: "תיק פרויקטים ריק",
                  cells: { degel: "אין פרויקטים מוגמרים", shamash: "חברה ללא ניסיון", peulah: "פסילה מיידית" },
                },
                {
                  label: "לוח זמנים אגרסיבי",
                  cells: { degel: "פחות מ-6 שנים", shamash: "הבטחה לא ריאלית", peulah: "התרעה, חיפוש פרטים" },
                },
                {
                  label: "סירוב לתיקוני חוזה",
                  cells: { degel: "Take it or leave it", shamash: "יזם לא מקצועי", peulah: "התרעה, חיפוש מועמד אחר" },
                },
              ]}
              footnote="הופעת שני דגלים או יותר היא עילה כמעט בלתי ניתנת לביטול לפסילת יזם."
            />
          </div>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "הרשות הממשלתית להתחדשות עירונית",
          url: "https://www.gov.il/he/departments/topics/urban_renewal/",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              צריכים עזרה בבדיקת נאותות ליזם?
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים נציגויות דיירים בבדיקת יזמים. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="בדיקת נאותות ליזם פינוי בינוי"
            subtitle="השאירו שם וטלפון. נחזור אליכם עם רשימת בדיקות מותאמת לפרויקט שלכם."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/sheelot-shalemot-leyazam"
        targets={[
          "pinui-binui-yazam",
          "madrichim-shealot-yazam",
          "madrichim-yazamim",
          "pinui-binui-eravut",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על בדיקת נאותות ליזם"
        tone="soft"
        includeSchema
      />
    </>
  );
}
