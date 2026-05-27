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
import JsonLd from "@/components/JsonLd";
import TrustBlock from "@/components/TrustBlock";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/pinui-binui/yazam";
const TITLE = "איך בוחרים יזם פינוי בינוי 2026: מדריך מלא | התחדשות";
const DESCRIPTION =
  "בחירת יזם בפינוי בינוי היא ההחלטה הקריטית של הפרויקט. מדריך 2026: 12 שאלות שחובה לשאול, דגלים אדומים, איך להשוות הצעות, ואיך להבטיח שהיזם יבצע מה שהבטיח.";
const PUBLISHED_DATE = "2026-05-03";
const MODIFIED_DATE = "2026-05-03";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqs = [
  {
    q: "איך אני בודק יזם פינוי בינוי?",
    a: "בדיקת יזם כוללת חמישה צעדים: וידוא רישום ברשם החברות באתר משרד המשפטים, בדיקת ההיסטוריה של הפרויקטים שהשלים, שיחה עם דיירים בפרויקטים קודמים שלו, חיפוש שמו ושם החברה ברשת ובכלי תקשורת, ובדיקת רישום ברשם הקבלנים. בנוסף, בקשת רשימת מוסדות פיננסיים שמלווים את פרויקטיו מספקת מידע על יציבות החברה. כל הצעדים האלה אורכים בדרך כלל 2 עד 3 שבועות, ושווים את ההשקעה.",
  },
  {
    q: "מה זה תשואת יזם ולמה זה משנה לי?",
    a: "תשואת יזם היא הרווח שהיזם צפוי להפיק מהפרויקט, בדרך כלל מבוטא כאחוז מערך הפרויקט הכולל. בפרויקטי פינוי בינוי במרכז הארץ, התשואה נעה בין 12% ל-25% נכון לשנת 2026. תשואה נמוכה מ-12% מסכנת את היזם פיננסית ועלולה להוביל לפשרות בפרויקט. תשואה גבוהה מ-25% מצביעה על הצעה גרועה לדיירים. הבנת התשואה הצפויה עוזרת לכם להעריך אם ההצעה מאוזנת.",
  },
  {
    q: "כמה הצעות יזמים צריך לקבל?",
    a: "מומלץ לקבל לפחות 3 עד 5 הצעות מיזמים שונים. ההשוואה בין ההצעות חושפת פערים בתמורות, בערבויות, ובלוח הזמנים. נציגות דיירים מקצועית בדרך כלל פונה ל-7 עד 10 יזמים בשלב הראשוני, ומסננת ל-3 הסופיים. תהליך זה אורך 4 עד 6 חודשים, ובדרך כלל מניב הצעה משמעותית טובה יותר מההצעה הראשונה שמתקבלת. הזמן שמושקע בהשוואה משתלם בעשרות אלפי שקלים תוספת תמורה.",
  },
  {
    q: "איך אני יודע אם הצעה היא טובה?",
    a: "הצעה טובה כוללת תוספת מטרים בטווח הסטנדרטי לאזור (15 עד 35 מ&ldquo;ר במרכז הארץ), חניה תת-קרקעית, מחסן, ערבויות בנקאיות מלאות, פיצוי על איחור במסירה, וסעיפים שמגנים על הדיירים בכשלים. הצעה שחסר בה אחד מהמרכיבים האלה אינה הצעה תקנית. השוואה למספר הצעות אחרות בפרויקטים דומים בעיר מספקת קנה מידה אמיתי. עורך דין דיירים שמכיר את האזור יכול להעריך אם ההצעה תחרותית.",
  },
  {
    q: "מה זה ניסיון מוכח של יזם?",
    a: "ניסיון מוכח הוא לפחות שני פרויקטי פינוי בינוי שהיזם השלים מתחילתם ועד מסירת המפתח. ניסיון בפרויקטי בנייה אחרים, גם אם הם גדולים, אינו זהה לניסיון בפינוי בינוי. הסיבה: פינוי בינוי מערב משא ומתן עם דיירים, ניהול הליכים משפטיים מורכבים, וניהול ארוך טווח של פרויקט במשך 7 עד 12 שנים. יזם שזה הפרויקט הראשון שלו בפינוי בינוי הוא סיכון משמעותי, גם אם הוא בעל ניסיון בבנייה.",
  },
  {
    q: "האם כדאי לקחת את היזם הזול?",
    a: "לא בהכרח, ובמרבית המקרים לא כדאי. יזם שמציע הצעה זולה במידה משמעותית מהשוק עלול להיות במצב פיננסי קשה, או לתכנן קיצוצים שיפגעו באיכות הפרויקט. ההצעה התחרותית הטובה ביותר היא לרוב במחצית האמצעית של ההצעות, לא הקיצוניות. בנוסף, חשוב לבחון את ההצעה במונחים כוללים: לא רק תמורה, אלא גם ערבויות, לוח זמנים, ויציבות פיננסית של היזם.",
  },
  {
    q: "מה אם היזם מציע יותר אבל בלי ערבויות?",
    a: "תמורה גבוהה בלי ערבויות תקניות אינה הצעה אמיתית. בלי ערבויות בנקאיות, הדיירים נסמכים על יכולת הביצוע של היזם בלבד, ובכל מקרה כשל הם עלולים להישאר ללא דירה וללא כיסוי. תמיד עדיף יזם עם תמורה מעט נמוכה יותר אבל ערבויות מלאות, מאשר יזם עם תמורה גבוהה ללא ערבויות. הערבויות הן הליבה של הביטחון הכלכלי בפרויקט.",
  },
  {
    q: "מה ההבדל בין יזם, קבלן, וחברת בנייה בפרויקט פינוי בינוי?",
    a: "היזם הוא הגורם שיוזם את הפרויקט, מתקשר עם הדיירים, מקבל את ההיתרים, ולוקח אחריות עסקית כוללת. הקבלן הוא הגורם שמבצע את הבנייה בפועל. חברת בנייה היא קטגוריה רחבה שיכולה לכלול את שני התפקידים, או רק אחד מהם. בפרויקטים גדולים, היזם בדרך כלל מעסיק קבלן ביצוע נפרד. חשוב לדעת מי בעל ההסכם החתום מולכם, ומי האחראי לכל שלב.",
  },
];

const howToYazamJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "איך בוחרים יזם פינוי בינוי",
  description: "12 שאלות שחובה לשאול כל יזם פינוי בינוי לפני חתימה על הסכם, עם הסבר מה התשובה הראויה ואילו דגלים אדומים לחפש.",
  totalTime: "P14D",
  step: [
    { "@type": "HowToStep", position: 1, name: "כמה פרויקטי פינוי בינוי השלמתם בעבר?", text: "ניסיון מוכח הוא לפחות שני פרויקטים שהושלמו במלואם. ניסיון בבנייה כללית אינו זהה." },
    { "@type": "HowToStep", position: 2, name: "מי המוסדות הפיננסיים שמלווים את הפרויקטים שלכם?", text: "בנקים גדולים מצביעים על יציבות. תשובה מעורפלת או היעדר רשימה הם דגל אדום." },
    { "@type": "HowToStep", position: 3, name: "מה התשואה הצפויה לפרויקט שלי?", text: "תשואה בטווח 12% עד 25% היא תקנית. תשואה מחוץ לטווח דורשת בירור." },
    { "@type": "HowToStep", position: 4, name: "אילו ערבויות תספקו, ואיזה בנק מנפיק אותן?", text: "ערבויות בנקאיות מבנקים גדולים הן הסטנדרט. ערבויות אישיות בלבד אינן מספיקות." },
    { "@type": "HowToStep", position: 5, name: "מי יהיה מנהל הפרויקט הספציפי שלי?", text: "אדם בעל שם ופרופיל מקצועי, לא תשובה כללית של 'צוות הפרויקט'." },
    { "@type": "HowToStep", position: 6, name: "מה לוח הזמנים המפורט עד מסירת הדירה?", text: "ציר זמן מפורט עם תאריכי יעד לשלבים מרכזיים." },
    { "@type": "HowToStep", position: 7, name: "מה קורה אם יש איחור במסירה?", text: "פיצוי מוסכם לחודש איחור, מגובה בערבות נפרדת." },
    { "@type": "HowToStep", position: 8, name: "מי בוחר את האדריכל ואת השמאי בפרויקט?", text: "שמאי דיירים בלתי תלוי הוא הכרחי. אדריכל מטעם היזם בלבד מצריך פיקוח." },
    { "@type": "HowToStep", position: 9, name: "איזו דירת תמורה אקבל בדיוק?", text: "תשובה ספציפית עם מספר דירה, קומה, כיוון, וגודל. לא 'דירה במתחם'." },
    { "@type": "HowToStep", position: 10, name: "מי משלם על מה?", text: "פירוט שקוף של אחריות תשלומים על מס שבח, היטל השבחה, רישוי, וייעוץ עורך דין." },
    { "@type": "HowToStep", position: 11, name: "מה הסיכון אם הפרויקט נכשל?", text: "ערבויות, תהליכי שחזור, וזכות לחזור לדירה הישנה אם הבנייה לא מתחילה." },
    { "@type": "HowToStep", position: 12, name: "האם החברה שלכם רשומה כדין ברשם החברות?", text: "ניתן לוודא ברשם החברות. רישום פעיל ובעלי תפקידים מזוהים הם תנאי הכרחי." },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={howToYazamJsonLd} />
      <SchemaArticle
        headline="איך בוחרים יזם פינוי בינוי 2026: 12 השאלות שחובה לשאול"
        description={DESCRIPTION}
        canonical={PATH}
        datePublished={`${PUBLISHED_DATE}T00:00:00+03:00`}
        dateModified={`${MODIFIED_DATE}T00:00:00+03:00`}
        lastReviewedDate={`${MODIFIED_DATE}T00:00:00+03:00`}
      />
      <SchemaBreadcrumb
        items={[
          { name: "פינוי בינוי", url: "/pinui-binui" },
          { name: "איך בוחרים יזם פינוי בינוי", url: PATH },
        ]}
      />

      <PageHero
        eyebrow="פינוי בינוי · בחירת יזם"
        title="איך בוחרים יזם פינוי בינוי 2026: 12 השאלות שחובה לשאול"
        subtitle="מדריך 2026 לנציגות דיירים ולבעלי דירות שעומדים לבחור יזם: 12 שאלות הכרחיות, 8 דגלים אדומים, השוואת הצעות, ובדיקת רקע מקצועית."
        crumbs={[
          { name: "פינוי בינוי", href: "/pinui-binui" },
          { name: "בחירת יזם", href: PATH },
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
            <p className="text-[17px] text-[var(--color-ink)] leading-8">
              בחירת יזם ב
              <Link
                href="/pinui-binui"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                פינוי בינוי
              </Link>{" "}
              היא ההחלטה החשובה ביותר של הפרויקט. יזם טוב יביא את הדיירים לדירה חדשה תוך 7 עד 12 שנים עם תמורות הוגנות, ערבויות תקניות, וביצוע ללא דרמות. יזם רע יסבך את הדיירים בעיכובים, חוסר ערבויות, ודיירות חלופית בעייתית. הבחירה בין השניים תלויה בכמה שאלות פרקטיות שמרבית הדיירים לא יודעים לשאול. מדריך 2026 מפרט 12 שאלות שחייבים לשאול כל יזם, דגלים אדומים שמסמנים סיכון, ואיך להשוות הצעות בצורה מקצועית.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="lama-kriti" title="למה הבחירה ביזם כל כך קריטית?">
            <p>
              פרויקט פינוי בינוי מערב מערכת יחסים ארוכת טווח עם היזם. במהלך 7 עד 12 שנות הפרויקט, הדיירים תלויים ביזם בכל שלב: פינוי, מימון בנייה, אישורים, פיצוי על איחור, ומסירה. החלטה לא טובה בשלב הבחירה משפיעה על כל שאר הפרויקט.
            </p>
            <p>
              הבעיה: רוב הדיירים נחשפים לפינוי בינוי פעם אחת בחיים. אין להם ניסיון בהשוואת יזמים, אין להם כלים לזהות דגלים אדומים, ואין להם רשת מקצועית לבדיקת רקע. היזם, לעומת זאת, מנהל פרויקטים דומים באופן מתמיד וברור לו איך להציג את עצמו.
            </p>
            <p>
              פער הניסיון הזה הוא הסיבה שמדריך מובנה לבחירת יזם הוא חשוב כל כך. שאלות נכונות חושפות פערים בין יזם מקצועי ליזם בעייתי, גם אם השני יודע להציג את עצמו טוב יותר. נציגות דיירים שמלווה במקצוע מקצועי, או חברה ניטרלית כמו חברת בנייה ותיקה שמלווה דיירים, מעלה משמעותית את הסיכוי להגיע להחלטה נכונה.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="12-shealot" title="12 השאלות שחובה לשאול לפני בחירה">
            <p>
              שתים-עשרה שאלות שחובה לשאול כל יזם לפני בחירה. כל שאלה חושפת היבט אחר של היזם ושל ההצעה.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">כמה פרויקטי פינוי בינוי השלמתם בעבר?</strong> ניסיון מוכח הוא לפחות שני פרויקטים שהושלמו במלואם. ניסיון בבנייה כללית אינו זהה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מי המוסדות הפיננסיים שמלווים את הפרויקטים שלכם?</strong> בנקים גדולים מצביעים על יציבות. תשובה מעורפלת או היעדר רשימה הם דגל אדום.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה התשואה הצפויה לפרויקט שלי?</strong> תשואה בטווח 12% עד 25% היא תקנית. תשואה מחוץ לטווח דורשת בירור.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אילו ערבויות תספקו, ואיזה בנק או חברת ביטוח מנפיקה אותן?</strong> ערבויות בנקאיות מבנקים גדולים הן הסטנדרט. ערבויות אישיות בלבד אינן מספיקות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מי יהיה מנהל הפרויקט הספציפי שלי?</strong> אדם בעל שם ופרופיל מקצועי. לא תשובה כללית של &ldquo;צוות הפרויקט&rdquo;.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה לוח הזמנים המפורט עד מסירת הדירה?</strong> ציר זמן מפורט עם תאריכי יעד לשלבים מרכזיים. אם אין ציר מפורט, אין התחייבות אמיתית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה קורה אם יש איחור במסירה?</strong> פיצוי מוסכם לחודש איחור, מגובה בערבות נפרדת. בלי סעיף זה, איחור הופך לנטל על הדיירים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מי בוחר את האדריכל ואת השמאי בפרויקט?</strong> שמאי דיירים בלתי תלוי הוא הכרחי. אדריכל מטעם היזם בלבד מצריך פיקוח.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איזו דירת תמורה אקבל בדיוק (קומה, כיוון, גודל)?</strong> תשובה ספציפית עם מספר דירה, קומה, כיוון, ומ&ldquo;ר. לא &ldquo;דירה במתחם&rdquo;.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מי משלם על מה (מס שבח, היטל השבחה, רישוי, ייעוץ עורך דין)?</strong> פירוט שקוף של אחריות תשלומים. רוב ההוצאות הן באחריות היזם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">מה הסיכון אם הפרויקט נכשל?</strong> ערבויות, תהליכי שחזור, וזכות לחזור לדירה הישנה אם הבנייה לא מתחילה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">האם החברה שלכם רשומה כדין ברשם החברות?</strong> ניתן לוודא ב
                <a
                  href="https://www.gov.il/he/departments/dynamic_collectors/companies-registry/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
                >
                  רשם החברות
                </a>
                . רישום פעיל ובעלי תפקידים מזוהים.
              </li>
            </ol>
            <p>
              לפני המעבר לשאלה הבאה, חשוב לבדוק גם את הסעיף על{" "}
              <Link
                href="/pinui-binui/eravut"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ערבויות בפינוי בינוי
              </Link>{" "}
              ולוודא שההצעה כוללת את כל הערבויות הנדרשות.
            </p>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="degalim-adumim" title="8 דגלים אדומים שמסמנים יזם בעייתי">
            <p>
              שמונה סימני אזהרה. אם אחד מהם מופיע, צריך לעצור ולברר. אם שניים או יותר, יש סבירות גבוהה שזה לא היזם הנכון.
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">לחץ לחתימה מהירה.</strong> דרישה לחתום תוך ימים, לפני שעורך דין דיירים בודק את ההסכם, היא הדגל האדום הראשון. יזם מקצועי מבין שבדיקה מקצועית היא חלק מהתהליך.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סירוב להציג רשימת פרויקטים קודמים.</strong> רשימה מסודרת עם פרטי קשר של נציגויות דיירים מפרויקטים שהושלמו. סירוב להציג היא היעדר רקע אמיתי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">הסכם בלתי ברור או מורכב במיוחד.</strong> הסכם בעברית מסובכת או רצוף סעיפים שאי אפשר להבין. יזם מקצועי משתמש בשפה ברורה ומסביר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">ערבויות חסרות או לא תקניות.</strong> חוסר נכונות לספק את כל הערבויות הסטנדרטיות. ערבות אישית במקום בנקאית, או ערבות חלקית.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">תמורה גבוהה במיוחד.</strong> הצעה שטובה משמעותית מההצעות האחרות בפרויקט. בדרך כלל מדובר ביזם שלא מסוגל לעמוד בהצעה ויפסיק או יקצץ בהמשך.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">אי-יציבות פיננסית גלויה.</strong> חברה חדשה ללא הון, ללא מסגרת אשראי, או עם היסטוריית פירוקים של חברות קודמות של אותם בעלים.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חוסר שקיפות לגבי תשואה.</strong> סירוב לשתף את התשואה הצפויה. שקיפות היא סימן ליזם מקצועי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">איומים או לחץ על הדיירים.</strong> איום בתביעה, לחץ דרך ועד הבית, או הצקה לדיירים מסרבנים. יזם מקצועי פועל דרך עורכי דין ובאופן מסודר.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <ContentSection id="hashvaa" title="איך להשוות הצעות בין כמה יזמים">
            <p>
              השוואה מסודרת בין הצעות חושפת פערים שלא ברורים בקריאה בודדת. ששה קריטריונים מרכזיים לכל הצעה.
            </p>
          </ContentSection>

          <div className="mt-8 max-w-5xl">
            <ComparisonTable
              caption="מסגרת להשוואת הצעות יזמים בפרויקט פינוי בינוי (לדוגמה)"
              columns={[
                { key: "a", header: "יזם א" },
                { key: "b", header: "יזם ב" },
                { key: "c", header: "יזם ג" },
              ]}
              rows={[
                {
                  label: "תוספת מ\"ר לדירת התמורה",
                  cells: { a: "25 מ\"ר", b: "20 מ\"ר", c: "30 מ\"ר" },
                },
                {
                  label: "ערבויות בנקאיות מלאות",
                  cells: { a: "כן", b: "חלקיות", c: "כן" },
                },
                {
                  label: "פיצוי על איחור במסירה",
                  cells: { a: "8,000 ש\"ח/חודש", b: "ללא", c: "5,000 ש\"ח/חודש" },
                },
                {
                  label: "ניסיון מוכח בפינוי בינוי",
                  cells: { a: "4 פרויקטים", b: "1 פרויקט", c: "3 פרויקטים" },
                },
                {
                  label: "תשואה צפויה",
                  cells: { a: "18%", b: "מסרב לשתף", c: "20%" },
                },
                {
                  label: "לוח זמנים מפורט",
                  cells: { a: "ציר זמן מלא", b: "כללי", c: "ציר זמן מלא" },
                },
              ]}
              footnote="הטבלה היא דוגמה מנחה. ההשוואה האמיתית תלויה בנתוני הפרויקט הספציפי ובהצעות שתקבלו."
            />
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="bdikat-reka" title="בדיקת רקע על יזם: איך לעשות">
            <p>
              חמישה ערוצי בדיקה מקבילים. ככל שיותר ערוצים נבדקים, התמונה ברורה יותר.
            </p>
            <ol className="mt-4 space-y-3 list-decimal pr-6 marker:font-bold marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">רשם החברות.</strong> וידוא שהחברה רשומה, פעילה, ובעלי התפקידים מזוהים. ניתן לבצע באתר משרד המשפטים בחיפוש לפי שם או מספר ח&ldquo;פ.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">פרויקטים בעבר.</strong> רשימת פרויקטים שהיזם השלים, כולל כתובות, שנים, ומספר יחידות. בקשה לרשימה כתובה.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">שיחה עם דיירים מפרויקטים קודמים.</strong> 2 עד 3 שיחות עם נציגי דיירים מפרויקטים קודמים שהיזם ביצע. מקור המידע האמין ביותר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">חיפוש ברשת.</strong> חיפוש שם החברה ושם בעלי התפקידים בגוגל ובתקשורת. כתבות, פסקי דין, תלונות, או ביקורות.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">רשם הקבלנים.</strong> אם היזם משמש גם כקבלן ביצוע, וידוא רישום ברשם הקבלנים בענף הרלוונטי. רמת הסיווג צריכה להתאים להיקף הפרויקט.
              </li>
            </ol>
            <p>
              למידע נוסף על מסגרת הרגולציה של פרויקטי התחדשות עירונית, ראו את אתר{" "}
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

      <Section tone="soft">
        <Reveal>
          <ContentSection id="azhara-bemumam" title="סימני אזהרה במהלך מו״מ">
            <p>
              גם אחרי שהיזם נבחר, סימני אזהרה במהלך המו&ldquo;מ עשויים להעיד על בעיה. ארבעה סימנים עיקריים:
            </p>
            <ul className="mt-4 space-y-3 list-disc pr-6 marker:text-[var(--color-accent-dark)]">
              <li>
                <strong className="text-[var(--color-primary)]">שינויים בהסכם בין גרסה לגרסה ללא הסבר.</strong> סעיפים שמופיעים, נעלמים, או משתנים בלי שיחה. דגל אדום מהותי.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">לחץ לסגירה מהירה לפני שעורך דין מסיים בדיקה.</strong> לחץ לחתום לפני שכל הצדדים מסיימים את הבדיקה הוא סימן לחוסר נוחות מצד היזם.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">סירוב לפגישה עם נציגי דיירים מפרויקטים קודמים.</strong> אם היזם לא מאפשר את השיחה, יש מה להסתיר.
              </li>
              <li>
                <strong className="text-[var(--color-primary)]">בקשת ויתורים נוספים אחרי תחילת הבנייה.</strong> דרישה לוויתור על סעיף, גם אם נראית סבירה, חייבת להיבדק במלואה. שינויים בהסכם הם הזדמנות לדייר לחזק את עמדתו, לא להחליש.
              </li>
            </ul>
          </ContentSection>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <ContentSection id="bicharti-lo-nachon" title="מה אם בחרתי לא נכון? איך לבטל">
            <p>
              אם הדיירים זיהו שהיזם הוא הבחירה הלא נכונה לפני שהפרויקט התחיל, יש מספר נתיבי ביטול. הנתיב המדויק תלוי בשלב המדויק של ההסכם.
            </p>
            <p>
              אם ההסכם נחתם אך הביצוע טרם החל: ייתכן שניתן לבטל בהסכמת היזם, או באמצעות תביעה משפטית אם יש עילה. בשלב זה, מימון משפטי וזמן הם השיקול המרכזי. אם רוב הדיירים מסכימים על הצורך בביטול, ההצלחה גדולה יותר.
            </p>
            <p>
              אם הביצוע כבר החל: הביטול קשה יותר ועלול לפגוע בדיירים שכבר פינו את הדירה. ייעוץ משפטי דחוף הוא הכרחי. במצבים מסוימים, החלפת היזם תוך כדי הפרויקט אפשרית, אך מדובר בהליך מורכב שדורש פיקוח קפדני.
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
              יזם הציע לכם לפרויקט פינוי בינוי? בדקו אותו לפני שאתם חותמים.
            </h2>
            <p className="text-[17px] text-[var(--color-ink)] leading-8 mb-6">
              אנחנו מלווים נציגויות דיירים בבחירת יזם, מבחינה אובייקטיבית. עובדים בשבילכם, לא בשביל היזם. ייעוץ ראשוני ללא עלות, ללא התחייבות.
            </p>
          </div>
          <InlineLeadForm
            title="בחירת יזם פינוי בינוי: בואו נדבר"
            subtitle="השאירו שם וטלפון. נעבור על ההצעות שקיבלתם בליווי מקצועי."
            defaultService="urban-renewal"
            prioritizeUrbanRenewal
          />
        </Reveal>
      </Section>

      <RelatedLinks
        seed="pinui-binui/yazam"
        targets={[
          "pinui-binui",
          "pinui-binui-eravut",
          "madrichim-shealot-yazam",
          "madrichim-yazamim",
        ]}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title="שאלות נפוצות על בחירת יזם פינוי בינוי"
        tone="soft"
        includeSchema
      />
    </>
  );
}
