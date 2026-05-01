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
    default: `בניית ממ״ד | התחדשות בינוי ויזמות | מיגון חדרים ומיגוניות`,
    template: `%s`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "בניית ממ\"ד",
    "מחיר ממ\"ד",
    "מיגון חדר קיים",
    "מיגונית",
    "ממ\"ד מוכן",
    "יחידה ממוגנת",
    "אישורי פיקוד העורף",
    "קבלן ממ\"ד",
    "חברת בנייה",
    "בנייה פרטית",
    "שיפוצים",
    "הרחבות בנייה",
    "התחדשות בינוי ויזמות",
  ],
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
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  // Icons are auto-emitted by Next.js file conventions:
  //   src/app/favicon.ico  → <link rel="icon" href="/favicon.ico">
  //   src/app/icon.svg     → <link rel="icon" href="/icon.svg" type="image/svg+xml">
  //   src/app/apple-icon.tsx → <link rel="apple-touch-icon" ...>
  // Do not also set metadata.icons or links will duplicate.
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
