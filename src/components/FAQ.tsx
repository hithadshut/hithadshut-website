import JsonLd from "./JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/schema";
import Reveal from "./Reveal";

type Props = {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  includeSchema?: boolean;
  tone?: "light" | "soft";
};

export default function FAQ({
  items,
  title = "שאלות נפוצות",
  eyebrow = "שאלות ותשובות",
  includeSchema = true,
  tone = "light",
}: Props) {
  return (
    <section aria-labelledby="faq-heading" className={`py-16 md:py-20 ${tone === "soft" ? "bg-soft" : "bg-white"}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <div className="h-1 w-16 gold-line mb-5 mx-auto" />
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              {eyebrow}
            </div>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-[var(--color-primary)]">
              {title}
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-2xl bg-white shadow-[var(--shadow-card)] overflow-hidden">
            {items.map((f, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer list-none font-bold text-[var(--color-ink)] hover:bg-[var(--color-soft)] transition">
                  <span className="leading-snug">{f.q}</span>
                  <span className="faq-chevron text-[var(--color-accent-dark)] shrink-0" aria-hidden>▾</span>
                </summary>
                <div className="px-5 md:px-6 pb-6 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
      {includeSchema && <JsonLd data={faqJsonLd(items)} />}
    </section>
  );
}
