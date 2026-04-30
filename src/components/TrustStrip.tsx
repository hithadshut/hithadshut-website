import Link from "next/link";

/**
 * Trust Strip — thin band of 4 entity-level trust pillars.
 * Sits below the hero and above the services grid on the homepage.
 *
 * Design constraint: do not modify the hero. This is an additive band that
 * surfaces specific verifiable signals (entities + license numbers) that the
 * hero's generic checkmarks don't carry.
 *
 * The "מהנדס קונסטרוקציה רשום" pillar makes a process claim (every project
 * goes through a registered structural engineer) rather than naming a
 * specific engineer — a specific name + license is parked under BLOCKERS
 * (B-022) until Ofek supplies them.
 */
type Pillar = {
  title: string;
  detail: string;
  href?: string;
  /** Slot for an inline SVG. Keeps the strip image-free. */
  icon: React.ReactNode;
};

const PILLARS: Pillar[] = [
  {
    title: "פיקוד העורף",
    detail: "כל פרויקט מוגש על ידי עורך בקשה לאישור פקע״ר",
    href: "/guides/home-front-command-approval",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
      </svg>
    ),
  },
  {
    title: "מהנדס קונסטרוקציה רשום",
    detail: "חישוב סטטי וחיזוקים מבוצעים בליווי מהנדס בנייה רשום",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "קבלן רשום",
    detail: "רשום בפנקס הקבלנים, מבוטח בעבודות קבלניות וצד ג׳",
    href: "/compare/katlan-rashum-vs-hafer",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M14 3h7v7" />
        <path d="M21 3l-9 9" />
        <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
      </svg>
    ),
  },
  {
    title: "מתווך מקרקעין מורשה",
    detail: "מנכ״ל החברה אופק מזור · רישיון #3246290",
    href: "/about/ofek-mazor",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="אישורים ורישיונות מקצועיים של התחדשות בינוי ויזמות"
      className="bg-[var(--color-primary)] text-white border-t border-[var(--color-accent)]/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-7">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PILLARS.map((p) => {
            const inner = (
              <div className="flex items-start gap-3">
                <span className="inline-flex w-10 h-10 shrink-0 rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)] items-center justify-center">
                  {p.icon}
                </span>
                <div className="min-w-0">
                  <div className="font-extrabold text-sm md:text-base text-white leading-tight">
                    {p.title}
                  </div>
                  <div className="mt-1 text-xs md:text-[13px] text-white/70 leading-snug">
                    {p.detail}
                  </div>
                </div>
              </div>
            );
            return (
              <li key={p.title}>
                {p.href ? (
                  <Link
                    href={p.href}
                    className="block rounded-xl px-2 py-1 -mx-2 hover:bg-white/5 transition"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="px-2 py-1 -mx-2">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
