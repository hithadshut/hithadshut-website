"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const STORAGE_KEY = "hithadshut_exit_shown_v1";

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 1024px)").matches) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {}

    let shown = false;
    const onMouseOut = (e: MouseEvent) => {
      if (shown) return;
      if (e.relatedTarget) return;
      if (e.clientY > 10) return;
      shown = true;
      setOpen(true);
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    };
    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 no-print"
    >
      <button
        type="button"
        aria-label="סגירה"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-[var(--color-primary)]/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-[var(--shadow-deep)] overflow-hidden border border-[var(--color-border)]">
        <div className="bg-dark-section text-white px-8 py-6 relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 grid-pattern opacity-25" />
          <div className="relative">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)] mb-2">
              רגע לפני שעוזבים
            </div>
            <h2 id="exit-title" className="text-2xl md:text-3xl font-black leading-tight">
              השאירו פרטים ונחזור אליכם עם הצעה מותאמת
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="סגירה"
            className="absolute top-4 end-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="p-8">
          <p className="text-[var(--color-muted)] leading-relaxed">
            חברת התחדשות בינוי ויזמות. ייעוץ ראשוני ללא עלות וללא התחייבות.
            מסבירים לכם בדיוק איך בונים ממ״ד, מה העלויות, ומה ניתן לעשות בבית שלכם.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-primary)] font-extrabold px-6 py-4 shadow-[var(--shadow-cta)]"
            >
              לקבלת הצעת מחיר ←
            </Link>
            <a
              href={`tel:${site.phoneDial}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold px-6 py-4 hover:bg-[var(--color-primary)] hover:text-white transition"
            >
              📞 {site.phone}
            </a>
          </div>
          <div className="mt-4 text-xs text-[var(--color-muted-2)] text-center">
            אתם לא מתחייבים לכלום בשיחה הראשונה.
          </div>
        </div>
      </div>
    </div>
  );
}
