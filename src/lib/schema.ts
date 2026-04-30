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
    alternateName: [site.name, site.nameEn],
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}${site.ogImage}`,
    description: site.description,
    telephone: site.phoneE164,
    email: site.email,
    slogan: site.tagline,
    priceRange: "₪₪₪",
    serviceType: [
      "בניית ממ״ד",
      "מיגון חדר קיים",
      "מיגונית",
      "ממ״ד מוכן",
      "בנייה פרטית",
      "שיפוצים",
      "הרחבות ותוספות בנייה",
    ],
    areaServed: { "@type": "Country", name: "IL" },
    address: { "@type": "PostalAddress", addressCountry: "IL" },
    knowsAbout: [
      "בניית ממ״ד",
      "מיגון חדר קיים",
      "מיגונית",
      "ממ״ד מוכן",
      "אישורי פיקוד העורף",
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
  /** When provided, set Article.author to a Person reference instead of the Organization. */
  authorPersonId?: string;
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
    author: params.authorPersonId
      ? { "@id": params.authorPersonId }
      : { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url.startsWith("http") ? params.url : `${site.url}${params.url}`,
    },
    image: `${site.url}${site.ogImage}`,
  };
}

/** Stable @id for Ofek's Person node — referenced by Article.author across guides. */
export const OFEK_PERSON_ID = `${site.url}/about/ofek-mazor#person`;

/**
 * Person schema for Ofek Mazor — founder & CEO of Hithadshut.
 * Includes the verified Israeli real-estate broker license (#3246290).
 * `sameAs` left empty until Ofek supplies authoritative social URLs (B-030).
 */
export function ofekPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": OFEK_PERSON_ID,
    name: "אופק מזור",
    givenName: "אופק",
    familyName: "מזור",
    jobTitle: "מנכ״ל ומייסד",
    worksFor: { "@id": `${site.url}/#organization` },
    url: `${site.url}/about/ofek-mazor`,
    image: `${site.url}/ofek-mazor.jpg`,
    telephone: site.phoneE164,
    email: site.email,
    knowsLanguage: ["he", "en"],
    knowsAbout: [
      "בניית ממ״ד",
      "מיגון חדר קיים",
      "מיגונית",
      "תקן פיקוד העורף",
      "ניהול פרויקטי בנייה",
      "נדל״ן ושוק מקרקעין בישראל",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "רישיון מתווך מקרקעין מורשה (ישראל)",
        identifier: "3246290",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "משרד המשפטים — רשם המתווכים",
        },
      },
    ],
    sameAs: [],
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
