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
import { site } from "@/lib/site";

const PATH = "/madrichim/mechirat-dira-beyerusha";
const TITLE = "מכירת דירה בירושה 2026: מס שבח, צו ירושה ופטורים";
const DESCRIPTION =
  "ירשתם דירה ורוצים למכור? מדריך 2026: מה קורה עם מס שבח, איך מתחילים לפני צו ירושה, מה כשיש כמה יורשים, ולמי מוכרים דירת ירושה בלי להתרוצץ.";
const PUBLISHED_DATE = "2026-07-14";
const MODIFIED_DATE = "2026-07-14";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "ירשתי דירה עם האחים שלי ואנחנו רוצים למכור, מאיפה מתחילים?",
    a: "השלב הראשון הוא בירור מעמד היורשים: האם יש צו ירושה או צו קיום צוואה, ומי רשום או צריך להירשם כבעלים בטאבו. אחר כך היורשים יכולים להחליט יחד אם למכור את הדירה כמכירה משותפת, או לחתום קודם על הסכם חלוקת עיזבון שקובע מי מקבל מה. בשני המסלולים מומלץ ליווי של עורך דין מקרקעין מהשלב הראשון, כדי שההליך יתנהל בסדר מול הרשם לענייני ירושה ומול רשות המסים.",
  },
  {
    q: "אפשר למכור דירה ולהמשיך לגור בה?",
    a: "כן, במקרים מסוימים. למשל כאשר הורה מבוגר עדיין מתגורר בדירה ומעוניין להסדיר את מכירתה מראש, או כאשר יורש ממשיך לגור בדירה בזמן שההליכים המשפטיים מתקדמים. במסלול של מכירת דירה תפוסה, המוכר ממשיך לגור בדירה גם לאחר החתימה, בתנאים שסוכמו מראש בין הצדדים בהסכם. זו אפשרות שאנחנו עובדים לפיה, אך היא דורשת ניסוח מדויק בליווי עורך דין.",
  },
  {
    q: "מי קונה דירות ישנות בישראל?",
    a: "יש כמה סוגי קונים: משפחות שמחפשות דירה למגורים, משקיעים פרטיים, וגורמים שרוכשים במסלול ישיר כמו התחדשות בינוי ויזמות, שרוכשת דירות, בניינים ומגרשים ישירות וגם עובדת מול משקיעים המתעניינים בנכסים כאלה. לכל סוג קונה יתרונות שונים מבחינת מהירות הסגירה, גמישות בתנאים, והיכולת להתמודד עם דירות שדורשות בירור זכויות או שיפוץ.",
  },
  {
    q: "אפשר למכור דירת ירושה לפני שצו הירושה הושלם?",
    a: "בדרך כלל אפשר להתחיל בתהליך עוד לפני שהצו הושלם, כולל שיחות עם קונים פוטנציאליים והסכמות עקרוניות. השלמת העסקה בפועל, לרבות רישום העברת הבעלות, כפופה להשלמת צו הירושה או צו קיום הצוואה מהרשם לענייני ירושה או מבית המשפט לענייני משפחה, ולרישום הזכויות על שם היורשים. גורם שמוכן להתחיל בתהליך כבר בשלב הזה חוסך זמן יקר ליורשים.",
  },
  {
    q: "מי משלם מס שבח על מכירת דירת ירושה?",
    a: "היורש שמוכר את הדירה הוא זה שחייב בבדיקת מס שבח על עסקת המכירה, בכפוף לפטורים הקיימים בחוק. ירושת הדירה עצמה אינה עסקת מקרקעין וממילא אינה ממוסה במועד ההעברה מהמוריש ליורשים, לפי סעיף 4 לחוק מיסוי מקרקעין (שבח ורכישה), תשכ״ג-1963. מס שבח עשוי לחול רק בשלב מאוחר יותר, כשהיורש מוכר את הדירה, ובתנאים מסוימים חל פטור לפי סעיף 49ב(5) לאותו חוק. מומלץ להתייעץ עם רואה חשבון או עורך דין מיסוי מקרקעין לפני מכירה.",
  },
  {
    q: "מה זה הסכם חלוקת עיזבון ולמה צריך אותו?",
    a: "הסכם חלוקת עיזבון הוא הסכם בין היורשים שקובע מי מקבל איזה נכס מתוך העיזבון, כשיש יותר מנכס אחד או יותר מיורש אחד. כשמדובר בדירה יחידה בין כמה יורשים, ההסכם יכול לקבוע שאחד היורשים מקבל את הדירה תמורת פיצוי לאחרים, או שהדירה נמכרת לצד שלישי והתמורה מתחלקת ביניהם. ההסכם דורש הסכמה בין כל היורשים וליווי משפטי מסודר, ויש לו גם השלכות מיסוי שכדאי לבדוק מראש.",
  },
  {
    q: "מה קורה אם יורש אחד מתנגד למכירה?",
    a: "כשאין הסכמה בין היורשים, כל אחד מהם יכול לפנות לבית המשפט בבקשה לפירוק השיתוף בנכס, לרוב באמצעות מכירתו ופיצול התמורה בין השותפים לפי חלקיהם. זהו הליך משפטי שיכול לקחת זמן ולהיות כרוך בעלויות, ולכן ברוב המקרים עדיף לנסות להגיע להסכמה מסודרת בין היורשים לפני שפונים לערכאות. עורך דין מקרקעין שמכיר את הנושא יכול לעזור למצוא פתרון מוסכם.",
  },
  {
    q: "אפשר למכור רק את החלק שלי בדירת ירושה?",
    a: "מבחינה משפטית יורש יכול למכור את חלקו בדירה, אך בפועל קונים מעטים מעוניינים לרכוש חלק בלתי מסוים בנכס שבבעלות משותפת עם אנשים אחרים, ולכן השווי של מכירת חלק בלבד נמוך משמעותית ממכירת הדירה כולה. לרוב עדיף לתאם עם שאר היורשים מכירה משותפת של הדירה כולה, או הסכם שבו יורש אחד רוכש את חלקי האחרים. כל אפשרות דורשת בדיקה פרטנית מול עורך דין מקרקעין.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="מכירת דירה בירושה: מס שבח, צו ירושה, וכל הדרכים למכור"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "מכירת דירה בירושה", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריכים · ירושה ומכירת דירה"
        title="מכירת דירה בירושה: מס שבח, צו ירושה, וכל הדרכים למכור"
        subtitle="מדריך 2026 ליורשים שרוצים למכור דירה שירשו: שלבי הרישום, מס שבח ופטורים, מה עושים כשיש כמה יורשים, ולמי אפשר למכור בלי להתרוצץ."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "מכירת דירה בירושה", href: PATH },
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
              aria-labelledby="bekitzur-yerusha"
            >
              <h2 id="bekitzur-yerusha" className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-3">
                בקצרה: מכירת דירה שירשתם
              </h2>
              <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-0">
                ירושת דירה עצמה אינה עסקת מקרקעין ואינה ממוסה, אך מכירתה בהמשך עשויה
                לחייב במס שבח, בכפוף לפטור שקיים בתנאים מסוימים. אפשר להתחיל בתהליך
                המכירה עוד לפני שצו הירושה או צו קיום הצוואה הושלם. כשיש כמה יורשים,
                אפשר למכור יחד או להסדיר קודם הסכם חלוקת עיזבון. בהתחדשות בינוי ויזמות
                רוכשים דירות ירושה במסלול ישיר, וגם עובדים מול משקיעים שמתעניינים
                בנכסים כאלה.
              </p>
            </div>

            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              חשוב להבחין בין שלושה סוגי מדריכים שונים באתר. מדריך זה עוסק במכירת{" "}
              <strong className="text-[var(--color-primary)]">כל דירה שעברה בירושה</strong>,
              בכל מצב ובכל בניין. אם הדירה שירשתם נמצאת בבניין במתחם{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>{" "}
              ואתם שוקלים למכור אותה לפני שהפרויקט מסתיים, המדריך הרלוונטי הוא{" "}
              <Link
                href="/pinui-binui/mechirat-dira"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מכירת דירה לפני פינוי בינוי
              </Link>
              . ואם ירשתם דירה שכבר נמצאת בהסכם פינוי בינוי פעיל ואתם רוצים להבין את
              הזכויות שלכם בתוך הפרויקט עצמו, כולל מס שבח וסעיפי הסכם, המדריך המתאים
              הוא{" "}
              <Link
                href="/pinui-binui/yorshim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ירושה דירה בפינוי בינוי
              </Link>
              . המדריך שלפניכם עוסק בשאלה הכללית ביותר: איך מוכרים דירת ירושה, בכל
              מצב.
            </p>

            <p className="mt-4 text-[17px] text-[var(--color-ink)] leading-8">
              שאלה ראשונה שרוב היורשים שואלים: מה עם מס שבח? התשובה הקצרה היא שירושת
              הדירה עצמה אינה עסקה החייבת במס, ומכירה בהמשך עשויה להיות פטורה בתנאים
              מסוימים. כשיש כמה יורשים, אפשר למכור יחד או להסדיר ביניהם{" "}
              <Link
                href="#kama-yorshim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                הסכם חלוקת עיזבון
              </Link>
              . לפרטים המלאים, כולל האם אפשר להתחיל למכור עוד לפני צו הירושה, ראו
              בהמשך המדריך.
            </p>

            <p className="mt-5 text-[17px] text-[var(--color-ink)] leading-8">
              רוצים לדעת כמה שווה הדירה שירשתם, או לדבר עם מישהו לפני שמתחילים בתהליך?
              אפשר להתקשר ל
              <a
                href={`tel:${site.phoneDial}`}
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                {site.phone}
              </a>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hashlavim" title="השלבים: מצו ירושה עד רישום בטאבו">
            <p>
              לפני שדירה שעברה בירושה יכולה להימכר, היורשים צריכים לעבור כמה שלבי
              רישום. חלק מהשלבים אפשר להתחיל עוד לפני שההליך המשפטי הושלם, וחלק
              מחייבים להמתין לצו.
            </p>
            <ol className="mt-2 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">צו ירושה או צו קיום צוואה.</strong>{" "}
                אם המוריש הותיר צוואה, פונים לבית המשפט לענייני משפחה או לרשם לענייני
                ירושה בבקשה לצו קיום צוואה. אם אין צוואה, פונים בבקשה לצו ירושה, שקובע
                מי היורשים על פי חוק הירושה, תשכ״ה-1965.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רישום הזכויות בטאבו או ברשות מקרקעי ישראל.</strong>{" "}
                לאחר קבלת הצו, מגישים אותו לרישום כדי שהיורשים ירשמו כבעלים החדשים של
                הדירה, במקום המוריש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איסוף מסמכי הנכס.</strong>{" "}
                נסח טאבו עדכני, היתרי בנייה אם קיימים, אישורי מסים ותשלומי ארנונה, ומסמכי
                זיהוי של כל היורשים. חלק מהמסמכים אפשר וכדאי לאסוף כבר בשלב מוקדם.
              </li>
            </ol>
            <p className="mt-4">
              מה אפשר לעשות לפני שהצו הושלם, ומה חייב להמתין: הטבלה הבאה מסכמת את
              ההבחנה המרכזית.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="מה אפשר להתחיל לפני צו הירושה, ומה מחייב להמתין לו"
              columns={[{ key: "status", header: "מצב" }]}
              rows={[
                {
                  label: "בירור זהות היורשים ושיחה עם עורך דין מקרקעין",
                  cells: { status: "אפשר להתחיל מיד" },
                },
                {
                  label: "פנייה לקונים פוטנציאליים והסכמות עקרוניות על מחיר",
                  cells: { status: "אפשר להתחיל לפני השלמת הצו" },
                },
                {
                  label: "חתימה על חוזה מכר מחייב מול קונה",
                  cells: { status: "לרוב דורש רישום הערת אזהרה בכפוף לצו" },
                },
                {
                  label: "העברת הבעלות בפועל בטאבו לשם הקונה",
                  cells: { status: "מחייב השלמת הצו ורישום היורשים כבעלים" },
                },
              ]}
              footnote="הטבלה מסכמת את הקווים הכלליים. השלב המדויק שבו אפשר לחתום חוזה מחייב תלוי בנסיבות הספציפיות ובעמדת עורך הדין המלווה את העסקה."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="mas-shevach" title="מס שבח על דירת ירושה">
            <p>
              ירושה של דירה עצמה אינה עסקת מקרקעין וממילא אינה ממוסה במועד ההעברה
              מהמוריש ליורשים.{" "}
              <span className="text-sm text-[var(--color-muted)]">
                (מקור: סעיף 4 לחוק מיסוי מקרקעין (שבח ורכישה), תשכ״ג-1963, נבו.)
              </span>{" "}
              מס שבח עשוי לחול רק בשלב מאוחר יותר, כאשר היורש מוכר את הדירה שירש.
            </p>
            <p>
              במקרים מסוימים קיים פטור ממס שבח על מכירת דירת ירושה, לפי סעיף 49ב(5)
              לחוק מיסוי מקרקעין, בכפוף לתנאים מצטברים שקובע החוק, בין היתר לגבי זהות
              היורש (בן זוג, צאצא, או בן זוג של צאצא של המוריש) וזכאות המוריש לפטור
              אילו מכר את הדירה בעצמו לפני פטירתו.{" "}
              <span className="text-sm text-[var(--color-muted)]">
                (מקור: סעיף 49ב(5) לחוק מיסוי מקרקעין (שבח ורכישה), תשכ״ג-1963, נבו.)
              </span>{" "}
              בדיקת הזכאות לפטור היא פרטנית ותלויה בנתונים המדויקים של המקרה.
            </p>
            <p>
              כאשר יורש מוכר רק את חלקו בדירה, למשל אם החליט למכור את חלקו לאחד היורשים
              האחרים או לצד שלישי, חבות המס נבחנת לפי אותם עקרונות, ביחס לחלק הנמכר
              בלבד. גם כאן, הבדיקה תלויה בנסיבות הספציפיות.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              מידע זה אינו מהווה ייעוץ משפטי או מיסויי. מומלץ להתייעץ עם עורך דין
              מקרקעין ורואה חשבון לפני קבלת החלטות בנוגע למכירת דירת ירושה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="kama-yorshim" title="כמה יורשים, לא תמיד מסכימים">
            <p>
              כשדירה עוברת בירושה למספר יורשים, כל אחד מהם הופך לבעלים משותף בנכס.
              שלוש דרכים אפשריות להתקדם מכאן, ולא תמיד היורשים מסכימים על אותה דרך.
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מכירה משותפת.</strong> כל
                היורשים מוכרים את הדירה יחד לצד שלישי, והתמורה מתחלקת ביניהם לפי
                חלקיהם בירושה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הסכם חלוקת עיזבון.</strong>{" "}
                היורשים חותמים על הסכם שקובע מי מקבל מה מתוך העיזבון. אם יש נכס נוסף
                לצד הדירה, ההסכם יכול לקבוע שיורש אחד מקבל את הדירה ואחר מקבל נכס או
                סכום שווה ערך.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פירוק שיתוף.</strong> אם
                היורשים לא מגיעים להסכמה, כל אחד מהם רשאי לפנות לבית המשפט בבקשה
                לפירוק השיתוף בנכס, שברוב המקרים מתבצע באמצעות מכירתו וחלוקת התמורה.
              </li>
            </ul>
            <p className="mt-4">
              מה עושים כשיורש אחד מתנגד למכירה: קודם כול, כדאי לנסות להבין את הסיבה
              להתנגדות, בין אם היא כלכלית, רגשית, או קשורה לחוסר הסכמה על שווי הדירה.
              לעיתים ליווי של עורך דין ניטרלי, או קבלת הערכת שווי מקצועית ומוסכמת,
              פותרים את המחלוקת בלי צורך בהליך משפטי. כשההליך המשפטי הכרחי, פירוק
              השיתוף הוא הדרך המקובלת, אך הוא כרוך בזמן ובעלויות שכדאי לשקול מול
              האפשרות להגיע להסכמה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl mb-8">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              רוצים לבדוק כמה שווה דירת הירושה שלכם, או פשוט לשאול שאלה לפני שמתחילים?
              השאירו פרטים או התקשרו ל
              <a
                href={`tel:${site.phoneDial}`}
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                {site.phone}
              </a>
              .
            </p>
          </div>
          <SellerLeadForm defaultPropertyType="דירת ירושה" pageContext="madrichim-mechirat-dira-beyerusha" />
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="binyan-yashan" title="דירת ירושה בבניין ישן">
            <p>
              במקרים רבים, הדירה שעוברת בירושה נמצאת דווקא בבניין ותיק, ולפעמים בבניין
              שכבר נמצא במסלול התחדשות עירונית. במצב כזה יש שתי שאלות נפרדות שכדאי
              להבחין ביניהן.
            </p>
            <p>
              אם הבניין נמצא במתחם{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>{" "}
              אך עדיין לא נחתם הסכם עם דיירי הבניין, ואתם שוקלים אם למכור את הדירה
              עכשיו עם הפוטנציאל שהיא נושאת או לחכות לפרויקט, המדריך{" "}
              <Link
                href="/pinui-binui/mechirat-dira"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                מכירת דירה לפני פינוי בינוי
              </Link>{" "}
              מסביר איך מתומחר הפוטנציאל ולמי מוכרים.
            </p>
            <p>
              לעומת זאת, אם המוריש כבר היה צד להסכם פינוי בינוי בזמן פטירתו, או שהבניין
              כבר נמצא בתהליך פעיל עם הסכם חתום, השאלות שעולות שונות: מה קורה לזכויות
              שהיו למוריש, כולל זכויות גיל אם היו, ומה חשוב לעגן בהסכם בשם היורשים. את
              אלה מפרט המדריך{" "}
              <Link
                href="/pinui-binui/yorshim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ירושה דירה בפינוי בינוי
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="bli-lehitrotzetz" title="למכור בלי להתרוצץ">
            <p>
              יורשים שמחליטים למכור נתקלים לא פעם בתהליך מייגע: פרסום מודעה, סיורים עם
              קונים, וחוסר ודאות לגבי מי באמת רציני. בהתחדשות בינוי ויזמות התהליך שונה.
            </p>
            <ul className="mt-2 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">רכישה ישירה.</strong>{" "}
                רוכשים דירות, בניינים ומגרשים ישירות, כולל דירות שעברו בירושה,
                ללא צורך במסע חיפוש קונים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">עבודה מול משקיעים.</strong>{" "}
                לצד הרכישה הישירה, עובדים גם מול משקיעים המתעניינים בנכסים מסוג זה,
                כשזה מתאים למקרה הספציפי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רכישת דירה תפוסה.</strong>{" "}
                במקרים שבהם רוצים למכור אך יש צורך שהמוכר, או בן משפחה, ימשיך לגור
                בדירה לתקופה מסוימת, אפשר לבחון עסקה של דירה תפוסה, שבה המוכר ממשיך
                לגור בדירה גם לאחר החתימה, בתנאים שסוכמו מראש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">התחלת תהליך לפני צו הירושה.</strong>{" "}
                מוכנים להתחיל בבדיקת הנכס ובשיחות ראשוניות עוד לפני שצו הירושה או צו
                קיום הצוואה הושלם, כשההשלמה הסופית של העסקה כפופה כמובן להשלמת הצווים
                הנדרשים.
              </li>
            </ul>
            <p className="mt-4">
              לאורך כל התהליך, כל יורש או קבוצת יורשים מלווים בעורך דין מטעמם, עצמאי
              לגמרי מהצוות שלנו, שבודק את ההצעה ואת החוזה לפני חתימה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <TrustBlock
        publishedDate={PUBLISHED_DATE}
        modifiedDate={MODIFIED_DATE}
        source={{
          label: "חוק מיסוי מקרקעין (שבח ורכישה), נבו",
          url: "https://www.nevo.co.il/",
        }}
      />

      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
              ירשתם דירה ורוצים למכור? בואו נבדוק יחד מה השווי והאפשרויות.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו רוכשים דירות ירושה במסלול ישיר, ועובדים גם מול משקיעים. בדיקה
              ראשונית ללא עלות, ללא התחייבות.
            </p>
          </div>
          <SellerLeadForm defaultPropertyType="דירת ירושה" pageContext="madrichim-mechirat-dira-beyerusha" />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/mechirat-dira-beyerusha"
        targets={[
          "pinui-binui-mechirat-dira",
          "pinui-binui-yorshim",
          "madrichim-yorshim",
          "pinui-binui",
          "madrichim-hub",
          "contact",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על מכירת דירה בירושה"
        tone="soft"
        includeSchema
      />
    </>
  );
}
