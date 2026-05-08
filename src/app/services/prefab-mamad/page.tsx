import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/services/prefab-mamad";
const TITLE = "ממ״ד מוכן | יחידה ממוגנת מהמפעל | התחדשות בינוי ויזמות";
const DESCRIPTION =
  "ממ״ד מוכן מהמפעל: יחידה ממוגנת מתועשת שמגיעה עם אישור פקע״ר ומתחברת לבית. 180,000-250,000 ₪ + מע״מ. יתרונות, חסרונות ומתי זו בחירה נכונה מול ממ״ד בנוי.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const faqs = [
  {
    q: "ממ״ד טרומי = יחידה ממוגנת?",
    a: "לא בהכרח. ממ״ד טרומי תקני הוא ממ״ד מלא שעומד בדרישות פקע״ר ומקבל אישור רשמי. 'יחידה ממוגנת' זה מונח רחב שיכול לכלול גם מוצרים לא תקניים. אנחנו מספקים רק ממ״דים טרומיים עם אישור פקע״ר בכתב.",
  },
  {
    q: "מה ההבדל מממ״ד יצוק באתר?",
    a: "ממ״ד יצוק: יציקת בטון בתוך הבית, גמיש במידות, משתלב טוב ויזואלית. ממ״ד טרומי: מגיע מוכן מהמפעל, התקנה מהירה יותר, פחות רעש ולכלוך בבית. שניהם תקניים, הבחירה תלויה בבית ובצרכים.",
  },
  {
    q: "מה ההבדל ממיגונית?",
    a: "ממ״ד טרומי הוא חלק מהבית, משמש כחדר ביום-יום, רמת הגנה מלאה של ממ״ד. מיגונית היא יחידה חיצונית נפרדת, לא משמשת כחדר רגיל, לרוב ברמת הגנה נמוכה יותר.",
  },
  {
    q: "יתרונות של ממ״ד טרומי?",
    a: "התקנה מהירה (ימים במקום שבועות), פחות בלגן בבית, בקרת איכות מפעלית, מחיר לעיתים תחרותי יותר. מתאים במיוחד לבתים פרטיים עם גישה נוחה לכלי הרמה.",
  },
  {
    q: "חסרונות?",
    a: "מידות קבועות של היצרן ופחות גמישות בתכנון. דורש גישה לרכב הובלה ומנוף. משתלב פחות ויזואלית במקרים מסוימים. לא מתאים לכל בית.",
  },
  {
    q: "כמה זה עולה?",
    a: "180,000-250,000 ₪ + מע״מ לממ״ד טרומי תקני כולל הובלה, הנפה, יסוד וחיבורים, תלוי בגודל ובדגם. קרוב למחיר ממ״ד יצוק באתר, לפעמים זול יותר, לפעמים יקר יותר, תלוי בדגם ובאתר.",
  },
  {
    q: "כמה זמן לוקח?",
    a: "ייצור במפעל: 4-8 שבועות. הכנת יסוד באתר: 1-2 שבועות. הצבה וחיבורים: ימים ספורים. סך הכל: 6-12 שבועות. אישור פקע״ר באתר אחרי ההצבה.",
  },
  {
    q: "איך בודקים שמדובר בממ״ד תקני ולא יחידה גנרית?",
    a: "מבקשים מהיצרן בכתב: אישור פקע״ר לדגם הספציפי, הצהרת מהנדס, מפרט עובי קירות, תעודת דלת הדף, תעודת מערכת סינון. אצלנו כל המסמכים חלק מתיק הפרויקט.",
  },
  {
    q: "אפשר להרחיב בעתיד?",
    a: "בדרך כלל לא. היחידה במידות קבועות. אם צפויה התרחבות או שילוב בתכנית עתידית שווה לשקול ממ״ד יצוק שגמיש יותר.",
  },
  {
    q: "מה האחריות?",
    a: "אחריות יצרן על היחידה (לרוב 5-10 שנים על הקונסטרוקציה) + אחריות קבלן שלנו על היסוד, ההצבה והחיבורים. גורם אחד לתמיכה: אנחנו.",
  },
];

const includes = [
  "ייעוץ והתאמת דגם מתאים",
  "אישור פקע״ר של הדגם (בכתב)",
  "תכנון אדריכלי וקונסטרוקטיבי של המיקום",
  "רישוי מול הוועדה המקומית אם נדרש",
  "חפירה ויציקת יסוד/משטח",
  "שינוע מהמפעל והנפה עם מנוף",
  "הצבה, עיגון וחיבור מכני לבית הקיים",
  "חיבור חשמל, אינסטלציה, אוורור",
  "גמר פנימי וחיצוני (התאמה לבית)",
  "אישור פקע״ר באתר ותיק פרויקט",
];

const subtypes = [
  { title: "ממ״ד טרומי עצמאי", text: "יחידה עצמאית בחצר או בסמוך לבית. מתאים כשאין מקום להצמדה למבנה." },
  { title: "ממ״ד טרומי מחובר", text: "מחובר לבית הקיים, משתלב כחדר פנימי. דורש חיבור מכני ואדריכלי." },
  { title: "ממ״ד טרומי בתוספת", text: "במסגרת תוספת בנייה מלאה. יתרון משמעותי בעלות הכוללת." },
];

const steps = [
  { title: "סיור וייעוץ", text: "ביקור, בדיקת גישה, המלצה האם טרומי מתאים (או שעדיף יצוק)." },
  { title: "בחירת דגם", text: "המלצה על דגם מיצרן עם אישור פקע״ר, המתאים לבית ולצרכים." },
  { title: "תכנון ורישוי", text: "תכניות למיקום, חיבורים, רישוי מקומי אם נדרש." },
  { title: "הצעה וחוזה", text: "הצעת מחיר מפורטת כולל יצרן, הובלה, יסוד, חיבורים. חוזה מלא." },
  { title: "הכנת יסוד", text: "חפירה, יציקת יסוד/משטח בטון לפי דרישות היצרן." },
  { title: "ייצור במפעל", text: "היחידה מיוצרת במפעל בבקרת איכות. 4-8 שבועות." },
  { title: "הובלה והנפה", text: "הובלה לאתר, הנפה עם מנוף, הצבה מדויקת ועיגון." },
  { title: "חיבורים וגמר", text: "חיבור לבית הקיים, חשמל, אינסטלציה, אוורור, גמר פנימי וחיצוני." },
  { title: "אישור ומסירה", text: "אישור פקע״ר באתר, מסירה עם תיק פרויקט ותעודות." },
];

const benefits = [
  { title: "רק דגמים תקניים", text: "אנחנו עובדים עם יצרנים שיש להם אישור פקע״ר רשמי. תעודות בכתב, חלק מהחוזה." },
  { title: "מהיר מיצוק באתר", text: "פחות בלגן בבית, בקרת איכות מפעלית, התקנה תוך ימים אחרי הגעה." },
  { title: "חברה אחת", text: "ייצור, הובלה, יסוד, הצבה, חיבורים, אישור. אחראי אחד, לא מתווך." },
  { title: "אחריות מאוחדת", text: "אחריות יצרן + אחריות קבלן. גורם אחד לתמיכה לאורך שנים." },
];

export default function Page() {
  return (
    <ServicePageLayout
      path={PATH}
      eyebrow="ממ״ד טרומי"
      title="ממ״ד טרומי תקני: ממ״ד מוכן מהמפעל"
      subtitle="ממ״ד מאושר פקע״ר שמגיע מוכן מהמפעל, מותקן בימים. פתרון מהיר, תקני ותחרותי לבתים פרטיים."
      crumbs={[{ name: "שירותים", href: "/#services" }, { name: "ממ״ד טרומי", href: PATH }]}
      serviceName="ממ״ד טרומי תקני"
      serviceDescription={DESCRIPTION}
      intro={
        <>
          <p>
            ממ״ד טרומי הוא ממ״ד תקני לכל דבר. הוא עומד בדרישות פיקוד העורף, עם דלת הדף, חלון וחיבור
            אוורור תקניים, ומקבל אישור פקע״ר. ההבדל מממ״ד יצוק באתר הוא שהיחידה מיוצרת במפעל בבקרת
            איכות, מגיעה לבית מוכנה, ומותקנת תוך ימים.
          </p>
          <p>
            אצלנו בהתחדשות עובדים רק עם דגמים עם אישור פקע״ר בכתב. אנחנו מבצעים את כל שרשרת הפרויקט: יעוץ,
            הזמנה, הכנת יסוד, הנפה, חיבורים, גמר ואישור פקע״ר באתר. חוזה אחד, אחריות אחת.
          </p>
        </>
      }
      includes={includes}
      subtypes={subtypes}
      subtypesTitle="תצורות ממ״ד טרומי"
      steps={steps}
      benefits={benefits}
      timeline="ייצור: 4-8 שבועות. יסוד באתר: 1-2 שבועות. הצבה וחיבור: ימים. סך הכל: 6-12 שבועות."
      pricing="ממ״ד טרומי תקני 9-12 מ״ר: 180,000-250,000 ₪ + מע״מ, כולל הובלה, יסוד, חיבורים ואישור. בדירה בקומה משתנה, לעיתים מעל 200,000 ₪ + מע״מ."
      faqs={faqs}
      defaultService="mamad"
      quickAnswer={
        <>
          <strong>ממ״ד יביל (טרומי)</strong> הוא מבנה ממוגן המיוצר במפעל לפי{" "}
          <strong>תקן 4422</strong> של פיקוד העורף ומותקן באתר ביום אחד. מחיר היחידה
          הבסיסי: <strong>90,000-130,000 ₪ + מע״מ</strong>. הובלה והנפה: עד 30,000 ₪
          נוספים. הכנת בסיס בטון, חשמל ואוורור: 8,000-20,000 ₪. ייצור במפעל אורך כ-8
          שבועות, ההתקנה עצמה יום אחד. כל ממ״ד יביל דורש <strong>אישור פיקוד העורף
          ייעודי לכתובת</strong> ולמבנה, ובדיקה של נגישות לעגורן ותנאי שטח.
        </>
      }
    >
      {/* Comparison table — yibil vs conventional. AI extraction zone. */}
      <Section tone="soft">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                ממ״ד יביל מול ממ״ד קונבנציונלי: השוואה ישירה
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                שני המסלולים תקניים לפי תקן 4422 ושניהם דורשים אישור פיקוד העורף
                לכתובת. ההבדל הוא בעלויות, בלוחות הזמנים ובדרישות הנגישות לאתר.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-[var(--color-soft)]">
                  <tr>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">מאפיין</th>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">ממ״ד יביל</th>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">ממ״ד קונבנציונלי</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">מחיר טיפוסי</td>
                    <td className="px-4 py-3">90,000-130,000 ₪ + הובלה</td>
                    <td className="px-4 py-3">160,000-220,000 ₪ + מע״מ</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">זמן ייצור</td>
                    <td className="px-4 py-3">8 שבועות במפעל</td>
                    <td className="px-4 py-3">תכנון: 4-8 שבועות</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">זמן התקנה / בנייה</td>
                    <td className="px-4 py-3">יום אחד</td>
                    <td className="px-4 py-3">3-5 חודשים</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">נגישות נדרשת</td>
                    <td className="px-4 py-3">עגורן + נתיב הובלה</td>
                    <td className="px-4 py-3">גישה רגילה לרכב</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">תקן</td>
                    <td className="px-4 py-3">4422</td>
                    <td className="px-4 py-3">4422</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">אישור פקע״ר</td>
                    <td className="px-4 py-3">ייעודי לדגם + לכתובת</td>
                    <td className="px-4 py-3">ייעודי לכתובת</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-[var(--color-muted-2)] leading-relaxed">
              להשוואה מלאה בין ממ״ד, שיפור מיגון ומיגונית ראו{" "}
              <Link
                href="/compare/mamad-vs-miggun-vs-migunit"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ממ״ד, שיפור מיגון או מיגונית
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Trust differentiators — three sharp angles for ממ"ד יביל. */}
      <Section tone="white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-8 text-center">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                מה שלא תמיד אומרים מראש
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
                שלוש נקודות מקצועיות לפני שמזמינים ממ״ד יביל
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            <Reveal>
              <article
                className="h-full p-6 rounded-2xl border-2 border-red-200 bg-red-50/40"
                aria-labelledby="prefab-warn-price"
              >
                <div className="text-2xl mb-2" aria-hidden>⚠️</div>
                <h3 id="prefab-warn-price" className="font-extrabold text-red-900 text-lg mb-2">
                  הצעת &ldquo;80,000 ₪ כולל הכל&rdquo; היא דגל אדום
                </h3>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                  הצעות ל&ldquo;ממ״ד יביל ב-80,000 ₪ כולל הכל&rdquo; כמעט תמיד לא כוללות
                  הובלה (10,000-30,000 ₪), הנפה (3,000-15,000 ₪), הכנת בסיס (8,000-20,000
                  ₪), חיבורים, ולפעמים גם לא את <strong>אישור פיקוד העורף לכתובת</strong>.
                  דרשו בכתב מפרט מלא שכולל את כל העלויות הנלוות לפני חתימה.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article
                className="h-full p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/40"
                aria-labelledby="prefab-hidden-foundation"
              >
                <div className="text-2xl mb-2" aria-hidden>💰</div>
                <h3 id="prefab-hidden-foundation" className="font-extrabold text-amber-900 text-lg mb-2">
                  עלות נסתרת: הכנת התשתית
                </h3>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                  היחידה מגיעה מוכנה, אבל היא צריכה לעמוד על משהו. הכנת בסיס בטון או
                  ריצוף מתאים, חיבור לחשמל מוגן, וחיבור למערכת אוורור הם תוספת של{" "}
                  <strong>8,000-20,000 ₪</strong> שלא תמיד מצוינת מראש בהצעת המחיר.
                  בקשו פירוט בכתב לכל אחד מהרכיבים הללו.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article
                className="h-full p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40"
                aria-labelledby="prefab-when-yes"
              >
                <div className="text-2xl mb-2" aria-hidden>✓</div>
                <h3 id="prefab-when-yes" className="font-extrabold text-emerald-900 text-lg mb-2">
                  מתי ממ״ד יביל הוא הבחירה הנכונה
                </h3>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                  כשיש <strong>נגישות לעגורן</strong>, השטח קטן וצפוף, וצריכים פתרון
                  מהיר (תוך 2-3 חודשים מהזמנה). פחות מתאים לבתים בעלי גישה צרה או
                  באזורים עם מגבלות עירוניות על פעילות עגורנים. לבדיקת התאמה לבית שלכם
                  ראו את{" "}
                  <Link
                    href="/guides/mamad-cost"
                    className="font-bold text-emerald-900 underline underline-offset-4"
                  >
                    מדריך מחיר ממ״ד
                  </Link>
                  .
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </Section>

      <RelatedLinks
        seed="services/prefab-mamad"
        targets={[
          "mamad-cost",
          "home-front-command-approval",
          "mamad-process",
          "compare-main",
          "areas",
        ]}
      />
    </ServicePageLayout>
  );
}
