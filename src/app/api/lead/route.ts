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

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const name = sanitize(body.name, 120);
  const phone = sanitize(body.phone, 40);
  const city = sanitize(body.city, 120);
  const service = sanitize(body.service, 120);
  const notes = sanitize(body.notes, 2000);

  if (!name || !phone || !isValidPhone(phone)) {
    return NextResponse.json({ ok: false, error: "missing or invalid fields" }, { status: 400 });
  }

  const ts = new Date().toISOString();
  const userAgent = req.headers.get("user-agent") || "";
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";

  const record = { ts, name, phone, city, service, notes, userAgent, ip };

  // 1) Log to stdout - shows in Vercel logs
  console.log("[LEAD]", JSON.stringify(record));

  // 2) Optional: forward to Formspree-like endpoint via LEAD_WEBHOOK_URL env var
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (err) {
      console.error("[LEAD] webhook failed", err);
    }
  }

  // 3) Optional: send email via Resend if RESEND_API_KEY is configured
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || "Hithadshut <leads@hithadshut.co.il>",
          to: [site.email],
          subject: `ליד חדש מהאתר מאת ${name}`,
          text: `שם: ${name}\nטלפון: ${phone}\nעיר: ${city}\nשירות: ${service}\n\nהערות:\n${notes}\n\nזמן: ${ts}\nIP: ${ip}`,
        }),
      });
    } catch (err) {
      console.error("[LEAD] email failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: false, error: "method not allowed" }, { status: 405 });
}
