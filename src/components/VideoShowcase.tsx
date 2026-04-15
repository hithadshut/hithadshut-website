import Reveal from "./Reveal";

export default function VideoShowcase() {
  return (
    <section className="bg-dark-section relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />
      <div aria-hidden className="absolute -top-32 -start-32 w-96 h-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -end-40 w-[30rem] h-[30rem] rounded-full bg-[var(--color-primary-light)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal variant="right">
          <div className="text-white">
            <div className="h-1 w-16 gold-line mb-5" />
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
              צפו בסרטון
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              איך עובדת חברת בינוי ויזמות מקצועית
            </h2>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              סרטון קצר שמציג את השיטה שלנו — מהתכנון דרך אישורי פיקוד העורף, הביצוע באתר,
              ועד מסירת המפתח. שקיפות מלאה, בלי הבטחות ריקות.
            </p>
            <ul className="mt-8 space-y-3 text-white/85">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)] text-xs font-black shrink-0">✓</span>
                צוות מקצועי קבוע — לא קבלני משנה מזדמנים
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)] text-xs font-black shrink-0">✓</span>
                עמידה בלו״ז ובתקציב — מעוגן בחוזה
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)] text-xs font-black shrink-0">✓</span>
                אחריות מלאה אחרי מסירה
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal variant="left">
          <div className="relative">
            {/* Frame decoration */}
            <div aria-hidden className="absolute -top-4 -end-4 w-24 h-24 border-t-2 border-e-2 border-[var(--color-accent)] rounded-tr-2xl" />
            <div aria-hidden className="absolute -bottom-4 -start-4 w-24 h-24 border-b-2 border-s-2 border-[var(--color-accent)] rounded-bl-2xl" />

            <button
              type="button"
              aria-label="הפעילו סרטון — בקרוב"
              className="group relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[var(--shadow-deep)] bg-gradient-to-br from-[#14304F] via-[#0D2137] to-[#0A1628] cursor-default"
            >
              {/* Fake video thumbnail composition */}
              <div aria-hidden className="absolute inset-0 opacity-60">
                <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] shadow-[var(--shadow-cta)] pulse-ring group-hover:scale-105 transition-transform">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </span>
              </div>

              {/* Meta */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-center justify-between text-white">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Hithadshut · Showreel</div>
                  <div className="mt-1 font-bold">צפו בסרטון החברה</div>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest bg-white/10 rounded-full px-3 py-1 border border-white/20 backdrop-blur">
                  בקרוב
                </div>
              </div>
            </button>
            <p className="mt-4 text-xs text-white/50 text-center">
              סרטון התדמית עולה בקרוב.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
