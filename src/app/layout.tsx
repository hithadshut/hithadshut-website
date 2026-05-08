import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import ExitIntentModal from "@/components/ExitIntentModal";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `התחדשות בינוי ויזמות | בניית ממ״ד, מיגון ופינוי בינוי בכל הארץ`,
    template: `%s | התחדשות בינוי ויזמות`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
    languages: {
      "he-IL": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: site.name,
    url: site.url,
    title: `${site.name} בינוי ויזמות | בניית ממ"ד ומיגון`,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: 'התחדשות — חברת בנייה לממ"דים והתחדשות עירונית',
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/twitter-image.jpg"],
  },
  // Belt-and-suspenders: legacy `image_src` link rel that some scrapers
  // (older Bing, some niche aggregators) still read when og:image is missing.
  other: {
    image_src: `${site.url}${site.ogImage}`,
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  // Explicit icon set sourced from the operator-supplied PNG pack in
  // /public. We deliberately do NOT keep `src/app/icon.{tsx,svg}` files
  // in parallel — Next would auto-emit them too and the resulting page
  // would carry duplicate <link rel="icon"> tags pointing at different
  // images, which Google's favicon picker treats as a quality signal
  // problem. Single canonical icon set, declared once, here.
  icons: {
    icon: [
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon-32.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--color-ink)]">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-50 bg-[var(--color-accent)] text-[var(--color-primary)] font-bold px-4 py-2 rounded-lg">
          דלגו לתוכן
        </a>
        <Header />
        <main id="main" className="flex-1 pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <WhatsAppButton />
        <AccessibilityWidget />
        <ExitIntentModal />
        <Analytics />
      </body>
    </html>
  );
}
