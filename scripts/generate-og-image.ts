/**
 * Generates the static OG image once and writes it to /public/og-image.jpg
 * (and /public/twitter-image.jpg).
 *
 * Run locally where Hebrew system fonts exist:
 *   npx tsx scripts/generate-og-image.ts
 *
 * The output JPGs are committed to the repo so Vercel does NOT need to
 * re-render at deploy time — this avoids Satori/edge-runtime missing-font
 * issues that broke the previous dynamic /opengraph-image route.
 */
import sharp from "sharp";
import { writeFileSync } from "fs";
import path from "path";

// SVG layout notes: librsvg (used by sharp) has limited Hebrew RTL support.
// Strategy: text-anchor="end" puts the END of the rendered run at x. With
// Hebrew, that visually places the text's RIGHT edge at x. We anchor all
// Hebrew text to x=1020 (60px clear of the accent bar at x=1080) and leave
// the left half clean for breathing room. The shield logo sits to the LEFT
// of the title, not on top of it.
const SVG_TEMPLATE = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset="0.6" stop-color="#F8FAFC"/>
      <stop offset="1" stop-color="#E2E8F0"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="0" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1E3A5F"/>
      <stop offset="1" stop-color="#0A1628"/>
    </linearGradient>
    <linearGradient id="goldStripe" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#C8A97E"/>
      <stop offset="1" stop-color="#A88A5E"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Right accent bar (visual weight on the right for RTL feel) -->
  <rect x="1080" y="0" width="120" height="630" fill="url(#accent)"/>

  <!-- Thin gold accent line just left of the bar -->
  <rect x="1072" y="0" width="4" height="630" fill="url(#goldStripe)"/>

  <!-- Decorative dots on the far left -->
  <g fill="#1E3A5F" opacity="0.08">
    <circle cx="100" cy="140" r="65"/>
    <circle cx="200" cy="320" r="45"/>
    <circle cx="70" cy="490" r="55"/>
  </g>

  <!-- Brand mark (shield) — top-right, clear of body text -->
  <g transform="translate(940, 80)">
    <path d="M60 0 L120 25 L120 75 Q120 130 60 165 Q0 130 0 75 L0 25 Z" fill="#1E3A5F" opacity="0.12"/>
    <path d="M60 18 L102 36 L102 76 Q102 118 60 142 Q18 118 18 76 L18 36 Z" fill="#1E3A5F"/>
    <text x="60" y="92" font-family="Arial, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">&#1502;&#1502;&#34;&#1491;</text>
  </g>

  <!-- Hero title — large, anchored to right edge of content area -->
  <text x="1020" y="320" font-family="Arial, sans-serif" font-size="96" font-weight="900" fill="#0A1628" text-anchor="end">&#1492;&#1514;&#1495;&#1491;&#1513;&#1493;&#1514;</text>

  <!-- Subtitle -->
  <text x="1020" y="378" font-family="Arial, sans-serif" font-size="34" font-weight="500" fill="#1E3A5F" text-anchor="end">&#1489;&#1504;&#1497;&#1497;&#1492; &#1500;&#1502;&#1502;&#34;&#1491;&#1497;&#1501; &#1493;&#1492;&#1514;&#1495;&#1491;&#1513;&#1493;&#1514; &#1506;&#1497;&#1512;&#1493;&#1504;&#1497;&#1514;</text>

  <!-- Three trust bullets -->
  <g font-family="Arial, sans-serif" fill="#475569" font-weight="600" font-size="26">
    <text x="1020" y="455" text-anchor="end">&#10003; &#1488;&#1497;&#1513;&#1493;&#1512; &#1508;&#1497;&#1511;&#1493;&#1491; &#1492;&#1506;&#1493;&#1512;&#1507;</text>
    <text x="1020" y="495" text-anchor="end">&#10003; &#1514;&#1499;&#1504;&#1493;&#1503; &#1493;&#1489;&#1497;&#1510;&#1493;&#1506; &#1514;&#1495;&#1514; &#1495;&#1493;&#1494;&#1492; &#1488;&#1495;&#1491;</text>
    <text x="1020" y="535" text-anchor="end">&#10003; &#1488;&#1493;&#1508;&#1511; &#1502;&#1494;&#1493;&#1512; &#183; &#1495;&#1489;&#1512;&#1514; &#1489;&#1504;&#1497;&#1497;&#1492; &#1512;&#1513;&#1493;&#1502;&#1492;</text>
  </g>

  <!-- URL bar -->
  <text x="1020" y="595" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#0A1628" text-anchor="end">hithadshut.co.il</text>
</svg>
`;

async function main() {
  const publicDir = path.join(process.cwd(), "public");
  const ogPath = path.join(publicDir, "og-image.jpg");
  const twitterPath = path.join(publicDir, "twitter-image.jpg");

  // Also write the SVG source for reference / future edits.
  const svgPath = path.join(publicDir, "og-image.svg");
  writeFileSync(svgPath, SVG_TEMPLATE, "utf8");

  await sharp(Buffer.from(SVG_TEMPLATE))
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(ogPath);
  console.log(`OK  ${ogPath}`);

  await sharp(Buffer.from(SVG_TEMPLATE))
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(twitterPath);
  console.log(`OK  ${twitterPath}`);

  console.log(`OK  ${svgPath}`);
}

main().catch((err) => {
  console.error("Error generating OG image:", err);
  process.exit(1);
});
