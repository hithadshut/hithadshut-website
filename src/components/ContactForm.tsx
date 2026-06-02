"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const SERVICE_OPTIONS = [
  { value: "mamad", label: "בניית ממ״ד" },
  { value: "reinforcement", label: "שיפור מיגון" },
  { value: "urban-renewal", label: "התחדשות עירונית" },
  { value: "other", label: "אחר" },
] as const;

type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

function isValidService(v: string | undefined): v is ServiceValue {
  return !!v && SERVICE_OPTIONS.some((o) => o.value === v);
}

export default function ContactForm({
  defaultService,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  prioritizeUrbanRenewal = false,
}: {
  /**
   * Pre-selects a service segment for the lead. Accepts the canonical
   * keys "mamad" | "reinforcement" | "urban-renewal" | "other", or any
   * legacy string (which will be sent as-is on submit but not pre-selected
   * visually).
   */
  defaultService?: string;
  /**
   * Legacy prop - kept for backward compatibility with existing pages.
   * The simplified 3-field form no longer renders a service dropdown,
   * so this prop is a no-op. Pages on the urban-renewal track should
   * pass `defaultService="urban-renewal"` instead.
   */
  prioritizeUrbanRenewal?: boolean;
}) {
  const initialService: ServiceValue | "" = isValidService(defaultService)
    ? defaultService
    : "";
  const [service, setService] = useState<ServiceValue | "">(initialService);
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
    // The service segmented control writes its selection into a hidden
    // input via React state below. Legacy values from `defaultService`
    // that don't map to a button are still propagated through.
    const serviceValue = service || defaultService || "";
    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      city: "",
      service: serviceValue,
      notes: "",
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
          w.gtag("event", "lead_form_submit", {
            service: payload.service || "general",
            city: "unknown",
          });
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
      setErrorMsg(msg || `משהו השתבש. אפשר להתקשר ישירות: ${site.phone}`);
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
          נחזור אליכם בהקדם. לפנייה דחופה: {site.phone}.
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

      {/* Segmented service selector. Visual buttons (not a dropdown)
          keep cognitive load low for the 50-80+ audience and let the user
          tap once on a touch screen to commit. Hidden input mirrors the
          state so it lands in FormData on submit. */}
      <fieldset className="mt-1">
        <legend className="block text-sm font-bold mb-1.5">במה אנחנו יכולים לעזור?</legend>
        <div className="grid grid-cols-2 gap-2">
          {SERVICE_OPTIONS.map((opt) => {
            const selected = service === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setService(opt.value)}
                aria-pressed={selected}
                className={`py-3 px-3 rounded-xl border-2 text-sm font-bold transition ${
                  selected
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 text-[var(--color-primary)]"
                    : "border-[var(--color-border)] bg-white text-[var(--color-muted)] hover:border-[var(--color-accent)]"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </fieldset>
      <input type="hidden" name="service" value={service || defaultService || ""} />

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
        {status === "loading" ? "שולח..." : "השאירו פרטים, נחזור אליכם"}
      </button>

      <p className="text-xs leading-5 text-[var(--color-muted-2)] text-center">
        מסירת הפרטים נעשית מרצונכם ובהסכמתכם, ואינכם חייבים על פי חוק למוסרם.
        הפרטים ישמשו ליצירת קשר ולמתן השירות המבוקש, וייתכן שיועברו לאיש מקצוע
        רלוונטי לצורך זה, כמפורט ב
        <Link href="/privacy" className="underline underline-offset-2 hover:text-[var(--color-primary)]">
          מדיניות הפרטיות
        </Link>
        . ניתן לפנות אלינו בכל עת לעיון, תיקון או מחיקת המידע.
      </p>
    </form>
  );
}
