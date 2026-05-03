import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

type SchemaArticleProps = {
  /** Page H1 (becomes Article.headline). */
  headline: string;
  /** Page meta description (becomes Article.description). */
  description: string;
  /** Page canonical URL (path or absolute; absolute is emitted in schema). */
  canonical: string;
  /** ISO 8601 publish date (e.g. "2026-05-03T00:00:00+03:00"). */
  datePublished: string;
  /** ISO 8601 last-modified date. */
  dateModified: string;
  /**
   * ISO 8601 last-reviewed date — emerging 2026 signal weighted by
   * ChatGPT and Perplexity for content recency. Defaults to dateModified
   * if omitted; bumped independently during quarterly content refresh
   * passes when the body itself didn't change.
   */
  lastReviewedDate?: string;
  /** Optional hero image URL (path or absolute). */
  imageUrl?: string;
};

function absoluteUrl(input: string): string {
  if (input.startsWith("http://") || input.startsWith("https://")) return input;
  return `${site.url}${input.startsWith("/") ? input : `/${input}`}`;
}

/**
 * Canonical Article schema, per technical.md §4.1. Author is always Ofek
 * Mazor (anchored to the Person node on /about/ofek-mazor). Publisher is
 * the legal entity defined in lib/site.ts.
 */
export default function SchemaArticle({
  headline,
  description,
  canonical,
  datePublished,
  dateModified,
  lastReviewedDate,
  imageUrl,
}: SchemaArticleProps) {
  const reviewed = lastReviewedDate ?? dateModified;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    lastReviewedDate: reviewed,
    ...(imageUrl ? { image: absoluteUrl(imageUrl) } : {}),
    author: {
      "@type": "Person",
      "@id": `${site.url}/about/ofek-mazor#person`,
      name: "אופק מזור",
      jobTitle: 'מנכ"ל ומייסד, התחדשות בינוי ויזמות',
      url: `${site.url}/about/ofek-mazor`,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(canonical),
    },
  };
  return <JsonLd data={data} />;
}

export { SchemaArticle };
