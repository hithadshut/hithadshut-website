type Stat = {
  /** Bold figure to display, e.g. "160-220 אלף ₪". */
  value: string;
  /** Short label, e.g. "מחיר ממ״ד 9-12 מ״ר". */
  label: string;
  /** Optional one-line context that sits below the label. */
  note?: string;
  /**
   * Source attribution. Use a short label like "פיקוד העורף" + URL when
   * the figure is regulatory. For market figures derived from in-house
   * pricing, use "התחדשות בינוי ויזמות" with no URL.
   */
  source?: { label: string; href?: string };
};

type Props = {
  title?: string;
  eyebrow?: string;
  stats: Stat[];
};

/**
 * Key Stats - a compact grid of verified, cite-friendly figures.
 * Designed for AI engines: each stat is a clean (number, label, source)
 * triple that an LLM can lift verbatim. External-source links carry
 * rel="nofollow noopener" to keep authority outbound flow clean.
 */
export default function KeyStats({ title = "מספרים שכדאי להכיר", eyebrow = "נתונים מאומתים", stats }: Props) {
  return (
    <section
      aria-labelledby="key-stats-heading"
      className="my-10 md:my-14"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
          {eyebrow}
        </div>
        <h2
          id="key-stats-heading"
          className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-5"
        >
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-card)] p-5"
              style={{ borderInlineStartWidth: 4, borderInlineStartColor: "var(--color-accent)" }}
            >
              <div className="text-xl md:text-[22px] font-black text-[var(--color-primary)] leading-tight">
                {s.value}
              </div>
              <div className="mt-1.5 text-sm font-bold text-[var(--color-ink)]">
                {s.label}
              </div>
              {s.note && (
                <div className="mt-1 text-xs text-[var(--color-muted)] leading-relaxed">
                  {s.note}
                </div>
              )}
              {s.source && (
                <div className="mt-3 text-[11px] text-[var(--color-muted)]">
                  מקור:{" "}
                  {s.source.href ? (
                    <a
                      href={s.source.href}
                      target="_blank"
                      rel="nofollow noopener"
                      className="font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      {s.source.label}
                    </a>
                  ) : (
                    <span className="font-semibold text-[var(--color-primary)]">
                      {s.source.label}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
