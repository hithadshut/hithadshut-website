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
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import PinuiBinuiCalculator from "@/components/calculators/PinuiBinuiCalculator";

const PATH = "/pinui-binui/machshvon-temurot";
const TITLE = "מחשבון פינוי בינוי 2026: בדקו אם ההצעה הוגנת | התחדשות";
const DESCRIPTION =
  "מחשבון פינוי בינוי 2026: הזינו את פרטי הדירה הישנה ואת ההצעה של היזם, וקבלו הערכה מקצועית האם ההצעה תואמת סטנדרט השוק. ייעוץ ראשוני ללא עלות.";
const PUBLISHED_DATE = "2026-05-04";
const MODIFIED_DATE = "2026-05-04";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "מחשבון פינוי בינוי",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "ILS",
  },
  description:
    "כלי הערכה אינטראקטיבי לבדיקת הצעת יזם בפינוי בינוי. בודק 5 פרמטרים מרכזיים (תוספת מ״ר, חניה, מחסן, פיצוי, וזכויות גיל) לעומת סטנדרטים בשוק 2026.",
  url: "https://hithadshut.co.il/pinui-binui/machshvon-temurot",
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "איך לבדוק אם הצעה לפינוי בינוי הוגנת",
  description:
    "מדריך 4 שלבים לבדיקת הצעת יזם בפרויקט פינוי בינוי באמצעות מחשבון השוואה לסטנדרט השוק במרכז הארץ.",
  totalTime: "PT5M",
  tool: [{ "@type": "HowToTool", name: "מחשבון פינוי בינוי" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "הזינו את פרטי הדירה הישנה",
      text: "בחרו את האזור הגיאוגרפי, הזינו את גודל הדירה במ״ר, גיל הבניין, ומספר היחידות במתחם.",
      url: "https://hithadshut.co.il/pinui-binui/machshvon-temurot#step-1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "הזינו את פרטי ההצעה של היזם",
      text: "ציינו את תוספת המ״ר שהיזם מציע, האם יש חניה תת-קרקעית, האם יש מחסן, והאם יש פיצוי כספי.",
      url: "https://hithadshut.co.il/pinui-binui/machshvon-temurot#step-2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "הזינו את פרטיכם האישיים",
      text: "השאירו שם וטלפון כדי לקבל את התוצאה ואת הניתוח המקצועי שלנו.",
      url: "https://hithadshut.co.il/pinui-binui/machshvon-temurot#step-3",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "קבלו את התוצאה",
      text: "המחשבון מציג ציון מ-0 עד 100, רשימת נקודות חיוביות, ורשימת נקודות שדורשות שיפור במו״מ עם היזם.",
      url: "https://hithadshut.co.il/pinui-binui/machshvon-temurot#step-4",
    },
  ],
};

const faqs = [
  {
    q: "כמה מדויק המחשבון?",
    a: "המחשבון מספק הערכה ראשונית מבוססת על סטנדרטים בשוק ב-2026 במרכז הארץ. הוא בוחן 5 פרמטרים מרכזיים, אך הצעה בפינוי בינוי מורכבת מעשרות סעיפים. המחשבון לא יכול להחליף בדיקה מקצועית של עורך דין דיירים ושמאי בלתי תלוי. הוא כלי שיעזור לכם להבין אם ההצעה בכיוון הכללי, ועל מה כדאי להתמקד בבדיקה המקצועית.",
  },
  {
    q: "למה צריך להשאיר פרטים כדי לראות את התוצאה?",
    a: "כדי לתת לכם הערכה אמינה ולא תוצאה גנרית, אנחנו זקוקים להבין מהפרויקט שלכם. הפרטים שאתם משאירים נשארים אצלנו בלבד, ומשמשים אותנו לחזור אליכם עם הערכה מותאמת ולענות על שאלות. אנחנו לא מוכרים מידע לצדדים שלישיים, ולא שולחים פרסומות. אם אתם לא רוצים שניצור קשר, פשוט אל תהיו זמינים. אנחנו לא נטריד.",
  },
  {
    q: "האם המחשבון מתאים לכל אזור בארץ?",
    a: "המחשבון מבוסס בעיקר על נתונים מהמרכז הארץ ומגוש דן הרחב. הוא מספק הערכה גם לאזורי פריפריה-מרכזית (נתניה, אשדוד, מודיעין), אך באזורים פריפריאליים רחוקים יותר התוצאה פחות מדויקת בגלל מגוון רחב יותר של תנאי שוק. אם הפרויקט שלכם בפריפריה רחוקה, ההמלצה היא להתייעץ עם איש מקצוע מקומי שמכיר את שוק האזור.",
  },
  {
    q: "ההצעה שלי קיבלה ציון נמוך, מה זה אומר?",
    a: "ציון נמוך אומר שההצעה כפי שהיא מוצגת היום נמצאת מתחת לסטנדרט המקובל בשוק במרכז הארץ. זה לא בהכרח אומר שהיזם הוא לא טוב או שהפרויקט נכשל. זה אומר שיש מקום לשיפור, ושכדאי להגיע לשולחן המו״מ עם נתונים ביד. הרבה פעמים הצעה התחלתית של יזם מהווה נקודת פתיחה למו״מ, והנציגות הדיירים מצליחה לשפר אותה משמעותית.",
  },
  {
    q: "ההצעה שלי קיבלה ציון גבוה, האם אני יכול לחתום?",
    a: "לא בלי בדיקה מקצועית מלאה. ציון גבוה במחשבון אומר שהפרמטרים העיקריים שבדקנו תואמים את הסטנדרט. אבל הסכם פינוי בינוי כולל עשרות סעיפים נוספים: ערבויות, זמני מסירה, פיצויים על איחור, סעיפי גיל, סעיפי יורשים, מסלולי ביטוח. כל אחד מהסעיפים הללו יכול להפוך הצעה טובה לבעייתית. עורך דין דיירים בלתי תלוי ביזם הוא הכרחי לפני כל חתימה.",
  },
  {
    q: "האם המחשבון מתחשב בגיל הדייר?",
    a: "כן. אם הזנתם שאתם או הדייר העיקרי בגיל 70+ או 75+, המחשבון מציג התראות ספציפיות על הזכויות שמגיעות לדיירים מבוגרים בפינוי בינוי. דייר בגיל 70+ זכאי לפחות לחלופה אחת מתוך 3 (דיור מוגן, דירה חלופית, או שתי דירות). דייר בגיל 75+ זכאי לכל 3 החלופות. סעיפים אלה חייבים להופיע בהסכם, וההמחשבון מסמן אם הם חסרים בהצעה הנוכחית.",
  },
  {
    q: "מה אם אין לי את כל הנתונים שהמחשבון דורש?",
    a: "רוב הנתונים אפשר למצוא בהצעה הראשונית של היזם או בטיוטת ההסכם. אם משהו לא ברור, אפשר לבחור 'לא צוין' באפשרויות הרלוונטיות, והמחשבון יסמן זאת כסעיף שדורש בירור. אם אין לכם הצעה רשמית עדיין, המחשבון פחות שימושי. חזרו אליו אחרי שתקבלו הצעה ראשונית מהיזם.",
  },
  {
    q: "האם אתם משתמשים בפרטים שלי לפרסום?",
    a: "לא. הפרטים שאתם משאירים נשארים אצלנו בלבד ומשמשים רק לחזור אליכם עם הערכה מותאמת. אנחנו לא מוכרים את המידע, לא משתפים עם יזמים או צדדים שלישיים, ולא משלבים בקמפיינים פרסומיים. אם בחרתם לא להישאר בקשר אחרי השיחה הראשונית, אנחנו פשוט מסירים את הפרטים מהמערכת. אנחנו פועלים לפי חוק הגנת הפרטיות בישראל.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaArticle
        headline="מחשבון פינוי בינוי 2026: בדקו אם ההצעה של היזם הוגנת"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "פינוי בינוי", url: "/pinui-binui" },
          { name: "מחשבון פינוי בינוי", url: PATH },
        ]}
      />
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd data={howToJsonLd} />

      <PageHero
        eyebrow="פינוי בינוי · מחשבון"
        title="מחשבון פינוי בינוי 2026: בדקו אם ההצעה של היזם הוגנת"
        subtitle="כלי הערכה ראשוני להשוואת ההצעה שקיבלתם לסטנדרט השוק במרכז הארץ. מבוסס על נתוני 2026 ופרויקטים שליווינו."
        crumbs={[
          { name: "פינוי בינוי", href: "/pinui-binui" },
          { name: "מחשבון", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              מחשבון{" "}
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>{" "}
              הוא כלי הערכה ראשוני שעוזר לכם לדעת אם ההצעה של היזם תואמת את סטנדרט השוק במרכז הארץ ב-2026. הזינו את גודל הדירה הישנה, האזור הגיאוגרפי, ואת תנאי ההצעה: תוספת מ״ר, חניה, מחסן, פיצוי כספי. המחשבון משווה את הנתונים לטווחי השוק שצברנו מליווי פרויקטים, ומספק הערכה ראשונית של ההצעה. שימו לב: זהו כלי הערכה ראשוני בלבד. החלטה סופית דורשת בדיקה מקצועית של עורך דין דיירים ושמאי בלתי תלויים.
            </p>
            <div className="mt-8 flex flex-col items-start gap-2">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-extrabold px-7 py-3.5 rounded-xl hover:brightness-110 transition text-lg"
              >
                התחילו את הבדיקה: לוקח 60 שניות ←
              </a>
              <p className="text-sm text-[var(--color-muted)]">
                ייעוץ ראשוני ללא עלות. ללא התחייבות.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ech-oved" title="איך עובד המחשבון?">
            <p>
              המחשבון משווה את ההצעה שלכם לטווח הסטנדרטי בשוק לפי האזור הגיאוגרפי. הוא בוחן 5 פרמטרים: תוספת מ״ר, חניה, מחסן, פיצוי כספי, וזכויות גיל. הוא מחזיר ציון מצרפי וניתוח של החוזקות והחולשות בהצעה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="lama-anachnu" title="למה אנחנו?">
            <p>
              אנחנו לא יזמים. אנחנו חברת בנייה שמלווה נציגויות דיירים מהארגון הראשוני ועד מסירת הדירות. הנתונים שמזין המחשבון מבוססים על פרויקטים אמיתיים שליווינו ועל סטנדרטים שמפורסמים על ידי{" "}
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

      <Section tone="white">
        <Reveal>
          <div className="max-w-5xl">
            <div className="text-center mb-8">
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-2">
                מספרים מ-2026
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
                בסיס הנתונים של המחשבון
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 text-center">
                <div className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-1">247</div>
                <div className="text-sm text-[var(--color-muted)] leading-snug">פרויקטי פינוי בינוי במרכז הארץ ב-2026</div>
              </div>
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 text-center">
                <div className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-1">1,800+</div>
                <div className="text-sm text-[var(--color-muted)] leading-snug">דיירים שקיבלו ייעוץ ראשוני</div>
              </div>
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 text-center">
                <div className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-1">5</div>
                <div className="text-sm text-[var(--color-muted)] leading-snug">פרמטרים מרכזיים נבדקים</div>
              </div>
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5 text-center">
                <div className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-1">24 שעות</div>
                <div className="text-sm text-[var(--color-muted)] leading-snug">זמן תגובה ממוצע לשיחת ייעוץ</div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-kolel" title="מה כולל המחשבון">
            <p>
              המחשבון בודק 5 פרמטרים מרכזיים בהצעה: תוספת מ״ר לעומת סטנדרט האזור, חניה תת-קרקעית, מחסן, פיצוי כספי, וזכויות גיל לדיירים בני 70 ומעלה. הוא משווה את הנתונים לטווחי שוק שצברנו מליווי פרויקטים אמיתיים בישראל ב-2026, ולסטנדרטים שמפורסמים על ידי הרשות הממשלתית להתחדשות עירונית.
            </p>
            <p>
              הציון הסופי הוא מצרף משוקלל של הפרמטרים, בטווח של 0 עד 100. ציון 80 ומעלה מצביע על הצעה תואמת סטנדרט או טובה ממנו. ציון 60 עד 79 מצביע על הצעה סבירה עם סעיפים שדורשים תשומת לב. ציון 40 עד 59 מצביע על הצעה מתחת לסטנדרט בכמה היבטים. ציון מתחת ל-40 מצביע על הצעה נמוכה משמעותית מסטנדרט השוק.
            </p>
            <p>
              מעבר לציון, המחשבון מציג רשימה של נקודות חיוביות ונקודות שדורשות תשומת לב. רשימת הנקודות מסייעת להבין על אילו סעיפים בהצעה אפשר לבקש שיפור במו״מ עם היזם, ועל אילו סעיפים ההצעה כבר תקנית. אנחנו לא מציגים תוצאה גנרית. כל בדיקה מותאמת לאזור הגיאוגרפי של הפרויקט ולנתונים הספציפיים שהזנתם.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="standart-2026" title="סטנדרט השוק לפי אזור 2026">
            <p>
              טבלת הסטנדרט שלהלן היא הבסיס שעליו המחשבון משווה את הצעת היזם. הנתונים מבוססים על פרויקטים אמיתיים שליווינו ב-2026 ועל המידע שמפרסמת הרשות הממשלתית להתחדשות עירונית.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="טווחי תוספת מ״ר ותקני שוק לפי אזור גיאוגרפי (2026)"
              columns={[
                { key: "range", header: "תוספת מ״ר טיפוסית" },
                { key: "parking", header: "חניה" },
                { key: "storage", header: "מחסן" },
              ]}
              rows={[
                {
                  label: "מרכז הארץ צפוף (תל אביב, רמת גן, גבעתיים, גבעת שמואל)",
                  cells: { range: "20-35 מ״ר", parking: "סטנדרט", storage: "סטנדרט" },
                },
                {
                  label: "ערי לוויין מרכזיות (פתח תקווה, ראשון לציון, חולון, בת ים, רחובות, נס ציונה)",
                  cells: { range: "15-25 מ״ר", parking: "סטנדרט", storage: "סטנדרט" },
                },
                {
                  label: "גוש דן רחב (כפר סבא, רעננה, הרצליה, הוד השרון, רמת השרון)",
                  cells: { range: "18-28 מ״ר", parking: "סטנדרט", storage: "סטנדרט" },
                },
                {
                  label: "ערים פריפריאליות-מרכזיות (נתניה, אשדוד, חדרה, מודיעין)",
                  cells: { range: "12-22 מ״ר", parking: "לרוב כן", storage: "לרוב כן" },
                },
                {
                  label: "פריפריה רחוקה (באר שבע, קרית שמונה, אילת, אזורים אחרים)",
                  cells: { range: "8-18 מ״ר", parking: "תלוי בפרויקט", storage: "תלוי בפרויקט" },
                },
              ]}
              footnote="הטווחים אינדיקטיביים. ההפרש בין יזם ליזם בפרויקט מסוים יכול להגיע ל-10 מ״ר. למידע מקיף ראו את המדריך על תמורות בפינוי בינוי."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-bodek" title="מה המחשבון בודק בכל פרמטר">
            <p>
              לכל אחד מ-5 הפרמטרים יש לוגיקת הערכה משלו. השקיפות בלוגיקה מאפשרת לכם להבין למה הציון הוא כפי שהוא, ועל מה אפשר לעבוד במו״מ עם היזם.
            </p>
            <h3 className="text-lg font-extrabold text-[var(--color-primary)] mt-6 mb-2">תוספת מ״ר</h3>
            <p>
              ההערכה: תוספת בטווח הסטנדרט באזור = ציון מלא. תוספת מעל הסטנדרט = ציון מקסימלי + ציון חיובי. תוספת מתחת לסטנדרט בעד 5 מ״ר = ציון חלקי. תוספת נמוכה משמעותית = אפס + סימון לבעיה. למידע על טווחי השוק ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/temurot"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמורות בפינוי בינוי
              </Link>
              .
            </p>
            <h3 className="text-lg font-extrabold text-[var(--color-primary)] mt-6 mb-2">חניה</h3>
            <p>
              ההערכה: חניה תת-קרקעית כלולה במפורש בהסכם = ציון מלא. חניה לא צוינה בהסכם = ציון חלקי + סימון לבירור. אין חניה בהצעה = אפס. מה שלא כתוב במפורש בהסכם, לא קיים. ניסוח כללי כמו &ldquo;חניה במידת האפשר&rdquo; אינו מקבל ניקוד מלא.
            </p>
            <h3 className="text-lg font-extrabold text-[var(--color-primary)] mt-6 mb-2">מחסן</h3>
            <p>
              ההערכה: מחסן כלול במפורש = ציון מלא. בערי המרכז ובגוש דן הסטנדרט הוא מחסן בגודל 4-8 מ״ר. אם המחסן לא צוין בגודל ובמיקום, יש מקום לבירור. בערי הפריפריה המחסן לא תמיד סטנדרט, אך עדיין רצוי לכלול אותו.
            </p>
            <h3 className="text-lg font-extrabold text-[var(--color-primary)] mt-6 mb-2">פיצוי כספי</h3>
            <p>
              ההערכה: פיצוי כספי הוא תוספת בונוס, לא דרישה. במרכז הארץ ב-2026 פיצוי משמעותי (100,000 ש&ldquo;ח ומעלה) מוסיף ניקוד גבוה. פיצוי קטן יותר מוסיף ניקוד מתון. היעדר פיצוי כספי אינו מפחית מהציון אם שאר הפרמטרים תקניים. במתחמים מסוימים, במיוחד בפריפריה, פיצוי כספי נדיר יחסית.
            </p>
            <h3 className="text-lg font-extrabold text-[var(--color-primary)] mt-6 mb-2">זכויות גיל</h3>
            <p>
              ההערכה משלבת את גיל הדייר עם נוכחות סעיף החלופות בהסכם. דייר בגיל 70-74 שההסכם שלו כולל סעיף חלופות (לפחות חלופה אחת מ-3): אין השפעה שלילית. סעיף חסר כליל בגיל 70+: הציון נחסם בטייר 2 לכל היותר. דייר בגיל 75+ זכאי לכל 3 החלופות (דיור מוגן, דירה חלופית, שתי דירות). חוסר ודאות בסעיף בגיל 75+ מפחית 15 נקודות. סעיף חסר כליל בגיל 75+: הציון נחסם בטייר 3 לכל היותר. למידע מקיף ראו את המדריך על{" "}
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
          <div className="max-w-5xl">
            <div className="text-center mb-8">
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-2">
                דוגמאות מהשטח
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                דוגמאות תוצאות מפרויקטים שליווינו
              </h2>
              <p className="text-[17px] text-[var(--color-muted)] max-w-3xl mx-auto leading-8">
                שלוש דוגמאות שמראות איך הצעה ראשונית של יזם הופכת להצעה משופרת אחרי מו״מ מקצועי.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5">
                <h3 className="font-extrabold text-[var(--color-primary)] text-lg mb-3">דירה 70 מ״ר בחולון</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-bold text-[var(--color-ink)] mb-1">ההצעה הראשונה של היזם</div>
                    <ul className="text-[var(--color-muted)] space-y-0.5 list-disc pr-4">
                      <li>תוספת 18 מ&ldquo;ר</li>
                      <li>חניה תת-קרקעית</li>
                      <li>ללא מחסן</li>
                    </ul>
                    <div className="mt-2 inline-block bg-amber-100 text-amber-900 font-bold text-xs px-2.5 py-1 rounded-full">
                      ציון מחשבון: 60/100 (טייר 2)
                    </div>
                  </div>
                  <div className="border-t border-[var(--color-border)] pt-3">
                    <div className="font-bold text-[var(--color-ink)] mb-1">אחרי מו״מ עם הנציגות</div>
                    <ul className="text-[var(--color-muted)] space-y-0.5 list-disc pr-4">
                      <li>תוספת 23 מ&ldquo;ר</li>
                      <li>חניה תת-קרקעית</li>
                      <li>מחסן 6 מ&ldquo;ר</li>
                    </ul>
                    <div className="mt-2 inline-block bg-emerald-100 text-emerald-900 font-bold text-xs px-2.5 py-1 rounded-full">
                      ציון אחרי שיפור: 85/100 (טייר 1)
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5">
                <h3 className="font-extrabold text-[var(--color-primary)] text-lg mb-3">דירה 65 מ״ר בכפר סבא</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-bold text-[var(--color-ink)] mb-1">ההצעה הראשונה של היזם</div>
                    <ul className="text-[var(--color-muted)] space-y-0.5 list-disc pr-4">
                      <li>תוספת 14 מ&ldquo;ר</li>
                      <li>חניה לא ברורה בהסכם</li>
                      <li>ללא מחסן</li>
                    </ul>
                    <div className="mt-2 inline-block bg-rose-100 text-rose-900 font-bold text-xs px-2.5 py-1 rounded-full">
                      ציון מחשבון: 35/100 (טייר 4)
                    </div>
                  </div>
                  <div className="border-t border-[var(--color-border)] pt-3">
                    <div className="font-bold text-[var(--color-ink)] mb-1">אחרי מו״מ עם הנציגות</div>
                    <ul className="text-[var(--color-muted)] space-y-0.5 list-disc pr-4">
                      <li>תוספת 22 מ&ldquo;ר</li>
                      <li>חניה תת-קרקעית מעוגנת</li>
                      <li>מחסן + 80,000 ש&ldquo;ח פיצוי</li>
                    </ul>
                    <div className="mt-2 inline-block bg-emerald-100 text-emerald-900 font-bold text-xs px-2.5 py-1 rounded-full">
                      ציון אחרי שיפור: 90/100 (טייר 1)
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-5">
                <h3 className="font-extrabold text-[var(--color-primary)] text-lg mb-3">דירה 90 מ״ר ברמת גן (דייר בן 78)</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-bold text-[var(--color-ink)] mb-1">ההצעה הראשונה של היזם</div>
                    <ul className="text-[var(--color-muted)] space-y-0.5 list-disc pr-4">
                      <li>תוספת 28 מ&ldquo;ר</li>
                      <li>חניה ומחסן</li>
                      <li>ללא סעיף חלופות לקשיש</li>
                    </ul>
                    <div className="mt-2 inline-block bg-rose-100 text-rose-900 font-bold text-xs px-2.5 py-1 rounded-full">
                      ציון מחשבון: 40/100 (cap בטייר 3 בגלל גיל)
                    </div>
                  </div>
                  <div className="border-t border-[var(--color-border)] pt-3">
                    <div className="font-bold text-[var(--color-ink)] mb-1">אחרי מו״מ עם הנציגות</div>
                    <ul className="text-[var(--color-muted)] space-y-0.5 list-disc pr-4">
                      <li>כל 3 חלופות הגיל מעוגנות</li>
                      <li>שאר התנאים זהים</li>
                    </ul>
                    <div className="mt-2 inline-block bg-emerald-100 text-emerald-900 font-bold text-xs px-2.5 py-1 rounded-full">
                      ציון אחרי שיפור: 95/100 (טייר 1)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-[var(--color-muted)] mt-6 text-center max-w-3xl mx-auto leading-relaxed">
              הדוגמאות מבוססות על פרויקטים אמיתיים שליווינו, עם פרטים מטושטשים לשמירה על פרטיות. תוצאות במקרה שלכם תלויות במשתנים רבים.
            </p>
            <div className="mt-8 text-center">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-extrabold px-7 py-3.5 rounded-xl hover:brightness-110 transition"
              >
                התחילו את הבדיקה שלכם ←
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <div id="calculator" className="max-w-3xl mx-auto scroll-mt-20">
            <PinuiBinuiCalculator />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="ma-laasot" title="מה לעשות עם התוצאה?">
            <p>
              התוצאה של המחשבון היא נקודת התחלה. שלושה צעדים מומלצים אחרי קבלת התוצאה:
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">בחנו את רשימת הנקודות שדורשות תשומת לב.</strong> כל נקודה היא נושא למו״מ. אם המחשבון מסמן שחסר מחסן בהצעה, זה הסעיף הראשון לבקש שיפור.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">השוו ל-2 הצעות נוספות.</strong> אפילו עם תוצאה חיובית, השוואה לעוד 2 יזמים מספקת קנה מידה ומגדילה את כוח המיקוח.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פנו לבדיקה מקצועית מלאה.</strong> המחשבון בודק 5 פרמטרים. הסכם פינוי בינוי כולל עשרות סעיפים נוספים. עורך דין דיירים ושמאי בלתי תלוי הם הכרחיים לפני חתימה.
              </li>
            </ol>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="ma-lo-bodek" title="מה המחשבון לא בודק?">
            <p>
              המחשבון בודק 5 פרמטרים. עוד עשרות סעיפים בהסכם לא נכנסים למחשבון, ודורשים בדיקה נפרדת:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">ערבויות בנקאיות.</strong> סעיף קריטי שמבטיח את הביטחון הכלכלי. דורש בדיקה משפטית. למידע מקיף ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/eravut"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  ערבויות בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זמני מסירה ופיצוי על איחור.</strong> מועד מסירה מחייב, פיצוי על כל חודש איחור, ערבות נפרדת. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/temurot"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  תמורות בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זהות היזם וניסיון.</strong> 12 שאלות שחובה לשאול את היזם, 8 דגלים אדומים. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/yazam"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  איך בוחרים יזם פינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מס שבח והיטל השבחה.</strong> כללי מיסוי, נייר עמדה ליורשים, פטורים. ייעוץ עם רואה חשבון מקרקעין הוא הכרחי. למידע על יורשים ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/yorshim"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  ירושה דירה בפינוי בינוי
                </Link>
                . עיון נוסף ב
                <a
                  href="https://www.taxes.gov.il/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
                >
                  רשות המסים
                </a>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">זכויות גיל מפורטות.</strong> המחשבון מסמן בלבד. הסעיפים המדויקים והחלופות החובה דורשים בדיקה משפטית. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/kshishim"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  זכויות קשישים בפינוי בינוי
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סעיף סרבנים.</strong> מה קורה אם דייר במתחם אינו מסכים, חוק 67%, הליך תביעה. ראו את המדריך על{" "}
                <Link
                  href="/pinui-binui/sarvan"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  דייר סרבן בפינוי בינוי
                </Link>
                .
              </li>
            </ul>
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
              רוצים בדיקה מקצועית מלאה של ההצעה?
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              המחשבון נותן לכם תמונה ראשונית. בדיקה מקצועית מלאה כוללת ניתוח ערבויות, סעיפי הסכם, מס שבח, וכל הסעיפים שלא ניתן לחשב במחשבון. אנחנו לא יזמים. אנחנו חברת בנייה שמלווה דיירים בבחינת הצעות, ובוחנת הצעות מבחינה מקצועית.
            </p>
          </div>
          <InlineLeadForm
            title="בדיקה מקצועית של ההצעה: בואו נדבר"
            subtitle="השאירו שם וטלפון. נחזור אליכם תוך שעות עם בדיקה ראשונית של ההצעה שקיבלתם."
            defaultService="פינוי בינוי / התחדשות עירונית"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="quick-answers" title="תשובות מהירות לשאלות הנפוצות">
            <p>
              שלוש תשובות מובנות בתבנית קצרה למי שמחפש את התמצית. לעיון מעמיק ראו את הקטעים הספציפיים בעמוד או את ה-FAQ שבסוף.
            </p>
            <h3 className="text-lg font-extrabold text-[var(--color-primary)] mt-6 mb-2">איך מחשבון פינוי בינוי בודק אם ההצעה של היזם הוגנת?</h3>
            <p>
              המחשבון משווה את ההצעה ל-5 פרמטרים מרכזיים: תוספת מ״ר לעומת סטנדרט האזור הגיאוגרפי, חניה תת-קרקעית, מחסן, פיצוי כספי, וזכויות גיל לדיירים בני 70 ומעלה. הציון נע בין 0 ל-100, עם 4 רמות: 75+ הצעה תואמת סטנדרט, 55-74 סבירה עם הסתייגויות, 35-54 מתחת לסטנדרט, מתחת ל-35 נמוכה משמעותית. הסטנדרטים מבוססים על פרויקטים אמיתיים שליווינו ב-2026 ועל המידע הרשמי של{" "}
              <a
                href="https://www.gov.il/he/departments/topics/urban_renewal/"
                target="_blank"
                rel="noopener nofollow"
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
              >
                הרשות הממשלתית להתחדשות עירונית
              </a>
              . למידע מפורט על חוק 67% ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/chok-67"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                חוק 67% בפינוי בינוי
              </Link>
              .
            </p>
            <h3 className="text-lg font-extrabold text-[var(--color-primary)] mt-6 mb-2">מה הסטנדרט לתוספת מ״ר בפינוי בינוי במרכז הארץ ב-2026?</h3>
            <p>
              במרכז הארץ הצפוף (תל אביב, רמת גן, גבעתיים) הסטנדרט הוא תוספת של 20 עד 35 מ״ר. בערי הלוויין המרכזיות (פתח תקווה, ראשון לציון, חולון, בת ים) הטווח הוא 15 עד 25 מ״ר. בגוש דן הרחב (כפר סבא, רעננה, הרצליה) 18 עד 28 מ״ר. בערי פריפריה מרכזיות (נתניה, אשדוד, חדרה, מודיעין) 12 עד 22 מ״ר. בפריפריה רחוקה הטווח הוא 8 עד 18 מ״ר. הצעה מתחת לטווח דורשת מו״מ. לפירוט מלא ראו את המדריך על{" "}
              <Link
                href="/pinui-binui/temurot"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                תמורות בפינוי בינוי
              </Link>
              .
            </p>
            <h3 className="text-lg font-extrabold text-[var(--color-primary)] mt-6 mb-2">מה זכויות דייר בן 75 ומעלה בפרויקט פינוי בינוי?</h3>
            <p>
              דייר בגיל 75 ומעלה זכאי לכל 3 החלופות בהסכם פינוי בינוי: דיור מוגן באיכות מקבילה, רכישת דירה חלופית בערך זהה לדירת התמורה, או שתי דירות שערכן הכולל זהה. החלופות חובה בחוק ולא ניתנות לוויתור גם בחתימה. דייר בגיל 70-74 זכאי לפחות לחלופה אחת מהשלוש. הסכם שלא כולל סעיף חלופות מפורש לקשיש בגיל 70+ הוא פגום משפטית. ייעוץ עם עורך דין מקרקעין הוא הכרחי לפני חתימה. למידע מקיף ראו את המדריך על{" "}
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

      <RelatedLinks
        seed="pinui-binui/machshvon"
        targets={["pinui-binui", "pinui-binui-temurot", "pinui-binui-kshishim"]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על מחשבון פינוי בינוי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
