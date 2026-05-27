import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  // Canonical URL shape: no trailing slash, no www subdomain.
  // Pairs with the host-based redirect below to give Google a single canonical
  // URL per page and resolve GSC "duplicate without canonical" / "redirected".
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // No remote domains needed — all images are local (/public).
    // Allow next/image to serve SVGs from /public/projects/. The SVGs are
    // brand-built (no scripts) and the CSP below forbids any script
    // execution within served images — defense in depth against future
    // SVG additions.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // www → apex redirect moved to src/middleware.ts (single-hop 301 for
      // all non-canonical variants: http, www, http+www).
      // Migunit cleanup (Day 3): מיגונית is not a private-home solution per
      // CLAUDE.md hard rule #2. The /services/migunit page and all
      // /areas/:city/migunit doorway permutations are removed; existing
      // crawled URLs collapse to the closest legitimate service or guide.
      {
        source: "/services/migunit",
        destination: "/services/room-reinforcement",
        permanent: true,
      },
      {
        source: "/areas/:city/migunit",
        destination: "/areas/:city/room-reinforcement",
        permanent: true,
      },
      {
        source: "/compare/migunit-vs-mamad-muchan",
        destination: "/guides/home-front-command-approval",
        permanent: true,
      },
      // Author page collapsed into /about. permanent:true emits 308; Google
      // treats 308 equivalently to 301 for canonical signal-passing. Both
      // trailing-slash and non-trailing variants resolve to /about so the
      // surface in GSC moves cleanly to "alternate page with proper
      // canonical/redirect" without losing equity.
      {
        source: "/about/ofek-mazor",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about/ofek-mazor/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
      // Manifest and Next-emitted icon endpoints are crawled by Googlebot
      // but should not be considered for the web index. GSC flagged them
      // as "Crawled, currently not indexed" in May 2026; explicit
      // X-Robots-Tag confirms intent and removes the surface from index
      // pipelines, while leaving the resources fetchable for PWA install
      // and favicon rendering.
      {
        source: "/manifest.webmanifest",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/icon",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/apple-icon",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
