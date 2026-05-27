import Link from "next/link";
import Image from "next/image";
import { getProjectForService } from "@/content/projects";

/**
 * ServiceProjectShowcase - embeds a real project on a service page.
 *
 * Renders nothing if there's no project tagged for this service, OR if
 * the tagged project doesn't yet have a real photo (`hasRealImage:false`).
 * That keeps service pages clean until the JPGs are dropped into
 * `public/projects/` and the flag is flipped.
 *
 * Designed as an additive band - does not modify the existing
 * ServicePageLayout structure.
 */
export default function ServiceProjectShowcase({ serviceSlug }: { serviceSlug: string }) {
  const p = getProjectForService(serviceSlug);
  if (!p || !p.hasRealImage) return null;

  return (
    <section className="bg-soft py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-card)] overflow-hidden grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-[var(--color-soft)]">
            <Image
              src={p.image}
              alt={p.alt}
              width={p.width}
              height={p.height}
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-2">
              פרויקט שביצענו · {p.location}
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[var(--color-primary)] leading-tight mb-3">
              {p.title}
            </h3>
            <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-5">
              {p.description}
            </p>
            <div>
              <Link
                href={`/projects/${p.slug}`}
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
              >
                לפרטי הפרויקט המלאים ←
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
