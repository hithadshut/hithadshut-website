"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type CityTier = "merkaz-tzafuf" | "arei-livui" | "gush-dan-rachav" | "periferia-merkaz" | "periferia-rechoka";
type BuildingAge = "30-40" | "40-60" | "60+";
type YesNoUnclear = "yes" | "no" | "unclear";
type DwellerAge = "under-70" | "70-74" | "75+";
type AlternativesClause = "yes" | "no" | "unsure";

type CalcInputs = {
  cityTier: CityTier | "";
  apartmentSize: string;
  buildingAge: BuildingAge | "";
  unitsInComplex: string;
  addedMeters: string;
  parking: YesNoUnclear | "";
  storage: YesNoUnclear | "";
  cashCompensation: string;
  dwellerAge: DwellerAge | "";
  alternativesClause: AlternativesClause | "";
};

type LeadFields = {
  name: string;
  phone: string;
  email: string;
  projectCity: string;
};

type VerdictResult = {
  score: number;
  tier: 1 | 2 | 3 | 4;
  positives: string[];
  issues: string[];
};

const TIER_RANGES: Record<CityTier, { min: number; max: number; label: string }> = {
  "merkaz-tzafuf": { min: 20, max: 35, label: "מרכז הארץ צפוף" },
  "arei-livui": { min: 15, max: 25, label: "ערי לוויין מרכזיות" },
  "gush-dan-rachav": { min: 18, max: 28, label: "גוש דן רחב" },
  "periferia-merkaz": { min: 12, max: 22, label: "ערים פריפריאליות-מרכזיות" },
  "periferia-rechoka": { min: 8, max: 18, label: "פריפריה רחוקה" },
};

const STEPS = [
  "פרטי הדירה הישנה",
  "פרטי ההצעה",
  "פרטים אישיים",
  "תוצאה",
];

function calculateScore(inputs: CalcInputs): VerdictResult {
  const tier = inputs.cityTier as CityTier;
  const range = TIER_RANGES[tier];
  const addedMeters = Number(inputs.addedMeters) || 0;
  const cashCompensation = Number(inputs.cashCompensation) || 0;

  let score = 0;
  const issues: string[] = [];
  const positives: string[] = [];

  // m² addition (max 45)
  if (addedMeters >= range.max) {
    score += 45;
    positives.push("תוספת מ״ר גבוהה מהסטנדרט באזור");
  } else if (addedMeters >= range.min) {
    score += 35;
    positives.push("תוספת מ״ר בטווח הסטנדרט באזור");
  } else if (addedMeters >= range.min - 5) {
    score += 20;
    issues.push("תוספת מ״ר מעט מתחת לסטנדרט באזור");
  } else {
    score += 5;
    issues.push("תוספת מ״ר נמוכה משמעותית מהסטנדרט באזור");
  }

  // Parking (max 25)
  if (inputs.parking === "yes") {
    score += 25;
    positives.push("חניה תת-קרקעית כלולה בהצעה");
  } else if (inputs.parking === "no") {
    issues.push("אין חניה בהצעה הקיימת");
  } else {
    score += 10;
    issues.push("חניה לא צוינה במפורש בהסכם");
  }

  // Storage (max 20)
  if (inputs.storage === "yes") {
    score += 20;
    positives.push("מחסן כלול בהצעה");
  } else if (inputs.storage === "no") {
    issues.push("אין מחסן בהצעה הקיימת");
  } else {
    score += 8;
    issues.push("מחסן לא צוין במפורש בהסכם");
  }

  // Cash compensation (BONUS, beyond 100% base)
  if (cashCompensation >= 100000) {
    score += 10;
    positives.push("פיצוי כספי משמעותי");
  } else if (cashCompensation > 0) {
    score += 5;
    positives.push("פיצוי כספי קיים");
  }

  // Senior age + alternatives clause: affects score, not just flag
  if (inputs.dwellerAge === "70-74") {
    if (inputs.alternativesClause === "yes") {
      positives.push("סעיף חלופות לקשישים מעוגן בהסכם");
    } else if (inputs.alternativesClause === "unsure") {
      issues.push("דייר בגיל 70+: סעיף חלופות החובה אינו ברור בהסכם");
    } else if (inputs.alternativesClause === "no") {
      issues.push("דייר בגיל 70+: סעיף חלופות החובה חסר בהסכם (חובה לפי חוק)");
      score = Math.min(score, 60); // cap at max Tier 2
    }
  } else if (inputs.dwellerAge === "75+") {
    if (inputs.alternativesClause === "yes") {
      positives.push("סעיף חלופות לקשישים 75+ מעוגן בהסכם");
    } else if (inputs.alternativesClause === "unsure") {
      issues.push("דייר בגיל 75+: סעיף חלופות החובה אינו ברור בהסכם");
      score = Math.max(0, score - 15);
    } else if (inputs.alternativesClause === "no") {
      issues.push("דייר בגיל 75+: סעיף כל 3 החלופות חסר (קריטי, חובה לפי חוק)");
      score = Math.min(score, 40); // cap at max Tier 3
    }
  }

  let tierNum: 1 | 2 | 3 | 4;
  if (score >= 75) tierNum = 1;
  else if (score >= 55) tierNum = 2;
  else if (score >= 35) tierNum = 3;
  else tierNum = 4;

  return { score, tier: tierNum, positives, issues };
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return /^05\d{8}$/.test(digits);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const STORAGE_KEY = "pb-calc-result";

export default function PinuiBinuiCalculator() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [inputs, setInputs] = useState<CalcInputs>({
    cityTier: "",
    apartmentSize: "",
    buildingAge: "",
    unitsInComplex: "",
    addedMeters: "",
    parking: "",
    storage: "",
    cashCompensation: "",
    dwellerAge: "",
    alternativesClause: "",
  });
  const [lead, setLead] = useState<LeadFields>({
    name: "",
    phone: "",
    email: "",
    projectCity: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<VerdictResult | null>(null);
  const [showFullCtaModal, setShowFullCtaModal] = useState(false);
  const [fullCtaSubmitted, setFullCtaSubmitted] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitPhone, setExitPhone] = useState("");
  const [exitSubmitted, setExitSubmitted] = useState(false);
  const exitDismissedRef = useRef(false);

  // Restore from sessionStorage
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as { inputs: CalcInputs; verdict: VerdictResult };
        setInputs(parsed.inputs);
        setVerdict(parsed.verdict);
        setStep(4);
      }
    } catch {
      // ignore
    }
  }, []);

  // Exit intent (desktop only, mouse leaves through top)
  useEffect(() => {
    if (verdict || exitDismissedRef.current) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY < 0 && !verdict && !exitDismissedRef.current && step !== 4) {
        setShowExitIntent(true);
        exitDismissedRef.current = true;
      }
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [verdict, step]);

  function step1Valid(): boolean {
    return !!(inputs.cityTier && inputs.apartmentSize && inputs.buildingAge && inputs.unitsInComplex);
  }

  function step2Valid(): boolean {
    if (!(inputs.addedMeters && inputs.parking && inputs.storage && inputs.dwellerAge)) return false;
    // Alternatives clause is required when age >= 70
    if (inputs.dwellerAge === "70-74" || inputs.dwellerAge === "75+") {
      return !!inputs.alternativesClause;
    }
    return true;
  }

  function step3Valid(): boolean {
    return !!(lead.name.trim() && isValidPhone(lead.phone) && isValidEmail(lead.email));
  }

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    if (!step3Valid()) return;
    setSubmitting(true);
    setSubmitError(null);

    const result = calculateScore(inputs);
    const tierLabel = TIER_RANGES[inputs.cityTier as CityTier].label;
    const notes = [
      "מחשבון פינוי בינוי: בדיקת הצעה",
      `אזור: ${tierLabel}`,
      `דירה ישנה: ${inputs.apartmentSize} מ"ר, גיל בניין ${inputs.buildingAge} שנה, ${inputs.unitsInComplex} יחידות במתחם`,
      `הצעת היזם: תוספת ${inputs.addedMeters} מ"ר, חניה ${inputs.parking}, מחסן ${inputs.storage}` +
        (inputs.cashCompensation ? `, פיצוי כספי ${inputs.cashCompensation} ש"ח` : ""),
      `גיל דייר ראשי: ${inputs.dwellerAge}` +
        (inputs.alternativesClause ? `, סעיף חלופות לקשישים: ${inputs.alternativesClause}` : ""),
      `אימייל: ${lead.email}`,
      `ציון מחשבון: ${result.score}/100 (טייר ${result.tier})`,
    ].join("\n");

    try {
      const resp = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name,
          phone: lead.phone.replace(/\D/g, ""),
          city: lead.projectCity || "",
          service: "פינוי בינוי / מחשבון",
          notes,
        }),
      });

      if (!resp.ok) {
        const data = (await resp.json().catch(() => ({}))) as { message?: string };
        setSubmitError(data.message || "אירעה תקלה בשליחת הפרטים. נסו שוב או התקשרו ישירות.");
      }
      // Continue to verdict even if delivery failed (per brief)
      setVerdict(result);
      setStep(4);
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ inputs, verdict: result }));
      } catch {
        // ignore
      }
    } catch {
      setSubmitError("נכשלה התקשרות עם השרת. ההצעה נבדקה אך הפרטים לא נשמרו. אנא נסו שוב או התקשרו.");
      setVerdict(result);
      setStep(4);
    } finally {
      setSubmitting(false);
    }
  }

  async function submitFullCta() {
    setShowFullCtaModal(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name,
          phone: lead.phone.replace(/\D/g, ""),
          city: lead.projectCity || "",
          service: "פינוי בינוי / מחשבון: בקשה לניתוח מלא",
          notes: `המשתמש בוקש ניתוח מלא אחרי תוצאה ראשונית (ציון ${verdict?.score}/100). מחכה לחזרה תוך 24 שעות.`,
        }),
      });
      setFullCtaSubmitted(true);
    } catch {
      setFullCtaSubmitted(true);
    }
  }

  async function submitExitIntent(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidPhone(exitPhone)) return;
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "מחשבון: Exit Intent",
          phone: exitPhone.replace(/\D/g, ""),
          city: "",
          service: "פינוי בינוי / מחשבון: Exit Intent",
          notes: "המשתמש ניסה לעזוב את המחשבון. ביקש בדיקה מקצועית ללא השלמת המחשבון.",
        }),
      });
      setExitSubmitted(true);
    } catch {
      setExitSubmitted(true);
    }
  }

  function reset() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setInputs({
      cityTier: "",
      apartmentSize: "",
      buildingAge: "",
      unitsInComplex: "",
      addedMeters: "",
      parking: "",
      storage: "",
      cashCompensation: "",
      dwellerAge: "",
      alternativesClause: "",
    });
    setLead({ name: "", phone: "", email: "", projectCity: "" });
    setVerdict(null);
    setShowFullCtaModal(false);
    setFullCtaSubmitted(false);
    setSubmitError(null);
    setStep(1);
  }

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl shadow-[var(--shadow-card)] p-5 md:p-8">
      {/* Progress indicator */}
      <ol className="flex items-center justify-between gap-1 md:gap-2 mb-6 md:mb-8 text-xs md:text-sm" aria-label="שלבי המחשבון">
        {STEPS.map((label, i) => {
          const idx = (i + 1) as 1 | 2 | 3 | 4;
          const active = step === idx;
          const done = step > idx;
          return (
            <li
              key={label}
              className={`flex-1 flex flex-col items-center gap-1 ${active ? "text-[var(--color-primary)] font-bold" : done ? "text-[var(--color-accent-dark)]" : "text-[var(--color-muted)]"}`}
            >
              <span
                className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-sm
                  ${active ? "bg-[var(--color-primary)] text-white" : done ? "bg-[var(--color-accent)] text-[var(--color-primary)]" : "bg-[var(--color-soft)] text-[var(--color-muted)]"}`}
              >
                {done ? "✓" : idx}
              </span>
              <span className="text-center leading-tight">{label}</span>
            </li>
          );
        })}
      </ol>

      {/* Step 1: Old apartment details */}
      {step === 1 && (
        <div className="space-y-5">
          <h3 className="text-xl md:text-2xl font-extrabold text-[var(--color-primary)]">שלב 1: פרטי הדירה הישנה</h3>

          <Field label="עיר / אזור" required>
            <select
              value={inputs.cityTier}
              onChange={(e) => setInputs({ ...inputs, cityTier: e.target.value as CityTier })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px] bg-white"
            >
              <option value="">בחרו אזור</option>
              <option value="merkaz-tzafuf">מרכז הארץ צפוף (תל אביב, רמת גן, גבעתיים, גבעת שמואל)</option>
              <option value="arei-livui">ערי לוויין מרכזיות (פתח תקווה, ראשון לציון, חולון, בת ים, רחובות, נס ציונה)</option>
              <option value="gush-dan-rachav">גוש דן רחב (כפר סבא, רעננה, הרצליה, הוד השרון, רמת השרון)</option>
              <option value="periferia-merkaz">ערים פריפריאליות-מרכזיות (נתניה, אשדוד, חדרה, מודיעין)</option>
              <option value="periferia-rechoka">פריפריה רחוקה (באר שבע, קרית שמונה, אילת, אזורים אחרים)</option>
            </select>
          </Field>

          <Field label="גודל הדירה הישנה במ״ר" required>
            <input
              type="number"
              inputMode="numeric"
              min={30}
              max={200}
              placeholder="70"
              value={inputs.apartmentSize}
              onChange={(e) => setInputs({ ...inputs, apartmentSize: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px]"
            />
          </Field>

          <Field label="גיל הבניין הישן" required>
            <select
              value={inputs.buildingAge}
              onChange={(e) => setInputs({ ...inputs, buildingAge: e.target.value as BuildingAge })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px] bg-white"
            >
              <option value="">בחרו גיל</option>
              <option value="30-40">30-40 שנה</option>
              <option value="40-60">40-60 שנה</option>
              <option value="60+">60+ שנה</option>
            </select>
          </Field>

          <Field label="מספר יחידות במתחם" required helper="מינימום 24 יחידות לפינוי בינוי">
            <input
              type="number"
              inputMode="numeric"
              min={24}
              max={200}
              placeholder="50"
              value={inputs.unitsInComplex}
              onChange={(e) => setInputs({ ...inputs, unitsInComplex: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px]"
            />
          </Field>

          <button
            type="button"
            disabled={!step1Valid()}
            onClick={() => setStep(2)}
            className="w-full bg-[var(--color-primary)] text-white font-extrabold py-3.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 transition"
          >
            המשך לשלב 2 ←
          </button>
        </div>
      )}

      {/* Step 2: Offer details */}
      {step === 2 && (
        <div className="space-y-5">
          <h3 className="text-xl md:text-2xl font-extrabold text-[var(--color-primary)]">שלב 2: פרטי ההצעה של היזם</h3>

          <Field label="תוספת מ״ר שמציע היזם" required>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              max={60}
              placeholder="20"
              value={inputs.addedMeters}
              onChange={(e) => setInputs({ ...inputs, addedMeters: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px]"
            />
          </Field>

          <Field label="חניה תת-קרקעית בהצעה" required>
            <RadioGroup
              name="parking"
              value={inputs.parking}
              onChange={(v) => setInputs({ ...inputs, parking: v as YesNoUnclear })}
              options={[
                { value: "yes", label: "כן" },
                { value: "no", label: "לא" },
                { value: "unclear", label: "לא צוין" },
              ]}
            />
          </Field>

          <Field label="מחסן בהצעה" required>
            <RadioGroup
              name="storage"
              value={inputs.storage}
              onChange={(v) => setInputs({ ...inputs, storage: v as YesNoUnclear })}
              options={[
                { value: "yes", label: "כן" },
                { value: "no", label: "לא" },
                { value: "unclear", label: "לא צוין" },
              ]}
            />
          </Field>

          <Field label="פיצוי כספי בהצעה" helper="אם היזם מציע פיצוי כספי בנוסף לדירה החדשה (אופציונלי)">
            <input
              type="number"
              inputMode="numeric"
              min={0}
              max={1000000}
              placeholder="ריק אם אין פיצוי כספי"
              value={inputs.cashCompensation}
              onChange={(e) => setInputs({ ...inputs, cashCompensation: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px]"
            />
          </Field>

          <Field label="גיל הדייר הראשי" required helper="זה משפיע על זכויות מיוחדות בהסכם">
            <select
              value={inputs.dwellerAge}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  dwellerAge: e.target.value as DwellerAge,
                  // Reset alternatives clause when age becomes < 70 (field hidden)
                  alternativesClause: e.target.value === "under-70" ? "" : inputs.alternativesClause,
                })
              }
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px] bg-white"
            >
              <option value="">בחרו טווח גיל</option>
              <option value="under-70">מתחת ל-70</option>
              <option value="70-74">70-74</option>
              <option value="75+">75 ומעלה</option>
            </select>
          </Field>

          {(inputs.dwellerAge === "70-74" || inputs.dwellerAge === "75+") && (
            <Field
              label="האם ההסכם כולל סעיף חלופות לקשישים?"
              required
              helper={
                inputs.dwellerAge === "75+"
                  ? "דייר בגיל 75+ זכאי לכל 3 החלופות (דיור מוגן, דירה חלופית, שתי דירות). חובה לפי חוק."
                  : "דייר בגיל 70-74 זכאי לפחות לחלופה אחת מ-3. חובה לפי חוק."
              }
            >
              <RadioGroup
                name="alternativesClause"
                value={inputs.alternativesClause}
                onChange={(v) => setInputs({ ...inputs, alternativesClause: v as AlternativesClause })}
                options={[
                  { value: "yes", label: "כן" },
                  { value: "no", label: "לא" },
                  { value: "unsure", label: "לא בטוח" },
                ]}
              />
            </Field>
          )}

          <div className="flex flex-col-reverse md:flex-row gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="md:flex-1 border border-[var(--color-border)] text-[var(--color-primary)] font-bold py-3.5 rounded-xl hover:bg-[var(--color-soft)] transition"
            >
              ← חזרה לשלב 1
            </button>
            <button
              type="button"
              disabled={!step2Valid()}
              onClick={() => setStep(3)}
              className="md:flex-[2] bg-[var(--color-primary)] text-white font-extrabold py-3.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 transition"
            >
              המשך לשלב 3 ←
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Lead capture */}
      {step === 3 && (
        <form className="space-y-5" onSubmit={submitLead}>
          <h3 className="text-xl md:text-2xl font-extrabold text-[var(--color-primary)]">שלב 3: פרטים אישיים לקבלת התוצאה</h3>

          <p className="text-sm text-[var(--color-muted)]">השבוע נבדקו 47 הצעות פינוי בינוי במחשבון.</p>

          <Field label="שם מלא" required>
            <input
              type="text"
              autoComplete="name"
              value={lead.name}
              onChange={(e) => setLead({ ...lead, name: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px]"
            />
            {lead.name.trim().length > 1 && (
              <p className="mt-1 text-xs text-[var(--color-accent-dark)]">✓ תקין</p>
            )}
          </Field>

          <Field label="טלפון נייד" required helper="פורמט: 05X-XXX-XXXX">
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="05X-XXX-XXXX"
              value={lead.phone}
              onChange={(e) => setLead({ ...lead, phone: formatPhone(e.target.value) })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px]"
            />
            {lead.phone && !isValidPhone(lead.phone) && (
              <p className="mt-1 text-xs text-red-600">מספר נייד ישראלי לא תקין (10 ספרות, מתחיל ב-05)</p>
            )}
            {isValidPhone(lead.phone) && (
              <p className="mt-1 text-xs text-[var(--color-accent-dark)]">✓ תקין</p>
            )}
          </Field>

          <Field label="אימייל" required>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              value={lead.email}
              onChange={(e) => setLead({ ...lead, email: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px]"
            />
            {lead.email && !isValidEmail(lead.email) && (
              <p className="mt-1 text-xs text-red-600">כתובת אימייל לא תקינה</p>
            )}
            {isValidEmail(lead.email) && (
              <p className="mt-1 text-xs text-[var(--color-accent-dark)]">✓ תקין</p>
            )}
          </Field>

          <Field label="עיר / שם הפרויקט" helper="אופציונלי">
            <input
              type="text"
              value={lead.projectCity}
              onChange={(e) => setLead({ ...lead, projectCity: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px]"
            />
          </Field>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-muted)] py-3 border-y border-[var(--color-border)]">
            <li>✓ הפרטים שלכם נשארים אצלנו</li>
            <li>✓ ייעוץ ראשוני ללא עלות</li>
            <li>✓ תגובה תוך 24 שעות</li>
          </ul>

          <p className="text-sm text-[var(--color-muted)]">
            אנחנו לא יזמים. אנחנו חברת בנייה שמלווה דיירים מקצועית.
          </p>

          {submitError && (
            <p className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm p-3">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={!step3Valid() || submitting}
            className="w-full bg-[var(--color-primary)] text-white font-extrabold py-4 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 transition"
          >
            {submitting ? "שולח..." : "בדקו את ההצעה שלי"}
          </button>

          <p className="text-center text-sm">
            או{" "}
            <Link
              href="/contact"
              className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
            >
              פנו אלינו ישירות
            </Link>
            {" "}בלי המחשבון →
          </p>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full border border-[var(--color-border)] text-[var(--color-primary)] font-bold py-3 rounded-xl hover:bg-[var(--color-soft)] transition"
          >
            ← חזרה לשלב 2
          </button>
        </form>
      )}

      {/* Step 4: Verdict (PARTIAL) */}
      {step === 4 && verdict && (
        <Verdict
          verdict={verdict}
          onRequestFull={submitFullCta}
          showFullCtaModal={showFullCtaModal}
          fullCtaSubmitted={fullCtaSubmitted}
          onCloseModal={() => setShowFullCtaModal(false)}
          onReset={reset}
        />
      )}

      {/* Sticky mobile CTA bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[var(--color-border)] shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-4 py-3 flex gap-2">
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener"
          className="flex-1 bg-[var(--color-whatsapp)] text-white font-bold py-2.5 rounded-lg text-center text-sm"
        >
          וואטסאפ
        </a>
        <a
          href={`tel:${site.phoneDial}`}
          className="flex-1 bg-[var(--color-primary)] text-white font-bold py-2.5 rounded-lg text-center text-sm"
        >
          התקשרו: {site.phone}
        </a>
      </div>

      {/* Exit intent modal */}
      {showExitIntent && !exitSubmitted && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h4 className="text-xl font-extrabold text-[var(--color-primary)] mb-2">רגע! אנחנו יכולים לעזור גם בלי המחשבון.</h4>
            <p className="text-[var(--color-ink)] mb-4">
              השאירו טלפון, ונחזור אליכם עם בדיקה מקצועית בחינם.
            </p>
            <form onSubmit={submitExitIntent} className="space-y-3">
              <input
                type="tel"
                inputMode="tel"
                placeholder="05X-XXX-XXXX"
                value={exitPhone}
                onChange={(e) => setExitPhone(formatPhone(e.target.value))}
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[17px]"
              />
              <button
                type="submit"
                disabled={!isValidPhone(exitPhone)}
                className="w-full bg-[var(--color-primary)] text-white font-extrabold py-3 rounded-xl disabled:opacity-50"
              >
                צרו איתי קשר
              </button>
              <button
                type="button"
                onClick={() => setShowExitIntent(false)}
                className="w-full text-sm text-[var(--color-muted)] py-2"
              >
                לא תודה
              </button>
            </form>
          </div>
        </div>
      )}

      {showExitIntent && exitSubmitted && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl text-center">
            <h4 className="text-xl font-extrabold text-[var(--color-primary)] mb-2">תודה.</h4>
            <p className="text-[var(--color-ink)] mb-4">צוות הייעוץ שלנו ייצור איתכם קשר תוך 24 שעות.</p>
            <button
              type="button"
              onClick={() => setShowExitIntent(false)}
              className="bg-[var(--color-primary)] text-white font-bold px-6 py-2.5 rounded-lg"
            >
              סגור
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  required,
  helper,
  children,
}: {
  label: string;
  required?: boolean;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[15px] font-bold text-[var(--color-ink)] mb-1.5">
        {label}
        {required && <span className="text-red-600 mr-1">*</span>}
      </span>
      {children}
      {helper && <span className="block text-xs text-[var(--color-muted)] mt-1">{helper}</span>}
    </label>
  );
}

function RadioGroup({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex-1 min-w-[100px] py-3 px-4 rounded-lg border font-bold text-[17px] transition ${
              selected
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "bg-white text-[var(--color-ink)] border-[var(--color-border)] hover:bg-[var(--color-soft)]"
            }`}
            aria-pressed={selected}
            data-radio={name}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function Verdict({
  verdict,
  onRequestFull,
  showFullCtaModal,
  fullCtaSubmitted,
  onCloseModal,
  onReset,
}: {
  verdict: VerdictResult;
  onRequestFull: () => void;
  showFullCtaModal: boolean;
  fullCtaSubmitted: boolean;
  onCloseModal: () => void;
  onReset: () => void;
}) {
  const tierCopy: Record<1 | 2 | 3 | 4, { headline: string; bodyIntro: string; cta: string }> = {
    1: {
      headline: "ההצעה שקיבלתם נראית טובה. תואמת או טובה מסטנדרט השוק במרכז הארץ.",
      bodyIntro: "",
      cta: "לניתוח המפורט שלכם + המלצות פעולה. צוות הייעוץ שלנו ייצור קשר תוך 24 שעות.",
    },
    2: {
      headline: "ההצעה שקיבלתם בטווח הסביר אך כמה סעיפים דורשים תשומת לב.",
      bodyIntro: "",
      cta: "רוצים לדעת בדיוק מה לדרוש מהיזם? צוות הייעוץ שלנו יחזור אליכם עם רשימת שיפורים ספציפית לפרויקט שלכם תוך 24 שעות.",
    },
    3: {
      headline: "ההצעה נמצאת מתחת לסטנדרט בכמה היבטים מהותיים.",
      bodyIntro: "",
      cta: "הצעות בטווח הזה לעיתים קרובות ניתנות לשיפור משמעותי במו״מ. צוות הייעוץ שלנו ייצור קשר תוך 24 שעות עם תוכנית פעולה.",
    },
    4: {
      headline: "ההצעה נמוכה משמעותית מהסטנדרט. אנחנו ממליצים לא לחתום בלי בדיקה מקצועית מקיפה.",
      bodyIntro: "",
      cta: "צוות הייעוץ שלנו ייצור קשר תוך 24 שעות עם הערכה מלאה ואסטרטגיה.",
    },
  };

  const copy = tierCopy[verdict.tier];
  const topPositives = verdict.positives.slice(0, 3);
  const topIssues = verdict.issues.slice(0, verdict.tier === 4 ? 5 : 3);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-muted)] mb-2">תוצאה ראשונית</div>
        <div className="inline-flex items-baseline gap-2 mb-3">
          <span className="text-5xl md:text-6xl font-black text-[var(--color-primary)]">{verdict.score}</span>
          <span className="text-xl text-[var(--color-muted)]">/100</span>
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-[var(--color-primary)] leading-snug">
          {copy.headline}
        </h3>
      </div>

      {topPositives.length > 0 && (
        <div className="rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 p-4">
          <h4 className="font-bold text-[var(--color-primary)] mb-2">נקודות חיוביות:</h4>
          <ul className="space-y-1.5">
            {topPositives.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[var(--color-accent-dark)] font-black shrink-0">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {topIssues.length > 0 && (
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <h4 className="font-bold text-amber-900 mb-2">נקודות שדורשות תשומת לב:</h4>
          <ul className="space-y-1.5">
            {topIssues.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-700 font-black shrink-0">!</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-xl bg-[var(--color-primary)] text-white p-5 md:p-6">
        <p className="text-[17px] leading-7 mb-4">{copy.cta}</p>
        <button
          type="button"
          onClick={onRequestFull}
          disabled={showFullCtaModal}
          className="w-full bg-[var(--color-accent)] text-[var(--color-primary)] font-extrabold py-3.5 rounded-xl text-lg disabled:opacity-60 hover:brightness-105 transition"
        >
          קבלו את הניתוח המלא ←
        </button>
        <p className="text-center text-sm text-white/85 mt-3">
          רוצים לדבר עכשיו? התקשרו:{" "}
          <a href={`tel:${site.phoneDial}`} className="font-bold underline">
            {site.phone}
          </a>
        </p>
      </div>

      <p className="text-xs text-[var(--color-muted)] text-center">
        זוהי הערכה ראשונית בלבד, בהתבסס על 5 פרמטרים. בדיקה מלאה כוללת ערבויות, סעיפי הסכם, מס שבח, ועוד.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="w-full text-sm text-[var(--color-muted)] underline py-2"
      >
        בדיקה חדשה
      </button>

      {showFullCtaModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            {!fullCtaSubmitted ? (
              <>
                <h4 className="text-xl font-extrabold text-[var(--color-primary)] mb-3">מעולה! צוות הייעוץ שלנו יחזור אליכם תוך 24 שעות עם:</h4>
                <ul className="space-y-2 mb-5 text-[var(--color-ink)]">
                  <li className="flex gap-2"><span className="text-[var(--color-accent-dark)] font-black shrink-0">•</span><span>הניתוח המפורט של ההצעה (כל הפרמטרים, לא רק 3 העליונים)</span></li>
                  <li className="flex gap-2"><span className="text-[var(--color-accent-dark)] font-black shrink-0">•</span><span>השוואה לפרויקטים דומים שליווינו</span></li>
                  <li className="flex gap-2"><span className="text-[var(--color-accent-dark)] font-black shrink-0">•</span><span>המלצות פעולה ספציפיות לפרויקט שלכם</span></li>
                  <li className="flex gap-2"><span className="text-[var(--color-accent-dark)] font-black shrink-0">•</span><span>מענה לשאלות ספציפיות שיש לכם</span></li>
                </ul>
                <div className="text-center text-sm text-[var(--color-muted)]">שולח...</div>
              </>
            ) : (
              <>
                <h4 className="text-xl font-extrabold text-[var(--color-primary)] mb-2">תודה.</h4>
                <p className="text-[var(--color-ink)] mb-5">ניצור קשר תוך 24 שעות.</p>
                <button
                  type="button"
                  onClick={onCloseModal}
                  className="w-full bg-[var(--color-primary)] text-white font-bold py-3 rounded-xl"
                >
                  סגור
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
