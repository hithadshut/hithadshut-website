import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "soft" | "dark";
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  white: "bg-white",
  soft: "bg-soft-gradient",
  dark: "bg-[var(--color-primary-dark)] text-white",
};

export default function Section({ id, children, className = "", tone = "white" }: Props) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {children}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-slate max-w-none prose-headings:text-[var(--color-primary)] prose-a:text-[var(--color-primary)]">
      {children}
    </article>
  );
}
