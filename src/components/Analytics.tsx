"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import ClickTracker from "@/components/ClickTracker";
import { hasAnalyticsConsent, subscribeConsent } from "@/lib/consent";

/**
 * Google Analytics 4 - consent-gated root injection.
 *
 * Privacy law (חוק הגנת הפרטיות, תיקון 13) requires non-essential cookies to
 * load only after the user opts in. The gtag scripts are therefore rendered
 * ONLY once analytics consent is granted via the CookieConsent banner. We
 * listen for the `cookie-consent-change` event so loading happens the moment
 * the user clicks "אישור הכל" / approves analytics, with no page reload needed.
 *
 * ClickTracker is always mounted; its `track()` calls are silent no-ops while
 * gtag is absent, so it never fires events before consent.
 *
 * Place this once in the root layout, after {children}.
 */
export default function Analytics() {
  // Read analytics consent from the external store (localStorage + consent
  // event). Server snapshot is always `false` so gtag never renders before
  // the client confirms consent.
  const enabled = useSyncExternalStore(
    subscribeConsent,
    hasAnalyticsConsent,
    () => false,
  );

  return (
    <>
      {enabled && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}
      <ClickTracker />
    </>
  );
}
