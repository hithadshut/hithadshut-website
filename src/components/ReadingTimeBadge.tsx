type Props =
  | { words: number; minutes?: never }
  | { words?: never; minutes: number };

/**
 * ReadingTimeBadge - inline pill ("זמן קריאה: ~X דק׳") with a clock SVG icon.
 * Server component (no "use client"). Pure render.
 * Accepts either `words` (auto-divides by 200 wpm) or `minutes` directly.
 */
export default function ReadingTimeBadge(props: Props) {
  const minutes =
    typeof props.minutes === "number"
      ? Math.max(1, Math.round(props.minutes))
      : Math.max(1, Math.round(props.words / 200));

  const label = `זמן קריאה משוער ${minutes} דקות`;

  return (
    <span
      role="note"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-white/80 px-3 py-1 text-sm text-[var(--color-muted)] font-medium"
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--color-accent-dark)]"
      >
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </svg>
      <span>
        זמן קריאה: <strong className="font-extrabold text-[var(--color-primary)]">~{minutes} דק׳</strong>
      </span>
    </span>
  );
}
