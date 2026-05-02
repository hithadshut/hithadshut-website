import { ReactNode } from "react";

type ContentSectionProps = {
  /** Anchor id for table-of-contents linking. */
  id?: string;
  /** Section heading. Becomes h2 by default, h3 when level=3. */
  title: string;
  /** Heading level. */
  level?: 2 | 3;
  /** Section body content. */
  children: ReactNode;
  /** Extra Tailwind classes for the wrapping <section>. */
  className?: string;
};

/**
 * Canonical body section for /new-page money + guide pages.
 * Renders an h2/h3 followed by a content-width prose block.
 */
export default function ContentSection({
  id,
  title,
  level = 2,
  children,
  className = "",
}: ContentSectionProps) {
  const Heading = level === 2 ? "h2" : "h3";
  const headingClass =
    level === 2
      ? "text-2xl md:text-3xl font-black text-[var(--color-primary)] leading-tight mb-4"
      : "text-xl md:text-2xl font-extrabold text-[var(--color-primary)] leading-snug mb-3";
  return (
    <section id={id} className={`max-w-3xl ${className}`}>
      <Heading className={headingClass}>{title}</Heading>
      <div className="space-y-4 text-[17px] text-[var(--color-ink)] leading-8">{children}</div>
    </section>
  );
}

export { ContentSection };
