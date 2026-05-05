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

const PATH = "/madrichim/tax-meturgam-pinui-binui-2026";
const TITLE = "מסים בפינוי בינוי 2026: מדריך מתורגם | התחדשות";
const DESCRIPTION =
  "5 סוגי מס שבעלי דירה צריכים להכיר בפינוי בינוי: מס שבח, מס רכישה, מע״מ, ארנונה, מס הכנסה. הסבר ברור, פטורים, ונקודות עיקריות לבדיקה עם רואה חשבון.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "האם פינוי בינוי הוא אירוע מס לבעל דירה?",
    a: "ברוב המקרים לא. רשות המסים מתייחסת לפינוי בינוי כעסקה רעיונית: בעל דירה לא מוכר ולא קונה בפועל, אלא מקבל דירה חדשה במקום הישנה. נייר עמדה של רשות המסים (mst-2026/03) מאשר שאין אירוע מס במעמד החתימה ובמעמד המסירה ברוב הפרויקטים. יוצאים מהכלל קיימים — נדרשת התייעצות עם עורך דין מקרקעין או רואה חשבון לכל מקרה ספציפי.",
  },
  {
    q: "האם משלמים מס שבח בפינוי בינוי?",
    a: "ברוב המקרים — לא. סעיף 49ב' לחוק מיסוי מקרקעין מעניק פטור ממס שבח בפינוי בינוי. הפטור חל על דירת מגורים יחידה ועל דירה בבעלות פרטית של תושב ישראל. במקרה של דירה שאינה למגורים (מסחר, תעשייה), או דירה בבעלות חברה, החוק שונה. בדיקה אישית מול רואה חשבון או רשות המסים נדרשת לפני החתימה.",
  },
  {
    q: "האם יש פטור ממס רכישה?",
    a: "כן, ברוב המקרים. בעל דירה שמקבל דירה חדשה בפינוי בינוי לא נחשב לרוכש דירה חדשה לעניין מס רכישה. סעיף 9 לחוק מס רכישה מסדיר את הפטור. אם הדירה החדשה גדולה משמעותית מהישנה, ייתכן ויחול מס רכישה על ההפרש. לתוספת מ״ר מ-25 ועד 50, רוב התיקים פטורים. מעבר ל-50 מ״ר תוספת — נדרשת בדיקה.",
  },
  {
    q: "האם הפיצוי הכספי שמקבלים מהיזם חייב במס?",
    a: "תלוי בסיווג. רוב הפיצויים הכספיים בפינוי בינוי (פיצוי על אי-נוחות, שכר דירה חלופי, פיצוי על איחור) נחשבים &ldquo;תקבול הוני&rdquo; — חלק מהתמורה הכוללת על הדירה — ולא מס הכנסה. נייר עמדה של רשות המסים מ-2024 (גילוי דעת 4-2024) מאשר זאת. שכר דירה חלופי מטופל בנפרד וחייב מס ב-10% מעל סף שנתי. בדיקה ספציפית עם רואה חשבון נדרשת.",
  },
  {
    q: "מי משלם ארנונה בתקופת הביניים?",
    a: "היזם, ברוב המקרים. ההסכם בדרך כלל קובע שהיזם משלם ארנונה על הדירות שהושכרו לדיירים בתקופת הביניים. בעלי הדירות לא משלמים ארנונה על הדירה הישנה (היא נהרסה) או על הדירה החליפית (היזם משלם). חשוב לוודא שזה מופיע בהסכם בכתב. אם לא — בעל הדירה ישלם ארנונה כפולה (על הישנה עד הריסה, על החליפית בתקופת הביניים).",
  },
  {
    q: "האם הוצאות עורך דין מקזזות מס?",
    a: "באירוע מס עתידי — כן. הוצאות עורך דין דיירים, יועץ מס, ושכר טרחת רואה חשבון בפרויקט פינוי בינוי נחשבות &ldquo;הוצאות עיסקה&rdquo; ויקוזזו ממס שבח עתידי אם תמכרו את הדירה החדשה. שמירת קבלות חיונית. במהלך הפרויקט עצמו אין קיזוז מיידי, אך ההוצאות מצטברות לתיק לעתיד.",
  },
  {
    q: "מה לגבי יורשים שעוברים פינוי בינוי?",
    a: "נושא רגיש. נייר עמדה של רשות המסים מ-03/2026 מאשר: יורשים שירשו דירה ועוברים פינוי בינוי במהלך הפרויקט שומרים על הפטור ממס שבח. הזכויות המקוריות של המוריש מועברות אליהם. אם המוריש היה זכאי לפטור — היורש זכאי לאותו פטור. ראו את המדריך על ירושה דירה בפינוי בינוי לפרטים מלאים.",
  },
  {
    q: "האם יש פטור מס לקשישים מעל 70?",
    a: "פטור גילי כללי לא קיים בחוקי המס. אבל קשישים נהנים מ-3 הקלות: (1) פטור ממס שבח על דירה יחידה ללא מגבלת זמן (במקום 4 שנים לאחרים), (2) ניכוי הוצאות בריאות מוגדל אם רלוונטי, (3) במקרים מיוחדים, פריסת תשלומי מס על תקופה ארוכה. ייעוץ עם רואה חשבון מומלץ. ראו את זכויות קשישים בפינוי בינוי.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="מסים בפינוי בינוי 2026: מדריך מתורגם"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "מסים בפינוי בינוי 2026", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · מסים והוצאות"
        title="מסים בפינוי בינוי 2026: מדריך מתורגם"
        subtitle="חמישה סוגי מס שבעלי דירה צריכים להכיר. הסבר ברור, פטורים שמגיעים, וטעויות נפוצות שעולות עשרות אלפי שקלים."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "מסים בפינוי בינוי 2026", href: PATH },
        ]}
      />

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
                <strong>ברוב פרויקטי פינוי בינוי בישראל ב-2026, בעל דירה פטור ממס שבח, ממס רכישה, וממע״מ.</strong> הפטור חל לפי סעיף 49ב&apos; לחוק מיסוי מקרקעין וסעיף 9 לחוק מס רכישה. נייר עמדה של רשות המסים מ-03/2026 מאשר את הפטור גם ליורשים שעוברים פינוי בינוי במהלך הפרויקט. תקבולים נלווים (פיצוי, שכר דירה חלופי) נחשבים תקבול הוני ולא מס הכנסה. הוצאות עורך דין מצטברות לקיזוז מס עתידי. <strong>חשוב:</strong> כל מקרה דורש בדיקה אישית מול רואה חשבון או עורך דין מקרקעין.
              </p>
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              מאמר זה אינו ייעוץ משפטי או חשבונאי. הוא מתאר את הקווים הכלליים של מסים בפינוי בינוי לבעלי דירות, מצביע על נקודות שדורשות בדיקה ספציפית, ומפנה למקורות הרשמיים של רשות המסים. <strong>מומלץ להתייעץ עם עורך דין מקרקעין</strong> ועם רואה חשבון לפני חתימה על הסכם פינוי בינוי. למסגרת רחבה ראו את המדריך על{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-zo" title="פינוי בינוי הוא אירוע ניטרלי-מס למרבית הדיירים">
            <p>
              עיקר העקרון: רשות המסים (taxes.gov.il) רואה בפינוי בינוי החלפה של נכס תוך-בעלותי, לא עיסקה כלכלית מלאה. הדייר מקבל נכס חדש במקום הישן, בלי לקבל כסף בכיסו. בהיעדר רווח כלכלי ממומש, אין אירוע מס. הפטור מעוגן בחוק מיסוי מקרקעין סעיף 49ב&apos;, בחוק מס רכישה סעיף 9, ובהחלטות מקצועיות של רשות המסים שהתקבעו בנייר עמדה מ-2024 ובעדכון מ-03/2026.
            </p>
            <p>
              למרות הניטרליות הכללית, ישנן ארבע נקודות חיכוך אפשריות עם הרשות: (1) פטור ממס שבח על &ldquo;דירת מגורים יחידה&rdquo; דורש שהדירה היחידה של בעל הזכות; (2) דירה בבעלות חברה לא נהנית מאותו פטור; (3) תוספת שטח גדולה מ-50 מ״ר עלולה ליצור אירוע מס חלקי; (4) מכירה של הדירה החדשה תוך 4 שנים ממסירה מבטלת רטרואקטיבית את חלק מהפטורים. כל אחת מהנקודות דורשת בדיקה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="khamesh-misim" title="חמישה סוגי מס שצריך להכיר">
            <p>
              לכל סוג מס יש מנגנון אחר, פטור שונה, וטעויות נפוצות אחרות. טבלה תמציתית:
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="חמישה סוגי מס בפינוי בינוי לבעל דירה"
              columns={[
                { key: "shem", header: "סוג המס" },
                { key: "matza", header: "מצב טיפוסי לדייר" },
                { key: "haszoot", header: "מקור משפטי" },
              ]}
              rows={[
                {
                  label: "מס שבח",
                  cells: { shem: "מס על רווח הון מקרקעין", matza: "פטור ברוב המקרים (דירת מגורים)", haszoot: "סעיף 49ב' חוק מיסוי מקרקעין" },
                },
                {
                  label: "מס רכישה",
                  cells: { shem: "מס על רכישת מקרקעין", matza: "פטור (דירה חליפית)", haszoot: "סעיף 9 חוק מס רכישה" },
                },
                {
                  label: "מע״מ",
                  cells: { shem: "מס ערך מוסף", matza: "לא רלוונטי לדייר פרטי", haszoot: "חוק מס ערך מוסף 1975" },
                },
                {
                  label: "מס הכנסה",
                  cells: { shem: "מס על הכנסה אישית", matza: "פיצויים נחשבים הוניים, לא הכנסה", haszoot: "פקודת מס הכנסה" },
                },
                {
                  label: "ארנונה",
                  cells: { shem: "מס מקומי", matza: "היזם משלם בתקופת ביניים", haszoot: "פקודת העיריות" },
                },
              ]}
              footnote="כל מצב ספציפי דורש בדיקה אישית. טבלה זו אינה מהווה ייעוץ מקצועי."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="mas-shevach" title="מס שבח: הקריטי ביותר">
            <p>
              מס שבח הוא מס על הרווח שנוצר במכירת מקרקעין בישראל. בעקרון, מי שמוכר דירה ב-3 מיליון ש״ח שקנה ב-1.5 מיליון ש״ח ישלם מס על הרווח של 1.5 מיליון. בפינוי בינוי, החוק מעניק פטור.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">תנאי הפטור:</strong> הדירה היא דירת מגורים יחידה של בעל הזכות, או נכללת באחד הפטורים האחרים (כולל פטור לקשישים, פטור עירוני, פטור על דירה תורשתית). הבעלים תושב ישראל. הדירה לא בבעלות חברה. סטייה מאחד מהתנאים האלה הופכת את הפטור לחלקי או למלא.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">חישוב מס במקרה שאין פטור:</strong> 25% מהשבח לדירת מגורים שאינה יחידה. מדרג עולה לפי שווי. החישוב מסובך — נדרש רואה חשבון מנוסה. הוצאות עורך דין, שיפוצים, ועלויות עיסקה מותרות בקיזוז.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">טריגר רטרואקטיבי:</strong> מכירה של הדירה החדשה תוך 4 שנים ממסירה (פינוי בינוי קלאסי) או 18 חודשים (חלופת שקד) מבטלת חלק מהפטור. הדבר משמעותי במקרה שהדייר שוקל למכור את הדירה החדשה בקרוב אחרי המסירה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="mas-rechisha" title="מס רכישה: כמעט תמיד פטור">
            <p>
              מס רכישה הוא מס שמשלם הקונה בעיסקת מקרקעין — לא המוכר. בפינוי בינוי, הדייר נחשב לקונה של הדירה החדשה (טכנית), אך החוק מעניק פטור.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">חישוב פטור:</strong> סעיף 9 לחוק מס רכישה קובע שהדירה החליפית בפינוי בינוי לא חייבת במס רכישה. במקרה של תוספת שטח, ייתכן ויחול מס רכישה רק על השווי המוסף. עד 50 מ״ר תוספת, רוב המקרים פטורים מתחת לסף. מעבר לזה — בדיקה ספציפית.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">חיוב במקרה של בעלות מורכבת:</strong> דירה בבעלות 4 אנשים לדוגמה. כל אחד עוצר 25%. החוק מטפל בכל בעל זכות בנפרד. אם אחד הוא תושב חוץ, או אם המקרה מורכב מסיבה אחרת, יחול חישוב נפרד.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="mas-hachnasa" title="מס הכנסה: רק על שכר דירה חלופי">
            <p>
              מס הכנסה הוא מס שנתי על הכנסת היחיד. רוב התקבולים בפינוי בינוי הם הוניים (חלק מתמורת הדירה) ולא נחשבים הכנסה. אבל יש יוצאים מהכלל.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">תקבולים שלא חייבים במס הכנסה:</strong> פיצוי על אי-נוחות, פיצוי על פינוי, פיצוי כספי כללי שמהווה חלק מתמורת הדירה. רואה חשבון יסביר את הסיווג בכל מקרה.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">תקבולים שחייבים במס הכנסה:</strong> שכר דירה חלופי שהיזם משלם לדייר על דירה ששוכר במקום אחר. ההכנסה הזו נחשבת הכנסה רגילה לעניין מס הכנסה. סף הכנסה משכר דירה משתחרר ממס נמצא בכ-5,471 ש״ח לחודש (2026). מעל הסף — חבות מס של 10% עד שיעור שולי גבוה יותר.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="dugma" title="דוגמה אמיתית: בעל דירה ברמת גן ב-2024">
            <p>
              דייר בן 62, רמת גן, דירת מגורים יחידה, 78 מ״ר נטו, נכנס לפרויקט פינוי בינוי. תמורה: דירה חדשה 105 מ״ר (תוספת 27 מ״ר), חניה צמודה, מחסן, פיצוי כספי 220,000 ש״ח, שכר דירה חלופי 4,500 ש״ח לחודש למשך 36 חודשים.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li><strong className="text-[var(--color-primary)]">מס שבח:</strong> 0 ש״ח. דירה יחידה, פטור מלא לפי סעיף 49ב&apos;.</li>
              <li><strong className="text-[var(--color-primary)]">מס רכישה:</strong> 0 ש״ח. דירה חליפית, פטור מלא לפי סעיף 9.</li>
              <li><strong className="text-[var(--color-primary)]">מס על פיצוי כספי 220,000 ש״ח:</strong> 0 ש״ח. תקבול הוני, חלק מתמורת הדירה.</li>
              <li><strong className="text-[var(--color-primary)]">מס הכנסה על שכר דירה חלופי:</strong> 4,500 לחודש = 54,000 שנתי = פטור (מתחת לסף 65,652 ש״ח שנתי בשנת 2026).</li>
              <li><strong className="text-[var(--color-primary)]">סך כל המס שמשלם הדייר:</strong> 0 ש״ח.</li>
            </ul>
            <p>
              הוצאות עורך דין דיירים (430 ש״ח חלקו) ויועץ מס (200 ש״ח חלקו) נשמרות לקיזוז ממס שבח עתידי אם הדייר ימכור את הדירה החדשה אחרי 4 שנים.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="taoyot" title="חמש טעויות מס נפוצות שעולות יקר">
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">לא לקרוא את ההסכם מבחינת מס.</strong> ההסכם מגדיר מי משלם ארנונה בתקופת הביניים, איך מטופל פיצוי איחור, ומי אחראי על דיווח לרשויות המס. סעיף לקוי = הוצאה לא צפויה של 5,000-30,000 ש״ח.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">להניח שכל הפטורים אוטומטיים.</strong> פטור ממס שבח דורש דיווח רשמי לרשויות המס תוך 30 יום מהחתימה על ההסכם. אי-דיווח = קנס.
              </li>
                <li>
                <strong className="text-[var(--color-primary)]">למכור את הדירה החדשה תוך 4 שנים.</strong> מבטל רטרואקטיבית חלק מפטור מס שבח. נדרש תכנון לטווח של 4-6 שנים לפחות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לא לשמור קבלות.</strong> קבלות מעורך דין, יועץ, מהנדס — כולן יכולות להתקזז ממס שבח עתידי. אובדן קבלות = אובדן הקיזוז.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לבחור רואה חשבון בלי ניסיון בפינוי בינוי.</strong> חוקי המס מורכבים. רואה חשבון רגיל לא תמיד יודע את הפטורים הספציפיים. נדרש רואה חשבון או יועץ מס מנוסה במקרקעין.
              </li>
            </ol>
            <p>
              עיון נוסף זמין באתר{" "}
              <a
                href="https://www.taxes.gov.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                רשות המסים
              </a>
              {" "}ובמאגר{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                נבו
              </a>
              {" "}לחוק מיסוי מקרקעין ולחוק מס רכישה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "רשות המסים בישראל",
          url: "https://www.taxes.gov.il/",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              שאלות מס בפרויקט שלכם? בואו נדבר.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו לא יועצי מס. אבל אנחנו מכירים את התחום ויודעים להפנות. ייעוץ ראשוני ללא עלות, ללא התחייבות. <strong>חשוב:</strong> בדיקה ספציפית למצבכם דורשת רואה חשבון או עורך דין מקרקעין.
            </p>
          </div>
          <InlineLeadForm
            title="שאלות על מסים בפינוי בינוי"
            subtitle="השאירו שם וטלפון. נחזור אליכם עם הפניה למומחה מתאים."
            defaultService="פינוי בינוי / התחדשות עירונית"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/tax-meturgam-pinui-binui"
        targets={[
          "pinui-binui-temurot",
          "pinui-binui-yorshim",
          "pinui-binui-kshishim",
          "pinui-binui",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על מסים בפינוי בינוי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
