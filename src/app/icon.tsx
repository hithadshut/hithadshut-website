import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Brand favicon — 32×32 PNG, generated at build time.
 *
 * Renders the same Hebrew "ה" mark as `app/icon.svg`, in the brand
 * navy + gold. Browsers that prefer PNG (or that don't honor SVG
 * favicons yet) will pick this one.
 *
 * Google's favicon preview in SERP also reads from PNG when available
 * and uses it for the small icon next to the result title.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A1628 0%, #1B365D 100%)",
          color: "#E0C287",
          fontWeight: 900,
          fontFamily: "sans-serif",
          fontSize: 26,
          lineHeight: 1,
          letterSpacing: "-0.04em",
        }}
      >
        ה
      </div>
    ),
    { ...size }
  );
}
