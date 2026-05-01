/**
 * GA4 analytics — thin wrapper over `gtag`.
 *
 * The gtag script is injected once at the root layout via next/script.
 * Components call `track(...)` on user actions. If gtag hasn't loaded
 * (script blocked, ad-blocker, ssr) the call is a silent no-op.
 *
 * Measurement ID is hard-coded here because it's a public identifier
 * that already ships in HTML — there's no security benefit to env-vars.
 */

export const GA_MEASUREMENT_ID = "G-90BL1Y9K3C";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent =
  | "phone_click"
  | "whatsapp_click"
  | "lead_form_submit"
  | "lead_form_success"
  | "service_page_view"
  | "guide_page_view"
  | "cta_click";

type EventParams = Record<string, string | number | boolean | undefined>;

/**
 * Fire a GA4 custom event. Safe to call from anywhere — no-ops on the
 * server, no-ops if gtag isn't loaded.
 */
export function track(name: AnalyticsEvent, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  // GA4 expects undefined fields to be stripped, not sent as "undefined".
  const cleanParams: Record<string, string | number | boolean> = {};
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined) cleanParams[k] = v;
  }
  gtag("event", name, cleanParams);
}
