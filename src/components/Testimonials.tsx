import Reveal from "./Reveal";

const slots = [
  { city: "רמת גן", service: "בניית ממ״ד" },
  { city: "הרצליה", service: "מיגון חדר" },
  { city: "ראשון לציון", service: "הרחבה" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--color-accent)]" aria-label="5 כוכבים">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.9L22 10l-5.3 5 1.6 7L12 18.4 5.7 22l1.6-7L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-soft py-20 md:py-24 relative">
      <div aria-hidden className="absolute inset-0 dots-pattern opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="h-1 w-16 gold-line mb-5" />
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              מה הלקוחות אומרים
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary)] leading-tight">
              אמון נבנה על עבודה, לא על הבטחות
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
              עדויות אמיתיות של לקוחות מתעדכנות בימים אלה. הסעיף הבא מראה את המבנה —
              כל עדות תגיע מלקוח אמיתי, עם שם, עיר, וסוג הפרויקט.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {slots.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="card-premium p-7 h-full flex flex-col justify-between relative overflow-hidden">
                <div aria-hidden className="absolute -top-4 end-4 text-[120px] leading-none font-black text-[var(--color-accent)]/10 select-none">
                  &ldquo;
                </div>
                <div className="relative">
                  <Stars />
                  <blockquote className="mt-4 text-[var(--color-muted)] leading-relaxed italic min-h-[96px]">
                    מקום שמור לעדות לקוח. הטקסט שיופיע כאן יהיה ציטוט אמיתי על החוויה
                    מול צוות התחדשות — תהליך, שקיפות, ביצוע ותוצאה.
                  </blockquote>
                </div>
                <figcaption className="relative mt-6 pt-5 border-t border-[var(--color-border)] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--color-accent-light)] to-[var(--color-accent-dark)] flex items-center justify-center text-white font-extrabold">
                    ?
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-ink)]">לקוח מ{s.city}</div>
                    <div className="text-xs text-[var(--color-muted-2)]">{s.service} · [טעון עדכון]</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
