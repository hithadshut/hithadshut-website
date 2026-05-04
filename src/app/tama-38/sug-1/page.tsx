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

const PATH = "/tama-38/sug-1";
const TITLE = "תמ״א 38/1 (חיזוק) 2026: מה זה, מי זכאי, ומה השתנה | התחדשות";
const DESCRIPTION =
  "תמ״א 38/1 הוא מסלול חיזוק בניין קיים בלי הריסה. הרוב הנדרש 66%. מדריך 2026: היסטוריה, ההבדל מתמ״א 38/2, סטטוס המסלול בפוקעת התוכנית, וזכויות הדיירים.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל בין תמ״א 38/1 ל-תמ״א 38/2?",
    a: "תמ״א 38/1 היא חיזוק בניין קיים בלי הריסה. הבניין נשאר על מקומו, מתחזק נגד רעידות אדמה, ולעיתים מתווספות יחידות דיור או שיפורים. הרוב הנדרש: 66%. תמ״א 38/2 היא הריסה ובנייה מחדש של בניין יחיד, עם תוספת יחידות דיור משמעותית. הרוב הנדרש: 80%. ההבדל המהותי: בתמ״א 38/1 נשארים בבית במהלך הביצוע, בתמ״א 38/2 פינוי לתקופת ביניים.",
  },
  {
    q: "מה זה רוב 66%?",
    a: "רוב 66% הוא שני שלישים מבעלי הדירות בבניין. נדרש כדי לאשר ולבצע פרויקט תמ״א 38/1. המספר נמוך משמעותית מהרוב של 80% בתמ״א 38/2, מה שהפך את 38/1 למסלול נגיש יותר. עם זאת, הסכמה של 100% עדיפה ומגנה מפני התדיינות עתידית עם דיירים שלא הסכימו.",
  },
  {
    q: "כמה עולה תמ״א 38/1 לדייר?",
    a: "ברוב הפרויקטים, לדייר אין תשלום ישיר. היזם משלם את כל עלויות הביצוע, ומתוגמל באמצעות תוספת זכויות בנייה (יחידות דיור נוספות) שהוא מוכר. הדייר מקבל בנוסף שיפורים בדירה הקיימת: חיזוק קונסטרוקטיבי, שיפוץ, ולעיתים תוספת מ&ldquo;ר. במקרים חריגים נדרש מימון משלים מהדיירים, אך זה אינו הסטנדרט.",
  },
  {
    q: "כמה זמן לוקח פרויקט תמ״א 38/1?",
    a: "פרויקט תמ״א 38/1 לוקח בדרך כלל 3 עד 5 שנים מההסכמה הראשונית עד מסירת הביצוע. שלב התכנון והאישורים לוקח 12-24 חודשים. שלב הביצוע לוקח 12-30 חודשים. הפרויקט קצר משמעותית מתמ״א 38/2 (5-8 שנים) או מפינוי בינוי (7-12 שנים), מאחר שאין הריסה ובנייה מחדש.",
  },
  {
    q: "איפה נשארים במהלך הביצוע?",
    a: "בתמ״א 38/1 הדיירים נשארים בדירה במהלך מרבית הביצוע. החיזוק הקונסטרוקטיבי נעשה בעיקר מבחוץ (קירות, יסודות, עמודים), ולעיתים בפנים (חיזוק תקרה). יש תקופות של חוסר נוחות (רעש, אבק), אך אין צורך בפינוי מלא. במקרים מסוימים נדרש פינוי קצר של ימים-שבועות לעבודות פנימיות מורכבות, אך זה לא הסטנדרט.",
  },
  {
    q: "מה השתנה בתמ״א 38/1 ב-2026?",
    a: "תמ״א 38/1 פוקעת במאי 2026 ברוב הארץ, יחד עם תמ״א 38/2. פרויקטים שכבר קיבלו היתר בנייה ממשיכים. פרויקטים בלי היתר עומדים בסיכון. בניגוד לתמ״א 38/2 שיש לה תחליף ישיר (חלופת שקד), לתמ״א 38/1 אין תחליף רגולטורי ייעודי. בעלי בניין שזקוק לחיזוק בלבד יצטרכו לבחון פתרונות אלטרנטיביים.",
  },
  {
    q: "האם יש תחליף לתמ״א 38/1?",
    a: "אין תחליף ישיר. חלופת שקד מיועדת בעיקר לפרויקטים של הריסה ובנייה. בניין שזקוק רק לחיזוק קונסטרוקטיבי בלי הריסה יש כמה אפשרויות: לבדוק אם הבניין מתאים להריסה ובנייה במסגרת חלופת שקד (בכך לעבור למסלול שונה), לבדוק אם המתחם מתאים לפינוי בינוי (24+ יחידות), או לבחור בחיזוק עצמי במימון הדיירים מבלי תוספת זכויות בנייה.",
  },
  {
    q: "תמ״א 38/1 פעילה אצלי, מה לעשות?",
    a: "תלוי בשלב הפרויקט. אם יש היתר בנייה, הפרויקט ממשיך. אם יש הסכם בלי היתר, יש לבדוק אם אפשר להוציא היתר לפני מאי 2026. אם לא, ייעוץ עם עורך דין מקרקעין לבחינת אפשרויות חלופיות. אם רק יש דיון ראשוני עם יזם, מומלץ לעבור ישירות למסלול עדכני יותר. ייעוץ ראשוני ללא עלות עוזר להבהיר את האפשרויות הספציפיות.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="תמ״א 38/1 (חיזוק) 2026: מה זה, מי זכאי, ומה השתנה"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "תמ״א 38", url: "/tama-38" },
          { name: "תמ״א 38/1", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="תמ״א 38 · מסלול חיזוק"
        title="תמ״א 38/1 (חיזוק) 2026: מה זה, מי זכאי, ומה השתנה"
        subtitle="מדריך 2026 לבעלי בניינים שזקוקים לחיזוק בלי הריסה: רוב 66%, היסטוריה, מצב המסלול בפוקעת תמ״א 38, וההבדלים מ-38/2."
        crumbs={[
          { name: "תמ״א 38", href: "/tama-38" },
          { name: "מסלול 1 (חיזוק)", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              <Link
                href="/tama-38"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38/1
              </Link>{" "}
              הוא מסלול חיזוק בניין קיים בלי הריסה. הבניין נשאר על מקומו ומחוזק נגד רעידות אדמה, ולעיתים מתווספות יחידות דיור או שיפורים נוספים. הרוב הנדרש להליכה במסלול הוא 66% מבעלי הדירות. במהלך השנים התוכנית הוארכה מספר פעמים, ופוקעת סופית במאי 2026 ברוב הארץ. מדריך זה מסביר את המסלול, את ההבדלים מ-תמ״א 38/2, מה השתנה ב-2026, והאלטרנטיבות הקיימות לבעלי בניין שמתאים למסלול חיזוק בלבד.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-ze" title="מה זה תמ״א 38/1?">
            <p>
              תמ״א 38/1 היא הגרסה המקורית של תמ״א 38, שאושרה ב-2005. המטרה: חיזוק בניינים ישנים מפני רעידות אדמה, ללא צורך להרוס את המבנה הקיים. החיזוק נעשה באמצעות תוספת קירות בטון, חיזוק עמודים, ובחלק מהמקרים גם חיזוק יסודות.
            </p>
            <p>
              בתמורה לחיזוק, היזם מקבל זכויות בנייה נוספות שמאפשרות לו להוסיף יחידות דיור חדשות לבניין. היחידות החדשות נמכרות לקונים חיצוניים, וזה הרווח הכלכלי של היזם. הדיירים הקיימים לא משלמים על הביצוע ולעיתים מקבלים גם שיפורים בדירותיהם.
            </p>
            <p>
              הביצוע נעשה בעיקר מבחוץ, מה שמאפשר לדיירים להישאר בבית. זוהי תכונה ייחודית של תמ״א 38/1: בניגוד לתמ״א 38/2 שדורש פינוי מלא לכמה שנים, ב-38/1 רוב הביצוע מתבצע ללא פגיעה משמעותית בחיי היומיום של הדיירים.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="rov-66" title="הרוב הנדרש: 66%">
            <p>
              66% מבעלי הדירות צריכים להסכים כדי לאשר ולבצע פרויקט תמ״א 38/1. הרוב הזה משמעותי בשל ההיררכיה הבאה:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">66% — רוב מספיק לתמ״א 38/1.</strong> שני שלישים מבעלי הדירות מאפשרים לאשר את הפרויקט ולבצעו.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">80% — נדרש לתמ״א 38/2 ולחלופת שקד.</strong> רוב גבוה יותר משום שמדובר בהריסה ובנייה מחדש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">67% — רוב לתביעת דייר סרבן בפינוי בינוי.</strong> הרוב הנדרש להגשת תביעה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">100% — נדרש לביצוע פינוי בינוי בפועל.</strong> כל הדיירים חייבים לחתום או שיש פסק דין.
              </li>
            </ul>
            <p>
              למרות שתמ״א 38/1 מאפשרת ביצוע ב-66%, מומלץ להגיע להסכמה של 100%. דיירים שלא הסכימו עלולים ליצור מורכבויות משפטיות במהלך הביצוע, ולעיתים גם להגיש התנגדויות שמעכבות את הפרויקט.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hashvaa" title="תמ״א 38/1 לעומת תמ״א 38/2">
            <p>
              שני המסלולים שונים מהותית. ההבחנה ביניהם חשובה לבחירה הנכונה.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="תמ״א 38/1 (חיזוק) לעומת תמ״א 38/2 (הריסה ובנייה)"
              columns={[
                { key: "sug1", header: "תמ״א 38/1" },
                { key: "sug2", header: "תמ״א 38/2" },
              ]}
              rows={[
                {
                  label: "סוג הפרויקט",
                  cells: { sug1: "חיזוק בלי הריסה", sug2: "הריסה ובנייה מחדש" },
                },
                {
                  label: "רוב נדרש",
                  cells: { sug1: "66% (שני שלישים)", sug2: "80%" },
                },
                {
                  label: "זמן ביצוע",
                  cells: { sug1: "3-5 שנים", sug2: "5-8 שנים" },
                },
                {
                  label: "פינוי דיירים",
                  cells: { sug1: "לא נדרש (נשארים בבית)", sug2: "נדרש לתקופת ביניים" },
                },
                {
                  label: "תוספת יחידות דיור",
                  cells: { sug1: "מועטה", sug2: "משמעותית" },
                },
                {
                  label: "תוספת מ״ר לדירה קיימת",
                  cells: { sug1: "אפשרית, מוגבלת", sug2: "משמעותית, חדשה לחלוטין" },
                },
                {
                  label: "התאמה לבניין ישן",
                  cells: { sug1: "מתאים לבניינים ב-מצב סביר", sug2: "מתאים לבניינים בכל מצב" },
                },
              ]}
              footnote="שני המסלולים פוקעים במאי 2026 ברוב הארץ. החלופה הישירה לתמ״א 38/2 היא חלופת שקד."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shlavim" title="שלבי הפרויקט">
            <p>
              פרויקט תמ״א 38/1 מורכב מ-7 שלבים. הזמנים הם הערכות שוק, ויכולים להשתנות לפי הוועדה המקומית והמקרה הספציפי.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">התארגנות דיירים.</strong> 2-4 חודשים. מציאת יזם, ייעוץ עם עורך דין דיירים, הסכמה ראשונית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חתימת הסכם.</strong> 2-3 חודשים. ניסוח, מו&ldquo;מ, חתימת רוב הדיירים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תכנון מפורט.</strong> 6-12 חודשים. אדריכל, מהנדס, יועצים, הכנת תיק לוועדה המקומית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הגשה לוועדה ואישור.</strong> 6-18 חודשים. אישור התוכנית בוועדה המקומית, פרסומים, מענה להתנגדויות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הוצאת היתר בנייה.</strong> 3-6 חודשים. הליך טכני אחרי אישור התוכנית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ביצוע.</strong> 12-30 חודשים. עבודות חיזוק, תוספות (אם יש), שיפוצים, וגמר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מסירה ורישום.</strong> 3-6 חודשים. בדיקות, אישור גמר, רישום הזכויות החדשות בטאבו.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="2026" title="מה השתנה ב-2026">
            <p>
              תמ״א 38/1 פוקעת במאי 2026 ברוב הארץ, יחד עם תמ״א 38/2. השלכות הפוקעה על תמ״א 38/1:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">פרויקטים עם היתר ממשיכים.</strong> הפוקעה אינה משפיעה על פרויקטים שכבר קיבלו היתר בנייה לפני מאי 2026.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בקשות חדשות לא יתקבלו.</strong> אחרי מאי 2026, אי אפשר להגיש בקשה חדשה במסגרת תמ״א 38/1.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אין תחליף ישיר.</strong> בניגוד לתמ״א 38/2 שיש לה תחליף בחלופת שקד, לתמ״א 38/1 אין מסלול עדכני ייעודי לחיזוק בלבד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דיירים בפרויקטים פעילים.</strong> אם יש לכם הסכם אך לא היתר, ייעוץ דחוף הוא הכרחי. ראו גם את המדריך על{" "}
                <Link
                  href="/tama-38/pkia-2026"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  תמ״א 38 פוקעת
                </Link>
                .
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="alternatives" title="אלטרנטיבות לבעלי בניין שזקוק לחיזוק">
            <p>
              בעלי בניין שזקוק לחיזוק בלבד ולא להריסה עומדים בפני אתגר רגולטורי: אין מסלול עדכני שמיועד ספציפית לחיזוק. שלוש אפשרויות:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">לבחון מעבר לחלופת שקד עם הריסה.</strong> אם הבניין מסוגל לעמוד בהריסה ובנייה מחדש, חלופת שקד היא הפתרון הטוב ביותר. למידע ראו את המדריך על{" "}
                <Link
                  href="/chalufat-shaked"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  חלופת שקד
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לבחון פינוי בינוי במתחם.</strong> אם הבניין נמצא במתחם של 24+ יחידות, פינוי בינוי הוא חלופה. ראו את המדריך על פינוי בינוי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חיזוק עצמי במימון הדיירים.</strong> אם אין מסלול רגולטורי, הדיירים יכולים לבצע חיזוק עצמי במימון פנימי. דורש הסכמת רוב, מימון משמעותי, ולעיתים פחות יעיל מבחינה כלכלית מהאלטרנטיבות.
              </li>
            </ol>
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
                תוכנית מתאר ארצית 38
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
              בניין שזקוק לחיזוק? בדקו את האפשרויות לפני שתחליטו.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו לא יזמים. אנחנו חברת בנייה שמלווה דיירים בבחינת מסלולי התחדשות. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="תמ״א 38/1: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב של הבניין שלכם ונציג את האפשרויות."
            defaultService="פינוי בינוי / התחדשות עירונית"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="tama-38/sug-1"
        targets={["tama-38", "tama-38-sug-2", "tama-38-pkia"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על תמ״א 38/1"
        tone="soft"
        includeSchema
      />
    </>
  );
}
