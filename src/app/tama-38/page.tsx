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

const PATH = "/tama-38";
const TITLE = "תמ״א 38 ב-2026: פוקעת, מה לעשות עכשיו | התחדשות";
const DESCRIPTION =
  "תמ״א 38 פוקעת במאי 2026 ברוב הארץ. מדריך מלא: ההבדל בין 38/1 ל-38/2, האלטרנטיבות (חלופת שקד, פינוי בינוי), ומה לעשות אם אתם בתוך פרויקט.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל בין תמ״א 38/1 ל-תמ״א 38/2?",
    a: "תמ״א 38/1 היא חיזוק בניין קיים בלי הריסה: הבניין נשאר על מקומו ומחוזק נגד רעידות אדמה, עם תוספת אפשרית של יחידות דיור או שיפורים. הרוב הנדרש 66%. תמ״א 38/2 היא הריסה ובנייה מחדש של בניין יחיד. הרוב הנדרש 80%, עם תוספת משמעותית של יחידות דיור. תמ״א 38/2 הפכה למסלול מועדף על יזמים בגלל ההזדמנות לתוספת יחידות. שניהם פוקעים במאי 2026 ברוב הארץ.",
  },
  {
    q: "האם הפרויקט שלי ממשיך אחרי מאי 2026?",
    a: "תלוי בשלב שבו נמצא הפרויקט. אם קיבלתם היתר בנייה לפני מאי 2026, הפרויקט ממשיך לפי התוכנית המקורית. אם נחתם הסכם אך לא הוגש היתר, ייתכן שתצטרכו לעבור למסלול חלופי כמו חלופת שקד או פינוי בינוי. אם רק יש דיון ראשוני, ההמשך תלוי בלוח הזמנים של הוועדה המקומית. ייעוץ עם עורך דין מקרקעין שמכיר את הפרויקט הספציפי הוא הכרחי.",
  },
  {
    q: "מה אם רק יש הסכם ראשוני?",
    a: "הסכם ראשוני בלי היתר בנייה לפני מאי 2026 מצוי בסיכון. שלוש אפשרויות: למהר ולקדם את הוצאת ההיתר לפני הפוקעה (ייתכן בלוחות זמנים אגרסיביים), לעבור למסלול חלופי כמו חלופת שקד (במידה והבניין מתאים), או לבטל את ההסכם ולחשוב על אלטרנטיבות. כל אפשרות דורשת ייעוץ משפטי, מאחר שזכויות הדיירים תלויות בנוסח ההסכם הספציפי.",
  },
  {
    q: "מה האלטרנטיבה הכי טובה לתמ״א 38?",
    a: "תלוי בסוג הבניין. לבניין יחיד, חלופת שקד (תיקון 139 לחוק התכנון והבנייה) היא האלטרנטיבה הישירה. דורשת 80% הסכמה ומאפשרת חיזוק או הריסה ובנייה. למתחם של 24 יחידות ומעלה, פינוי בינוי הוא האלטרנטיבה. דורש 67% הסכמה לתביעה ו-100% לביצוע, ולוקח 7-12 שנים. ההחלטה תלויה בגודל המתחם, בהסכמת הדיירים, ובמצב הבניין הספציפי.",
  },
  {
    q: "האם חלופת שקד דומה לתמ״א 38?",
    a: "חלופת שקד (תיקון 139) היא ממשיכתה הישירה של תמ״א 38/2. היא מאפשרת חיזוק או הריסה ובנייה של בניין יחיד עם תוספת זכויות בנייה משמעותית, עד 400% משטח הבניין הקיים בתנאים מסוימים. הרוב הנדרש 80%, זהה לתמ״א 38/2. ההבדלים העיקריים: זכויות בנייה גמישות יותר, תהליך אישור שונה במקצת, ומסגרת רגולטורית עדכנית יותר. למידע מקיף ראו את המדריך על חלופת שקד.",
  },
  {
    q: "האם מותר ליזם לעצור פרויקט?",
    a: "תלוי בנוסח ההסכם. הסכם תמ״א 38 תקני כולל תנאים מפורשים לגבי כשלים והפרות. אם היזם נכשל לעמוד בלוח זמנים מסוים שמופיע בהסכם, הדיירים זכאים לתבוע פיצוי או לבטל את ההסכם. אם היזם מבקש לעצור מסיבות חיצוניות (פוקעת תמ״א 38, שינוי תקצוב), זה דורש הסכמה הדדית. ייעוץ משפטי דחוף הוא הכרחי במצב כזה.",
  },
  {
    q: "מה זכויות הדיירים ב-2026?",
    a: "זכויות הדיירים בפרויקטים פעילים נשמרות גם אחרי הפוקעה. הסכם תקף ממשיך, ערבויות בנקאיות נשארות בתוקף, וזכויות לדירת תמורה משתמרות. מה שמשתנה: לא ניתן יהיה להגיש בקשות חדשות במסגרת תמ״א 38 אחרי מאי 2026. דיירים בפרויקטים פעילים נמצאים במצב מוגן יחסית, אך כדאי לוודא שכל המסמכים מסודרים ושהיזם עומד בכל ההתחייבויות.",
  },
  {
    q: "האם יש פיצוי על פוקעה?",
    a: "אין פיצוי אוטומטי. הפוקעה היא רגולטורית, לא פגיעה ספציפית בבעלי דירות. דיירים שחתמו על הסכם והפרויקט לא יוצא לפועל בגלל הפוקעה זכאים לפי תנאי ההסכם הספציפי שלהם. במצבים מסוימים, ההסכם כולל סעיף שמכסה תרחיש זה. במצבים אחרים, הדיירים יכולים לתבוע את היזם בעילה של הפרת חוזה אם היזם לא פעל בלוח זמנים סביר. ייעוץ משפטי הוא הכרחי.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="תמ״א 38 בישראל 2026: סוף תוכנית המתאר, מה השתנה, ומה הלאה"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb items={[{ name: "תמ״א 38", url: PATH }]} />

      <PageHero
        eyebrow="התחדשות עירונית"
        title="תמ״א 38 בישראל 2026: סוף תוכנית המתאר, מה השתנה, ומה הלאה"
        subtitle="מדריך מלא 2026: היסטוריה, ההבדל בין 38/1 ל-38/2, מצב הפרויקטים הקיימים, האלטרנטיבות, ולוח הזמנים של הפוקעה."
        crumbs={[{ name: "תמ״א 38", href: PATH }]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              תמ״א 38 היא תוכנית מתאר ארצית שאושרה בישראל בשנת 2005, שמטרתה הייתה חיזוק מבנים ישנים מפני רעידות אדמה. במהלך השנים התוכנית הוארכה מספר פעמים, ופוקעת סופית במאי 2026 ברוב הארץ. פרויקטים שכבר קיבלו היתר בנייה ממשיכים, אך פרויקטים שלא צריכים מסלול חלופי כמו{" "}
              <Link
                href="/chalufat-shaked"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                חלופת שקד
              </Link>
              {" "}או{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>
              . מדריך זה מסביר את ההיסטוריה, ההבדל בין תמ״א 38/1 ל-38/2, מה קורה לפרויקטים פעילים ב-2026, והאלטרנטיבות שעומדות לבעלי דירות בישראל.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="historia" title="היסטוריית תמ״א 38: מ-2005 ועד 2026">
            <p>
              תמ״א 38 (תוכנית מתאר ארצית 38) אושרה בשנת 2005 על ידי המועצה הארצית לתכנון ובנייה. המטרה הייתה אחת: לחזק את המבנים הישנים בישראל מפני רעידות אדמה, מבלי להמתין לפרויקטים מתחמיים גדולים שלוקחים שנים ארוכות.
            </p>
            <p>
              במהלך השנים, התוכנית עברה שינויים משמעותיים. תמ״א 38/1 התמקדה בחיזוק קיים. תמ״א 38/2 הוסיפה את האפשרות של הריסה ובנייה מחדש. בשני המסלולים היזם קיבל זכויות בנייה נוספות בתמורה לחיזוק הבניין, מה שהפך את התוכנית לכלכלית.
            </p>
            <p>
              ב-2024 הוכרז שתמ״א 38 לא תוארך עוד. התוכנית פוקעת סופית במאי 2026 ברוב הארץ. הסיבות העיקריות: עיוותים כלכליים שנוצרו, פערי תכנון בין רשויות, וחיפוש מסגרת חוקית עדכנית. במקום תמ״א 38, נכנסה לתוקף חלופת שקד (תיקון 139 לחוק התכנון והבנייה).
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hevdel" title="מה ההבדל בין 38/1 ל-38/2?">
            <p>
              שני מסלולים שונים, רוב נדרש שונה, ויעד שונה. ההבחנה הזאת היא ליבת ההבנה של תמ״א 38.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="תמ״א 38/1 לעומת תמ״א 38/2: השוואה לפי היקף, רוב, וזמן"
              columns={[
                { key: "scope", header: "היקף" },
                { key: "majority", header: "רוב נדרש" },
                { key: "duration", header: "זמן ביצוע" },
                { key: "yitron", header: "יתרון מרכזי" },
                { key: "chiseron", header: "חיסרון מרכזי" },
              ]}
              rows={[
                {
                  label: "תמ״א 38/1 (חיזוק)",
                  cells: {
                    scope: "חיזוק קיים, ללא הריסה",
                    majority: "66%",
                    duration: "3-5 שנים",
                    yitron: "הדיירים נשארים בבית, פגיעה מינימלית",
                    chiseron: "פחות תוספת דירות, רווח יזם נמוך",
                  },
                },
                {
                  label: "תמ״א 38/2 (הריסה ובנייה)",
                  cells: {
                    scope: "הריסה ובנייה מחדש",
                    majority: "80%",
                    duration: "5-8 שנים",
                    yitron: "דירה חדשה לחלוטין, תוספת מ״ר משמעותית",
                    chiseron: "פינוי לתקופת ביניים, רוב גבוה נדרש",
                  },
                },
              ]}
              footnote="שני המסלולים פוקעים במאי 2026 ברוב הארץ. פרויקטים פעילים עם היתר ממשיכים."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="lama-pokaat" title="למה תמ״א 38 פוקעת?">
            <p>
              ההחלטה שלא להאריך את תמ״א 38 הגיעה אחרי שנים של עיוותים כלכליים שצברה התוכנית. שלוש בעיות מרכזיות:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">עיוותי שוק.</strong> תמ״א 38/2 הפכה רווחית מאוד ליזמים בערים מסוימות, ולא רווחית כלל באחרות. בערי המרכז ההזדמנות הייתה גדולה. בפריפריה הפרויקטים תקעו.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פערי תכנון.</strong> תמ״א 38 הייתה תוכנית מתאר ארצית, אבל הביצוע היה ברמת הוועדה המקומית. פערים בין רשויות יצרו אי-ודאות לדיירים וליזמים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תוכנית זמנית הפכה קבועה.</strong> תמ״א 38 הייתה במקור הוראת שעה ל-5 שנים. הוארכה שוב ושוב במשך 20 שנה. ההחלטה לסגור אותה ולעבור למסגרת חוקית מסודרת (תיקון 139, חלופת שקד) הגיעה כדי ליצור יציבות רגולטורית.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="projektim-peilim" title="מה קורה לפרויקטים פעילים ב-2026?">
            <p>
              פרויקטים פעילים מתחלקים לשלוש קטגוריות, כל אחת עם דין שונה:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">פרויקטים עם היתר בנייה.</strong> ממשיכים לפי התוכנית. הפוקעה לא משפיעה. ההיתר תקף בתקופה שמופיעה בהיתר עצמו, בדרך כלל 3 שנים מהוצאתו, ניתן להאריך.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פרויקטים עם הסכם אך ללא היתר.</strong> מצב סיכון. אם ההיתר לא יוצא לפני מאי 2026, ייתכן שהפרויקט יצטרך לעבור למסלול חלופי. ייעוץ משפטי דחוף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דיון ראשוני בלבד.</strong> ההסתברות שהפרויקט ימשיך כתמ״א 38 נמוכה. עדיף להעביר ישירות לחלופת שקד או לפינוי בינוי, בהתאם לסוג הבניין.
              </li>
            </ol>
            <p>
              למידע מפורט על המצב של הפרויקטים, ראו את המדריך על{" "}
              <Link
                href="/tama-38/pkia-2026"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמ״א 38 פוקעת
              </Link>
              {" "}שמסביר את לוח הזמנים המדויק ואת הצעדים הנדרשים.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="alternatives" title="3 האלטרנטיבות החדשות">
            <p>
              לבעלי דירות שלא הספיקו להיכנס לתמ״א 38 לפני הפוקעה, או לפרויקטים שלא יצא להם להוציא היתר, יש שלוש אפשרויות עיקריות:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">תמ״א 38 → חלופת שקד.</strong> תיקון 139 לחוק התכנון והבנייה הוא ממשיכה הישירה של תמ״א 38/2. דורש 80% הסכמה. מאפשר תוספת זכויות בנייה משמעותית. למידע מקיף ראו את המדריך על{" "}
                <Link
                  href="/chalufat-shaked"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  חלופת שקד
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תמ״א 38 → פינוי בינוי.</strong> אם הבניין שלכם נמצא במתחם של 24 יחידות ומעלה, פינוי בינוי הוא האלטרנטיבה הטבעית. דורש 67% הסכמה לתביעה. תהליך ארוך 7-12 שנים. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  פינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שמירה במצב קיים.</strong> אופציה לגיטימית: לא להיכנס לאף מסלול, ולשמור על הבית כפי שהוא. רלוונטי במיוחד אם הבית בסטנדרט סביר ואין צורך בחיזוק או בנייה מחדש.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="zechuyot" title="זכויות הדיירים ב-2026">
            <p>
              זכויות הדיירים בפרויקטים פעילים נשמרות גם אחרי הפוקעה. שלוש נקודות מרכזיות:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">הסכמים תקפים נשארים תקפים.</strong> חוזה תמ״א 38 חתום עם יזם ממשיך להיות מחייב גם אחרי מאי 2026, לפי תנאיו המקוריים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבויות בנקאיות נשארות בתוקף.</strong> ערבויות שהונפקו לפני הפוקעה ממשיכות להגן על הדיירים. גם אחרי מאי 2026, היזם מחויב לתנאי הערבות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכויות לדירת תמורה משתמרות.</strong> הזכות לדירה החדשה לפי ההסכם נשארת. אם היזם נכשל, הדיירים יכולים לתבוע פיצוי.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="luach-zmanim" title="לוח זמנים של הפוקעה">
            <p>
              ארבע נקודות זמן קריטיות בלוח הזמנים של הפוקעה:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">עכשיו עד דצמבר 2025.</strong> חלון אחרון להגשת בקשות חדשות לתמ״א 38. מי שמתחיל עכשיו צריך לעבוד בלוח זמנים אגרסיבי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ינואר 2026 עד אפריל 2026.</strong> תקופת מעבר. הוועדות המקומיות מסיימות לטפל בבקשות פתוחות. בקשות חדשות לרוב כבר לא מתקבלות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מאי 2026.</strong> פוקעה רשמית. אין יותר בקשות חדשות במסגרת תמ״א 38.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לאחר מאי 2026.</strong> רק פרויקטים עם היתר תקף ממשיכים. כל פרויקט חדש מתבצע במסגרת חלופת שקד או פינוי בינוי.
              </li>
            </ul>
            <p>
              עיון נוסף על מסגרת הרגולציה זמין ב
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              {" "}ובמאגרי החוק כמו{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                תוכנית מתאר ארצית 38
              </a>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="2026-checklist" title="שאלות ל-2026: מה צריך לבדוק עכשיו">
            <p>
              חמש שאלות שכל דייר בפרויקט פעיל צריך לשאול את עצמו או את עורך הדין שלו:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">האם יש היתר בנייה?</strong> הפרמטר היחיד שבעצם קובע אם הפרויקט ממשיך אחרי מאי 2026.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה תוקף ההיתר?</strong> אם יש היתר, מתי הוא פוקע. ניתן להאריך, אך נדרש פעולה אקטיבית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה הסטטוס של הערבויות?</strong> ערבויות בנקאיות תקניות צריכות להיות בתוקף לכל אורך הפרויקט. בדיקה רטרואקטיבית עם הבנק המנפיק.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה ההסכם אומר על תרחיש פוקעה?</strong> חלק מההסכמים כוללים סעיפים שמטפלים בפוקעת התוכנית. בדיקה מדוקדקת של הסעיף.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מי מטפל מול הוועדה המקומית?</strong> בתקופת המעבר, תיאום מול הוועדה הוא קריטי. עורך דין מקרקעין שמכיר את הפרויקט הוא הדמות הנכונה.
              </li>
            </ol>
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
              פרויקט תמ״א 38 פעיל? בדקו את הסטטוס לפני הפוקעה.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים דיירים בהבנת הסטטוס של הפרויקט שלהם וייעוץ על אלטרנטיבות. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="תמ״א 38 ב-2026: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המצב של הפרויקט שלכם ונציג את האפשרויות."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="tama-38/pillar"
        targets={[
          "pinui-binui",
          "pinui-binui-kshishim",
          "madrichim-sof-tama",
          "hashvaa-pinui-vs-tama",
          "hashvaa-shaked-vs-tama",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על תמ״א 38 ב-2026"
        tone="soft"
        includeSchema
      />
    </>
  );
}
