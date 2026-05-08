import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import InlineLeadForm from "@/components/InlineLeadForm";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";
import { projects } from "@/content/projects";

const PATH = "/projects";
const TITLE = "פרויקטים שביצענו | התחדשות בינוי ויזמות";
const DESCRIPTION =
  "פרויקטי בנייה אמיתיים של התחדשות בינוי ויזמות: ממ״דים, מיגון חדרים, מיגוניות, וילות פרטיות, תוספות בנייה. תיעוד פרויקטים שאנחנו מבצעים בשטח.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

export default function ProjectsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.url}${PATH}#projectlist`,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        description: p.description,
        about: p.serviceType,
        contentLocation: { "@type": "Place", name: p.location },
        ...(p.hasRealImage && {
          image: {
            "@type": "ImageObject",
            url: `${site.url}${p.image}`,
            width: p.width,
            height: p.height,
          },
        }),
        creator: { "@id": `${site.url}/#organization` },
      },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="פרויקטים"
        title="פרויקטים שביצענו"
        subtitle="תיעוד פרויקטים אמיתיים שלנו: שלד, יציקות, ממ״דים, מיגוניות וגמר. כל פרויקט בוצע על ידי הצוות שלנו, תחת חוזה אחד."
        crumbs={[{ name: "פרויקטים", href: PATH }]}
      />

      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "בית", url: "/" },
            { name: "פרויקטים", url: PATH },
          ]),
          itemList,
        ]}
      />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight">
              עבודה אמיתית, לא רנדורים
            </h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              הפרויקטים כאן הם חלק מהעבודה השוטפת שלנו ב-2026: ממ״דים בבתים פרטיים, מיגון חדרים בדירות
              ותיקות, מיגוניות מותקנות בחצרות, ותוספות בנייה משולבות. הזיהוי המדויק (כתובת, שם בעלים)
              לא מפורסם מטעמי פרטיות; כל פרויקט מתואר עם עיר ושכונה בלבד.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article className="card-premium overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] bg-[var(--color-soft)] overflow-hidden">
                  {p.hasRealImage ? (
                    <Image
                      src={p.image}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/10">
                      <svg
                        viewBox="0 0 24 24"
                        width="42"
                        height="42"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="text-[var(--color-primary)]/40 mb-3"
                        aria-hidden
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)]">
                        תיעוד פרויקט
                      </div>
                      <div className="mt-2 text-sm font-bold text-[var(--color-primary)]">
                        תמונה מתעדכנת בקרוב
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-2">
                    <span>{p.serviceType}</span>
                    <span aria-hidden>·</span>
                    <span>{p.location}</span>
                    <span aria-hidden>·</span>
                    <span>{p.capturedAt}</span>
                  </div>
                  <h3 className="font-black text-lg text-[var(--color-primary)] leading-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 max-w-3xl">
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              רוצים לראות פרויקטים דומים לשלכם, או לבקש ייעוץ ראשוני בלי התחייבות?{" "}
              <Link href="/contact" className="font-bold text-[var(--color-primary)] hover:underline">
                השאירו פרטים
              </Link>
              {" "}ונחזור אליכם עם תיאום סיור.
            </p>
          </div>
        </Reveal>
      </Section>

      <InlineLeadForm
        title="מתחילים פרויקט? בואו נדבר."
        subtitle="השאירו פרטים. נגיע לסיור, נבדוק אפשרויות הנדסיות, ונחזור עם הצעה מדויקת."
        defaultService="mamad"
      />
    </>
  );
}
