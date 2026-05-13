import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { featuredProjects } from "@/content/projects";

/**
 * ProjectsTeaser - 3-card teaser surfaced on the home page.
 * Real-image cards render the photo with next/image; cards still
 * waiting on a photo upload render a description-only placeholder
 * with the project's metadata (location, service type, stage).
 *
 * No fabricated images. No stock photos. The placeholder is honest
 * about being a placeholder and is replaced the moment Ofek drops
 * the real JPG into /public/projects/ and flips hasRealImage:true.
 */
export default function ProjectsTeaser() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="h-1 w-16 gold-line mb-5" />
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              פרויקטים שביצענו
            </div>
            <h2
              id="projects-heading"
              className="text-3xl md:text-5xl font-black text-[var(--color-primary)] leading-tight"
            >
              עבודה אמיתית בשטח
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
              שלד וילה, יציקות בטון מזוין, יסודות לממ״ד, מיגוניות מותקנות.
              דוגמה מתוך פרויקטים שאנחנו מבצעים בעצמנו.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <article className="card-premium overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] bg-[var(--color-soft)] overflow-hidden">
                  {p.hasRealImage ? (
                    <Image
                      src={p.image}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      sizes="(min-width: 768px) 33vw, 100vw"
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
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
            >
              לכל הפרויקטים שלנו ←
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
