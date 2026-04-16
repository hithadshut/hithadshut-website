import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "התחדשות בינוי ויזמות | בניית ממ\"ד, מיגון ומיגוניות";
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
          padding: "68px 80px",
          background:
            "linear-gradient(135deg, #0A1628 0%, #0D2137 50%, #14304F 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: "#C8A97E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 900,
              color: "#0A1628",
            }}
          >
            ה
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.02em" }}>התחדשות</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#C8A97E", letterSpacing: "0.25em" }}>
              בינוי ויזמות
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 18,
              color: "#C8A97E",
              fontWeight: 800,
              marginBottom: 14,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            חברת בנייה מובילה · כל הארץ
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.05,
              maxWidth: 960,
              letterSpacing: "-0.02em",
            }}
          >
            בניית ממ״ד ומיגון הבית, מהתכנון ועד המפתח
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 900,
            }}
          >
            ממ״דים · מיגון חדרים · מיגוניות · בנייה פרטית · שיפוצים
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.78)",
            borderTop: "1px solid rgba(200,169,126,0.3)",
            paddingTop: 22,
          }}
        >
          <div style={{ fontWeight: 700 }}>hithadshut.co.il</div>
          <div style={{ fontWeight: 800, color: "#C8A97E" }}>054-671-2130</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
