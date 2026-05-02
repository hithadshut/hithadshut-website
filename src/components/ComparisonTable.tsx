import { ReactNode } from "react";

export type ComparisonColumn = {
  /** Column key, used to look up the cell value on each row. */
  key: string;
  /** Visible column header. */
  header: string;
  /** Marks the recommended/highlighted column. */
  highlight?: boolean;
};

export type ComparisonRow = {
  /** Row label (rendered as a row-header cell, RTL-aware). */
  label: string;
  /** Cell values keyed by column. */
  cells: Record<string, ReactNode>;
};

type ComparisonTableProps = {
  /** Optional small caption rendered above the table. */
  caption?: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  /** Optional fine-print footnote (e.g. "מחירים אינם כוללים מע״מ"). */
  footnote?: string;
  className?: string;
};

/**
 * Canonical comparison table for /new-page money + comparison pages.
 * AI extractors prefer tabular data; this is the standard table shape.
 */
export default function ComparisonTable({
  caption,
  columns,
  rows,
  footnote,
  className = "",
}: ComparisonTableProps) {
  return (
    <div className={`w-full ${className}`}>
      {caption && (
        <p className="text-sm font-medium text-[var(--color-muted)] mb-3">{caption}</p>
      )}
      <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-[var(--color-soft)]">
            <tr>
              <th
                scope="col"
                className="text-right py-3 px-4 font-extrabold text-[var(--color-primary)] border-b-2 border-[var(--color-border)]"
              >
                <span className="sr-only">קטגוריה</span>
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`text-right py-3 px-4 font-extrabold border-b-2 border-[var(--color-border)] ${
                    col.highlight
                      ? "text-[var(--color-accent-dark)] bg-[var(--color-accent)]/10"
                      : "text-[var(--color-primary)]"
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.label}
                className={idx % 2 === 0 ? "bg-white" : "bg-[var(--color-soft)]/50"}
              >
                <th
                  scope="row"
                  className="text-right py-3 px-4 font-bold text-[var(--color-primary)] align-top border-b border-[var(--color-border)]"
                >
                  {row.label}
                </th>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`py-3 px-4 align-top text-[var(--color-ink)] leading-relaxed border-b border-[var(--color-border)] ${
                      col.highlight ? "bg-[var(--color-accent)]/5" : ""
                    }`}
                  >
                    {row.cells[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && (
        <p className="mt-3 text-xs text-[var(--color-muted)] leading-relaxed">{footnote}</p>
      )}
    </div>
  );
}

export { ComparisonTable };
