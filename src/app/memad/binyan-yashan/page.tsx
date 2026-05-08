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

const PATH = "/memad/binyan-yashan";
const TITLE = "ממ״ד לבניין ישן 2026: היתכנות ואלטרנטיבות | התחדשות";
const DESCRIPTION =
  "ממ״ד לבניין ישן הוא דילמה: בניינים מלפני 1992 דורשים בדיקת היתכנות. מדריך 2026 לארבעה פתרונות (ממ״ד, שיפור מיגון, ממ״ד יביל, התחדשות עירונית) ולמסלול הנכון.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "אילו בניינים נחשבים ישנים לעניין ממ״ד?",
    a: "בניינים שנבנו לפני 1992 בדרך כלל לא חויבו בממ״ד דירתי, ובהם הוספת ממ״ד מורכבת. תקנות הבנייה לפני 1992 לא דרשו תכנון לעמידה בעומסים נוספים, ולעיתים החומרים והשיטות אינם תואמים את הסטנדרטים הנוכחיים. בניינים מהשנים 1980-1992 בדרך כלל ניתנים לתוספת ממ״ד עם חיזוק מוגבל. בניינים מלפני 1980, ובמיוחד מ-1948 עד 1970, מצריכים בדיקה מקיפה.",
  },
  {
    q: "כמה עולה לבדוק היתכנות הנדסית?",
    a: "בדיקת היתכנות הנדסית בבניין ישן עולה בין 5,000 ל-15,000 ש&ldquo;ח, תלוי במורכבות. הבדיקה כוללת: סקירה של תיק הבניין במשרדי הוועדה המקומית, בדיקה ויזואלית במקום, חישוב קונסטרוקטיבי ראשוני, ובדיקת היתכנות תכנונית (זכויות בנייה, קווי בניין, גובה). הסכום הזה הוא השקעה הכרחית לפני קבלת החלטות, וחוסך הוצאות גדולות יותר אם הפרויקט מתברר כלא-אפשרי.",
  },
  {
    q: "האם יש פתרון אם לא ניתן לבנות ממ״ד תקני?",
    a: "כן. שלוש אלטרנטיבות עיקריות: שיפור מיגון לחדר קיים (חיזוק לרמת הגנה חלקית), ממ״ד יביל בחצר או בגג (יחידה ממוגנת ממפעל), או הצטרפות לפרויקט התחדשות עירונית (תמ״א 38 אם עדיין רלוונטי, או פינוי בינוי). הבחירה תלויה במצב הספציפי של הבניין, בגיל, ובאופי המתחם.",
  },
  {
    q: "מתי תמ״א 38 או פינוי בינוי הם הפתרון הנכון?",
    a: "אם הבניין שלכם בן 40 שנה ומעלה ובמתחם של 24 יחידות דיור ומעלה, פינוי בינוי הוא לעיתים הפתרון הכלכלי. במסגרת התחדשות עירונית מקבלים דירה חדשה גדולה יותר עם ממ״ד תקני, ללא תשלום ישיר. תמ״א 38 פוקעת ברוב המקומות במאי 2026, אז המסלול הזה כבר אינו זמין למרבית הבניינים. חלופת שקד היא חלופה לבניין בודד.",
  },
  {
    q: "כמה עולה ממ״ד בבניין ישן לעומת חדש?",
    a: "ממ״ד בבניין ישן עולה ב-25%-50% יותר מבניין חדש בשל מורכבות הביצוע. בבניין חדש (1992 ואילך) ממ״ד דירתי עולה 220,000-300,000 ש&ldquo;ח. בבניין ישן עלות נעה בין 280,000 ל-400,000 ש&ldquo;ח, בהתאם למצב הקונסטרוקציה. אם נדרש חיזוק קונסטרוקטיבי משמעותי, העלות עלולה להגיע ל-450,000 ש&ldquo;ח ומעלה. הסכום הזה בלתי הגיוני בבניין שגם ככה מועד להתחדשות.",
  },
  {
    q: "האם שיפור מיגון מספיק בבניין ישן?",
    a: "תלוי באזור מגורים ובאופי האיום. שיפור מיגון מספק הגנה מפני הדף, רסיסים, ופגיעה עקיפה. הוא לא מספק הגנה מפני פגיעה ישירה של פגז כבד או טיל מתקדם. באזורים שאינם בקו עימות הדוק, שיפור מיגון בדרך כלל מספיק. בקו עימות נדרש ממ״ד תקני או ממ״ד יביל. בכל מקרה, שיפור מיגון עדיף משמעותית על חוסר הגנה כלשהי.",
  },
  {
    q: "מה לעשות אם השכנים לא מסכימים?",
    a: "תלוי בסוג ההסכמה הנדרשת. אם מדובר בשינוי ברכוש המשותף או בקירות נושאים, נדרשת הסכמת רוב הדיירים לפי תקנון הבית המשותף. אם השכנים מסרבים, יש שתי אפשרויות: לבחור פתרון שאינו דורש הסכמתם (כמו שיפור מיגון בתוך הדירה), או לפנות למפקח על הבתים המשותפים במשרד המשפטים. במצבים מסוימים גם פנייה לבית משפט אפשרית, אך זה הליך ארוך ויקר.",
  },
  {
    q: "האם הבניין שלי מועד להתחדשות עירונית?",
    a: "תלוי בגיל הבניין, בגודלו, ובמתחם. בניינים בני 40+ שנה במתחם של 24 יחידות דיור ומעלה הם מועמדים טבעיים לפינוי בינוי. בניינים בודדים בני 30+ שנה היו מועמדים לתמ״א 38, אך התוכנית פוקעת במאי 2026. חלופת שקד היא תחליף לבניין בודד. כדאי להתייעץ עם חברה שמתמחה בהתחדשות עירונית לפני קבלת החלטה על השקעה משמעותית בממ״ד בבניין ישן.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="ממ״ד לבניין ישן 2026: האם אפשרי, מה האלטרנטיבות, ואיך מחליטים"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "ממ״ד", url: "/services/building-mamad" },
          { name: "ממ״ד לבניין ישן", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="ממ״ד · בניין ישן"
        title="ממ״ד לבניין ישן 2026: האם אפשרי, מה האלטרנטיבות, ואיך מחליטים"
        subtitle="מדריך 2026 לבעלי דירות בבניין מלפני 1992: בדיקת היתכנות הנדסית, ארבעה פתרונות מיגון, וההכרעה בין ממ״ד להתחדשות עירונית."
        crumbs={[
          { name: "ממ״ד", href: "/services/building-mamad" },
          { name: "בניין ישן", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              ממ״ד ל
              <Link
                href="/services/building-mamad"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                בניין ישן
              </Link>{" "}
              הוא דילמה מורכבת. בניין שנבנה לפני שנת 1992 בדרך כלל לא חויב בממ״ד דירתי, ובהם הוספה של ממ״ד דורשת חישוב היתכנות מקיף: מצב הקונסטרוקציה, יסודות, קירות נושאים. במקרים מסוימים הוספת ממ״ד דירתי אינה אפשרית, ויש לבחון פתרונות חלופיים: שיפור מיגון לחדר קיים, ממ״ד יביל, מסלול תמ״א 38, או פינוי בינוי במתחם של 24+ יחידות. מדריך זה עוזר להבין מה האפשרויות הקיימות לבעלי דירה בבניין ישן, ומה המסלול הנכון להחליט לפיו.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ezeh-yashanim" title='אילו בניינים נחשבים "ישנים"?'>
            <p>
              חוק התכנון והבנייה תוקן בשנת 1992 כך שהוא מחייב ממ״ד דירתי בכל דירה חדשה. בניינים שנבנו לפני 1992 לא חויבו בממ״ד, ולכן הם נחשבים &ldquo;ישנים&rdquo; בהקשר זה. אך לא כל בניין ישן זהה.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בניינים מ-1980 עד 1992.</strong> בנויים בסטנדרטים הנדסיים מוקדמים יחסית, אך עדיין סבירים. הוספת ממ״ד בדרך כלל אפשרית עם חיזוק קונסטרוקטיבי מוגבל.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בניינים מ-1970 עד 1980.</strong> סטנדרטים נמוכים יותר. עלולים לדרוש חיזוק קונסטרוקטיבי משמעותי. בדיקה הנדסית הכרחית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בניינים מ-1948 עד 1970.</strong> בנויים בשיטות שיכון ראשונות. בחלק מהמקרים הוספת ממ״ד אינה אפשרית קונסטרוקטיבית. אלו לעיתים מועמדים טובים לפינוי בינוי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בניינים מלפני 1948.</strong> בניינים היסטוריים. שינויים מוגבלים, ולעיתים הבניין מוגן כמורשת. ייעוץ עם וועדת השימור המקומית הוא הכרחי.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="lama-mesubechet" title="למה הוספת ממ״ד מורכבת בבניין ישן?">
            <p>
              ארבעה גורמים מרכזיים שמייקרים את הביצוע ומעמידים אתגרים שלא קיימים בבניינים חדשים.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">קונסטרוקציה לא מתוכננת לעומס.</strong> עמודי הבניין הישן תוכננו לעומס המקורי בלבד. תוספת ממ״ד שוקלת 15-25 טון, מה שעלול לדרוש חיזוק עמודים, יסודות, או תקרות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מצב היסודות.</strong> יסודות בבניינים ישנים עלולים להיות שטוחים או חסרי יכולת לשאת עומס נוסף. בדיקת מהנדס יסודות מצביעה אם נדרש חיזוק.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חומרי בנייה לא תקניים.</strong> בטון בבניינים ישנים לעיתים אינו עומד בסטנדרטים הנוכחיים מבחינת חוזק. בדיקה מעבדתית קובעת אם הוא מסוגל לשאת תוספת.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תכנון לא מתאים.</strong> דירות בבניינים ישנים לעיתים קטנות, ואין שטח להוסיף ממ״ד תקני (9-12 מ&ldquo;ר) בלי להקטין משמעותית את הדירה הקיימת.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="4-pitronot" title="4 פתרונות לבניין ישן">
            <p>
              ארבעה מסלולים שונים לבעלי דירות בבניין ישן. הבחירה תלויה במצב הבניין, בגודל המתחם, ובהיתכנות הכלכלית.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="ארבעה פתרונות מיגון לבניין ישן: השוואה לפי עלות, זמן, והיתכנות"
              columns={[
                { key: "alut", header: "טווח עלות לדייר" },
                { key: "zman", header: "זמן ביצוע" },
                { key: "haganah", header: "רמת הגנה" },
                { key: "matim", header: "מתי מתאים" },
              ]}
              rows={[
                {
                  label: "ממ״ד דירתי תקני",
                  cells: {
                    alut: '280,000-450,000 ש"ח',
                    zman: "6-10 חודשים",
                    haganah: "מקסימלית",
                    matim: "בניין מסוגל קונסטרוקטיבית, אין תוכנית התחדשות",
                  },
                },
                {
                  label: "שיפור מיגון לחדר קיים",
                  cells: {
                    alut: '80,000-150,000 ש"ח',
                    zman: "1-3 חודשים",
                    haganah: "חלקית",
                    matim: "ממ״ד תקני אינו אפשרי, פתרון מהיר",
                  },
                },
                {
                  label: "ממ״ד יביל",
                  cells: {
                    alut: '130,000-220,000 ש"ח',
                    zman: "2-4 חודשים",
                    haganah: "מקסימלית",
                    matim: "יש שטח חיצוני, מבנה לא מאפשר פנימי",
                  },
                },
                {
                  label: "פינוי בינוי / חלופת שקד",
                  cells: {
                    alut: 'ללא תשלום ישיר',
                    zman: "7-12 שנים",
                    haganah: "מקסימלית, דירה חדשה מלאה",
                    matim: "מתחם 24+ יחידות (פינוי בינוי) או בניין בודד (חלופת שקד)",
                  },
                },
              ]}
              footnote="טווחי המחירים הם הערכות שוק 2026 לבניינים ישנים. הסכומים גבוהים מבניינים חדשים בשל מורכבות הביצוע."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="bdikat-hetacanut" title="בדיקת היתכנות הנדסית: מה כוללת?">
            <p>
              לפני קבלת החלטה על מסלול, בדיקת היתכנות הנדסית מספקת תמונה ברורה. הבדיקה כוללת חמישה שלבים, ועלותה 5,000-15,000 ש&ldquo;ח.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">סקירת תיק הבניין.</strong> במשרדי הוועדה המקומית. כולל תוכניות מקוריות, היסטוריית שינויים, וזכויות בנייה זמינות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקה ויזואלית.</strong> מהנדס קונסטרוקציה מבקר בבניין, בודק סדקים, מצב חומרים, ומאפיינים חיצוניים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חישוב קונסטרוקטיבי ראשוני.</strong> חישוב יכולת הבניין לשאת את העומס הנוסף של ממ״ד (15-25 טון).
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת חומרים.</strong> לפעמים נדרשת בדיקה מעבדתית של בטון או ברזל קיים. הבדיקה לוקחת 2-4 שבועות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דוח מסכם.</strong> דוח כתוב עם מסקנות, המלצות, ועלויות צפויות. הדוח משמש בסיס להחלטה.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="aluyot-yashan" title="עלויות בבניין ישן: למה גבוהות יותר">
            <p>
              ממ״ד תקני בבניין ישן עולה ב-25%-50% יותר מבניין חדש. ההפרש נובע מארבעה גורמים נוספים שלא קיימים בבניין חדש.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">חיזוק קונסטרוקטיבי.</strong> 50,000-150,000 ש&ldquo;ח נוספים, תלוי במצב הבניין. כולל חיזוק עמודים, יסודות, ולעיתים תקרות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקות וחישובים מקדימים.</strong> 5,000-15,000 ש&ldquo;ח לבדיקה הנדסית מקיפה, ולעיתים בדיקות מעבדה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תיקוני נזק נלווים.</strong> בנייה בבניין ישן לעיתים חושפת בעיות נסתרות (סדקים, תשתיות פגומות), ועלות תיקונן מתווספת.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי דיירים.</strong> הפרעות לדיירים אחרים בבניין במהלך הביצוע (רעידות, רעש) לעיתים דורשות פיצוי כספי.
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
          <ContentSection id="metay-hitchadshut" title="מתי תמ״א 38 או פינוי בינוי הם הפתרון הנכון?">
            <p>
              במקום השקעה גדולה בממ״ד בבניין ישן, התחדשות עירונית עשויה להיות הפתרון הכלכלי. ההחלטה תלויה במספר גורמים.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">פינוי בינוי</strong> מתאים למתחמים של 24 יחידות דיור ומעלה. הדיירים מקבלים דירה חדשה גדולה יותר עם ממ״ד תקני, ללא תשלום ישיר. תהליך ארוך (7-12 שנים) אך התוצאה דירה חדשה מלאה. למידע מפורט ראו את המדריך על{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>
              .
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">תמ״א 38</strong> הייתה זמינה לבניין בודד, אך התוכנית פוקעת במאי 2026 ברוב הארץ. בניינים שלא נכנסו לתהליך עד אז לא יוכלו להשתמש במסלול הזה. <strong className="text-[var(--color-primary)]">חלופת שקד</strong> היא תחליף שמיועד לבניין בודד עם 80% הסכמה. מידע נוסף ב
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
            <p>
              חישוב כלכלי פשוט: אם השקעת 350,000 ש&ldquo;ח בממ״ד בבניין שמועד להתחדשות, הסכום עלול להיות בלתי משוחזר אם הבניין ייהרס בעוד 5-7 שנים. במקרים אלה כדאי לבחון את התחדשות עירונית כפתרון הכולל.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="shipur-migun-yashan" title="שיפור מיגון: מתי מספיק">
            <p>
              שיפור מיגון לחדר קיים הוא פתרון ביניים. הוא לא תחליף לממ״ד תקני, אך הוא מספק שיפור משמעותי לעומת חוסר הגנה כלשהי. שיפור מיגון מתאים בארבעה מצבים בבניינים ישנים.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">ממ״ד תקני אינו אפשרי קונסטרוקטיבית.</strong> במצב כזה שיפור מיגון הוא הפתרון העדיף, גם אם רמת ההגנה פחותה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תקציב מוגבל.</strong> 80,000-150,000 ש&ldquo;ח לעומת 280,000-450,000 ש&ldquo;ח לממ״ד תקני בבניין ישן.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פתרון זמני עד התחדשות.</strong> אם הבניין מועד לפינוי בינוי בעתיד הקרוב, שיפור מיגון מספק הגנה עכשווית בהשקעה מתונה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בניין מוגן כמורשת.</strong> בניינים היסטוריים לעיתים אינם מאפשרים תוספות בנייה, ושיפור מיגון פנימי הוא הפתרון היחידי.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shlavei-hachlata" title="שלבי החלטה ויישום">
            <p>
              שש שלבים מובנים בקבלת החלטה ובביצוע פרויקט מיגון בבניין ישן. ההיכרות איתם מאפשרת התקדמות מסודרת.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת היתכנות הנדסית.</strong> 4-8 שבועות, 5,000-15,000 ש&ldquo;ח. תוצאה: דוח שמסכם אפשרויות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בדיקת זכאות להתחדשות עירונית.</strong> ייעוץ עם חברה שמתמחה בפינוי בינוי. בודק אם המתחם מועמד.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בחירת מסלול.</strong> אסיפת דיירים. השוואת ארבעת המסלולים, וקבלת החלטה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תכנון מפורט.</strong> אדריכל מכין תוכניות לאחר בחירת המסלול.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רישוי ואישורים.</strong> 8-16 שבועות לאישורים בוועדה המקומית ובפיקוד העורף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ביצוע ומסירה.</strong> 2-10 חודשים בהתאם למסלול שנבחר.
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
              בניין ישן? בדקו את כל האפשרויות לפני שתשקיעו.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו חברת בנייה. תכנון, היתרים, ביצוע, הכל אצלנו. מלווים בעלי דירות בבניינים ישנים מבדיקת היתכנות ועד לביצוע, כולל ייעוץ אובייקטיבי על האפשרות של התחדשות עירונית במקום ממ״ד. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="ממ״ד לבניין ישן: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב הספציפי של הבניין שלכם ונציע את הפתרון המתאים."
            defaultService="mamad"
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="memad/binyan-yashan"
        targets={[
          "building-mamad",
          "room-reinforcement",
          "pinui-binui",
          "madrichim-shipur-migun",
          "hashvaa-migun-vs-pinui",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על ממ״ד לבניין ישן"
        tone="soft"
        includeSchema
      />
    </>
  );
}
