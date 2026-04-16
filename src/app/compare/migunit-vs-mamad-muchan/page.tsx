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

const PATH = "/compare/migunit-vs-mamad-muchan";
const TITLE = "מיגונית מול ממ״ד מוכן | השוואה | התחדשות";
const DESCRIPTION =
  "מיגונית או ממ״ד מוכן? הבדלים, יתרונות, מחירים ולמי כל פתרון מתאים. התחדשות בינוי ויזמות. קבלו הצעה.";

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

const options: Option[] = [
  {
    key: "migunit",
    title: "מיגונית",
    subtitle: "יחידת מיגון קומפקטית המגיעה מהמפעל ומוצבת בחצר",
    rows: [
      {
        label: "תיאור",
        value:
          "יחידה חיצונית נפרדת (בדרך כלל 2-6 מ״ר) מיוצרת במפעל ומותקנת על יסוד בטון בחצר. מיועדת בעיקר למיגון בעת חירום ולא כחדר יומיומי.",
      },
      {
        label: "סטנדרט פקע״ר",
        value:
          "חלק מהדגמים מאושרים פקע״ר, ואת זה חובה לוודא מראש בכתב. דגם ללא אישור פקע״ר נותן הגנה חלקית בלבד. [לבדיקה פרטנית מול היצרן].",
      },
      {
        label: "עלות (+ מע״מ)",
        value: "30,000-80,000 ₪ + מע״מ, תלוי בגודל, דגם, אישור פקע״ר ויסוד.",
      },
      {
        label: "זמן התקנה",
        value:
          "4-8 שבועות סך הכול, כולל הזמנה, יצור במפעל, הכנת יסוד והנפה. הצבה בפועל ביום אחד.",
      },
      {
        label: "נוחות יומיומית",
        value:
          "מוגבלת. יחידה חיצונית בחצר. לא משמשת כחדר שינה / עבודה, משמשת בעיקר בעת אזעקה.",
      },
      {
        label: "אישורים נדרשים",
        value:
          "תעודת אישור פקע״ר מהיצרן לדגם, היתר מקומי לפי חוק התכנון והבנייה, חישוב יסוד ממהנדס.",
      },
      {
        label: "השפעה ויזואלית על הבית",
        value:
          "יחידה גלויה בחצר, נראית כמבנה עצמאי (קונטיינר מיגון). ניתן לחפות / לצבוע כדי להשתלב.",
      },
      {
        label: "מתי מתאים",
        value:
          "תקציב מוגבל, אין אפשרות מבנית לממ״ד, צורך בפתרון מיידי, בתים עם חצר וגישה טובה, מוסדות קטנים, גני ילדים.",
      },
    ],
  },
  {
    key: "muchan",
    title: "ממ״ד מוכן",
    subtitle: "ממ״ד טרומי תקני בגודל מלא, המחובר לבית ומשמש כחדר",
    highlight: true,
    badge: "הגנה תקנית מלאה",
    rows: [
      {
        label: "תיאור",
        value:
          "ממ״ד בגודל מלא (9 מ״ר ומעלה) שמיוצר במפעל ומועבר לאתר. מותקן על יסוד, מחובר לבית ומשמש כחדר רגיל (שינה, עבודה או ילדים) בנוסף לתפקידו כמרחב מוגן.",
      },
      {
        label: "סטנדרט פקע״ר",
        value:
          "תקני מלא. ממ״ד המיוצר לפי תקן 4422, עובי קירות מלא, חלון הדף, סינון כימי-ביולוגי, דלת הדף. רק דגמים מאושרי פקע״ר.",
      },
      {
        label: "עלות (+ מע״מ)",
        value: "180,000-250,000 ₪ + מע״מ, תלוי בגודל, חיבורים, יסוד ומורכבות.",
      },
      {
        label: "זמן התקנה",
        value:
          "6-12 שבועות סך הכול: ייצור במפעל, יסוד, הנפה וחיבורים לבית. הנפה ביום, חיבורים נמשכים עוד כ-שבועיים.",
      },
      {
        label: "נוחות יומיומית",
        value:
          "גבוהה. משמש כחדר רגיל לכל דבר, מוסיף שטח לבית, מעלה את ערך הנכס. תמורה מלאה על ההשקעה.",
      },
      {
        label: "אישורים נדרשים",
        value:
          "אישור פקע״ר מלא (תעודת דגם), היתר בנייה או פטור לפי התכנית המקומית, אישור הנדסי ליסוד ולחיבור לבית.",
      },
      {
        label: "השפעה ויזואלית על הבית",
        value:
          "מתווסף כתוספת לבית. מתכסה בחיפוי מתאים (טיח, אבן, עץ), משתלב בצורת המעטפת הקיימת.",
      },
      {
        label: "מתי מתאים",
        value:
          "בית פרטי עם חצר וגישה למנוף, רצון בממ״ד תקני מהיר בלי בנייה יצוקה, תקציב שמאפשר פתרון לטווח ארוך, צורך בחדר נוסף.",
      },
    ],
  },
];

const callouts = [
  {
    title: "גודל ותפקוד",
    text: "מיגונית היא יחידת מיגון חירום קומפקטית (2-6 מ״ר). ממ״ד מוכן הוא חדר מלא לכל דבר (9+ מ״ר) שמשמש גם כחדר יומיומי. זה לא אותו מוצר, זה שני פתרונות שונים לצרכים שונים.",
  },
  {
    title: "רמת הגנה ואישורים",
    text: "ממ״ד מוכן חייב לעמוד בתקן 4422 המלא (עם סינון כימי-ביולוגי, חלון הדף, דלת הדף), ולכן מקבל אישור פקע״ר מלא. מיגונית מאושרת פקע״ר עומדת בסטנדרט מיגון מקלט, הגנה טובה אבל ברמה שונה.",
  },
  {
    title: "החלטה מבוססת תקציב ומקום",
    text: "אם יש תקציב של 180-250 אלף ₪ + מע״מ ורוצים ממ״ד תקני, ממ״ד מוכן. אם התקציב מוגבל או שאין אפשרות לממ״ד בגודל מלא, מיגונית מאושרת פקע״ר היא הפתרון הפרקטי.",
  },
];

const faqs = [
  {
    q: "מה ההבדל העיקרי בין מיגונית לממ״ד מוכן?",
    a: "גודל, תפקוד ורמת הגנה. מיגונית = יחידה חיצונית נפרדת וקטנה (2-6 מ״ר), משמשת בעיקר למיגון, עולה 30,000-80,000 ₪ + מע״מ. ממ״ד מוכן = חדר מלא (9+ מ״ר) המחובר לבית, משמש יומיומית, עולה 180,000-250,000 ₪ + מע״מ. שני פתרונות שונים לצרכים שונים, לא תחליפיים.",
  },
  {
    q: "מיגונית נחשבת לממ״ד תקני?",
    a: "רק אם היא דגם מאושר פקע״ר בכתב, וגם אז היא לא ממ״ד במובן הרחב (היא לא חדר שמשמש יומיומית). ממ״ד תקני מלא הוא חלק מהבית או ממ״ד מוכן בגודל מלא לפי תקן 4422. חלק מהמיגוניות בשוק כלל לא מאושרות פקע״ר. לפני קנייה, חובה לדרוש תעודת דגם בכתב.",
  },
  {
    q: "כמה זמן לוקח להתקין כל אחד?",
    a: "מיגונית: 4-8 שבועות סך הכול (הזמנה, יצור, יסוד, הנפה). הצבה בפועל ביום. ממ״ד מוכן: 6-12 שבועות (ייצור, יסוד, הנפה, חיבורים). הנפה ביום, חיבורים וגמר ממושכים יותר. שני הפתרונות מהירים משמעותית מממ״ד יצוק באתר (3-4 חודשים).",
  },
  {
    q: "למה הפער במחיר כל כך גדול?",
    a: "שלושה גורמים עיקריים: גודל (ממ״ד מוכן גדול פי 2-4), תקן (חלון הדף, דלת הדף, סינון כימי-ביולוגי יוצרים הפרש משמעותי), וחיבור (ממ״ד מוכן דורש אינטגרציה מלאה עם הבית: תשתיות, יסוד גדול, חיפוי). מיגונית מגיעה כיחידה עצמאית, הרבה פחות עבודה באתר.",
  },
  {
    q: "אם התקציב שלי מוגבל, מיגונית היא פשרה סבירה?",
    a: "זה תלוי בצורך. אם הצורך הוא הגנה לבית פרטי עם משפחה שצריכה להכנס למרחב מוגן תוך שניות, מיגונית חיצונית עשויה להיות פחות פרקטית מאשר מיגון חדר קיים. אם הצורך הוא מבנה קטן, מוסד חינוכי או תוספת למיגון בית עם חצר, מיגונית מאושרת פקע״ר היא פתרון טוב ולגיטימי.",
  },
  {
    q: "אתם מתקינים את שני הפתרונות?",
    a: "כן. התחדשות בינוי ויזמות מבצעת גם מיגוניות (מדגמים מאושרי פקע״ר בלבד) וגם ממ״דים מוכנים (טרומיים, בסטנדרט 4422). אנחנו אחראים לכל התהליך: ייעוץ, בחירת דגם, היתרים, יסוד, הנפה, חיבורים ואישור מסירה. חוזה אחד, אחריות אחת, צוות אחד.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="השוואה"
        title="מיגונית מול ממ״ד מוכן: איזה פתרון נכון לכם?"
        subtitle="הבדלים טכניים, עלויות, זמני התקנה ורמת הגנה. שני הפתרונות תקפים, אבל כל אחד מתאים למטרה אחרת."
        crumbs={[
          { name: "השוואות", href: "/compare/mamad-vs-miggun-vs-migunit" },
          { name: "מיגונית מול ממ״ד מוכן", href: PATH },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "בית", url: "/" },
          { name: "השוואות", url: "/compare/mamad-vs-miggun-vs-migunit" },
          { name: "מיגונית מול ממ״ד מוכן", url: PATH },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <Section>
        <Reveal>
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
              ‏&bdquo;מיגונית&rdquo; ו&bdquo;ממ״ד מוכן&rdquo; נשמעים דומים: שניהם מגיעים מהמפעל, מותקנים על יסוד בטון, ונראים כמו פתרון מהיר. <strong>אבל זה שני מוצרים שונים לחלוטין</strong>: מיגונית היא יחידת מיגון חירום קטנה, ממ״ד מוכן הוא חדר מלא תקני שמשתלב בבית.
            </p>
            <p className="text-base text-[var(--color-muted)] leading-relaxed">
              בעמוד הזה אנחנו מנתחים את שני הפתרונות לפי הפרמטרים שבאמת חשובים: סטנדרט פיקוד העורף, עלות ריאלית במחירי 2026 (כולל מע״מ כ-17%), זמן ההתקנה, נוחות השימוש היום-יומית ואיזה אישורים נדרשים. בסוף, המלצה מעשית על איזה פתרון נכון לכם לפי הצורך הספציפי.
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
              שלוש הנקודות שבאמת חשובות בהחלטה
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
            href="/services/migunit"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              שירות
            </div>
            <div className="font-bold text-[var(--color-primary)]">מיגונית ←</div>
          </Link>
          <Link
            href="/services/prefab-mamad"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              שירות
            </div>
            <div className="font-bold text-[var(--color-primary)]">ממ״ד מוכן ←</div>
          </Link>
          <Link
            href="/services/building-mamad"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              שירות
            </div>
            <div className="font-bold text-[var(--color-primary)]">בניית ממ״ד יצוק ←</div>
          </Link>
          <Link
            href="/guides/mamad-cost"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              מדריך
            </div>
            <div className="font-bold text-[var(--color-primary)]">עלויות ממ״ד ←</div>
          </Link>
          <Link
            href="/compare/mamad-tzamud-vs-hitzoni"
            className="card-premium p-5 hover:bg-[var(--color-soft)] transition"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)] mb-2">
              השוואה נוספת
            </div>
            <div className="font-bold text-[var(--color-primary)]">ממ״ד צמוד מול חיצוני ←</div>
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
              "היי, הגעתי מעמוד ההשוואה מיגונית מול ממ״ד מוכן"
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
        seed="compare/migunit-vs-mamad-muchan"
        targets={[
          "migunit",
          "prefab-mamad",
          "home-front-command-approval",
          "compare-main",
        ]}
      />

      <InlineLeadForm
        title="רוצים ייעוץ אישי על מיגונית או ממ״ד מוכן?"
        subtitle="מהנדס מטעמנו יבוא לבית, יבחן את האפשרויות ויציג את הפתרון שנכון באמת. ללא עלות, ללא התחייבות."
      />
    </>
  );
}
