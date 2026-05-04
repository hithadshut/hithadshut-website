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

const PATH = "/memad/binyan-meshutaf";
const TITLE = "ממ״ד בבניין משותף 2026: דירתי או משותף, מימון, הסכמות | התחדשות";
const DESCRIPTION =
  "ממ״ד בבניין משותף של 2-8 יחידות: ממ״ד דירתי לכל דירה או ממ״ד משותף שישרת את כל הבניין. מדריך 2026 להשוואה, הסכמת דיירים, חלוקת עלויות, ומימון.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "כמה דיירים צריכים להסכים להקמת ממ״ד משותף?",
    a: "במרבית בנייני 2-8 יחידות נדרשת הסכמת רוב הדיירים, ולעיתים הסכמה כוללת. רף ההסכמה תלוי בתקנון הבית המשותף ובסוג ההחלטה: שינוי ברכוש המשותף בדרך כלל דורש 60% עד 75% הסכמה. שינויים מהותיים יותר עשויים לדרוש הסכמה כוללת. כדאי לבחון את התקנון הספציפי של הבניין לפני תחילת התהליך.",
  },
  {
    q: "איך מחלקים את העלויות בין הדיירים?",
    a: "החלוקה הסטנדרטית היא לפי גודל הדירות (מ&ldquo;ר נטו), לפי שווי הדירות, או לפי חלקים שווים בין כל הדיירים. הנפוצה ביותר היא חלוקה לפי גודל. בבניין של 4 דירות בגודל זהה, כל דייר משלם 25% מהעלות. בבניין מעורב גדלים, חלוקה לפי מ&ldquo;ר היא ההוגנת ביותר. ההסכם הפנימי של הדיירים צריך להיכתב בכתב ולהיחתם על ידי כולם.",
  },
  {
    q: "מי בוחר את הקבלן בממ״ד משותף?",
    a: "הדיירים בוחרים יחד. בדרך כלל ועד הבית מקבל הצעות מ-3 קבלנים, מציג אותן בפני כל הדיירים, וההחלטה מתקבלת באסיפה כללית בהצבעה. החלטות לגבי קבלן צריכות להיכתב בפרוטוקול וועדת הדיירים. בבניינים קטנים נציגות בלתי פורמלית של 1-2 דיירים פעילים מטפלת בתהליך.",
  },
  {
    q: "מה היתרון של ממ״ד דירתי לעומת משותף?",
    a: "ממ״ד דירתי מספק שלושה יתרונות מרכזיים: נגישות מיידית במצב חירום (אין צורך לעזוב את הדירה), שימוש יומיומי כחדר נוסף בדירה, ושליטה מלאה בתחזוקה ובניצול. החיסרון: עלות גבוהה יותר לכל דייר, ולעיתים אי-היתכנות קונסטרוקטיבית. ממ״ד משותף זול יותר, אך דורש יציאה לחלל משותף במצב חירום, וחלוקת תחזוקה עם דיירים אחרים.",
  },
  {
    q: "אילו אישורים נדרשים?",
    a: "שלושה אישורים מרכזיים: היתר בנייה מהוועדה המקומית (או מסלול פטור במסגרת תקנה 30ב, תלוי בסוג הבניין), אישור פיקוד העורף לתוכנית הספציפית, והסכמת הדיירים כפי שמופיעה בתקנון הבית המשותף. במצבים מסוימים נדרש גם אישור של ועד עירוני להתערבות במבנה משותף, בהתאם לתב&ldquo;ע ולחוקי הרשות המקומית.",
  },
  {
    q: "כמה זה עולה?",
    a: "ממ״ד משותף לבניין של 4-6 דיירים עולה בדרך כלל 250,000 עד 450,000 ש&ldquo;ח, מה שמתחלק ל-50,000-100,000 ש&ldquo;ח לדייר. ממ״ד דירתי לכל דירה בנפרד עולה 220,000-350,000 ש&ldquo;ח לדירה, גבוה משמעותית לכל בית אב. ההחלטה הכלכלית תלויה במספר הדיירים, גודל הדירות, ומצב המבנה הקיים.",
  },
  {
    q: "מה אם דייר אחד מתנגד?",
    a: "ההתנגדות של דייר יחיד אינה תמיד עוצרת את הפרויקט. אם רף ההסכמה הנדרש בתקנון נמוך מ-100%, הפרויקט יכול להתקדם גם בלי הסכמת הדייר המתנגד. עם זאת, חשוב לבחון את הסיבה להתנגדות: לעיתים מדובר בחשש לגיטימי לגבי השפעת הבנייה על הדירה הספציפית, ופתרון תכנוני יכול להסיר את ההתנגדות. במצבים מורכבים, ייעוץ עם עורך דין מקרקעין חשוב.",
  },
  {
    q: "האם ממ״ד משותף מעלה את ערך הדירות?",
    a: "כן, אך פחות מממ״ד דירתי. ממ״ד משותף מעלה את ערך הדירות בבניין ב-3%-7% משווי השוק. ממ״ד דירתי מעלה את הערך ב-7%-15%. ההפרש נובע מההעדפה של קונים לפתרון מיגון פנימי על פני משותף. בבניינים בערים בהם הביקוש גבוה, הפרמיה גבוהה יותר משמעותית.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="ממ״ד בבניין משותף 2026: ממ״ד דירתי או ממ״ד משותף לבניין?"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "ממ״ד", url: "/services/building-mamad" },
          { name: "ממ״ד בבניין משותף", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="ממ״ד · בניין משותף"
        title="ממ״ד בבניין משותף 2026: ממ״ד דירתי או ממ״ד משותף לבניין?"
        subtitle="מדריך 2026 לבעלי דירות בבניינים של 2-8 יחידות: השוואת ממ״ד דירתי לעומת משותף, חלוקת עלויות, הסכמת דיירים, רישוי, ומימון."
        crumbs={[
          { name: "ממ״ד", href: "/services/building-mamad" },
          { name: "בניין משותף", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              דיירים ב
              <Link
                href="/services/building-mamad"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                בניין משותף
              </Link>{" "}
              של 2 עד 8 יחידות דיור עומדים בפני בחירה: לבנות ממ״ד דירתי לכל דירה בנפרד, או ממ״ד משותף שישרת את כל הבניין. הבחירה תלויה בעלות, ברמת ההגנה, בנגישות, ובהסכמת הדיירים. ממ״ד דירתי מציע הגנה אישית ויומיומית מירבית, אך עלותו לכל דייר גבוהה. ממ״ד משותף חוסך עלויות אך דורש הליכה במצב חירום וחלוקת תחזוקה. מדריך זה משווה את שתי האפשרויות, מסביר את ההליך, ומציג את ההיבטים הכלכליים והמשפטיים.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="shtei-efsharot" title="שתי האפשרויות: דירתי או משותף">
            <p>
              דיירים בבניין קטן (2-8 יחידות) יכולים לבחור בין שני מודלים שונים של פתרון מיגון. ההבחנה ביניהם אינה רק כלכלית. היא נוגעת בנגישות, באוטונומיה, ובאיכות החיים היומיומית.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">ממ״ד דירתי:</strong> כל דייר בונה ממ״ד בתוך הדירה שלו, או צמוד אליה. הממ״ד נגיש ישירות מתוך הדירה, ומשמש כחדר נוסף ביומיום. עלות הביצוע גבוהה לכל דייר בנפרד, אך התוצאה היא הגנה מירבית עם נוחות מירבית. דורש שמבנה הדירה מאפשר תוספת.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">ממ״ד משותף:</strong> הדיירים בונים ממ״ד אחד שישרת את כל הבניין, בדרך כלל בקומת הקרקע או במרתף. העלות מתחלקת בין כל הדיירים, מה שמוזיל משמעותית את ההוצאה לכל בית אב. החיסרון: במצב חירום, הדיירים בקומות העליונות צריכים לרדת לקומת הממ״ד תוך זמן קצר.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hashvaa" title="ממ״ד דירתי לעומת ממ״ד משותף: השוואה">
            <p>
              השוואה מסודרת בין שני המודלים מאפשרת קבלת החלטה מבוססת. חמישה קריטריונים שמשפיעים על הבחירה.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="ממ״ד דירתי לעומת ממ״ד משותף בבניין של 2-8 דיירים"
              columns={[
                { key: "diraty", header: "ממ״ד דירתי" },
                { key: "meshutaf", header: "ממ״ד משותף" },
              ]}
              rows={[
                {
                  label: "עלות לכל דייר",
                  cells: {
                    diraty: '220,000-350,000 ש"ח',
                    meshutaf: '50,000-100,000 ש"ח',
                  },
                },
                {
                  label: "נגישות במצב חירום",
                  cells: {
                    diraty: "מיידית, מתוך הדירה",
                    meshutaf: "1-3 דקות הליכה לחלל המשותף",
                  },
                },
                {
                  label: "רמת הגנה",
                  cells: {
                    diraty: "מקסימלית, תקן פקע״ר",
                    meshutaf: "מקסימלית, תקן פקע״ר",
                  },
                },
                {
                  label: "תחזוקה",
                  cells: {
                    diraty: "באחריות הדייר עצמו",
                    meshutaf: "באחריות ועד הבית, חלוקה",
                  },
                },
                {
                  label: "זכויות שימוש יומיומי",
                  cells: {
                    diraty: "כחדר רגיל בדירה",
                    meshutaf: "אחסון משותף, לא חדר פרטי",
                  },
                },
              ]}
              footnote="הטווחים הם הערכות שוק 2026. כל פרויקט נבחן פרטנית לפי גודל הבניין ומורכבות הביצוע."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="haskama" title="הסכמת דיירים: איך משיגים?">
            <p>
              ממ״ד משותף, או אפילו תוספת ממ״ד דירתי שמשפיעה על הרכוש המשותף, דורש הסכמת רוב הדיירים. ההליך מורכב מארבעה שלבים מסודרים.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת התקנון.</strong> תקנון הבית המשותף קובע את רף ההסכמה הנדרש. רף סטנדרטי הוא 60% עד 75% מבעלי הדירות, אך תקנונים ספציפיים יכולים לדרוש יותר. הוועדה המקומית מסייעת בפרשנות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הצגה לדיירים.</strong> הצגה מסודרת של הפרויקט: עלות, לוח זמנים, חלוקת עלויות, השפעה על הדירות. רצוי להציג את התוכנית האדריכלית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אסיפת דיירים והצבעה.</strong> אסיפה רשמית עם פרוטוקול. ההחלטה נחתמת על ידי הדיירים שהסכימו, ופרוטוקול מועבר לוועדה המקומית כחלק מהבקשה להיתר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תיעוד משפטי.</strong> ההסכם הפנימי בין הדיירים נחתם בנוכחות עורך דין, וכולל חלוקת עלויות, אחריות תחזוקה, וזכויות שימוש.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="chalukat-aluyot" title="חלוקת עלויות בין דיירים">
            <p>
              שלושה מודלים מקובלים לחלוקת עלויות. הבחירה תלויה בהרכב הדיירים ובערך הדירות.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">חלוקה לפי גודל הדירות (מ&ldquo;ר נטו).</strong> הנפוצה ביותר. דייר עם דירה של 80 מ&ldquo;ר משלם פחות מדייר עם דירה של 120 מ&ldquo;ר. הוגנת בבניינים מעורבי גדלים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חלוקה לפי שווי הדירות.</strong> מתחשבת גם בקומה, בכיוון, ובמצב הדירה. דורשת שמאות מקדימה. הוגנת יותר מבחינה כלכלית, אך דורשת יותר זמן ועלות הכנה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חלוקה שווה.</strong> כל דייר משלם חלק זהה. פשוטה לחישוב, מתאימה לבניינים שבהם הדירות זהות. בבניינים מעורבי גדלים יוצרת חוסר הוגנות.
              </li>
            </ul>
            <p>
              חלוקה הוגנת היא קריטית להצלחת הפרויקט. אם דיירים מסוימים מרגישים שהם משלמים יותר מהראוי, ההתנגדות עלולה לעצור את הפרויקט. ייעוץ עם עורך דין מקרקעין שעוסק בבתים משותפים מסייע בקביעת חלוקה הוגנת ומשפטית.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="mimun" title="מימון אופציות">
            <p>
              שלוש אופציות מימון לפרויקט ממ״ד משותף. הבחירה תלויה במצב הכלכלי של הדיירים ובהיקף הפרויקט.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מימון עצמי.</strong> כל דייר משלם את חלקו מכספו. מתאים לבניינים שבהם הדיירים בעלי יכולת כלכלית. תשלום מתפצל לתשלומים לאורך הביצוע.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מימון בנקאי.</strong> בנקים מציעים הלוואות לפרויקטי שיפור בית, כולל ממ״ד. ריביות תחרותיות, תקופת החזר 5-10 שנים. נדרשת הסכמה של כל הדיירים על נטילת ההלוואה הקולקטיבית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סיוע מפיקוד העורף לאוכלוסיות זכאיות.</strong> משפחות שכולות, נכי צה&ldquo;ל, תושבי קו עימות, ואוכלוסיות זכאיות נוספות עשויות לקבל סיוע חלקי או מלא. יש לבדוק זכאות באתר{" "}
                <a
                  href="https://www.idf.il/he/minisites/pikud-haoref/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
                >
                  פיקוד העורף
                </a>
                .
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="rishuy" title="רישוי וועדה מקומית">
            <p>
              רישוי בבניין משותף מורכב מרישוי בית פרטי. הוועדה המקומית בוחנת את ההשפעה על המבנה המשותף ועל הדיירים האחרים בנוסף לבדיקה הסטנדרטית.
            </p>
            <p>
              שלבי הרישוי: הגשת בקשה עם תוכניות אדריכליות וקונסטרוקטיביות, תיעוד הסכמת הדיירים (פרוטוקול אסיפה), חישוב השפעה על המבנה המשותף, ואישור פיקוד העורף. זמן אישור 8-16 שבועות.
            </p>
            <p>
              במסלול הפטור (תקנה 30ב להוראת חרבות ברזל) חלק מהבניינים זכאים להליך מקוצר, אך לא כל בניין משותף עומד בתנאים. בניינים עד 2 קומות בדרך כלל זכאים, גבוהים יותר נדרש היתר רגיל. כדאי לבדוק עם הוועדה המקומית את הסטטוס לפני תחילת התכנון.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="vaad-bayit" title="ועד בית ופרוטוקולים">
            <p>
              פרויקט ממ״ד משותף דורש ניהול מסודר של ועד הבית. שלוש פעולות מרכזיות שצריכות להיעשות בכתב.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">פרוטוקול אסיפת הדיירים.</strong> תיעוד מלא של הדיון, ההצבעה, וההחלטה. נחתם על ידי כל הנוכחים. שולח לוועדה המקומית כחלק מהבקשה להיתר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הסכם פנימי בין דיירים.</strong> מסמך משפטי מחייב שמפרט חלוקת עלויות, אחריות תחזוקה, וזכויות שימוש. נחתם בנוכחות עורך דין.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דוח כספי שוטף.</strong> מעקב אחרי הוצאות הפרויקט, תשלומים מדיירים, ויתרות. ועד הבית מחויב לשקיפות מול כל הדיירים.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="dayar-mitnaged" title="מה אם דייר אחד מתנגד?">
            <p>
              התנגדות של דייר יחיד היא אתגר נפוץ בפרויקטי בית משותף. ההתנהלות הנכונה תלויה בסיבת ההתנגדות ובמסגרת המשפטית.
            </p>
            <p>
              ראשית, להבין את הסיבה. לעיתים ההתנגדות נובעת מחשש לגיטימי: השפעה על הדירה הספציפית, רעידות במהלך הבנייה, או חוסר ביטחון לגבי איכות הביצוע. פתרונות תכנוניים, התחייבויות בכתב, או פיצוי הולם יכולים להסיר את ההתנגדות.
            </p>
            <p>
              שנית, לבדוק את התקנון. אם רף ההסכמה הנדרש נמוך מ-100%, הפרויקט יכול להתקדם גם בלי הסכמת הדייר המתנגד. עם זאת, התנגדות מתועדת עלולה להוביל להליכים משפטיים מאוחרים, ולכן חשוב להגיע להסכמה במידת האפשר.
            </p>
            <p>
              שלישית, ייעוץ משפטי. במצבים מורכבים, עורך דין מקרקעין שעוסק בבתים משותפים יכול לסייע במציאת פתרון. במקרים קיצוניים, ניתן לפנות למפקח על הבתים המשותפים במשרד המשפטים. עיון בהוראות החוק זמין באתר{" "}
              <a
                href="https://www.gov.il/he/departments/topics/condominiums/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                המפקח על הבתים המשותפים
              </a>
              .
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
              בניין משותף? עזרו לדיירים להחליט נכון.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו חברת בנייה שמלווה ועדי בית בפרויקטי ממ״ד משותפים: השוואת אפשרויות, חלוקת עלויות, וביצוע מקצועי. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="ממ״ד בבניין משותף: בואו נדבר"
            subtitle="השאירו שם וטלפון. נציג בפני ועד הבית את האפשרויות בצורה מסודרת."
            defaultService="ממ״ד / מיגון"
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="memad/binyan-meshutaf"
        targets={["building-mamad", "memad-bayit-prati", "memad-dira-bekoma"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על ממ״ד בבניין משותף"
        tone="soft"
        includeSchema
      />
    </>
  );
}
