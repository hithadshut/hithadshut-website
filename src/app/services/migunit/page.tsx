import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/services/migunit";
const TITLE = "מיגונית | יחידת מיגון מוכנה להתקנה | התחדשות בינוי ויזמות";
const DESCRIPTION =
  "מיגונית: יחידת מיגון מאושרת פקע״ר מהמפעל. גדלים ל-2-8 נפשות, 30,000-80,000 ₪ + מע״מ, התקנה תוך ימים. פתרון מיידי לחצר או למרחב חיצוני ללא בנייה.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const faqs = [
  {
    q: "מה זה מיגונית?",
    a: "יחידה ממוגנת חיצונית (לרוב בטון טרומי) שמוצבת בחצר או בחניה בסמוך לבית. פתרון לבתים שאין בהם ממ״ד ואין אפשרות לבנות. לא כל מיגונית תקנית, אנחנו מספקים רק מיגוניות מאושרות פקע״ר.",
  },
  {
    q: "מה ההבדל מממ״ד?",
    a: "ממ״ד הוא חדר פנימי, חלק מהבית, רמת הגנה גבוהה, משמש גם כחדר ביום-יום. מיגונית היא יחידה חיצונית נפרדת, דורשת יציאה מהבית בחירום. ממ״ד עדיף כשאפשר; מיגונית היא פתרון נכון כשממ״ד לא אפשרי.",
  },
  {
    q: "עומדת בתקן פקע״ר?",
    a: "רק אם מדובר בדגם מאושר ספציפית. חובה לבקש אישור בכתב לפני רכישה. אצלנו רק מיגוניות עם אישור תקני של פיקוד העורף, מצורף לתיק הפרויקט.",
  },
  {
    q: "כמה זה עולה?",
    a: "30,000-80,000 ₪ + מע״מ כולל שינוע, הנפה והצבה, תלוי בגודל, סוג (בטון/פלדה) ואבזור. תוספת יסוד/משטח, אוורור מתקדם, גמר פנימי מעלים את המחיר.",
  },
  {
    q: "צריך היתר?",
    a: "מיגוניות קטנות במסלול פטור מהיתר הן אופציה רווחת, מיגוניות גדולות יותר או ליד גבולות חלקה דורשות היתר או רישוי מקוצר. התשובה נקבעת לפי גודל, מיקום ותב\"ע מקומית. אנחנו בודקים מול הרשות המקומית לפני ההזמנה ומטפלים בכל הבירוקרטיה עבורכם.",
  },
  {
    q: "כמה זמן עד שהיא במקום?",
    a: "הצבה עצמה: יום עבודה אחד עם מנוף. הכנה (יסוד/משטח, אישורים, ייצור): 2-8 שבועות, תלוי בדגם ובאישורים.",
  },
  {
    q: "למי זה מתאים?",
    a: "בתים פרטיים ללא ממ״ד, עם חצר/חניה מתאימה. מוסדות, חברות, אתרי בנייה. בבתים משותפים דורש החלטה קולקטיבית.",
  },
  {
    q: "יש מיגוניות להשכרה?",
    a: "כן, יש יצרנים שמספקים להשכרה לתקופות מוגדרות, מתאים לאירועים, בנייה או מצבי חירום זמניים. אנחנו יכולים לתווך גם את זה.",
  },
  {
    q: "מה לגבי מערכת סינון?",
    a: "מיגונית תקנית חייבת פתח אוורור מוגן. סינון כימי-ביולוגי בסיסי נכלל בחלק מהדגמים, אבל לא בכולם. חשוב לבדוק מפרט כל דגם לפני הזמנה. מערכת סינון NBC מתקדמת (דומה לזו שיש בממ״ד תקני) זמינה בדגמים מתקדמים בתוספת של 5,000-15,000 ₪. אצלנו מפרטים בכתב איזה רכיבי סינון כלולים בכל דגם מוצע.",
  },
  {
    q: "איך מחברים חשמל ותאורה?",
    a: "החיבור החשמלי מתבצע מהבית הראשי בעזרת כבל מוגן בתעלה תת-קרקעית או עילית. הלוח החשמלי הפנימי של המיגונית כולל לרוב: שקעים, תאורה פנימית, נקודת חיבור למזגן קטן (אופציונלי), ונקודת תקשורת. מומלץ לחבר גם גיבוי סולארי/סוללה לתרחיש הפסקת חשמל. את החיבור מבצע חשמלאי מוסמך עם הוצאת תעודת חשמלאות.",
  },
  {
    q: "מה התחזוקה הנדרשת?",
    a: "המיגונית עצמה (הבטון והקונסטרוקציה) כמעט ולא דורשת תחזוקה. מה שכן צריך טיפול: בדיקה שנתית של דלת הדף (אטימה, צירים, מנגנון נעילה), החלפת פילטרי סינון לפחות אחת ל-5 שנים, בהתאם להוראות היצרן, בדיקת פתחי אוורור ומאווררים, ניקוי פנימי תקופתי. מומלצת בדיקה מקצועית אחת לשנה-שנתיים.",
  },
  {
    q: "מה קורה בחורף? יש בעיות של רטיבות?",
    a: "מיגונית מבטון טרומי עמידה בגשם, אבל דורשת ניקוז מסודר סביב היסוד, במיוחד במקומות עם פני קרקע נמוכים. בדגמים בסיסיים יכולה להתפתח קונדנסציה בחורף, ופתרונה הוא אוורור תקופתי או יחידת איוורור קטנה. דגמים מתקדמים מגיעים עם איטום משופר. לפני הצבה אנחנו בודקים את הניקוז ומטפלים בו אם צריך.",
  },
  {
    q: "אפשר להעביר מיגונית מבית לבית?",
    a: "כן, זו אחת היתרונות של מיגונית. היא עשויה מבטון טרומי כיחידה אחת, ואפשר להרים אותה במנוף ולהעביר. העברה כוללת: פירוק חיבורים חשמליים, הרמה במנוף (יום עבודה), שינוע, הכנת יסוד/משטח במיקום החדש, הצבה וחיבור מחדש. העלות: 8,000-20,000 ₪, משמעותית פחות מרכישת מיגונית חדשה. הכול בתיאום עם הרשות המקומית החדשה להיתר במיקום החדש.",
  },
  {
    q: "אתם מספקים גם חיבור חשמל ותאורה?",
    a: "כן. חיבור חשמל, תאורה פנימית, ולעיתים גם נקודות שקע, לפי הזמנה. הכל מוכן לשימוש.",
  },
];

const includes = [
  "ייעוץ ובחירת דגם מתאים",
  "אישור פקע״ר של הדגם (בכתב)",
  "בדיקת היתרים מול הרשות המקומית",
  "טיפול בבקשה להיתר/פטור אם נדרש",
  "הכנת יסוד/משטח להצבה",
  "שינוע והנפה עם מנוף",
  "הצבה ועיגון תקני",
  "חיבור חשמל ותאורה פנימית",
  "בדיקת מערכת אוורור",
  "מסירה עם תיק פרויקט ותעודות",
];

const subtypes = [
  { title: "מיגונית בטון טרומי", text: "הסטנדרט הנפוץ. קירות בטון מזוין ~20 ס״מ, דלת הדף, אוורור תקני. יציבה, עמידה, אמינה." },
  { title: "מיגונית פלדה/הרכבה", text: "קלה יותר להנפה והתקנה. מתאימה לחצרות עם גישה מוגבלת. חזית פלדה משוריינת." },
  { title: "מיגונית מתקדמת", text: "עם מערכת סינון כימית-ביולוגית, אבזור פנימי, גמר משופר. מתקרבת לרמת ממ״ד." },
];

const steps = [
  { title: "סיור ובחירת מיקום", text: "ביקור, הבנת המגבלות, בחירת מיקום אופטימלי בחצר/חניה." },
  { title: "בחירת דגם", text: "המלצה על דגם מתאים (גודל, סוג, אבזור) לפי הצרכים והתקציב." },
  { title: "הצעת מחיר וחוזה", text: "הצעה מפורטת כולל שינוע, הנפה, יסוד וחיבורים. חוזה מלא לפני התחלה." },
  { title: "היתרים ואישורים", text: "טיפול בבקשת פטור/היתר מהרשות המקומית. אישור פקע״ר של הדגם." },
  { title: "הכנת השטח", text: "יציקת יסוד/משטח בטון לפי דרישות היצרן והתקן." },
  { title: "הנפה והצבה", text: "הגעת המיגונית, הנפה עם מנוף, הצבה מדויקת ועיגון." },
  { title: "חיבורים וגמר", text: "חיבור חשמל, תאורה, בדיקות אוורור, גמר פנימי אם הוזמן." },
  { title: "מסירה", text: "מסירה רשמית עם תעודות, הוראות שימוש ותיק פרויקט מלא." },
];

const benefits = [
  { title: "רק דגמים תקניים", text: "לא נציע מיגונית שאין לה אישור פקע״ר. תעודה בכתב חלק מהחוזה." },
  { title: "פתרון מהיר", text: "כשממ״ד לא אפשרי, מיגונית מותקנת תוך 2-8 שבועות. פתרון פרקטי מיידי." },
  { title: "חברה אחת", text: "ייעוץ, היתרים, יסוד, הנפה, חיבורים: הכל אצלנו. לא ריצה בין ספקים." },
  { title: "אחריות מלאה", text: "אחריות יצרן על המיגונית + אחריות קבלן על ההתקנה. גורם אחד לתמיכה." },
];

type SizeRow = { occupants: string; dimensions: string; price: string; install: string };
const sizeRows: SizeRow[] = [
  { occupants: "2 אנשים", dimensions: "~1.6×1.6 מ׳ (2.5 מ״ר)", price: "20,000-35,000 ₪ + מע״מ", install: "יום עבודה להצבה" },
  { occupants: "4 אנשים", dimensions: "~2.0×2.0 מ׳ (4 מ״ר)", price: "35,000-55,000 ₪ + מע״מ", install: "יום עבודה להצבה" },
  { occupants: "6 אנשים", dimensions: "~2.4×2.4 מ׳ (5.7 מ״ר)", price: "50,000-75,000 ₪ + מע״מ", install: "יום עבודה להצבה" },
  { occupants: "8+ אנשים", dimensions: "~3.0×3.0 מ׳ (9 מ״ר)", price: "60,000-100,000 ₪ + מע״מ", install: "יום-יומיים להצבה" },
];

export default function Page() {
  return (
    <ServicePageLayout
      path={PATH}
      eyebrow="מיגונית"
      title="מיגונית תקנית: פתרון מיגון מהיר לחצר"
      subtitle="מיגונית מאושרת פיקוד העורף, מותקנת תוך שבועות. כשממ״ד לא אפשרי, זה הפתרון הנכון והמהיר."
      crumbs={[{ name: "שירותים", href: "/#services" }, { name: "מיגונית", href: PATH }]}
      serviceName="מיגונית"
      serviceDescription={DESCRIPTION}
      intro={
        <>
          <p>
            מיגונית היא יחידה ממוגנת חיצונית שמוצבת בחצר או בחניה. פתרון נפוץ לבתים ללא ממ״ד, למוסדות,
            וגם כשבניית ממ״ד חדש לא אפשרית או לא ריאלית. המפתח: בחירה בדגם מאושר פקע״ר בלבד, התקנה
            נכונה, וחיבורים תקינים.
          </p>
          <p>
            בהתחדשות אנחנו מספקים מיגוניות רק מיצרנים עם אישור פקע״ר, מטפלים בכל הבירוקרטיה (היתרים,
            יסודות, חיבורים), ומבצעים את ההתקנה המלאה. מסירה עם תיק מסמכים ותעודות.
          </p>
        </>
      }
      includes={includes}
      subtypes={subtypes}
      subtypesTitle="סוגי מיגוניות"
      steps={steps}
      benefits={benefits}
      timeline="אישורים והכנות: 2-6 שבועות. יצירה והובלה: 2-4 שבועות. הצבה: יום עבודה. סך הכל: 4-8 שבועות."
      pricing="מיגונית סטנדרטית 30,000-60,000 ₪ + מע״מ. דגמים מתקדמים עם סינון ואבזור: 60,000-100,000 ₪ + מע״מ. כולל שינוע והצבה."
      faqs={faqs}
      defaultService="מיגונית"
      quickAnswer={
        <>
          <strong>מיגונית</strong> היא יחידת מיגון מוכנה מהמפעל המותקנת בחצר, ללא בנייה רטובה. עלות: 30,000-80,000 ₪ + מע״מ. התקנה: 4-8 שבועות מההזמנה. במצב חירום נדרשת יציאה מהבית למיגונית. פתרון מהיר ומשתלם בעיקר לבתים פרטיים עם חצר זמינה ולא מספקים גישה תוך-ביתית.
        </>
      }
    >
      {/* Size + price table */}
      <Section tone="white">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 id="size-price-table" className="text-2xl md:text-3xl font-black text-[var(--color-primary)] leading-tight mb-4">
              מיגונית לפי גודל ומחיר
            </h2>
            <p className="text-[var(--color-muted)] mb-6">
              הטבלה מציגה גדלי מיגוניות נפוצים, מידות, טווחי מחיר וזמן התקנה מקובל. המחירים כוללים שינוע, הנפה והצבה, ואינם כוללים מע״מ.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)]">
              <table className="w-full text-right">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr>
                    <th className="p-4 font-black text-sm md:text-base">קיבולת</th>
                    <th className="p-4 font-black text-sm md:text-base">מידות חיצוניות</th>
                    <th className="p-4 font-black text-sm md:text-base">טווח מחיר</th>
                    <th className="p-4 font-black text-sm md:text-base">זמן התקנה</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeRows.map((row, i) => (
                    <tr key={row.occupants} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-soft)]"}>
                      <td className="p-4 font-bold text-[var(--color-ink)]">{row.occupants}</td>
                      <td className="p-4 text-[var(--color-muted)]">{row.dimensions}</td>
                      <td className="p-4 text-[var(--color-primary)] font-extrabold">{row.price}</td>
                      <td className="p-4 text-[var(--color-muted)]">{row.install}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--color-muted)] mt-3">
              המחירים כוללים מיגונית תקנית, שינוע, הנפה והצבה. תוספות: יסוד/משטח, חיבור חשמל, מערכת סינון מתקדמת, גמר פנימי, לפי הזמנה. טווחי זמן מתייחסים להצבה עצמה, לא כולל הכנת יסוד, אישורים וייצור.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Home front command regulation */}
      <Section tone="soft">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 id="home-front-command" className="text-2xl md:text-3xl font-black text-[var(--color-primary)] leading-tight mb-4">
              הסדרה מול פיקוד העורף
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              לא כל מיגונית היא מיגונית תקנית. פיקוד העורף מאשר דגמים ספציפיים בלבד, יצרנים שעברו בדיקות מקצועיות של חומרים, קונסטרוקציה, דלת הדף, פתחי אוורור וסינון. אצלנו רוכשים רק מיגוניות עם אישור פקע״ר בכתב, התעודה מצורפת לתיק הפרויקט, ומהווה חלק מהחוזה.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              הדגם המאושר חייב להיות זהה למה שמוצג באישור: גודל, חומרים, רכיבים, דלת, חלון. שינויים בדגם יכולים להפקיע את האישור. בנוסף, הצבת המיגונית צריכה להיות בהתאם למרחקים מקובלים מגבולות החלקה ושכנים. אנחנו מטפלים בכל התיאומים מול הרשות המקומית ומול פקע״ר.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides/home-front-command-approval"
                className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition"
              >
                המדריך לאישורי פיקוד העורף →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white border border-[var(--color-border)] text-[var(--color-primary)] font-extrabold px-6 py-3 rounded-xl hover:bg-white/70 transition"
              >
                לבירור על דגמים מאושרים
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
            השוואה
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-4">
            מיגונית או ממ״ד מוכן, מה ההבדל?
          </h2>
          <p className="text-[var(--color-muted)] mb-6">
            השוואה טכנית מלאה: עלות, רמת הגנה, זמני ביצוע, אישור פקע״ר.
          </p>
          <Link
            href="/compare/migunit-vs-mamad-muchan"
            className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-extrabold px-7 py-3.5 rounded-xl hover:brightness-110 transition"
          >
            להשוואה המלאה: מיגונית מול ממ״ד מוכן ←
          </Link>
        </div>
      </Section>

      <RelatedLinks
        seed="services/migunit"
        targets={[
          "mamad-cost",
          "home-front-command-approval",
          "choosing-mamad-contractor",
          "compare-migunit-muchan",
          "areas",
        ]}
      />
    </ServicePageLayout>
  );
}
