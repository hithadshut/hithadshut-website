"use client";

import { useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const URBAN_RENEWAL_OPTION_VALUE = "פינוי בינוי / התחדשות עירונית";

export default function ContactForm({
  defaultService,
  prioritizeUrbanRenewal = false,
}: {
  defaultService?: string;
  /**
   * When true, render the "פינוי בינוי / התחדשות עירונית" service option
   * before the standard services list. Default false (memad pages).
   * Pages under /pinui-binui pass true so urban-renewal leads see the
   * matching option immediately.
   */
  prioritizeUrbanRenewal?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) {
      setStatus("success");
      return;
    }
    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      city: String(fd.get("city") || "").trim(),
      service: String(fd.get("service") || "").trim(),
      notes: String(fd.get("notes") || "").trim(),
    };
    if (!payload.name || !payload.phone) {
      setStatus("error");
      setErrorMsg("נא למלא שם וטלפון");
      return;
    }
    if (!/^0\d{1,2}-?\d{7}$|^0\d{8,9}$|^\+972\d{8,9}$/.test(payload.phone.replace(/\s/g, ""))) {
      setStatus("error");
      setErrorMsg("נא להזין מספר טלפון ישראלי תקין");
      return;
    }
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "send failed");
      }
      // GA4 lead events (no-op if gtag not loaded)
      if (typeof window !== "undefined") {
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (typeof w.gtag === "function") {
          // Custom event matching the operator's analytics taxonomy.
          w.gtag("event", "lead_form_submit", {
            service: payload.service || "general",
            city: payload.city || "unknown",
          });
          // GA4-recommended event for lead conversion tracking.
          w.gtag("event", "generate_lead", {
            event_category: "contact_form",
            event_label: payload.service || "general",
            value: 1,
          });
        }
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      const msg = err instanceof Error && err.message && err.message !== "send failed" ? err.message : null;
      setErrorMsg(msg || "משהו השתבש. אפשר להתקשר ישירות: 054-671-2130");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[var(--color-success)]/30 bg-[var(--color-success)]/5 p-8 text-center">
        <div className="inline-flex w-14 h-14 rounded-full bg-[var(--color-success)] text-white items-center justify-center mb-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-extrabold text-xl text-[var(--color-ink)] mb-1">הפרטים התקבלו, תודה</h3>
        <p className="text-[var(--color-muted)] text-sm">
          נחזור אליכם בהקדם. לפנייה דחופה: 054-671-2130.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition";

  const hasError = status === "error";

  return (
    <form onSubmit={onSubmit} className="grid gap-3" noValidate aria-describedby={hasError ? "cf-error" : undefined}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div>
        <label htmlFor="cf-name" className="block text-sm font-bold mb-1.5">שם מלא *</label>
        <input id="cf-name" name="name" required autoComplete="name" aria-invalid={hasError || undefined} aria-describedby={hasError ? "cf-error" : undefined} className={inputCls} placeholder="ישראל ישראלי" />
      </div>

      <div>
        <label htmlFor="cf-phone" className="block text-sm font-bold mb-1.5">טלפון *</label>
        <input
          id="cf-phone"
          name="phone"
          required
          type="tel"
          inputMode="numeric"
          dir="ltr"
          autoComplete="tel"
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? "cf-error" : undefined}
          className={`${inputCls} text-start`}
          placeholder="050-0000000"
        />
      </div>

      <div>
        <label htmlFor="cf-city" className="block text-sm font-bold mb-1.5">עיר</label>
        <input id="cf-city" name="city" autoComplete="address-level2" className={inputCls} placeholder="למשל: פתח תקווה" />
      </div>

      <div>
        <label htmlFor="cf-service" className="block text-sm font-bold mb-1.5">סוג שירות</label>
        <select
          id="cf-service"
          name="service"
          defaultValue={defaultService ?? ""}
          className={`${inputCls} bg-white`}
        >
          <option value="">בחרו סוג שירות</option>
          {prioritizeUrbanRenewal && (
            <option value={URBAN_RENEWAL_OPTION_VALUE}>{URBAN_RENEWAL_OPTION_VALUE}</option>
          )}
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          {!prioritizeUrbanRenewal && (
            <option value={URBAN_RENEWAL_OPTION_VALUE}>{URBAN_RENEWAL_OPTION_VALUE}</option>
          )}
          <option value="אחר">אחר / לא בטוח</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-notes" className="block text-sm font-bold mb-1.5">הערות</label>
        <textarea id="cf-notes" name="notes" rows={3} className={inputCls} placeholder="כמה מילים על הפרויקט" />
      </div>

      {errorMsg && (
        <div id="cf-error" role="alert" aria-live="polite" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-primary)] font-extrabold px-6 py-4 shadow-[var(--shadow-cta)] disabled:opacity-60 transition"
      >
        {status === "loading" ? "שולח..." : "שלחו וקבלו הצעת מחיר"}
      </button>

      <p className="text-xs text-[var(--color-muted-2)] text-center">
        שליחת הפרטים מהווה הסכמה לקבלת פנייה מהתחדשות. אין בכך התחייבות מצדכם.
      </p>
    </form>
  );
}
