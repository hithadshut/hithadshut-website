import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContentSection from "@/components/ContentSection";
import FAQ from "@/components/FAQ";
import InlineLeadForm from "@/components/InlineLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import SchemaArticle from "@/components/schema/article";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/memad/koma-elyona";
const TITLE = "ממ״ד בקומה עליונה 2026: ממ״ד על הגג, פנטהאוז | התחדשות";
const DESCRIPTION =
  "ממ״ד בקומה עליונה לבעלי דירות גג, פנטהאוזים, וקומה עליונה: דורש חיזוק מבנה ומשאבת בטון. עלות 200,000-280,000 ש״ח. מדריך 2026 מתי מתאים, איך עושים, ומה האלטרנטיבות.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "האם אפשר לבנות ממ״ד על הגג?",
    a: "כן, בתנאים מסוימים. נדרש שהגג מסוגל לשאת את העומס הנוסף (15-25 טון), שיש זכויות בנייה זמינות, ושהוועדה המקומית מאשרת את התוספת. בבניינים שבהם הגג רכוש משותף, נדרשת הסכמת הדיירים. בעלי דירות גג עם זכויות בלעדיות לגג נמצאים בעמדה טובה יותר. אישור פיקוד העורף נדרש לכל ממ״ד, גם על הגג.",
  },
  {
    q: "כמה עולה ממ״ד בקומה עליונה?",
    a: "עלות נעה בדרך כלל בין 200,000 ל-280,000 ש&ldquo;ח, גבוהה ב-10%-30% מממ״ד דומה בקומת קרקע. ההפרש נובע מארבעה גורמים: עלות משאבת בטון בגובה (15,000-30,000 ש&ldquo;ח), חיזוק קונסטרוקציה של המבנה הנושא, מנוף או מעלון להובלת חומרים, ולעיתים גם איטום נוסף. הסכום הסופי תלוי בגובה הקומה ובמורכבות הביצוע.",
  },
  {
    q: "האם נדרש חיזוק קונסטרוקטיבי?",
    a: "ברוב המקרים כן. תוספת ממ״ד שוקלת 15-25 טון, ועומס זה מתווסף למבנה הקיים. מהנדס קונסטרוקציה בודק אם המבנה מסוגל לשאת את העומס, ובדרך כלל ממליץ על חיזוק מסוים: עמודי תמיכה נוספים, חיזוק עמודים קיימים, או חיזוק תקרת הקומה התחתונה. עלות חיזוק נעה בין 30,000 ל-100,000 ש&ldquo;ח, תלוי במצב הבניין.",
  },
  {
    q: "מה צריך לעשות כדי לקבל אישור גג?",
    a: "ארבעה אישורים מרכזיים: אישור הוועדה המקומית להיתר בנייה (במקרים מסוימים מסלול פטור חל), אישור פיקוד העורף לתוכנית הספציפית, הסכמת הדיירים אם הגג רכוש משותף, ובדיקה הנדסית שמאשרת את היתכנות הבנייה. סך הכל אישורים לוקחים 8-16 שבועות. הליך מסודר בלי דילוגים מקצר את הזמן ומונע דחיות.",
  },
  {
    q: "מה ההבדל בין ממ״ד על הגג לתוספת קומה?",
    a: "ממ״ד על הגג הוא תוספת בנייה ייעודית למיגון בלבד, בגודל 9-12 מ&ldquo;ר. תוספת קומה היא בנייה מקיפה יותר שכוללת חדרים נוספים, ולעיתים דירה שלמה. שני הפרויקטים שונים מבחינת רישוי, עלות, וזכויות בנייה. ממ״ד על הגג בלבד דורש זכויות מצומצמות יחסית. תוספת קומה דורשת זכויות בנייה משמעותיות, ובדרך כלל לא ניתנת בכל הבניינים.",
  },
  {
    q: "האם זה משפיע על הדיירים בקומות התחתונות?",
    a: "כן, במספר אופנים. במהלך הביצוע יש רעידות, רעש, וסגירת חניות זמנית. הסכמת דיירים בדרך כלל נדרשת. אחרי הביצוע, העומס הנוסף עלול להשפיע על המבנה אם החיזוק הקונסטרוקטיבי לא בוצע כראוי. תיאום מסודר עם ועד הבית, פיצוי על אי-נוחות זמנית, ובדיקה הנדסית מקיפה מקטינים את החיכוך עם הדיירים.",
  },
  {
    q: "כמה זמן לוקחת הבנייה?",
    a: "ממ״ד בקומה עליונה לוקח בדרך כלל 4-6 חודשים מהחלטה ועד מסירה, מתוכם 2-4 חודשים בנייה בפועל. שלב התכנון והרישוי לוקח 8-16 שבועות בשל מורכבות החישוב הקונסטרוקטיבי. שלב הבנייה לוקח 8-16 שבועות, תלוי בנגישות לקומה ובתנאי המבנה. עיכובים נפוצים נובעים מאישור פיקוד העורף ומלוגיסטיקה בגובה.",
  },
  {
    q: "האם זה משתלם כלכלית?",
    a: "תלוי במצב. אם הבניין צעיר ויציב, ויש זכויות בנייה זמינות, ההשקעה משתלמת. הממ״ד מעלה את ערך הדירה ב-10%-15% ומספק הגנה מלאה. אם הבניין ישן ומועד להתחדשות עירונית, ייתכן שעדיף להמתין לפינוי בינוי. במצבים בהם דירת הגג שווה שווי גבוה, ההשקעה בממ״ד מקסימלית גם אם הסכום ההתחלתי גבוה. ייעוץ מקדים משווה את האפשרויות.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="ממ״ד בקומה עליונה 2026: ממ״ד על הגג, פנטהאוז, ותוספת קומה"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "ממ״ד", url: "/services/building-mamad" },
          { name: "ממ״ד בקומה עליונה", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="ממ״ד · קומה עליונה"
        title="ממ״ד בקומה עליונה 2026: ממ״ד על הגג, פנטהאוז, ותוספת קומה"
        subtitle="מדריך 2026 לבעלי דירות גג ופנטהאוזים: מתי ממ״ד עליון מתאים, ההבדלים מקומת קרקע, חיזוק קונסטרוקציה, אישורים, וההליך המלא."
        crumbs={[
          { name: "ממ״ד", href: "/services/building-mamad" },
          { name: "קומה עליונה", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              ממ״ד ב
              <Link
                href="/services/building-mamad"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                קומה עליונה
              </Link>{" "}
              הוא פתרון מיגון לבעלי דירות גג, פנטהאוזים, או דירות בקומה עליונה של בניינים נמוכים. הביצוע מורכב יותר מממ״ד בקומה תחתונה: דורש חיזוק קונסטרוקציה של המבנה הנושא, משאבת בטון בגובה, וחישוב מדויק של העומס. עלות בנייה גבוהה ב-10% עד 30% מממ&quot;ד דומה בקומת קרקע, ומגיעה בדרך כלל לטווח 200,000-280,000 ש&ldquo;ח. מדריך זה מסביר מתי ממ״ד עליון מתאים, איך עושים, וכמה זה עולה.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="metay-matim" title="מתי ממ״ד עליון מתאים?">
            <p>
              ממ״ד בקומה עליונה אינו פתרון אוניברסלי. הוא מתאים בכמה מצבים ספציפיים, ובאחרים פתרונות אחרים עדיפים.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בעל דירת גג עם זכויות בנייה.</strong> כאשר יש זכויות בלעדיות לגג, הביצוע פשוט יחסית: אין צורך בהסכמת דיירים אחרים, ויש שטח זמין לבנייה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פנטהאוז עם גג נלווה.</strong> פנטהאוזים בדרך כלל כוללים גג פרטי. הוספת ממ״ד על הגג מנצלת שטח שאינו בשימוש מלא.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בניינים נמוכים (2-3 קומות) עם הסכמת דיירים.</strong> בבניינים קטנים יחסית, הסכמת הדיירים נמוכה יותר. הביצוע מספק פתרון לכל הבניין.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אין שטח לממ״ד צמוד בדירה.</strong> אם הדירה קטנה ואי אפשר להוסיף ממ״ד פנימי, הגג הוא האפשרות. גם אם זה דורש יציאה לחצר.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="mesibichut" title="המורכבות הטכנית">
            <p>
              שלוש מורכבויות מרכזיות שמייקרות את הביצוע ומאריכות את לוחות הזמנים. ההיכרות איתן מאפשרת תכנון נכון של תקציב ולוח זמנים.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">חיזוק קונסטרוקציה של המבנה הנושא.</strong> תוספת ממ״ד שוקלת 15-25 טון. עומס זה מתווסף למבנה הקיים, ועלול לדרוש חיזוק עמודים, יסודות, או תקרות. עלות חיזוק 30,000-100,000 ש&ldquo;ח.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">משאבת בטון בגובה.</strong> בקומה רביעית ומעלה, יציקת בטון דורשת משאבה מיוחדת. עלות 15,000-30,000 ש&ldquo;ח, תלוי בכמות הבטון ובגובה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לוגיסטיקה של חומרים.</strong> הובלת ברזל, דלת הדף (ששוקלת 200-400 ק&ldquo;ג), וחלון תקני לקומה גבוהה דורשת מנוף או מעלון. עלות 10,000-20,000 ש&ldquo;ח.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="aluyot" title="עלויות מפורטות">
            <p>
              ממ״ד בקומה עליונה עולה בדרך כלל 200,000-280,000 ש&ldquo;ח. הפירוט הבא מסביר את ההפרש מקומת קרקע.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">עלות בסיס לממ״ד תקני.</strong> 160,000-220,000 ש&ldquo;ח. כולל תכנון, רישוי, יציקת בטון, דלת הדף, חלון, ומערכת אוורור.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חיזוק קונסטרוקטיבי.</strong> 30,000-100,000 ש&ldquo;ח, תלוי במצב הבניין. עמודי תמיכה נוספים, חיזוק עמודים קיימים, או חיזוק תקרה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לוגיסטיקה בגובה.</strong> 25,000-50,000 ש&ldquo;ח. כולל משאבת בטון, מנוף, ומעלון.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איטום נוסף.</strong> 5,000-15,000 ש&ldquo;ח. הגנה מפני חדירת מים מהגג ומבחוץ. בקומות עליונות זה קריטי במיוחד.
              </li>
            </ul>
            <p>
              עיון מקיף בכל מבנה העלות זמין במדריך על{" "}
              <Link
                href="/guides/mamad-cost"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מחיר ממ״ד 2026
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="ishurim" title="אישורים נדרשים">
            <p>
              ארבעה אישורים מרכזיים לפרויקט ממ״ד בקומה עליונה. כל אחד בעל מסלול נפרד ולוחות זמנים שונים.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">היתר בנייה.</strong> מהוועדה המקומית. במצבים מסוימים מסלול פטור חל, אך בדרך כלל היתר רגיל נדרש. 6-12 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אישור פיקוד העורף.</strong> נדרש לכל ממ״ד. 4-8 שבועות. למידע מקיף ראו את המדריך על{" "}
                <Link
                  href="/guides/home-front-command-approval"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  אישורי פיקוד העורף
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הסכמת דיירים.</strong> אם הגג רכוש משותף, נדרשת הסכמה לפי תקנון הבית המשותף. בדירת גג עם זכויות בלעדיות לגג, בדרך כלל לא נדרשת.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקה הנדסית.</strong> חישוב קונסטרוקטיבי שמאשר את היתכנות הבנייה. נכלל בתיק הבקשה לוועדה המקומית.
              </li>
            </ol>
            <p>
              עיון נוסף על הליכי רישוי ב
              <a
                href="https://www.gov.il/he/departments/topics/building_permits/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                מנהל התכנון
              </a>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="alternatives" title="אלטרנטיבות לממ״ד עליון">
            <p>
              לפני בחירה בממ״ד עליון, כדאי לבחון שתי אלטרנטיבות. הבחירה תלויה במצב הספציפי של הבניין והדירה.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">ממ״ד דירתי פנימי.</strong> אם הדירה גדולה מספיק להוסיף ממ״ד פנימי (9-12 מ&ldquo;ר), זוהי בדרך כלל האפשרות הפשוטה יותר. אין צורך במשאבת בטון בגובה, חיזוק קונסטרוקציה מצומצם, ולוגיסטיקה פשוטה. ראו את המדריך על{" "}
              <Link
                href="/memad/dira-bekoma"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ממ״ד בדירה בקומה
              </Link>
              .
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">שיפור מיגון לחדר קיים.</strong> במצבים בהם ממ״ד תקני אינו אפשרי, או כאשר התקציב מוגבל, שיפור מיגון לחדר קיים מספק הגנה חלקית בעלות נמוכה יותר. עלות 80,000-150,000 ש&ldquo;ח לעומת 200,000-280,000 ש&ldquo;ח לממ״ד עליון.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shlavim" title="שלבי ביצוע">
            <p>
              שבעה שלבים מובנים לביצוע ממ״ד בקומה עליונה. ההיכרות מראש איתם מאפשרת תכנון נכון.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">סיור ראשוני וייעוץ.</strong> מהנדס וקבלן מבקרים בבניין, בוחנים את האפשרויות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקה הנדסית.</strong> חישוב קונסטרוקטיבי, בדיקת מבנה. 2-4 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תכנון אדריכלי.</strong> תוכניות מלאות לאישורים. 3-6 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הגשה לוועדה ולפיקוד העורף.</strong> 8-16 שבועות לאישורים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חיזוק קונסטרוקטיבי.</strong> אם נדרש, מתבצע לפני בנייה. 1-3 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בנייה.</strong> חפירה, יציקות, התקנות. 8-12 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת אישור גמר וגמר.</strong> אישור פיקוד העורף, גמר פנים, מסירה. 2-4 שבועות.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "פיקוד העורף: מערך המיגון",
          url: "https://www.idf.il/he/minisites/pikud-haoref/",
        }}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              דירת גג או פנטהאוז? בדקו את האפשרות הנכונה.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו חברת בנייה שמבצעת ממ״דים בקומות עליונות, כולל בדירות גג ופנטהאוזים. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="ממ״ד בקומה עליונה: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב הספציפי ונציע פתרון מותאם."
            defaultService="ממ״ד / מיגון"
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="memad/koma-elyona"
        targets={["building-mamad", "memad-bayit-prati", "memad-dira-bekoma"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על ממ״ד בקומה עליונה"
        tone="soft"
        includeSchema
      />
    </>
  );
}
