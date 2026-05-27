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

const PATH = "/hashvaa/shaked-vs-tama";
const TITLE = "חלופת שקד מול תמ״א 38 2026: מה השתנה ומה לבחור | התחדשות";
const DESCRIPTION =
  "חלופת שקד מחליפה את תמ״א 38/2 ב-2026. מדריך השוואה מפורט: מסגרת חוקית, זכויות בנייה, תהליך אישור, ומה דייר צריך לעשות בתקופת המעבר.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "האם חלופת שקד היא בדיוק תמ״א 38/2?",
    a: "לא, אך היא קרובה. שתי התוכניות מאפשרות הריסה ובנייה של בניין יחיד עם 80% הסכמה. ההבדלים: חלופת שקד מבוססת על תיקון 139 לחוק התכנון והבנייה (חקיקה ראשית), ואילו תמ״א 38 הייתה תוכנית מתאר ארצית. חלופת שקד מאפשרת זכויות בנייה גמישות יותר, ותהליך אישור עדכני. תמ״א 38/2 פוקעת מאי 2026, חלופת שקד תקפה ב-2026 ואילך.",
  },
  {
    q: "איזו תוכנית מציעה זכויות בנייה גדולות יותר?",
    a: "חלופת שקד מציעה זכויות בנייה גמישות יותר, עד 400% משטח הבניין הקיים בתנאים מסוימים. תמ״א 38/2 הייתה מוגבלת לפי תקנות תוכנית המתאר. בפועל, ההבדל לדיירים הוא תוספת מ&ldquo;ר משמעותית יותר בחלופת שקד: 25-35 מ&ldquo;ר במרכז הארץ לעומת 20-30 מ&ldquo;ר בתמ״א 38/2.",
  },
  {
    q: "אם יש לי הסכם תמ״א 38/2 פעיל, צריך לעבור לחלופת שקד?",
    a: "תלוי בשלב הפרויקט. אם יש היתר בנייה תקף, הפרויקט ממשיך כתמ״א 38/2 לפי ההיתר. אם אין היתר ולא ריאלי לקבל אחד לפני מאי 2026, מעבר לחלופת שקד הוא הפתרון. המעבר דורש חתימה מחודשת על הסכם, אך הזכויות הבסיסיות משתמרות. ייעוץ עם עורך דין מקרקעין מסייע בניווט המעבר.",
  },
  {
    q: "מה קורה לערבויות הבנקאיות במעבר?",
    a: "ערבויות שהונפקו במסגרת תמ״א 38/2 לא עוברות אוטומטית לחלופת שקד. נדרש להנפיק ערבויות חדשות במסגרת ההסכם החדש. הבנק המנפיק עשוי להסכים להעביר את הערבויות בתנאים מסוימים, אך זוהי החלטה של הבנק. ייעוץ עם עורך דין דיירים מבטיח שהמעבר לא יחסיר את הביטחון הכלכלי של הדיירים.",
  },
  {
    q: "האם הרוב הנדרש זהה ב-80%?",
    a: "כן. בשני המסלולים נדרשים 80% מבעלי הדירות. הזהות ברף הזה מקלה על מעבר בין המסלולים: דיירים שכבר הסכימו לתמ״א 38/2 ב-80% בדרך כלל מסכימים גם לחלופת שקד באותו רף. נדרשת חתימה מחודשת על ההסכם החדש, אך לא נדרשת השגת רוב חדש.",
  },
  {
    q: "כמה זמן לוקח כל מסלול?",
    a: "שני המסלולים לוקחים 5-8 שנים מההסכמה הראשונית עד מסירה. ההבדל המהותי: בחלופת שקד תהליך האישור פחות סרבל בשל המסגרת החוקית העדכנית, מה שעשוי לקצר את שלב התכנון והרישוי בכ-6-12 חודשים בהשוואה לתמ״א 38/2 הקודמת.",
  },
  {
    q: "מה היתרון של חלופת שקד?",
    a: "שלושה יתרונות מרכזיים: יציבות רגולטורית (חוק ראשי לעומת הוראת שעה), זכויות בנייה גמישות יותר (עד 400% משטח), ותהליך אישור עדכני יותר. מבחינת הדיירים, היתרונות מתבטאים בתמורה גדולה יותר ובאי-ודאות נמוכה יותר. מבחינת היזמים, ההזדמנות הכלכלית גדולה יותר, מה שמושך יזמים איכותיים יותר.",
  },
  {
    q: "האם תמ״א 38/1 מקבלת תחליף בחלופת שקד?",
    a: "לא. חלופת שקד מיועדת בעיקר להריסה ובנייה (כמו תמ״א 38/2), ולא לחיזוק בלבד (כמו תמ״א 38/1). בעלי בניין שזקוק לחיזוק בלבד יצטרכו לבחון אפשרויות אחרות: לעבור לחלופת שקד עם הריסה (במידה והבניין מסוגל), להצטרף למתחם פינוי בינוי, או לבצע חיזוק עצמי במימון פנימי.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="חלופת שקד מול תמ״א 38 2026: מה השתנה ומה לבחור"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "השוואות", url: "/hashvaa" },
          { name: "חלופת שקד מול תמ״א 38", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="השוואה · התחדשות עירונית"
        title="חלופת שקד מול תמ״א 38 2026: מה השתנה ומה לבחור"
        subtitle="מדריך השוואה 2026: ההבדלים בין חלופת שקד לתמ״א 38/2, מה משתנה ב-2026, וההכרעה לבעלי הסכמים פעילים."
        crumbs={[
          { name: "השוואות", href: "/hashvaa" },
          { name: "חלופת שקד מול תמ״א 38", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              חלופת שקד היא הממשיכה הישירה של תמ״א 38/2 בהתחדשות עירונית של בניין יחיד. שתיהן מאפשרות הריסה ובנייה מחדש עם 80% הסכמה. ההבדלים: חלופת שקד מבוססת על תיקון 139 לחוק התכנון והבנייה (חקיקה ראשית קבועה), מציעה זכויות בנייה גמישות יותר עד 400% משטח קיים, ותהליך אישור עדכני. תמ״א 38/2 פוקעת במאי 2026 ברוב הארץ, ובקשות חדשות לא יתקבלו אחרי. מדריך זה משווה בין השתיים, מסביר את המעבר לבעלי הסכמים פעילים, ומסייע להחליט.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hevdel-mehoti" title="ההבדל המהותי: תוכנית מתאר מול חוק ראשי">
            <p>
              ההבדל המבני בין השתיים הוא במעמד החוקי. תמ״א 38 הייתה תוכנית מתאר ארצית, סוג של הוראת שעה שאומצה ב-2005 והוארכה במשך 20 שנה. כל הארכה דרשה החלטה רגולטורית. חלופת שקד מבוססת על תיקון 139 לחוק התכנון והבנייה: חקיקה ראשית קבועה, יציבה רגולטורית, ולא תלויה בהארכות.
            </p>
            <p>
              ההשפעה לדיירים: יציבות לטווח ארוך. פרויקט חלופת שקד שמתחיל ב-2026 לא יסתיים בפוקעה אם החוק יוארך או יבוטל. תמ״א 38, בתחילתה, גם נחשבה ליציבה. עם הזמן התברר שהוראת שעה היא מסגרת פגיעה.
            </p>
            <p>
              ההשפעה ליזמים: השקעה ארוכת טווח קלה יותר. יזם שמשקיע במחקר היתכנות לפרויקט חלופת שקד יודע שהמסגרת החוקית תהיה זמינה גם בעוד 5-8 שנים, כשהפרויקט יהיה בעיצומו.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hashvaa-mefurtett" title="השוואה מפורטת">
            <p>
              שמונה מימדים שמבדילים בין חלופת שקד לתמ״א 38/2.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="חלופת שקד לעומת תמ״א 38/2: השוואה מפורטת"
              columns={[
                { key: "shaked", header: "חלופת שקד" },
                { key: "tama", header: "תמ״א 38/2" },
              ]}
              rows={[
                {
                  label: "מסגרת חוקית",
                  cells: { shaked: "תיקון 139 לחוק התכנון והבנייה", tama: "תוכנית מתאר ארצית 38" },
                },
                {
                  label: "מעמד",
                  cells: { shaked: "חוק ראשי, יציב", tama: "הוראת שעה, פוקעת" },
                },
                {
                  label: "סטטוס ב-2026",
                  cells: { shaked: "תקף ב-2026 ואילך", tama: "פוקעת מאי 2026" },
                },
                {
                  label: "רוב נדרש",
                  cells: { shaked: "80%", tama: "80%" },
                },
                {
                  label: "תוספת זכויות בנייה",
                  cells: { shaked: "עד 400% משטח קיים", tama: "מוגבלת לפי תקנות תמ״א" },
                },
                {
                  label: "תוספת מ״ר לדייר",
                  cells: { shaked: "25-35 מ״ר במרכז הארץ", tama: "20-30 מ״ר במרכז הארץ" },
                },
                {
                  label: "זמן ביצוע",
                  cells: { shaked: "5-8 שנים", tama: "5-8 שנים" },
                },
                {
                  label: "תהליך אישור",
                  cells: { shaked: "מסגרת עדכנית", tama: "סרבל יחסית, מורכב" },
                },
              ]}
              footnote="הזכויות הבסיסיות לדיירים זהות. ההבדלים העיקריים הם רגולטוריים וקלות התהליך."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="zechuyot-bniya" title="זכויות הבנייה: ההבדל הכלכלי">
            <p>
              חלופת שקד מציעה תוספת זכויות בנייה גדולה יותר. עד 400% משטח הבניין הקיים בתנאים מסוימים. בפועל, התוספת המקובלת בערי המרכז היא 200%-300% משטח קיים, מה שמאפשר הוספה של 70%-100% יחידות דיור חדשות. בתמ״א 38/2 התוספת הייתה מוגבלת יותר.
            </p>
            <p>
              ההשפעה הכלכלית: פרויקטים בחלופת שקד רווחיים יותר ליזמים, מה שמושך יזמים איכותיים יותר ומגדיל את התחרות. דיירים מקבלים תמורה משופרת: בערי המרכז 25-35 מ&ldquo;ר תוספת לעומת 20-30 בתמ״א 38/2. ההבדל של 5 מ&ldquo;ר עשוי להיראות קטן, אך הוא משמעותי בערכי שוק (50,000-150,000 ש&ldquo;ח לדירה).
            </p>
            <p>
              לקבלת מידע מקיף על חלופת שקד, ראו את המדריך על{" "}
              <Link
                href="/chalufat-shaked"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                חלופת שקד
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="maavar" title="המעבר לבעלי הסכמים פעילים">
            <p>
              דיירים שיש להם הסכם תמ״א 38/2 פעיל ב-2026 צריכים להחליט בין שתי אפשרויות:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">להמשיך כתמ״א 38/2 (אם יש היתר).</strong> פרויקט עם היתר בנייה תקף ממשיך לפי ההיתר, גם אחרי הפוקעה. אין צורך לעבור.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לעבור לחלופת שקד (אם אין היתר).</strong> אם לא ריאלי להוציא היתר לפני מאי 2026, מעבר לחלופת שקד הוא הצעד הטבעי. דורש חתימה מחודשת על הסכם, אך הזכויות הבסיסיות (תמורה, ערבויות, זכויות גיל) משתמרות.
              </li>
            </ol>
            <p>
              למידע מפורט על תהליך הפוקעה ומה לעשות, ראו את המדריך על{" "}
              <Link
                href="/tama-38/pkia-2026"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38 פוקעת
              </Link>
              . עיון נוסף על המסגרת הרגולטורית זמין ב
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              {" "}ובמאגר{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                תיקון 139
              </a>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hechlatat-2026" title="ההכרעה ב-2026">
            <p>
              לבעלי בניין יחיד שעדיין לא נכנסו לתמ״א 38, ההכרעה ב-2026 פשוטה: חלופת שקד היא הפתרון. תמ״א 38 פוקעת ובקשות חדשות לא יתקבלו. למידע מקיף על תמ״א 38 לחיזוק בלבד (38/1), ראו את המדריך על{" "}
              <Link
                href="/tama-38/sug-1"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38/1
              </Link>
              .
            </p>
            <p>
              לבעלי בניין יחיד שעדיין שוקלים, חלופת שקד מציעה שלושה יתרונות מרכזיים: יציבות רגולטורית גבוהה יותר, זכויות בנייה גמישות יותר שמשפרות את התמורה, ותהליך אישור עדכני שמקצר את הזמן. ההמלצה הברורה היא להתחיל ישירות בחלופת שקד.
            </p>
            <p>
              לבעלי הסכם תמ״א 38/2 פעיל, ההחלטה תלויה בסטטוס ההיתר. עם היתר תקף, להמשיך. בלי היתר, לעבור.
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
              שוקלים חלופת שקד או תמ״א 38? בדקו את המצב הספציפי.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים דיירים בבחינת מסלולי התחדשות עירונית. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="חלופת שקד או תמ״א 38: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב של הבניין שלכם."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="hashvaa/shaked-vs-tama"
        targets={["chalufat-shaked", "tama-38", "tama-38-sug-2"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על חלופת שקד מול תמ״א 38"
        tone="soft"
        includeSchema
      />
    </>
  );
}
