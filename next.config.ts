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
      // Force www → apex (non-www). HTTPS upgrade is handled automatically by
      // Vercel's edge so we do not need an http→https rule here.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hithadshut.co.il" }],
        destination: "https://hithadshut.co.il/:path*",
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
