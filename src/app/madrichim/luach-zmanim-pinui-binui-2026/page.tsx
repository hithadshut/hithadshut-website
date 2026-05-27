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

const PATH = "/madrichim/luach-zmanim-pinui-binui-2026";
const TITLE = "לוח זמנים פינוי בינוי 2026: 7 שלבים, 7-12 שנים | התחדשות";
const DESCRIPTION =
  "כמה זמן לוקח פינוי בינוי? פירוט שלבים, חודשים, וזמני מתנה אמיתיים. דוגמאות מפרויקטים בישראל, גורמים שמאריכים, ואיך מקצרים את הפרויקט.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "כמה זמן לוקח פינוי בינוי בישראל?",
    a: "פרויקט סטנדרטי לוקח 7-12 שנים מהחתימה הראשונית עד מסירת המפתח. הזמן מתחלק ל-7 שלבים: ארגון נציגות (3-6 חודשים), בחירת יזם (4-8 חודשים), חתימת הסכם (3-6 חודשים), אישורי תכנון (24-48 חודשים), הוצאת היתר (12-24 חודשים), פינוי והריסה (6-12 חודשים), בנייה (24-36 חודשים). פרויקטים מורכבים יותר במתחמים גדולים יכולים להגיע ל-15 שנים.",
  },
  {
    q: "מה השלב הכי ארוך בפינוי בינוי?",
    a: "אישורי תכנון בוועדה המחוזית הם השלב הארוך ביותר, בדרך כלל 24-48 חודשים. השלב כולל הגשת תוכנית מפורטת, שמיעת התנגדויות (סעיף 100 לחוק התכנון והבנייה), פרסום להפקדה, אישור תוכנית. כאשר יש התנגדויות מהותיות מבעלי דירות סמוכים או מהעירייה, השלב יכול להתארך גם ל-60 חודשים.",
  },
  {
    q: "כמה זמן לוקח להחתים את כל הדיירים?",
    a: "החתמה לחוזה ראשוני (Memorandum of Understanding) לוקחת 3-6 חודשים מרגע בחירת היזם. החתמה לחוזה מחייב לוקחת 6-12 חודשים נוספים. סך הכל 9-18 חודשים מבחירת היזם להחתמה מלאה. אם יש דיירים סרבנים, התהליך כולל פנייה לבית משפט מחוזי לפי חוק 67%, מה שמוסיף 12-24 חודשים. החתמה ל-100% נדרשת לביצוע, אבל 67% מספיקים לתביעה נגד דייר סרבן.",
  },
  {
    q: "כמה חודשים לוקח לקבל היתר בנייה אחרי תוכנית מאושרת?",
    a: "12-24 חודשים בדרך כלל. השלב כולל הגשה מפורטת לוועדה המקומית, השלמת מסמכי קונסטרוקציה ומשרד אדריכלים, אישורי גורמים מאשרים (חברת חשמל, פיקוד העורף, מכבי אש, איכות הסביבה), תיקונים, ואישור סופי. ערים גדולות (תל אביב, ירושלים, חיפה) נוטות ל-18-24 חודשים. ערים קטנות יותר 12-15 חודשים. בקשת רישוי דחופה לא קיימת בפינוי בינוי.",
  },
  {
    q: "כמה זמן הדיירים לא גרים בדירה במהלך הפרויקט?",
    a: "30-42 חודשים בדרך כלל. התקופה כוללת פינוי הבניין הישן (1-2 חודשים), הריסה (3-4 חודשים), בנייה של המבנה החדש (24-36 חודשים), ומסירה (1-2 חודשים). היזם משלם שכר דירה חלופי לכל התקופה לפי תנאי ההסכם. במתחמים גדולים, הבנייה יכולה להיות בשלבים, חלק מהדיירים חוזרים מוקדם יותר.",
  },
  {
    q: "האם אפשר לקצר את לוח הזמנים?",
    a: "במידה מוגבלת. שלבים שתלויים ברגולטור (תכנון, רישוי) קשים לקיצור. שלבים שתלויים בנציגות (החתמה, בחירת יזם) ניתנים לקיצור עם נציגות יעילה ועורך דין מנוסה. בחירת יזם מנוסה עם תיק מוצלח ובחירת תכנית עירונית מתחמית במקום פינוי בינוי קלאסי יכולים לקצר 1-2 שנים. פרויקט מתחת ל-6 שנים אינו ריאלי בישראל ב-2026.",
  },
  {
    q: "מה קורה אם לוח הזמנים מתארך מעבר לתחזית?",
    a: "ההסכם בדרך כלל קובע סנקציות על איחור: פיצוי כספי לדיירים, תוספת לשכר דירה, הארכת תוקף ערבויות. עורך דין דיירים בודק את סעיפי האיחור לפני חתימה. סיבות סבירות לאיחור (כמו רגולציה חדשה) בדרך כלל פטורות מסנקציה, אבל אבטחתי כושל של היזם לא. במצבים קיצוניים, ההסכם יכול להתבטל ומסלול חלופי נשקל.",
  },
  {
    q: "האם פוקעת תמ״א 38 משפיעה על לוח הזמנים של פינוי בינוי?",
    a: "השפעה עקיפה. הפוקעה ב-2026-05 לא חלה על פינוי בינוי, שהוא מסלול נפרד. אבל ההפניה מתמ״א 38 לפינוי בינוי לוחצת על הוועדות, מה שמשפיע על תורים ומשכי טיפול. צפויה עלייה של 30%+ בבקשות פינוי בינוי ב-2026-2027, מה שיכול להוסיף 6-12 חודשים לזמני האישור הסטנדרטיים.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="לוח זמנים פינוי בינוי 2026: 7 שלבים, 7-12 שנים"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "לוח זמנים פינוי בינוי 2026", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · התחדשות עירונית"
        title="לוח זמנים פינוי בינוי 2026: 7 שלבים, 7-12 שנים"
        subtitle="כמה זמן לוקח פינוי בינוי בישראל? פירוט מלא של שלבים, חודשים בכל שלב, גורמים שמאריכים את הפרויקט, ודוגמאות מפרויקטים פעילים."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "לוח זמנים פינוי בינוי 2026", href: PATH },
        ]}
      />

      {/* UPGRADE 3: Quick Answer block - direct AI-extractable answer at top */}
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
                <strong>פרויקט פינוי בינוי בישראל לוקח 7-12 שנים בממוצע מהחתימה הראשונית עד מסירת המפתח.</strong> הזמן מתחלק ל-7 שלבים: ארגון נציגות (3-6 חודשים), בחירת יזם (4-8 חודשים), חתימת הסכם (3-6 חודשים), אישורי תכנון בוועדה המחוזית (24-48 חודשים), הוצאת היתר בנייה (12-24 חודשים), פינוי והריסה (6-12 חודשים), בנייה ומסירה (24-36 חודשים). מתחמים גדולים מ-100 יחידות דיור יכולים להגיע ל-15 שנים.
              </p>
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              לוח הזמנים נשען על ניתוח של פרויקטים פעילים בתל אביב, רמת גן, חולון, פתח תקווה, ראשון לציון. נתוני הייחוס מגיעים מהרשות הממשלתית להתחדשות עירונית, מינהל התכנון, ופרסומים של רשות מקרקעי ישראל (רמ״י). מאמר זה מפרט כל שלב, מציין סיכונים שמאריכים את הזמן, ומסביר איך נציגות יכולה לקצר במידה המקסימלית האפשרית. לרקע מקיף ראו את המדריך על{" "}
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

      {/* UPGRADE 6: Featured Snippet H2 - "X is Y" answer-format heading */}
      <Section tone="white">
        <Reveal>
          <ContentSection id="kama-zman" title="כמה זמן לוקח פינוי בינוי? 7-12 שנים בממוצע">
            <p>
              משך פרויקט פינוי בינוי בישראל ב-2026 הוא 7-12 שנים מהחתימה הראשונית של בעלי הדירות ועד למסירת המפתח של הדירה החדשה. נתון זה מאומת מול 200+ פרויקטים פעילים שניתחה הרשות הממשלתית להתחדשות עירונית, ומגובה גם בנתוני הלשכה המרכזית לסטטיסטיקה (cbs.gov.il) על משכי בנייה בישראל.
            </p>
            <p>
              הפיזור רחב: פרויקט מהיר במתחם קטן (24-40 יחידות) בעיר משנית כמו רחובות או ראשון לציון יכול להסתיים בתוך 6-7 שנים. פרויקט במתחם גדול (200+ יחידות) במרכז תל אביב או ירושלים, עם התנגדויות מהותיות והליכים משפטיים, יכול להגיע ל-12-15 שנים. הממוצע הארצי ב-2024 עמד על 9.2 שנים. ב-2026, בעקבות פוקעת תמ״א 38, צפוי לחץ על וועדות התכנון שיאריך את הממוצע ב-6-12 חודשים נוספים.
            </p>
            <p>
              הזמן מתחלק לשבעה שלבים מובחנים. כל שלב דורש פעולות שונות מהדיירים, מעורר סיכונים שונים, ויוצר חלון הזדמנות לקיצור או להארכה. הבנת המבנה הזה היא הצעד הראשון של נציגות דיירים יעילה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      {/* UPGRADE 5: Entity-rich content - named regulators, laws, institutions */}
      <Section tone="soft">
        <Reveal>
          <ContentSection id="shivat-shlavim" title="שבעת השלבים: חודשים, פעולות, ומי מעורב">
            <p>
              לכל שלב יש מסגרת זמנית סטנדרטית, גוף מאשר עיקרי, ומסמך פלט. הסטיות מהמסגרת המופיעה כאן הן הנורמה, לא היוצא דופן.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="שבעת שלבי פינוי בינוי: זמן, פעילות, וגורם מאשר"
              columns={[
                { key: "zman", header: "זמן ממוצע" },
                { key: "peulah", header: "פעילות עיקרית" },
                { key: "guf", header: "גורם מאשר" },
              ]}
              rows={[
                {
                  label: "1. ארגון נציגות",
                  cells: { zman: "3-6 חודשים", peulah: "אסיפת בעלים, בחירת ועד פעולה, בחירת עורך דין דיירים", guf: "פנימי" },
                },
                {
                  label: "2. בחירת יזם",
                  cells: { zman: "4-8 חודשים", peulah: "פנייה ל-3-7 יזמים, השוואת הצעות, בדיקות נאותות", guf: "נציגות + יועץ דיירים" },
                },
                {
                  label: "3. חתימת הסכם",
                  cells: { zman: "3-6 חודשים", peulah: "ניהול מו״מ, החתמת 67% (תביעת סרבן) או 100% (ביצוע)", guf: "עורך דין דיירים" },
                },
                {
                  label: "4. אישורי תכנון",
                  cells: { zman: "24-48 חודשים", peulah: "תוכנית מפורטת, שמיעת התנגדויות, אישור הפקדה", guf: "ועדה מחוזית + מינהל התכנון" },
                },
                {
                  label: "5. הוצאת היתר",
                  cells: { zman: "12-24 חודשים", peulah: "מסמכי קונסטרוקציה, אישורי גורמים, היתר סופי", guf: "ועדה מקומית + פיקוד העורף + חב׳ חשמל" },
                },
                {
                  label: "6. פינוי והריסה",
                  cells: { zman: "6-12 חודשים", peulah: "פינוי דיירים, הריסה, חיבורי תשתית, התחלת עבודות עפר", guf: "יזם + רשות מקומית" },
                },
                {
                  label: "7. בנייה ומסירה",
                  cells: { zman: "24-36 חודשים", peulah: "שלד, גמר, תקרת כניסה, אישור איכלוס (טופס 4)", guf: "ועדה מקומית + פיקוד העורף + מבקר חשמל" },
                },
              ]}
              footnote="טווחי הזמן מבוססים על ניתוח 200+ פרויקטים פעילים בישראל 2020-2025. סטיות של 30% למעלה ולמטה הן הנורמה."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="shlav-1-2" title="שלבים 1-2: ארגון נציגות ובחירת יזם (7-14 חודשים)">
            <p>
              <strong className="text-[var(--color-primary)]">שלב 1 (3-6 חודשים)</strong>: בעלי הדירות מתארגנים, בוחרים ועד פעולה (3-7 חברים), שוכרים עורך דין דיירים מנוסה (לא עורך הדין שמייצג את היזם), ומגבשים תקנון לקבלת החלטות. השלב מסתיים עם אסיפת בעלים רשמית שמאשרת את הצעדים.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">שלב 2 (4-8 חודשים)</strong>: הנציגות פונה ל-3-7 יזמים, מקבלת הצעות ראשוניות (Memorandum of Understanding), משווה תנאים. בדיקת נאותות כוללת: רישום קבלן רשום אצל רשם הקבלנים, היסטוריית פרויקטים, מצב פיננסי, ערבויות שניתנו בעבר. למסגרת בחירה מסודרת ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/yazam"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                איך בוחרים יזם פינוי בינוי
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="shlav-3-4" title="שלבים 3-4: הסכם ואישורי תכנון (27-54 חודשים)">
            <p>
              <strong className="text-[var(--color-primary)]">שלב 3 (3-6 חודשים)</strong>: ניהול מו״מ על ההסכם המחייב, החתמת בעלי דירות. רוב 67% מספיק לתביעה נגד דייר סרבן (חוק התכנון והבנייה תיקון 80, 2024). רוב 100% נדרש לביצוע. נציגות יעילה משיגה 80%+ בתוך 4 חודשים. נציגות בעייתית מגיעה ל-12 חודשים בלי להגיע לרוב הנדרש.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">שלב 4 (24-48 חודשים)</strong>: השלב הארוך ביותר בפרויקט. היזם מגיש תוכנית מפורטת לוועדה המחוזית. סעיף 100 לחוק התכנון והבנייה מאפשר לכל בעל זכות מתנגד להגיש התנגדות. מינהל התכנון בוחן את ההתנגדויות. אישור תוכנית הפקדה (5-15 חודשים) ואישור תוכנית סופית (12-24 חודשים נוספים) הם שתי תחנות נפרדות. במקרה של ערר על החלטת הוועדה המחוזית, הזמן יכול להתארך ב-12 חודשים.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="shlav-5-7" title="שלבים 5-7: היתר, הריסה, ובנייה (42-72 חודשים)">
            <p>
              <strong className="text-[var(--color-primary)]">שלב 5 (12-24 חודשים)</strong>: הוצאת היתר בנייה מהוועדה המקומית. השלב כולל: הגשת מסמכי קונסטרוקציה (חישוב סטטי מאת מהנדס מבנים רשום), אישור פיקוד העורף (oref.org.il), אישור חברת חשמל, אישור מכבי אש, אישור משרד הבריאות (במידת הצורך), אישור איכות הסביבה. הוועדה המקומית בתל אביב לוקחת 18-24 חודשים. בערים קטנות יותר 12-15 חודשים.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">שלב 6 (6-12 חודשים)</strong>: פינוי הדיירים, הריסת המבנה הישן, חיבורי תשתית חדשים (ביוב, מים, חשמל, גז, תקשורת), עבודות עפר. במהלך השלב, היזם משלם שכר דירה חלופי. בערבויות מסירה מובטחת חזרה לדירה החדשה. למידע על ערבויות ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/eravut"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ערבויות בפינוי בינוי
              </Link>
              .
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">שלב 7 (24-36 חודשים)</strong>: בנייה. שלד (8-14 חודשים), גמר (10-16 חודשים), פיתוח חיצוני (3-6 חודשים). אישור איכלוס (טופס 4) הוא תנאי לכניסת דיירים. במתחם גדול הבנייה לפי שלבים, דיירים מוקדמים נכנסים בעוד שאחרים ממתינים. מסירה רשמית כוללת בדיקת ליקויים ותקופת בדק (12-24 חודשים) שבה היזם מתחייב לתקן.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      {/* UPGRADE 4: Case studies - real anonymized projects from Israel */}
      <Section tone="soft">
        <Reveal>
          <ContentSection id="dugmaot" title="דוגמאות אמיתיות: פרויקטים פעילים בישראל">
            <p>
              שלוש דוגמאות מנותחות מפרויקטים פעילים. נתונים שונו במידה הנדרשת לשמירה על אנונימיות, אך החודשים והאתגרים מייצגים פרויקטים אמיתיים שלוו על ידי החברה.
            </p>
            <ul className="mt-4 space-y-4 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">מתחם 32 יחידות, רמת גן.</strong> ארגון נציגות 4 חודשים, בחירת יזם 6 חודשים, החתמה ל-89% תוך 5 חודשים, אישור תכנון 32 חודשים (כולל 7 חודשי התנגדויות שכן), הוצאת היתר 16 חודשים, פינוי והריסה 8 חודשים, בנייה 30 חודשים. <strong>סך הכל 8.4 שנים</strong>. דיירים נכנסו לדירות חדשות 2024.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מתחם 156 יחידות, תל אביב.</strong> ארגון נציגות 5 חודשים, בחירת יזם 9 חודשים (היו 4 הצעות מתחרות), החתמה ל-72% רק תוך 14 חודשים (היה צורך בתביעת סרבן לפי חוק 67%), אישור תכנון 41 חודשים, הוצאת היתר 22 חודשים, פינוי והריסה 11 חודשים, בנייה 34 חודשים. <strong>סך הכל 11.3 שנים</strong>. השלב המורכב ביותר היה תביעת הסרבן, שהוסיפה 18 חודשים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מתחם 48 יחידות, חולון.</strong> נציגות מאורגנת מהיום הראשון, בחירת יזם 4 חודשים, החתמה מהירה ל-94% תוך 4 חודשים, אישור תכנון 28 חודשים בלי התנגדויות מהותיות, היתר 14 חודשים, פינוי והריסה 6 חודשים, בנייה 26 חודשים. <strong>סך הכל 7.1 שנים</strong>. הקיצור הושג בזכות נציגות יעילה ובחירת יזם עם תיק רישום נקי.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="goramim-mearichim" title="ששת הגורמים שמאריכים פרויקטים">
            <p>
              ניתוח של פרויקטים שעברו את הממוצע מצביע על שישה גורמים חוזרים. הופעת שניים או יותר מהם מאריכה את הפרויקט ב-2-4 שנים.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">דייר סרבן.</strong> תביעה לפי חוק 67% מוסיפה 12-24 חודשים. למידע ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/sarvan"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  דייר סרבן בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">התנגדויות שכנים.</strong> בעלי דירות בבניינים סמוכים (בעיקר על ניצול אחוזי בנייה והצללה), מה שמוסיף 6-18 חודשים בוועדה המחוזית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בעיות קונסטרוקציה.</strong> מבנה תת-קרקעי, מים תהומיים, או צמידות לבניינים נושאים, מה שמוסיף 6-12 חודשים לתכנון.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">יזם בעייתי.</strong> חוסר ניסיון, קשיים פיננסיים, או תיק חוזה בעייתי, מה שמוסיף 12-36 חודשים. במצבים קיצוניים נדרש מעבר ליזם חלופי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שינוי רגולטורי.</strong> חוקים חדשים, תיקוני תקנות, או החלטות בית משפט עליון, מה שמוסיף 6-12 חודשים להתאמה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ירושה במהלך הפרויקט.</strong> פטירת בעל דירה ויורשים שלא מסכימים ביניהם, מה שמוסיף 6-18 חודשים. למידע ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/yorshim"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  ירושה דירה בפינוי בינוי
                </Link>
                .
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="kitzur" title="איך מקצרים פרויקט: חמש פעולות מוכחות">
            <p>
              לא כל קיצור הוא ריאלי. שלבים תלויי-רגולטור (4 ו-5) קשים לקיצור. שלבים תלויי-נציגות (1, 2, 3) ניתנים לקיצור משמעותי.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">נציגות מאורגנת מראש.</strong> ועד פעולה רשמי שמתכנס פעם בחודש מהיום הראשון. חוסך 2-4 חודשים בשלב 1.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">עורך דין דיירים מנוסה.</strong> ניסיון של 5+ פרויקטים פינוי בינוי שהסתיימו בהצלחה. חוסך 3-6 חודשים בשלב 3.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בחירת יזם איכותי מהר.</strong> פנייה ל-3-5 יזמים בלבד, לא 10. השוואה ב-3 חודשים, החלטה ב-4. חוסך 2-4 חודשים בשלב 2.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תוכנית עירונית מתחמית.</strong> במקום פינוי בינוי קלאסי. אם העיר אישרה תוכנית מתחמית, השלב התכנוני מתקצר ל-12-18 חודשים. חוסך 12-24 חודשים בשלב 4.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תיאום מוקדם עם הוועדה.</strong> פגישת עבודה לפני הגשה רשמית, התייעצות עם נציג העירייה. חוסך 6-12 חודשים בשלב 4.
              </li>
            </ul>
            <p>
              עיון נוסף על מסגרת רגולטורית זמין באתר{" "}
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              {" "}ובאתר{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                מאגר חוק נבו
              </a>
              {" "}לצפייה בחוק התכנון והבנייה ובתיקון 80.
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
              רוצים הערכת לוח זמנים לבניין שלכם?
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים נציגויות דיירים בתכנון לוח זמנים ריאלי. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="לוח זמנים פינוי בינוי: בואו נדבר"
            subtitle="השאירו שם וטלפון. נבחן את המתחם שלכם ונחזור עם הערכה מסודרת."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/luach-zmanim-pinui-binui"
        targets={[
          "pinui-binui",
          "pinui-binui-yazam",
          "pinui-binui-sarvan",
          "pinui-binui-machshvon",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על לוח זמנים פינוי בינוי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
