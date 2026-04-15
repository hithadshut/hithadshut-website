import type { Metadata } from "next";
import { site } from "./site";

type BuildMeta = {
  title: string;
  description: string;
  path: string; // e.g. "/services/building-mamad"
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: BuildMeta): Metadata {
  const url = `${site.url}${path}`;
  const image = ogImage ?? site.ogImage;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "he_IL",
      url,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
