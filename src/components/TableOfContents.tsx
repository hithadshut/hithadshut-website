"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

type Props = {
  items: Item[];
  title?: string;
};

/**
 * TableOfContents - sticky sidebar on desktop (lg+), collapsible accordion on mobile.
 * - Client component: IntersectionObserver highlights the active section on desktop.
 * - RTL-correct: uses margin-inline / padding-inline via Tailwind logical properties.
 * - Accessible: wrapper is <nav aria-label="תוכן עניינים">.
 */
export default function TableOfContents({ items, title = "תוכן עניינים" }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;
    if (!("IntersectionObserver" in window)) return;

    const targets = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the top-most intersecting heading.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const list = (
    <ol className="list-none space-y-2 counter-reset-toc">
      {items.map((it, i) => {
        const isActive = activeId === it.id;
        return (
          <li key={it.id} className="leading-snug break-words">
            <a
              href={`#${it.id}`}
              className={`flex gap-3 items-start text-sm md:text-[15px] transition rounded-md px-2 py-1.5 ${
                isActive
                  ? "text-[var(--color-accent-dark)] font-extrabold bg-[var(--color-accent)]/10"
                  : "text-[var(--color-ink)] hover:text-[var(--color-accent-dark)] hover:bg-[var(--color-soft)]"
              }`}
            >
              <span
                aria-hidden
                className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[11px] font-black"
              >
                {i + 1}
              </span>
              <span className="min-w-0 break-words">{it.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <nav aria-label="תוכן עניינים" className="w-full">
      {/* Mobile: collapsible */}
      <details
        className="lg:hidden card-premium p-5"
        style={{ borderInlineStartWidth: 4, borderInlineStartColor: "var(--color-accent)" }}
      >
        <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)]">
            {title}
          </span>
          <span
            aria-hidden
            className="text-[var(--color-muted)] text-lg leading-none transition-transform"
          >
            ▾
          </span>
        </summary>
        <div className="mt-4">{list}</div>
      </details>

      {/* Desktop: sticky sidebar */}
      <div
        className="hidden lg:block sticky top-24 card-premium p-5"
        style={{ borderInlineStartWidth: 4, borderInlineStartColor: "var(--color-accent)" }}
      >
        <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
          {title}
        </div>
        <div className="h-px bg-[var(--color-border)] mb-3" />
        {list}
      </div>
    </nav>
  );
}
