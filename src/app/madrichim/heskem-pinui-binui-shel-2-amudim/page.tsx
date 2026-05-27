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

const PATH = "/madrichim/heskem-pinui-binui-shel-2-amudim";
const TITLE = "הסכם פינוי בינוי: מפה ל-12 פרקים | התחדשות";
const DESCRIPTION =
  "הסכם פינוי בינוי הוא מסמך 60-100 עמודים. מדריך זה הופך אותו לשקוף: 12 פרקים, מה כל פרק עושה, סעיפים שלא מוותרים עליהם, וסעיפים שמסכנים אתכם.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "כמה עמודים יש בהסכם פינוי בינוי טיפוסי?",
    a: "60-100 עמודים בהסכם סטנדרטי, כולל נספחים. הסכם בלי נספחים בדרך כלל 35-50 עמודים. הסכמים במתחמים גדולים (200+ יחידות) מגיעים ל-150 עמודים. מסמך קצר מ-30 עמודים הוא דגל אדום: הסכם רציני לא יכול להיות קצר. ההסכם נחתם לפי חוק הסכמים מסחריים, חוק התכנון והבנייה, וחוק המכר 1973 בכל מה שנוגע לערבויות.",
  },
  {
    q: "מי בודק את ההסכם לפני חתימה?",
    a: "עורך דין דיירים שמייצג את הנציגות (לא את היזם). חובה. עלות סטנדרטית: 15,000-30,000 ש״ח לבדיקה ולמשא ומתן. במתחם של 50 דירות, החלוקה לדייר היא 300-600 ש״ח. השקעה זו היא בלתי משתלמת לוותר עליה. עורך דין יזם תמיד יציג ניסוחים שמטיבים עם היזם. תפקיד עורך דין דיירים לאזן.",
  },
  {
    q: "איזה פרק הכי חשוב בהסכם?",
    a: "פרק התמורות (פרק 4 בדרך כלל). מגדיר את גודל הדירה החדשה, חניה, מחסן, פיצוי כספי, שכר דירה חלופי, ולוח זמנים למסירה. כל סטייה כאן מהציפיות עולה לדייר עשרות אלפי שקלים. אחרי פרק התמורות, פרק הערבויות (פרק 7-8) הוא הקריטי הבא. ראו את המדריכים על תמורות וערבויות.",
  },
  {
    q: "איזה סעיפים אסור לוותר עליהם?",
    a: "שמונה סעיפים: (1) ערבות חוק מכר תקנית, (2) ערבות בנקאית למסירה, (3) שכר דירה חלופי לתקופת הביניים, (4) פיצוי כספי על איחור היזם, (5) זכות יציאה במקרה של אי-עמידה בלוחות זמנים, (6) הגנות לקשישים, (7) סעיף הפסקת חוזה במקרה של פירוק, (8) זכות העברה ליורשים. אם אחד חסר, לא חותמים.",
  },
  {
    q: "מהם הסעיפים המסוכנים ביותר בהסכם?",
    a: "ארבעה סעיפים שדורשים תיקון או הסרה: (1) זכות פינוי מוקדמת ליזם בלי תמורה ראויה, (2) ערבויות שמתפקעות לפני המסירה, (3) פיצוי איחור סמלי בלבד (פחות מ-3,000 ש״ח לחודש), (4) סעיף שמחייב את הדיירים לחתום על תוכנית בנייה ספציפית בלי זכות התנגדות. עורך דין מנוסה זיהה את אלה במאות הסכמים.",
  },
  {
    q: "כמה זמן לוקח לעבור על ההסכם?",
    a: "30-45 ימים. שבועיים לעורך דין הדיירים לקרוא ולנסח הערות. שבועיים-שלושה למשא ומתן עם עורך דין היזם. שבוע אחרון לסיכום ולהכנה לחתימה. הסכם שעובר תוך 7 ימים ללא הערות הוא דגל אדום: סימן לעורך דין שלא קרא לעומק. המהירות יוצרת טעויות יקרות.",
  },
  {
    q: "האם ניתן לתקן הסכם אחרי חתימה?",
    a: "תיקון בסיכום ובהסכמה (תוספת להסכם, Addendum) אפשרי בכל עת. תיקון חד-צדדי לא. הוספת Addendum דורשת אסיפת דיירים מאושרת ובהסכמת היזם. תיקונים נפוצים: עדכון מועדים, שינוי תוכנית בנייה, התאמה לשינויי רגולציה. הוצאות עורך דין לתיקון: 5,000-10,000 ש״ח. ייעוץ עם עורך דין לפני הסכמה לתיקון הוא הכרחי.",
  },
  {
    q: "מה קורה אם הנציגות לא מסכימה על הסעיפים?",
    a: "פרוטוקול אסיפת דיירים מתעד את הוויכוח. החלטות מתקבלות ברוב פשוט (50%+1) של בעלי דירות שהשתתפו, אלא אם תקנון הנציגות דורש רוב גבוה יותר. אם אין רוב, הסעיף נדחה ועובר למשא ומתן חדש עם היזם. עורך דין מנוסה מציע פשרות שמרצות את הצדדים. בעיות מתמשכות עוברות לבוררות.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="הסכם פינוי בינוי: מפה ל-12 פרקים"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "הסכם פינוי בינוי", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · בדיקת חוזה"
        title="הסכם פינוי בינוי: מפה ל-12 פרקים"
        subtitle="60-100 עמודים, 12 פרקים, אלפי סעיפים. מדריך זה הופך הסכם פינוי בינוי לשקוף: מה כל פרק עושה, סעיפים שלא מוותרים עליהם, ודגלים אדומים."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "הסכם פינוי בינוי", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <div className="rounded-2xl border-2 border-[var(--color-accent)]/30 bg-[var(--color-soft)] p-6 md:p-7 mb-6">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-3">
                תשובה מהירה
              </div>
              <p className="text-[17px] text-[var(--color-ink)] leading-8 m-0">
                <strong>הסכם פינוי בינוי טיפוסי בישראל ב-2026 הוא מסמך של 60-100 עמודים המחולק ל-12 פרקים:</strong> הגדרות (פרק 1), הצדדים (2), המתחם (3), התמורות (4), לוח זמנים (5), חובות הדיירים (6), חובות היזם (7), ערבויות (8), הוראות מיוחדות לקשישים ויורשים (9), הפרת חוזה (10), הוראות כלליות (11), נספחים (12). פרק התמורות (4) ופרק הערבויות (8) הם הקריטיים. בדיקה על ידי עורך דין דיירים: 30-45 ימים, עלות 15,000-30,000 ש״ח לכלל המתחם.
              </p>
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              לכל פרק יש מטרה משפטית, סעיפים סטנדרטיים, ואזורי סיכון. מאמר זה הוא מפה: מה לחפש בכל פרק, מה לדרוש, ומה לסרב. אין תחליף לעורך דין דיירים מנוסה, אבל הבנה של מה הוא בודק היא תנאי לעבודה משותפת יעילה. למסגרת רחבה יותר ראו את המדריך על{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-zo" title="הסכם פינוי בינוי הוא חוזה מסחרי מורכב">
            <p>
              הסכם פינוי בינוי הוא חוזה רב-צדדי בין יזם לבין כל בעלי הדירות במתחם. הוא נחתם תחת חוק החוזים 1973 (חוק כללי), חוק התכנון והבנייה (לעניין רוב נדרש ותביעת סרבן לפי תיקון 80), וחוק המכר 1973 (לעניין ערבויות לרוכשי דירות מקבלן). בנוסף, ההסכם כפוף לתקנות הרשות הממשלתית להתחדשות עירונית (gov.il/he/departments/topics/urban_renewal).
            </p>
            <p>
              ההסכם מבחין בין שלוש שכבות: השכבה החוזית (כללי החוזה בין הצדדים), השכבה הקניינית (העברת זכויות במקרקעין), והשכבה הרגולטורית (תאימות להוראות החוק). פרק כלשהו שלא מטפל בכל השכבות הוא לקוי. עורך דין דיירים מנוסה זיהה את הכשלים האלה ב-90% מההסכמים שעוברים בפניו לבדיקה ראשונה, ואז מתקן.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="prakim-1-3" title="פרקים 1-3: הגדרות, צדדים, מתחם">
            <ol className="mt-4 space-y-4 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">פרק 1: הגדרות (5-12 עמודים).</strong> מגדיר 30-60 מונחים: &ldquo;דירה&rdquo;, &ldquo;מתחם&rdquo;, &ldquo;יזם&rdquo;, &ldquo;תוכנית&rdquo;, &ldquo;היתר&rdquo;, &ldquo;מסירה&rdquo;, &ldquo;תקופת ביניים&rdquo;, &ldquo;ערבות&rdquo;. מה לבדוק: כל הגדרה ברורה ולא דו-משמעית. דגל אדום: הגדרות עמומות שמאפשרות פרשנות חד-צדדית של היזם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פרק 2: הצדדים (2-4 עמודים).</strong> מזהה את היזם (ח״פ, כתובת, מורשי חתימה) ואת בעלי הדירות (רשימה מלאה עם מספרי תעודת זהות וגוש/חלקה). מה לבדוק: רישום ח״פ עדכני (data.gov.il), אישור חתימה תקף. דגל אדום: יזם רושם חברה בת חדשה רק לצורך הפרויקט בלי איתנות פיננסית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פרק 3: המתחם (4-8 עמודים).</strong> מזהה את הנכסים הכלולים בפרויקט: כתובות, מספרי גוש/חלקה, שטח קיים, זכויות בנייה. כולל מפת מתחם ונספח קדסטרי. מה לבדוק: כל הדירות הקיימות מופיעות, אין כפילויות. דגל אדום: בעלי דירות שלא חתמו לא מופיעים. סימן לבעיה ברוב הנדרש.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="prek-4" title="פרק 4: התמורות (הקריטי ביותר, 10-25 עמודים)">
            <p>
              פרק זה מגדיר מה כל בעל דירה מקבל. סטיות הן יקרות. דרישות מינימליות:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">דירה חדשה.</strong> גודל מוגדר במ״ר נטו (לא ברוטו), בנוסף תוספת של 25-35 מ״ר במרכז הארץ. למסגרת מלאה ראו את{" "}
                <Link
                  href="/pinui-binui/temurot"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  תמורות בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חניה צמודה.</strong> חניה אחת לפחות, צמודה לדירה (לא מרחק רחוק). חניה כפולה במקרים מיוחדים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מחסן.</strong> מחסן מינימום 4 מ״ר, בקומה זמינה (לא במרתף עם בעיות נגישות).
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי כספי.</strong> 100,000-300,000 ש״ח (תלוי במיקום, גודל, מצב הדירה הקיימת). תשלום בשלבים: 30% בחתימה, 50% בהריסה, 20% במסירה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שכר דירה חלופי.</strong> לכל תקופת הביניים (30-42 חודשים בדרך כלל). סכום מותאם לשכר דירה ריאלי באזור (לא נמוך מהשוק). תשלום מראש לכל רבעון.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סטנדרט בנייה.</strong> רמת גמר מוגדרת בנספח טכני: ריצוף, בידוד, חלונות, מטבח, חדרי שירותים. ללא הגדרה, היזם יבחר את הזול ביותר.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="prek-5" title="פרק 5: לוח זמנים (3-7 עמודים)">
            <p>
              מגדיר תאריכי יעד ברורים לכל שלב. כולל סנקציות על איחור.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li><strong className="text-[var(--color-primary)]">חתימת הסכם:</strong> תאריך יעד.</li>
              <li><strong className="text-[var(--color-primary)]">קבלת אישור תכנון:</strong> 30-48 חודשים מהחתימה.</li>
              <li><strong className="text-[var(--color-primary)]">הוצאת היתר בנייה:</strong> 12-24 חודשים מהאישור.</li>
              <li><strong className="text-[var(--color-primary)]">תחילת פינוי:</strong> 60-90 ימים מהיתר.</li>
              <li><strong className="text-[var(--color-primary)]">תחילת בנייה:</strong> 60 ימים מהפינוי.</li>
              <li><strong className="text-[var(--color-primary)]">מסירה:</strong> 24-36 חודשים מתחילת הבנייה.</li>
            </ul>
            <p>
              סנקציות על איחור: 5,000-15,000 ש״ח לחודש לדירה, הארכת ערבויות אוטומטית, תוספת לשכר הדירה החלופי. ללא סנקציות, היזם לא נדחק. למידע מקיף על משכי זמן ראו את המדריך על{" "}
              <Link
                href="/madrichim/luach-zmanim-pinui-binui-2026"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                לוח זמנים פינוי בינוי
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="prakim-6-7" title="פרקים 6-7: חובות דיירים, חובות יזם (5-15 עמודים)">
            <ol start={6} className="mt-4 space-y-4 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">פרק 6: חובות הדיירים.</strong> מגדיר מה הדיירים מתחייבים: חתימה על מסמכים נוספים שיידרשו, פינוי הדירה במועד, אי-מכירת הדירה ללא הסכמת היזם, הסכמה לתוכניות בנייה. מה לבדוק: כל חובה מוגבלת בזמן או באירוע. דגל אדום: חובות פתוחות בלי גבולות (&ldquo;כל מה שהיזם יבקש&rdquo;).
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פרק 7: חובות היזם.</strong> מגדיר מה היזם מתחייב: ביצוע במועד, איכות, ערבויות, ביטוח, ניקיון, התקשרות עם קבלן רשום. מה לבדוק: כל חובה מוגדרת מבחינת מדידה (מ״ר, תאריך, סכום). דגל אדום: חובות &ldquo;רכות&rdquo; כמו &ldquo;לעשות מאמץ סביר&rdquo;.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="prek-8" title="פרק 8: ערבויות (הביטחון של הדיירים, 8-15 עמודים)">
            <p>
              פרק זה מגן על הדיירים אם היזם נכשל. סעיפים מינימליים:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">ערבות חוק מכר.</strong> נדרשת לפי חוק המכר 1973, סעיף 2א. סכום שווה לפיצוי הכספי המובטח. זמן תוקף: עד מסירת הדירה החדשה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבות בנקאית למסירה.</strong> 5-10% מערך הדירה החדשה. מבטיחה תיקון ליקויים בתקופת בדק.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבות על שכר דירה חלופי.</strong> לכל תקופת הביניים. אם היזם מאחר, הערבות משולמת.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבויות על שלבי בנייה.</strong> ערבות לכל שלב: חתימה, פינוי, יציקת יסודות, גמר שלד, גמר. לפי חוק המכר.
              </li>
            </ul>
            <p>
              דגל אדום קריטי: ערבויות &ldquo;תאגידיות&rdquo; של חברה בת של היזם במקום ערבויות בנקאיות אמיתיות. למידע על סוגי ערבויות ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/eravut"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ערבויות בפינוי בינוי
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="prek-9" title="פרק 9: הוראות מיוחדות (5-10 עמודים)">
            <p>
              סעיפים שמגנים על אוכלוסיות פגיעות.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">קשישים.</strong> זכות לדירה חליפית בקומה נמוכה (1-3), זכות לאופציה במקום דירה חדשה. נדרש לפי תיקון 80. ראו את{" "}
                <Link
                  href="/pinui-binui/kshishim"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  זכויות קשישים בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יורשים.</strong> זכות העברה ליורשים במקרה של פטירה במהלך הפרויקט. ראו את{" "}
                <Link
                  href="/pinui-binui/yorshim"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  ירושה דירה בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דיירים בעלי מוגבלות.</strong> דירה מותאמת נגישות לפי חוק שוויון זכויות לאנשים עם מוגבלות.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="prakim-10-12" title="פרקים 10-12: הפרה, הוראות כלליות, נספחים">
            <ol start={10} className="mt-4 space-y-4 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">פרק 10: הפרת חוזה (3-7 עמודים).</strong> מגדיר מה נחשב הפרה (איחור, אי-תשלום, אי-עמידה בסטנדרט), ומה הסעדים. מה לבדוק: סעדים סימטריים, כלומר היזם והדיירים זוכים לפיצוי דומה במקרה של הפרה הדדית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פרק 11: הוראות כלליות (3-5 עמודים).</strong> כללי פרשנות, סמכות שיפוט (בית משפט מחוזי במחוז המתאים), שינויים, סודיות, וויתור. מה לבדוק: סעיפי וויתור לא מבטלים זכויות יסוד של הדיירים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פרק 12: נספחים (10-30 עמודים).</strong> מפת מתחם, תוכנית בנייה ראשונית, נספח טכני (סטנדרט גמר), נוסח ערבויות, רשימת בעלי דירות וחתימות. מה לבדוק: כל נספח מוזכר בגוף ההסכם, וכל נספח חתום וצמוד.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="dugma" title="דוגמה: הסכם פתח תקווה שעבר 47 תיקונים">
            <p>
              נציגות מתחם 64 דירות בפתח תקווה קיבלה הסכם ראשוני של 78 עמודים מהיזם ב-2023. עורך דין הדיירים זיהה כשלים ב-9 פרקים. תוצאת המשא ומתן (4 חודשים, 11 סבבי תיקונים): 47 שינויים מהותיים.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">תיקונים מהותיים שהושגו:</strong> תוספת 28 מ״ר במקום 22 מ״ר (פרק 4), שינוי ערבות תאגידית לערבות בנקאית (פרק 8), תוספת סעיף יורשים (פרק 9, חסר במקור), הגדרת סטנדרט גמר במונחי תקנים ת״י ספציפיים (פרק 4 / נספח 12.3), פיצוי איחור 8,000 ש״ח לחודש במקום 2,000 (פרק 10), זכות יציאה במקרה של אי-עמידה בלוחות זמנים (פרק 5).
            </p>
            <p>
              ערך כלכלי משוער של התיקונים: כ-180,000 ש״ח לכל בעל דירה במצטבר (תוספת מ״ר + ערבויות חזקות + פיצוי איחור גבוה). עלות עורך דין הדיירים: 22,000 ש״ח לכלל הנציגות, 344 ש״ח לדייר. החזר השקעה: 52,000%.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="checklist" title="צ׳קליסט בדיקת הסכם: 10 שאלות לעורך הדין">
            <ol className="mt-4 space-y-2 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>האם כל ההגדרות בפרק 1 חד-משמעיות?</li>
              <li>האם זהות היזם מאומתת ב-data.gov.il / רשם החברות?</li>
              <li>האם המתחם מתועד עם נספח קדסטרי מלא?</li>
              <li>האם פרק התמורות מגדיר מ״ר נטו לכל דירה?</li>
              <li>האם יש סנקציות איחור לכל אבן דרך?</li>
              <li>האם חובות היזם מוגדרים מדידים, לא רכים?</li>
              <li>האם הערבויות בנקאיות אמיתיות לכל שלב?</li>
              <li>האם יש סעיפי הגנה לקשישים ויורשים?</li>
              <li>האם הסעדים על הפרה סימטריים בין הצדדים?</li>
              <li>האם כל הנספחים חתומים ומצורפים?</li>
            </ol>
            <p>
              עיון ישיר בחוק המכר 1973 ובחוק החוזים זמין במאגר{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                נבו
              </a>
              {" "}ובאתר{" "}
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
              קיבלתם הסכם פינוי בינוי? לפני שחותמים, בואו נדבר.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים נציגויות דיירים בבדיקת הסכמים. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="הסכם פינוי בינוי: בדיקה ראשונית"
            subtitle="השאירו שם וטלפון. נחזור אליכם תוך שעות עם תובנות ראשוניות."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/heskem-pinui-binui"
        targets={[
          "pinui-binui-temurot",
          "pinui-binui-eravut",
          "pinui-binui-kshishim",
          "pinui-binui-yorshim",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על הסכם פינוי בינוי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
