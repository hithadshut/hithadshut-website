import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import InlineLeadForm from "@/components/InlineLeadForm";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import RelatedLinks from "@/components/RelatedLinks";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const PATH = "/compare/mamad-tzamud-vs-hitzoni";
const TITLE = "ממ״ד צמוד מול ממ״ד חיצוני | השוואה | התחדשות";
const DESCRIPTION =
  "ממ״ד צמוד או ממ״ד חיצוני? השוואה מפורטת: עלויות בנייה, מסלולי רישוי, השפעה על שטח הבית, זמן ביצוע ומתי כדאי לבחור בכל פתרון. מדריך מלא להחלטה.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

type Option = {
  key: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
  badge?: string;
  rows: { label: string; value: string }[];
};

const ROW_LABELS = [
  "תיאור",
  "יתרונות",
  "חסרונות",
  "מתי מתאים",
  "טווח עלות (+ מע״מ)",
  "זמן ביצוע",
  "רישוי",
  "השפעה על הבית",
] as const;

const options: Option[] = [
  {
    key: "tzamud",
    title: "ממ״ד צמוד",
    subtitle: "בתוך הבית או צמוד למבנה הקיים, עם כניסה פנימית",
    highlight: true,
    badge: "המומלץ כשאפשר",
    rows: [
      {
        label: "תיאור",
        value:
          "ממ״ד הנבנה כחלק אינטגרלי מהבית. משתלב בקונסטרוקציה הקיימת או כתוספת צמודה עם כניסה פנימית ישירה. חלק אורגני של שטח המגורים.",
      },
      {
        label: "יתרונות",
        value:
          "גישה מיידית בעת אזעקה, ניצול השטח כחדר רגיל (שינה, עבודה, ילדים), עלייה בערך הנכס, חיסכון בקירות חיצוניים (חלקם משותפים עם הבית), פתרון תקני מלא.",
      },
      {
        label: "חסרונות",
        value:
          "דורש התאמה של הקונסטרוקציה הקיימת, לעיתים פוגע בחדר קיים, תכנון מורכב יותר בבתים ישנים, עלול לדרוש חיזוקי יסוד.",
      },
      {
        label: "מתי מתאים",
        value:
          "בית פרטי או דירה עם מקום מבני פנימי, קונסטרוקציה יציבה, גישה לקונטור שמאפשר שילוב ממ״ד בתוך המעטפת הקיימת.",
      },
      {
        label: "טווח עלות (+ מע״מ)",
        value: "160,000-200,000 ₪ + מע״מ (טווח בסיסי; מורכבויות עשויות לייקר).",
      },
      {
        label: "זמן ביצוע",
        value: "2-4 חודשים בממוצע, כולל תכנון, אישור פקע״ר וביצוע.",
      },
      {
        label: "רישוי",
        value: "לרוב מסלול פטור מהיתר או היתר מקוצר, תלוי בוועדה המקומית ובתכנית המתאר.",
      },
      {
        label: "השפעה על הבית",
        value: "משתלב בתוך המעטפת. מוסיף שטח פנימי שמשמש ביום-יום, לא תופס מהחצר.",
      },
    ],
  },
  {
    key: "hitzoni",
    title: "ממ״ד חיצוני",
    subtitle: "יחידה נפרדת בחצר, עם יסוד עצמאי וכניסה חיצונית",
    rows: [
      {
        label: "תיאור",
        value:
          "ממ״ד נפרד מהבית, נבנה בחצר כמבנה עצמאי (יצוק באתר או טרומי), עם קירות חיצוניים מלאים וכניסה דרך דלת חיצונית.",
      },
      {
        label: "יתרונות",
        value:
          "לא פוגע בקונסטרוקציה הקיימת, לא כורך שיפוץ פנימי, גמישות גבוהה במיקום ובתכנון, מתאים גם לבתים ישנים, פחות בלגן בתוך הבית.",
      },
      {
        label: "חסרונות",
        value:
          "צריך לצאת מהבית בעת אזעקה, זמן הגעה ארוך יותר, תופס משטח החצר, עלות גבוהה יותר, פחות ניצול ביום-יום.",
      },
      {
        label: "מתי מתאים",
        value:
          "כשאין אפשרות מבנית לממ״ד פנימי, בית ישן עם קונסטרוקציה רגישה, חצר רחבה עם גישה נוחה, רצון לשמר את החדרים הקיימים.",
      },
      {
        label: "טווח עלות (+ מע״מ)",
        value: "180,000-250,000 ₪ + מע״מ (יסוד עצמאי וגישה מוגנת מייקרים).",
      },
      {
        label: "זמן ביצוע",
        value: "3-5 חודשים, יסוד עצמאי, בנייה וחיבורים דורשים זמן נוסף.",
      },
      {
        label: "רישוי",
        value: "לרוב מסלול היתר מלא מהוועדה המקומית, כולל בדיקת קו בניין ותכנית מפורטת.",
      },
      {
        label: "השפעה על הבית",
        value: "לא משפיע על המבנה הקיים. תופס משטח החצר, לעיתים מחייב התאמה של גינה ושבילים.",
      },
    ],
  },
];

const callouts = [
  {
    title: "זמן תגובה בחירום",
    text: "בממ״ד צמוד מגיעים תוך שניות מהחדרים המרכזיים. בממ״ד חיצוני צריך לצאת מהבית, וזה יכול להיות הפרש של עשרות שניות, קריטי באזורים עם התרעה קצרה.",
  },
  {
    title: "ניצול יום-יומי",
    text: "ממ״ד צמוד משמש כחדר רגיל (שינה, ילדים, עבודה), תמורה מלאה על ההשקעה. ממ״ד חיצוני לרוב נשאר כיחידה למיגון בלבד, עם ניצול יום-יומי מוגבל.",
  },
  {
    title: "עלות כוללת ותכנון",
    text: "ממ״ד חיצוני דורש יסוד עצמאי, קירות חיצוניים מלאים ולעיתים היתר בנייה מלא. לכן הוא יקר ב-15%-25% מממ״ד צמוד באותו גודל.",
  },
];

const faqs = [
  {
    q: "מה ההבדל המהותי בין ממ״ד צמוד לממ״ד חיצוני?",
    a: "ממ״ד צמוד הוא חלק מהבית עצמו. נכנסים אליו דרך פתח פנימי, הוא מתווסף לשטח המגורים ומשמש כחדר רגיל. ממ״ד חיצוני הוא יחידה עצמאית בחצר, עם דלת חיצונית, שמשמשת בעיקר כמרחב מוגן. שני הפתרונות עומדים בתקן פקע״ר ומקבלים אישור. ההבדל הוא פרקטי: איך מגיעים אליו, כמה זמן לוקח בחירום, ומה התמורה היום-יומית.",
  },
  {
    q: "למה ממ״ד חיצוני עולה יותר למרות שלא נוגעים בבית?",
    a: "ממ״ד חיצוני דורש יסוד עצמאי מלא, ארבעה קירות חיצוניים מבטון מזוין (בממ״ד צמוד חלק מהקירות משותפים עם הבית), שביל גישה ולעיתים תשתיות נפרדות לחשמל, אוורור וסינון. כל אלה מייקרים את הבנייה ב-15%-25% מול ממ״ד צמוד באותו גודל.",
  },
  {
    q: "איזה מסלול רישוי דורש כל אחד?",
    a: "ממ״ד צמוד: לרוב מסלול פטור מהיתר או היתר מקוצר לפי תקנות המקלטים, במקרים של תוספת עד 12 מ״ר. ממ״ד חיצוני: לרוב מחייב מסלול היתר מלא מהוועדה המקומית, כולל בדיקת קווי בניין, זכויות ואישור תכנוני (בכפוף לרשות המקומית ולתכנית המתאר הספציפית).",
  },
  {
    q: "מתי עדיף לבחור בממ״ד חיצוני?",
    a: "כשאין מקום מבני פנימי לממ״ד, כשהבית ישן עם קונסטרוקציה רגישה שלא מאפשרת תוספת פנימית, כשיש חצר רחבה עם גישה נוחה, או כשלא רוצים לוותר על חדר קיים. גם במצב שהוועדה המקומית לא מאשרת תוספת פנימית בתכנית המתאר, ממ״ד חיצוני יכול להיות הפתרון היחיד.",
  },
  {
    q: "האם ממ״ד צמוד עולה פחות תמיד?",
    a: "ממ״ד צמוד זול יותר ברוב המקרים, אך לא בכולם. אם יש קיר נושא שצריך לחזק, או שהוועדה דורשת חישוב סטטי מחודש לכל הבית, ממ״ד צמוד יכול להתייקר משמעותית. אצלנו כל פרויקט נבחן פרטנית עם מהנדס קונסטרוקציה, ולפני שמתחייבים למסלול אנחנו מציגים את העלות הריאלית לשני הפתרונות.",
  },
  {
    q: "אתם בונים גם ממ״ד צמוד וגם ממ״ד חיצוני?",
    a: "כן. התחדשות בינוי ויזמות מבצעת את שני הסוגים: יצוק באתר או טרומי, פנימי או חיצוני. אנחנו מגיעים לבית, בודקים עם מהנדס קונסטרוקציה מה אפשרי מבחינה מבנית ותכנונית, ומציגים את הפתרון שנכון באמת לבית שלכם, לא מה שנוח לנו.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="השוואה"
        title="ממ״ד צמוד מול ממ״ד חיצוני: מה מתאים לבית שלכם?"
        subtitle="השוואה מלאה בין שני סוגי הממ״דים: עלות, רישוי, תכנון ומתי כדאי לבחור בכל פתרון."
        crumbs={[
          { name: "השוואות", href: "/compare/mamad-vs-miggun-vs-migunit" },
          { name: "ממ״ד צמוד מול חיצוני", href: PATH },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "בית", url: "/" },
          { name: "השוואות", url: "/compare/mamad-vs-miggun-vs-migunit" },
          { name: "ממ״ד צמוד מול חיצוני", url: PATH },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <Section>
        <Reveal>
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
              כשמתכננים ממ״ד, אחת ההחלטות הראשונות היא <strong>האם לבנות אותו כחלק מהבית (ממ״ד צמוד) או כיחידה עצמאית בחצר (ממ״ד חיצוני)</strong>. שתי הגרסאות הן ממ״ד תקני לכל דבר, מקבלות אישור פיקוד העורף לפי תקן 4422, ומעניקות הגנה מלאה, אבל הן מתנהגות אחרת לגמרי בביצוע, בעלות ובחיים היום-יומיים.
            </p>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              בעמוד הזה אנחנו פורסים את ההבדלים בשקיפות מלאה: מה כל אחד מהם, למי הוא מתאים, כמה הוא עולה (במחירי 2026, טווחים אמיתיים, בלי הטעיות), איזה מסלול רישוי הוא דורש, וכיצד הוא משפיע על הבית שלכם ועל שגרת החיים. בסוף העמוד יש דוגמה לשאלות שאנחנו שואלים בסיור ראשוני, ואיך מגיעים להחלטה הנכונה באמת.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((o) => (
            <Reveal key={o.key}>
              <div
                className={`card-premium p-6 md:p-7 flex flex-col h-full ${
                  o.highlight ? "ring-2 ring-[var(--color-accent)] shadow-xl relative" : ""
                }`}
              >
                {o.badge && (
                  <span className="absolute -top-3 right-6 inline-flex items-center bg-[var(--color-accent)] text-[var(--color-primary)] text-[10px] font-extrabold uppercase tracking-[0.18em] px-3 py-1 rounded-full shadow">
                    {o.badge}
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-1">
                  {o.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] mb-4 pb-4 border-b border-[var(--color-border)]">
                  {o.subtitle}
                </p>
                <dl className="space-y-4 flex-1">
                  {o.rows.map((r) => (
                    <div key={r.label}>
                      <dt className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-1">
                        {r.label}
                      </dt>
                      <dd className="text-sm text-[var(--color-ink)] leading-relaxed">
                        {r.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-[var(--color-muted)] text-center">
          המידע בטבלה כללי ומהווה הכוונה. כל פרויקט נבחן פרטנית. כל המחירים אינם כוללים מע״מ.
          <span className="sr-only"> שורות: {ROW_LABELS.join(", ")}.</span>
        </p>
      </Section>

      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="h-1 w-16 gold-line mb-5 mx-auto" />
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              מה ההבדל בפועל
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
              שלוש הנקודות שבאמת קובעות
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {callouts.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="card-premium p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] flex items-center justify-center text-lg font-black mb-4">
                  {i + 1}
                </div>
                <h3 className="font-black text-[var(--color-primary)] mb-2">{c.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              להעמיק
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">
              קישורים רלוונטיים
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/services/building-mamad"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              שירות
            </div>
            <div className="font-bold text-[var(--color-primary)]">בניית ממ״ד תקני ←</div>
          </Link>
          <Link
            href="/guides/mamad-cost"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              מדריך
            </div>
            <div className="font-bold text-[var(--color-primary)]">כמה עולה ממ״ד ←</div>
          </Link>
          <Link
            href="/guides/mamad-process"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              מדריך
            </div>
            <div className="font-bold text-[var(--color-primary)]">תהליך בניית ממ״ד ←</div>
          </Link>
          <Link
            href="/compare/migunit-vs-mamad-muchan"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              השוואה נוספת
            </div>
            <div className="font-bold text-[var(--color-primary)]">מיגונית מול ממ״ד מוכן ←</div>
          </Link>
          <Link
            href="/compare/mamad-vs-miggun-vs-migunit"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              השוואה נוספת
            </div>
            <div className="font-bold text-[var(--color-primary)]">ממ״ד מול מיגון מול מיגונית ←</div>
          </Link>
          <Link
            href="/compare/katlan-rashum-vs-hafer"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              השוואה נוספת
            </div>
            <div className="font-bold text-[var(--color-primary)]">קבלן רשום מול חאפר ←</div>
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-primary)] font-extrabold px-6 py-4 rounded-xl hover:brightness-95 transition shadow-lg text-center"
          >
            קבלו הצעת מחיר ←
          </Link>
          <a
            href={`https://wa.me/972546712130?text=${encodeURIComponent(
              "היי, הגעתי מעמוד ההשוואה ממ״ד צמוד מול חיצוני"
            )}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] text-white font-extrabold px-6 py-4 rounded-xl hover:brightness-95 transition shadow-lg text-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163A11.867 11.867 0 010 11.5C0 5.149 5.373 0 12 0s12 5.149 12 11.5c0 6.35-5.373 11.5-12 11.5a12.39 12.39 0 01-5.896-1.486L.057 24z" />
            </svg>
            דברו איתנו בוואטסאפ
          </a>
        </div>
        <p className="text-center text-xs text-[var(--color-muted)] mt-4">
          או חייגו ישירות:{" "}
          <a href={`tel:${site.phoneDial}`} className="font-bold text-[var(--color-primary)]">
            {site.phone}
          </a>
        </p>
      </Section>

      <FAQ items={faqs} includeSchema={false} />

      <RelatedLinks
        seed="compare/mamad-tzamud-vs-hitzoni"
        targets={[
          "building-mamad",
          "prefab-mamad",
          "mamad-process",
          "compare-main",
        ]}
      />

      <InlineLeadForm
        title="לא בטוחים איזה ממ״ד מתאים לבית?"
        subtitle="מהנדס מטעמנו מגיע לבית, בוחן את האפשרויות ומציג את הפתרון הנכון, ללא עלות, ללא התחייבות."
        defaultService="בניית ממ״ד"
      />
    </>
  );
}
