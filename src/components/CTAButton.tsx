import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "outline-light";
  size?: "md" | "lg";
  className?: string;
  "aria-label"?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)]";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-primary)] shadow-[var(--shadow-cta)]",
  secondary:
    "bg-[var(--color-primary)] hover:bg-[var(--color-primary-2)] text-white",
  ghost:
    "bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur",
  outline:
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  "outline-light":
    "border-2 border-white/80 text-white hover:bg-white hover:text-[var(--color-primary)]",
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  "aria-label": ariaLabel,
}: Props) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (isExternal) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} rel={href.startsWith("http") ? "noopener" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
