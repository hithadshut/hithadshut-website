import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import InlineLeadForm from "@/components/InlineLeadForm";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessJsonLd } from "@/lib/schema";
import { areas } from "@/content/areas";

const PATH = "/areas";
const TITLE = "אזורי שירות | בניית ממ״ד בכל הארץ | התחדשות";
const DESCRIPTION =
  "חברת התחדשות בינוי ויזמות בונה ממ״דים, מיגון חדרים ומיגוניות בכל הארץ. מידע אזורי ייחודי לפי עיר: ועדה מקומית, אופי הבנייה, ודרישות פקע״ר משתנות. הצעת מחיר תוך 24 שעות.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

/**
 * Per-city unique tagline. Surfaced on the area-index card so the page
 * doesn't read like a doorway hub of identical "ממ״ד · מיגון · מיגונית"
 * cards. Each tagline is 8-18 words and references something genuinely
 * specific to the city (committee, building stock, regulatory wrinkle).
 *
 * Cities with deep `extendedNotes` carry concise extracts; thin cities
 * carry a factual short statement and should be promoted later.
 */
const TAGLINES: Record<string, string> = {
  "tel-aviv":
    "ועדה מקומית עמוסה, גישה מאתגרת בשכונות ותיקות, צפיפות חניות משפיעה על תזמון יציקות.",
  "jerusalem":
    "אבן ירושלמית לפי תקנות העירייה, מגרשים משופעים ותיק שימור פעיל במרכז העיר.",
  "haifa":
    "טופוגרפיה הררית, יציקות על מדרונות, עומסי יסודות מוגדלים בבתים בכרמל ובהדר.",
  "rishon-lezion":
    "תמהיל ברור: שכונות מערב חדשות עם ממ״ד דירתי לצד נחלת יהודה ורמת אליהו ללא מיגון מקורי.",
  "petah-tikva":
    "מלאי בניינים מסוף שנות ה-70, מיגון חדר נפוץ; שכונות חדשות (כפר אברהם) כבר עם ממ״ד.",
  "netanya":
    "עיר חוף. קרבת ים מחייבת בחירת גלוון לדלת ולמסגרות החלון מנגד קורוזיה.",
  "beer-sheva":
    "אזור עם זמני התרעה קצרים ודרישות פקע״ר מחמירות; קרקע חרסיתית מחייבת חישוב יסודות מוקפד.",
  "ashdod":
    "קו קדמי דרומי. עובי קירות 40 ס״מ, דלת וחלון מוגברים; הרישוי דרך מערכת רובעים עירונית.",
  "ashkelon":
    "אחת הערים הקרובות לגבול. תוספת עלות אופיינית, גמישות לוז בעבור תקופות אזעקה חוזרות.",
  "rehovot":
    "תכנית רחובות 2,000 משפיעה על הרחבות; שילוב בתים פרטיים ותיקים עם שכונות חדשות.",
  "ramat-gan":
    "ועדה משותפת עם גבעתיים. תמהיל בניינים בני 60 שנה לצד מגדלי תמ״א 38 בציר ז׳בוטינסקי.",
  "givatayim":
    "ועדה משותפת עם רמת-גן. רוב המבנים בני 50+ שנה. בורוכוב וארלוזורוב ללא ממ״ד מקורי.",
  "herzliya":
    "וילות בהרצליה פיתוח ובנוף ים. תכנון משולב עם תוספות ייחודיות ובחירת רכיבים עמידי ים.",
  "raanana":
    "תב״ע נדיבה להרחבות, רחובות רחבים. קל יותר לתאם משאיות בטון ומנופים בכל השכונות.",
  "kfar-saba":
    "שכונות בתים פרטיים (אליעזר, קפלן). תוספת ממ״ד צמוד היא הפתרון הנפוץ.",
  "modiin":
    "עיר מתוכננת. רוב הדירות עם ממ״ד מקורי. ביקוש לשדרוג רכיבים, לתוספות, ולמיגון חדר בבתים ותיקים.",
  "hadera":
    "שילוב שכונות בתים פרטיים עם אזורי דירות; קרבת חוף בגבעת אולגה משפיעה על בחירת רכיבים.",
  "nahariya":
    "קו קדמי צפוני. עובי קירות גדול, זמני התרעה קצרים, דרישה לממ״ד במרחק שניות מחדרי השינה.",
  "kiryat":
    "מתחם הקריות צפונית לחיפה. תמהיל בתים פרטיים ודירות בנויות בעשורים מעורבים.",
  "afula":
    "עיר בעמק יזרעאל. תמהיל עפולה עילית עם בתים פרטיים לצד שכונות ותיקות.",
  "ramat-hasharon":
    "מגרשים גדולים יחסית, גמישות בתב״ע. אופציה לממ״ד צמוד גדול או חיצוני בהרחבה.",
  "hod-hasharon":
    "שכונות בתים פרטיים בעיקר; הוועדה עובדת על מסלול פטור מהיתר לבתים עד שתי קומות.",
  "yehud":
    "יהוד-מונוסון. בשכונות הוותיקות מיגון חדר/חיצוני, בחדשות יותר ניתן ממ״ד צמוד.",
  "ganei-tikva":
    "עיר בעיקר של בתים פרטיים. ממ״ד חיצוני או הרחבה משולבת ממ״ד הם הפתרונות הנפוצים.",
  "or-yehuda":
    "תמהיל דירות ובתים ותיקים. מיגון חדר קיים פתרון נפוץ בדירות הישנות.",
  "rosh-haayin":
    "עיר מתפתחת עם שכונות חדשות. בכל בית פרטי בשכונה ותיקה ניתן לבחון תוספת ממ״ד.",
  "shoham":
    "יישוב מתוכנן. בעיקר בתים פרטיים ודירות גן, ממ״ד צמוד לבית הוא הסטנדרט.",
  "zichron-yaakov":
    "וילות עם פוטנציאל לממ״ד יצוק באתר בתכנון אדריכלי המשתלב בשפת המושבה.",
};

const DISTRICT_ORDER = [
  "מחוז תל אביב",
  "מחוז המרכז",
  "מחוז ירושלים",
  "מחוז חיפה",
  "מחוז הצפון",
  "מחוז הדרום",
];

const faqs = [
  {
    q: "באילו אזורים בארץ אתם עובדים?",
    a: "אנחנו פועלים בכל הארץ: ממרכז ותל אביב, דרך השרון, השפלה והדרום, ועד חיפה, הקריות והצפון. בעמוד זה מרוכזים אזורי השירות המרכזיים, מסודרים לפי מחוז.",
  },
  {
    q: "האם המחיר משתנה בין אזור לאזור?",
    a: "כן. באזורי קו קדמי (אשדוד, אשקלון, נהריה ועוד) דרישות פקע״ר מחמירות יותר: עובי קירות גדול יותר ותוספת עלות אופיינית של 15%-25%. במרכז המחיר סטנדרטי יותר.",
  },
  {
    q: "האם פיקוד העורף דורש דרישות שונות בכל אזור?",
    a: "כן. פקע״ר מגדיר רמות איום לאזורים שונים, ובהתאם לכך עובי הקירות, סוג הדלת וחלון ההדף. אנחנו מכירים את ההנחיות בכל אזור ומתכננים בהתאם.",
  },
  {
    q: "עד כמה זמן אתם מגיעים לסיור ראשוני?",
    a: "במרבית המקרים בתוך ימי עסקים ספורים מהפנייה. בפרויקטים דחופים אנו מתאמים מועד מהיר יותר.",
  },
  {
    q: "האם יש תוספת עלות לאזורים מרוחקים?",
    a: "הצעת המחיר מותאמת לפי מיקום הפרויקט. עלות הביצוע כוללת את מרכיב הלוגיסטיקה. בכל מקרה, ההצעה סגורה וברורה לפני חתימה.",
  },
];

export default function AreasIndexPage() {
  // Group areas by district. Within each district, push noindexed cities to
  // the bottom (still rendered, but the indexable ones lead).
  const byDistrict = new Map<string, typeof areas>();
  for (const a of areas) {
    const list = byDistrict.get(a.district) ?? [];
    list.push(a);
    byDistrict.set(a.district, list);
  }
  for (const list of byDistrict.values()) {
    list.sort((a, b) => Number(!!a.noindexReason) - Number(!!b.noindexReason));
  }

  return (
    <>
      <PageHero
        eyebrow="אזורי שירות"
        title="בניית ממ״ד בכל הארץ"
        subtitle="פועלים בכל הארץ. כל עיר עם הקשר משלה: ועדה מקומית, אופי בנייה, ודרישות פקע״ר משתנות לפי איזור."
        crumbs={[{ name: "אזורי שירות", href: PATH }]}
      />

      <JsonLd data={localBusinessJsonLd()} />

      {/* Quick Answer band — regulatory differences across regions */}
      <Section tone="soft">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-card)] p-6 md:p-8"
            style={{ borderInlineStartWidth: 6, borderInlineStartColor: "var(--color-accent)" }}
          >
            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              בקצרה
            </div>
            <h2 className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-3">
              אזור הבית שלכם משפיע על הפרויקט
            </h2>
            <p className="text-base md:text-[17px] text-[var(--color-ink)] leading-relaxed">
              <strong>ממ״ד באזורי קו קדמי</strong> (אשדוד, אשקלון, נהריה, באר שבע) דורש לרוב עובי קיר
              גדול מהסטנדרט הפנימי, ודרישות מוגברות לדלת ולחלון הדף, תוספת אופיינית של 15-25% במחיר
              ובלוז הביצוע. <strong>במחוזות המרכז ותל אביב</strong>, מסלול פטור מהיתר לבתים עד שתי קומות
              הוא הסטנדרט. בערים תחת ועדה מקומית עמוסה (תל אביב, ירושלים), זמן הטיפול בבקשה עלול להתארך
              מעבר ל-14 ימי העבודה הצפויים. בכל אזור: תכנון פרטני, לא תבנית אחת.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight">
              אזורי שירות לפי מחוז
            </h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              לחצו על העיר שלכם למידע ייעודי: ועדה מקומית, תכניות החלות, אופי הבנייה ודרישות פקע״ר. כל
              עמוד עיר מותאם לאזור, לא טקסט גנרי.
            </p>
          </div>
        </Reveal>

        {DISTRICT_ORDER.map((district) => {
          const list = byDistrict.get(district);
          if (!list || list.length === 0) return null;
          return (
            <div key={district} className="mb-12 last:mb-0">
              <Reveal>
                <div className="flex items-baseline justify-between gap-3 mb-5">
                  <h3 className="text-xl md:text-2xl font-black text-[var(--color-primary)]">
                    {district}
                  </h3>
                  <span className="text-xs font-bold text-[var(--color-muted)]">
                    {list.length} ערים
                  </span>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {list.map((a) => {
                  const tagline = TAGLINES[a.slug];
                  return (
                    <Link
                      key={a.slug}
                      href={`/areas/${a.slug}`}
                      className="card-premium p-5 md:p-6 hover:shadow-[var(--shadow-deep)] transition block flex flex-col"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-accent-dark)]">
                          {a.district.replace("מחוז ", "")}
                        </div>
                        {a.isFrontLine && (
                          <span className="px-2 py-0.5 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] text-[10px] font-extrabold">
                            קו קדמי
                          </span>
                        )}
                      </div>
                      <div className="text-lg md:text-xl font-black text-[var(--color-primary)] mb-2">
                        {a.name}
                      </div>
                      {tagline ? (
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{tagline}</p>
                      ) : (
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                          ממ״ד · מיגון חדר · מיגונית · ממ״ד מוכן
                        </p>
                      )}
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)]">
                        פרטים מקומיים ←
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Section>

      <InlineLeadForm
        title="לא רואים את האזור שלכם?"
        subtitle="אנחנו פועלים בכל הארץ. השאירו פרטים ונחזור אליכם עם מענה מקצועי לאזור שלכם."
        defaultService="בניית ממ״ד"
      />

      <FAQ items={faqs} eyebrow="שאלות ותשובות" title="שאלות נפוצות על אזורי שירות" tone="soft" />
    </>
  );
}
