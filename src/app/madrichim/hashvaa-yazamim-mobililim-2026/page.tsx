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

const PATH = "/madrichim/hashvaa-yazamim-mobililim-2026";
const TITLE = "השוואת יזמי פינוי בינוי בישראל 2026: מסגרת הערכה | התחדשות";
const DESCRIPTION =
  "מסגרת מקצועית להערכת יזמי פינוי בינוי ב-2026: 8 קריטריונים שונאי, השוואה בין סוגי יזמים, ואיך לבחור בלי תלות בשם המותג.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "למה אין רשימה של יזמים מומלצים?",
    a: "המלצה על יזם ספציפי תלויה בנסיבות הספציפיות של הפרויקט: גודל המתחם, אזור גאוגרפי, סוג בנייה. יזם שמצוין במרכז הארץ עשוי להיות חלש בפריפריה. יזם שמתאים לבניין יחיד עשוי להיות לא מתאים למתחם גדול. במקום רשימה כללית, מאמר זה מציע מסגרת הערכה שמאפשרת לדיירים להעריך כל יזם לפי הפרויקט שלהם.",
  },
  {
    q: "מה הקריטריונים החשובים ביותר?",
    a: "שני קריטריונים עליונים: ניסיון מוכח בפינוי בינוי (לא בנייה כללית) ויציבות פיננסית. אחריהם: זמינות מוסדות פיננסיים מלווים, שקיפות בתהליך, וזמן שהות בשוק. שאר הקריטריונים (סוג ערבויות, איכות גמר, וכו) חשובים אך משניים. יזם שאין לו את שני הקריטריונים העליונים אינו מתאים, גם אם הוא מבריק בקריטריונים אחרים.",
  },
  {
    q: "איך משווים בין יזמים בלי לחתום?",
    a: "ארבעה צעדים: 1) פגישות עם 3 יזמים לפחות, 2) קבלת הצעות בכתב מכל אחד, 3) שיחה עם 2-3 דיירים מפרויקטים קודמים שלהם, 4) השוואה לפי הקריטריונים במאמר זה. תהליך זה לוקח 4-8 שבועות אך חוסך טעויות יקרות. אם יזם דורש חתימה לפני שאתם מסיימים את התהליך, זה דגל אדום.",
  },
  {
    q: "האם יזם 'גדול ומוכר' תמיד עדיף?",
    a: "לא בהכרח. יזמים גדולים ומוכרים יש להם יתרון של ניסיון ויציבות, אך גם חיסרון של פרויקטים מרובים שמתחרים על תשומת הלב שלהם. יזם בינוני שמתמקד בפרויקט אחד או שניים בו זמנית עשוי להעניק שירות אישי יותר. יזם קטן עם ניסיון מוכח עשוי להיות מתאים יותר לפרויקטים בינוניים. גודל היזם צריך להתאים להיקף הפרויקט.",
  },
  {
    q: "האם רשם הקבלנים אומר משהו?",
    a: "כן, אך מוגבל. רשם הקבלנים מספק אישור פורמלי שהחברה רשומה ובסיווג מסוים. הוא לא מספק מידע על איכות הביצוע, יחסי דיירים, או יציבות פיננסית. רישום ברשם הקבלנים הוא תנאי הכרחי, אך לא מספיק. בדיקת רקע מקיפה כוללת רשם הקבלנים, רשם החברות, חיפוש ברשת, ושיחה עם דיירים מפרויקטים קודמים.",
  },
  {
    q: "איך לבדוק את היציבות הפיננסית של יזם?",
    a: "ארבעה ערוצים: 1) שאלה ישירה על מוסדות פיננסיים מלווים (בנקים גדולים = יציב), 2) בדיקה ברשם החברות על דוחות כספיים אם פורסמו, 3) שאלה על הון עצמי ומסגרת אשראי, 4) חיפוש מידע על פירוקים של חברות קודמות של אותם בעלים. יזם יציב משתף את המידע בקלות. יזם שמתחמק מהשאלה יש לו מה להסתיר.",
  },
  {
    q: "מה זה 'מודל של 50/50'?",
    a: "מודל 50/50 הוא מודל שותפות שבו היזם והדיירים מתחלקים ברווח הפרויקט בחלקים שווים אחרי הוצאות. זהו מודל לא סטנדרטי בפרויקטי פינוי בינוי תקניים, שבהם הדיירים מקבלים תמורה מוגדרת מראש (דירה חדשה) והיזם נושא בסיכון התשואה. אם יזם מציע מודל 50/50, חשוב לבדוק את התנאים הספציפיים. במצבים מסוימים זה הוגן, באחרים זה ניסיון להפוך את הדיירים לשותפים בסיכון.",
  },
  {
    q: "האם המלצה מ'דיירים אחרים' אמינה?",
    a: "תלוי. המלצה משכנים שהיזם בחר להציע אינה אמינה לגמרי, מאחר שהיזם בחר אותם בכוונה. המלצה אמינה היא משכנים מפרויקטים קודמים שהיזם השלים, שהדיירים בוחרים לבד מי מבניהם לדבר. שיחה עם 2-3 דיירים מ-2 פרויקטים שונים נותנת תמונה אובייקטיבית. שאלות ספציפיות (לוחות זמנים, תקלות, התנהלות עם הוועדה) חושפות יותר מאשר &ldquo;האם הייתם מרוצים?&rdquo;",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="השוואה: יזמי פינוי בינוי מובילים בישראל 2026"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "השוואת יזמים 2026", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · בחירת יזם"
        title="השוואה: יזמי פינוי בינוי מובילים בישראל 2026"
        subtitle="מאמר מנחה 2026: מסגרת מקצועית להערכת יזמים, 8 קריטריונים, שלושה סוגי יזמים, ואיך לבחור בלי תלות בשם המותג."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "השוואת יזמים", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              מאמר זה לא מספק רשימה של יזמים ספציפיים. הוא מספק מסגרת מקצועית להערכת כל יזם פינוי בינוי בישראל ב-2026. הסיבה: המלצה על יזם ספציפי תלויה בנסיבות הפרויקט. יזם שמצוין במרכז הארץ עשוי להיות חלש בפריפריה. יזם שמתאים לבניין יחיד עשוי להיות לא מתאים למתחם גדול. במקום רשימה, מאמר זה מציע 8 קריטריונים מקצועיים, השוואה בין שלושה סוגי יזמים, ומסגרת החלטה. למידע על שאלות ספציפיות לשאול יזם ראו את המדריך על{" "}
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

      <Section tone="white">
        <Reveal>
          <ContentSection id="lama-lo-rshima" title="למה לא רשימה של 'יזמים מובילים'?">
            <p>
              רשימה של &ldquo;יזמים מובילים&rdquo; היא לעיתים מטעה ומסוכנת. שלוש סיבות מרכזיות:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">תלות בנסיבות.</strong> יזם שמתאים למתחם של 100 יחידות במרכז הארץ עשוי להיות לא מתאים לבניין של 10 יחידות בפריפריה. רשימה כללית לא לוקחת בחשבון את הגוון.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">השתנות זמנית.</strong> יזמים שמובילים היום עשויים להיות בקושי כלכלי בעוד 3 שנים. רשימה סטטית מתיישנת מהר. בפרויקט שלוקח 7-12 שנים, יציבות זמנית לאורך זמן חשובה יותר ממיצוב הנוכחי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סיכוני אחריות.</strong> המלצה על יזם ספציפי שיוצא מהשורה אחר כך עלולה לגרום נזק לדיירים. במקום זאת, מסגרת הערכה מאפשרת לדיירים להעריך בעצמם את היזם המוצע, בכל זמן.
              </li>
            </ul>
            <p>
              הגישה הנכונה: ללמוד את הקריטריונים, לקבל הצעות מ-3 יזמים, להעריך כל אחד לפי הקריטריונים, ולבחור מבוסס. הדיירים שולטים בתהליך, לא מקור חיצוני שממליץ.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="8-criteria" title="8 הקריטריונים המקצועיים">
            <p>
              שמונה קריטריונים שמאפשרים להעריך כל יזם פינוי בינוי. כל קריטריון מקבל משקל שונה, כפי שיוצג בהמשך.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="8 קריטריונים להערכת יזם פינוי בינוי"
              columns={[
                { key: "what", header: "מה לבדוק" },
                { key: "weight", header: "משקל" },
              ]}
              rows={[
                {
                  label: "1. ניסיון בפינוי בינוי",
                  cells: { what: "פרויקטים שהושלמו במלואם, לא בנייה כללית", weight: "גבוה מאוד" },
                },
                {
                  label: "2. יציבות פיננסית",
                  cells: { what: "מוסדות פיננסיים מלווים, הון עצמי", weight: "גבוה מאוד" },
                },
                {
                  label: "3. זמן שהות בשוק",
                  cells: { what: "10+ שנים אופטימלי, 5+ מינימום", weight: "גבוה" },
                },
                {
                  label: "4. שקיפות בתהליך",
                  cells: { what: "פתיחות לשאלות, נכונות לתת תשובות בכתב", weight: "גבוה" },
                },
                {
                  label: "5. סוג הערבויות",
                  cells: { what: "ערבות חוק מכר, ערבויות בנקאיות מבנקים גדולים", weight: "גבוה" },
                },
                {
                  label: "6. איכות צוות",
                  cells: { what: "מנהל פרויקט בעל שם ופרופיל", weight: "בינוני" },
                },
                {
                  label: "7. איכות גמר בפרויקטים קודמים",
                  cells: { what: "ביקור בפרויקטים שהושלמו", weight: "בינוני" },
                },
                {
                  label: "8. יחסי דיירים בפרויקטים קודמים",
                  cells: { what: "שיחה עם דיירים מפרויקטים שהושלמו", weight: "בינוני" },
                },
              ]}
              footnote="קריטריונים 1-2 הם פילטרים: יזם שלא עומד בהם אינו מתאים. שאר הקריטריונים מבדילים בין יזמים שעומדים בפילטרים."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="3-sugei-yazamim" title="3 סוגי יזמים בשוק">
            <p>
              היזמים בשוק הישראלי מתחלקים לשלושה סוגים. כל סוג מתאים לפרויקטים שונים.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">יזם גדול ומוכר.</strong> חברות גדולות בורסאיות או פרטיות עם 20+ פרויקטים פעילים. יתרונות: יציבות, ניסיון, מוסדות פיננסיים. חסרונות: שירות פחות אישי, פרויקטים מרובים שמתחרים על תשומת הלב, גדלים שלא מתאימים לפרויקטים בינוניים. מתאים: למתחמים גדולים (50+ יחידות) במרכז הארץ.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יזם בינוני מתמחה.</strong> חברות עם 3-15 פרויקטים שהושלמו. יתרונות: שירות אישי יותר, התמקדות בפרויקט, פרויקטים מצומצמים יחסית. חסרונות: יציבות פיננסית מוגבלת יותר, פחות נסיון בפרויקטים מאתגרים. מתאים: לבניינים בינוניים (15-30 יחידות) ומתחמים קטנים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יזם קטן או חדש.</strong> חברות עם 1-2 פרויקטים. יתרונות: רעב להצלחה, גמישות בתנאים. חסרונות: סיכון משמעותי, חוסר ניסיון מוכח, יציבות פיננסית מוגבלת. מתאים: רק לבניינים קטנים מאוד עם ייעוץ משפטי הדוק. דורש ערבויות חזקות במיוחד.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="bdikat-reka-mefurta" title="בדיקת רקע מפורטת">
            <p>
              איך לבדוק כל קריטריון בפועל. שש שיטות בדיקה:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">רשם החברות.</strong> וידוא שהחברה רשומה, פעילה, ובעלי תפקידים מזוהים. חיפוש ב
                <a
                  href="https://www.gov.il/he/departments/dynamic_collectors/companies-registry/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
                >
                  רשם החברות
                </a>
                . בדיקה תוך 10 דקות אונליין.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רשם הקבלנים.</strong> אם היזם משמש גם כקבלן ביצוע, וידוא רישום בענף הרלוונטי וברמת סיווג מתאימה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חיפוש ברשת.</strong> שם החברה ושם בעלי התפקידים בגוגל. חיפוש בתקשורת ובפורומים. כתבות, פסקי דין, תלונות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שיחה עם דיירים מפרויקטים קודמים.</strong> 2-3 שיחות מ-2 פרויקטים שונים. הדיירים נבחרים על ידי הדיירים שלכם, לא על ידי היזם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שיחה עם בנקים מלווים.</strong> אם היזם מציין בנק כמלווה, שיחה עם נציג הבנק שמטפל בפרויקטים שלו לאישור.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ביקור בפרויקטים שהושלמו.</strong> ביקור פיזי בבניינים שהיזם השלים. הערכה ויזואלית של איכות הגמר ושמירה לאורך זמן.
              </li>
            </ol>
            <p>
              עיון נוסף על מסגרת רגולטורית של פרויקטי התחדשות עירונית זמין ב
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

      <Section tone="white">
        <Reveal>
          <ContentSection id="degalim-yazam" title="דגלים אדומים שמסמנים יזם בעייתי">
            <p>
              שמונה דגלים שמצביעים על יזם שכדאי להימנע ממנו, ללא קשר לקריטריונים אחרים:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">לחץ לחתימה מהירה.</strong> יזם מקצועי מבין את הצורך בתהליך מסודר. לחץ לחתום תוך ימים הוא דגל אדום מהותי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סירוב לפרט פרויקטים קודמים.</strong> רשימת פרויקטים מסודרת היא דרישה בסיסית. סירוב לפרט = יש משהו להסתיר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">היסטוריית פירוקים.</strong> בעלי החברה היו בעלים של חברות שנכנסו לפירוק. סיכון משמעותי לחזרה על התרחיש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תשואה גבוהה במיוחד.</strong> יזם שמציע 30%+ תשואה צפויה הוא או לא ריאלי או לא ישלים את הפרויקט בתנאים שהציע.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבויות אישיות בלבד.</strong> חוסר ערבויות בנקאיות מסטנדרט = חוסר יכולת או חוסר רצון לעמוד בהתחייבויות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איומים על דיירים.</strong> איום בתביעה על דיירים מסרבנים, או הצקה. יזם מקצועי פועל באמצעים מקצועיים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תשואה צפויה לא ידועה או מוסתרת.</strong> סירוב לשתף תשואה = חוסר שקיפות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לקוחות עבר ממורמרים.</strong> שיחה עם 3 דיירים מ-3 פרויקטים שונים. אם 2 מהם מתלוננים, סימן לבעיה שיטתית.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="cheklist-haclata" title="צ'קליסט החלטה סופית">
            <p>
              לפני חתימה על הסכם, וודאו שכל הפריטים האלה סומנו:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>קיבלתי הצעות מ-3 יזמים לפחות.</li>
              <li>שוחחתי עם 2-3 דיירים מפרויקטים קודמים של היזם הנבחר.</li>
              <li>בדקתי את היזם ברשם החברות.</li>
              <li>אישרתי שהיזם רשום ופעיל ושלא היה בפירוק.</li>
              <li>קיבלתי בכתב את כל הערבויות שייספקו, ומי המנפיק.</li>
              <li>קיבלתי לוח זמנים מפורט עם תאריכי יעד מחייבים.</li>
              <li>וידאתי שזכויות גיל לבני 70+ מעוגנות בהסכם.</li>
              <li>עורך דין דיירים בלתי תלוי בדק את ההסכם והמליץ.</li>
            </ol>
            <p>
              אם אחד הפריטים לא סומן, אל תחתמו. ההסכם ארוך 7-12 שנים, וכל פרט שהוחמץ עלול לחזור כבעיה משמעותית מאוחר יותר.
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
              מתלבטים בין כמה יזמים? בדקו את הקריטריונים.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו לא יזמים. אנחנו חברת בנייה שמלווה דיירים בבחירת יזם מקצועי. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="השוואת יזמים: בואו נדבר"
            subtitle="השאירו שם וטלפון. נעזור להעריך את ההצעות שקיבלתם."
            defaultService="פינוי בינוי / התחדשות עירונית"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/yazamim"
        targets={["pinui-binui-yazam", "pinui-binui", "pinui-binui-eravut"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על השוואת יזמים"
        tone="soft"
        includeSchema
      />
    </>
  );
}
