"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

const PROPERTY_TYPES = [
  { value: "דירה", label: "דירה" },
  { value: "דירת ירושה", label: "דירת ירושה" },
  { value: "בניין", label: "בניין" },
  { value: "מגרש", label: "מגרש" },
] as const;

const PROJECT_STAGES = [
  { value: "", label: "לא ידוע / בשלב מוקדם" },
  { value: "מתחם מוכרז", label: "מתחם מוכרז" },
  { value: "החתמות דיירים", label: "בשלב החתמות דיירים" },
  { value: "יזם נבחר", label: "יזם נבחר" },
  { value: "תכנית מאושרת", label: "תכנית מאושרת" },
  { value: "היתר בנייה", label: "היתר בנייה" },
] as const;

type Props = {
  /** Pre-selects a property type (e.g. "דירת ירושה" on inheritance pages). */
  defaultPropertyType?: string;
  /** Tags the seller_lead_submit GA4 event so conversions are attributable per source page. Omitted = identical payload to the original form. */
  pageContext?: string;
};

/**
 * Dedicated lead form for the seller-bridge page. Reuses /api/lead (name +
 * phone are the only hard requirements there) but carries property type,
 * city and project stage in the notes field so the operator sees full
 * context in the email, and fires a distinct GA4 event so this page's
 * conversion can be measured apart from the general contact form.
 */
export default function SellerLeadForm({ defaultPropertyType, pageContext }: Props = {}) {
  const [propertyType, setPropertyType] = useState<string>(defaultPropertyType ?? "");
  const [stage, setStage] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) {
      setStatus("success");
      return;
    }
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const city = String(fd.get("city") || "").trim();

    if (!name || !phone || !propertyType) {
      setStatus("error");
      setErrorMsg("נא למלא שם, טלפון וסוג נכס");
      return;
    }
    if (!/^0\d{1,2}-?\d{7}$|^0\d{8,9}$|^\+972\d{8,9}$/.test(phone.replace(/\s/g, ""))) {
      setStatus("error");
      setErrorMsg("נא להזין מספר טלפון ישראלי תקין");
      return;
    }

    const stageLabel = PROJECT_STAGES.find((s) => s.value === stage)?.label;
    const notes = `סוג נכס: ${propertyType}${stageLabel && stage ? ` | שלב פרויקט: ${stageLabel}` : ""}`;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          city,
          service: "seller-lead",
          notes,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "send failed");
      }
      track("seller_lead_submit", {
        property_type: propertyType,
        project_stage: stage || "unknown",
        city: city || "unknown",
        ...(pageContext ? { page_context: pageContext } : {}),
      });
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setPropertyType(defaultPropertyType ?? "");
      setStage("");
    } catch (err) {
      setStatus("error");
      const msg = err instanceof Error && err.message && err.message !== "send failed" ? err.message : null;
      setErrorMsg(msg || `משהו השתבש. אפשר להתקשר ישירות: ${site.phone}`);
    }
  }

  const inputCls =
    "w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition";

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
          נחזור אליכם בהקדם לבדוק את הנכס. לפנייה דחופה: {site.phone}.
        </p>
      </div>
    );
  }

  const hasError = status === "error";

  return (
    <Reveal variant="left">
      <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-deep)] p-6 md:p-8" data-ga-section="seller-lead-form">
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex w-10 h-10 rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1z"/></svg>
          </span>
          <h3 className="text-xl font-extrabold text-[var(--color-primary)]">בדקו כמה שווה הנכס שלכם</h3>
        </div>
        <p className="text-sm text-[var(--color-muted)] mb-5">
          נחזור אליכם תוך שעות ספורות. אין התחייבות.
        </p>
        <form onSubmit={onSubmit} className="grid gap-3" noValidate aria-describedby={hasError ? "slf-error" : undefined}>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <div>
            <label htmlFor="slf-name" className="block text-sm font-bold mb-1.5">שם מלא *</label>
            <input id="slf-name" name="name" required autoComplete="name" className={inputCls} placeholder="ישראל ישראלי" />
          </div>

          <div>
            <label htmlFor="slf-phone" className="block text-sm font-bold mb-1.5">טלפון *</label>
            <input
              id="slf-phone"
              name="phone"
              required
              type="tel"
              inputMode="numeric"
              dir="ltr"
              autoComplete="tel"
              className={`${inputCls} text-start`}
              placeholder="050-0000000"
            />
          </div>

          <div>
            <label htmlFor="slf-city" className="block text-sm font-bold mb-1.5">עיר</label>
            <input id="slf-city" name="city" autoComplete="address-level2" className={inputCls} placeholder="לדוגמה: בת ים" />
          </div>

          <fieldset>
            <legend className="block text-sm font-bold mb-1.5">סוג הנכס *</legend>
            <div className="grid grid-cols-2 gap-2">
              {PROPERTY_TYPES.map((opt) => {
                const selected = propertyType === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setPropertyType(opt.value)}
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

          <div>
            <label htmlFor="slf-stage" className="block text-sm font-bold mb-1.5">
              שלב הפרויקט (אם ידוע)
            </label>
            <select
              id="slf-stage"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className={inputCls}
            >
              {PROJECT_STAGES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {errorMsg && (
            <div id="slf-error" role="alert" aria-live="polite" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-primary)] font-extrabold px-6 py-4 shadow-[var(--shadow-cta)] disabled:opacity-60 transition"
          >
            {status === "loading" ? "שולח..." : "בדקו כמה שווה הנכס שלי"}
          </button>

          <p className="text-xs leading-5 text-[var(--color-muted-2)] text-center">
            מסירת הפרטים נעשית מרצונכם ובהסכמתכם, ואינכם חייבים על פי חוק למוסרם.
            הפרטים ישמשו ליצירת קשר ולבדיקת הנכס, כמפורט ב
            <Link href="/privacy" className="underline underline-offset-2 hover:text-[var(--color-primary)]">
              מדיניות הפרטיות
            </Link>
            . ניתן לפנות אלינו בכל עת לעיון, תיקון או מחיקת המידע.
          </p>
        </form>
      </div>
    </Reveal>
  );
}
