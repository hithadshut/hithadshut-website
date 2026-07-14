import { site } from "./site";

type BreadcrumbItem = { name: string; url: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${site.url}${it.url}`,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "GeneralContractor"],
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    // Disambiguates from the generic "התחדשות עירונית" market term that
    // dominates Israeli urban-renewal SERP. Listing the brand-only short
    // forms helps Google bind queries to this specific entity.
    alternateName: ["התחדשות בינוי", "התחדשות", site.nameEn],
    url: site.url,
    logo: {
      "@type": "ImageObject",
      // The V2 vertical logo. Google's Knowledge Panel + AI Overviews
      // prefer roughly square or slightly tall logos, never wide
      // horizontal banners - Google's own structured-data docs say so.
      // The vertical asset (876×918, near-1:1) renders cleanly in those
      // surfaces; the horizontal Header logo would be cropped or
      // letterboxed.
      url: `${site.url}/logo-full-vertical.png`,
      width: 876,
      height: 918,
      caption: "התחדשות בינוי ויזמות - לוגו",
    },
    image: `${site.url}${site.ogImage}`,
    description: site.description,
    telephone: site.phoneE164,
    email: site.email,
    slogan: site.tagline,
    priceRange: "₪₪₪",
    foundingDate: "2024",
    serviceType: [
      "בניית ממ״ד",
      "מיגון חדר קיים",
      "מיגונית",
      "ממ״ד מוכן",
      "בנייה פרטית",
      "שיפוצים",
      "הרחבות ותוספות בנייה",
      "רכישת דירות, בניינים ומגרשים במסלול ישיר",
    ],
    areaServed: { "@type": "Country", name: "IL" },
    address: { "@type": "PostalAddress", addressCountry: "IL" },
    knowsAbout: [
      "בניית ממ״ד",
      "מיגון חדר קיים",
      "מיגונית",
      "ממ״ד מוכן",
      "אישורי פיקוד העורף",
      "תקן פיקוד העורף 4422",
      "מסלול פטור מהיתר",
      "בדיקות אטימות",
      "בנייה פרטית",
      "שיפוצים",
      "הרחבות ותוספות בנייה",
    ],
    // TODO: populate once client supplies real Google Business Profile,
    // Facebook page, and LinkedIn company URLs. Fabricated or guessed URLs
    // hurt E-E-A-T signals if they 404 or land on the wrong entity.
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: "he-IL",
    publisher: { "@id": `${site.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}${site.ogImage}`,
    description: site.description,
    priceRange: "₪₪₪",
    areaServed: { "@type": "Country", name: "Israel" },
    address: { "@type": "PostalAddress", addressCountry: "IL" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
  };
}

/**
 * Person schema for /about/ofek-mazor. Mirrors only facts already visible
 * on that page: role, company, license number, direct phone. No claims
 * beyond what's rendered (see hard rule: schema must match visible content).
 */
export function ofekPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Person", "RealEstateAgent"],
    "@id": `${site.url}/about/ofek-mazor/#person`,
    name: "אופק מזור",
    jobTitle: "מנכ״ל ומייסד",
    worksFor: { "@id": `${site.url}/#organization` },
    url: `${site.url}/about/ofek-mazor`,
    image: `${site.url}/ofek-mazor.jpg`,
    telephone: "+972546712130",
    email: site.email,
    identifier: {
      "@type": "PropertyValue",
      name: "רישיון תיווך מקרקעין",
      value: "3246290",
    },
    areaServed: { "@type": "Country", name: "IL" },
  };
}

export function ofekImageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${site.url}/about/ofek-mazor/#image`,
    contentUrl: `${site.url}/ofek-mazor.jpg`,
    url: `${site.url}/ofek-mazor.jpg`,
    caption: "אופק מזור, מנכ״ל ומייסד התחדשות בינוי ויזמות",
  };
}

export function serviceJsonLd(params: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    serviceType: params.serviceType ?? params.name,
    description: params.description,
    url: params.url.startsWith("http") ? params.url : `${site.url}${params.url}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Israel" },
  };
}

export type FaqItem = { q: string; a: string };

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd(params: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const now = new Date().toISOString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    inLanguage: "he-IL",
    datePublished: params.datePublished ?? "2026-04-15",
    dateModified: params.dateModified ?? now.slice(0, 10),
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url.startsWith("http") ? params.url : `${site.url}${params.url}`,
    },
    image: `${site.url}${site.ogImage}`,
  };
}

export function howToJsonLd(params: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    inLanguage: "he-IL",
    step: params.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
