import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import { organizationJsonLd, type FaqItem } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { PRICING } from "@/lib/data/pricing";

const fmt = (n: number) => n.toLocaleString("en-US");

const PATH = "/press";
const TITLE = "ערכת תקשורת | התחדשות";
const DESCRIPTION =
  "ערכת תקשורת של התחדשות בינוי ויזמות: על החברה, תחומי התמחות, ציטוטים מוכנים, נתוני שוק מאומתים, לוגו להורדה ויצירת קשר לעיתונאים.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const QUOTES = [
  {
    topic: "תמ״א 38 פוקעת במאי 2026",
    quote:
      "תמ״א 38 פוקעת במאי 2026 ברוב הארץ. דיירים בפרויקטים פעילים שכבר קיבלו היתר ממשיכים לפי התוכנית המקורית. דיירים עם הסכם בלבד ללא היתר נמצאים בסיכון אמיתי, ושלוש האפשרויות שלהם הן למהר להוציא היתר, לעבור לחלופת שקד, או לבטל את ההסכם. בלי ייעוץ משפטי דחוף הם עלולים לגלות שהם תקועים.",
  },
  {
    topic: "1.6 מיליון דירות ללא ממ״ד",
    quote:
      "בישראל יש מעל 1.6 מיליון דירות ללא ממ״ד תקני, בעיקר בבניינים שנבנו לפני 1992. עם פוקעת תמ״א 38 ועם המעבר לחלופת שקד, נסגר חלון ההזדמנות לבנות ממ״ד במסלול פטור. לבעלי דירות שעוד לא פעלו, מסלול הפטור עד אוקטובר 2026 הוא הזדמנות אחרונה להימנע מ-15,000-25,000 ₪ בעלויות בירוקרטיה.",
  },
  {
    topic: "הטעות הכי יקרה בבניית ממ״ד",
    quote:
      "אנחנו רואים את זה כל חודש: לקוח חתם על הצעה ל״חמ״ד״ במחיר של ממ״ד תקני, וגילה אחרי הביצוע שהוא קיבל שיפור מיגון, לא ממ״ד. ״חמ״ד״ אינו סיווג רשמי. הצעה שלא מציינת את תקן 4422, מערכת סינון לפי תקן 4570, ומספר אישור פיקוד העורף, לרוב מסתירה את ההבדל בין השתיים. ההפרש 50,000-150,000 ש״ח.",
  },
  {
    topic: "פינוי בינוי ודיירים בני 70+",
    quote:
      "דיירים בני 70 ומעלה זכאים לחלופות מיוחדות בכל פרויקט פינוי בינוי, ובני 75 ומעלה זכאים לכל החלופות האפשריות. רוב הדיירים לא יודעים את זה, ויזמים לא תמיד מציינים את זה בהסכם הראשוני. כשהדייר מסרב לחתום מסיבה שקשורה לזכויות גיל, הסירוב נחשב סביר באופן כמעט אוטומטי בבית המשפט.",
  },
  {
    topic: "ממ״ד יביל מול ממ״ד יצוק",
    quote:
      `מחיר ממ״ד יביל בישראל ב-2026 מפוצל לשני טווחים שונים לחלוטין: ${fmt(PRICING.mamadYavilUnitOnly.min)} עד ${fmt(PRICING.mamadYavilUnitOnly.max)} ש״ח עבור הממ״ד היביל בלבד (יוצא מהמפעל, ללא יסודות והובלה), ו-${fmt(PRICING.mamadYavilAllIn.min)} עד ${fmt(PRICING.mamadYavilAllIn.max)} ש״ח עבור פתרון מלא הכולל יסודות, הובלה, הנפה, חיבורי תשתית, אטימה ואישור פיקוד העורף. רוב הספקים מפרסמים רק את המחיר הראשון. הפער הוא 40 עד 50 אחוז מהעלות הכוללת, והוא לא רכיב אופציונלי, הוא תנאי לקבלת אישור פיקוד העורף.`,
  },
  {
    topic: "פערי שווי דירה עם וללא ממ״ד",
    quote:
      "דירה עם ממ״ד תקני נמכרת בפער של 8.2-21% מעל דירה ללא ממ״ד באותו אזור. הפער משתנה לפי עיר ולפי קרבה לאזורי קו קדמי. במזרח השפלה ובתל אביב הפער הקטן יותר; באזורי גבול הפער הגדול יותר. לכן ממ״ד הוא לא רק עניין של ביטחון, הוא גם עניין של ערך נכס לטווח ארוך.",
  },
  {
    topic: "מסלול פטור מהיתר עד אוקטובר 2026",
    quote:
      "סעיף 30ב׳ הוא הוראת שעה שמאפשרת לבעלי בתים צמודי קרקע ולבניינים עד 2 קומות לבנות ממ״ד בלי לעבור הליך היתר רגיל. החיסכון: 4-6 שבועות בירוקרטיה ועלויות תכנון של 15,000-25,000 ש״ח. ההוראה בתוקף עד אוקטובר 2026. אחרי הפקיעה לא ידוע אם תחזור, ולכן מי שמתכנן לבנות, הזמן לפעול הוא עכשיו.",
  },
];

const STATS = [
  {
    label: "דירות בישראל ללא ממ״ד תקני",
    value: "1.6M",
    source: "בנק ישראל, 2024",
  },
  {
    label: "פער מחירים בין דירה עם וללא ממ״ד",
    value: "8.2-21%",
    source: "מקור משוערך לפי דוחות שמאות באזורי מרכז וגבול",
  },
  {
    label: "תוקף מסלול הפטור (סעיף 30ב׳)",
    value: "עד אוקטובר 2026",
    source: "הוראת שעה, משרד הפנים",
  },
  {
    label: "פוקעת תמ״א 38",
    value: "מאי 2026",
    source: "החלטת המועצה הארצית לתכנון ובנייה",
  },
  {
    label: "רף הסכמה לתביעת דייר סרבן בפינוי בינוי",
    value: "67%",
    source: "תיקון לחוק פינוי ובינוי (פיצויים)",
  },
  {
    label: "רף הסכמה לחלופת שקד",
    value: "80%",
    source: "תיקון 139 לחוק התכנון והבנייה",
  },
  {
    label: "זמן אישור פיקוד העורף לממ״ד במסלול פטור",
    value: "עד 14 ימי עבודה",
    source: "פיקוד העורף, מערכת רישוי",
  },
  {
    label: "ממ״ד תקני בבית פרטי, טווח מחיר",
    value: "160,000-220,000 ש״ח + מע״מ",
    source: "Hithadshut field data, 2026",
  },
];

const ASSET_FILES = [
  { label: "לוגו אופקי (PNG, רקע שקוף)", href: "/logo-header.png", note: "לכותרת באתר ובמייל" },
  { label: "לוגו אופקי @2x (PNG)", href: "/logo-header@2x.png", note: "לרשתיני / הדפסה" },
  { label: "לוגו אנכי (PNG, 876×918)", href: "/logo-full-vertical.png", note: "ל-Knowledge Panel ולמצגות" },
  { label: "לוגו רק אייקון (PNG)", href: "/logo-icon-only.png", note: "ל-avatar ולסושיאל" },
  { label: "לוגו אופקי במקור (1314×380)", href: "/logo-horizontal.png", note: "לעריכה גרפית" },
  { label: "אייקון 512×512", href: "/icon-512.png", note: "ל-PWA / icons" },
  { label: "תמונת מותג (OG, 1200×630)", href: "/og-image.jpg", note: "לכותרת כתבה ולסושיאל" },
];

const TOPICS = [
  "מחיר ממ״ד 2026: מה כולל המחיר ומה לא",
  "ההבדל בין ממ״ד תקני לשיפור מיגון",
  "מסלול פטור מהיתר (סעיף 30ב׳)",
  "אישורי פיקוד העורף: תהליך והתנהלות",
  "תקני 4422, 4570, 4577: מה דורש כל אחד",
  "בחירת קבלן ממ״ד: דגלים אדומים וירוקים",
  "ממ״ד יביל: מתי כן ומתי לא",
  "פוקעת תמ״א 38 במאי 2026: מה דייר עושה",
  "חלופת שקד מול תמ״א 38",
  "פינוי בינוי: חוק 67% וההשלכות",
  "זכויות קשישים בפינוי בינוי (גיל 70+ ו-75+)",
  "ירושה ומיסוי בפינוי בינוי",
  "ערבויות בנקאיות וערבויות חוק מכר",
  "דייר סרבן: תהליך משפטי והגנות",
];

const pressFaqs: FaqItem[] = [
  {
    q: "מי דובר התחדשות לתקשורת?",
    a: "דובר רשמי מטעם החברה מטפל בכל פנייה לתקשורת. ניתן לפנות בטלפון, באימייל או בוואטסאפ דרך הקישורים בעמוד זה, ונחזיר תשובה תוך שעות בשעות העבודה.",
  },
  {
    q: "כמה זמן לוקח לקבל תגובה?",
    a: "בשעות העבודה (א׳-ה׳ עד 19:00, ו׳ עד 13:00) אנחנו מתחייבים לתגובה תוך 4 שעות. לפניות דחופות בערבים או בסופי שבוע ניתן לפנות בוואטסאפ עם ציון דחיפות.",
  },
  {
    q: "האם הנתונים בערכת התקשורת ניתנים לציטוט?",
    a: "כל הנתונים והציטוטים בעמוד זה מאומתים וניתנים לציטוט ישיר בייחוס \"התחדשות בינוי ויזמות\". לקבלת מקור מלא או מסמך רקע על נתון ספציפי, צרו קשר.",
  },
  {
    q: "האם ניתן לקבל סיור באתר עבודה?",
    a: "כן, בכפוף לזמינות פרויקט פעיל ולאישור הלקוח. תיאום סיור באתר עבודה מתבצע מראש, וכולל הסבר טכני על שלב הביצוע, רכיבים בולטים והקשר רגולטורי.",
  },
];

export default function Page() {
  return (
    <>
      <SchemaBreadcrumb items={[{ name: "ערכת תקשורת", url: PATH }]} />
      <JsonLd data={organizationJsonLd()} />

      <PageHero
        eyebrow="Press Kit"
        title="ערכת תקשורת | התחדשות"
        subtitle="כל מה שעיתונאי צריך לכתבה על נישת ממ״ד והתחדשות עירונית בישראל. ביו חברה, תחומי התמחות, ציטוטים מוכנים ונתוני שוק מאומתים."
        crumbs={[{ name: "ערכת תקשורת", href: PATH }]}
      />

      {/* Quick contact */}
      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-5">
              יצירת קשר לעיתונאים
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href={`tel:${site.phoneDial}`}
                className="card-premium p-5 hover:shadow-lg transition"
              >
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">טלפון</div>
                <div className="font-bold text-[var(--color-primary)]">{site.phone}</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">זמין עד 19:00, ימים א׳-ה׳</div>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="card-premium p-5 hover:shadow-lg transition"
              >
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">אימייל</div>
                <div className="font-bold text-[var(--color-primary)] break-all">{site.email}</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">תגובה תוך 4 שעות בשעות העבודה</div>
              </a>
              <a
                href={`https://wa.me/${site.phoneE164.replace("+", "")}?text=${encodeURIComponent("שלום, אני עיתונאי/ת. אשמח לתאם ראיון.")}`}
                target="_blank"
                rel="noopener"
                className="card-premium p-5 hover:shadow-lg transition"
              >
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">WhatsApp</div>
                <div className="font-bold text-[var(--color-primary)]">{site.phone}</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">לתיאום ראיון מהיר</div>
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* About the company */}
      <Section tone="soft">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-[260px_minmax(0,1fr)] gap-8 items-start">
              <figure className="rounded-2xl overflow-hidden ring-1 ring-[var(--color-accent)]/30 bg-white p-6 flex items-center justify-center">
                <Image
                  src="/logo-full-vertical.png"
                  alt="התחדשות בינוי ויזמות, לוגו"
                  width={876}
                  height={918}
                  sizes="260px"
                  className="w-full h-auto"
                />
              </figure>
              <div>
                <div className="h-1 w-16 gold-line mb-5" />
                <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-2">
                  על התחדשות
                </h2>
                <div className="text-sm text-[var(--color-muted)] mb-5 font-medium">
                  חברת בינוי ויזמות · בניית ממ״ד והתחדשות עירונית
                </div>
                <Prose>
                  <p>
                    <strong>תיאור קצר (40 מילים):</strong> התחדשות בינוי ויזמות היא חברת
                    בנייה ישראלית שמתמחה בבניית ממ״ד תקני, שיפור מיגון, בנייה פרטית, ובהתחדשות
                    עירונית (פינוי בינוי, תמ״א 38, חלופת שקד). חוזה אחד מקצה לקצה, בלי קבלני
                    משנה אנונימיים.
                  </p>
                  <p>
                    <strong>תיאור ארוך (120 מילים):</strong> התחדשות בינוי ויזמות היא חברת
                    בנייה ישראלית שמלווה בעלי דירות ובתים בהחלטות הבנייה הגדולות של חייהם:
                    בניית ממ״ד תקני, שיפור מיגון, בנייה פרטית, שיפוצים מקיפים, הרחבות
                    ותוספות בנייה, ופרויקטי התחדשות עירונית (פינוי בינוי, חלופת שקד ותמ״א 38).
                    הליבה המקצועית של החברה היא בניית ממ״ד לפי תקני פיקוד העורף, וההתמחות
                    הזאת מאפשרת להעניק שירות אחד מקצה לקצה גם בפרויקטים שמשלבים בנייה ומיגון.
                    החברה זמינה לעיתונאים לזווית מקצועית, נתון מאומת או דוגמה מהשטח על כל
                    נושא בנישה: מחיר ממ״ד 2026, מסלול פטור מהיתר, זכויות דיירים קשישים בפינוי
                    בינוי, פוקעת תמ״א 38, וההבדל בין הפתרונות שפיקוד העורף מאשר לבית פרטי
                    במרכז הארץ.
                  </p>
                </Prose>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Specialty areas */}
      <Section tone="white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                תחומי התמחות
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                ארבעה תחומי ידע שהחברה זמינה לדבר עליהם לתקשורת, עם מספרים, מקורות רגולטוריים
                ודוגמאות מהשטח.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <article className="card-premium p-6">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-2">
                  הליבה
                </div>
                <h3 className="text-xl font-black text-[var(--color-primary)] mb-2">
                  ממ״ד תקני ומיגון
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  בניית ממ״דים לפי תקני פיקוד העורף, שיפור מיגון לחדרים קיימים, וממ״דים
                  יבילים מאושרי פקע״ר. כולל מסלול הפטור (סעיף 30ב׳) שתקף עד אוקטובר 2026.
                </p>
              </article>
            </Reveal>
            <Reveal>
              <article className="card-premium p-6">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-2">
                  התחדשות עירונית
                </div>
                <h3 className="text-xl font-black text-[var(--color-primary)] mb-2">
                  פינוי בינוי
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  ליווי דיירים בפרויקטי פינוי בינוי, הסבר חוק 67%, זכויות קשישים (גיל 70+
                  ו-75+), מלכוד היורשים, וערבויות.
                </p>
              </article>
            </Reveal>
            <Reveal>
              <article className="card-premium p-6">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-2">
                  תוכנית פוקעת
                </div>
                <h3 className="text-xl font-black text-[var(--color-primary)] mb-2">
                  תמ״א 38
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  פוקעת מאי 2026 ברוב הארץ. הבחנה בין 38/1 ו-38/2, מצב פרויקטים פעילים,
                  ואלטרנטיבות עבור דיירים בלי היתר.
                </p>
              </article>
            </Reveal>
            <Reveal>
              <article className="card-premium p-6">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-2">
                  המסלול החדש
                </div>
                <h3 className="text-xl font-black text-[var(--color-primary)] mb-2">
                  חלופת שקד
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  תיקון 139 לחוק התכנון והבנייה. המסלול שמחליף את תמ״א 38/2 בבניין יחיד,
                  רף הסכמה 80%, וזכויות בנייה משופרות.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Quotes */}
      <Section tone="soft">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                ציטוטים מוכנים
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                7 ציטוטים על הנושאים העיקריים בנישה. ניתן להשתמש כפי שהם או לקצר,
                והמידע בכולם מאומת. המקור: התחדשות בינוי ויזמות.
              </p>
            </div>
          </Reveal>
          <div className="space-y-5">
            {QUOTES.map((q, i) => (
              <Reveal key={i}>
                <article className="card-premium p-6 md:p-7">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-3">
                    {q.topic}
                  </div>
                  <blockquote className="text-[var(--color-ink)] leading-8 italic border-r-4 border-[var(--color-accent)] pr-4">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <div className="mt-3 text-sm text-[var(--color-muted)]">
                    התחדשות בינוי ויזמות
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Verified stats */}
      <Section tone="white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                נתונים שניתן לצטט
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                שמונה נתונים שניתן לצטט ישירות בכתבה. כל נתון עם מקור. אם תרצו את
                המסמך המלא או את ההקשר המלא, צרו קשר.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={i}>
                <div className="card-premium p-5">
                  <div className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-1">
                    {s.value}
                  </div>
                  <div className="font-bold text-[var(--color-ink)] mb-1">{s.label}</div>
                  <div className="text-xs text-[var(--color-muted)]">מקור: {s.source}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Asset downloads */}
      <Section tone="soft">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                לוגו וויזואלים להורדה
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                כל הקבצים מאושרים לשימוש מערכתי בהקשר של כתבה על החברה או על
                נישת ממ״ד והתחדשות עירונית. ייחוס: התחדשות בינוי ויזמות.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-3">
            {ASSET_FILES.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  download
                  className="card-premium p-4 flex items-start gap-3 hover:shadow-lg transition"
                >
                  <span aria-hidden className="text-2xl">⬇️</span>
                  <span className="flex-1">
                    <span className="block font-bold text-[var(--color-primary)]">{a.label}</span>
                    <span className="block text-sm text-[var(--color-muted)]">{a.note}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            לקבצי מקור (PSD / SVG / Vector) צרו קשר ישיר.
          </p>
        </div>
      </Section>

      {/* Topics the company covers */}
      <Section tone="white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-8">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-3">
                נושאים שאנחנו זמינים לראיון
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-[var(--color-ink)]">
              {TOPICS.slice(0, 7).map((t) => (
                <li key={t}>✓ {t}</li>
              ))}
            </ul>
            <ul className="space-y-2 text-[var(--color-ink)]">
              {TOPICS.slice(7).map((t) => (
                <li key={t}>✓ {t}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
            >
              קראו עוד על התחדשות ←
            </Link>
          </div>
        </div>
      </Section>

      <FAQ items={pressFaqs} title="שאלות נפוצות מעיתונאים" />
    </>
  );
}
