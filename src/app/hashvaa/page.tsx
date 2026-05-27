import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Byline from "@/components/Byline";
import InlineLeadForm from "@/components/InlineLeadForm";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import SchemaBreadcrumb from "@/components/schema/breadcrumb";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/hashvaa";
const TITLE =
  "השוואות 2026: איזה מסלול התחדשות מתאים לבניין שלי? | התחדשות";
const DESCRIPTION =
  "השוואות מקצועיות בין מסלולי התחדשות עירונית: פינוי בינוי מול תמ״א 38, חלופת שקד מול תמ״א, שיפור מיגון מול פינוי בינוי. מדריך 2026.";
const MODIFIED_DATE = "2026-05-11";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const comparisons = [
  {
    href: "/hashvaa/pinui-vs-tama",
    title: "פינוי בינוי מול תמ״א 38",
    description:
      "מתחם מול בניין יחיד, רוב, זמן, תמורה, סיכון. 7 מימדי השוואה, ומצב המסלולים בפוקעת תמ״א 38.",
  },
  {
    href: "/hashvaa/shaked-vs-tama",
    title: "חלופת שקד מול תמ״א 38",
    description:
      "מה שינה תיקון 139, זכויות בנייה, רוב נדרש, ומה כדאי לדייר שהפרויקט שלו לא הגיע להיתר.",
  },
  {
    href: "/hashvaa/migun-vs-pinui",
    title: "שיפור מיגון מול פינוי בינוי",
    description:
      "מתי מספיק לחזק חדר קיים ומתי צריך פרויקט מקיף. מסגרת החלטה לבעלי בניין ישן.",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "השוואות מסלולי התחדשות עירונית 2026",
  description: DESCRIPTION,
  url: "https://hithadshut.co.il/hashvaa",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: comparisons.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `https://hithadshut.co.il${c.href}`,
    })),
  },
};

export default function HashvaaHubPage() {
  return (
    <>
      <SchemaBreadcrumb items={[{ name: "השוואות", url: "/hashvaa" }]} />
      <JsonLd data={collectionSchema} />

      <PageHero
        title="השוואות 2026: איזה מסלול התחדשות מתאים לבניין שלי?"
        crumbs={[{ name: "השוואות", href: PATH }]}
      />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">
              בעלי דירות בבניינים ישנים נדרשים לבחור בין מספר מסלולי התחדשות
              עירונית, וכל מסלול שונה מהותית ברוב הנדרש, בזמן, בתמורה ובסיכון.
              פינוי בינוי מתאים למתחמים של 24 יחידות ומעלה. תמ״א 38 פוקעת
              במאי 2026 ברוב הארץ. חלופת שקד מחליפה את תמ״א 38/2 לבניין יחיד.
              ושיפור מיגון הוא פתרון נקודתי שלא מערב בנייה מחדש.
              בחרו את ההשוואה שרלוונטית לבניין שלכם.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-4">
              <Byline author="hithadshut-team" dateModified={MODIFIED_DATE} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {comparisons.map((c, i) => (
              <Reveal key={c.href} delay={i * 0.1}>
                <Link
                  href={c.href}
                  className="card-premium flex flex-col gap-3 p-6 h-full"
                >
                  <h2 className="text-xl font-bold text-[var(--color-primary)]">
                    {c.title}
                  </h2>
                  <p className="text-[var(--color-muted)] leading-relaxed flex-1">
                    {c.description}
                  </p>
                  <span className="text-sm font-semibold text-[var(--color-accent-dark)]">
                    קראו את ההשוואה &larr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <InlineLeadForm
        title="לא בטוחים איזה מסלול מתאים לבניין שלכם?"
        subtitle="השאירו פרטים ונחזור אליכם עם המלצה."
      />

      <RelatedLinks
        seed="hashvaa-hub"
        targets={[
          "pinui-binui",
          "tama-38",
          "chalufat-shaked",
          "building-mamad",
          "contact",
        ]}
      />
    </>
  );
}
