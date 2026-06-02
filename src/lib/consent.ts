/**
 * Cookie-consent state - single source of truth for the consent banner and
 * the analytics loader.
 *
 * Privacy law (חוק הגנת הפרטיות, תיקון 13) requires that non-essential
 * cookies (e.g. Google Analytics) load ONLY after the user actively opts in.
 * The banner writes the user's choice here; `Analytics` reads it and only
 * injects gtag once analytics consent is granted.
 *
 * Storage: a single JSON record in localStorage under `cookie-consent`.
 * A `cookie-consent-change` window event fires on every change so listeners
 * (the analytics loader) can react without a full page reload.
 */

export const CONSENT_STORAGE_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-change";

export interface ConsentState {
  /** Essential cookies are always on and cannot be disabled. */
  necessary: true;
  /** Analytics / performance cookies (Google Analytics). */
  analytics: boolean;
  /** Marketing cookies. Reserved (no marketing tags ship today). */
  marketing: boolean;
  /** ISO timestamp of when the choice was recorded. */
  ts: string;
}

/** Read the stored consent, or `null` if the user has not chosen yet. */
export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      necessary: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      ts: typeof parsed.ts === "string" ? parsed.ts : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

/** Persist a consent choice and notify listeners in the same tab. */
export function setConsent(choice: { analytics: boolean; marketing: boolean }): void {
  if (typeof window === "undefined") return;
  const state: ConsentState = {
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    ts: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage may be unavailable (private mode quota); fail silently */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}

/** True only if the user has actively granted analytics consent. */
export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics === true;
}

/** True once the user has made any consent choice (banner dismissed). */
export function hasChosenConsent(): boolean {
  return getConsent() !== null;
}

/**
 * Subscribe to consent changes for `useSyncExternalStore`. Fires for both
 * same-tab updates (CONSENT_EVENT) and other-tab updates (storage event).
 * Returns an unsubscribe function.
 */
export function subscribeConsent(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === CONSENT_STORAGE_KEY) callback();
  };
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}
