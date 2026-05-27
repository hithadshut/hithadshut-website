import Link from "next/link";
import { site } from "@/lib/site";

type BylineProps = {
  /**
   * When provided, render an attributed byline linking to the company page.
   * Leave undefined to fall back to the same collective company byline.
   */
  author?: "hithadshut-team";
  /** Visible "עודכן: ..." line. Pass an ISO date or a free-form Hebrew label. */
  dateModified?: string;
};

const AUTHORS = {
  "hithadshut-team": {
    name: "צוות התחדשות",
    role: "מומחי ממ״ד והתחדשות עירונית",
    href: "/about",
  },
} as const;

function formatHebrewDate(input: string): string {
  // Accept ISO yyyy-mm-dd or already-formatted Hebrew label.
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(input);
  if (!m) return input;
  const [, y, mo, d] = m;
  const months = [
    "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
    "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר",
  ];
  const monthIdx = parseInt(mo, 10) - 1;
  return `${parseInt(d, 10)} ב${months[monthIdx]} ${y}`;
}

export default function Byline({ author, dateModified }: BylineProps) {
  const personIcon = (
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
  );

  const calendarIcon = (
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
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );

  if (author && AUTHORS[author]) {
    const a = AUTHORS[author];
    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
        <Link
          href={a.href}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-accent)] transition"
          aria-label={`קראו עוד על ${a.name}, ${a.role}`}
        >
          {personIcon}
          <span>
            מאת:{" "}
            <strong className="font-extrabold text-[var(--color-primary)]">
              {a.name}
            </strong>
          </span>
        </Link>
        {dateModified && (
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1 text-[var(--color-muted)]"
            aria-label={`עודכן ${formatHebrewDate(dateModified)}`}
          >
            {calendarIcon}
            <span>
              עודכן:{" "}
              <strong className="font-extrabold text-[var(--color-ink)]">
                {formatHebrewDate(dateModified)}
              </strong>
            </span>
          </span>
        )}
      </span>
    );
  }

  // Collective fallback (no author argument).
  return (
    <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
      <span
        role="note"
        aria-label={`מאת צוות המומחים של ${site.legalName}`}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1 text-[var(--color-muted)] font-medium"
      >
        {personIcon}
        <span>
          מאת:{" "}
          <strong className="font-extrabold text-[var(--color-primary)]">
            צוות המומחים של {site.legalName}
          </strong>
        </span>
      </span>
      {dateModified && (
        <span
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1 text-[var(--color-muted)]"
          aria-label={`עודכן ${formatHebrewDate(dateModified)}`}
        >
          {calendarIcon}
          <span>
            עודכן:{" "}
            <strong className="font-extrabold text-[var(--color-ink)]">
              {formatHebrewDate(dateModified)}
            </strong>
          </span>
        </span>
      )}
    </span>
  );
}
