import type { MetadataRoute } from "next";

/**
 * PWA manifest.
 *
 * Replaces the previous static `public/manifest.webmanifest`. Generated
 * dynamically so the icon list always tracks the canonical PNG pack in
 * /public — adding or removing an icon size only requires editing this
 * file (and `metadata.icons` in layout.tsx).
 *
 * The manifest is referenced from layout.tsx via `metadata.manifest =
 * "/manifest.webmanifest"`. Next.js routes that path to this generator.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "התחדשות בינוי ויזמות",
    short_name: "התחדשות",
    description:
      "חברת בנייה לממ״דים, מיגון, בנייה פרטית ושיפוצים, ומלווה דיירים בהתחדשות עירונית.",
    lang: "he",
    dir: "rtl",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0A1628",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-180.png", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
