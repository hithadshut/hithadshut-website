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
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/memad/bayit-prati";
const TITLE = "ממ״ד לבית פרטי 2026: סוגים, מחירים, פיקוד העורף | התחדשות";
const DESCRIPTION =
  "ממ״ד לבית פרטי 2026: ממ״ד צמוד פנימי, חיצוני בחצר, על הגג, או תת-קרקעי. עלויות 160,000-280,000 ש״ח. מסלול פטור מהיתר במסגרת חרבות ברזל. מדריך מלא לאפשרויות, עלויות, וההליך.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "כמה עולה לבנות ממ״ד בבית פרטי?",
    a: "עלות בנייה של ממ״ד בבית פרטי נעה בין 160,000 ל-280,000 ש&ldquo;ח, בהתאם לסוג, גודל, ומיקום. ממ״ד צמוד פנימי בגודל 9-12 מ&ldquo;ר עולה בדרך כלל 160,000-200,000 ש&ldquo;ח. ממ״ד חיצוני בחצר עולה 180,000-240,000 ש&ldquo;ח. ממ״ד על הגג או תת-קרקעי עלול לעלות 220,000-280,000 ש&ldquo;ח בשל מורכבות הביצוע. העלות כוללת תכנון, רישוי, חפירה, יציקת בטון, דלת הדף, חלון, מערכת אוורור וסינון, וגמר פנים.",
  },
  {
    q: "מה ההבדל בין ממ״ד צמוד לממ״ד חיצוני?",
    a: "ממ״ד צמוד הוא ממ״ד שנבנה כחלק אינטגרלי מהבית, בדרך כלל כתוספת בנייה צמודה לחדר קיים. הוא משמש גם כחדר רגיל ביומיום. ממ״ד חיצוני נבנה בחצר הבית כיחידה נפרדת, מחובר לבית במעבר או נגיש דרך החצר. ממ״ד צמוד נוח יותר במצב חירום ובשימוש יומיומי. ממ״ד חיצוני מתאים כאשר אין מקום בתוך הבית או מבנה הבית לא מאפשר הוספה צמודה.",
  },
  {
    q: "כמה זמן לוקחת בנייה?",
    a: "בנייה של ממ״ד בבית פרטי לוקחת 3 עד 5 חודשים מתחילת העבודה ועד מסירה. שלב התכנון והרישוי לוקח 4 עד 8 שבועות. שלב החפירה והיסודות לוקח 2 עד 3 שבועות. יציקת הקירות והתקרה לוקחת 2 עד 4 שבועות. התקנת דלת הדף, חלון, ומערכת אוורור לוקחת 1 עד 2 שבועות. גמר פנים לוקח 2 עד 4 שבועות. במסלול הפטור התקנים פשוטים יותר וזמני האישור מתקצרים.",
  },
  {
    q: "האם צריך היתר בנייה?",
    a: "ברוב הבתים הפרטיים המסלול הפשוט הוא מסלול הפטור מהיתר במסגרת תקנה 30ב לתקנות התכנון והבנייה (הוראת חרבות ברזל), שמתחדשת מעת לעת. המסלול חל על בנייה של ממ״ד בלבד בבתים צמודי קרקע ובניינים עד 2 קומות. אם הבית לא נכלל במסלול הפטור, נדרש היתר בנייה רגיל מהוועדה המקומית. אישור פיקוד העורף נדרש בכל מקרה. כדאי לבדוק את הסטטוס העדכני של הוראת השעה לפני תחילת התהליך.",
  },
  {
    q: "האם ממ״ד מעלה את ערך הבית?",
    a: "כן. ממ״ד מעלה את ערך הבית הפרטי בדרך כלל ב-10% עד 20% משווי השוק לפני הבנייה. בנוסף לערך הביטחוני, ממ״ד משמש כחדר נוסף בבית, ומעלה את גודל הבנוי הרשום בטאבו. בערים שבהן הביקוש לבתים פרטיים גבוה, ממ״ד הוא קריטריון חיפוש מרכזי, וקונים מוכנים לשלם פרמיה על בית עם ממ״ד תקני בהשוואה לבית ללא ממ״ד.",
  },
  {
    q: "אפשר להשתמש בו כחדר רגיל?",
    a: "כן, וזה הסטנדרט בבתים פרטיים. ממ״ד צמוד משמש כחדר עבודה, חדר אורחים, חדר ילד נוסף, או חדר משחקים. תקנים של פיקוד העורף לא אוסרים שימוש יומיומי. נדרש לשמור על נגישות הדלת ולא לחסום את מערכת האוורור, אבל לא נדרש לשמור את החדר ריק. בעת אזעקה, פינוי החדר לוקח שניות בודדות אם הוא לא מועמס בריהוט כבד.",
  },
  {
    q: "מה צריך לבדוק בקבלן ממ״ד?",
    a: "ארבעה דברים מרכזיים: רישום ברשם הקבלנים בענף הרלוונטי (סיווג מתאים לבנייה של ממ״ד), ניסיון מוכח בבניית ממ״דים בבתים פרטיים (לא רק בבניינים), פרויקטים קודמים עם פרטי קשר של לקוחות שאפשר להתקשר אליהם, וביטוח אחריות מקצועית בתוקף. בנוסף, חשוב לבחון אם הקבלן מוכר על ידי פיקוד העורף ויודע לטפל בכל שלבי האישור הביטחוני, או שמדובר בקבלן בנייה כללי שיעבוד מול גורמים נוספים.",
  },
  {
    q: "האם ממ״ד יביל מתאים לבית פרטי?",
    a: "ממ״ד יביל הוא יחידה ממוגנת המגיעה ממפעל עם אישור פיקוד העורף, ומתאים לבתים פרטיים שבהם הבנייה הקונבנציונלית מורכבת או יקרה. עלותו 100,000-180,000 ש&ldquo;ח, בדרך כלל זול מממ״ד תקני בנייה. הוא מתאים בעיקר כשמבנה הבית לא מאפשר הוספת ממ״ד צמוד, או כשמתפנה זמן מהיר לפני אירוע ביטחוני. כל ממ״ד יביל דורש אישור ספציפי לכתובת מפיקוד העורף, גם אם הדגם עצמו מוכר.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="ממ״ד לבית פרטי 2026: כל האפשרויות, המחירים, וההליך המלא"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "ממ״ד", url: "/services/building-mamad" },
          { name: "ממ״ד לבית פרטי", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="ממ״ד · בית פרטי"
        title="ממ״ד לבית פרטי 2026: כל האפשרויות, המחירים, וההליך המלא"
        subtitle="מדריך 2026 לבעלי בתים פרטיים: 4 סוגי ממ״ד, מחירון מפורט, מסלול הפטור, אישורי פיקוד העורף, וההליך המלא מתכנון ועד מסירה."
        crumbs={[
          { name: "ממ״ד", href: "/services/building-mamad" },
          { name: "בית פרטי", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              ממ״ד ל
              <Link
                href="/services/building-mamad"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                בית פרטי
              </Link>{" "}
              בישראל ב-2026 הוא הפתרון הסטנדרטי להגנה אישית במצבי חירום. בית פרטי מאפשר חופש תכנוני שאינו קיים בדירות בבניינים: ממ״ד צמוד פנימי, ממ״ד חיצוני בחצר, ממ״ד על הגג, או ממ״ד תת-קרקעי. עלויות נעות בדרך כלל בין 160,000 ל-280,000 ש&ldquo;ח בהתאם לסוג ולגודל. רוב הבתים הפרטיים נכנסים למסלול פטור מהיתר במסגרת הוראת חרבות ברזל, מה שמקצר את התהליך. מדריך זה מסביר את האפשרויות, העלויות, וההליך המלא לבעל בית פרטי.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="yitron" title="למה לבית פרטי יש יתרון בבניית ממ״ד?">
            <p>
              בית פרטי מציע גמישות תכנונית שאינה קיימת בדירות בבניין. ארבעה יתרונות מרכזיים שהופכים את בנייית ממ״ד לבית פרטי לפשוטה יותר ולעיתים גם זולה יותר.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">חופש מיקום.</strong> הממ״ד יכול להיות צמוד לבית, חיצוני בחצר, על הגג, או תת-קרקעי. הבחירה תלויה בצרכים, בתקציב, ובמבנה הבית הקיים. בדירה בבניין הבחירה מצומצמת מאוד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יציבות קונסטרוקציה.</strong> בית פרטי בדרך כלל אינו מערב חישוב עומס על מבנים אחרים. הוועדה המקומית לא דורשת הסכמת שכנים בבית פרטי, ולא בודקת השפעה על דיירים נוספים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מסלול פטור פשוט יותר.</strong> תקנה 30ב להוראת חרבות ברזל מאפשרת מסלול פטור מהיתר לבתים פרטיים ולבניינים עד 2 קומות. במסלול זה התהליך הביורוקרטי קצר משמעותית מהיתר רגיל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שימוש יומיומי.</strong> הממ״ד הופך לחדר נוסף בבית: עבודה, ילדים, אירוח, או אחסון. בדירה בבניין השטח מוגבל יותר, ולעיתים הממ״ד נשאר חלל פחות פונקציונלי.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="sugim" title="4 סוגי ממ״ד לבית פרטי">
            <p>
              ארבע אפשרויות תכנון מקובלות בבית פרטי. הבחירה תלויה במבנה הקיים, בתקציב, ובצרכים האישיים.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="סוגי ממ״ד לבית פרטי לפי מיקום, עלות, ויתרון מרכזי"
              columns={[
                { key: "matim", header: "מתי מתאים" },
                { key: "mehir", header: "טווח מחיר" },
                { key: "yitron", header: "יתרון מרכזי" },
                { key: "chiseron", header: "חיסרון מרכזי" },
              ]}
              rows={[
                {
                  label: "ממ״ד צמוד פנימי",
                  cells: {
                    matim: "יש מקום בבית להוסיף חדר",
                    mehir: '160,000-200,000 ש"ח',
                    yitron: "נגישות מירבית, שימוש יומיומי קל",
                    chiseron: "מצמצם שטח קיים בחצר או בבית",
                  },
                },
                {
                  label: "ממ״ד חיצוני בחצר",
                  cells: {
                    matim: "אין מקום בבית, יש חצר זמינה",
                    mehir: '180,000-240,000 ש"ח',
                    yitron: "לא משנה מבנה קיים, יחידה עצמאית",
                    chiseron: "צריך לעבור לחצר במצב חירום",
                  },
                },
                {
                  label: "ממ״ד על הגג",
                  cells: {
                    matim: "גג זמין, אין מקום בקרקע",
                    mehir: '220,000-280,000 ש"ח',
                    yitron: "ניצול שטח שלא היה בשימוש",
                    chiseron: "נדרש חיזוק גג, עלייה במצב חירום",
                  },
                },
                {
                  label: "ממ״ד תת-קרקעי",
                  cells: {
                    matim: "תנאי קרקע מתאימים, רצון בהגנה מקסימלית",
                    mehir: '230,000-280,000 ש"ח',
                    yitron: "הגנה פיזית גבוהה במיוחד",
                    chiseron: "עלויות חפירה ואיטום גבוהות",
                  },
                },
              ]}
              footnote="טווחי המחירים הם הערכות שוק נכון ל-2026 לבתים פרטיים סטנדרטיים. כל פרויקט נבחן פרטנית."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-kolel" title="מה כולל מחיר ממ״ד לבית פרטי?">
            <p>
              המחיר הכולל מורכב משבעה מרכיבים מרכזיים. הבנת הפירוט מאפשרת השוואה בין הצעות קבלנים שונות.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">תכנון אדריכלי וקונסטרוקטיבי.</strong> 8,000-15,000 ש&ldquo;ח. כולל תוכניות לאישור פיקוד העורף ולוועדה המקומית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רישוי ואגרות.</strong> 5,000-12,000 ש&ldquo;ח. אגרות בנייה, אגרת פיקוד העורף, ושכר טרחת אדריכל לליווי הבקשה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חפירה ויסודות.</strong> 20,000-40,000 ש&ldquo;ח. כולל הכנת השטח, חפירת יסודות, ויציקת רצפה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יציקת בטון מזוין.</strong> 70,000-120,000 ש&ldquo;ח. הקירות והתקרה הם לב הממ״ד מבחינת ההגנה. עובי הקירות 25 ס&ldquo;מ ואילו קוטר הברזל לפי תקן.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דלת הדף וחלון תקני.</strong> 25,000-45,000 ש&ldquo;ח. דלת הדף עם נעילה תקנית וחלון עמיד להדף ולקרינה לפי תקן פיקוד העורף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מערכת אוורור וסינון.</strong> 15,000-30,000 ש&ldquo;ח. כולל מסנן NBC להגנה כימית-ביולוגית-רדיולוגית, מאוורר, ומערכת חיבורי חשמל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">גמר פנים.</strong> 15,000-30,000 ש&ldquo;ח. ריצוף, צבע, חשמל פנים, וחלוקה. רמת הגמר משתנה לפי בחירת הבעלים.
              </li>
            </ul>
            <p>
              למידע מקיף על מבנה המחיר ראו את המדריך על{" "}
              <Link
                href="/guides/mamad-cost"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מחיר ממ״ד 2026
              </Link>
              , שמפרט את כלל הפרמטרים שמשפיעים על העלות הסופית.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="ptor" title="מסלול הפטור: איך זה עובד?">
            <p>
              תקנה 30ב לתקנות התכנון והבנייה (הוראת שעה) מאפשרת לבעלי בתים פרטיים ובניינים עד 2 קומות לבנות ממ״ד במסלול פטור מהיתר. ההוראה מתחדשת מעת לעת ומקצרת משמעותית את התהליך הביורוקרטי.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מי זכאי.</strong> בעלי בתים צמודי קרקע ובניינים עד 2 קומות. הוראה מצטברת קיימת גם לדירות עליונות בבניינים מסוימים. כדאי לבדוק את הסטטוס העדכני של ההוראה ב
                <a
                  href="https://www.gov.il/he/departments/topics/building_permits/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
                >
                  מנהל התכנון
                </a>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מסמכים נדרשים.</strong> הצהרת בעלים, תוכנית אדריכלית מאושרת על ידי אדריכל רשום, חישוב קונסטרוקטיבי, וטופס בקשה לפיקוד העורף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תהליך ההגשה.</strong> הגשה דיגיטלית לוועדה המקומית. אישור הוועדה לרוב 2-4 שבועות. אישור פיקוד העורף 4-8 שבועות. סך הכל 6-12 שבועות עד התחלת בנייה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תוקף ההוראה.</strong> הוראת חרבות ברזל היא הוראת שעה ותוקפה מתחדש מעת לעת. כדאי להתחיל את התהליך מוקדם ולא לחכות למועד פקיעה.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ishur-pakar" title="אישור פיקוד העורף: מה דרוש לבית פרטי">
            <p>
              אישור פיקוד העורף הוא תנאי לכל בנייה של ממ״ד, כולל במסלול הפטור. הליך האישור בבית פרטי פשוט מהליך בבניין משותף, אך עדיין דורש עמידה בכל התקנים.
            </p>
            <p>
              המסמכים הנדרשים: תוכנית אדריכלית של הממ״ד, פרטי הקונסטרוקציה (קירות, תקרה, רצפה, דלת, חלון), פרטי מערכת האוורור והסינון, ומפרט החומרים. את כל המסמכים מגיש האדריכל באופן דיגיטלי לפיקוד העורף.
            </p>
            <p>
              זמן אישור טיפוסי בבית פרטי הוא 4 עד 8 שבועות. אישור מהיר יותר אפשרי במצבי דחיפות. אם נדרשות תיקונים בתוכנית, פיקוד העורף שולח רשימת הערות והאדריכל מתקן ומגיש מחדש. למידע מקיף על תהליך האישור ראו את המדריך על{" "}
              <Link
                href="/guides/home-front-command-approval"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                אישורי פיקוד העורף
              </Link>
              . מידע נוסף ניתן למצוא גם ב
              <a
                href="https://www.idf.il/he/minisites/pikud-haoref/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                פיקוד העורף
              </a>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shlavim" title="שלבי הביצוע מהסיור הראשון ועד מסירת המפתח">
            <p>
              ביצוע ממ״ד בבית פרטי מורכב מ-8 שלבים מובחנים. ההיכרות מראש איתם מאפשרת תכנון נכון של זמן וכסף.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">סיור ראשוני וייעוץ.</strong> הקבלן או המהנדס מבקרים בבית, בוחנים את האפשרויות, ומציעים סוג ממ״ד מתאים. ללא עלות ברוב הקבלנים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תכנון אדריכלי.</strong> אדריכל מכין תוכניות מלאות. כולל פרטי קונסטרוקציה, חלל פנים, ומיקום מערכות. 2-4 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הגשת בקשה לפיקוד העורף וליחידה המקומית.</strong> 6-12 שבועות עד אישור.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חתימת הסכם עם הקבלן.</strong> הסכם מפורט עם מועד התחלה, מועד מסירה, מפרט טכני, ופיצוי על איחור.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הכנת השטח וחפירה.</strong> 1-2 שבועות. כולל הסרת ריצוף קיים, חפירת יסודות, ואטימת המבנה הסמוך.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יציקת בטון.</strong> 2-4 שבועות. כולל יסודות, רצפה, קירות, ותקרה. אחרי כל שלב יציקה נדרש זמן התקשות לפני המשך.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">התקנת דלת, חלון, ומערכות.</strong> 1-2 שבועות. דלת הדף וחלון תקני מותקנים בידי בעל מקצוע מאושר. מערכת אוורור וסינון מותקנת על ידי טכנאי מוסמך.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת אישור סופי וגמר.</strong> 2-4 שבועות. בדיקת פיקוד העורף לקבלת תעודת גמר, גמר פנים (ריצוף, צבע, חשמל), ומסירה רשמית לבעלים.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="taoyt" title="טעויות נפוצות בבניית ממ״ד בבית פרטי">
            <p>
              חמש טעויות שעולות לבעלי בתים פרטיים יקר. הימנעות מראש חוסכת כסף וזמן.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בחירת קבלן ללא ניסיון בממ״דים.</strong> קבלן בנייה כללי שלא בנה ממ״דים בעבר עלול לטעות בפרטי תקן פיקוד העורף, מה שגורם לדחייה באישור הסופי. עדיף קבלן עם פרויקטים קודמים מאושרים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חיסכון על מערכת אוורור.</strong> המערכת היא לב המיגון מבחינת הגנה כימית. מסנן NBC לא תקני, או חיסכון על מאוורר תקני, מבטל את הערך הבטיחותי של הממ״ד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דלת לא תקנית.</strong> דלת הדף הסטנדרטית עולה 15,000-25,000 ש&ldquo;ח. דלתות זולות יותר אינן תקניות פיקוד העורף ולא יקבלו אישור גמר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תכנון פתחים שגוי.</strong> חלונות במקומות לא תקניים, או מספר רב מדי של פתחים, מקטינים את עמידות הממ״ד. אדריכל מנוסה בממ״דים יודע את ההגבלות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דחיית אישור פיקוד העורף לסוף.</strong> אישור פיקוד העורף נדרש לפני תחילת בנייה, לא בסופה. בנייה ללא אישור עלולה להוביל להריסה או לעבירה מנהלית.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="yavil" title="מתי ממ״ד יביל הוא הפתרון הנכון לבית פרטי?">
            <p>
              ממ״ד יביל הוא יחידה ממוגנת המגיעה ממפעל עם אישור פיקוד העורף. הוא מתאים לבית פרטי בשני מצבים מרכזיים: כאשר הבנייה הקונבנציונלית מורכבת או יקרה, וכאשר נדרש פתרון מיידי.
            </p>
            <p>
              עלות ממ״ד יביל לבית פרטי נעה בין 100,000 ל-180,000 ש&ldquo;ח, בדרך כלל זול מממ״ד תקני בנייה. ההצבה לוקחת 1-3 ימים לאחר הכנת התשתית, לעומת חודשים של בנייה קונבנציונלית. החיסרון: הממ״ד היביל הוא יחידה נפרדת בחצר ולא חלק מהבית, מה שדורש יציאה לחצר במצב חירום.
            </p>
            <p>
              חשוב להבחין: כל ממ״ד יביל דורש אישור ספציפי לכתובת מפיקוד העורף, גם אם הדגם עצמו מוכר. אישור הדגם הכללי אינו תחליף לאישור הספציפי לאתר, שכולל בדיקת תנאי הקרקע והתאמה למיקום.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "פיקוד העורף: מערך המיגון",
          url: "https://www.idf.il/he/minisites/pikud-haoref/",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              רוצים ממ״ד בבית פרטי? בדקו את האפשרויות לפני שאתם מחליטים.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו חברת בנייה שמבצעת ממ״דים בבתים פרטיים בכל הארץ, מהתכנון ועד מסירת המפתח. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="ממ״ד לבית פרטי: בואו נדבר"
            subtitle="השאירו שם וטלפון. נחזור אליכם תוך שעות עם הצעה ראשונית מותאמת לבית שלכם."
            defaultService="ממ״ד / מיגון"
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="memad/bayit-prati"
        targets={["building-mamad", "mamad-cost", "mamad-process"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על ממ״ד לבית פרטי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
