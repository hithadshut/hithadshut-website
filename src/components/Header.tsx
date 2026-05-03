"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import CTAButton from "./CTAButton";
import { protectionServices, constructionServices, guides, compare, site } from "@/lib/site";

const protectionLinks = protectionServices.map((s) => ({
  href: `/services/${s.slug}`,
  label: s.shortTitle,
}));
const constructionLinks = constructionServices.map((s) => ({
  href: `/services/${s.slug}`,
  label: s.shortTitle,
}));
const guideLinks = guides.map((g) => ({ href: `/guides/${g.slug}`, label: g.short }));

// Urban-renewal pillar nav. Add new sub-pages here as they ship
// (kshishim, yorshim, etc.). Same convention as the
// PINUI_BINUI_HREFS namespace in src/lib/anchors.ts — the nav is the
// other surface that needs explicit registration per page.
const urbanRenewalLinks = [
  { href: "/pinui-binui", label: "פינוי בינוי" },
  { href: "/pinui-binui/temurot", label: "תמורות בפינוי בינוי" },
  { href: "/pinui-binui/chok-67", label: "חוק 67%" },
];

type DropdownKey = "services" | "urban" | "guides";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Which desktop dropdown (if any) is currently open. null = all closed.
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open dropdown on outside click + on Escape.
  // Outside-click uses `click` (not `mousedown`) so a sub-item click
  // inside the panel completes its own navigation BEFORE this handler
  // fires. With mousedown, a cursor that briefly exits the panel
  // bounding box during click resolution could cancel the sub-item
  // navigation — that was the actual bug behind "nav opens but
  // sub-items don't click".
  useEffect(() => {
    if (openDropdown === null) return;
    const onDocClick = (e: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpenDropdown(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdown]);

  function toggleDropdown(key: DropdownKey) {
    setOpenDropdown((cur) => (cur === key ? null : key));
  }

  // Shared classes for the desktop dropdown panel. The panel is
  // structured as: outer absolute container with `pt-3` (padding-top)
  // bridging the visual gap between the trigger button and the visible
  // card. The inner div is the actual rounded card. The padding area
  // is interactive (catches hover + clicks) so the cursor never crosses
  // a "dead zone" between trigger and panel — that dead zone was the
  // root cause of sub-items appearing unclickable in the prior fix.
  // State-driven (click) on top of hover-driven (mouse) — both modes
  // route to the same visible class.
  const panelClass = (isOpen: boolean) =>
    `absolute end-0 top-full pt-3 w-72 transition z-50 ${
      isOpen
        ? "opacity-100 visible"
        : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
    }`;
  const panelInnerClass =
    "bg-white rounded-xl shadow-[var(--shadow-deep)] border border-[var(--color-border)] p-2";

  const triggerClass =
    "inline-flex items-center text-[15px] font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 rounded transition";

  return (
    <header
      className={`sticky top-0 z-40 no-print transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-[var(--color-border)] shadow-sm"
          : "bg-white/80 backdrop-blur border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link href="/" aria-label="דף הבית של התחדשות בינוי ויזמות">
            <Logo size="md" />
          </Link>

          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-8"
            aria-label="ניווט ראשי"
          >
            {/* שירותים */}
            <div className="relative group">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openDropdown === "services"}
                onClick={() => toggleDropdown("services")}
                className={triggerClass}
              >
                שירותים
                <span aria-hidden className="ms-1 text-xs">▾</span>
              </button>
              <div className={panelClass(openDropdown === "services")}>
                <div role="menu" className={panelInnerClass}>
                  <div className="px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)]">מיגון וממ״ד</div>
                  {protectionLinks.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      role="menuitem"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-lg text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-soft)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                  <div className="px-3 pt-3 pb-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-dark)] border-t border-[var(--color-border)] mt-2">בנייה ושיפוצים</div>
                  {constructionLinks.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      role="menuitem"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-lg text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-soft)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* התחדשות עירונית */}
            <div className="relative group">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openDropdown === "urban"}
                onClick={() => toggleDropdown("urban")}
                className={triggerClass}
              >
                התחדשות עירונית
                <span aria-hidden className="ms-1 text-xs">▾</span>
              </button>
              <div className={panelClass(openDropdown === "urban")}>
                <div role="menu" className={panelInnerClass}>
                  {urbanRenewalLinks.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      role="menuitem"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-lg text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-soft)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* מדריכים */}
            <div className="relative group">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={openDropdown === "guides"}
                onClick={() => toggleDropdown("guides")}
                className={triggerClass}
              >
                מדריכים
                <span aria-hidden className="ms-1 text-xs">▾</span>
              </button>
              <div className={panelClass(openDropdown === "guides")}>
                <div role="menu" className={panelInnerClass}>
                  {guideLinks.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      role="menuitem"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-lg text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-soft)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                    >
                      {c.label}
                    </Link>
                  ))}
                  <Link
                    href={`/compare/${compare.slug}`}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-3 py-2 rounded-lg text-sm font-semibold text-[var(--color-accent-dark)] hover:bg-[var(--color-soft)] border-t border-[var(--color-border)] mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  >
                    השוואה: ממ״ד / מיגון / מיגונית
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-[15px] font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)]">אודות</Link>
            <Link href="/contact" className="text-[15px] font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)]">צור קשר</Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneDial}`}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-extrabold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] transition"
              aria-label={`התקשרו אלינו ${site.phone}`}
            >
              <span className="inline-flex w-8 h-8 rounded-full bg-[var(--color-primary)]/5 items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.5 11.5 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.57 3.6 1 1 0 01-.25 1l-2.22 2.2z"/>
                </svg>
              </span>
              {site.phone}
            </a>
            <CTAButton href="/contact" size="md" className="hidden md:inline-flex">
              קבלו הצעת מחיר
            </CTAButton>
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-primary)]"
              onClick={() => setOpen((v) => !v)}
              aria-label="תפריט ניווט"
              aria-expanded={open}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 7h16" strokeLinecap="round" />
                    <path d="M4 12h16" strokeLinecap="round" />
                    <path d="M4 17h16" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1 max-h-[75vh] overflow-y-auto">
            <details className="group">
              <summary className="flex items-center justify-between py-3 font-bold cursor-pointer list-none">
                שירותים: מיגון וממ״ד
                <span className="text-xs faq-chevron">▾</span>
              </summary>
              <div className="ps-3 pb-2">
                {protectionLinks.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]">
                    {c.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-3 font-bold cursor-pointer list-none">
                שירותים: בנייה ושיפוצים
                <span className="text-xs faq-chevron">▾</span>
              </summary>
              <div className="ps-3 pb-2">
                {constructionLinks.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]">
                    {c.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-3 font-bold cursor-pointer list-none">
                התחדשות עירונית
                <span className="text-xs faq-chevron">▾</span>
              </summary>
              <div className="ps-3 pb-2">
                {urbanRenewalLinks.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]">
                    {c.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-3 font-bold cursor-pointer list-none">
                מדריכים
                <span className="text-xs faq-chevron">▾</span>
              </summary>
              <div className="ps-3 pb-2">
                {guideLinks.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]">
                    {c.label}
                  </Link>
                ))}
                <Link href={`/compare/${compare.slug}`} onClick={() => setOpen(false)} className="block py-2 text-sm font-bold text-[var(--color-accent-dark)]">
                  השוואה: ממ״ד / מיגון / מיגונית
                </Link>
              </div>
            </details>
            <Link href="/about" onClick={() => setOpen(false)} className="block py-3 font-bold">אודות</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block py-3 font-bold">צור קשר</Link>
            <div className="flex gap-2 pt-3">
              <CTAButton href="/contact" size="md" className="flex-1">
                קבלו הצעה
              </CTAButton>
              <CTAButton href={`tel:${site.phoneDial}`} variant="secondary" size="md" className="flex-1">
                התקשרו
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
