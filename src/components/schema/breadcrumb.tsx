import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export type SchemaBreadcrumbItem = {
  /** Visible breadcrumb label. */
  name: string;
  /** Path or absolute URL. Path-relative URLs are absolutized to site.url. */
  url: string;
};

type SchemaBreadcrumbProps = {
  /**
   * Trail items in order, NOT including the implicit "בית" root.
   * The component prepends the homepage automatically.
   */
  items: SchemaBreadcrumbItem[];
};

function absoluteUrl(input: string): string {
  if (input.startsWith("http://") || input.startsWith("https://")) return input;
  return `${site.url}${input.startsWith("/") ? input : `/${input}`}`;
}

/**
 * Canonical BreadcrumbList schema, per technical.md §4.3. Always includes
 * an implicit "בית" root pointing to the homepage as position 1.
 */
export default function SchemaBreadcrumb({ items }: SchemaBreadcrumbProps) {
  const fullItems: SchemaBreadcrumbItem[] = [
    { name: "בית", url: "/" },
    ...items,
  ];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
  return <JsonLd data={data} />;
}

export { SchemaBreadcrumb };
