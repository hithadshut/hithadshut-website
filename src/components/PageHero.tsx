import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
};

export default function PageHero({ eyebrow, title, subtitle, crumbs }: Props) {
  return (
    <section className="bg-hero text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div aria-hidden className="absolute -top-20 -end-20 w-80 h-80 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-4 text-white/80 hero-in hero-in-1">
          <Breadcrumbs items={crumbs} />
        </div>
        {eyebrow && (
          <div className="hero-in hero-in-2 inline-block mb-4 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/40">
            {eyebrow}
          </div>
        )}
        <h1 className="hero-in hero-in-3 text-3xl md:text-5xl font-black leading-tight max-w-4xl tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="hero-in hero-in-4 mt-5 text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
