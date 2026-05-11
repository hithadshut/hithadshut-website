import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import InlineLeadForm from "@/components/InlineLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import Byline from "@/components/Byline";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/madrichim";
const TITLE = "מדריכי התחדשות עירונית וממ״ד 2026 | התחדשות בינוי ויזמות";
const DESCRIPTION =
  "מדריכים מקצועיים לבעלי דירות: פינוי בינוי, תמ״א 38, ערבויות, מיסוי, בחירת יזם, ממ״ד ומיגון. מידע עדכני 2026 מאופק מזור, מנכ״ל התחדשות.";
const MODIFIED_DATE = "2026-05-11";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

type ArticleCard = {
  href: string;
  title: string;
  description: string;
};

const CATEGORIES: {
  heading: string;
  articles: ArticleCard[];
}[] = [
  {
    heading: "פינוי בינוי: לוח זמנים, הסכמים ומיסוי",
    articles: [
      {
        href: "/madrichim/luach-zmanim-pinui-binui-2026",
        title: "לוח זמנים לפינוי בינוי 2026",
        description:
          "כמה זמן באמת לוקח פרויקט פינוי בינוי, מה משפיע על הקצב, ואיך נראה ציר הזמן משלב ההתארגנות ועד קבלת המפתח.",
      },
      {
        href: "/madrichim/heskem-pinui-binui-shel-2-amudim",
        title: "הסכם פינוי בינוי של 2 עמודים",
        description:
          "למה חלק מהיזמים מציעים הסכם קצר, מה חסר בו, ואילו סעיפים קריטיים חייבים להופיע בכל הסכם.",
      },
      {
        href: "/madrichim/tax-meturgam-pinui-binui-2026",
        title: "מיסוי בפינוי בינוי 2026",
        description:
          "מס שבח, היטל השבחה, מס רכישה ופטורים. סקירה של כללי המיסוי העדכניים לבעלי דירות בפרויקטי פינוי בינוי.",
      },
      {
        href: "/madrichim/dirot-temura-vs-dirot-mukdamot",
        title: "דירות תמורה מול דירות מוקדמות",
        description:
          "ההבדל בין דירת תמורה שמקבלים בסוף הפרויקט לבין דירה מוקדמת שנרכשת בשלב מוקדם. יתרונות, חסרונות וסיכונים.",
      },
    ],
  },
  {
    heading: "בחירת יזם והערכת הצעות",
    articles: [
      {
        href: "/madrichim/10-shealot-le-yazam",
        title: "10 שאלות ליזם פינוי בינוי",
        description:
          "עשר שאלות שכל דייר חייב לשאול יזם לפני חתימה על הסכם. כולל דגלים אדומים ותשובות שצריך לדרוש.",
      },
      {
        href: "/madrichim/sheelot-shalemot-leyazam-pinui-binui",
        title: "25 שאלות שלמות ליזם",
        description:
          "גרסה מורחבת ומעמיקה: 25 שאלות מסודרות לפי נושא, עם הסבר מה לחפש בכל תשובה.",
      },
      {
        href: "/madrichim/hashvaa-yazamim-mobililim-2026",
        title: "השוואת יזמי פינוי בינוי 2026",
        description:
          "מסגרת להערכת יזמים לפי 8 קריטריונים מקצועיים: ניסיון, איתנות פיננסית, קצב ביצוע, ואיכות שירות.",
      },
    ],
  },
  {
    heading: "זכויות, ערבויות וירושה",
    articles: [
      {
        href: "/madrichim/eravut-bankait-vs-chok-mehor",
        title: "ערבות בנקאית מול חוק מכר",
        description:
          "ההבדל בין ערבות בנקאית רגילה לבין ערבות חוק מכר (דירות), ואיזו הגנה כלכלית עדיפה לדייר בפרויקט.",
      },
      {
        href: "/madrichim/zechut-baalut-vs-zechut-yorshim",
        title: "זכות בעלות מול זכות יורשים",
        description:
          "ההבחנה המשפטית בין בעלות רשומה בטאבו לזכות יורשים, והשלכות על הסכם פינוי בינוי ופטור ממס.",
      },
    ],
  },
  {
    heading: "תמ״א 38 ומיגון",
    articles: [
      {
        href: "/madrichim/sof-tama-38-ma-laasot",
        title: "סוף תמ״א 38: מה לעשות עכשיו",
        description:
          "תמ״א 38 פוקעת במאי 2026. מה דייר בפרויקט פעיל צריך לעשות, ומה האלטרנטיבות לבניין שלא הספיק.",
      },
      {
        href: "/madrichim/matey-shipur-migun-adif",
        title: "מתי שיפור מיגון עדיף על ממ״ד",
        description:
          "מסגרת החלטה לבעלי בניין ישן: מתי שיפור מיגון לחדר קיים עדיף על בניית ממ״ד חדש, ומתי לא.",
      },
    ],
  },
];

const ALL_ARTICLES = CATEGORIES.flatMap((c) => c.articles);

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "מדריכי התחדשות עירונית וממ״ד 2026",
  description: DESCRIPTION,
  url: "https://hithadshut.co.il/madrichim",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: ALL_ARTICLES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title,
      url: `https://hithadshut.co.il${a.href}`,
    })),
  },
};

export default function MadrichimHub() {
  return (
    <>
      <SchemaBreadcrumb items={[{ name: "מדריכים", url: "/madrichim" }]} />
      <JsonLd data={collectionSchema} />

      <PageHero
        title="מדריכי התחדשות עירונית וממ״ד 2026"
        crumbs={[{ name: "מדריכים", href: "/madrichim" }]}
      />

      {/* Opening paragraph + byline */}
      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[17px] leading-7 text-[var(--color-ink)]">
              בעמוד הזה ריכזנו 11 מדריכים מקצועיים שנכתבו עבור בעלי דירות
              שנמצאים בתהליך התחדשות עירונית או שוקלים בניית ממ״ד. המדריכים
              מכסים את הנושאים המרכזיים: לוחות זמנים בפינוי בינוי, בחירת יזם,
              ערבויות, מיסוי, ירושה, תמ״א 38 ושיפור מיגון. כל מדריך מבוסס
              על ניסיון שטח ועל מקורות רשמיים, ומעודכן לשנת 2026.
            </p>
            <div className="mt-5">
              <Byline author="ofek-mazor" dateModified={MODIFIED_DATE} />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Category sections */}
      {CATEGORIES.map((category, catIdx) => (
        <Section
          key={category.heading}
          id={`cat-${catIdx}`}
          tone={catIdx % 2 === 0 ? "soft" : "white"}
        >
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-8">
              {category.heading}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.articles.map((article) => (
              <Reveal key={article.href}>
                <Link
                  href={article.href}
                  className="card-premium p-6 h-full flex flex-col group"
                >
                  <h3 className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent-dark)] transition mb-3">
                    {article.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[var(--color-muted)] flex-1">
                    {article.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-[var(--color-accent-dark)] group-hover:underline">
                    קראו עוד &larr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      {/* CTA */}
      <InlineLeadForm
        title="רוצים ליווי אישי בתהליך?"
        subtitle="השאירו פרטים ואופק יחזור אליכם תוך שעות."
        prioritizeUrbanRenewal
      />

      {/* Related links */}
      <RelatedLinks
        seed="madrichim-hub"
        targets={[
          "pinui-binui",
          "tama-38",
          "chalufat-shaked",
          "hashvaa-pinui-vs-tama",
          "building-mamad",
          "contact",
        ]}
      />
    </>
  );
}
