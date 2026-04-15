import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "בית", href: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(all.map((c) => ({ name: c.name, url: c.href })))} />
      <nav aria-label="פירורי לחם" className="text-sm text-[var(--color-muted)]">
        <ol className="flex flex-wrap items-center gap-1">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1">
              {i < all.length - 1 ? (
                <Link href={c.href} className="hover:text-[var(--color-primary)]">
                  {c.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-[var(--color-ink)] font-semibold">
                  {c.name}
                </span>
              )}
              {i < all.length - 1 && <span aria-hidden className="mx-1">›</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
