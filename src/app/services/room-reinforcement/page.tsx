import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { PRICING } from "@/lib/data/pricing";

const PATH = "/services/room-reinforcement";
const TITLE = "מיגון חדר קיים | פתרון מהיר לביטחון הבית | התחדשות";
const DESCRIPTION =
  `מיגון חדר קיים: חיזוק קונסטרוקטיבי, דלת הדף, חלון ממ״ד ואטימה. ${PRICING.migunImprovement.min.toLocaleString("en-US")}-${PRICING.migunImprovement.max.toLocaleString("en-US")} ₪ + מע״מ, ביצוע של 2-8 שבועות. פתרון מהיר ומשתלם כשבניית ממ״ד חדש לא אפשרית.`;

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const faqs = [
  {
    q: "מה ההבדל בין מיגון חדר לממ״ד?",
    a: "ממ״ד הוא חדר חדש מבטון מזוין לפי תקן פקע״ר, עם אישור תקני רשמי. מיגון חדר קיים הוא חיזוק חדר קיים (דלת, חלון, קירות), לרוב לרמת הגנה נמוכה יותר. מיגון לא מחליף ממ״ד מבחינת תקן, אבל משפר משמעותית את ההגנה כשממ״ד לא אפשרי.",
  },
  {
    q: "למי זה מתאים?",
    a: "דירות או בתים ללא ממ״ד שבהם אי אפשר לבנות אחד חדש (מגבלות שטח, מבנה, תקציב). גם קשישים שהממ״ד הקיים לא נגיש להם, מיגון חדר קרוב פותר בעיה מיידית.",
  },
  {
    q: "זה מחליף ממ״ד?",
    a: "לא מבחינת תקן. אם אפשר לבנות ממ״ד, זה עדיף. מיגון חדר קיים הוא פתרון ביניים ריאלי, לא תחליף תקני. אנחנו לא נתחזה, נגיד לכם את האמת לפני שמתחילים.",
  },
  {
    q: "מה כולל המיגון?",
    a: "תלוי בחדר: חיזוק קירות ותקרה, החלפת דלת לדלת חזקה או דלת הדף, החלפת חלון לחלון מוגן, אטימה, שיפור אוורור. כל מקרה נבחן בנפרד.",
  },
  {
    q: "כמה זמן זה לוקח?",
    a: "מיגון חדר קיים נמשך בין שבועיים לחודשיים, תלוי בהיקף החיזוקים. בכל פרויקט נגדיר לוח זמנים מחייב בחוזה. טווחי זמן מעשיים: החלפת דלת+חלון+אטימה בלבד: 2-4 שבועות. חיזוק קונסטרוקטיבי של קירות ותקרה: 1-2 חודשים. מיגון בשילוב שיפוץ: לפי לוח הזמנים הכולל.",
  },
  {
    q: "כמה זה עולה?",
    a: "טווח רחב, תלוי בהיקף החיזוק: 40,000-150,000 ₪ + מע״מ. החלפת דלת+חלון+אטימה בלבד בצד הנמוך; חיזוק קונסטרוקטיבי של קירות ותקרה או מיגון בשילוב שיפוץ בצד הגבוה. אצלנו הצעת מחיר מפורטת לפי הרכיבים.",
  },
  {
    q: "צריך אישור פקע״ר?",
    a: "חיזוק קונסטרוקטיבי או החלפת דלת הדף דורשים לרוב אישור פקע\"ר, החלפות קוסמטיות בלבד אינן דורשות. גם דרישות הרשויות המקומיות משתנות: חלק מהעיריות מחייבות אישור מחלקת הנדסה על שינויים קונסטרוקטיביים. את הדרישות הספציפיות בעירייה שלכם אנחנו בודקים לפני שמתחילים ומטפלים בכל ההיתרים הנדרשים.",
  },
  {
    q: "איך עובד אוורור וסינון במיגון חדר קיים?",
    a: "מיגון חדר קיים אינו כולל מערכת סינון NBC כסטנדרט, רק שיפור אטימה והחלפת פתחי אוורור במכסים חזקים עם אפשרות סגירה. תוספת גוף סינון אפשרית אבל אינה חלק מהחבילה הבסיסית. המשמעות: חדר ממוגן לא מספק את אותה רמת הגנה מפני חומרים כימיים כמו ממ\"ד תקני. להגנה כימית מלאה, הפתרון הנכון הוא ממ\"ד.",
  },
  {
    q: "יתרונות מול ממ״ד?",
    a: "זול משמעותית מממ״ד, מהיר יותר, פחות פולשני, לא דורש 'מקום' נוסף בבית. פתרון פרקטי כשממ״ד לא אפשרי.",
  },
  {
    q: "חסרונות?",
    a: "רמת הגנה נמוכה יותר, לרוב לא מקבל מעמד תקני של ממ״ד, ייתכן שבעתיד לא יעמוד בדרישות מחמירות יותר.",
  },
  {
    q: "מה ההבדל בין דלת חיזוק לדלת הדף?",
    a: "דלת חיזוק היא דלת פלדה משוריינת (4,000-10,000 ₪) נגד פריצה, עם שיפור מסוים נגד הדף. דלת הדף היא דלת עם אישור פקע״ר (15,000-30,000 ₪) שתוכננה לעמוד בגל הדף מפיצוץ, עם אטימה לאוויר ולחומרים כימיים. בהחלפה קוסמטית דלת חיזוק מספקת, בחיזוק קונסטרוקטיבי מלא נדרשת דלת הדף.",
  },
  {
    q: "מה אנחנו לא ממליצים למגן?",
    a: "לא ממליצים למגן: חדר עם קיר גבס בלבד מצד חוץ, חדר עם חלונות גדולים בקיר חיצוני, קומה עליונה בלי חיזוק תקרה מעליה, ודירה שכורה ללא הסכמת בעל הבית. במקרים אלה החיזוק אינו מעשי או אינו נותן הגנה ממשית, ונעדיף להציע ממ\"ד חיצוני, מיגונית בחצר או מעבר לדירה עם ממ\"ד קיים.",
  },
  {
    q: "טיפים לחיסכון בעלות המיגון?",
    a: "להתחיל מהבסיס: החלפת דלת ושיפור אטימה נותנים שיפור ניכר יחסית לעלות. לשלב עם שיפוץ: אם ממילא מתכננים לשפץ חדר שינה או ילדים, שילוב המיגון חוסך עבודות כפולות של טיח, צבע וריצוף. לבחור חדר עם קירות חיצוניים פחות: פחות קירות לחיזוק, פחות עלות. לשמור על החלונות הקיימים אם אפשר: החלפה לחלון מוגן יקרה יותר מהוספת תריס הדף בחוץ.",
  },
  {
    q: "אתם מבצעים בעצמכם?",
    a: "כן. התחדשות, חברת בינוי ויזמות. אנחנו מתכננים, מאשרים וגם מבצעים. כל הצוותים שלנו. חוזה אחד, אחריות אחת.",
  },
];

const includes = [
  "בדיקה הנדסית של החדר הקיים",
  "תכנון פתרון מיגון מותאם",
  "בדיקת צורך באישור פקע״ר",
  "חיזוק קירות ו/או תקרה (אם נדרש)",
  "החלפת דלת לדלת חזקה/הדף",
  "החלפת חלון לחלון מוגן",
  "אטימה ושיפור אוורור",
  "טיפול באישורים הנדרשים",
  "גמר פנים (טיח, צבע)",
  "בדיקה ומסירה מסודרת",
];

const subtypes = [
  { title: "החלפת דלת וחלון", text: "דלת הדף או דלת חיזוק + חלון מוגן. שדרוג ממוקד שמשפר משמעותית את ההגנה של החדר." },
  { title: "חיזוק קונסטרוקטיבי", text: "חיזוק קירות, תקרה ורצפה בלוחות/זיון/בטון בהתאם למבנה. מתקרב לרמת ממ״ד אך לא מקבל אישור פקע״ר." },
  { title: "מיגון בשילוב שיפוץ", text: "אם ממילא מתכננים שיפוץ, שילוב המיגון חוסך עלויות וזמן. חברה אחת לכל הפרויקט." },
];

const steps = [
  { title: "סיור ובדיקה", text: "ביקור, מדידה, בדיקת המבנה והדלת/חלון הקיימים. ייעוץ ללא עלות." },
  { title: "תכנון פתרון", text: "המלצה מותאמת: מה כדאי למגן, באיזה היקף, ובאיזו רמה." },
  { title: "הצעת מחיר מפורטת", text: "פריט-פריט: ברור בדיוק מה עולה כמה, אפשר להחליט מה להוסיף ומה לצמצם." },
  { title: "אישורים (אם צריך)", text: "בדיקה ובקשת אישור פקע״ר במקרים שנדרש. מטפלים בכל הבירוקרטיה." },
  { title: "ביצוע", text: "חיזוק, החלפות, אטימה, אוורור. צוות מקצועי שלנו לאורך כל התהליך." },
  { title: "מסירה ואחריות", text: "בדיקה משותפת, מסירה עם תעודת אחריות ותיק מסמכים." },
];

const benefits = [
  { title: "יושר מקצועי", text: "לא נמכור לכם 'מיגון כממ״ד'. נאמר מה באמת עוזר, מה לא, ומה עדיף לעשות." },
  { title: "פתרון מותאם", text: "לא מפרט אחיד. כל חדר בנפרד: מה אפשר, מה כדאי, ובאיזה סדר עדיפויות." },
  { title: "חברה אחת", text: "תכנון, אישורים, ביצוע: אותו גורם. לא 'נשלח אליכם את הקבלן'." },
  { title: "שקיפות במחיר", text: "פריט-פריט. בלי 'הכל כלול' עם מספר אחד ובלי תוספות מפתיעות באמצע." },
];

export default function Page() {
  return (
    <ServicePageLayout
      path={PATH}
      eyebrow="מיגון חדר קיים"
      title="מיגון חדר קיים: שיפור ההגנה לבתים ללא ממ״ד"
      subtitle="כשממ״ד חדש לא אפשרי, מיגון חדר קיים הוא פתרון ריאלי. נאמר לכם בכנות מה מתאים, מה לא, ומה העלות האמיתית."
      crumbs={[{ name: "שירותים", href: "/#services" }, { name: "מיגון חדר קיים", href: PATH }]}
      serviceName="מיגון חדר קיים"
      serviceDescription={DESCRIPTION}
      intro={
        <>
          <p>
            מיגון חדר קיים הוא חיזוק של חדר בבית (קירות, תקרה, דלת, חלון) כדי לשפר את רמת ההגנה.
            זה לא ממ״ד תקני לפי תקן פקע״ר, אבל זה פתרון פרקטי ורציני למשפחות שאין להן אפשרות לבנות
            ממ״ד חדש.
          </p>
          <p>
            בהתחדשות אנחנו מבצעים מיגון חדר כחלק מפעילות הבינוי הרחבה שלנו, עם אותם צוותים הנדסיים
            שמבצעים ממ״דים. כלומר: רמת מקצועיות של ממ״ד, על חדר קיים.
          </p>
        </>
      }
      includes={includes}
      subtypes={subtypes}
      subtypesTitle="סוגי מיגון"
      steps={steps}
      benefits={benefits}
      timeline="החלפת דלת+חלון+אטימה: 2-4 שבועות. חיזוק קונסטרוקטיבי של קירות ותקרה: 1-2 חודשים. מיגון בשילוב שיפוץ: לפי לוח השיפוץ."
      pricing="מיגון חדר קיים: 40,000-150,000 ₪ + מע״מ, בהתאם להיקף. החלפת דלת+חלון+אטימה בצד הנמוך, חיזוק קונסטרוקטיבי של קירות ותקרה או מיגון בשילוב שיפוץ בצד הגבוה."
      faqs={faqs}
      defaultService="reinforcement"
      quickAnswer={
        <>
          <strong>שיפור מיגון</strong> הוא חיזוק חדר קיים בבית כך שיוכל לשמש כמרחב מוגן.
          המסלול מאושר על ידי פיקוד העורף <strong>רק כאשר אי אפשר לבנות ממ״ד תקני</strong>{" "}
          (מסיבות של גודל החלקה, מבנה הבניין או מגבלות עירוניות). עלות טיפוסית:{" "}
          <strong>50,000-120,000 ₪ + מע״מ</strong>, זמן ביצוע 2-4 שבועות. ההגנה נמוכה
          מממ״ד תקני (תקן 4422), אך גבוהה משמעותית מחדר רגיל. <strong>נדרש אישור
          פיקוד העורף</strong> לפני תחילת העבודות.
        </>
      }
    >
      {/* Comparison table: reinforcement vs mamad. AI extraction zone. */}
      <Section tone="soft">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                שיפור מיגון מול ממ״ד תקני: השוואה ישירה
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                שיפור מיגון מאושר רק כשאי אפשר לבנות ממ״ד תקני. ההבדלים בעלות, בזמן
                ובהגנה משמעותיים, וההחלטה צריכה לקבל גם אישור הנדסי וגם ביטחוני.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-[var(--color-soft)]">
                  <tr>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">פרמטר</th>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">שיפור מיגון</th>
                    <th scope="col" className="text-start px-4 py-3 font-extrabold text-[var(--color-primary)]">ממ״ד תקני</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">מחיר</td>
                    <td className="px-4 py-3">50,000-120,000 ₪ + מע״מ</td>
                    <td className="px-4 py-3">160,000-220,000 ₪ + מע״מ</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">זמן ביצוע</td>
                    <td className="px-4 py-3">2-4 שבועות</td>
                    <td className="px-4 py-3">3-5 חודשים</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">רמת הגנה</td>
                    <td className="px-4 py-3">בינונית–גבוהה</td>
                    <td className="px-4 py-3">מקסימלית (תקן 4422)</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">מתי מאושר</td>
                    <td className="px-4 py-3">רק כשאי אפשר ממ״ד</td>
                    <td className="px-4 py-3">כברירת מחדל</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">השפעה על שווי דירה</td>
                    <td className="px-4 py-3">בינונית</td>
                    <td className="px-4 py-3">גבוהה (8.2-21% פער)</td>
                  </tr>
                  <tr className="border-t border-[var(--color-border)] bg-[var(--color-soft)]/40">
                    <td className="px-4 py-3 font-bold text-[var(--color-ink)]">תקן</td>
                    <td className="px-4 py-3">אישור פקע״ר ספציפי</td>
                    <td className="px-4 py-3">תקן 4422</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Trust differentiators: three sharp angles for shipur migun. */}
      <Section tone="white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-8 text-center">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                מה שלא תמיד אומרים
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
                שלוש נקודות שצריך לדעת לפני שמתחילים
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            <Reveal>
              <article
                className="h-full p-6 rounded-2xl border-2 border-red-200 bg-red-50/40"
                aria-labelledby="reinf-warn-substitute"
              >
                <div className="text-2xl mb-2" aria-hidden>⚠️</div>
                <h3 id="reinf-warn-substitute" className="font-extrabold text-red-900 text-lg mb-2">
                  קריטי לדעת: שיפור מיגון אינו תחליף לממ״ד
                </h3>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                  אם פיקוד העורף הסכים שאי אפשר לבנות ממ״ד תקני, שיפור מיגון יכול להיות
                  הפתרון הטוב ביותר. אבל הוא <strong>לא נותן את אותה רמת הגנה</strong>{" "}
                  כמו ממ״ד לפי תקן 4422, ובעיקר אינו כולל מערכת סינון אב״כ תקנית. בכל
                  מצב, זו החלטה שצריכה לקבל אישור הנדסי וביטחוני בכתב לפני התחלה.
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article
                className="h-full p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/40"
                aria-labelledby="reinf-savings-vs-mamad"
              >
                <div className="text-2xl mb-2" aria-hidden>💰</div>
                <h3 id="reinf-savings-vs-mamad" className="font-extrabold text-amber-900 text-lg mb-2">
                  מתי החיסכון אמיתי, ומתי לא
                </h3>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                  שיפור מיגון יכול לחסוך <strong>100,000+ ₪</strong> לעומת בניית ממ״ד
                  חדש. אבל אם הבית שלכם מאפשר ממ״ד תקני, הממ״ד עדיף בטווח הארוך הן
                  בגלל שווי הדירה (פער 8.2-21% לטובת דירות עם ממ״ד) והן בגלל ההגנה
                  המלאה. לפני החלטה, ראו את{" "}
                  <Link
                    href="/guides/mamad-cost"
                    className="font-bold text-amber-900 underline underline-offset-4"
                  >
                    מדריך מחיר ממ״ד
                  </Link>
                  .
                </p>
              </article>
            </Reveal>

            <Reveal>
              <article
                className="h-full p-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50/40"
                aria-labelledby="reinf-what-we-do"
              >
                <div className="text-2xl mb-2" aria-hidden>✓</div>
                <h3 id="reinf-what-we-do" className="font-extrabold text-emerald-900 text-lg mb-2">
                  מה אנחנו עושים בפועל
                </h3>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed">
                  בדיקה הנדסית של החדר, הכנת התכנון, הגשת הבקשה לאישור פיקוד העורף,
                  וביצוע העבודות. הכל תחת חוזה אחד, צוות אחד, אחריות אחת. אותם צוותים
                  שמבצעים ממ״דים תקניים מבצעים גם את השיפור מיגון. רמת מקצועיות של
                  ממ״ד, על חדר קיים.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* When reinforcement isn't enough */}
      <Section tone="soft">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 id="when-not-enough" className="text-2xl md:text-3xl font-black text-[var(--color-primary)] leading-tight mb-4">
              מתי מיגון חדר לא מספיק
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              מיגון חדר קיים הוא פתרון טוב כשממ״ד חדש לא אפשרי. אבל יש מצבים שבהם מיגון לא מספיק, ולכן חשוב לדעת מראש מתי להעדיף ממ״ד תקני:
            </p>
            <ul className="space-y-3 text-[var(--color-ink)] mb-6">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-dark)] font-black shrink-0 mt-1">•</span>
                <span>
                  <strong>באזורי קו קדמי וגבול:</strong> הסטנדרט המומלץ בפועל הוא ממ״ד תקני, לא מיגון חדר. מיגון חדר לא עומד בדרישת התקן באזורים אלה.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-dark)] font-black shrink-0 mt-1">•</span>
                <span>
                  <strong>כשהחדר הקיים לא מתאים קונסטרוקטיבית:</strong> קירות גבס חיצוניים, חלונות גדולים, תקרה חלשה. שיפור מיגון לא יתן הגנה בפועל.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-dark)] font-black shrink-0 mt-1">•</span>
                <span>
                  <strong>כשנדרשת הגנה מפני חומרים כימיים:</strong> רק ממ״ד תקני כולל מערכת סינון NBC עם אישור פקע״ר. מיגון חדר לא מספק את אותה רמת הגנה.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-dark)] font-black shrink-0 mt-1">•</span>
                <span>
                  <strong>כשעלויות המיגון מתקרבות לעלות ממ״ד:</strong> אם חיזוק הקירות, החלפת דלת הדף וחלון מגיעים ל-130,000 ₪+, עדיף לבחון ממ״ד חדש באותה עלות עם הגנה מלאה ותקנית.
                </span>
              </li>
            </ul>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              לפי סוג הבית, בחנו את האפשרויות הספציפיות:{" "}
              <Link
                href="/memad/dira-bekoma"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ממ״ד בדירה בקומה
              </Link>
              {" "}לשיקולים על דירות בקומה גבוהה,{" "}
              <Link
                href="/memad/binyan-yashan"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ממ״ד לבניין ישן
              </Link>
              {" "}לבניינים מלפני 1992 שלעיתים ממ״ד תקני אינו אפשרי, ו
              <Link
                href="/memad/binyan-meshutaf"
                className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                ממ״ד בבניין משותף
              </Link>
              {" "}להשוואת ממ״ד דירתי לעומת משותף בבניינים קטנים.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/building-mamad"
                className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition"
              >
                לבניית ממ״ד תקני →
              </Link>
              <Link
                href="/compare/mamad-vs-miggun-vs-migunit"
                className="inline-flex items-center justify-center bg-white border border-[var(--color-border)] text-[var(--color-primary)] font-extrabold px-6 py-3 rounded-xl hover:bg-[var(--color-soft)] transition"
              >
                השוואה: ממ״ד / מיגון / מיגונית
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <RelatedLinks
        seed="services/room-reinforcement"
        targets={[
          "mamad-cost",
          "choosing-mamad-contractor",
          "madrichim-shipur-migun",
          "hashvaa-migun-vs-pinui",
          "compare-main",
          "areas",
        ]}
      />
    </ServicePageLayout>
  );
}
