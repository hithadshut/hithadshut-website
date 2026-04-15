import JsonLd from "./JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/schema";

type Props = {
  items: FaqItem[];
  title?: string;
  includeSchema?: boolean;
};

export default function FAQ({ items, title = "שאלות נפוצות", includeSchema = true }: Props) {
  return (
    <section aria-labelledby="faq-heading" className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)] mb-6">
          {title}
        </h2>
        <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-2xl bg-white">
          {items.map((f, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none font-bold text-[var(--color-ink)]">
                <span>{f.q}</span>
                <span className="faq-chevron text-[var(--color-accent-dark)]" aria-hidden>▾</span>
              </summary>
              <div className="px-5 pb-5 text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
      {includeSchema && <JsonLd data={faqJsonLd(items)} />}
    </section>
  );
}
