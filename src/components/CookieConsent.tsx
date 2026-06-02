"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { hasChosenConsent, setConsent, subscribeConsent } from "@/lib/consent";

/**
 * Cookie-consent banner - required for legal compliance (חוק הגנת הפרטיות,
 * תיקון 13). Appears on first visit, disappears once the user chooses, and
 * remembers the choice in localStorage (key: `cookie-consent`).
 *
 * Three actions: accept all / necessary only / settings (per-category).
 * Analytics cookies (Google Analytics) load ONLY after consent is granted.
 * See `Analytics` and `lib/consent`. The banner is keyboard-operable and
 * non-modal, so it never traps focus or blocks the page.
 */
export default function CookieConsent() {
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  // Show the banner only until the user makes a choice. The server snapshot
  // is `true` (already-chosen) so nothing renders during SSR/first paint,
  // avoiding a hydration mismatch and a flash before localStorage is read.
  const chosen = useSyncExternalStore(
    subscribeConsent,
    hasChosenConsent,
    () => true,
  );

  if (chosen) return null;

  function choose(opts: { analytics: boolean; marketing: boolean }) {
    // setConsent dispatches the consent event; the store update hides the
    // banner and lets Analytics react.
    setConsent(opts);
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="no-print fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-4 sm:pb-4"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-deep)] p-5 sm:p-6">
        <h2
          id="cookie-consent-title"
          className="text-lg font-extrabold text-[var(--color-primary)] mb-2"
        >
          שימוש בעוגיות
        </h2>
        <p
          id="cookie-consent-desc"
          className="text-[15px] leading-7 text-[var(--color-muted)]"
        >
          אתר זה משתמש בעוגיות הכרחיות לתפעולו, ובעוגיות ניתוח (כגון Google
          Analytics) לשיפור חוויית הגלישה. עוגיות שאינן הכרחיות ייטמעו רק
          באישורכם. למידע נוסף ראו{" "}
          <Link
            href="/privacy"
            className="font-bold text-[var(--color-primary)] underline underline-offset-2"
          >
            מדיניות הפרטיות
          </Link>
          .
        </p>

        {showSettings && (
          <fieldset className="mt-4 space-y-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-soft)] p-4">
            <legend className="px-1 text-sm font-bold text-[var(--color-primary)]">
              הגדרות עוגיות
            </legend>

            <label className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]">
              <input
                type="checkbox"
                checked
                disabled
                aria-label="עוגיות הכרחיות (תמיד פעילות)"
                className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-primary)]"
              />
              <span>
                <span className="font-bold">עוגיות הכרחיות</span>: חיוניות
                לתפעול האתר ולאבטחתו. תמיד פעילות, לא ניתן לבטלן.
              </span>
            </label>

            <label className="flex items-start gap-3 text-[15px] text-[var(--color-ink)]">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-primary)]"
              />
              <span>
                <span className="font-bold">עוגיות ניתוח</span>: מדידת תנועה
                ושיפור האתר באמצעות Google Analytics.
              </span>
            </label>
          </fieldset>
        )}

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="button"
            onClick={() => choose({ analytics: true, marketing: false })}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-primary)] font-extrabold px-5 py-3 transition"
          >
            אישור הכל
          </button>

          {showSettings ? (
            <button
              type="button"
              onClick={() => choose({ analytics, marketing: false })}
              className="inline-flex items-center justify-center rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold px-5 py-3 hover:bg-[var(--color-primary)]/5 transition"
            >
              שמירת הבחירה
            </button>
          ) : (
            <button
              type="button"
              onClick={() => choose({ analytics: false, marketing: false })}
              className="inline-flex items-center justify-center rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold px-5 py-3 hover:bg-[var(--color-primary)]/5 transition"
            >
              עוגיות הכרחיות בלבד
            </button>
          )}

          <button
            type="button"
            onClick={() => setShowSettings((v) => !v)}
            aria-expanded={showSettings}
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-bold text-[var(--color-muted)] hover:text-[var(--color-primary)] underline underline-offset-2 transition sm:ms-auto"
          >
            {showSettings ? "סגירת ההגדרות" : "הגדרות"}
          </button>
        </div>
      </div>
    </div>
  );
}
