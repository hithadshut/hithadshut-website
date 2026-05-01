import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { ofekPersonJsonLd } from "@/lib/schema";

export default function FounderSection() {
  return (
    <section className="bg-soft py-20 md:py-28">
      <JsonLd data={ofekPersonJsonLd()} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image column: first in DOM (in RTL, appears on right; on mobile, on top) */}
          <Reveal>
            <div className="flex flex-col items-center">
              <figure className="w-[250px] h-[320px] rounded-2xl overflow-hidden shadow-card ring-1 ring-[var(--color-accent)]/30 relative">
                <Image
                  src="/ofek-mazor.jpg"
                  alt="אופק מזור, מנכ״ל ומייסד התחדשות בינוי ויזמות"
                  width={500}
                  height={640}
                  priority
                  sizes="250px"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="mt-5 text-center">
                <div className="text-xl font-black text-[var(--color-primary)]">אופק מזור</div>
                <div className="text-sm text-[var(--color-muted)] mt-1">
                  מנכ״ל ומייסד, התחדשות בינוי ויזמות
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <Reveal delay={120}>
            <div>
              <div className="h-1 w-16 gold-line mb-5" />
              <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                הנהגה
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary)] leading-tight">
                מי עומד מאחורי התחדשות
              </h2>
              <p className="mt-6 text-lg text-[var(--color-muted)] leading-relaxed">
                התחדשות נוסדה מתוך אמונה פשוטה: בעלי בתים בישראל מגיעים לפתרון מקצועי,
                שקוף ואמין. אופק מזור, מנכ״ל ומייסד החברה, מוביל את הצוות עם גישה של
                שקיפות מלאה: מחיר ברור, לוח זמנים מחייב, ואחריות אישית על כל פרויקט.
              </p>
              <p className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
                אנחנו לא חברה שמעבירה אתכם לקבלן משנה ונעלמת. אנחנו נמצאים בשטח,
                מלווים כל שלב, ועומדים מאחורי כל מילה בחוזה.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[var(--color-accent)]/30 bg-white px-5 py-4 shadow-card">
                <span
                  aria-hidden
                  className="inline-flex w-10 h-10 rounded-lg bg-[var(--color-primary)] text-[var(--color-accent)] items-center justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="text-[var(--color-primary)] font-bold">
                  רוצים לדבר ישירות עם אופק? חייגו{" "}
                  <a
                    href="tel:054-671-2130"
                    className="text-[var(--color-accent-dark)] underline underline-offset-4 hover:text-[var(--color-accent)]"
                  >
                    054-671-2130
                  </a>
                </div>
              </div>

              <div className="mt-5 text-sm">
                <Link
                  href="/about/ofek-mazor"
                  className="font-bold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-accent-dark)]"
                >
                  קראו עוד על אופק מזור ←
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
