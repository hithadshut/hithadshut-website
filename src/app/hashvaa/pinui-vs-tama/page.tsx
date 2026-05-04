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

const PATH = "/hashvaa/pinui-vs-tama";
const TITLE = "פינוי בינוי מול תמ״א 38 2026: מה ההבדל ומה כדאי | התחדשות";
const DESCRIPTION =
  "פינוי בינוי לעומת תמ״א 38: מתחם מול בניין יחיד, רוב, זמן, תמורה, סיכון. מדריך 2026: 7 מימדי השוואה, מתי כל מסלול מתאים, ומצב המסלולים בפוקעת תמ״א 38.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל הכי מהותי בין פינוי בינוי לתמ״א 38?",
    a: "ההבדל המהותי הוא היקף הפרויקט. פינוי בינוי הוא תהליך מתחמי שמערב מתחם של 24 יחידות דיור ומעלה, עם כמה בניינים שנהרסים ונבנים יחד. תמ״א 38 חלה על בניין יחיד בלבד. המשמעות לדיירים: בפינוי בינוי כוח המיקוח גבוה יותר (נציגות מתחם), הפרויקט ארוך יותר (7-12 שנים), והתמורה לעיתים גדולה יותר.",
  },
  {
    q: "מה קורה לתמ״א 38 ב-2026?",
    a: "תמ״א 38 פוקעת במאי 2026 ברוב הארץ. פרויקטים עם היתר ממשיכים. בקשות חדשות לא יתקבלו. חלופת שקד היא הממשיכה הישירה של תמ״א 38/2 לבניין יחיד. למתחמים, פינוי בינוי הוא הפתרון. למידע מקיף ראו את המדריכים על תמ״א 38 ועל חלופת שקד.",
  },
  {
    q: "איזה רוב נדרש לכל מסלול?",
    a: "פינוי בינוי: 67% מבעלי הדירות להגשת תביעה כנגד דייר סרבן, 100% הסכמה (או פסק דין) לביצוע בפועל. תמ״א 38/1: 66%. תמ״א 38/2: 80%. חלופת שקד: 80%. הרוב הנמוך ביותר הוא בתמ״א 38/1 (66%) ובהגשת תביעה בפינוי בינוי (67%). כל המספרים אינם רף לביצוע, אלא רף להליכים מסוימים.",
  },
  {
    q: "כמה זמן לוקח כל מסלול?",
    a: "פינוי בינוי: 7-12 שנים מהתארגנות ראשונית עד מסירה. תמ״א 38/1: 3-5 שנים. תמ״א 38/2: 5-8 שנים. חלופת שקד: 5-8 שנים. ההבדל בזמן נובע ממורכבות: פינוי בינוי הוא תכנון מתחמי שדורש אישורים מורכבים. תמ״א 38/1 מהיר יותר משום שאין הריסה. ההבחנה חשובה לבעלי דירות בני 70+, שעבורם 10 שנים הוא זמן משמעותי בחיים.",
  },
  {
    q: "באיזה מסלול התמורה גדולה יותר?",
    a: "אין תשובה אחידה. בפינוי בינוי במרכז הארץ, תוספת המ&ldquo;ר נעה בין 15-35 מ&ldquo;ר. בתמ״א 38/2 ובחלופת שקד דומה. בתמ״א 38/1 התוספת קטנה יותר (5-15 מ&ldquo;ר), משום שהבניין נשמר. ההבדל המהותי: בפינוי בינוי כוח המיקוח גבוה יותר (נציגות מתחם של עשרות דיירים), מה שמאפשר השגת תנאים טובים יותר. בבניין יחיד הכוח מוגבל יותר.",
  },
  {
    q: "מה הסיכון בכל מסלול?",
    a: "פינוי בינוי: סיכון של עיכוב ארוך (10+ שנים), מורכבות תכנונית, ואי-ודאות לגבי לוח זמנים. סיכון יזם נמוך יחסית בשל היקף ההשקעה. תמ״א 38: סיכון רגולטורי גבוה ב-2026 (פוקעה), סיכון יזם בינוני, וסיכון של חוסר הסכמה בין דיירים. חלופת שקד: סיכון רגולטורי נמוך (חוקיקה עדכנית), סיכון יזם דומה לתמ״א 38.",
  },
  {
    q: "איזה מסלול מגן יותר מפני רעידות אדמה?",
    a: "כל המסלולים מספקים חיזוק נגד רעידות אדמה לפי תקנים עדכניים. ההבדל: בפינוי בינוי, חלופת שקד, ותמ״א 38/2 הבניין החדש נבנה מהתחלה לפי התקן העדכני. בתמ״א 38/1 הבניין הקיים מחוזק, אבל לא נבנה מחדש. רמת ההגנה דומה, אך בבנייה חדשה יש גמישות תכנונית גדולה יותר ויכולת לשלב טכנולוגיות עדכניות.",
  },
  {
    q: "מה עם זכויות גיל לקשישים?",
    a: "ההגנות לדיירים בני 70+ זהות בכל מסלולי ההתחדשות העירונית. דייר בן 70+ זכאי לדירת תמורה ולחלופה אחת מתוך שלוש (דיור מוגן, דירה חלופית, שתי דירות). דיירים בני 75+ זכאים לכל החלופות. ההגנות אינן ניתנות לוויתור, וחלות בפינוי בינוי, תמ״א 38, וחלופת שקד באותה צורה. ראו את המדריך על זכויות קשישים בפינוי בינוי לפרטים מלאים.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="פינוי בינוי מול תמ״א 38 2026: ההבדלים, היתרונות, ומה כדאי לבחור"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "השוואות", url: "/hashvaa" },
          { name: "פינוי בינוי מול תמ״א 38", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="השוואה · התחדשות עירונית"
        title="פינוי בינוי מול תמ״א 38 2026: ההבדלים, היתרונות, ומה כדאי לבחור"
        subtitle="מדריך השוואה 2026: 7 מימדים שמבדילים בין פינוי בינוי לתמ״א 38, מתי כל מסלול מתאים, וההכרעה במצב של פוקעת תמ״א 38."
        crumbs={[
          { name: "השוואות", href: "/hashvaa" },
          { name: "פינוי בינוי מול תמ״א 38", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              פינוי בינוי ותמ״א 38 הם שני מסלולי התחדשות עירונית מובילים בישראל, אך הם שונים מהותית. ההבדל המרכזי הוא היקף הפרויקט: פינוי בינוי הוא תהליך מתחמי של 24 יחידות דיור ומעלה, ואילו תמ״א 38 חלה על בניין יחיד. הבחירה בין השניים תלויה בגודל המתחם, ברוב הדיירים שמסכים, ובמצב הבניין. ב-2026 השאלה הופכת חשובה במיוחד: תמ״א 38 פוקעת במאי 2026, וחלופת שקד או פינוי בינוי הופכות לאלטרנטיבות העיקריות. מדריך זה משווה בין המסלולים ב-7 מימדים ועוזר להחליט.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hevdel-merkazi" title="ההבדל המרכזי: מתחם לעומת בניין יחיד">
            <p>
              ההבדל המהותי הוא היקף הפרויקט. פינוי בינוי דורש מתחם של 24 יחידות דיור ומעלה: כמה בניינים יחד שנהרסים ונבנים כפרויקט אחד. תמ״א 38 חלה על בניין יחיד בלבד.
            </p>
            <p>
              ההבחנה הזאת משפיעה על כל היבט אחר של הפרויקט. בפינוי בינוי, הדיירים פועלים כקבוצה גדולה עם כוח מיקוח משמעותי. נציגות של מתחם בן 50 דיירים מקבלת תנאים טובים יותר מבעל בניין בודד. בתמ״א 38 הדיירים בבניין הבודד מוגבלים בכוח המיקוח, ותלויים יותר בנכונות היזם.
            </p>
            <p>
              היקף הפרויקט גם משפיע על המורכבות. פינוי בינוי מערב תכנון מתחמי כולל, אישורים מרובים, ולעיתים שינוי תב&ldquo;ע. תמ״א 38 פשוטה יחסית בהיבט התכנוני: בניין אחד, אישור הוועדה המקומית, ופיקוד העורף.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="7-mimadim" title="השוואה ב-7 מימדים">
            <p>
              שבעה מימדים שמבדילים בין פינוי בינוי לתמ״א 38 ולחלופת שקד.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="פינוי בינוי לעומת תמ״א 38 ולעומת חלופת שקד: 7 מימדי השוואה"
              columns={[
                { key: "pinui", header: "פינוי בינוי" },
                { key: "tama", header: "תמ״א 38/2" },
                { key: "shaked", header: "חלופת שקד" },
              ]}
              rows={[
                {
                  label: "היקף",
                  cells: { pinui: "מתחם 24+ יחידות", tama: "בניין יחיד", shaked: "בניין יחיד" },
                },
                {
                  label: "רוב נדרש",
                  cells: { pinui: "67% לתביעה / 100% לביצוע", tama: "80%", shaked: "80%" },
                },
                {
                  label: "זמן ביצוע",
                  cells: { pinui: "7-12 שנים", tama: "5-8 שנים", shaked: "5-8 שנים" },
                },
                {
                  label: "תמורה (תוספת מ״ר)",
                  cells: { pinui: "15-35 מ״ר", tama: "20-30 מ״ר", shaked: "25-35 מ״ר" },
                },
                {
                  label: "כוח מיקוח",
                  cells: { pinui: "גבוה (נציגות מתחם)", tama: "מצומצם (בניין בודד)", shaked: "מצומצם (בניין בודד)" },
                },
                {
                  label: "סיכון רגולטורי",
                  cells: { pinui: "נמוך, חקיקה יציבה", tama: "פוקעה מאי 2026", shaked: "נמוך, חקיקה עדכנית" },
                },
                {
                  label: "התאמה לרעידות אדמה",
                  cells: { pinui: "בנייה חדשה לפי תקן", tama: "בנייה חדשה לפי תקן", shaked: "בנייה חדשה לפי תקן" },
                },
              ]}
              footnote="ההבחנה העיקרית: פינוי בינוי = מתחם. תמ״א 38 וחלופת שקד = בניין יחיד."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="metay-pinui" title="מתי פינוי בינוי כדאי">
            <p>
              פינוי בינוי כדאי בשלושה מצבים מרכזיים. ההחלטה תלויה בגודל המתחם ובהרכב הדיירים.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מתחם של 24+ יחידות.</strong> זוהי דרישת הסף החוקית. ללא מתחם, פינוי בינוי לא רלוונטי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רוב דיירים פעיל.</strong> נדרש לפחות 67% הסכמה לתביעה משפטית כנגד סרבן. אם פחות מ-67% מסכימים, הפרויקט אינו ריאלי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אזור עם זכויות בנייה זמינות.</strong> פינוי בינוי משתלם ליזם רק כשניתן להוסיף יחידות דיור משמעותיות. באזורים עם תב&ldquo;ע מוגבלת, פינוי בינוי קשה לקיום.
              </li>
            </ul>
            <p>
              למידע מקיף על פינוי בינוי, ראו את המדריך על{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="metay-tama" title="מתי תמ״א 38 (או חלופת שקד) כדאי">
            <p>
              תמ״א 38 וחלופת שקד מתאימות לבניין יחיד שאינו חלק ממתחם פינוי בינוי. ב-2026 ההמלצה היא חלופת שקד, מאחר שתמ״א 38 פוקעת.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בניין יחיד או 2-3 בניינים שאינם מתחם.</strong> חלופת שקד היא הפתרון המעדיף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רוב דיירים גבוה (80%).</strong> נדרש לחלופת שקד. הרוב הזה גבוה מ-67% הנדרש לתביעה בפינוי בינוי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בניין שזקוק לחיזוק בלבד.</strong> תמ״א 38/1 הייתה הפתרון, אך פוקעת. חלופת שקד אינה מיועדת לחיזוק בלבד.
              </li>
            </ul>
            <p>
              למידע על חלופת שקד ראו את המדריך על{" "}
              <Link
                href="/chalufat-shaked"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                חלופת שקד
              </Link>
              . למידע על תמ״א 38, ראו את המדריך על{" "}
              <Link
                href="/tama-38"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="zechuyot-gil" title="זכויות גיל בכל מסלול">
            <p>
              ההגנות לדיירים בני 70+ ובני 75+ זהות בכל מסלולי ההתחדשות העירונית: פינוי בינוי, תמ״א 38, וחלופת שקד. דיירים בני 70+ זכאים לדירת תמורה ולחלופה אחת מתוך שלוש (דיור מוגן, דירה חלופית, שתי דירות). דיירים בני 75+ זכאים לכל החלופות. ההגנות אינן ניתנות לוויתור.
            </p>
            <p>
              ההבדל היחיד בין המסלולים בהקשר הזה: בפינוי בינוי, נציגות הדיירים גדולה יותר ולעיתים מצליחה להשיג הגנות נוספות מעבר לחוקיות. בבניין יחיד, ההגנות החוקיות הן בדרך כלל הסטנדרט.
            </p>
            <p>
              למידע מפורט על זכויות גיל ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/kshishim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                זכויות קשישים בפינוי בינוי
              </Link>
              {" "}שמסביר את החלופות החובה ואיך לעגן אותן בהסכם.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shealot-yazam" title="שאלות לשאול את היזם">
            <p>
              שש שאלות מרכזיות שדיירים צריכים לשאול את היזם לפני חתימה, ללא קשר למסלול הנבחר:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מה המסלול המוצע ומדוע?</strong> הצדקת בחירת המסלול מבוססת על ניתוח שיתאם את צרכי הבניין.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איזו תמורה תקבל כל דייר?</strong> פירוט מ&ldquo;ר, חניה, מחסן, פיצוי כספי במידה ורלוונטי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איזו ערבויות תספקו?</strong> ערבות חוק מכר, ערבויות בנייה, ערבות שכר דירה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה לוח הזמנים המפורט?</strong> ציר זמן עם אבני דרך מחייבות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה זכויות הגיל לקשישים?</strong> איך הן מעוגנות בהסכם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה קורה אם הפרויקט מתעכב?</strong> פיצוי על איחור, סעיפי ביטול.
              </li>
            </ol>
            <p>
              עיון נוסף על המסגרת הרגולטורית של מסלולי ההתחדשות העירונית זמין ב
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
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
              שוקלים מסלול התחדשות? בדקו את האפשרויות לפני שתחליטו.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו לא יזמים. אנחנו חברת בנייה שמלווה דיירים בבחינת מסלולי התחדשות עירונית. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="פינוי בינוי או תמ״א 38: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב הספציפי של הבניין או המתחם שלכם."
            defaultService="פינוי בינוי / התחדשות עירונית"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="hashvaa/pinui-vs-tama"
        targets={["pinui-binui", "tama-38", "chalufat-shaked"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על פינוי בינוי מול תמ״א 38"
        tone="soft"
        includeSchema
      />
    </>
  );
}
