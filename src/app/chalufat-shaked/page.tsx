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

const PATH = "/chalufat-shaked";
const TITLE = "חלופת שקד 2026: תיקון 139 לחוק התכנון והבנייה | התחדשות";
const DESCRIPTION =
  "חלופת שקד היא מסלול התחדשות עירונית שמחליף את תמ״א 38/2. רוב 80%, זכויות בנייה עד 400%. מדריך 2026: ההבדלים מתמ״א 38, השוואה לפינוי בינוי, ותהליך הפרויקט.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה זה חלופת שקד?",
    a: "חלופת שקד היא מסלול התחדשות עירונית חדש שנכנס לתוקף עם תיקון 139 לחוק התכנון והבנייה. המסלול מאפשר חיזוק או הריסה ובנייה מחדש של בניין יחיד עם תוספת זכויות בנייה משמעותית, עד 400% משטח הבניין הקיים בתנאים מסוימים. הרוב הנדרש: 80% מבעלי הדירות. חלופת שקד היא הממשיכה של תמ״א 38/2 שפוקעת במאי 2026.",
  },
  {
    q: "מה ההבדל בין חלופת שקד לתמ״א 38/2?",
    a: "שתי התוכניות מאפשרות הריסה ובנייה של בניין יחיד עם 80% הסכמה. ההבדלים המהותיים: חלופת שקד מאפשרת תוספת זכויות בנייה גדולה יותר (עד 400% משטח קיים בתנאים), מסגרת חוקית עדכנית (תיקון 139), ותהליך אישור פשוט יחסית. תמ״א 38/2 פוקעת מאי 2026 ובקשות חדשות לא יתקבלו אחרי. חלופת שקד תקפה ב-2026 ואילך.",
  },
  {
    q: "כמה זכויות בנייה ניתנות בחלופת שקד?",
    a: "תיקון 139 מאפשר תוספת זכויות בנייה משמעותית, עד 400% משטח הבניין הקיים בתנאים מסוימים. בפועל, התוספת המקובלת בערי המרכז היא 200%-300% משטח קיים, מה שמאפשר הוספה של 70%-100% יחידות דיור חדשות. בפריפריה התוספת קטנה יותר (50%-150%). הזכויות הספציפיות תלויות בתב&ldquo;ע המקומית, באופי השכונה, ובאישור הוועדה.",
  },
  {
    q: "מה הרוב הנדרש לחלופת שקד?",
    a: "הרוב הנדרש הוא 80% מבעלי הדירות בבניין, זהה לרוב הנדרש בתמ״א 38/2. הרוב הזה הוא הסטנדרט בכל מסלולי הריסה ובנייה של בניין יחיד. דיירים שלא הסכימו (20% או פחות) לא יכולים לעצור את הפרויקט, אך עלולים להגיש התנגדויות שמעכבות. רוב של 100% עדיף ומונע סיבוכים משפטיים.",
  },
  {
    q: "האם זה זול יותר מפינוי בינוי?",
    a: "תלוי במה משווים. לדייר אין תשלום ישיר באף אחד משני המסלולים. ההבדל המהותי: בחלופת שקד הפרויקט קצר יותר (5-8 שנים לעומת 7-12 בפינוי בינוי), מערב בניין אחד בלבד (לא מתחם), ודורש 80% הסכמה (לעומת 67% לתביעה ו-100% לביצוע בפינוי בינוי). חלופת שקד מתאימה לבניין יחיד; פינוי בינוי דורש מתחם 24+ יחידות.",
  },
  {
    q: "מה זמני הביצוע בחלופת שקד?",
    a: "פרויקט חלופת שקד לוקח בדרך כלל 5 עד 8 שנים מההסכמה הראשונית עד מסירה. שלב התכנון והאישורים: 24-36 חודשים. שלב הביצוע (פינוי, הריסה, בנייה, מסירה): 30-48 חודשים. הזמנים דומים לתמ״א 38/2 הקודמת, אך תהליך האישור עשוי להיות פחות סרבל בשל המסגרת החוקית העדכנית.",
  },
  {
    q: "האם זכויות הגיל לקשישים חלות בחלופת שקד?",
    a: "כן. ההגנות לדיירים בני 70 ומעלה זהות בכל מסלולי ההתחדשות העירונית, כולל חלופת שקד. דיירים בני 70+ זכאים לדירת תמורה ולחלופה אחת מתוך שלוש (דיור מוגן, דירה חלופית בערך זהה, או שתי דירות בשווי הדירה החדשה). דיירים בני 75+ זכאים לכל החלופות. ההגנות אינן ניתנות לוויתור.",
  },
  {
    q: "מה אם אנחנו במתחם פינוי בינוי?",
    a: "אם הבניין שלכם נמצא במתחם של 24 יחידות דיור ומעלה ויש דיון על פינוי בינוי, חלופת שקד עשויה להיות לא מתאימה. פינוי בינוי הוא המסלול המעדיף למתחמים גדולים, מאחר שהוא מאפשר תכנון מתחמי כולל. חלופת שקד מתאימה לבניין יחיד או בניינים שלא מצטרפים למתחם פינוי בינוי. ייעוץ עם עורך דין מקרקעין שמכיר את שני המסלולים יסייע בבחירה.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="חלופת שקד 2026: תיקון 139 לחוק התכנון והבנייה, מה זה ומה לבדוק"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb items={[{ name: "חלופת שקד", url: PATH }]} />

      <PageHero
        eyebrow="התחדשות עירונית"
        title="חלופת שקד 2026: תיקון 139 לחוק התכנון והבנייה"
        subtitle="מדריך 2026 למסלול שמחליף את תמ״א 38/2: רוב 80%, זכויות בנייה עד 400%, ההבדלים מתמ״א 38, השוואה לפינוי בינוי, ותהליך הפרויקט."
        crumbs={[{ name: "חלופת שקד", href: PATH }]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              חלופת שקד היא מסלול התחדשות עירונית חדש שנכנס לתוקף עם תיקון 139 לחוק התכנון והבנייה. המסלול מאפשר חיזוק או הריסה ובנייה מחדש של בניין יחיד עם תוספת זכויות בנייה משמעותית, עד 400% משטח הבניין הקיים בתנאים מסוימים. הרוב הנדרש: 80% מבעלי הדירות. חלופת שקד מחליפה במידה רבה את{" "}
              <Link
                href="/tama-38/sug-2"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38/2
              </Link>
              {" "}שפוקעת במאי 2026, אך מציעה תנאים שונים. מדריך זה מסביר את המסלול, ההבדלים מתמ״א 38, מתי זה כדאי, ומתי{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>
              {" "}עדיף.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="tikun-139" title="מה זה תיקון 139 לחוק התכנון והבנייה?">
            <p>
              תיקון 139 לחוק התכנון והבנייה הוא חקיקה עדכנית שמסדירה מסלול התחדשות עירונית עצמאי. התיקון נכנס לתוקף בתקופת הסיום של תמ״א 38, ויצר את &ldquo;חלופת שקד&rdquo;: מסלול שמחליף את תמ״א 38/2 ומציע תנאים גמישים יותר ליזמים ולדיירים.
            </p>
            <p>
              המסגרת החוקית של תיקון 139 שונה מתמ״א 38. בעוד שתמ״א 38 הייתה תוכנית מתאר ארצית ששימשה כהוראת שעה ל-20 שנה, חלופת שקד היא חקיקה ראשית קבועה. היציבות הרגולטורית מאפשרת תכנון ארוך טווח, ומקטינה את הסיכונים בהשקעה.
            </p>
            <p>
              שמה של התוכנית מקורו בחברת הכנסת הקודמת איילת שקד, שעבודתה הרגולטורית הובילה לתיקון. בפועל, רוב האנשים מכירים אותה בשם &ldquo;חלופת שקד&rdquo; ולא כתיקון 139. שני השמות מתייחסים לאותה תוכנית.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hashvaa-tama" title="ההבדלים בין חלופת שקד לתמ״א 38/2">
            <p>
              חלופת שקד מבוססת על תמ״א 38/2, אבל מציעה תנאים גמישים יותר. ההשוואה המפורטת:
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="חלופת שקד לעומת תמ״א 38/2"
              columns={[
                { key: "shaked", header: "חלופת שקד" },
                { key: "tama2", header: "תמ״א 38/2" },
              ]}
              rows={[
                {
                  label: "מסגרת חוקית",
                  cells: { shaked: "תיקון 139, חוק ראשי", tama2: "תוכנית מתאר ארצית, הוראת שעה" },
                },
                {
                  label: "סטטוס ב-2026",
                  cells: { shaked: "תקף ב-2026 ואילך", tama2: "פוקעת מאי 2026" },
                },
                {
                  label: "סוג הפרויקט",
                  cells: { shaked: "חיזוק או הריסה ובנייה", tama2: "הריסה ובנייה" },
                },
                {
                  label: "רוב נדרש",
                  cells: { shaked: "80%", tama2: "80%" },
                },
                {
                  label: "תוספת זכויות בנייה",
                  cells: { shaked: "עד 400% משטח קיים בתנאים", tama2: "מוגבלת לפי תקנות תמ״א" },
                },
                {
                  label: "תהליך אישור",
                  cells: { shaked: "מסגרת עדכנית, פחות סרבול", tama2: "ועדה מקומית + אישורים" },
                },
                {
                  label: "יציבות רגולטורית",
                  cells: { shaked: "גבוהה, חוק ראשי", tama2: "נמוכה, נפסקת" },
                },
              ]}
              footnote="המעבר מתמ״א 38/2 לחלופת שקד אפשרי בפרויקטים פעילים שלא הוציאו היתר לפני מאי 2026."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="zechuyot-bniya" title="זכויות בנייה: עד 400% משטח הבניין">
            <p>
              ההיבט המרכזי שמייחד את חלופת שקד הוא תוספת זכויות הבנייה הנדיבה. עד 400% משטח הבניין הקיים בתנאים מסוימים. בפועל:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בערי המרכז (תל אביב, רמת גן, גבעתיים).</strong> תוספת מקובלת 200%-300% משטח קיים. הוספה של 70%-100% יחידות דיור חדשות. הפרויקטים רווחיים ליזמים, ודיירים מקבלים תמורה גדולה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערי לוויין (פתח תקווה, ראשון לציון).</strong> תוספת 150%-250% משטח קיים. הוספה של 50%-80% יחידות דיור חדשות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פריפריה.</strong> תוספת 50%-150% משטח קיים. הוספה של 20%-50% יחידות דיור חדשות. בפרויקטים אלה, הרווחיות ליזם מצומצמת יותר.
              </li>
            </ul>
            <p>
              הזכויות הספציפיות תלויות בתב&ldquo;ע המקומית, באופי השכונה, ובאישור הוועדה המקומית. חברה מקצועית שמתכננת פרויקט תבדוק מראש את הזכויות הזמינות לפני קבלת התחייבויות מול הדיירים.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="rov-80-shaked" title="80% הסכמה: איך משיגים?">
            <p>
              80% מבעלי הדירות צריכים להסכים כדי להוציא לפועל פרויקט חלופת שקד. בבניין של 10 דירות, נדרשים 8 דיירים שיחתמו. בבניין של 20 דירות, נדרשים 16. ההגעה ל-80% היא תהליך מובנה:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">התארגנות דיירים.</strong> נציגות פעילה של 2-4 דיירים שמובילים את התהליך, מציגים את הפרויקט, ומגייסים תמיכה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">עורך דין דיירים בלתי תלוי.</strong> ייצוג הדיירים מול היזם, ניסוח ההסכם, ודיווח שוטף לדיירים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">השוואת הצעות מ-3 יזמים.</strong> בחינת הצעות שונות, מו&ldquo;מ על תנאים, ובחירת היזם המוביל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אסיפת דיירים והצבעה.</strong> אישור פורמלי של ההסכם הסופי באסיפה כללית. נדרש פרוטוקול מסודר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חתימה אישית של כל דייר.</strong> דייר אחר דייר. עורך הדין מוודא שהחתימה נעשית בהבנה ובלי לחץ.
              </li>
            </ol>
            <p>
              ל-20% הדיירים שלא הסכימו: ההסכם תקף עליהם משפטית כל עוד הרוב הנדרש קיים. עם זאת, התדיינות עמם עלולה לעכב את הפרויקט. שיחה ישירה עם הסרבנים, הבנת הסיבה, ולעיתים תיקון תנאי ההסכם, מקטינים את ההתנגדות.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hashvaa-pinui" title="חלופת שקד לעומת פינוי בינוי">
            <p>
              שני המסלולים מאפשרים בנייה חדשה של בניין במקום ישן, אך מתאימים למצבים שונים.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="חלופת שקד לעומת פינוי בינוי"
              columns={[
                { key: "shaked", header: "חלופת שקד" },
                { key: "pinui", header: "פינוי בינוי" },
              ]}
              rows={[
                {
                  label: "סוג הפרויקט",
                  cells: { shaked: "בניין יחיד", pinui: "מתחם של 24+ יחידות" },
                },
                {
                  label: "רוב נדרש",
                  cells: { shaked: "80% הסכמה", pinui: "67% לתביעה / 100% לביצוע" },
                },
                {
                  label: "זמן ביצוע",
                  cells: { shaked: "5-8 שנים", pinui: "7-12 שנים" },
                },
                {
                  label: "מורכבות",
                  cells: { shaked: "בניין אחד, פשוט יחסית", pinui: "תכנון מתחמי, מורכב" },
                },
                {
                  label: "תוספת תמורה לדייר",
                  cells: { shaked: "דירה חדשה, 15-30 מ״ר תוספת", pinui: "דירה חדשה, 15-35 מ״ר תוספת" },
                },
                {
                  label: "כוח מיקוח לדיירים",
                  cells: { shaked: "מצומצם, בניין בודד", pinui: "גבוה, נציגות מתחם" },
                },
              ]}
              footnote="הבחירה תלויה בעיקר בגודל המתחם. בניין יחיד = חלופת שקד. מתחם 24+ = פינוי בינוי."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shlavim" title="שלבי הפרויקט בחלופת שקד">
            <p>
              פרויקט חלופת שקד מורכב מ-7 שלבים. הזמנים הם הערכות שוק.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">התארגנות והסכמה ראשונית.</strong> 3-6 חודשים. גיוס תמיכת 80% מהדיירים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בחירת יזם וחתימת הסכם.</strong> 3-6 חודשים. השוואת הצעות, ניסוח, חתימות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תכנון מפורט.</strong> 12-18 חודשים. אדריכל, מהנדס, יועצים, הכנת תיק לוועדה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אישורים בוועדה ובפיקוד העורף.</strong> 12-18 חודשים. תהליך ארוך, אך קצר יחסית מתמ״א 38.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פינוי דיירים.</strong> אחרי קבלת היתר. היזם משלם שכר דירה לתקופת הביניים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הריסה ובנייה.</strong> 24-36 חודשים. עבודות בנייה והקמת המבנה החדש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מסירה וכניסה לדירות חדשות.</strong> 3-6 חודשים. בדיקות, אישור גמר, רישום בטאבו.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="metay-kdai" title="מתי כדאי, מתי לא">
            <p>
              חלופת שקד מתאימה למצבים מסוימים, ולא לאחרים. ההחלטה תלויה בנסיבות הספציפיות.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">כדאי כש:</strong> הבניין יחיד או חלק מ-2-3 בניינים יחד שאינם מהווים מתחם פינוי בינוי. הבניין בן 30+ שנה, זקוק לחיזוק או לבנייה מחדש. אזור עם זכויות בנייה זמינות. רוב הדיירים מוכנים לעבור לדיור חלופי לתקופת הביניים.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">פחות כדאי כש:</strong> הבניין במתחם של 24+ יחידות (פינוי בינוי עדיף). אזור עם ביקוש נמוך וזכויות בנייה מוגבלות (ייתכן שלא יהיה יזם). דיירים רבים בני 75+ שמתקשים לעבור לדיור חלופי. הבניין מוגן כמורשת ולא ניתן להריסה.
            </p>
            <p>
              עיון נוסף על המסגרת הרגולטורית זמין ב
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              {" "}ובמאגרי החוק כמו{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                תיקון 139 לחוק התכנון והבנייה
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
          label: "הרשות הממשלתית להתחדשות עירונית",
          url: "https://www.gov.il/he/departments/topics/urban_renewal/",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              שוקלים חלופת שקד לבניין שלכם? בדקו את האפשרויות.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים דיירים בבחינת מסלולי התחדשות, כולל חלופת שקד. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="חלופת שקד: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב של הבניין שלכם."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="chalufat-shaked"
        targets={[
          "tama-38",
          "tama-38-sug-2",
          "pinui-binui",
          "hashvaa-shaked-vs-tama",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על חלופת שקד"
        tone="soft"
        includeSchema
      />
    </>
  );
}
