import type { ReactNode } from "react";

type Props = {
  title?: string;
  bullets: (string | ReactNode)[];
  id?: string;
};

/**
 * TldrBlock - "בקצרה" summary card at the top of long-form content.
 * Optimized for AI citation: short, factual, keyword-rich direct answers.
 * Gold-accented, RTL, mobile-friendly.
 */
export default function TldrBlock({ title = "בקצרה", bullets, id = "tldr" }: Props) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      role="region"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-10"
    >
      <div className="mx-auto max-w-4xl">
        <div
          className="relative rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-card)] p-6 md:p-8"
          style={{ borderInlineStartWidth: 6, borderInlineStartColor: "var(--color-accent)" }}
        >
          <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
            {title}
          </div>
          <h2
            id={`${id}-heading`}
            className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-4"
          >
            התשובה בקצרה
          </h2>
          <ul className="space-y-3 list-none">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-3 text-[var(--color-ink)] leading-relaxed text-base md:text-[17px]"
              >
                <span
                  aria-hidden
                  className="shrink-0 mt-[10px] w-2 h-2 rounded-full bg-[var(--color-accent)]"
                />
                <span className="min-w-0 break-words">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
