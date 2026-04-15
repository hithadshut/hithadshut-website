type Props = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
};

export default function Logo({
  variant = "dark",
  size = "md",
  showTagline = true,
  className = "",
}: Props) {
  const isLight = variant === "light";
  const textColor = isLight ? "#FFFFFF" : "#0A1628";
  const subColor = isLight ? "rgba(255,255,255,0.75)" : "#4B5563";
  const gold = "#C8A97E";
  const goldDark = "#A8874F";

  const mark =
    size === "sm" ? { w: 32, h: 32 } : size === "lg" ? { w: 48, h: 48 } : { w: 40, h: 40 };
  const nameSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";
  const subSize = size === "sm" ? "text-[9px]" : size === "lg" ? "text-[11px]" : "text-[10px]";

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="התחדשות — בינוי ויזמות"
    >
      <svg
        width={mark.w}
        height={mark.h}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Shield silhouette — architectural + protective */}
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={gold} />
            <stop offset="100%" stopColor={goldDark} />
          </linearGradient>
        </defs>
        <path
          d="M24 3L42 9v13.5C42 33.1 34.5 42 24 45C13.5 42 6 33.1 6 22.5V9L24 3z"
          fill={textColor}
        />
        {/* Roof/building lines inside shield */}
        <path
          d="M12.5 26.5L24 16L35.5 26.5"
          stroke="url(#logoGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="17" y="26.5" width="14" height="10" fill="url(#logoGrad)" rx="0.5" />
        <rect x="22" y="30" width="4" height="6.5" fill={textColor} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`${nameSize} font-black tracking-tight`}
          style={{ color: textColor, letterSpacing: "-0.02em" }}
        >
          התחדשות
        </span>
        {showTagline && (
          <span
            className={`${subSize} font-bold uppercase tracking-[0.2em] mt-0.5`}
            style={{ color: subColor }}
          >
            בינוי ויזמות
          </span>
        )}
      </span>
    </span>
  );
}
