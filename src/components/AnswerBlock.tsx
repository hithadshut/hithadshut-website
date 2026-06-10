import type { ReactNode } from "react";
import JsonLd from "./JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/schema";
import { site } from "@/lib/site";

type Props = {
  /** 40-60 word direct answer. Factual only: every number traces to a verified source. */
  answer: ReactNode;
  /** 3-6 short, factual Q&A pairs that an AI engine can lift verbatim. */
  faqs: FaqItem[];
  /** The service phrase for the entity line (e.g. "בניית ממ״ד ואישורי פיקוד העורף"). */
  service: string;
  /** The process phrase for the entity line (e.g. "תכנון, רישוי וביצוע עד מסירה"). */
  process: string;
  /** Override the default service-area label (defaults to the published serviceArea). */
  area?: string;
  /**
   * Emit FAQPage JSON-LD. Default OFF so a page that already renders a FAQ with schema
   * keeps a single FAQPage entity. Turn ON only when this block is the page's sole FAQ source.
   */
  includeFaqSchema?: boolean;
  title?: string;
  id?: string;
};

/**
 * AnswerBlock - a reusable GEO citeability primitive.
 *
 * A single, attributable answer surface that AI search engines (ChatGPT Search, Gemini,
 * Google AI Overviews, Perplexity) can lift cleanly: a short direct answer, a tight FAQ,
 * and an entity line that names the business, service, area, phone and process. Every fact
 * must trace to business-facts or to the project's verified regulatory facts. No invented
 * numbers, no marketing filler.
 *
 * Entity defaults come from src/lib/site.ts so the NAP always matches what is published
 * on-site (single source of truth). FAQ schema is opt-in to avoid duplicate FAQPage.
 */
export default function AnswerBlock({
  answer,
  faqs,
  service,
  process,
  area,
  includeFaqSchema = false,
  title = "תשובה מהירה",
  id = "answer-block",
}: Props) {
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
            className="sr-only"
          >
            {title}
          </h2>

          {/* Direct answer: the 40-60 word block AI engines quote. */}
          <p className="text-base md:text-[17px] text-[var(--color-ink)] leading-8">
            {answer}
          </p>

          {/* Entity line: business, service, area, phone, process. Attributable in one read. */}
          <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--color-muted)] border-t border-[var(--color-border)] pt-4">
            <div className="flex gap-2">
              <dt className="font-bold text-[var(--color-primary)] shrink-0">העסק:</dt>
              <dd>{site.legalName}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-[var(--color-primary)] shrink-0">השירות:</dt>
              <dd>{service}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-[var(--color-primary)] shrink-0">אזור:</dt>
              <dd>{area ?? site.serviceArea}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-[var(--color-primary)] shrink-0">טלפון:</dt>
              <dd>
                <a
                  href={`tel:${site.phoneDial}`}
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-2 sm:col-span-2">
              <dt className="font-bold text-[var(--color-primary)] shrink-0">התהליך:</dt>
              <dd>{process}</dd>
            </div>
          </dl>

          {/* Tight FAQ: 3-6 factual Q&A for direct AI extraction. */}
          <div className="mt-6 border-t border-[var(--color-border)] pt-4">
            <dl className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i}>
                  <dt className="font-bold text-[var(--color-ink)] leading-snug">{f.q}</dt>
                  <dd className="mt-1 text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {includeFaqSchema && <JsonLd data={faqJsonLd(faqs)} />}
    </section>
  );
}
