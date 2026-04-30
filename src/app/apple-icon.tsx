import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: 32,
        }}
      >
        <svg
          width="132"
          height="132"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D9BC8C" />
              <stop offset="100%" stopColor="#A8874F" />
            </linearGradient>
          </defs>
          <path
            d="M24 6L40 11.5V23c0 8.8-6.2 16.4-16 19-9.8-2.6-16-10.2-16-19V11.5L24 6z"
            fill="url(#g)"
          />
          <path
            d="M14 28L24 19L34 28"
            stroke="#0A1628"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect x="18" y="28" width="12" height="9" fill="#0A1628" rx="0.5" />
          <rect x="22.2" y="31" width="3.6" height="6" fill="url(#g)" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
