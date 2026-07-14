import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContentSection from "@/components/ContentSection";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import InlineLeadForm from "@/components/InlineLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import AnswerBlock from "@/components/AnswerBlock";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/pinui-binui/chok-67";
const TITLE = "חוק 67% פינוי בינוי 2026: התנאי החדש לדייר סרבן (ירידה מ-80%)";
const DESCRIPTION =
  "67% הסכמת דיירים (במקום 80%) מאפשרים כיום הגשת תביעה נגד דייר סרבן בפינוי בינוי. מה זה אומר לדיירים, מתי סירוב נחשב סביר, ואילו הגנות נשארות בתוקף. סקירה משפטית מלאה.";
const PUBLISHED_DATE = "2026-05-03";
const MODIFIED_DATE = "2026-05-14";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה זה חוק 67% בפינוי בינוי?",
    a: "חוק 67% הוא תיקון לחוק פינוי ובינוי (פיצויים) שמאפשר ליזם או לנציגות דיירים בפרויקט פינוי בינוי להגיש תביעה משפטית נגד דייר סרבן כאשר 67% מבעלי הדירות במתחם הסכימו לפרויקט. עד התיקון נדרשו 80%. הרף החדש הוא לתביעה בלבד; לביצוע הפרויקט בפועל עדיין נדרשים 100% או פסק דין שמחייב את הסרבן.",
  },
  {
    q: "האם 67% הם הרף הסופי לפרויקט?",
    a: "לא. 67% הם הרף להגשת תביעה משפטית נגד דייר סרבן. כדי שהפרויקט יבוצע בפועל נדרשים בסופו של דבר 100% חתימות, או פסק דין משפטי שמחייב את הסרבן לחתום, או מינוי כונס נכסים שחותם במקומו. בלי אחד מאלה, הפרויקט לא יכול להוציא היתר בנייה ולהתחיל הריסה.",
  },
  {
    q: "מי נחשב דייר סרבן בפינוי בינוי?",
    a: "דייר סרבן הוא בעל דירה במתחם פינוי בינוי שלא הסכים להסכם שעליו חתם רוב הדיירים. החוק מבדיל בין סירוב סביר (למשל, התנגדות להסכם שלא כולל ערבויות תקניות, או מצב רפואי-אישי מורכב) לבין סירוב בלתי סביר (למשל, דרישה לפיצוי מעבר להוגן). בית המשפט בוחן את סוג הסירוב לפני קבלת החלטה.",
  },
  {
    q: "כמה זמן לוקח הליך תביעה נגד דייר סרבן?",
    a: "הליך משפטי טיפוסי בבית המשפט המחוזי בישראל אורך בין שנה לשלוש שנים. במקרים מורכבים, כולל ערעור או טענות נגד היזם, ההליך עשוי להגיע לחמש שנים. במהלך התקופה הזאת הפרויקט עומד, אבל לא מתחיל בנייה. זה אחד הסיבות שיזמים מעדיפים להגיע להסכמה ולא לתבוע.",
  },
  {
    q: "האם חוק 67% פוגע בזכויות שלי כדייר?",
    a: "לא. החוק לא ביטל את זכויות הדיירים. הוא רק הוריד את הרף שמאפשר תביעה נגד סרבן. הזכויות לדירת תמורה תקנית, לערבויות, להגנות גיל (70+, 75+), לשמאות בלתי תלויה, ולסעיפי ביטחון בהסכם נשארות זהות. החוק רק מאיץ את התהליך כשיש מיעוט סרבן. אם ההסכם עומד בכל הסטנדרטים, הסירוב יחשב בלתי סביר.",
  },
  {
    q: "אני בן 73, האם חוק 67% חל עליי?",
    a: "כן, חוק 67% חל על כל בעלי הדירות, אבל יש לכם הגנות נוספות מתוקף גיל. גיל 70 ומעלה מקנה לכם זכות לחלופות מיוחדות בהסכם הפינוי, וגיל 75 ומעלה מרחיב את הזכויות. גם אם היזם הגיש תביעה נגדכם בעקבות חוק 67%, ההגנות הגיליות נשארות בתוקף ובית המשפט שוקל אותן בעיון.",
  },
  {
    q: "האם אני יכול לעצור פרויקט פינוי בינוי בעצמי?",
    a: "בעל דירה אחד לא יכול לעצור פרויקט אם 67% מבעלי הדירות חתמו והיזם הגיש תביעה. עם זאת, אם הסירוב שלכם הוא סביר ומבוסס (הסכם פגום, ערבויות חסרות, מצב אישי), בית המשפט עשוי לדחות את התביעה. אם הסירוב לא סביר, בית המשפט יחייב חתימה. בכל מקרה, חובה לקחת עורך דין מקרקעין שייצג אתכם בהליך.",
  },
  {
    q: "מה הסיכוי שתביעה נגד דייר סרבן תצליח?",
    a: "ההצלחה תלויה בעיקר באיכות ההסכם ובסבירות הסירוב. אם ההסכם עומד בכל הסטנדרטים והסירוב לא מבוסס, היזם בדרך כלל זוכה. אם ההסכם פגום (חסרים סעיפים, ערבויות לא תקניות, חלוקה לא הוגנת) או הסירוב מבוסס היטב, הסיכוי גדל לדחיית התביעה. סטטיסטית, רוב התביעות נסגרות בהסדר לפני פסק דין סופי.",
  },
];

const processSteps = [
  "נציגות דיירים או יזם פונה לבית המשפט המחוזי.",
  "כתב תביעה מפורט עם ההסכם, אסמכתאות, ופירוט הסירוב.",
  "הזמנת הדייר הסרבן לטעון.",
  "הגשת תגובה על-ידי הדייר.",
  "שמיעת ראיות.",
  "בית המשפט בוחן: סבירות הסירוב, איכות ההסכם, ההגנות שניתנו.",
  "החלטה: דחיית התביעה או חיובו של הסרבן לחתום.",
  "אם הסרבן מסרב לחתום למרות פסק דין: מינוי כונס נכסים שיחתום במקומו.",
  "כונס נכסים פועל בשם הדייר, בכפוף להסכם.",
  "הפרויקט יכול להתקדם.",
  "תהליך משפטי טיפוסי: שנה עד שלוש שנים.",
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="חוק 67% בפינוי בינוי: מה זה אומר עליכם בפועל"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "פינוי בינוי", url: "/pinui-binui" },
          { name: "חוק 67% בפינוי בינוי", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="פינוי בינוי · חוק 67%"
        title="חוק 67% בפינוי בינוי: מה זה אומר עליכם בפועל"
        subtitle="מדריך 2026 לרף ההסכמה החדש בפינוי בינוי: מה השתנה מ-80% ל-67%, ההבדל בין רף לתביעה לרף לביצוע, וההגנות שנותרו לדייר."
        crumbs={[
          { name: "פינוי בינוי", href: "/pinui-binui" },
          { name: "חוק 67%", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              חוק פינוי ובינוי דורש כיום הסכמת 67% מבעלי הדירות (שני שלישים) להגשת תביעה נגד דייר סרבן בבית משותף. זו ירידה משמעותית מ-80% שהיו נדרשים בעבר, לפי תיקון החוק שנכנס לתוקף ב-2024. בפועל, נכון לאמצע 2026, רוב הפרויקטים מסתיימים בהסכמה ללא הליך משפטי. דייר השוקל סירוב, או נציגות{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>
              {" "}המקדמת פרויקט מול דיירים מתנגדים, יקבלו כאן את הזכויות והחובות הרלוונטיות, כולל המבחנים המשפטיים שיופעלו על הסירוב.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Citeable entity block: NAP single-source (site.ts) + liftable answer for AI engines.
          includeFaqSchema omitted (default false) so the single FAQPage stays on the bottom FAQ. */}
      <AnswerBlock
        service="ליווי דיירים בפינוי בינוי והתחדשות עירונית בכל הארץ"
        process="בדיקת היתכנות, ליווי מול היזם והנציגות, וייעוץ עד מסירה"
        answer={
          <>
            חוק 67% בפינוי בינוי הוא הרף שמאפשר ליזם או לנציגות להגיש תביעה נגד דייר סרבן כאשר שני
            שלישים מבעלי הדירות הסכימו, ירידה מ-80% בתיקון 2024. זהו רף לתביעה בלבד; לביצוע הפרויקט
            עדיין נדרשות 100% חתימות או פסק דין שמחייב את הסרבן. בהתחדשות בינוי ויזמות מלווים דיירים
            בהבנת הרף וההגנות, בשבילם ולא בשביל היזם.
          </>
        }
        faqs={[
          {
            q: "כמה אחוז דרוש לתביעה נגד דייר סרבן?",
            a: "67% מבעלי הדירות (שני שלישים), ירידה מ-80% לפי תיקון שנכנס לתוקף ב-2024.",
          },
          {
            q: "האם 67% מספיקים לביצוע הפרויקט?",
            a: "לא. 67% הם הרף להגשת תביעה בלבד. לביצוע נדרשות 100% חתימות, פסק דין שמחייב את הסרבן, או כונס נכסים שחותם במקומו.",
          },
          {
            q: "מתי סירוב דייר נחשב סביר?",
            a: "כשההסכם פוגע בדייר: תמורה נמוכה מהסטנדרט, היעדר ערבויות תקניות, או פגיעה בזכויות גיל. בית המשפט המחוזי מכריע לפי הנסיבות.",
          },
          {
            q: "האם חוק 67% פוגע בזכויות הדייר?",
            a: "לא. הזכויות לדירת תמורה, ערבויות והגנות גיל (70+, 75+) נשארות. החוק רק מאיץ את התהליך מול מיעוט סרבן.",
          },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-hishtana" title="מה היה ומה השתנה: מ-80% ל-67%">
            <p>
              עד התיקון האחרון לחוק פינוי ובינוי (פיצויים), נדרשו 80% מבעלי הדירות במתחם להסכים לפרויקט כדי שהיזם יוכל להגיש תביעה נגד דיירים סרבנים. הרף הזה התגלה כחסם משמעותי בעיקר במתחמים גדולים, שבהם מספיק 21 דיירים מתוך 100 כדי לעצור פרויקט שלם, גם אם 79 הסכימו.
            </p>
            <p>
              התיקון הוריד את הרף ל-67% (שני שלישים), מהלך שביקש להאיץ פרויקטים שנתקעו על מיעוט סרבן. התיקון נכנס לתוקף בשנים האחרונות והפך את פינוי בינוי למסלול ההתחדשות העירונית הדומיננטי בישראל, מעבר לתמ״א 38.
            </p>
            <p className="font-bold text-[var(--color-primary)]">
              חוק 67% לא משנה את החובה הסופית להסכמת כל הדיירים. הוא משנה רק את הרף שמאפשר ליזם להתחיל הליך משפטי נגד הסרבן.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              מקור החוק:{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                חוק פינוי ובינוי (פיצויים)
              </a>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="rafim" title="ההבדל בין רף לתביעה לבין רף לביצוע">
            <p>
              ההבחנה הקריטית שכמעט אף אחד לא מסביר נכון: 67% הוא הרף להגשת תביעה. זה לא הרף לביצוע. הטבלה הבאה מפרידה בין שלוש סיטואציות שמערבבים בשוק:
            </p>
          </ContentSection>

          <div className="mt-6 max-w-5xl">
            <ComparisonTable
              caption="רפי הסכמה בפינוי בינוי, נכון ל-2026"
              columns={[
                { key: "threshold", header: "רף נדרש" },
                { key: "source", header: "מקור" },
              ]}
              rows={[
                {
                  label: "הגשת תביעה נגד דייר סרבן",
                  cells: {
                    threshold: "67%",
                    source: "תיקון לחוק פינוי ובינוי (פיצויים)",
                  },
                },
                {
                  label: "ביצוע הפרויקט בפועל",
                  cells: {
                    threshold: "100%",
                    source: "חתימת כל הדיירים או פסק דין שמחייב סרבן",
                  },
                },
                {
                  label: "חתימה על הסכם פינוי ראשוני",
                  cells: {
                    threshold: "משתנה",
                    source: "כל יזם דורש מינימום שונה (מקובל 50–67%)",
                  },
                },
              ]}
              footnote="הרפים הללו אינם תחליף; הם שלושה שלבים שונים בחיי הפרויקט. דייר במתחם עומד בכל אחד מהם בנפרד."
            />
          </div>

          <div className="mt-8 max-w-3xl space-y-4 text-[17px] text-[var(--color-ink)] leading-8">
            <p>
              המשמעות: גם אם 67% חתמו, הפרויקט לא יכול להתחיל את הבנייה לפני שכל הדיירים חתמו או שיש פסק דין שמחייב את הסרבן. הליך משפטי כזה אורך בדרך כלל בין שנה לשלוש שנים.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="dayar-sarvan" title="מי נחשב דייר סרבן?">
            <p>
              דייר סרבן הוא בעל דירה שלא חתם על ההסכם שעליו הסכים רוב הדיירים. החוק לא מתייחס לכל סירוב באותו אופן: הוא מבדיל בין סירוב סביר לבין סירוב בלתי סביר. ההבחנה הזאת היא ליבת ההליך המשפטי.
            </p>
            <p>
              מדריך מקיף על{" "}
              <Link
                href="/pinui-binui/sarvan"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                דייר סרבן בפינוי בינוי
              </Link>{" "}
              מפרט את 12 שלבי ההליך המשפטי, ההגנות העומדות לדייר, הליך כונס הנכסים, ואת ההכרעות התקדימיות בפסיקה לסבירות הסירוב.
            </p>
          </ContentSection>

          <div className="mt-6 max-w-5xl">
            <ComparisonTable
              caption="סוגי סירוב בהליך תביעה לפי חוק 67%"
              columns={[
                { key: "examples", header: "דוגמאות" },
              ]}
              rows={[
                {
                  label: "סירוב סביר",
                  cells: {
                    examples: (
                      <ul className="list-disc pr-5 space-y-1.5 marker:text-[var(--color-accent-dark)]">
                        <li>הסכם שלא עוגן בו זכויות חוקיות (סעיף שמאי, ערבויות, תוספת מ״ר).</li>
                        <li>היזם הציע פחות מדירת תמורה תקנית.</li>
                        <li>בעיה אישית-רפואית מתועדת (גיל מתקדם, מחלה).</li>
                        <li>חשד לכשל פיננסי של היזם.</li>
                      </ul>
                    ),
                  },
                },
                {
                  label: "סירוב בלתי סביר",
                  cells: {
                    examples: (
                      <ul className="list-disc pr-5 space-y-1.5 marker:text-[var(--color-accent-dark)]">
                        <li>ניסיון להוציא כסף נוסף מהיזם מעבר להוגן.</li>
                        <li>סירוב על בסיס &ldquo;אני לא רוצה לעבור&rdquo; ללא נימוק חוזי או רפואי.</li>
                        <li>חוסר הסכמה לפרויקט שעומד בכל הסטנדרטים.</li>
                      </ul>
                    ),
                  },
                },
              ]}
              footnote="הליך התביעה מציג את ההסכם, הערבויות, הסטנדרטים, והנסיבות האישיות לבית המשפט. השופט מחליט באיזו קטגוריה נופל הסירוב."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="tahalich" title="מה קורה בתהליך תביעה נגד דייר סרבן?">
            <p>
              התהליך המשפטי מורכב מ-11 שלבים מובחנים. ההיכרות מראש איתם מצמצמת חוסר ודאות גם לדיירים שמסכימים לפרויקט וגם לדיירים שמתנגדים אליו.
            </p>

            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              {processSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="haganot" title="מה ההגנות שלכם אם אתם הדייר הסרבן?">
            <p>
              חוק 67% הוריד את הרף לתביעה, אך הוא לא ביטל את ההגנות לדייר. אם אתם הצד הסרבן, יש לכם זכויות מהותיות שאסור לוותר עליהן בהליך:
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">זכות לעורך דין על חשבונכם</strong>:בית המשפט יכול לחייב את היזם לכסות עלויות ייצוג במקרים מסוימים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכות לשמאות אובייקטיבית</strong>:שמאי בלתי תלוי שלא מטעם היזם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכות לטעון על איכות ההסכם</strong>:חסרים סעיפים, ערבויות לא תקניות, חלוקה לא הוגנת.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכות לטעון על מצב אישי-רפואי</strong>:גיל מתקדם, מחלה, נסיבות מיוחדות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכות גיל 70+/75+</strong>:זכויות מיוחדות לדיירים מבוגרים שלא ניתן לעקוף, גם תחת חוק 67% (זכויות קשישים בפינוי בינוי).
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכות לדרוש ערבויות מורחבות</strong>:תנאי לחתימה גם בהליך כפוי.
              </li>
            </ul>
            <p className="font-bold text-[var(--color-primary)] mt-4">
              אם אתם בני 70 ומעלה או יש בן משפחה בגיל הזה במתחם, חוק 67% לא משבית את ההגנות שלכם. ההגנות לקשישים נשארות גם אחרי שהיזם הגיש תביעה.
            </p>
            <p>
              לעיון בסעיפים שאסור לוותר עליהם בהסכם הפינוי, ראו{" "}
              <Link
                href="/pinui-binui/temurot"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמורות בפינוי בינוי
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hashpaot" title="השפעות חוק 67% על השוק">
            <p>
              התיקון הביא לתזוזה משמעותית בשוק ההתחדשות העירונית בישראל:
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">יותר פרויקטים יוצאים לפועל:</strong> בשנים שלאחר התיקון, מספר פרויקטי פינוי בינוי שאושרו עלה משמעותית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">כניסה לאזורים חדשים:</strong> כיום פרויקטים נכנסים גם לערים פריפריאליות שבעבר היזמים לא היו מעוניינים להיכנס אליהן, כי הירידה ברף הפכה את הכלכלה לאפשרית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דרישה גבוהה יותר מנציגויות:</strong> נציגויות דיירים נדרשות להיות חזקות יותר מבחינה משפטית וארגונית, כי הסף הנמוך מאפשר ליזם להחיל לחץ משפטי מהר יותר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יותר תביעות מוגשות, רובן נסגרות בהסדר:</strong> ברוב המקרים, תביעות סרבנות נסגרות בהסדר לפני פסק דין סופי. הצדדים מוצאים פתרונות בדרך, לרוב פיצוי כספי או שדרוג ההצעה.
              </li>
            </ul>
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

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl text-[17px] text-[var(--color-ink)] leading-8">
            <p>
              רוב בעלי הדירות שעומדים מול חוק 67% בפעם הראשונה שואלים את אותן שאלות: האם אני יכול לעצור פרויקט? מה אם אני סרבן? כמה זמן זה ייקח? מה ההגנות שלי? התשובות לשאלות אלו תלויות בנסיבות הספציפיות של ההסכם והפרויקט. ייעוץ עם עורך דין מקרקעין מנוסה הוא הכרחי לפני קבלת החלטות.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="o-lemchor" title="אפשרות נוספת: לצאת מהתמונה ולמכור">
            <p>
              דייר שמתלבט בין להיכנס למאבק על סבירות הסירוב שלו לבין להסכים לפרויקט, יכול לשקול
              גם אפשרות שלישית: למכור את הדירה עם הפוטנציאל שלה, ולצאת מהמצב מבלי לחכות לתוצאה
              של הליך משפטי או של שנים ארוכות עד מסירת דירת התמורה. מכירה כזו אינה תלויה בהסכמת
              שאר הדיירים במתחם, ואינה משנה את הזכויות של מי שכבר חתם על ההסכם. מדריך{" "}
              <Link
                href="/pinui-binui/mechirat-dira"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מכירת דירה לפני פינוי בינוי
              </Link>{" "}
              מפרט איך מתומחר הפוטנציאל, למי מוכרים, ומה כדאי לבדוק לפני שמחליטים בין להישאר
              לבין למכור.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "חוק פינוי ובינוי (פיצויים), נבו",
          url: "https://www.nevo.co.il/",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              חוק 67% במתחם שלכם? קבלו הסבר מקצועי על מה שזה אומר עבורכם.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים נציגויות דיירים מתחילת ההסכם, ועוזרים להבין את ההשלכות של חוק 67% במצב הספציפי שלכם. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="חוק 67%: בואו נדבר על המתחם שלכם"
            subtitle="השאירו שם וטלפון. נחזור אליכם תוך שעות עם ייעוץ ראשוני ממוקד."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="pinui-binui/chok-67"
        targets={["pinui-binui", "pinui-binui-temurot", "hithadshut-team"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על חוק 67% בפינוי בינוי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
