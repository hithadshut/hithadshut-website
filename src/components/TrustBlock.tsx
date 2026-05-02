import Link from "next/link";
import Byline from "./Byline";
import { site } from "@/lib/site";

type TrustBlockProps = {
  /** ISO 8601 date the page was first published. */
  publishedDate: string;
  /** ISO 8601 date the page was last updated. */
  modifiedDate: string;
  /** Author identifier. Currently only "ofek-mazor" is supported. */
  author?: "ofek-mazor";
  /** Override the legal disclaimer text. Pass `false` to suppress entirely. */
  disclaimer?: string | false;
  /** Optional link to a regulatory source cited in the page body. */
  source?: { label: string; url: string };
  className?: string;
};

const DEFAULT_DISCLAIMER =
  "מידע זה אינו מהווה ייעוץ משפטי, פיננסי או הנדסי. מומלץ להתייעץ עם בעלי המקצוע הרלוונטיים לפני קבלת החלטות.";

function formatIsoToHebrew(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return iso;
  const [, y, mo, d] = m;
  const months = [
    "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
    "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר",
  ];
  return `${parseInt(d, 10)} ב${months[parseInt(mo, 10) - 1]} ${y}`;
}

/**
 * Canonical trust block for money/guide pages: author byline, published +
 * modified dates (machine-readable via <time>), optional source link, and
 * the legal disclaimer.
 */
export default function TrustBlock({
  publishedDate,
  modifiedDate,
  author = "ofek-mazor",
  disclaimer = DEFAULT_DISCLAIMER,
  source,
  className = "",
}: TrustBlockProps) {
  return (
    <aside
      className={`my-10 border-t border-b border-[var(--color-border)] py-6 ${className}`}
      aria-label="פרטי אמינות ומחבר"
    >
      <div className="flex flex-col gap-4">
        <Byline author={author} dateModified={modifiedDate} />

        <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-[var(--color-muted)]">
          <span>
            פורסם:{" "}
            <time dateTime={publishedDate} className="font-bold text-[var(--color-ink)]">
              {formatIsoToHebrew(publishedDate)}
            </time>
          </span>
          <span>
            עודכן:{" "}
            <time dateTime={modifiedDate} className="font-bold text-[var(--color-ink)]">
              {formatIsoToHebrew(modifiedDate)}
            </time>
          </span>
          <span>
            הוצאה לאור:{" "}
            <Link
              href="/about"
              className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
            >
              {site.legalName}
            </Link>
          </span>
        </div>

        {source && (
          <div className="text-xs text-[var(--color-muted)]">
            מקור רגולטורי:{" "}
            <a
              href={source.url}
              target="_blank"
              rel="noopener nofollow"
              className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] underline"
            >
              {source.label}
            </a>
          </div>
        )}

        {disclaimer !== false && (
          <p className="text-xs text-[var(--color-muted)] leading-relaxed">{disclaimer}</p>
        )}
      </div>
    </aside>
  );
}

export { TrustBlock };
