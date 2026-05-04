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

const PATH = "/memad/dira-bekoma";
const TITLE = "ממ״ד בדירה בקומה 2026: עלויות, אישורים, פתרונות | התחדשות";
const DESCRIPTION =
  "ממ״ד בדירה בקומה הוא פרויקט מורכב שדורש חישוב קונסטרוקטיבי, אישור ועדה מקומית, ולעיתים הסכמת שכנים. עלות גבוהה ב-30%-50% מבית פרטי. מדריך 2026 לאפשרויות, עלויות, ובחירה הנכונה.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "כמה זמן לוקח לבנות ממ״ד בדירה בקומה?",
    a: "בנייה בדירה בקומה לוקחת 4 עד 8 חודשים, לעומת 3-5 חודשים בבית פרטי. שלב התכנון והרישוי לוקח 8 עד 16 שבועות בשל מורכבות החישוב הקונסטרוקטיבי ואישור הוועדה המקומית. שלב הבנייה עצמו לוקח 2 עד 4 חודשים, תלוי בנגישות לדירה ובתנאי המבנה. עיכובים נפוצים נובעים מאישור פיקוד העורף ומבדיקת השפעה על המבנה הקיים.",
  },
  {
    q: "האם צריך הסכמת שכנים?",
    a: "לעיתים כן, תלוי בסוג הפרויקט והשפעתו על המבנה. אם הממ״ד דורש חיזוק קונסטרוקטיבי שמשפיע על דירות אחרות, או אם הוא מורחב מעבר לקווי הדירה הקיימים, נדרשת הסכמת שכנים. בנייה בתוך גבולות הדירה הקיימים, ללא השפעה על המבנה המשותף, בדרך כלל לא דורשת הסכמה. כל מקרה נבחן על ידי הוועדה המקומית, שקובעת אם הסכמת שכנים נדרשת.",
  },
  {
    q: "מה אם הדירה בקומה רביעית או יותר?",
    a: "ככל שהקומה גבוהה יותר, הביצוע מורכב יותר. בקומה רביעית ומעלה נדרשת תכנון לוגיסטי של הובלת חומרי הבנייה (משאבת בטון, מנוף, או מעלון), חישוב קונסטרוקטיבי שמתחשב בעומס המצטבר על המבנה הקיים, ולעיתים שיתוף פעולה עם דיירי קומות תחתונות. עלות הבנייה בקומה רביעית גבוהה ב-15%-25% מקומה ראשונה, בעיקר בשל עלויות לוגיסטיות.",
  },
  {
    q: "מה ההבדל בין ממ״ד לשיפור מיגון?",
    a: "ממ״ד תקני הוא חדר חדש או חלל מותאם הבנוי לפי תקן פיקוד העורף, עם קירות בטון מזוין בעובי 25 ס&ldquo;מ, דלת הדף, וחלון תקני. שיפור מיגון הוא חיזוק חדר קיים בדירה לרמת הגנה נמוכה יותר, בדרך כלל באמצעות חיזוק פנימי של קירות וחלונות. שיפור מיגון מתאים כאשר ממ״ד תקני אינו אפשרי קונסטרוקטיבית, או כאשר התקציב מצומצם. רמת ההגנה של שיפור מיגון פחותה מממ״ד תקני.",
  },
  {
    q: "האם אפשר ממ״ד יביל בגג בניין?",
    a: "כן, אך זה תלוי בכמה גורמים: מסוגלות הגג לשאת את משקל הממ״ד היביל (חישוב קונסטרוקטיבי), הסכמת ועד הבית והדיירים, אישור הוועדה המקומית, ואישור פיקוד העורף לכתובת הספציפית. הפתרון מתאים בעיקר לבעלי דירות בקומה עליונה שיש להם זכויות לגג, או לפרויקטים של תוספת בנייה על הגג. עלות נעה בין 130,000 ל-220,000 ש&ldquo;ח כולל הצבה.",
  },
  {
    q: "כמה זה עולה לעומת ממ״ד פרטי?",
    a: "בנייה בדירה בקומה גבוהה ב-30%-50% מבנייה דומה בבית פרטי. ממ״ד תקני בדירה עולה בדרך כלל 220,000 עד 350,000 ש&ldquo;ח, לעומת 160,000-280,000 ש&ldquo;ח בבית פרטי. הסיבות העיקריות: חישוב קונסטרוקטיבי מורכב יותר, עלויות לוגיסטיות גבוהות, אישורים נוספים, ולעיתים גם פיצוי לדיירים אחרים בבניין. שיפור מיגון בדירה עולה פחות, 80,000-150,000 ש&ldquo;ח.",
  },
  {
    q: "מה אם המבנה ישן?",
    a: "בניינים שנבנו לפני 1992 בדרך כלל לא חויבו בממ״ד דירתי, ובהם הוספת ממ״ד מורכבת יותר. נדרשת בדיקת היתכנות הנדסית מקיפה: מצב הקונסטרוקציה, יסודות, קירות נושאים. בחלק מהבניינים הישנים הוספת ממ״ד אינה אפשרית קונסטרוקטיבית, ויש לשקול אלטרנטיבות כמו שיפור מיגון, ממ״ד יביל, או מסלולי התחדשות עירונית כמו פינוי בינוי. למידע על תהליכי התחדשות עירונית ראו את המדריך על פינוי בינוי.",
  },
  {
    q: "האם זה מעלה את ערך הדירה?",
    a: "כן. ממ״ד תקני בדירה מעלה את ערך הדירה בדרך כלל ב-7%-15% משווי השוק לפני הבנייה, תלוי באזור ובסוג הדירה. בערים בהן הביקוש לדירות עם ממ״ד גבוה (תל אביב, גוש דן, ערים מרכזיות), הפרמיה גבוהה יותר. בנוסף לערך הביטחוני, ממ״ד מספק חדר נוסף שמעלה את גודל הבנוי הרשום בטאבו. שיפור מיגון מעלה את הערך פחות, בערך 3%-7%.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="ממ״ד בדירה בקומה 2026: האם אפשר, איך עושים, וכמה עולה"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "ממ״ד", url: "/services/building-mamad" },
          { name: "ממ״ד בדירה בקומה", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="ממ״ד · דירה בקומה"
        title="ממ״ד בדירה בקומה 2026: האם אפשר, איך עושים, וכמה עולה"
        subtitle="מדריך 2026 לבעלי דירות בקומה: שלושה פתרונות, מתי כל אחד מתאים, עלויות, אישורים נדרשים, וההשפעה על המבנה הקיים."
        crumbs={[
          { name: "ממ״ד", href: "/services/building-mamad" },
          { name: "דירה בקומה", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              ממ״ד ב
              <Link
                href="/services/building-mamad"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                דירה בקומה
              </Link>{" "}
              הוא פרויקט מורכב יותר מבניית ממ״ד בבית פרטי. דירה בקומה גבוהה דורשת חישוב קונסטרוקטיבי שמתחשב בעומס על המבנה הקיים, באישור הוועדה המקומית, ולעיתים בהסכמת הדיירים השכנים. עלות בנייה לדירה בקומה גבוהה ב-30% עד 50% ממחיר ממ״ד דומה בבית פרטי, וההליך לוקח לרוב 4 עד 8 חודשים. במצבים מסוימים, פתרון של שיפור מיגון לחדר קיים מתאים יותר. מדריך זה מפרט את כל האפשרויות, העלויות, והבחירה הנכונה.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="lama-mesubechet" title="למה בנייה בקומה מורכבת יותר?">
            <p>
              בנייה של ממ״ד בדירה בקומה מערבת אתגרים שלא קיימים בבית פרטי. ההבדלים נובעים מארבעה גורמים מרכזיים: עומס על המבנה הקיים, מגבלות לוגיסטיות, אישורים נוספים, והשפעה על דיירים אחרים.
            </p>
            <p>
              העומס על המבנה הקיים הוא השיקול הראשון. ממ״ד תקני שוקל 15-25 טון, עומס משמעותי שמתווסף למבנה שלא תוכנן מראש לשאת אותו. חישוב קונסטרוקטיבי מקיף נדרש לקבוע אם המבנה מסוגל לשאת את העומס, או אם נדרש חיזוק נוסף. בבניינים ישנים יותר, התשובה לעיתים שלילית.
            </p>
            <p>
              המגבלות הלוגיסטיות מצטרפות. בקומה רביעית ומעלה, הובלת חומרי בנייה (בטון, ברזל, דלת הדף) דורשת מנוף או משאבה בגובה. עבודות פנים בדירה תפוסה דורשות תיאום עם הדיירים ולעיתים פינוי זמני. כל אלה מאריכים את הזמן ומעלים את העלות.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="metay-efshar" title="מתי אפשר לבנות ממ״ד בדירה בקומה?">
            <p>
              לא בכל דירה בקומה אפשר לבנות ממ״ד תקני. ההיתכנות תלויה בכמה תנאים, וצריך לבדוק אותם לפני שמתחילים תכנון מפורט.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מסוגלות קונסטרוקטיבית.</strong> המבנה הקיים חייב להיות מסוגל לשאת את העומס הנוסף. מהנדס קונסטרוקציה מבצע חישוב מקדים. בבניינים שנבנו אחרי 1992 הסיכוי גבוה יותר, מאחר שעמודי המבנה תוכננו עם עתודות עומס.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שטח זמין בדירה.</strong> ממ״ד תקני דורש 9-12 מ&ldquo;ר. אם הדירה לא מאפשרת תוספת חדר חדש, יש לבחון הסבת חדר קיים, לעיתים על חשבון מטבח או חדר רחצה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אישור ועדה מקומית.</strong> נדרש היתר בנייה או, במקרים מסוימים, הליך פטור מקוצר במסגרת הוראת חרבות ברזל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הסכמות נדרשות.</strong> בחלק מהמקרים נדרשת הסכמת ועד הבית או דיירים שכנים, במיוחד אם הבנייה משפיעה על הקירות המשותפים או על המראה החיצוני של הבניין.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="3-pitronot" title="3 פתרונות בקומה">
            <p>
              שלוש אפשרויות מקובלות בדירה בקומה. הבחירה תלויה בהיתכנות הקונסטרוקטיבית, בתקציב, וברמת ההגנה הנדרשת.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="שלושה פתרונות מיגון לדירה בקומה: השוואה לפי עלות, רמת הגנה, וזמן ביצוע"
              columns={[
                { key: "alut", header: "טווח עלות" },
                { key: "haganah", header: "רמת הגנה" },
                { key: "zman", header: "זמן ביצוע" },
                { key: "matim", header: "מתי מתאים" },
              ]}
              rows={[
                {
                  label: "ממ״ד דירתי תקני",
                  cells: {
                    alut: '220,000-350,000 ש"ח',
                    haganah: "מקסימלית, תקן פקע״ר",
                    zman: "4-8 חודשים",
                    matim: "מבנה מסוגל קונסטרוקטיבית, יש שטח",
                  },
                },
                {
                  label: "שיפור מיגון לחדר קיים",
                  cells: {
                    alut: '80,000-150,000 ש"ח',
                    haganah: "חלקית, נמוכה מתקן ממ״ד",
                    zman: "1-3 חודשים",
                    matim: "ממ״ד תקני אינו אפשרי או יקר מדי",
                  },
                },
                {
                  label: "ממ״ד יביל בגג",
                  cells: {
                    alut: '130,000-220,000 ש"ח',
                    haganah: "מקסימלית, תקן פקע״ר",
                    zman: "2-4 חודשים",
                    matim: "דירה בקומה עליונה עם זכויות גג",
                  },
                },
              ]}
              footnote="הטווחים הם הערכות שוק נכון ל-2026 לפרויקטים סטנדרטיים. כל פרויקט נבחן פרטנית לפי תנאי המבנה."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="aluyot-luchot" title="עלויות ולוחות זמנים">
            <p>
              העלות לממ״ד תקני בדירה בקומה נעה בין 220,000 ל-350,000 ש&ldquo;ח, גבוהה ב-30%-50% מבית פרטי. ההפרש נובע מארבעה גורמים: חישוב קונסטרוקטיבי מורכב יותר, עלויות הובלה ולוגיסטיקה, אישורים נוספים, ופיצוי דיירים שכנים במקרים מסוימים.
            </p>
            <p>
              לוחות הזמנים: שלב התכנון והרישוי לוקח 8-16 שבועות. שלב הבנייה לוקח 8-16 שבועות נוספים. סך הכל 4-8 חודשים מהחלטה ועד מסירה. עיכובים נפוצים נובעים מאישור הוועדה המקומית (יכול להגיע ל-12 שבועות) ומאישור פיקוד העורף (4-8 שבועות).
            </p>
            <p>
              שיפור מיגון לחדר קיים זול יותר ומהיר יותר: 80,000-150,000 ש&ldquo;ח, ביצוע ב-1-3 חודשים. מתאים כאשר ממ״ד תקני אינו אפשרי או כאשר התקציב מצומצם.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ishurim" title="אישורים נדרשים בדירה בקומה">
            <p>
              שלושה אישורים נדרשים לפרויקט ממ״ד בדירה בקומה. כל אחד מהם בעל מסלול נפרד, וצריך להיערך אליהם מראש.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">אישור פיקוד העורף.</strong> כל ממ״ד דורש אישור פיקוד העורף, גם בדירה. ההגשה דיגיטלית, זמן אישור 4-8 שבועות. למידע מקיף ראו את המדריך על{" "}
                <Link
                  href="/guides/home-front-command-approval"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  אישורי פיקוד העורף
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">היתר בנייה מהוועדה המקומית.</strong> בדירה בקומה בדרך כלל נדרש היתר רגיל. הליך הפטור של תקנה 30ב להוראת חרבות ברזל לעיתים חל גם על דירות עליונות, אך התנאים מוגבלים. אישור ועדה לוקח 6-16 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הסכמת ועד בית או שכנים.</strong> נדרשת אם הבנייה משפיעה על הרכוש המשותף, על קירות נושאים משותפים, או על המראה החיצוני של הבניין. ועד הבית מקבל החלטה באסיפה כללית, ולעיתים נדרש רוב מיוחד לפי תקנון הבית המשותף.
              </li>
            </ol>
            <p>
              עיון נוסף על תהליכי רישוי זמין באתר{" "}
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
          <ContentSection id="hashpaa" title="השפעה על המבנה הקיים">
            <p>
              בנייה בדירה בקומה משפיעה על המבנה הקיים בארבעה אופנים. ההיכרות איתם מאפשרת להיערך נכון.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">קונסטרוקציה.</strong> תוספת עומס על קירות נושאים ועמודים. במבנים ישנים יותר עלול להידרש חיזוק קונסטרוקטיבי נוסף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רעידות במהלך הביצוע.</strong> חפירות, יציקות, וקידוחים יוצרים רעידות שעלולות להפריע לדיירים אחרים. התיאום מראש עם הדיירים מקטין מתחים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איטום.</strong> התחברות בין הממ״ד החדש לקירות הקיימים דורש איטום מקצועי למניעת חדירת מים בעתיד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מערכות הבניין.</strong> צנרת, חשמל, ותקשורת בקירות המשותפים. תכנון מקדים מונע פגיעה במערכות.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="shipur-migun" title="מתי שיפור מיגון עדיף על ממ״ד תקני">
            <p>
              שיפור מיגון לחדר קיים אינו תחליף לממ״ד תקני, אך הוא הפתרון הנכון בכמה מצבים. ההבחנה בין השניים חשובה: ממ״ד תקני מספק הגנה מקסימלית לפי תקן פיקוד העורף, ואילו{" "}
              <Link
                href="/services/room-reinforcement"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                שיפור מיגון
              </Link>{" "}
              מספק הגנה חלקית באמצעות חיזוק חדר קיים.
            </p>
            <p>
              שיפור מיגון מתאים בארבעה מצבים: כאשר ממ״ד תקני אינו אפשרי קונסטרוקטיבית במבנה הקיים, כאשר אין שטח לתוספת חדר חדש, כאשר התקציב מוגבל ל-150,000 ש&ldquo;ח ומטה, וכאשר הזמן הוא שיקול דחוף (ביצוע ב-1-3 חודשים מול 4-8 לממ״ד תקני).
            </p>
            <p>
              חשוב להבין: רמת ההגנה של שיפור מיגון פחותה מממ״ד תקני. החדר המחוזק לא עומד בפני פגיעה ישירה של פגז כבד או טיל מתקדם. הוא כן מספק הגנה משמעותית מפני הדף, רסיסים, ופגיעה עקיפה. בחלק מהאזורים זוהי רמת הגנה מספקת, ובאחרים נדרש ממ״ד תקני.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shlavim" title="שלבי הביצוע">
            <p>
              ביצוע ממ״ד בדירה בקומה מורכב מ-7 שלבים. סדר השלבים והזמנים שלהם דומים לבית פרטי, אך עם זמן נוסף לאישורים ולתיאומים.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">סיור מקדים ובדיקת היתכנות.</strong> מהנדס בודק את המבנה ומחליט אם ממ״ד תקני אפשרי. ללא עלות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תכנון אדריכלי וחישוב קונסטרוקטיבי.</strong> 4-8 שבועות. כולל תוכניות לאישורים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הגשת בקשה לוועדה ולפיקוד העורף.</strong> 8-16 שבועות עד אישורים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תיאום עם דיירי הבניין.</strong> אסיפה עם ועד הבית, הסבר על השפעות הביצוע, וקבלת הסכמות נדרשות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הכנה וביצוע.</strong> פינוי זמני של תוכן הדירה, חפירה במידת הצורך, יציקת קירות ותקרה. 6-12 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">התקנת דלת, חלון, ומערכות.</strong> 1-2 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת אישור גמר וגמר פנים.</strong> 2-4 שבועות. בדיקת פיקוד העורף, גמר פנים, מסירה.
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
              דירה בקומה? בדקו את האפשרות הנכונה לכם.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו חברת בנייה שמתמחה גם בממ״דים מורכבים בדירות בקומה, וגם בשיפור מיגון. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="ממ״ד בדירה בקומה: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב הספציפי של הדירה שלכם ונציע את הפתרון המתאים."
            defaultService="ממ״ד / מיגון"
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="memad/dira-bekoma"
        targets={["building-mamad", "room-reinforcement", "memad-bayit-prati"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על ממ״ד בדירה בקומה"
        tone="soft"
        includeSchema
      />
    </>
  );
}
