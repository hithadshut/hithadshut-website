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
import JsonLd from "@/components/JsonLd";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/pinui-binui/temurot";
const TITLE = "תמורות פינוי בינוי 2026: כמה דירות + כמה מ״ר באמת תקבלו";
const DESCRIPTION =
  "תמורה ממוצעת בפינוי בינוי במרכז: דירה גדולה ב-15 עד 35 מ״ר + חניה תת-קרקעית + מחסן. במתחמים גדולים לעיתים פיצוי כספי. פירוט לפי אזור + זכויות קשישים 70+. מעודכן מאי 2026.";
const PUBLISHED_DATE = "2026-05-03";
const MODIFIED_DATE = "2026-05-14";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "כמה דירות מקבלים בפינוי בינוי?",
    a: "בעל דירה אחת בבניין הישן מקבל דירה אחת חדשה במתחם הנבנה. הדירה החדשה גדולה יותר ב-15 עד 35 מ״ר במרכז הארץ נכון לשנת 2026, וכוללת בדרך כלל חניה תת-קרקעית ומחסן. בעלי מספר דירות באותו בניין: ההסכם המדויק תלוי בפרויקט. במרבית המתחמים יקבלו דירה חדשה לכל דירה ישנה, אך חלק מההסכמים כוללים תקרת תמורה או פיצוי כספי במקום דירה שנייה. יש לבדוק את הסעיף הזה בהסכם הפינוי לפני חתימה.",
  },
  {
    q: "כמה מטר באמת מוסיפים בפינוי בינוי?",
    a: "התוספת הסטנדרטית במרכז הארץ נכון לשנת 2026 היא 15 עד 35 מ״ר מעל גודל הדירה הישנה. במרכז הצפוף (תל אביב, רמת גן, גבעתיים) התוספת נוטה ל-20 עד 35 מ״ר. בערי לוויין כמו פתח תקווה או חולון התוספת נוטה ל-15 עד 25 מ״ר. בפריפריה התוספת קטנה יותר ולעיתים אפילו 10 מ״ר. ההפרש בין יזם ליזם בפרויקט מסוים יכול להגיע ל-10 מ״ר.",
  },
  {
    q: "האם חובה לקבל חניה ומחסן בפינוי בינוי?",
    a: "לא חובה אוטומטית, אבל זה הסטנדרט במרכז הארץ ב-2026. חניה ומחסן צריכים להופיע במפורש בהסכם הפינוי, כולל מספר החניות, גודל המחסן, ומיקומם. אם בדירה הישנה הייתה כבר חניה אחת, סטנדרט הפרויקט ייתן לכם חניה אחת חדשה. אם הייתה כפולה, יש לדרוש כפולה. מה שלא כתוב בהסכם פשוט לא קיים.",
  },
  {
    q: "האם מקבלים פיצוי כספי בנוסף לדירה החדשה?",
    a: "במתחמים מסוימים, כן. הפיצוי הכספי משלים בדרך כלל פערים שלא ניתן לסגור באמצעות מטר נוסף בלבד, כמו פערי שמאות בין הדירה הישנה לחדשה, פיצוי על הפרשי מס, או פיצוי על אי-נוחות. הסכום הטיפוסי במרכז הארץ נע בין 50,000 ל-300,000 ש״ח לדייר. במתחמים בפריפריה הפיצוי הכספי נדיר יותר.",
  },
  {
    q: "מי משלם לי שכר דירה כשהבניין נבנה?",
    a: "היזם משלם. בכל הסכם פינוי בינוי תקני, היזם מתחייב לשלם לכם שכר דירה לכל תקופת הביניים, מהפינוי ועד מסירת הדירה החדשה. הסכום נקבע לפי שווי שכר דירה של דירה דומה בעיר. במרכז הארץ ב-2026 מדובר על 8,000 עד 12,000 ש״ח לחודש לדירת 4 חדרים. השכר משולם בדרך כלל מראש ל-3 או 6 חודשים בכל פעם.",
  },
  {
    q: "האם אני משלם מס שבח על הדירה החדשה?",
    a: "בפינוי בינוי קיים פטור ממס שבח בתנאים מסוימים, המוגדרים בסעיף ספציפי בחוק מיסוי מקרקעין (שבח ורכישה), תשכ\"ג-1963. הפטור כפוף לעמידה בתנאים ספציפיים, ולא חל אוטומטית על כל פרויקט. רשות המסים פרסמה לאחרונה נייר עמדה שמרחיב את הפטור גם ליורשי דירות במתחמי התחדשות עירונית. כל מקרה לגופו, וייעוץ עם עורך דין מקרקעין לפני חתימה הוא הכרחי.",
  },
  {
    q: "מה קורה אם הדירה החדשה תהיה שווה פחות מהבטחה?",
    a: "ההסכם חייב לכלול סעיף שמאות בלתי תלויה. שמאי שיהיה מטעם הדיירים (לא מטעם היזם) יבדוק לפני המסירה אם הדירה החדשה אכן עומדת בערך שהובטח. אם יש פער, היזם חייב לפצות בכסף או באמצעות שדרוג נוסף. בלי סעיף שמאי דיירים בהסכם, אתם בסיכון מהותי.",
  },
  {
    q: "מה אסור לוותר עליו בהסכם פינוי בינוי?",
    a: "שמונה סעיפים שאין להתפשר עליהם: דירת תמורה ממוספרת בקומה ובכיוון מסוימים (לא \"דירה במתחם\"), תוספת מ״ר מינימלית בכתב, ערבויות לכל שלב לפי חוק המכר, פיצוי על איחור במסירה, שכר דירה צמוד למדד, פיצוי על ירידת ערך, סעיף ביטול בכשל של היזם, וסעיף שמאי דיירים. אם היזם מסרב לאחד מהם, יש בעיה עוד לפני החתימה.",
  },
];

const howToTemurotJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "איך מעריכים הצעת תמורה בפינוי בינוי",
  description: "תהליך הערכה של הצעת תמורה ביזם פינוי בינוי: גודל הדירה החדשה, חניה, מחסן, פיצוי כספי, שכר דירה, וסעיפים לא ניתנים לוויתור.",
  totalTime: "P14D",
  step: [
    { "@type": "HowToStep", position: 1, name: "השוואת תוספת המ״ר לאזור הגיאוגרפי", text: "במרכז הארץ סטנדרט תוספת המ״ר נע בין 15-35 מ״ר. הצעה מתחת לטווח דורשת מו״מ." },
    { "@type": "HowToStep", position: 2, name: "וידוא חניה ומחסן בהסכם", text: "מה שלא כתוב במפורש בהסכם, לא קיים. חניה ומחסן צריכים להופיע עם מספר, גודל, ומיקום." },
    { "@type": "HowToStep", position: 3, name: "בדיקת פיצוי כספי", text: "במתחמים מסוימים מתווסף פיצוי כספי ל-50,000-300,000 ש״ח. בדקו אם רלוונטי לפרויקט שלכם." },
    { "@type": "HowToStep", position: 4, name: "בדיקת שכר דירה לתקופת הביניים", text: "היזם משלם שכר דירה לכל התקופה. הסכום צריך להיות צמוד למדד וכולל מענק התקנה." },
    { "@type": "HowToStep", position: 5, name: "וידוא ערבויות בנקאיות תקניות", text: "ערבות חוק מכר, ערבות לתקופת הביניים, וערבות לרישום הזכויות. כל אחת מבנק גדול." },
    { "@type": "HowToStep", position: 6, name: "בדיקת מסים", text: "מס שבח עם פטור בתנאים, היטל השבחה תלוי בעיר, מס רכישה לרוב פטור או מוקטן." },
    { "@type": "HowToStep", position: 7, name: "וידוא 8 הסעיפים שאסור לוותר עליהם", text: "דירה ממוספרת, תוספת מ״ר בכתב, ערבויות לכל שלב, פיצוי על איחור, צמדה למדד, פיצוי ירידת ערך, סעיף ביטול, וסעיף שמאי דיירים." },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={howToTemurotJsonLd} />
      <SchemaArticle
        headline="תמורות בפינוי בינוי 2026: כמה דירות, כמה מטר, ומה באמת מקבלים"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "פינוי בינוי", url: "/pinui-binui" },
          { name: "תמורות בפינוי בינוי", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="פינוי בינוי · תמורות"
        title="תמורות בפינוי בינוי 2026: כמה דירות, כמה מטר, ומה באמת מקבלים"
        subtitle="מדריך 2026 לבעל דירה שעומד לקבל הצעת יזם: סטנדרט התמורות במרכז הארץ, מה כלול, ומה אסור לוותר עליו."
        crumbs={[
          { name: "פינוי בינוי", href: "/pinui-binui" },
          { name: "תמורות", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              תמורה סטנדרטית בפרויקט{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>
              {" "}במרכז הארץ ב-2026: דירה חדשה גדולה ב-15 עד 35 מ״ר מהדירה הישנה (תוספת ממוצעת 25 מ״ר), חניה תת-קרקעית אחת לפחות, מחסן, ולעיתים מרפסת או פיצוי כספי משלים. בפרויקטים גדולים, לעיתים בעל דירה זכאי לשתי דירות בשווי כולל של הדירה החדשה. הדייר אינו משלם דבר על התמורה. הטווח המדויק תלוי באזור הגיאוגרפי, בערך הקרקע, ובכוח המיקוח של הנציגות. מדריך זה מפרט מה כולל סטנדרט תמורות, מה מעבר לסטנדרט, ומה אסור לוותר עליו בהסכם הפינוי.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="dirat-temura" title="מה זה דירת תמורה?">
            <p>
              &ldquo;דירת תמורה&rdquo; משמעותה דירה חדשה במתחם הנבנה, באותה זכות בעלות כמו הדירה הישנה. בעל דירה ישנה אחת מקבל דירה חדשה אחת. אין מצב של &ldquo;חצי דירה&rdquo; או &ldquo;תמורה משותפת&rdquo; בין כמה דיירים. דירת התמורה נבנית במתחם בו עומדת הדירה הישנה, לא בפרויקט אחר ולא בעיר אחרת.
            </p>
            <p>
              היזם מחויב חוזית לבנות ולמסור את דירת התמורה לכל דייר. חובת המסירה אינה תלויה בקצב מכירת הדירות החדשות לקונים חיצוניים. עם זאת, חוזק החובה הזאת תלוי באיכות הערבויות הבנקאיות וערבויות חוק המכר שמעוגנות בהסכם. בלי ערבויות תקניות, החובה החוזית לבדה אינה מבטיחה את הדירה אם היזם נכשל כלכלית. לכן הסעיף המרכזי בכל הסכם פינוי בינוי הוא סעיף הערבויות, ולא סעיף התמורה.
            </p>
            <p>
              התקבלות דירת התמורה אינה תלויה בתשלום מצד הדייר. היזם מממן את הבנייה במלואה ומחזיר את ההשקעה ממכירת הדירות הנוספות שאינן שייכות לדיירי הבניין הישן. ההמרה הזאת היא הבסיס הכלכלי של המודל.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="kama-meter" title="כמה מטר מקבלים בתוספת?">
            <p>
              התוספת המטרית היא הקריטריון המרכזי שבו דיירים משווים הצעות יזמים. במרכז הארץ הסטנדרט נע בין 15 ל-35 מ״ר מעל גודל הדירה הישנה, אבל הטווח המדויק משתנה משמעותית לפי אזור גאוגרפי, ערך קרקע, וכוח מיקוח הנציגות.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="טווחי תוספת מטר אופייניים בפרויקטי פינוי בינוי לפי אזור (נכון ל-2026)"
              columns={[
                { key: "range", header: "תוספת מטר טיפוסית" },
              ]}
              rows={[
                {
                  label: "מרכז הארץ (תל אביב, רמת גן, גבעתיים, גבעת שמואל)",
                  cells: { range: "20–35 מ״ר" },
                },
                {
                  label: "ערי לוויין מרכזיות (פתח תקווה, ראשון לציון, חולון, בת ים)",
                  cells: { range: "15–25 מ״ר" },
                },
                {
                  label: "גוש דן רחב (כפר סבא, רעננה, הרצליה)",
                  cells: { range: "18–28 מ״ר" },
                },
                {
                  label: "ערים פריפריאליות-מרכזיות (נתניה, אשדוד)",
                  cells: { range: "12–22 מ״ר" },
                },
                {
                  label: "פריפריה רחוקה",
                  cells: { range: "8–18 מ״ר או פחות" },
                },
              ]}
              footnote="אלה אינם נתונים מובטחים. כל פרויקט מתנהל בנפרד, וההפרש בין יזם ליזם, ובין בניין לבניין, יכול להגיע ל-10 מ״ר. הטווחים מבוססים על שוק 2026 ומשתנים עם הזמן."
            />
          </div>

          <div className="mt-8">
            <ContentSection title="">
              <p>
                המספר שמופיע בהצעת היזם הראשונית הוא נקודת פתיחה, לא תקרה. בנציגות מאורגנת עם עורך דין דיירים מנוסה ושמאי בלתי תלוי, ההפרש בין הצעה ראשונה להסכם סופי יכול להגיע ל-5 עד 10 מ״ר נוספים. זוהי הסיבה שבחירת בעלי המקצוע של הדיירים אינה פורמלית: היא משפיעה ישירות על התוצאה.
              </p>
            </ContentSection>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="chania-machsan" title="חניה ומחסן: חלק מהסטנדרט?">
            <p>
              במרכז הארץ ב-2026, חניה תת-קרקעית ומחסן הם הסטנדרט הצפוי בפרויקט פינוי בינוי. אבל סטנדרט אינו אוטומטיות. אם החניה והמחסן אינם רשומים במפורש בהסכם הפינוי, הם פשוט אינם קיימים מבחינה משפטית.
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">חניה תת-קרקעית:</strong> כיום סטנדרט במרכז הארץ, אבל לא תמיד אוטומטי. צריך להופיע במפורש בהסכם, כולל מספר החניות והמיקום היחסי בחניון.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מחסן:</strong> כן/לא תלוי בפרויקט. גודל המחסן (4 עד 8 מ״ר) משתנה. בהסכם יש לציין את שני הנתונים: גודל ומיקום.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חניה כפולה:</strong> רק אם הדירה הישנה הייתה כבר עם 2 חניות. אחרת, לא מובטח. אם בדירה הישנה הייתה חניה אחת, סטנדרט הפרויקט נותן חניה אחת חדשה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חניה לאופניים, עמדת טעינה לרכב חשמלי:</strong> מתחיל להיות סטנדרט בפרויקטים חדשים, אך אינו אוניברסלי. כדאי לבדוק בהצעות היזמים לפני חתימה.
              </li>
            </ul>
            <p className="font-bold text-[var(--color-primary)] mt-4">
              בהסכם פינוי בינוי, מה שלא כתוב במפורש לא קיים. אם החניה לא רשומה, אין חניה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shidrug" title="שדרוג דירה: מתי משלמים מהכיס?">
            <p>
              חלק מהדיירים רוצים דירה חדשה גדולה יותר, בקומה שונה, או בכיוון אחר מהסטנדרט שמוצע בתמורה. השדרוג בדרך כלל אפשרי, אבל הוא בתשלום: הדייר משלם לקבלן את ההפרש בין דירת התמורה לדירה המשודרגת.
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">שדרוג בתשלום:</strong> מחיר השדרוג הוא בדרך כלל &ldquo;מחיר עלות&rdquo; + עלויות נלוות, לא מחיר שוק מלא. זה אחד היתרונות הכלכליים של פינוי בינוי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שדרוג קומה:</strong> עלייה לקומה גבוהה יותר עולה כסף, ירידה לקומה נמוכה יותר מחזירה כסף. שדרוג קומה אחת בפרויקט פינוי בינוי במרכז הארץ עולה בדרך כלל בין 50,000 ל-150,000 ש״ח, בהתאם לפרויקט הספציפי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שדרוג כיוון:</strong> דירה מערבית או צפונית בדרך כלל יקרה יותר ממזרחית. ההפרש משתנה לפי המתחם וגובה הדירה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שדרוג גודל:</strong> רכישת מ״ר נוספים מעבר לתמורה הסטנדרטית. במרכז הארץ ב-2026, רכישת מ״ר נוספים בפרויקט פינוי בינוי עולה בדרך כלל בין 20,000 ל-40,000 ש״ח למ״ר.
              </li>
            </ul>
            <p>
              חשוב להבחין בין השדרוג לתמורה. השדרוג מבחר אישי שעולה כסף, התמורה היא הזכות החוזית שמובטחת לכל דייר ללא תשלום.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="pitsui" title="פיצוי כספי: מתי, ולמה">
            <p>
              במתחמים מסוימים, ובמיוחד באזורי ביקוש גבוה, היזם משלם פיצוי כספי במזומן בנוסף לדירת התמורה. הפיצוי הזה אינו &ldquo;מתנה&rdquo;: הוא משלים פערים שלא ניתן לסגור באמצעות מטר נוסף בלבד.
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי שדרוג מבוסס שמאות:</strong> בערים מסוימות הדירה החדשה אף פעם לא תהיה שווה את ערך השוק של &ldquo;דירה דומה במתחם&rdquo;, ולכן השמאי קובע פיצוי כספי משלים. זה נפוץ במתחמים שבהם המעבר לבניין החדש משפר את שווי הקרקע באופן דרמטי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי על אי-נוחות:</strong> הוצאות מעבר, חיבור חשמל ומים בדיור החלופי, התקנת מכשירי חשמל מחדש. סכום חד-פעמי בהסכם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי על הפרשי מס:</strong> אם הדייר משלם מס שבח גבוה יותר בגלל מבנה ההסכם, היזם לעיתים מפצה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי על איחור:</strong> סעיף סטנדרטי בכל הסכם פינוי בינוי תקני, נושא ההסכם הוא לרוב 1.5 פעמיים שכר הדירה החודשי לכל חודש איחור.
              </li>
            </ul>
            <p>
              פיצוי כספי במרכז הארץ נע בדרך כלל בין 50,000 ל-300,000 ש״ח לדייר, תלוי באזור ובכוח המיקוח של הנציגות, בנוסף לדירת התמורה. במתחמים בפריפריה הפיצוי הכספי נדיר יותר ולעיתים נעדר.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              למידע משלים על תמורות לדיירים זמין גם ב
              <a
                href="https://www.kolzchut.org.il/he/%D7%A4%D7%99%D7%A0%D7%95%D7%99_%D7%91%D7%99%D7%A0%D7%95%D7%99"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                המידע המלא על תמורות לדיירים
              </a>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="schar-dira" title="שכר דירה לתקופת הביניים">
            <p>
              במהלך הריסת הבניין הישן ובניית המתחם החדש, שאורכת בדרך כלל 24 עד 60 חודשים, הדיירים גרים בדיור חלופי. היזם משלם את שכר הדירה לכל התקופה הזאת. זה אחד הסעיפים המהותיים ביותר בהסכם, והעלות הכוללת ליזם יכולה להגיע למאות אלפי שקלים לדייר.
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">סכום שכר הדירה:</strong> נקבע בהסכם, מבוסס על שווי שכר דירה לדירה דומה בעיר. שכר דירה לדירת 4 חדרים במרכז הארץ נע בדרך כלל בין 8,000 ל-12,000 ש״ח לחודש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תדירות תשלום:</strong> שכר דירה משולם בדרך כלל מראש ל-3 או 6 חודשים בכל פעם, על מנת שלדייר תהיה ודאות תשלום.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">צמדה למדד:</strong> הסכם תקני קובע שהשכר צמוד למדד המחירים לצרכן או למדד שכר הדירה. סכום קבוע נומינלי לאורך 30 חודשים יישחק מהאינפלציה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מענק התקנה:</strong> בנוסף לשכר הדירה, חלק מההסכמים כוללים מענק התקנה ראשוני בדרך כלל בין 5,000 ל-15,000 ש״ח בעת המעבר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הוצאות הובלה:</strong> כיסוי מלא או חלקי, תלוי בהסכם.
              </li>
            </ul>
            <p>
              בחישוב גס, לתקופת בנייה אופיינית של כ-30 חודשים: בין 240,000 ל-360,000 ש״ח שמשולמים על ידי היזם בשכר דירה לדייר אחד. בהסכם של 50 דיירים מדובר ב-12 עד 18 מיליון ש״ח שיוצאים מכיסי היזם לפני המסירה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="masim" title="מסים: מי משלם, מה החריגים">
            <p>
              המיסוי בפינוי בינוי הוא מורכב ומתעדכן לעיתים קרובות. בעוד שמסגרת בסיסית קיימת, יש משתנים רבים שיכולים להשפיע על חבות המס בכל פרויקט ספציפי. חובה להתייעץ עם עורך דין מקרקעין לפני חתימה כדי לקבל ייעוץ ממוקד למצבכם.
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מס שבח:</strong> הדייר משלם, אך קיים פטור בפינוי בינוי בתנאי סעיף ספציפי לפינוי בינוי בחוק מיסוי מקרקעין (שבח ורכישה). הפטור אינו אוטומטי וכפוף לעמידה בתנאים שמוגדרים בחוק.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">היטל השבחה:</strong> הדייר משלם, אבל בפינוי בינוי יש לעיתים פטור מלא או חלקי בהתאם לתב״ע ולעירייה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מס רכישה על דירת התמורה:</strong> בדרך כלל פטור או מוקטן.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">נייר עמדה ליורשים:</strong> רשות המסים פרסמה לאחרונה נייר עמדה שמרחיב את הפטור גם ליורשי דירות במתחמי התחדשות עירונית. גם אחרי שהבניין נהרס, היורשים יכולים לקבל פטור ממס שבח. נייר העמדה הזה פתר את &ldquo;מלכוד היורשים&rdquo; שהיה קיים עד 2025. למדריך מפורט על ירושה ראו את{" "}
                <Link
                  href="/pinui-binui/yorshim"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  ירושת דירה בפינוי בינוי
                </Link>
                .
              </li>
            </ul>
            <p className="font-bold text-[var(--color-primary)] mt-4">
              המיסוי בפינוי בינוי הוא מורכב ומתעדכן. לקבלת ייעוץ ממוקד מומלץ לפנות אלינו ל
              <Link
                href="/contact"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ייעוץ ראשוני ללא עלות
              </Link>{" "}
              ולעבוד עם עורך דין מקרקעין.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              מקור רגולטורי:{" "}
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

      <Section tone="soft">
        <Reveal>
          <ContentSection id="chova" title="מה אסור לוותר עליו בהסכם">
            <p>
              שמונה סעיפים לא-ניתנים-לוויתור צריכים להופיע בכל הסכם פינוי בינוי תקני. אם היזם מסרב לאחד מהם, יש בעיה בעוד לפני החתימה.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">דירת תמורה ממוספרת בקומה ובכיוון מסוימים</strong> (לא &ldquo;דירה במתחם&rdquo;). מספר הדירה הספציפי בתוכנית הפרויקט מוטבע בהסכם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תוספת מ״ר מינימלית בכתב</strong>, לא &ldquo;כפי שיוסכם&rdquo;. המספר המדויק של תוספת המטרים נכלל בחוזה כסעיף נפרד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">
                  <Link
                    href="/pinui-binui/eravut"
                    className="text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                  >
                    ערבות בנקאית או חוק מכר לכל שלב
                  </Link>
                  .
                </strong>{" "}
                שלוש ערבויות עיקריות: ערבות לתקופת הבנייה, ערבות לתקופת הביניים, ערבות לרישום הזכויות בטאבו.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי כספי על איחור במסירה.</strong> סעיף שמחייב את היזם לשלם פיצוי לכל חודש איחור מעבר למועד המסירה המחייב.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שכר דירה צמוד למדד</strong>, לא קבוע נומינלית. בלי הצמדה, שכר הדירה יישחק לאורך 30 חודשים של אינפלציה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי על ירידת ערך</strong> מהמתחם המקורי לחלופי. אם שווי הדירה החדשה ביום המסירה נמוך מהבטחת ההסכם, היזם משלם את ההפרש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סעיף ביטול במקרה של אי-עמידה בלוחות זמנים</strong> מצד היזם. אם היזם נכשל לעמוד באבני דרך מרכזיות, הדיירים זכאים לבטל את ההסכם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סעיף שמאי דיירים מוסכם</strong> לבחינת ההצעה הסופית מול שווי השוק, לפני המסירה.
              </li>
            </ol>
            <p className="font-bold text-[var(--color-primary)] mt-6">
              אם היזם מסרב לאחד מהסעיפים האלה, יש לכם בעיה עוד לפני החתימה.
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
              קיבלתם הצעה ליזם פינוי בינוי? בדקו אם היא הוגנת.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים נציגויות דיירים ובוחנים הצעות יזמים מבחינה מקצועית: מ״ר בפועל, חניה, מחסן, פיצוי כספי, וסעיפים שמרבים להחליק. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="פינוי בינוי: בדקו אם ההצעה שלכם הוגנת"
            subtitle="השאירו שם וטלפון. נחזור אליכם תוך שעות עם ניתוח מקצועי של ההצעה."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="pinui-binui/temurot"
        targets={[
          "pinui-binui",
          "pinui-binui-machshvon",
          "hithadshut-team",
          "contact",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על תמורות בפינוי בינוי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
