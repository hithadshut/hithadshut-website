import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import ClickTracker from "@/components/ClickTracker";

/**
 * Google Analytics 4 - root injection.
 *
 * Uses next/script with strategy="afterInteractive" so it loads after the
 * page becomes interactive (zero impact on FCP / LCP). The inline init
 * script is also "afterInteractive" so the order is preserved.
 *
 * Place this once in the root layout, after {children}.
 */
export default function Analytics() {
  return (
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
      <ClickTracker />
    </>
  );
}
