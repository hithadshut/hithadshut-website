import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "התחדשות — בניית ממ\"ד, מיגון חדר קיים ומיגונית";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #0F2547 0%, #1B365D 55%, #1B365D 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#E8A838",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 900,
              color: "#0F2547",
            }}
          >
            ה
          </div>
          <div style={{ fontSize: 36, fontWeight: 800 }}>התחדשות</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 20, color: "#E8A838", fontWeight: 700, marginBottom: 12 }}>
            ליווי מקצועי • כל הארץ
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            בניית ממ״ד ומיגון הבית — מהתכנון ועד המפתח
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 900,
            }}
          >
            אנחנו לא הקבלן ולא המשווק. אנחנו הצד המקצועי שלכם.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <div>hithadshut.co.il</div>
          <div>054-671-2130</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
