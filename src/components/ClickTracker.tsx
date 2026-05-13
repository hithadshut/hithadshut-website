"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * ClickTracker - global delegated click tracking for outbound contact links.
 *
 * Listens at the document level and fires GA4 events when the user activates:
 *   - any tel: link → phone_click
 *   - any wa.me / whatsapp.com link → whatsapp_click
 *   - any mailto: link → email_click (fired as cta_click with channel=email)
 *
 * Avoids per-component instrumentation. New phone/whatsapp links anywhere on
 * the site are tracked automatically.
 *
 * Server-side renders nothing. Client-only effect attaches/detaches listener.
 */
export default function ClickTracker() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as Element | null;
      if (!target) return;
      const a = target.closest("a") as HTMLAnchorElement | null;
      if (!a || !a.href) return;
      const href = a.href;
      if (href.startsWith("tel:")) {
        track("phone_click", {
          number: href.replace(/^tel:/, ""),
          location: a.dataset.gaLocation ?? a.closest("[data-ga-section]")?.getAttribute("data-ga-section") ?? "unknown",
        });
        return;
      }
      if (/wa\.me|whatsapp\.com/.test(href)) {
        track("whatsapp_click", {
          location: a.dataset.gaLocation ?? a.closest("[data-ga-section]")?.getAttribute("data-ga-section") ?? "unknown",
        });
        return;
      }
      if (href.startsWith("mailto:")) {
        track("cta_click", { channel: "email" });
        return;
      }
    }
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
