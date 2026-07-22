import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContentSection from "@/components/ContentSection";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import SellerLeadForm from "@/components/SellerLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/mechira/karka-im-heter";
const TITLE = "מכירת קרקע עם היתר בנייה: מה קובע את השווי 2026";
const DESCRIPTION =
  "מוכרים קרקע עם היתר בנייה בתוקף? מה זה היתר בתוקף, איך בודקים זכויות בנייה וייעוד, ומי קונה קרקע עם היתר בישראל. מדריך 2026 לבעלי מגרש.";
const PUBLISHED_DATE = "2026-07-21";
const MODIFIED_DATE = "2026-07-21";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה זה היתר בנייה בתוקף?",
    a: "היתר בנייה תקף מיום הנפקתו לתקופה קצובה, ורשות הרישוי המקומית רשאית, לבקשת בעל ההיתר, להאריך את תוקפו לתקופה נוספת. אם ההיתר פג ולא הוארך, יש צורך בבקשה חדשה או בהארכה לפני תחילת בנייה או המשכה. בעת מכירת קרקע, מומלץ לבדוק מול הרשות המקומית את תאריך התפוגה המדויק של ההיתר הקיים. מקור: מינהל התכנון, gov.il.",
  },
  {
    q: "מה ההבדל בין קרקע עם היתר לקרקע בלי היתר?",
    a: "קרקע עם היתר בנייה בתוקף מאפשרת לקונה להתחיל בנייה בפועל בלי להמתין להליך רישוי נוסף, מה שמקצר משמעותית את לוח הזמנים שלו. קרקע בלי היתר, גם אם יש לה זכויות בנייה מאושרות בתב״ע, מחייבת את הקונה לעבור הליך רישוי מלא לפני שהוא יכול לבנות. ההבדל הזה הוא אחד הגורמים המשמעותיים בהפרש המחיר בין שני סוגי הקרקעות.",
  },
  {
    q: "מה קובע את שווי קרקע עם היתר?",
    a: "ארבעה גורמים: מיקום הקרקע וביקוש באזור, היקף זכויות הבנייה המאושרות, תוקף ההיתר הקיים (כמה זמן נותר לפני שיפוג), וייעוד הקרקע בתוכנית המתאר. אין מספר אחיד שמתאים לכל מגרש, וגם קרקעות סמוכות עשויות להיות שוות מאוד שונה זו מזו בהתאם לגורמים האלה.",
  },
  {
    q: "מי קונה קרקע עם היתר בנייה?",
    a: "בעיקר יזמים וקבלנים שמעוניינים להתחיל בנייה במהירות בלי הליך רישוי ארוך, ומשקיעים פרטיים. בהתחדשות בינוי ויזמות רוכשים קרקעות עם היתר במסלול ישיר, וגם עובדים מול משקיעים המתעניינים בנכסים כאלה, בפריסה ארצית.",
  },
  {
    q: "מה קורה אם ההיתר פג לפני שמוכרים את הקרקע?",
    a: "אם ההיתר פג, הקרקע נמכרת כקרקע ללא היתר בתוקף, גם אם הזכויות התכנוניות עצמן (לפי התב״ע) לא השתנו. הקונה יצטרך להגיש בקשה חדשה או בקשה להארכה לפני תחילת בנייה. פקיעת ההיתר עשויה להשפיע על השווי, ולכן כדאי לבדוק את תוקף ההיתר מול הרשות המקומית לפני קביעת מחיר.",
  },
  {
    q: "האם צריך למכור קרקע דווקא ליזם, או אפשר לקונה פרטי?",
    a: "אפשר למכור לשני הסוגים, בהתאם לגודל הקרקע ולייעודה. קרקע גדולה עם זכויות בנייה משמעותיות מושכת בעיקר יזמים וקבלנים. קרקע קטנה יחסית לבית מגורים אחד עשויה להתאים גם לקונה פרטי שמתכנן לבנות לעצמו. גורם רכישה ישיר יכול לבחון את הקרקע הספציפית ולהציע את המסלול המתאים.",
  },
  {
    q: "כמה זמן לוקחת מכירת קרקע עם היתר?",
    a: "אין לוח זמנים אחיד. קרקע עם מסמכים מסודרים (נסח נקי, תב״ע ברורה, היתר בתוקף עם זמן משמעותי שנותר) יכולה להתקדם מהר יחסית מרגע הסכמה על מחיר. קרקע שדורשת בירור ייעוד, הארכת היתר, או פתרון חריגות רישום, נמשכת זמן רב יותר. הכנת המסמכים מראש היא הגורם המשמעותי ביותר במשך הזמן.",
  },
  {
    q: "מי משלם מס שבח במכירת קרקע?",
    a: "ככלל, המוכר חייב במס שבח על מכירת קרקע, בכפוף לחישוב שווי הרכישה מול שווי המכירה ולפטורים הרלוונטיים אם קיימים. שיעורי המס והפטורים על קרקע עשויים להיות שונים מאלו החלים על דירת מגורים. מומלץ להתייעץ עם רואה חשבון או עורך דין מיסוי מקרקעין לפני קביעת מחיר סופי.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline={TITLE}
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מכירת בניין, נחלה או קרקע", url: "/mechira" },
          { name: "מכירת קרקע עם היתר בנייה", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מכירת נכסים גדולים · קרקע עם היתר"
        title="מכירת קרקע עם היתר בנייה: מה קובע את השווי"
        subtitle="מדריך 2026 לבעלי מגרש עם היתר בנייה בתוקף: זכויות בנייה, ייעוד קרקע, ומי קונה קרקעות כאלה בישראל."
        crumbs={[
          { name: "מכירת בניין, נחלה או קרקע", href: "/mechira" },
          { name: "מכירת קרקע עם היתר בנייה", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>

            <div
              className="rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-soft)] p-6 md:p-7 mb-6"
              aria-labelledby="bekitzur-karka"
            >
              <h2 id="bekitzur-karka" className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-3">
                בקצרה
              </h2>
              <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-0">
                קרקע עם היתר בנייה בתוקף מאפשרת לקונה להתחיל בנייה בלי הליך רישוי נוסף, ולכן
                נחשבת לרוב שווה יותר מקרקע זהה בלי היתר. השווי נקבע לפי מיקום, היקף זכויות
                הבנייה, תוקף ההיתר הנותר, וייעוד הקרקע. לפני מכירה כדאי לוודא מול הרשות המקומית
                את תאריך התפוגה המדויק של ההיתר הקיים.
              </p>
            </div>

            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              מדריך זה עוסק במכירת מגרש או חלקת קרקע עם היתר בנייה בתוקף, בבעלות פרטית. אם אתם
              מוכרים בניין קיים ומאוכלס, המדריך המתאים הוא{" "}
              <Link
                href="/mechira/binyan-shalem"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מכירת בניין שלם
              </Link>
              . אם מדובר במשק חקלאי במושב, המדריך המתאים הוא{" "}
              <Link
                href="/mechira/nachla"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מכירת נחלה
              </Link>
              . לרשימה מלאה של המסלולים ראו את{" "}
              <Link
                href="/mechira"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מכירת בניין, נחלה או קרקע
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="lemi-mateim" title="למי מיועד המדריך הזה">
            <p>
              המדריך מיועד לבעלי מגרש או חלקת קרקע עם היתר בנייה בתוקף ששוקלים למכור, ליורשים
              שקיבלו קרקע כזו בירושה, ולבעלים בני 60 ומעלה ששוקלים למכור כדי לממן מעבר לדיור
              מוגן או כדי לפשט את ניהול הנכסים המשפחתיים. הקונה האופייני לנכס כזה שונה מהקונה
              של דירה או בית מגורים קיים, ולכן גם תהליך המכירה שונה במידה מסוימת.
            </p>
            <p>
              מדריך זה אינו עוסק בקרקע חקלאית במושב (נחלה), שנמכרת בתהליך שונה לחלוטין הכולל
              בדיקת זכויות מול רשות מקרקעי ישראל, כפי שכבר הוזכר למעלה. הוא גם אינו עוסק בקרקע
              ללא היתר בנייה כלל, גם אם קיימות עליה זכויות בנייה לפי תב״ע: מצב כזה משפיע על
              השווי באופן שונה, כפי שמפורט בהמשך המדריך.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="heter-betokef" title="מה זה היתר בנייה בתוקף">
            <p>
              {/* Source: gov.il / Planning Administration (מינהל התכנון) - building permit
                  validity guidance. General framing, exact renewal terms confirmed with
                  the local licensing authority per parcel. */}
              היתר בנייה ניתן על ידי רשות הרישוי המקומית לתקופה קצובה מיום הנפקתו. אם הבנייה
              לא הושלמה או לא החלה בתוך התקופה, ניתן במקרים רבים לבקש מרשות הרישוי הארכת תוקף
              לתקופה נוספת, בכפוף להגשת בקשה ואישור הרשות. אם ההיתר פג ולא הוארך, יש להגיש
              בקשה חדשה לפני תחילת בנייה. תוקף ההיתר המדויק והאפשרות להאריכו משתנים לפי סוג
              ההיתר והרשות המקומית הרלוונטית, ולכן יש לבדוק אותם ישירות מול הרשות לפני קביעת
              מחיר מכירה.
            </p>
            <p>
              המשמעות המעשית לקונה: היתר בתוקף חוסך זמן משמעותי, כי הוא מדלג על שלב הרישוי
              הראשוני שיכול לארוך חודשים או שנים. לכן קרקע עם היתר בתוקף נחשבת בדרך כלל אטרקטיבית
              יותר לקונה שרוצה להתחיל לבנות במהירות, בהשוואה לקרקע זהה בלי היתר.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="zechuyot-yeud" title="זכויות בנייה וייעוד קרקע">
            <p>
              זכויות הבנייה של מגרש נקבעות בתוכנית בניין עיר (תב״ע) שחלה עליו, ומגדירות כמה
              שטח בנוי מותר להקים על הקרקע, בכפוף לייעוד הקרקע (מגורים, מסחר, ייעוד מעורב,
              וכדומה). היתר הבנייה עצמו הוא מימוש קונקרטי של זכויות אלה עבור פרויקט ספציפי, ולא
              תחליף להן: קרקע יכולה להיות בעלת זכויות בנייה משמעותיות בתב״ע גם בלי היתר קיים,
              וגם קרקע עם היתר עדיין כפופה למגבלות התב״ע החלה עליה.
            </p>
            <p>
              לפני מכירה, כדאי לבדוק את שני הדברים בנפרד: מה מתירה התב״ע החלה על הקרקע, ומה
              בפועל מאשר ההיתר הקיים, אם יש. קונה רציני, ובמיוחד יזם, יבחן את שניהם לפני הצעת
              מחיר.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="קרקע עם היתר בתוקף מול קרקע ללא היתר"
              columns={[
                { key: "zman", header: "זמן עד תחילת בנייה לקונה" },
                { key: "kahal", header: "קהל היעד האופייני" },
              ]}
              rows={[
                {
                  label: "קרקע עם היתר בתוקף",
                  cells: {
                    zman: "קצר יחסית, מדלג על הליך רישוי ראשוני",
                    kahal: "קונה שרוצה להתחיל לבנות במהירות",
                  },
                },
                {
                  label: "קרקע עם זכויות בתב״ע, בלי היתר",
                  cells: {
                    zman: "ארוך יותר, כולל הליך רישוי מלא",
                    kahal: "יזם או קבלן שמתכנן טווח ארוך יותר",
                  },
                },
              ]}
              footnote="הטבלה מתארת הבדל עקרוני. תוקף ההיתר הספציפי ומורכבות הרישוי נבדקים מול הרשות המקומית."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shavi" title="מה קובע את השווי">
            <p>
              ארבעה גורמים משפיעים על שווי קרקע עם היתר, ואין ביניהם נוסחה אחידה שמתאימה לכל
              מגרש.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מיקום וביקוש.</strong> עיר,
                שכונה, ורמת הביקוש הכללית באזור לבנייה חדשה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">היקף זכויות הבנייה.</strong>{" "}
                כמה שטח בנוי מותר להקים על המגרש לפי התב״ע, וכמה מזה כלול בהיתר הקיים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תוקף ההיתר הנותר.</strong> היתר
                עם זמן רב שנותר לפני שיפוג שווה בדרך כלל יותר לקונה מאשר היתר שעומד לפוג בקרוב.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ייעוד הקרקע.</strong> ייעוד
                למגורים, למסחר, או ייעוד מעורב, וכל שינוי ייעוד עתידי צפוי לפי תוכניות מתאר.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="tzaadim" title="צעדים מעשיים לפני פנייה לקונה">
            <p>
              סדר פעולות מומלץ לבעל קרקע שמתחיל לשקול מכירה, לפני פנייה לקונה פוטנציאלי.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת תוקף ההיתר.</strong>{" "}
                בירור מדויק מול הרשות המקומית של תאריך תפוגת ההיתר הקיים, אם יש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בירור זכויות בנייה מלאות בתב״ע.</strong>{" "}
                לא רק מה שממומש בהיתר הקיים, אלא כל הפוטנציאל המותר על הקרקע.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הפקת נסח טאבו עדכני.</strong>{" "}
                בדיקת בעלות, שעבודים, עיקולים והערות אזהרה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בירור ייעוד הקרקע העדכני.</strong>{" "}
                מול תוכניות המתאר החלות, כולל שינויי ייעוד עתידיים ידועים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">התייעצות עם רואה חשבון מיסוי מקרקעין.</strong>{" "}
                הבנת חבות המס הצפויה לפני קביעת מחיר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">קבלת הערכה ראשונית לשווי.</strong>{" "}
                פנייה לגורם שרוכש קרקעות לקבלת הערכה, בלי התחייבות להמשך.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="tahalich" title="תהליך מול קונה ישיר">
            <p>
              מכירה ישירה של קרקע עם היתר לקונה שרוכש נכסים במסלול קבוע מתנהלת בדרך כלל כך:
              פנייה ראשונית ומסירת פרטי הקרקע וההיתר, הערכה ראשונית לשווי, מסירת המסמכים (נסח
              טאבו, תב״ע חלה, ההיתר עצמו ותאריך תפוגתו), סיור בקרקע, הצעת מחיר, ולבסוף חוזה
              מכר מול עורכי דין של שני הצדדים. קונה מסוג יזם או קבלן יבצע לרוב גם בדיקה
              תכנונית מעמיקה יותר לפני סגירת עסקה, ולכן מסירת מסמכים מסודרת מראש מקצרת את
              התהליך.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="taoyot" title="טעויות נפוצות שעולות למוכרי קרקע עם היתר">
            <p>
              חמש טעויות שחוזרות אצל בעלי קרקע שממהרים לתמחר בלי בדיקה מספקת.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">אי-בדיקת תאריך תפוגת ההיתר.</strong>{" "}
                היתר שעומד לפוג בקרוב שווה פחות לקונה מהיתר עם זמן רב שנותר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בלבול בין זכויות בתב״ע להיתר בפועל.</strong>{" "}
                קרקע יכולה להיות בעלת זכויות בנייה נרחבות בתב״ע גם בלי היתר קיים שממש אותן.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">התעלמות מייעוד הקרקע העדכני.</strong>{" "}
                שינויי ייעוד בתוכניות מתאר עדכניות עשויים להשפיע על הפוטנציאל, לכיוונים שונים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מכירה בלי בדיקת רישום מוקדמת.</strong>{" "}
                נסח טאבו לא עדכני עלול להחמיץ שעבודים, עיקולים או הערות אזהרה שמעכבות עסקה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">קביעת מחיר בלי ליווי מקצועי.</strong>{" "}
                עורך דין מקרקעין ושמאי בלתי תלוי מזהים פערים בין מה שנראה על הנייר למה שקיים בפועל.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="matai-lo" title="מתי עדיף לא למכור עדיין">
            <p>
              שלושה מצבים שבהם כדאי לעצור ולבדוק לעומק לפני מכירת קרקע.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">ההיתר עומד לפוג בקרוב.</strong>{" "}
                אם ניתן להאריך את תוקף ההיתר לפני המכירה, זה עשוי להעלות את השווי לקונה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שינוי ייעוד צפוי בקרוב.</strong>{" "}
                אם קיימת תוכנית מתאר בהליכי אישור שעשויה להגדיל את זכויות הבנייה, כדאי לבדוק את
                לוח הזמנים שלה מול הצורך למכור עכשיו.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אין לחץ זמן אמיתי.</strong> אם
                המכירה אינה נדרשת מיידית, כדאי לבחון גם קונים נוספים ולא רק מסלול מכירה ישירה
                אחד.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="misui" title="מיסוי המכירה">
            <p>
              ככלל, המוכר חייב במס שבח על מכירת קרקע, בכפוף לחישוב שווי הרכישה מול שווי המכירה
              ולפטורים הרלוונטיים אם קיימים. שיעורי המס והפטורים החלים על קרקע עשויים להיות
              שונים מאלו החלים על דירת מגורים, ולכן מומלץ להתייעץ עם רואה חשבון או עורך דין
              מיסוי מקרקעין לפני קביעת מחיר סופי.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "מינהל התכנון: שאלות ותשובות בנושא רישוי בנייה",
          url: "https://www.gov.il/he/departments/faq/licensing_construction_fqa",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              שוקלים למכור קרקע עם היתר בנייה?
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              בהתחדשות בינוי ויזמות רוכשים קרקעות עם היתר במסלול ישיר, וגם עובדים מול משקיעים
              המתעניינים בנכסים כאלה. השאירו פרטים ונחזור אליכם עם הערכה ראשונית, ללא עלות
              וללא התחייבות.
            </p>
          </div>
          <SellerLeadForm defaultPropertyType="מגרש" pageContext="mechira-karka-im-heter" />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="mechira/karka-im-heter"
        targets={["mechira-hub", "mechira-binyan-shalem", "mechira-nachla"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על מכירת קרקע עם היתר בנייה"
        tone="soft"
        includeSchema
      />
    </>
  );
}
