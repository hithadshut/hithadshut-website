"use client";

import { useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    // Honeypot
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
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setErrorMsg("משהו השתבש. אפשר להתקשר ישירות: 054-671-2130");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[var(--color-success)]/30 bg-[var(--color-success)]/5 p-6 text-center">
        <div className="text-[var(--color-success)] text-3xl mb-2" aria-hidden>✓</div>
        <h3 className="font-bold text-lg text-[var(--color-ink)] mb-1">הפרטים התקבלו, תודה</h3>
        <p className="text-[var(--color-muted)] text-sm">
          נחזור אליכם בהקדם. לפנייה דחופה אפשר להתקשר 054-671-2130.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div>
        <label htmlFor="cf-name" className="block text-sm font-bold mb-1">שם מלא *</label>
        <input
          id="cf-name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)]"
          placeholder="ישראל ישראלי"
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className="block text-sm font-bold mb-1">טלפון *</label>
        <input
          id="cf-phone"
          name="phone"
          required
          type="tel"
          inputMode="numeric"
          dir="ltr"
          autoComplete="tel"
          className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)]"
          placeholder="050-0000000"
        />
      </div>

      <div>
        <label htmlFor="cf-city" className="block text-sm font-bold mb-1">עיר</label>
        <input
          id="cf-city"
          name="city"
          autoComplete="address-level2"
          className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)]"
          placeholder="למשל: פתח תקווה"
        />
      </div>

      <div>
        <label htmlFor="cf-service" className="block text-sm font-bold mb-1">סוג שירות</label>
        <select
          id="cf-service"
          name="service"
          defaultValue={defaultService ?? ""}
          className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)] bg-white"
        >
          <option value="">בחרו סוג שירות</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="אחר">אחר / לא בטוח</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-notes" className="block text-sm font-bold mb-1">הערות</label>
        <textarea
          id="cf-notes"
          name="notes"
          rows={3}
          className="w-full rounded-xl border border-[var(--color-border)] px-4 py-3 outline-none focus:border-[var(--color-primary)]"
          placeholder="כמה מילים על הבית, השלב בתהליך, או מה שחשוב שנדע"
        />
      </div>

      {errorMsg && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-primary-dark)] font-bold px-6 py-4 shadow-[var(--shadow-cta)] disabled:opacity-60"
      >
        {status === "loading" ? "שולח..." : "שלחו — ייעוץ ללא התחייבות"}
      </button>

      <p className="text-xs text-[var(--color-muted)]">
        שליחת הפרטים מהווה הסכמה לקבלת פנייה מהתחדשות. אין בכך התחייבות מצדכם.
      </p>
    </form>
  );
}
