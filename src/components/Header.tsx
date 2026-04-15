"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import CTAButton from "./CTAButton";
import { services, guides, compare, site } from "@/lib/site";

const nav = [
  { href: "/", label: "בית" },
  {
    href: "#services",
    label: "שירותים",
    children: services.map((s) => ({
      href: `/services/${s.slug}`,
      label: s.shortTitle,
    })),
  },
  {
    href: "#guides",
    label: "מדריכים",
    children: guides.map((g) => ({
      href: `/guides/${g.slug}`,
      label: g.short,
    })),
  },
  { href: `/compare/${compare.slug}`, label: "השוואה" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[var(--color-border)] no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="דף הבית — התחדשות">
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center gap-7" aria-label="ניווט ראשי">
            {nav.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="text-[15px] font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition"
                    >
                      {item.label}
                      <span aria-hidden className="ms-1 text-xs">▾</span>
                    </button>
                    <div className="absolute end-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[var(--color-border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition p-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-3 py-2 rounded-lg text-sm text-[var(--color-ink)] hover:bg-[var(--color-soft)] hover:text-[var(--color-primary)]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[15px] font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneDial}`}
              className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              aria-label={`התקשרו אלינו — ${site.phone}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.5 11.5 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.57 3.6 1 1 0 01-.25 1l-2.22 2.2z"/></svg>
              {site.phone}
            </a>
            <CTAButton href="/contact" size="md" className="hidden md:inline-flex">
              השאירו פרטים
            </CTAButton>
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg border border-[var(--color-border)]"
              onClick={() => setOpen((v) => !v)}
              aria-label="תפריט"
              aria-expanded={open}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
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
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {nav.map((item) =>
              item.children ? (
                <details key={item.label} className="group">
                  <summary className="flex items-center justify-between py-2 font-bold cursor-pointer list-none">
                    {item.label}
                    <span className="text-xs faq-chevron">▾</span>
                  </summary>
                  <div className="ps-3 pb-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-semibold"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex gap-2 pt-2">
              <CTAButton href="/contact" size="md" className="flex-1">
                השאירו פרטים
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
