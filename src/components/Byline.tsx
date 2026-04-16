import { site } from "@/lib/site";

/**
 * Byline - collective author credit for guide articles.
 * Renders: "מאת: צוות המומחים של [החברה]"
 * Server component. Pure render.
 *
 * Uses collective attribution (not a fabricated individual name).
 * Once the client nominates a named engineer/architect to take bylines,
 * extend this component with an optional `author` prop and emit Person schema.
 */
export default function Byline() {
  return (
    <span
      role="note"
      aria-label={`מאת צוות המומחים של ${site.legalName}`}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1 text-sm text-[var(--color-muted)] font-medium"
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      <span>
        מאת: <strong className="font-extrabold text-[var(--color-primary)]">צוות המומחים של {site.legalName}</strong>
      </span>
    </span>
  );
}
