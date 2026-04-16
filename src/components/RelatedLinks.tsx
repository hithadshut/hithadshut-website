import Link from "next/link";
import Section from "./Section";
import {
  HREF_MAP,
  TARGET_SUMMARY,
  pickAnchor,
  type LinkTarget,
} from "@/lib/anchors";

type Props = {
  seed: string;
  targets: LinkTarget[];
  title?: string;
  variant?: "grid" | "inline";
  tone?: "white" | "soft" | "soft-reverse" | "dark";
  wrap?: boolean;
};

export default function RelatedLinks({
  seed,
  targets,
  title = "לקריאה נוספת",
  variant = "grid",
  tone = "soft",
  wrap = true,
}: Props) {
  const used = new Set<number>();
  const items = targets.map((target) => ({
    target,
    href: HREF_MAP[target],
    anchor: pickAnchor(target, seed, used),
    summary: TARGET_SUMMARY[target],
  }));

  const content = (
    <nav aria-label="קישורים קשורים">
      <div className="max-w-3xl mb-8">
        <div className="h-1 w-16 gold-line mb-5" />
        <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] leading-tight">
          {title}
        </h2>
      </div>

      {variant === "grid" ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <li key={item.target}>
              <Link
                href={item.href}
                className="card-premium p-5 md:p-6 h-full block group transition hover:-translate-y-0.5"
              >
                <div className="text-base md:text-lg font-black text-[var(--color-primary)] group-hover:text-[var(--color-accent-dark)] transition mb-2 break-words">
                  {item.anchor}
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed break-words">
                  {item.summary}
                </p>
                <span
                  aria-hidden
                  className="inline-block mt-3 text-sm font-bold text-[var(--color-accent-dark)]"
                >
                  קראו עוד ←
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-3 list-disc pr-5 text-[var(--color-ink)]">
          {items.map((item) => (
            <li key={item.target} className="leading-relaxed break-words">
              <Link
                href={item.href}
                className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline-offset-4 hover:underline"
              >
                {item.anchor}
              </Link>
              <span className="text-[var(--color-muted)]">: {item.summary}</span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );

  if (!wrap) return content;

  return <Section tone={tone}>{content}</Section>;
}
