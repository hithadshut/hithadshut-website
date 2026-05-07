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

const PATH = "/madrichim/dirot-temura-vs-dirot-mukdamot";
const TITLE = "דירת תמורה מול דירה מוקדמת בפינוי בינוי | התחדשות";
const DESCRIPTION =
  "שני מודלי תמורה בפינוי בינוי: דירת תמורה (דירה חדשה במקום) או דירה מוקדמת (דירה אחרת מיד). השוואה, מי מתאים לכל מודל, ומלכודות שצריך להכיר.";
const PUBLISHED_DATE = "2026-05-05";
const MODIFIED_DATE = "2026-05-05";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "מה ההבדל הבסיסי בין דירת תמורה לדירה מוקדמת?",
    a: "דירת תמורה היא הדירה החדשה שתבנה במתחם המחודש; הדייר מקבל אותה בסוף הפרויקט (7-12 שנים). דירה מוקדמת היא דירה קיימת שהיזם רוכש מיד עבור הדייר, בדרך כלל באזור אחר; הדייר מוסר את זכויותיו במתחם תמורתה. דירת תמורה היא ברירת המחדל. דירה מוקדמת היא חלופה שמתאימה לאוכלוסיות מסוימות (קשישים, ירושות מורכבות).",
  },
  {
    q: "מי זכאי לדירה מוקדמת?",
    a: "תיאורטית כל בעל דירה. בפועל, היזמים מציעים דירה מוקדמת בעיקר לקשישים מעל 70 (זכות חוקית לפי תיקון 80), ליורשים שמעוניינים לחלק את הירושה מיד, ולבעלי דירות שמעוניינים להעתיק את מקום מגוריהם. ביחס לבעלי דירה צעירים יותר, דירה מוקדמת אפשרית אם זה מסחרית הגיוני ליזם — אבל פחות שכיחה.",
  },
  {
    q: "האם דירה מוקדמת שווה כספית לדירת תמורה?",
    a: "לא תמיד. הערך הכספי של דירה מוקדמת נקבע בזמן ההסכם (שווי הדירה החליפית ברגע הרכישה). הערך של דירת תמורה נקבע בסוף הפרויקט (שווי דירה חדשה, גדולה יותר, באזור משופר). בטווח הארוך, דירת תמורה לרוב שווה יותר. בטווח הקצר, דירה מוקדמת מספקת ודאות וזמינות מיידיים. ההפרש הממוצע נע 15-30%, לטובת דירת תמורה אם הפרויקט מסתיים כצפוי.",
  },
  {
    q: "מה היתרונות של דירה מוקדמת?",
    a: "ארבעה: (1) ודאות — הדירה כבר קיימת, לא תלויה בהשלמת הפרויקט. (2) מהירות — הדייר עובר תוך 30-90 ימים, לא 7-12 שנים. (3) ניידות — אפשרות לבחור אזור חדש (למשל קרוב לילדים). (4) פתרון לאוכלוסיות עם אילוצים — קשישים, חולים, בעלי מוגבלות. החיסרון העיקרי: ויתור על פוטנציאל הערכה של הדירה החדשה.",
  },
  {
    q: "האם קשיש חייב לקבל דירה מוקדמת?",
    a: "לא. תיקון 80 לחוק התכנון והבנייה מעניק לקשיש מעל 70 את הזכות לבחור: (א) דירת תמורה קלאסית, (ב) דירה מוקדמת כתחליף, (ג) דירה חליפית בקומה נמוכה. הבחירה תלויה בקשיש. יזם שלוחץ על קשיש לבחור באופציה מסוימת מבצע עבירה. ראו את המדריך על זכויות קשישים בפינוי בינוי.",
  },
  {
    q: "האם הדירה המוקדמת יכולה להיות באזור אחר לגמרי?",
    a: "כן, בעקרון. בפועל, רוב היזמים מציעים דירות באזור הקרוב למתחם המקורי (5-10 ק״מ). בקשה לדירה רחוקה יותר אפשרית אך תלויה בהסכמת היזם ובמכירת הזכויות. מקרים מיוחדים: קשיש שעובר לגור עם ילדים בעיר אחרת, יורש שגר במקום אחר. במקרים אלה היזם בדרך כלל מסכים, אך יסכים על מחיר מותאם.",
  },
  {
    q: "מה קורה למיסים בדירה מוקדמת?",
    a: "פטור מס שבח חל גם על דירה מוקדמת בתנאים מסוימים, אך החישוב מורכב יותר. אם הדירה המוקדמת קטנה משמעותית מהמקורית או באזור פחות יקר, ייתכן וקיים אירוע מס חלקי. נדרשת בדיקה אישית עם רואה חשבון. ראו את המדריך על מסים בפינוי בינוי לרקע. עורך דין מקרקעין הוא הצעד הראשון להחלטה.",
  },
  {
    q: "מתי כדאי לבחור דירה מוקדמת?",
    a: "ארבעה תרחישים: (1) קשיש מעל 75, שלא רוצה לחכות 7-12 שנים; (2) דייר עם בעיה רפואית שדורשת מעבר מהיר; (3) ירושה מורכבת בין יורשים שלא מסכימים, ודירה מוקדמת מאפשרת חלוקה מיידית; (4) דייר שתכנן לעבור אזור בכל מקרה ופינוי בינוי הוא הזדמנות. בכל תרחיש אחר — דירת תמורה רגילה היא בדרך כלל ההמלצה. תמיד ייעוץ אישי לפני החלטה.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="דירת תמורה מול דירה מוקדמת בפינוי בינוי"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "מדריכים", url: "/madrichim" },
          { name: "דירת תמורה מול דירה מוקדמת", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="מדריך · השוואת מודלים"
        title="דירת תמורה מול דירה מוקדמת בפינוי בינוי"
        subtitle="שני מודלים, שתי גישות, שתי תוצאות שונות. מאמר זה מסביר את ההבדל, מי מתאים לכל מודל, ומלכודות שצריך להכיר."
        crumbs={[
          { name: "מדריכים", href: "/madrichim" },
          { name: "דירת תמורה מול דירה מוקדמת", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
            <div className="rounded-2xl border-2 border-[var(--color-accent)]/30 bg-[var(--color-soft)] p-6 md:p-7 mb-6">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-3">
                תשובה מהירה
              </div>
              <p className="text-[17px] text-[var(--color-ink)] leading-8 m-0">
                <strong>בפינוי בינוי, בעלי דירה יכולים לקבל אחד משני מודלי תמורה:</strong> דירת תמורה — הדירה החדשה שתיבנה במתחם המחודש, מוסרת בסוף הפרויקט (7-12 שנים). דירה מוקדמת — דירה קיימת שהיזם רוכש מיד תמורת זכויות הדייר במתחם, מסירה תוך 30-90 ימים. דירת תמורה היא ברירת המחדל ובדרך כלל שווה יותר כספית. דירה מוקדמת מתאימה לקשישים מעל 70 (זכות לפי תיקון 80), ליורשים, ולבעלי אילוצים בריאותיים. ההפרש הכספי הממוצע: 15-30% לטובת דירת תמורה.
              </p>
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              שני המודלים מעוגנים בחוק התכנון והבנייה ובחוקים נלווים. תיקון 80 לחוק (2024) חיזק את הזכויות של קשישים לבחור בין השניים. נייר עמדה של הרשות הממשלתית להתחדשות עירונית מ-2025 הבהיר את הסטנדרט המסחרי לדירה מוקדמת. מאמר זה מנתח את שני המודלים, מציג טבלת השוואה, ומפנה לבחירה לפי מצב הדייר. למסגרת רחבה ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/temurot"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמורות בפינוי בינוי
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hagdara" title="דירת תמורה היא הדירה החדשה במקום">
            <p>
              דירת תמורה היא הדירה החדשה שתיבנה במתחם פינוי בינוי, במקום הדירה הישנה של הדייר. גודלה גדול ב-25-35 מ״ר במרכז הארץ, בנייתה לפי תקני בנייה עדכניים, וערכה הכלכלי גבוה מהדירה הישנה. הדירה נמסרת לדייר בסוף הפרויקט (7-12 שנים), אחרי הריסת הבניין הישן ובניית המבנה החדש. בתקופת הביניים, הדייר מתגורר בדירה שכורה ומקבל שכר דירה חלופי מהיזם.
            </p>
            <p>
              דירת תמורה היא ברירת המחדל בכמעט כל הסכם פינוי בינוי. כל בעל דירה זכאי לה ללא תנאי נוסף, פרט להסכמתו לפרויקט. הדירה כוללת חניה צמודה, מחסן, ולעיתים מרפסת — בהתאם לתוכנית. רמת גמר הבנייה מוגדרת בנספח הטכני להסכם. תוצאת המודל: בעל הדירה מסיים את הפרויקט עם נכס משופר משמעותית, באזור שהפך אטרקטיבי יותר.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hagdara-2" title="דירה מוקדמת היא דירה קיימת מיד">
            <p>
              דירה מוקדמת (לעיתים נקראת &ldquo;דירה חליפית מוקדמת&rdquo; או &ldquo;Buy-out&rdquo;) היא דירה קיימת שהיזם רוכש בכסף בשוק החופשי ומעניק לדייר תמורת ויתור על הזכויות שלו במתחם המקורי. הדייר עובר אליה תוך 30-90 ימים מהחתימה על ההסכם, ולא משתתף בהמשך הפרויקט. הוא לא נדרש לשכר דירה חלופי, לא להמתנה, לא להליכים נוספים.
            </p>
            <p>
              היזם משלם לדירה המוקדמת מעורבותו הכספית בפרויקט: הוא רוכש דירה ב-1.8-2.5 מיליון ש״ח (בהתאם לאזור), במקום להעניק דירת תמורה שעלות בנייתה צפויה ב-1.5-2 מיליון ש״ח. ההפרש הוא רכיב הסיכון: היזם משלם פרמיה תמורת קיצור הזמן וביטול הסיכונים שכרוכים בהמתנת הדייר. רוב הדיירים שמקבלים הצעת דירה מוקדמת רואים בה הצעה הוגנת אם השווי בשוק תואם.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="hashvaa" title="טבלת השוואה: שני המודלים זה מול זה">
            <p>
              שמונה ממדים שמבחינים בין דירת תמורה לדירה מוקדמת. הבחירה תלויה במצב הדייר, גילו, ובאופן שבו הוא מעריך את הסיכון.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="השוואה: דירת תמורה מול דירה מוקדמת"
              columns={[
                { key: "temura", header: "דירת תמורה" },
                { key: "mukdemet", header: "דירה מוקדמת" },
              ]}
              rows={[
                {
                  label: "זמן עד מסירה",
                  cells: { temura: "7-12 שנים", mukdemet: "30-90 ימים" },
                },
                {
                  label: "ודאות מסירה",
                  cells: { temura: "תלוי בהשלמת הפרויקט", mukdemet: "ודאות מלאה" },
                },
                {
                  label: "מיקום",
                  cells: { temura: "באותו מתחם, חדש", mukdemet: "בדרך כלל אזור קרוב, יד שנייה" },
                },
                {
                  label: "גודל לעומת המקורית",
                  cells: { temura: "גדול ב-25-35 מ״ר", mukdemet: "שווה או דומה" },
                },
                {
                  label: "ערך כלכלי",
                  cells: { temura: "גבוה (תוספת ערך 30-50%)", mukdemet: "שווה לדירה הקיימת" },
                },
                {
                  label: "סיכונים",
                  cells: { temura: "תלוי במצב היזם והרגולציה", mukdemet: "מינימליים" },
                },
                {
                  label: "תקופת ביניים",
                  cells: { temura: "30-42 חודשים בשכירות חלופית", mukdemet: "אין" },
                },
                {
                  label: "מתאים בעיקר ל-",
                  cells: { temura: "כל בעל דירה (ברירת מחדל)", mukdemet: "קשישים, חולים, ירושות מורכבות" },
                },
              ]}
              footnote="הבחירה האישית דורשת ייעוץ עם עורך דין דיירים ואסיפת מידע על השוק המקומי."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="kashishim" title="קשישים: זכות חוקית לבחור">
            <p>
              תיקון 80 לחוק התכנון והבנייה (2024) הסדיר את זכויותיהם של קשישים מעל גיל 70 בפרויקטי פינוי בינוי. החוק מעניק שלוש חלופות לקשיש, והוא יכול לבחור באחת מהן לפי שיקול דעתו.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">דירת תמורה רגילה.</strong> בקומה נמוכה (1-3) במידת האפשר. לכך ניתן להוסיף דרישות נגישות ספציפיות (מעלית, חניה).
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דירה מוקדמת.</strong> דירה קיימת שהיזם רוכש מיד. במקרה זה, הקשיש לא ממתין 7-12 שנים. החוק מחייב את היזם להציע אופציה זו אם הקשיש מבקש.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פיצוי כספי מוגדל.</strong> במקום דירה, הקשיש מקבל פיצוי גבוה (בדרך כלל שווי דירה דומה בשוק) ועובר לפי בחירתו (למשל, לבית אבות).
              </li>
            </ol>
            <p>
              היזם חייב להציע את שלוש החלופות בכתב. אם החוזה לא כולל את כולן, הוא לקוי. למידע מלא על זכויות גיל בפינוי בינוי ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/kshishim"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                זכויות קשישים בפינוי בינוי
              </Link>
              .
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="dugma" title="דוגמה: ההחלטה של אסתר מ-יד אליהו">
            <p>
              אסתר, 78, אלמנה, גרה לבד בדירת 3 חדרים ב-יד אליהו (תל אביב). דירה במצב סביר, ערך שוק 2.1 מיליון ש״ח. המתחם נכנס לפינוי בינוי ב-2024.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">הצעה לדירת תמורה:</strong> דירת 4 חדרים חדשה (105 מ״ר נטו, תוספת 30 מ״ר), חניה צמודה, מחסן, פיצוי 220,000 ש״ח, שכר דירה חלופי 6,000 ש״ח לחודש. צפי מסירה: 2032 (כ-8 שנים). שווי משוער של הדירה החדשה: 3.6 מיליון ש״ח. ההצעה כדאית כלכלית — אבל אסתר תהיה בת 86 במסירה.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">הצעה לדירה מוקדמת:</strong> דירת 3 חדרים בגבעת שמואל (קרוב לבת של אסתר), שווי שוק 2.0 מיליון ש״ח, מסירה תוך 60 ימים. ויתור על דירת תמורה. ההצעה פחות שווה כספית — אבל אסתר עוברת ב-2024 לדירה קרובה לבת שלה.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">הבחירה של אסתר:</strong> אחרי ייעוץ עם עורך דין דיירים, בנותיה, ויועץ מס, אסתר בחרה בדירה מוקדמת. שיקוליה: בריאותה, מרחק מבני המשפחה, חוסר רצון לעבור 8 שנים בשכירות חלופית. ההפרש הכלכלי (כ-1.6 מיליון ש״ח) פחות חשוב לה מהוודאות והקרבה למשפחה. <strong>הבחירה היא אישית — אין תשובה אחת נכונה.</strong>
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="malkodot" title="ארבע מלכודות בדירה מוקדמת">
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">הערכת שווי לא הוגנת.</strong> היזם מציע דירה מוקדמת ששוויה בשוק נמוך מהדירה המקורית. דרישה: שמאי בלתי תלוי שמעריך את שתי הדירות. ההפרש משולם כפיצוי כספי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">דירה במצב גרוע.</strong> דירה ב-2 מיליון ש״ח שצריכה שיפוץ של 300,000 ש״ח. ההצעה לא הוגנת בלי כיסוי השיפוץ. דרישה: בדיקת מהנדס מבנים לפני חתימה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ויתור על זכויות קשיש.</strong> היזם דוחק בקשיש לוותר על אופציות אחרות (פיצוי כספי, דירה בקומה נמוכה) בתמורה לדירה מוקדמת. עורך דין דיירים מוודא שכל החלופות שלמות בהסכם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בעיות מס לא צפויות.</strong> דירה מוקדמת באזור שונה מהמקורי עלולה ליצור אירוע מס חלקי. ייעוץ עם רואה חשבון לפני החתימה. ראו את המדריך על{" "}
                <Link
                  href="/madrichim/tax-meturgam-pinui-binui-2026"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  מסים בפינוי בינוי
                </Link>
                .
              </li>
            </ol>
            <p>
              עיון נוסף בחוק והרגולציה זמין באתר{" "}
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              {" "}ובמאגר{" "}
              <a
                href="https://www.nevo.co.il/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                נבו
              </a>
              {" "}לתיקון 80 ולחוק התכנון והבנייה.
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
              מתלבטים בין דירת תמורה לדירה מוקדמת? בואו נדבר.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים נציגויות דיירים בבחירת המודל המתאים. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="דירת תמורה או דירה מוקדמת?"
            subtitle="השאירו שם וטלפון. נחזור אליכם עם השוואה מותאמת למצבכם הספציפי."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="madrichim/dirot-temura-vs-mukdamot"
        targets={[
          "pinui-binui-temurot",
          "pinui-binui-kshishim",
          "pinui-binui-yorshim",
          "pinui-binui",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על דירת תמורה ודירה מוקדמת"
        tone="soft"
        includeSchema
      />
    </>
  );
}
