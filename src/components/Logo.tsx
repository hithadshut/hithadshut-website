import Image from "next/image";

type Props = {
  /**
   * `dark` (default) renders the logo as-is on light backgrounds (Header).
   * `light` wraps the logo in a small white card so it stays readable on
   * the dark navy Footer. We don't ship a separate light-on-dark logo
   * file yet, so this is the pragmatic compromise.
   */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  /**
   * Legacy prop from the previous SVG-based logo. The new image is a
   * single asset that already includes the wordmark + tagline, so this
   * prop is a no-op. Kept to avoid touching every caller.
   */
  showTagline?: boolean;
  className?: string;
  /**
   * Set to `true` for the very first Logo on the page (the Header copy).
   * Eagerly loads the LCP image. Defaults to false to avoid duplicate
   * `priority` warnings when the Logo also renders in the Footer.
   */
  priority?: boolean;
};

export default function Logo({
  variant = "dark",
  size = "md",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showTagline = true,
  className = "",
  priority = false,
}: Props) {
  // Tailwind tokens — desktop bumps the height for legibility on the
  // older audience this site targets. The PNG ships at 215×160 (the @2x
  // header asset), so width-auto + a fixed height keeps the aspect ratio
  // and lets us push width as far as needed without layout shift.
  const heightClass =
    size === "sm"
      ? "h-9 md:h-10"
      : size === "lg"
        ? "h-14 md:h-20"
        : "h-12 md:h-16";

  const inner = (
    <Image
      src="/logo-header.png"
      alt="התחדשות בינוי ויזמות"
      width={215}
      height={160}
      priority={priority}
      sizes="(min-width: 768px) 256px, 192px"
      className={`${heightClass} w-auto`}
    />
  );

  if (variant === "light") {
    // White card on the dark Footer. `inline-flex` keeps the box hugging
    // the image, padding is small to stay compact in the footer column.
    return (
      <span
        className={`inline-flex items-center bg-white/95 rounded-xl px-3 py-2 ${className}`.trim()}
        aria-label="התחדשות בינוי ויזמות"
      >
        {inner}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center ${className}`.trim()}
      aria-label="התחדשות בינוי ויזמות"
    >
      {inner}
    </span>
  );
}
