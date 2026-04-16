import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = {
  name?: string;
  phone?: string;
  city?: string;
  service?: string;
  notes?: string;
};

function sanitize(v: unknown, max = 500): string {
  if (typeof v !== "string") return "";
  return v.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, max);
}

function isValidPhone(p: string): boolean {
  const cleaned = p.replace(/[\s-]/g, "");
  return /^0\d{8,9}$/.test(cleaned) || /^\+972\d{8,9}$/.test(cleaned);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// --- In-memory rate limit (per-IP token bucket) -----------------------------
// NOTE: In-memory. On Vercel this is per-lambda-instance, so a determined
// attacker with cold starts can still push through. Good enough as a first
// line of defense against casual abuse; real hardening would use Upstash
// or Vercel KV.
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 submissions / minute / IP

type Bucket = { count: number; windowStart: number };
const buckets = new Map<string, Bucket>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const b = buckets.get(ip);
  if (!b || now - b.windowStart > RATE_LIMIT_WINDOW_MS) {
    buckets.set(ip, { count: 1, windowStart: now });
    return false;
  }
  b.count += 1;
  if (b.count > RATE_LIMIT_MAX) return true;
  return false;
}

// --- HTML email body --------------------------------------------------------
function buildEmailHtml(args: {
  name: string;
  phone: string;
  phoneClean: string;
  city: string;
  service: string;
  notes: string;
  ts: string;
  ip: string;
  userAgent: string;
}): string {
  const { name, phone, phoneClean, city, service, notes, ts, ip, userAgent } = args;
  const rowAlt = "background:#f8f9fa;";
  const rowBase = "padding:10px 14px;border-bottom:1px solid #e5e7eb;vertical-align:top;";
  const labelStyle = `${rowBase}font-weight:700;color:#0A1628;width:130px;`;
  const valueStyle = `${rowBase}color:#1A1A1A;`;
  const tsLocal = new Date(ts).toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" });

  return `<!doctype html>
<html dir="rtl" lang="he">
<head><meta charset="utf-8"><title>ליד חדש מאתר התחדשות</title></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <div dir="rtl" style="max-width:640px;margin:24px auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="background:#0A1628;padding:20px 24px;">
      <div style="color:#C8A97E;font-size:12px;font-weight:700;letter-spacing:1px;">LEAD · HITHADSHUT.CO.IL</div>
      <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;line-height:1.3;">ליד חדש מהאתר: ${escapeHtml(name)}</h1>
      <div style="color:#C8A97E;font-size:13px;margin-top:6px;">${escapeHtml(service || "לא צוין שירות")}${city ? ` · ${escapeHtml(city)}` : ""}</div>
    </div>
    <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;" dir="rtl">
      <tr><td style="${labelStyle}">שם מלא</td><td style="${valueStyle}">${escapeHtml(name)}</td></tr>
      <tr style="${rowAlt}"><td style="${labelStyle}">טלפון</td><td style="${valueStyle}"><a href="tel:${escapeHtml(phoneClean)}" style="color:#0A1628;font-weight:700;text-decoration:none;">${escapeHtml(phone)}</a> &nbsp;·&nbsp; <a href="https://wa.me/972${phoneClean.replace(/^0/, "").replace(/^\+972/, "")}" style="color:#25D366;font-weight:700;text-decoration:none;">WhatsApp</a></td></tr>
      <tr><td style="${labelStyle}">עיר</td><td style="${valueStyle}">${escapeHtml(city || "לא צוין")}</td></tr>
      <tr style="${rowAlt}"><td style="${labelStyle}">סוג שירות</td><td style="${valueStyle}">${escapeHtml(service || "לא צוין")}</td></tr>
      <tr><td style="${labelStyle}">הערות</td><td style="${valueStyle}">${notes ? escapeHtml(notes).replace(/\n/g, "<br>") : "—"}</td></tr>
    </table>
    <div style="padding:14px 24px;background:#f8f9fa;border-top:1px solid #e5e7eb;color:#64748B;font-size:12px;line-height:1.6;">
      <div>זמן שליחה: ${escapeHtml(tsLocal)} (ישראל)</div>
      <div>IP: ${escapeHtml(ip || "—")}</div>
      <div style="word-break:break-all;">User-Agent: ${escapeHtml(userAgent || "—")}</div>
    </div>
  </div>
</body>
</html>`;
}

// --- Main handler -----------------------------------------------------------
export async function POST(req: Request) {
  // Resolve client IP early (also used for rate limit)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = req.headers.get("user-agent") || "";

  if (rateLimited(ip)) {
    console.warn("[LEAD] rate limited", { ip });
    return NextResponse.json(
      { ok: false, error: "rate_limited", message: "יותר מדי בקשות. נסו שוב בעוד דקה." },
      { status: 429 },
    );
  }

  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = sanitize(body.name, 120);
  const phone = sanitize(body.phone, 40);
  const city = sanitize(body.city, 120);
  const service = sanitize(body.service, 120);
  const notes = sanitize(body.notes, 2000);

  if (!name || !phone || !isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "invalid_fields", message: "שם וטלפון ישראלי תקין הם שדות חובה" },
      { status: 400 },
    );
  }

  const ts = new Date().toISOString();
  const phoneClean = phone.replace(/[\s-]/g, "");
  const record = { ts, name, phone, city, service, notes, userAgent, ip };

  // 1) Log to stdout — visible in Vercel function logs
  console.log("[LEAD]", JSON.stringify(record));

  // Delivery tracking — we want to know if at least one channel succeeded
  let emailDelivered = false;
  let webhookDelivered = false;
  const deliveryErrors: string[] = [];

  // 2) Optional webhook forwarder (Zapier / Make / Slack etc.)
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const resp = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (resp.ok) {
        webhookDelivered = true;
      } else {
        const txt = await resp.text().catch(() => "");
        deliveryErrors.push(`webhook_${resp.status}: ${txt.slice(0, 200)}`);
        console.error("[LEAD] webhook failed", resp.status, txt.slice(0, 200));
      }
    } catch (err) {
      deliveryErrors.push(`webhook_exception: ${(err as Error).message}`);
      console.error("[LEAD] webhook exception", err);
    }
  }

  // 3) Email via Resend (primary delivery channel)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || "Hithadshut <onboarding@resend.dev>",
          to: [site.email],
          reply_to: undefined,
          subject: `ליד חדש מהאתר: ${name}${service ? ` · ${service}` : ""}`,
          html: buildEmailHtml({ name, phone, phoneClean, city, service, notes, ts, ip, userAgent }),
          text:
            `ליד חדש מאתר התחדשות\n\n` +
            `שם: ${name}\n` +
            `טלפון: ${phone}\n` +
            `עיר: ${city || "לא צוין"}\n` +
            `שירות: ${service || "לא צוין"}\n\n` +
            `הערות:\n${notes || "—"}\n\n` +
            `זמן: ${ts}\nIP: ${ip}`,
        }),
      });
      if (resp.ok) {
        emailDelivered = true;
      } else {
        const txt = await resp.text().catch(() => "");
        deliveryErrors.push(`resend_${resp.status}: ${txt.slice(0, 400)}`);
        console.error("[LEAD] resend failed", resp.status, txt.slice(0, 400));
      }
    } catch (err) {
      deliveryErrors.push(`resend_exception: ${(err as Error).message}`);
      console.error("[LEAD] resend exception", err);
    }
  } else {
    deliveryErrors.push("resend_no_api_key");
    console.warn("[LEAD] RESEND_API_KEY not set — email not sent");
  }

  // Decide response
  // Success = at least one delivery channel succeeded.
  // If both configured channels failed (or neither is configured), return 500
  // so the client sees the fallback UI and can offer phone/WhatsApp.
  const anyConfigured = Boolean(webhook) || Boolean(resendKey);
  const anyDelivered = webhookDelivered || emailDelivered;

  if (anyConfigured && !anyDelivered) {
    console.error("[LEAD] all delivery channels failed", { deliveryErrors });
    return NextResponse.json(
      {
        ok: false,
        error: "delivery_failed",
        message: "השליחה נכשלה. נסו שוב או חייגו 054-671-2130.",
      },
      { status: 500 },
    );
  }

  // No channel configured at all — still return 200 (log captured the lead)
  // so the operator can recover from Vercel logs. This is the pre-configured
  // state; operator MUST set RESEND_API_KEY in production.
  if (!anyConfigured) {
    console.warn("[LEAD] no delivery channel configured — lead only in logs");
  }

  return NextResponse.json({
    ok: true,
    delivered: { email: emailDelivered, webhook: webhookDelivered },
  });
}

export function GET() {
  return NextResponse.json({ ok: false, error: "method_not_allowed" }, { status: 405 });
}
