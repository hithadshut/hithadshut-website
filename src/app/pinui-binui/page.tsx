import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContentSection from "@/components/ContentSection";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import InlineLeadForm from "@/components/InlineLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import AnswerBlock from "@/components/AnswerBlock";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/pinui-binui";
const TITLE = "פינוי בינוי 2026: איך זה עובד, כמה זמן ומה מקבלים";
const DESCRIPTION =
  "פינוי בינוי הוא הריסת מתחם ובנייתו מחדש: דירה חדשה גדולה יותר, רוב 67% נדרש נגד דייר סרבן, ותהליך של 7-12 שנים. המדריך המלא: תמורות, זכויות קשישים, חוזה ובחירת יזם.";
const PUBLISHED_DATE = "2026-05-03";
const MODIFIED_DATE = "2026-07-14";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "כמה זמן באמת לוקח פינוי בינוי?",
    a: "פרויקט פינוי בינוי טיפוסי בישראל לוקח בין 7 ל-12 שנים מהרגע שהדיירים מתחילים להתארגן ועד שמקבלים את המפתח לדירה החדשה. השלב הארוך ביותר הוא בדרך כלל ההליך התכנוני בוועדה המקומית, שיכול לקחת 18 עד 36 חודשים. שלב הבנייה עצמו אורך 24 עד 60 חודשים בהתאם לגודל המתחם.",
  },
  {
    q: "מה ההבדל בין פינוי בינוי לתמ״א 38?",
    a: "פינוי בינוי הוא תהליך מתחמי שמתבצע על קבוצת בניינים, מינימום 24 יחידות דיור, שנהרסים ונבנים מחדש כיחידה אחת. תמ״א 38 חלה על בניין יחיד, וכוללת שני מסלולים: 38/1 (חיזוק בלי הריסה) ו-38/2 (הריסה ובנייה מחדש של בניין אחד). תמ״א 38 פוקעת במאי 2026 ברוב הארץ.",
  },
  {
    q: "מה זה חוק 67% בפינוי בינוי?",
    a: "חוק 67% הוא הרף הנדרש להגשת תביעה משפטית נגד דייר סרבן בפרויקט פינוי בינוי. אם 67% מבעלי הדירות (שני שלישים) מסכימים לפרויקט, היזם או הנציגות יכולים לפנות לבית המשפט נגד דייר שמסרב. חשוב לדעת: 67% הוא הרף לתביעה, לא לביצוע. לביצוע הפרויקט נדרשת בסופו של דבר חתימה של כל הדיירים או פסק דין שמחייב את הסרבן.",
  },
  {
    q: "כמה דירות מקבלים בפינוי בינוי?",
    a: "בעל דירה אחת בפינוי בינוי מקבל בדרך כלל דירה אחת חדשה בתמורה לדירה הישנה, כאשר הדירה החדשה גדולה יותר ב-15 עד 35 מ״ר במרכז הארץ נכון לשנת 2026. בנוסף, נהוג לקבל חניה תת-קרקעית ומחסן, ולעיתים מרפסת. הסטנדרט המדויק תלוי בפרויקט הספציפי, באזור הגיאוגרפי ובמשא ומתן עם היזם.",
  },
  {
    q: "האם כדאי לי להיכנס לפינוי בינוי בגיל 75?",
    a: "התשובה תלויה במצב הספציפי שלכם, אבל החוק בישראל מעניק לדיירים בני 75 ומעלה הגנות מיוחדות בפרויקטי פינוי בינוי: היזם חייב להציע את כל החלופות (דירת תמורה, דיור מוגן, דירה חלופית, או שתי דירות בשווי הדירה החדשה), לא רק אחת מהן. בנוסף, דיירים בני 70 ומעלה זכאים לחלופה אחת לפחות מתוך השלוש. מומלץ להתייעץ עם עורך דין מקרקעין שמכיר את זכויות הדיירים המבוגרים לפני חתימה.",
  },
  {
    q: "מי בוחר את היזם בפרויקט פינוי בינוי?",
    a: "היזם נבחר על ידי הדיירים, לא על ידי הוועדה המקומית או על ידי גורם חיצוני אחר. הנציגות הזמנית של הדיירים, יחד עם עורך הדין שלהם, מקבלים הצעות מכמה יזמים, משווים אותן, ובסוף ממליצים לאסיפת הדיירים. אסיפת הדיירים מצביעה ובוחרת. רוב הדיירים מתעקשים לקבל לפחות 3 הצעות לפני הבחירה.",
  },
  {
    q: "מה קורה אם דייר אחד מסרב לחתום?",
    a: "אם 67% מבעלי הדירות חתמו והפרויקט לא יכול להתקדם בגלל דייר סרבן, היזם או הנציגות יכולים להגיש תביעה לבית המשפט המחוזי. בית המשפט בוחן אם סירוב הדייר הוא סביר. אם הסירוב לא סביר, בית המשפט יכול לחייב את הדייר לחתום או למנות כונס נכסים שיחתום במקומו. ההליך המשפטי הזה אורך בדרך כלל בין שנה לשלוש שנים.",
  },
  {
    q: "מה צריך לבדוק בהסכם פינוי בינוי לפני שחותמים?",
    a: "ההסכם חייב לעגן: ערבויות בנקאיות לכל שלבי הפרויקט (חוק המכר), שכר דירה לתקופת הביניים, מועד מסירת הדירה החדשה עם פיצוי על איחור, מפרט טכני של הדירה החדשה, פיצוי על שדרוג, מי נושא במס שבח ובהיטל השבחה, ומה קורה אם היזם נכשל. אסור לחתום בלי שעורך דין דיירים בלתי תלוי ביזם בדק את ההסכם.",
  },
];

const processSteps = [
  {
    title: "התארגנות ראשונית של הדיירים",
    text: "מי מארגן: לרוב 2 עד 4 דיירים פעילים שמזהים את ההזדמנות. השלב הזה כולל מיפוי בעלי הדירות, אסיפת היכרות ראשונה, וקבלת ייפוי כוח זמני להמשך הליך מטעם רוב הדיירים.",
  },
  {
    title: "בחירת עורך דין דיירים",
    text: "עורך הדין של הדיירים חייב להיות בלתי תלוי ביזם, ללא כל ניגוד עניינים. תפקידו לייצג את הדיירים בלבד מול היזם, הוועדה המקומית ובית המשפט. עלות שכר הטרחה נושא בסופו של דבר היזם, אבל הבחירה היא של הדיירים.",
  },
  {
    title: "בחירת שמאי דיירים",
    text: "שמאי דיירים בלתי תלוי משלים את עורך הדין: הוא בודק את שווי הדירה הקיימת, את שווי דירת התמורה, ואת היחס ביניהם. בלי שמאי, הצעת היזם נבחנת רק מבחינה משפטית, ולא ערכית.",
  },
  {
    title: "קבלת הצעות מיזמים",
    text: "מקובל לאסוף לפחות 3 הצעות לפני בחירה. הצעות נבחנות לפי תוספת שטח, מפרט טכני, גובה הערבויות, לוח זמנים מחייב, ואיכות פרויקטים קודמים של היזם. השוואה רק לפי המ״ר המוצע אינה השוואה.",
  },
  {
    title: "בחירת היזם וחתימה על הסכם פינוי",
    text: "ההסכם חייב לכלול: מפרט טכני מלא, מועד מסירה מחייב עם פיצוי על איחור, ערבויות, סעיף שכר דירה לתקופת הביניים, חלוקת תשלומי מסים והיטלים, ופתרון לתרחיש כשל של היזם.",
  },
  {
    title: "קבלת ערבויות",
    text: "שלוש ערבויות עיקריות לפי חוק המכר: ערבות לתקופת הבנייה (להבטחת השלמת הפרויקט), ערבות לתקופת הביניים (להבטחת תשלומי שכר הדירה), וערבות לרישום הזכויות בטאבו על שם הדיירים בסופו של פרויקט. ללא הערבויות, אין הסכם.",
  },
  {
    title: "הגשת תוכנית לוועדה המקומית",
    text: "היזם מגיש תוכנית מפורטת לוועדה המקומית. תקופת ההמתנה הטיפוסית עד קבלת אישור עומדת על 18 עד 36 חודשים. בשלב הזה אין עדיין היתר בנייה, רק אישור עקרוני של התוכנית, וזה לא הזמן לפנות את הבית.",
  },
  {
    title: "קבלת היתר בנייה",
    text: "היתר הבנייה הוא אבן דרך מרכזית שמאפשר ליזם לפעול. רק אחרי קבלתו מתחילים שלבי הפינוי הפיזיים והבנייה. עד אבן הדרך הזו, ההסכם תקף אבל הפרויקט עדיין במישור הסטטוטורי.",
  },
  {
    title: "פינוי הדיירים לדיור חלופי",
    text: "היזם משלם שכר דירה לתקופת הביניים, מבטיח פיקדון, ולעיתים גם משלם הוצאות מעבר. גובה שכר הדירה מוגדר בחוזה לפי שווי שוק שכירות באזור, ומשתלם חודש בחודשו עד מסירת הדירה החדשה.",
  },
  {
    title: "הריסה ובנייה",
    text: "שלב הבנייה הפיזית אורך 24 עד 60 חודשים, תלוי בגודל המתחם ובמורכבות. עיכובים קורים, ובדיוק בשביל זה ההסכם כולל פיצוי על איחור: לרוב 1.5 פעמיים שכר הדירה החודשי לכל חודש איחור מעבר למועד המסירה המחייב.",
  },
  {
    title: "מסירה וכניסה לדירה החדשה",
    text: "המסירה מתבצעת לפי חוק המכר, עם פרוטוקול מסירה ובדיקת ליקויים. תקופת הבדק (12 חודשים) ותקופת האחריות (3 עד 7 שנים לפי הסעיף) מתחילות מהמסירה. רישום הזכויות בטאבו על שם הדיירים נעשה בשלב הזה או מעט אחריו.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "תהליך פינוי בינוי בישראל: 11 שלבים מההתארגנות ועד מסירת המפתח",
  description:
    "התהליך המלא של פרויקט פינוי בינוי ישראלי, מההתארגנות הראשונית של הדיירים עד קבלת הדירה החדשה: בחירת בעלי מקצוע, ניהול משא ומתן, אישורים, פינוי, בנייה ומסירה.",
  totalTime: "P9Y",
  step: processSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.text,
  })),
};

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="פינוי בינוי 2026: המדריך המלא לבעלי דירות בישראל"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb items={[{ name: "פינוי בינוי", url: PATH }]} />
      <JsonLd data={howToJsonLd} />

      <PageHero
        eyebrow="התחדשות עירונית"
        title="פינוי בינוי 2026: המדריך המלא לבעלי דירות בישראל"
        subtitle="כל מה שצריך לדעת על פינוי בינוי בישראל ב-2026: המסלול, חוק 67%, התמורות, ולוח הזמנים האמיתי."
        crumbs={[{ name: "פינוי בינוי", href: PATH }]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>

            {/* Answer-first box: extractable LLM citation block (BrightEdge 44.2% rule) */}
            <div
              className="rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-soft)] p-6 md:p-7 mb-6"
              aria-labelledby="bekitzur-hub"
            >
              <h2 id="bekitzur-hub" className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-3">
                בקצרה: פינוי בינוי 2026
              </h2>
              <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-0">
                פינוי בינוי הוא הריסת מתחם דירות ישן ובניית מתחם חדש במקומו. הדיירים מקבלים
                דירה חדשה גדולה יותר (תוספת ממוצעת 25 מ״ר במרכז הארץ) ללא תשלום. נדרש רוב
                67% מבעלי הדירות (ירידה מ-80% ב-2024) להגשת תביעה נגד דייר סרבן. תהליך טיפוסי
                7 עד 12 שנים. ב-2026 הנושא במוקד: תמ״א 38 פוקעת במאי, ורוב הרשויות מעבירות
                פרויקטים למסלול פינוי בינוי. מתחם פינוי בינוי דורש לפחות 24 יחידות דיור.
              </p>
            </div>

            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              פינוי בינוי הוא הריסת בניין מגורים ישן ובניית מתחם חדש במקומו, כאשר הדיירים הקיימים מקבלים דירה חדשה במתחם בתמורה לדירה הישנה. בישראל, מסלול פינוי בינוי חל על מתחמים של 24 יחידות דיור ומעלה, נדרשת הסכמה של 67% מבעלי הדירות כדי להגיש תביעה נגד דייר סרבן, ופרויקט טיפוסי לוקח 7 עד 12 שנים מההסכמה הראשונית עד מסירת הדירות החדשות. מדריך זה מסביר את כל מה שבעלי דירות בישראל צריכים לדעת בשנת 2026.
            </p>

            {/* Contextual sub-page links with keyword-rich anchors */}
            <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-7">
              <h3 className="text-lg md:text-xl font-black text-[var(--color-primary)] mb-4">
                מדריכי המשך לפי נושא
              </h3>
              <ul className="space-y-3 text-[17px] text-[var(--color-ink)] leading-relaxed list-none">
                <li>
                  <Link href="/pinui-binui/chok-67" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                    חוק 67% פינוי בינוי
                  </Link>
                  {" · "}הסבר על הרוב הנדרש לתביעה נגד דייר סרבן (ירידה מ-80%).
                </li>
                <li>
                  <Link href="/pinui-binui/temurot" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                    תמורות פינוי בינוי
                  </Link>
                  {" · "}כמה דירות וכמה מ״ר באמת תקבלו, חניה, מחסן ופיצוי כספי.
                </li>
                <li>
                  <Link href="/pinui-binui/eravut" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                    ערבות חוק מכר
                  </Link>
                  {" · "}ההגנה הבנקאית החובה לדיירים, ההבדל מערבות בנקאית.
                </li>
                <li>
                  <Link href="/pinui-binui/kshishim" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                    פינוי בינוי לקשישים
                  </Link>
                  {" · "}זכויות גיל 70+ ו-75+ וחלופות הדיור המוצעות.
                </li>
                <li>
                  <Link href="/pinui-binui/sarvan" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                    דייר סרבן
                  </Link>
                  {" · "}מי נחשב סרבן, מתי הסירוב צודק ומה צפוי בהליך משפטי.
                </li>
                <li>
                  <Link href="/pinui-binui/yazam" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                    איך בוחרים יזם פינוי בינוי
                  </Link>
                  {" · "}שיקולי בחירה, בדיקות נאותות ודגלים אדומים.
                </li>
                <li>
                  <Link href="/pinui-binui/yorshim" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                    יורשים ופינוי בינוי
                  </Link>
                  {" · "}מס שבח, חלוקת ירושה, וזכויות יורש בפרויקט פעיל.
                </li>
                <li>
                  <Link href="/pinui-binui/mechirat-dira" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                    מכירת דירה לפני פינוי בינוי
                  </Link>
                  {" · "}כמה שווה הפוטנציאל, למי מוכרים, ומתי עדיף למכור לעומת לחכות.
                </li>
                <li>
                  <Link href="/pinui-binui/yorshim-mechira" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                    מכירת דירת ירושה בפינוי בינוי
                  </Link>
                  {" · "}ליורשים ששוקלים למכור: זכויות המוריש, מיסוי, וסדר הפעולות הנכון.
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Citeable entity block: NAP single-source (site.ts) + liftable answer for AI engines.
          includeFaqSchema omitted (default false) so the single FAQPage stays on the bottom FAQ. */}
      <AnswerBlock
        service="ליווי דיירים בפינוי בינוי והתחדשות עירונית בכל הארץ"
        process="בדיקת היתכנות, בחירת יזם והשוואת הצעות, וליווי עד מסירה"
        answer={
          <>
            פינוי בינוי הוא הריסת מתחם מגורים ישן ובנייתו מחדש, כשבעל דירה מקבל דירה חדשה גדולה
            יותר ללא תשלום. המסלול חל על מתחם של 24 יחידות דיור ומעלה, ונדרש רוב 67% מבעלי הדירות
            להגשת תביעה נגד דייר סרבן. בהתחדשות בינוי ויזמות מלווים דיירים לאורך התהליך, בשבילם
            ולא בשביל היזם.
          </>
        }
        faqs={[
          {
            q: "מה התנאי לפתיחת מתחם פינוי בינוי?",
            a: "מתחם של 24 יחידות דיור ומעלה, התארגנות דיירים, ועורך דין דיירים בלתי תלוי ביזם.",
          },
          {
            q: "כמה זמן לוקח פינוי בינוי?",
            a: "פרויקט טיפוסי 7 עד 12 שנים. ההליך התכנוני בוועדה לבדו אורך 18 עד 36 חודשים, והבנייה 24 עד 60 חודשים.",
          },
          {
            q: "מה מקבל בעל דירה בתמורה?",
            a: "דירה חדשה גדולה ב-15 עד 35 מ״ר, חניה ומחסן, ושכר דירה מהיזם לכל תקופת הביניים.",
          },
          {
            q: "מי בוחר את היזם?",
            a: "הדיירים, לא הרשות. הנציגות אוספת לפחות שלוש הצעות ומביאה להצבעת אסיפת הדיירים.",
          },
        ]}
      />

      {/* Sub-question hub: each block is a short, self-contained, quotable
          answer + link to the deep page. Structured for AI-engine
          decomposition (Google AI Overviews / ChatGPT / Perplexity), per
          seo-content.md §9. */}
      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl mb-8">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] leading-tight">
              כל השאלות על פינוי בינוי, תשובה קצרה לכל אחת
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ContentSection level={3} id="sq-tahalich" title="איך התהליך עובד">
              <p>
                פינוי בינוי הוא הריסה של מספר בניינים ישנים במתחם ובנייתם מחדש, כשהדיירים
                הקיימים מקבלים דירה חדשה בתמורה לדירה הישנה, ללא תשלום. התהליך המלא, מ
                <a href="#tahalich" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  התארגנות ראשונית ועד מסירת מפתח
                </a>
                , מפורט למטה בעמוד.
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-zman" title="כמה זמן לוקח פינוי בינוי">
              <p>
                פרויקט טיפוסי אורך 7 עד 12 שנים מההסכמה הראשונית עד מסירת הדירה החדשה, כשהשלב
                התכנוני בוועדה המקומית לבדו יכול לקחת 18 עד 36 חודשים. פירוט מלא של כל שלב
                ולוחות הזמנים שלו במדריך{" "}
                <Link href="/madrichim/luach-zmanim-pinui-binui-2026" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  לוח הזמנים לפינוי בינוי 2026
                </Link>
                .
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-hascama" title="כמה הסכמה צריך">
              <p>
                נדרש רוב של 67% מבעלי הדירות (שני שלישים) כדי להגיש תביעה נגד דייר סרבן, ירידה
                מ-80% לפי תיקון 2024. זהו רף להגשת תביעה בלבד, ולביצוע הפרויקט בפועל נדרשים
                עדיין 100% חתימות או פסק דין. הפירוט המלא במדריך{" "}
                <Link href="/pinui-binui/chok-67" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  חוק 67% בפינוי בינוי
                </Link>
                .
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-temurot" title="מה התמורות, ואפשר לקבל 2 דירות">
              <p>
                התמורה הסטנדרטית היא דירה חדשה גדולה ב-15 עד 35 מ״ר מהדירה הישנה, חניה ומחסן.
                במקרים מסוימים, בעיקר בפרויקטים גדולים או לבעלים של יותר מדירה אחת בבניין, ניתן
                לקבל שתי דירות קטנות יותר ששוויין הכולל שווה לדירת התמורה. פירוט מלא במדריך{" "}
                <Link href="/pinui-binui/temurot" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  תמורות בפינוי בינוי
                </Link>
                .
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-kshishim" title="זכויות מיוחדות לבני 70 ומעלה">
              <p>
                דיירים בני 70 ומעלה זכאים לדירת תמורה ולפחות חלופה אחת נוספת (דיור מוגן, דירה
                חלופית, או שתי דירות), ובני 75 ומעלה זכאים לכל החלופות יחד. המדריך המלא{" "}
                <Link href="/pinui-binui/kshishim" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  זכויות קשישים בפינוי בינוי
                </Link>{" "}
                מסביר איך לעגן את הזכויות בהסכם.
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-sarvan" title="מה עושים עם דייר סרבן">
              <p>
                כשדייר לא מסכים להסכם שעליו חתמו 67% מבעלי הדירות, היזם או הנציגות יכולים
                להגיש תביעה לבית המשפט המחוזי, שבוחן אם הסירוב סביר. המדריך{" "}
                <Link href="/pinui-binui/sarvan" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  דייר סרבן בפינוי בינוי
                </Link>{" "}
                מפרט את ההליך, ואת האפשרות למכור את הדירה כחלופה למאבק.
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-yazam" title="מי היזם, ואיך בוחרים">
              <p>
                היזם נבחר על ידי הדיירים עצמם, לא על ידי הרשות. הנציגות אוספת בדרך כלל לפחות
                שלוש הצעות מיזמים לפני שהיא מביאה אותן להצבעת אסיפת הדיירים. מדריך{" "}
                <Link href="/pinui-binui/yazam" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  איך בוחרים יזם פינוי בינוי
                </Link>{" "}
                מפרט את שאלות הבדיקה והדגלים האדומים.
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-heskem" title="הסכם פינוי בינוי: מה חייב להיות בו">
              <p>
                הסכם תקני חייב לכלול דירת תמורה ממוספרת, תוספת מ״ר בכתב, ערבויות בנקאיות לכל
                שלב, שכר דירה לתקופת הביניים, ופיצוי על איחור במסירה. פירוק מלא של סעיפי
                החובה במדריך{" "}
                <Link href="/madrichim/heskem-pinui-binui-shel-2-amudim" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  הסכם פינוי בינוי של 2 עמודים
                </Link>
                .
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-mechira" title="אפשרות נוספת: למכור את הדירה לפני">
              <p>
                מי שלא רוצה או לא יכול לחכות לתום התהליך יכול למכור את הדירה עם הפוטנציאל שלה
                עוד היום, בלי הסכמת שאר הדיירים. מדריך{" "}
                <Link href="/pinui-binui/mechirat-dira" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  מכירת דירה לפני פינוי בינוי
                </Link>{" "}
                מסביר איך מתומחר הפוטנציאל ולמי מוכרים.
              </p>
            </ContentSection>

            <ContentSection level={3} id="sq-shaked" title="מה ההבדל מחלופת שקד">
              <p>
                פינוי בינוי מיועד למתחם של 24 יחידות דיור ומעלה ודורש רוב של 67% להגשת תביעה.{" "}
                <Link href="/chalufat-shaked" className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]">
                  חלופת שקד
                </Link>{" "}
                היא מסלול נפרד לבניין יחיד, לפי תיקון 139, עם רוב נדרש של 80%. אם הבניין שלכם
                אינו חלק ממתחם, חלופת שקד עשויה להיות המסלול הרלוונטי במקום פינוי בינוי.
              </p>
            </ContentSection>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-ze" title="מה זה פינוי בינוי בעצם?">
            <p>
              פינוי בינוי הוא תהליך התחדשות עירונית שבו מספר בניינים ישנים במתחם נהרסים, ובמקומם נבנה מתחם חדש: צפוף יותר, מודרני יותר, וגדול יותר. הדיירים הקיימים מקבלים דירה חדשה בתוך אותו המתחם בתמורה לדירה הישנה שלהם, ומקבלים אותה ללא תשלום. הרווח של היזם נובע מתוספת זכויות הבנייה שמאפשרת לו למכור דירות נוספות לקונים חיצוניים.
            </p>
            <p>
              בישראל מסלול פינוי בינוי חל על מתחם של לפחות 24 יחידות דיור: כלומר, אי אפשר לעשות פינוי בינוי לבניין יחיד. לעומת תמ״א 38, שמתבצעת על בניין יחיד, פינוי בינוי הוא תהליך מתחמי שמתבצע על מספר בניינים יחד.
            </p>
            <p>
              את התהליך אפשר ליזום בשתי דרכים: או שהיזם פונה לדיירים והם בוחנים את ההצעה, או שהדיירים מתארגנים בעצמם, מקימים נציגות, ומזמינים יזמים להגיש הצעות. הדרך השנייה לרוב נחשבת חזקה יותר עבור הדיירים, כי כוח המיקוח שלהם גבוה יותר כשהם פנו ולא רק נענו.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection title="ההבדל בין פינוי בינוי לתמ״א 38 ולחלופת שקד">
            <p>
              בישראל יש כיום ארבעה מסלולי התחדשות עירונית עיקריים. ההבדל ביניהם אינו רק בלוח הזמנים או בעלות, אלא בעיקר בכוח המיקוח של הדיירים, בהיקף השינוי שהם מבצעים בנכס, וברף ההסכמה הנדרש מהשכנים.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="ארבעת מסלולי ההתחדשות העירונית בישראל, נכון ל-2026"
              columns={[
                { key: "scope", header: "היקף" },
                { key: "majority", header: "רוב נדרש" },
                { key: "duration", header: "זמן ביצוע משוער" },
                { key: "fit", header: "מתי כדאי" },
              ]}
              rows={[
                {
                  label: "תמ״א 38/1 (חיזוק)",
                  cells: {
                    scope: "בניין יחיד, ללא הריסה",
                    majority: "66%",
                    duration: "3–5 שנים",
                    fit: "בניינים שמסוגלים לעמוד בחיזוק; בקצה דרכה",
                  },
                },
                {
                  label: "תמ״א 38/2 (הריסה ובנייה)",
                  cells: {
                    scope: "בניין יחיד, הריסה ובנייה",
                    majority: "80%",
                    duration: "5–8 שנים",
                    fit: "בניין יחיד שיוצא לו לבד; בקצה דרכה",
                  },
                },
                {
                  label: "חלופת שקד (תיקון 139)",
                  cells: {
                    scope: "בניין יחיד",
                    majority: "80%",
                    duration: "5–8 שנים",
                    fit: "חלופה לתמ״א 38/2 לאחר פקיעתה",
                  },
                },
                {
                  label: "פינוי בינוי",
                  cells: {
                    scope: "מתחם של 24+ יחידות",
                    majority: "67% להגשת תביעה / 100% לביצוע",
                    duration: "7–12 שנים",
                    fit: "מתחם שלם של בניינים ישנים יחד",
                  },
                },
              ]}
              footnote="טווחי הזמן הם הערכות שוק נכון ל-2026 ומשתנים לפי הוועדה המקומית, מורכבות התכנון וגודל המתחם."
            />
          </div>

          <div className="mt-8 max-w-3xl space-y-4 text-[17px] text-[var(--color-ink)] leading-8">
            <p>
              ההבדל המהותי הוא לא בלוח הזמנים. ההבדל הוא בכוח המיקוח של הדיירים. במתחם של 100 יחידות, יש לכם משא ומתן קולקטיבי מול היזם: נציגות אחת, עורך דין אחד של הדיירים, שמאי אחד, מינוף משותף. בבניין יחיד אין את זה.
            </p>
            <p>
              מסלול נפרד שלא מופיע בטבלה: מסלול הפטור (תקנה 30ב&apos; לתקנות התכנון והבנייה, הוראת שעה) חל על בנייה של ממ״ד בלבד בבתים צמודי קרקע ובניינים עד 2 קומות, בתוקף בהוראת שעה שמתחדשת מעת לעת. אינו מסלול התחדשות עירונית. ההבחנה חשובה: הוראת חרבות ברזל למסלול הפטור איננה תחליף לפינוי בינוי או לתמ״א 38, היא רק קיצור דרך לבניית ממ״ד תקני בבית פרטי.
            </p>
            <p>
              המידע המלא על תמ״א 38, כולל פקיעתה במאי 2026, ייכלל בקרוב במדריך ייעודי באתר.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="tahalich" title="התהליך: מהפנייה הראשונה ועד מסירת המפתחות">
            <p>
              תהליך פינוי בינוי מורכב מ-11 שלבים מובחנים, שכל אחד מהם מצריך החלטות נפרדות של הדיירים. בעוד שהיזם והעורכי דין שלו עוברים את התהליך כדבר שבשגרה, רוב בעלי הדירות עושים זאת פעם אחת בחיים. ההבנה של התהליך מהשלב הראשון מוזילה טעויות ומקצרת לוחות זמנים.
            </p>
          </ContentSection>

          <ol className="mt-6 max-w-3xl space-y-5 text-[17px] text-[var(--color-ink)] leading-8">
            {processSteps.map((step, idx) => (
              <li key={step.title} className="flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-extrabold flex items-center justify-center">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-extrabold text-[var(--color-primary)] text-lg leading-snug mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-ink)] leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="kama-zman" title="כמה זמן באמת לוקח פינוי בינוי?">
            <p>
              פרויקט פינוי בינוי טיפוסי בישראל לוקח 7 עד 12 שנים מההסכמה הראשונית עד המסירה. השלב הארוך ביותר הוא לרוב התכנוני־סטטוטורי: 18 עד 36 חודשים בוועדה המקומית עד אישור התוכנית, ואחרי זה עוד תקופה לקבלת היתר בנייה. שלב הבנייה עצמו אורך 24 עד 60 חודשים, תלוי בגודל המתחם.
            </p>
            <p>
              לוח הזמנים הזה ארוך, וזה צריך להיאמר מפורשות. דיירים בני 70 ומעלה במתחם הם חלק מהאוכלוסייה הגדולה ביותר של פרויקטי פינוי בינוי בישראל, ועבורם 10 שנות תהליך הן זמן משמעותי בחיים. החוק מכיר בכך, ולכן הוא מעניק לדיירים מבוגרים זכויות מיוחדות שמטרתן להגן עליהם בדיוק לאור משך הפרויקט. אנחנו מסבירים אותן בסעיף הבא.
            </p>
            <p>
              ההיכרות מראש עם משך הזמן הצפוי, ועם השלבים הארוכים שלא תלויים ביזם או בדיירים אלא בוועדה המקומית, מצמצמת את התסכול במהלך הדרך. כל פרויקט פינוי בינוי שאי פעם נסגר עבר תקופה ארוכה של אי וודאות. זה חלק מהמסלול, לא תקלה בו.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="kshishim" title="זכויות מיוחדות לדיירים מבוגרים">
            <p>
              החוק הישראלי מעניק לדיירים מבוגרים בפרויקטי פינוי בינוי הגנות שמשקפות את משך הפרויקט והרגישות של עזיבת הבית בגיל מתקדם. ההגנות פועלות בשלוש רמות גיל:
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">גיל 70 ומעלה:</strong> היזם חייב להציע דירת תמורה במתחם החדש, ובנוסף לפחות חלופה אחת מתוך שלוש: דיור מוגן, רכישת דירה חלופית בערך זהה, או שתי דירות ששוויין הכולל שווה לדירת התמורה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">גיל 75 ומעלה או חולה סופני:</strong> היזם חייב להציע את כל החלופות, לא רק אחת מהן. הדייר הוא שבוחר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">קשישים בגמלת סיעוד רמה 5 או 6:</strong> אותן הגנות כמו גיל 75 ומעלה, ללא תלות בגיל הביולוגי.
              </li>
            </ul>
            <p>
              אם אתם בני 70 ומעלה, או יש בן משפחה בגיל הזה במתחם, זכויות אלה הן הכרחיות בהסכם הפינוי. עורך דין דיירים מנוסה יידע לעגן אותן ולוודא שההסכם משקף אותן באופן מחייב, לא רק בעקרון.
            </p>
            <p>
              במצב שבו דייר מבוגר נפטר במהלך הפרויקט, מדריך נפרד על{" "}
              <Link
                href="/pinui-binui/yorshim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ירושת דירה בפינוי בינוי
              </Link>{" "}
              מסביר מה עובר ליורשים, מה השתנה בנייר העמדה של רשות המסים, ומה צריך לעגן בהסכם מראש כדי לשמור על זכויות הגיל גם אחרי הפטירה.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              מקור רשמי:{" "}
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              . מידע משלים על זכויות דיירים מבוגרים זמין גם ב
              <a
                href="https://www.kolzchut.org.il/he/%D7%A4%D7%99%D7%A0%D7%95%D7%99_%D7%91%D7%99%D7%A0%D7%95%D7%99"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                המידע המלא על זכויות דיירים מבוגרים
              </a>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="temurot" title="התמורה: מה תקבלו ומה לא">
            <p>
              התמורה בפינוי בינוי אינה פיצוי כספי במזומן. היא דירה חדשה, גדולה יותר ומשודרגת, באותו המתחם, בתמורה לדירה הישנה. השאלה החשובה היא לא אם תקבלו תמורה, אלא בדיוק כמה תקבלו ומה כלול בה.
            </p>
            <p>
              התמורה הסטנדרטית כיום עומדת על תוספת של כ-25 מ״ר במרכז הארץ, אם כי הטווח משתנה בדרך כלל בין 15 ל-35 מ״ר לפי עיר ופרויקט, לצד חניה תת־קרקעית, מחסן, ולעיתים מרפסת. במתחמים באיכות גבוהה ובאזורי ביקוש, דיירים מקבלים גם פיצוי כספי על שדרוג, מעבר לתוספת השטח עצמה.
            </p>
            <p>
              הסעיפים הקריטיים בהסכם, מעבר לעצם תוספת השטח: מי משלם מס שבח (לרוב היזם, אבל יש לוודא בכתב), מי משלם היטל השבחה (תלוי בעיריה ובתב״ע), ומי מבטיח את שוויה של דירת התמורה אם השוק יורד מאז חתימת ההסכם. סעיפים אלה הם ההבדל בין הסכם טוב להסכם רע, יותר מאשר תוספת מ״ר אחד או שניים.
            </p>
            <p>
              מערך{" "}
              <Link
                href="/pinui-binui/eravut"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ערבויות בפינוי בינוי
              </Link>{" "}
              הוא הליבה של הביטחון הכלכלי שלכם. ערבות חוק מכר על דירת התמורה, ערבויות בנקאיות לשלבי בנייה, וערבות שכר דירה לתקופת הביניים מבטיחות שההתחייבויות יקוימו גם בכשל פיננסי של היזם.
            </p>
            <p>
              לפני חתימה על הסכם פינוי, מומלץ לקבל{" "}
              <Link
                href="/contact"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                ייעוץ ראשוני ללא עלות
              </Link>{" "}
              שמסביר מה לבדוק בהצעת התמורה הספציפית שעל השולחן שלכם.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="chok-67" title="חוק 67%: מה זה אומר עליכם">
            <p>
              עד 2024, היזם נדרש להסכמת 80% מבעלי הדירות כדי להגיש תביעה נגד דייר סרבן. התיקון האחרון לחוק פינוי ובינוי (פיצויים) הוריד את הרף ל-67% (שני שלישים). השינוי ביקש להאיץ פרויקטים שתקועים בגלל מספר קטן של דיירים סרבנים, ולתת לדיירים שמסכימים לפרויקט כוח אכיפה משפטי על שכניהם.
            </p>
            <p>
              ההבחנה הקריטית שכמעט אף אחד לא מסביר נכון: 67% הוא הרף להגשת תביעה. זה לא הרף לביצוע הפרויקט. כדי להוציא את הפרויקט לפועל, נדרשים עדיין 100%. או חתימה של כל הדיירים, או פסק דין משפטי שמחייב את הסרבן לחתום.
            </p>
            <p>
              המשמעות המעשית: גם בלי הדייר ה-100%, הפרויקט יכול להתחיל את השלבים המקדמיים, אבל מימוש בפועל דורש הליך משפטי שאורך בין שנה לשלוש שנים. לכן, גם כשהיזם מצהיר שיש לו 67% חתימות, הדיירים שעוד לא חתמו עדיין במשא ומתן: הליך משפטי הוא יקר ולא מובן מאליו, גם כשהוא תיאורטית אפשרי.
            </p>
            <p>
              להבנה מעמיקה של ההליך מצד הדייר שעומד מולו, מדריך נפרד על{" "}
              <Link
                href="/pinui-binui/sarvan"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                דייר סרבן בפינוי בינוי
              </Link>{" "}
              מפרט את 12 שלבי התביעה, את ההבחנה בין סירוב סביר לבלתי סביר, את ההגנות העומדות לדייר, ואת הליך כונס הנכסים.
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
          <ContentSection id="kdai" title="למה כדאי פינוי בינוי, וגם למה לא תמיד כדאי">
            <p>
              פינוי בינוי הוא הזדמנות אמיתית, אבל לא בכל מצב. המסלול שלוקח 7 עד 12 שנים אינו מתאים לכל בעל דירה ולכל בניין. הנה הקריטריונים, בכנות:
            </p>
            <h3 className="text-xl font-extrabold text-[var(--color-primary)] mt-6 mb-3">
              כדאי כש:
            </h3>
            <ul className="space-y-2 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>הבניין שלכם בן 40 שנה ומעלה, בלי ממ״ד דירתי, ואין סיכוי שיעבור חיזוק תמ״א 38 כי המסלול בקצה דרכו. בעלי דירות בבניינים ישנים שעוד שוקלים את האפשרויות מוצאים ניתוח מפורט במדריך על{" "}
                <Link
                  href="/memad/binyan-yashan"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  ממ״ד לבניין ישן
                </Link>
                {" "}שמשווה ארבעה פתרונות (ממ״ד תקני, שיפור מיגון, ממ״ד יביל, התחדשות עירונית) לפי גיל ומצב הבניין.</li>
              <li>אתם במתחם של 24 יחידות דיור ומעלה עם רוב דיירים פעילים שמוכנים להתארגן.</li>
              <li>אזור הביקוש שלכם עוד מסוגל למשוך יזם: זכויות בנייה גבוהות, ביקוש שוק לדירות חדשות, ועירייה תומכת.</li>
            </ul>
            <h3 className="text-xl font-extrabold text-[var(--color-primary)] mt-6 mb-3">
              פחות כדאי כש:
            </h3>
            <ul className="space-y-2 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>אתם מתחת לגיל 50 וצריכים לעזוב את הבית בשנה־שנתיים הקרובות. התהליך ארוך מדי לאופק שלכם.</li>
              <li>הבניין שלכם בודד ולא חלק ממתחם של 24 יחידות. תמ״א 38/2 או חלופת שקד עשויות להתאים יותר.</li>
              <li>אזור עם ביקוש נמוך: יזם לא ייכנס בלי רווחיות. תוכנית עירונית מתחמית עשויה להיות פתרון, אבל לא בלוח הזמנים שאתם תכננתם.</li>
            </ul>
            <p className="mt-6">
              הדגש החשוב: אנחנו לא דוחפים פינוי בינוי כפתרון אחיד. רוב האתרים בנושא מציגים את המסלול כצעד מתבקש לכל בניין מעל גיל 30. זה לא נכון. ההחלטה צריכה להישען על מצב הבניין הספציפי, על הרכב הדיירים, ועל אופי השוק המקומי. מי שמציע לכם הסכם בלי שעבר על אלה לפניכם איננו מייצג אתכם.
            </p>
            <p className="mt-4">
              גם אם המסלול מתאים לבניין שלכם, בחירת היזם תקבע את ההצלחה. מדריך מפורט על{" "}
              <Link
                href="/pinui-binui/yazam"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                איך בוחרים יזם פינוי בינוי
              </Link>{" "}
              מפרט 12 שאלות שחובה לשאול, 8 דגלים אדומים, ואיך להשוות הצעות בצורה מקצועית.
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
              מתלבטים אם פינוי בינוי כדאי לבניין שלכם?
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים דיירים בהתחדשות עירונית. עובדים בשבילכם, לא בשביל היזם. עובדים עם נציגויות דיירים על כל שלבי הפרויקט, מהבדיקה הראשונית ועד הביצוע. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="פינוי בינוי: בואו נדבר על הבניין שלכם"
            subtitle="השאירו שם וטלפון. נחזור אליכם תוך שעות עם ייעוץ ראשוני ממוקד למתחם שלכם."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="pinui-binui/pillar"
        targets={[
          "pinui-binui-machshvon",
          "pinui-binui-mechirat-dira",
          "madrichim-shealot-yazam",
          "madrichim-yorshim",
          "hashvaa-pinui-vs-tama",
          "building-mamad",
          "contact",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על פינוי בינוי"
        tone="soft"
        includeSchema
      />

      <ContactCTA
        title="רוצים לבדוק פינוי בינוי במתחם שלכם? בואו נדבר."
        subtitle="השאירו פרטים ונחזור אליכם תוך שעות עם ייעוץ ראשוני ממוקד למתחם שלכם."
        defaultService="urban-renewal"
        prioritizeUrbanRenewal
      />
    </>
  );
}
