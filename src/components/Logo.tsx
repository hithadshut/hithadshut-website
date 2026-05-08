import Image from "next/image";

type Props = {
  /**
   * `dark` (default) renders the logo as-is on light backgrounds (Header).
   * `light` wraps the logo in a small white card so it stays readable on
   * the dark navy Footer. The V2 horizontal logo has a transparent
   * background and uses navy + gold colors, so it doesn't pop on the
   * dark footer without a backing card.
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
  // The V2 horizontal logo ships at 276×80 (1× density). The @2x source
  // is 553×160 — Next picks the @2x off the same path automatically when
  // we set width/height to 1× and provide an appropriate `sizes` value.
  // We render the image with a fixed height (Tailwind h-*) and width:auto
  // to preserve the aspect ratio and avoid CLS.
  const heightClass =
    size === "sm"
      ? "h-9 md:h-10"
      : size === "lg"
        ? "h-14 md:h-16 lg:h-20"
        : "h-12 md:h-14 lg:h-16";

  const inner = (
    <Image
      src="/logo-header.png"
      alt="התחדשות בינוי ויזמות"
      width={276}
      height={80}
      priority={priority}
      sizes="(min-width: 1024px) 320px, (min-width: 768px) 256px, 192px"
      className={`${heightClass} w-auto`}
    />
  );

  if (variant === "light") {
    // White card on the dark Footer. The card is intentionally tight
    // (px-3 py-2 + rounded-md) so it reads as a brand chip, not a
    // billboard. The horizontal logo + this padding keeps the footer
    // column compact.
    return (
      <span
        className={`inline-flex items-center bg-white rounded-md px-3 py-2 ${className}`.trim()}
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
