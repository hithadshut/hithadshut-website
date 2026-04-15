import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
};

export default function PageHero({ eyebrow, title, subtitle, crumbs }: Props) {
  return (
    <section className="bg-hero-gradient text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="mb-4 text-white/80">
          <Breadcrumbs items={crumbs} />
        </div>
        {eyebrow && (
          <div className="inline-block mb-3 px-3 py-1 text-xs font-bold rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
