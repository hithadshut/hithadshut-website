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

const PATH = "/memad/tat-karkai";
const TITLE = "ממ״ד תת-קרקעי 2026: מתי כדאי, איך בונים | התחדשות";
const DESCRIPTION =
  "ממ״ד תת-קרקעי במרתף או בחצר: רמת הגנה גבוהה במיוחד אך עלויות חפירה ואיטום מוסיפות 25%-40%. מדריך 2026 למתי כדאי, איך בונים, ולשיקולי תנאי קרקע ואוורור.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "כמה עולה ממ״ד תת-קרקעי?",
    a: "ממ״ד תת-קרקעי עולה בדרך כלל 230,000-320,000 ש&ldquo;ח, גבוה ב-25%-40% מממ״ד עילי דומה. ההפרש נובע מארבעה גורמים: עלויות חפירה ודיפון (40,000-80,000 ש&ldquo;ח), מערכת ניקוז ושאיבה (15,000-30,000 ש&ldquo;ח), איטום מקיף נגד חדירת מים (20,000-40,000 ש&ldquo;ח), ומערכת אוורור משופרת. הסכום הסופי תלוי בתנאי הקרקע, בעומק החפירה, וברמת מי התהום באתר.",
  },
  {
    q: "מתי כדאי ממ״ד תת-קרקעי?",
    a: "ממ״ד תת-קרקעי מתאים בארבעה מצבים: כאשר רמת ההגנה הפיזית הנדרשת גבוהה במיוחד, כאשר אין שטח עילי לבנייה, כאשר הבית כבר כולל מרתף ומתאים להרחיב, וכאשר תנאי הקרקע מתאימים (ללא מי תהום גבוהים). בבתים פרטיים בעלי שטח קרקע, הפתרון הזה מספק הגנה מקסימלית עם ניצול שטח שאינו פוגע בחזית הבית.",
  },
  {
    q: "מה עם מי התהום?",
    a: "מי תהום הם השיקול הקריטי בממ״ד תת-קרקעי. אם רמת מי התהום באתר גבוהה (פחות מ-3 מטרים מתחת לפני הקרקע), הביצוע מורכב משמעותית ועלול להיות בלתי משתלם. בדיקת מי תהום נעשית במסגרת הבדיקה ההנדסית המקדימה, על ידי קידוח ניסיון. במצבים של מי תהום גבוהים, אפשר לבנות ממ״ד חצי-תת-קרקעי שחלקו מעל פני הקרקע, או לבחור בפתרון אחר.",
  },
  {
    q: "איך מאווררים ממ״ד תת-קרקעי?",
    a: "אוורור הוא קריטי בממ״ד תת-קרקעי. בנוסף למערכת האוורור הסטנדרטית הנדרשת בכל ממ״ד (מאוורר תקני עם מסנן NBC), בממ״ד תת-קרקעי נדרשת מערכת אוורור משופרת שמפצה על היעדר אוורור טבעי. הפתרון הסטנדרטי הוא צינור אוורור שמתחבר לפני הקרקע, עם סינון נוסף ושסתום נגד הדף. עלות מערכת אוורור משופרת היא 25,000-50,000 ש&ldquo;ח.",
  },
  {
    q: "האם אפשר להגיע לממ״ד מהר?",
    a: "תלוי בתכנון. ממ״ד תת-קרקעי במרתף הבית בדרך כלל נגיש דרך מדרגות פנימיות, ולוקח שניות בודדות להגיע. ממ״ד תת-קרקעי נפרד בחצר דורש יציאה לחצר, ירידה במדרגות, וכניסה. במצב חירום זמן ההגעה עשוי להיות 30-60 שניות, מה שדורש עירנות ופעולה מהירה. בתכנון מוקדם של מסלול הגישה, נתיב המדרגות צריך להיות מוגן ועם תאורת חירום.",
  },
  {
    q: "האם זה משתלם כלכלית?",
    a: "תלוי במצב. בבתים פרטיים יוקרתיים שבהם רמת ההגנה הגבוהה היא שיקול מרכזי, ההשקעה משתלמת. בבתים סטנדרטיים, ממ״ד תת-קרקעי יקר יותר ב-50,000-100,000 ש&ldquo;ח מממ״ד עילי, וההגנה הנוספת לעיתים אינה מצדיקה את ההשקעה. הערך המוסף בנכס מוגבל: ממ״ד תת-קרקעי מעלה את ערך הנכס פחות מממ״ד עילי, מאחר שהוא משמש פחות כחדר רגיל.",
  },
  {
    q: "כמה זמן לוקחת בנייה?",
    a: "ממ״ד תת-קרקעי לוקח 5-8 חודשים מהחלטה ועד מסירה, מתוכם 3-5 חודשים בנייה בפועל. שלב התכנון והרישוי לוקח 8-16 שבועות, כולל בדיקת תנאי קרקע ובדיקת מי תהום. שלב הבנייה לוקח 12-20 שבועות: חפירה ודיפון 2-4 שבועות, יציקות 4-8 שבועות, איטום וגמר 4-8 שבועות. עיכובים נפוצים נובעים מתנאי קרקע לא צפויים שמתגלים במהלך החפירה.",
  },
  {
    q: "האם נדרש אישור מיוחד?",
    a: "נדרשים אותם אישורים כמו לכל ממ״ד: אישור פיקוד העורף, היתר בנייה (או מסלול פטור במקרים מסוימים), ובמצבים מסוימים אישור מהוועדה לאיכות הסביבה אם החפירה משפיעה על מי תהום. בחלק מהמקרים, פרויקטים תת-קרקעיים בקרבת תשתיות (קווי מים, ביוב, חשמל) דורשים תיאום עם חברות התשתיות. תכנון מוקדם של כל האישורים מקצר את הזמן.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="ממ״ד תת-קרקעי 2026: מתי כדאי, איך בונים, וכמה עולה"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "ממ״ד", url: "/services/building-mamad" },
          { name: "ממ״ד תת-קרקעי", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="ממ״ד · תת-קרקעי"
        title="ממ״ד תת-קרקעי 2026: מתי כדאי, איך בונים, וכמה עולה"
        subtitle="מדריך 2026 לבעלי בתים שוקלים ממ״ד במרתף או בחצר תת-קרקעי: רמת הגנה גבוהה, שיקולי תנאי קרקע, איטום, אוורור, ועלויות מפורטות."
        crumbs={[
          { name: "ממ״ד", href: "/services/building-mamad" },
          { name: "תת-קרקעי", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              ממ״ד{" "}
              <Link
                href="/services/building-mamad"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תת-קרקעי
              </Link>{" "}
              הוא פתרון מיגון מתקדם שבו הממ״ד נבנה מתחת לפני הקרקע: במרתף, כחלק מתוספת תת-קרקעית, או כיחידה נפרדת בחצר. רמת ההגנה הפיזית גבוהה במיוחד בזכות מסת הקרקע שמעל, אך עלויות החפירה, הדיפון, הניקוז וההגנה מפני חדירת מים יכולות להוסיף 25% עד 40% מעל מחיר ממ״ד עילי דומה. מתאים לבתים שבהם תנאי הקרקע מתאימים. מדריך זה מסביר מתי ממ״ד תת-קרקעי הוא הבחירה הנכונה.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="metay-livchor" title="מתי כדאי לבחור ממ״ד תת-קרקעי?">
            <p>
              ממ״ד תת-קרקעי אינו הבחירה הסטנדרטית. הוא מתאים בארבעה מצבים ספציפיים, ובאחרים פתרונות אחרים עדיפים.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">דרישה לרמת הגנה גבוהה במיוחד.</strong> בבתים בקו עימות או באזורים עם איום מוגבר, מסת הקרקע מעל הממ״ד מספקת הגנה נוספת מפני פגיעה ישירה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בית קיים עם מרתף.</strong> אם הבית כבר כולל מרתף, הרחבתו לכולל ממ״ד תקני זול ופשוט יותר מבנייה תת-קרקעית מאפס.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חצר זמינה לחפירה.</strong> בבתים פרטיים עם חצר גדולה, ממ״ד תת-קרקעי נפרד בחצר אינו פוגע בחזית הבית, ומאפשר ניצול שטח לא מנוצל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תנאי קרקע מתאימים.</strong> קרקע יציבה (חרסיתית או טרסה), ללא מי תהום גבוהים. תנאים אלה מקטינים משמעותית את העלויות והמורכבות.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="tnay-karkah" title="תנאי קרקע ומי תהום">
            <p>
              שני שיקולים גיאולוגיים מכריעים על היתכנות הפרויקט. בדיקתם המקדימה היא הכרחית.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">סוג הקרקע.</strong> קרקע יציבה (כורכר, חרסית, טרסה) מאפשרת חפירה פשוטה ותומכת בקירות הממ״ד. קרקע חולית או רוויה דורשת דיפון מקיף ומייקרת את הביצוע. בדיקת קרקע על ידי מהנדס גיאוטכני נעשית בקידוח ניסיון.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רמת מי תהום.</strong> אם מי התהום פחות מ-3 מטרים מפני הקרקע, הביצוע מורכב משמעותית. נדרשת מערכת איטום מקיפה, ניקוז קבוע, ולעיתים שאיבה מתמדת. במצבים אלו עלויות נוספות של 50,000-100,000 ש&ldquo;ח. אם מי תהום גבוהים מאוד (פחות ממטר אחד), הפרויקט עשוי להיות בלתי משתלם.
              </li>
            </ul>
            <p>
              בדיקה גיאוטכנית מקדימה עולה 5,000-10,000 ש&ldquo;ח, אך היא חוסכת כסף רב במידה ומתגלה בעיה. ללא בדיקה זו, ההסתכנות בעלויות בלתי צפויות גבוהה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="aluyot" title="עלויות מפורטות">
            <p>
              ממ״ד תת-קרקעי עולה בדרך כלל 230,000-320,000 ש&ldquo;ח. הפירוט הבא מסביר את ההפרש מממ״ד עילי.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בסיס ממ״ד תקני.</strong> 160,000-220,000 ש&ldquo;ח. תכנון, רישוי, יציקת בטון, דלת הדף, חלון, אוורור.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חפירה ודיפון.</strong> 40,000-80,000 ש&ldquo;ח. תלוי בעומק ובסוג הקרקע. דיפון נדרש למניעת קריסה של דפנות החפירה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איטום מקיף.</strong> 20,000-40,000 ש&ldquo;ח. שכבות איטום על קירות ועל הרצפה, עם דגש על מניעת חדירת מים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מערכת ניקוז ושאיבה.</strong> 15,000-30,000 ש&ldquo;ח. צנרת ניקוז, מסנני חצץ, ובמידת הצורך משאבת מים אוטומטית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מערכת אוורור משופרת.</strong> 25,000-50,000 ש&ldquo;ח. צינור אוורור לפני הקרקע, מסנני NBC משופרים, שסתומי הדף.
              </li>
            </ul>
            <p>
              למידע מקיף על מבנה המחירים ראו את המדריך על{" "}
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
          <ContentSection id="negishut" title="נגישות וזמני הגעה במצב חירום">
            <p>
              הנגישות היא שיקול קריטי בממ״ד תת-קרקעי. הזמן בין אזעקה להגנה צריך להיות מינימלי, ותכנון נכון של מסלול הגישה מקטין את הזמן.
            </p>
            <p>
              בממ״ד תת-קרקעי במרתף הבית, הנגישות בדרך כלל פנימית: דרך מדרגות שמובילות מהקומה התחתונה. זמן הגעה מהחלל הראשי של הבית: 15-30 שניות. נדרש שמסלול המדרגות לא יהיה חסום, וייערך פינוי שגרתי שלו.
            </p>
            <p>
              בממ״ד תת-קרקעי נפרד בחצר, הנגישות חיצונית: יציאה מהבית, מעבר בחצר, ירידה במדרגות, וכניסה. זמן הגעה: 30-60 שניות. תכנון נכון כולל מסלול ישיר ומגונן (לא חשוף לראייה ישירה), תאורת חירום, ופתחים מוגנים.
            </p>
            <p>
              בכל מקרה, התקן של פיקוד העורף דורש שזמן ההגעה לממ״ד יהיה תוך 90 שניות מאזעקה. ממ״ד תת-קרקעי שמתאים לתקן זה הוא בחירה לגיטימית. ממ״ד שזמן ההגעה אליו ארוך יותר אינו תקני.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ishurim" title="אישורים ורישוי">
            <p>
              ממ״ד תת-קרקעי דורש את האישורים הסטנדרטיים, ולעיתים גם אישורים נוספים בשל מאפייני הפרויקט.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">אישור פיקוד העורף.</strong> נדרש לכל ממ״ד. בממ״ד תת-קרקעי נדרשים פרטים נוספים על מערכת האוורור והניקוז. למידע מקיף ראו את המדריך על{" "}
                <Link
                  href="/guides/home-front-command-approval"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  אישורי פיקוד העורף
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">היתר בנייה או מסלול פטור.</strong> בבתים פרטיים, מסלול פטור בתקנה 30ב לעיתים חל גם על ממ״ד תת-קרקעי. בבניינים נדרש היתר רגיל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אישור איכות הסביבה.</strong> במצבים מסוימים, חפירה משמעותית או השפעה על מי תהום דורשת אישור הוועדה לאיכות הסביבה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תיאום עם חברות תשתית.</strong> לפני חפירה, תיאום עם חברות המים, החשמל, והגז למניעת פגיעה בתשתיות תת-קרקעיות.
              </li>
            </ol>
            <p>
              עיון על תהליכי רישוי תכנון ובנייה זמין באתר{" "}
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

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shlavim" title="שלבי ביצוע מהתכנון ועד מסירה">
            <p>
              שמונה שלבים מובחנים לפרויקט ממ״ד תת-קרקעי. ההיכרות מראש מאפשרת תכנון נכון של זמן ועלות.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בדיקה גיאוטכנית מקדימה.</strong> 2-3 שבועות. קידוח ניסיון, בדיקת מי תהום, סוג קרקע. עלות 5,000-10,000 ש&ldquo;ח.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תכנון אדריכלי וקונסטרוקטיבי.</strong> 4-8 שבועות. תוכניות מלאות, תכנון אוורור, איטום, וניקוז.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הגשה לאישורים.</strong> 8-16 שבועות לאישור הוועדה ופיקוד העורף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הכנת אתר וחפירה.</strong> 2-4 שבועות. תיאום עם חברות תשתית, פתיחת השטח, וחפירה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דיפון ויסודות.</strong> 2-4 שבועות. דיפון דפנות החפירה, יציקת רצפת יסוד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יציקת קירות ותקרה.</strong> 4-6 שבועות. כולל זמן התקשות בין יציקות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איטום, אוורור, והתקנות.</strong> 3-5 שבועות. שכבות איטום, מערכת אוורור, דלת הדף, וחלון.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת אישור גמר וגמר.</strong> 2-4 שבועות. בדיקת פיקוד העורף, גמר פנים, מסירה.
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
              שוקלים ממ״ד תת-קרקעי? בדקו את ההיתכנות לפני שתחליטו.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו חברת בנייה. תכנון, היתרים, ביצוע, הכל אצלנו. מבצעים פרויקטים תת-קרקעיים, כולל ממ״דים, עם בדיקת תנאי קרקע ואיטום מקצועי. חוזה אחד, אחריות אחת, צוות אחד עד מסירת המפתחות. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="ממ״ד תת-קרקעי: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את תנאי הקרקע באתר ונציג הצעה מותאמת."
            defaultService="mamad"
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="memad/tat-karkai"
        targets={["building-mamad", "memad-bayit-prati", "memad-koma-elyona"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על ממ״ד תת-קרקעי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
