"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ToggleKey =
  | "largeText"
  | "highContrast"
  | "highlightLinks"
  | "readableFont"
  | "noMotion"
  | "bigCursor";

type ToggleDef = {
  key: ToggleKey;
  label: string;
  className: string;
  target: "html" | "body";
};

const TOGGLES: ToggleDef[] = [
  { key: "largeText", label: "הגדלת טקסט", className: "a11y-large-text", target: "html" },
  { key: "highContrast", label: "ניגודיות גבוהה", className: "a11y-high-contrast", target: "body" },
  { key: "highlightLinks", label: "הדגשת קישורים", className: "a11y-highlight-links", target: "body" },
  { key: "readableFont", label: "גופן קריא", className: "a11y-readable-font", target: "body" },
  { key: "noMotion", label: "עצירת אנימציות", className: "a11y-no-motion", target: "body" },
  { key: "bigCursor", label: "סמן מוגדל", className: "a11y-big-cursor", target: "body" },
];

type State = Record<ToggleKey, boolean>;

const INITIAL_STATE: State = {
  largeText: false,
  highContrast: false,
  highlightLinks: false,
  readableFont: false,
  noMotion: false,
  bigCursor: false,
};

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>(INITIAL_STATE);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const applyClass = useCallback((def: ToggleDef, enabled: boolean) => {
    const el = def.target === "html" ? document.documentElement : document.body;
    el.classList.toggle(def.className, enabled);
  }, []);

  const toggle = (key: ToggleKey) => {
    setState((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      const def = TOGGLES.find((t) => t.key === key)!;
      applyClass(def, next[key]);
      return next;
    });
  };

  const reset = () => {
    TOGGLES.forEach((def) => applyClass(def, false));
    setState(INITIAL_STATE);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="תפריט נגישות"
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-5 end-5 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1B365D] text-white shadow-[0_8px_24px_rgba(10,22,40,0.35)] hover:scale-105 hover:shadow-[0_12px_32px_rgba(10,22,40,0.5)] transition-all flex items-center justify-center no-print"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="4" r="2" fill="currentColor" />
          <path d="M4 8h16" />
          <path d="M12 8v5" />
          <path d="M12 13l-3 8" />
          <path d="M12 13l3 8" />
        </svg>
      </button>

      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-label="הגדרות נגישות"
          className="fixed bottom-20 end-5 md:bottom-24 z-50 w-[300px] max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl shadow-[0_20px_60px_rgba(10,22,40,0.28)] border border-[var(--color-border)] p-5 no-print"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-extrabold text-[var(--color-primary)]">
              הגדרות נגישות
            </h2>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                buttonRef.current?.focus();
              }}
              aria-label="סגור"
              className="w-8 h-8 rounded-full hover:bg-[var(--color-soft)] flex items-center justify-center text-[var(--color-ink)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {TOGGLES.map((t) => {
              const pressed = state[t.key];
              return (
                <button
                  key={t.key}
                  type="button"
                  role="switch"
                  aria-checked={pressed}
                  onClick={() => toggle(t.key)}
                  className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-sm font-bold transition ${
                    pressed
                      ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                      : "bg-white text-[var(--color-ink)] border-[var(--color-border)] hover:border-[var(--color-primary)]"
                  }`}
                >
                  <span>{t.label}</span>
                  <span
                    aria-hidden
                    className={`inline-flex w-9 h-5 rounded-full border items-center px-0.5 transition ${
                      pressed
                        ? "bg-[var(--color-accent)] border-[var(--color-accent)] justify-end"
                        : "bg-[var(--color-soft)] border-[var(--color-border)] justify-start"
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white shadow" />
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-4 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-soft)] px-4 py-2.5 text-sm font-extrabold text-[var(--color-primary)] hover:bg-[var(--color-soft-2)] transition"
          >
            איפוס
          </button>
        </div>
      )}
    </>
  );
}
