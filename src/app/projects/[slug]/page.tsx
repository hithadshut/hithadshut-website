import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section, { Prose } from "@/components/Section";
import InlineLeadForm from "@/components/InlineLeadForm";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, OFEK_PERSON_ID } from "@/lib/schema";
import { site } from "@/lib/site";
import { projects, getProject } from "@/content/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.title} — ${p.serviceType} | פרויקטים | התחדשות`,
    description: p.description,
    path: `/projects/${slug}`,
    ogImage: p.hasRealImage ? p.image : undefined,
  });
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const url = `/projects/${p.slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    inLanguage: "he-IL",
    datePublished: `${p.capturedAt}-01`,
    dateModified: `${p.capturedAt}-01`,
    author: { "@id": OFEK_PERSON_ID },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${url}` },
    about: p.serviceType,
    contentLocation: { "@type": "Place", name: p.location },
    ...(p.hasRealImage && {
      image: {
        "@type": "ImageObject",
        url: `${site.url}${p.image}`,
        width: p.width,
        height: p.height,
        caption: p.alt,
      },
    }),
  };

  return (
    <>
      <PageHero
        eyebrow={`פרויקט · ${p.serviceType}`}
        title={p.title}
        subtitle={`${p.location} · תיעוד מ-${p.capturedAt}`}
        crumbs={[
          { name: "פרויקטים", href: "/projects" },
          { name: p.title, href: url },
        ]}
      />

      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "בית", url: "/" },
            { name: "פרויקטים", url: "/projects" },
            { name: p.title, url },
          ]),
          article,
        ]}
      />

      <Section tone="white">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 max-w-6xl mx-auto">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] mb-8 bg-[var(--color-soft)] aspect-[4/3]">
              {p.hasRealImage ? (
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  priority
                  sizes="(min-width: 1024px) 800px, 100vw"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/10">
                  <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-[var(--color-primary)]/40 mb-4" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-1">
                    תיעוד פרויקט
                  </div>
                  <div className="font-bold text-[var(--color-primary)]">תמונה מתעדכנת בקרוב</div>
                </div>
              )}
            </div>

            <Prose>
              <h2>על הפרויקט</h2>
              <p>{p.description}</p>

              <h2>מה בוצע</h2>
              <ul>
                <li><strong>סוג שירות:</strong> {p.serviceType}.</li>
                <li><strong>מיקום:</strong> {p.location} (מטעמי פרטיות אנו לא מפרסמים כתובת מדויקת).</li>
                <li><strong>תיעוד מ-:</strong> {p.capturedAt}.</li>
              </ul>

              <h2>שירותים רלוונטיים</h2>
              <p>
                לקריאה על השירות שביצענו בפרויקט זה,{" "}
                <Link href={`/services/${p.showcaseOnService ?? "building-mamad"}`}>
                  ראו את עמוד השירות הרלוונטי
                </Link>
                . מעוניינים בפרויקט דומה?{" "}
                <Link href="/contact">השאירו פרטים</Link>{" "}
                ונחזור אליכם עם תיאום סיור.
              </p>
            </Prose>
          </div>

          <aside className="space-y-6">
            <div className="card-premium p-6">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-2">
                סוג פרויקט
              </div>
              <div className="font-bold text-[var(--color-primary)] mb-4">{p.serviceType}</div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-2">
                מיקום
              </div>
              <div className="font-bold text-[var(--color-primary)] mb-4">{p.location}</div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-2">
                תיעוד מ-
              </div>
              <div className="font-bold text-[var(--color-primary)] mb-6">{p.capturedAt}</div>
              <Link
                href="/contact"
                className="block w-full text-center bg-[var(--color-primary)] text-white font-extrabold px-5 py-3 rounded-xl hover:brightness-110 transition"
              >
                בקשת פרויקט דומה ←
              </Link>
            </div>

            <div className="card-premium p-6">
              <h3 className="font-black text-[var(--color-primary)] mb-3">פרויקטים נוספים</h3>
              <ul className="space-y-2 text-sm">
                {projects
                  .filter((o) => o.slug !== p.slug)
                  .slice(0, 4)
                  .map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/projects/${o.slug}`}
                        className="text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] hover:underline"
                      >
                        {o.title}
                      </Link>
                    </li>
                  ))}
              </ul>
              <Link
                href="/projects"
                className="mt-4 inline-block text-sm font-bold text-[var(--color-primary)] hover:underline"
              >
                לכל הפרויקטים ←
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <InlineLeadForm
        title="רוצים פרויקט דומה?"
        subtitle="השאירו פרטים. נגיע לסיור, נבדוק אפשרויות ונחזור עם הצעה מותאמת."
        defaultService={p.serviceType}
      />
    </>
  );
}
