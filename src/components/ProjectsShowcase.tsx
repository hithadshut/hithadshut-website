import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";

const items = [
  { tag: "בניית ממ״ד", sub: "בית פרטי", icon: "shield" as const, grad: "from-[#14304F] to-[#0A1628]" },
  { tag: "מיגון חדר", sub: "דירה קיימת", icon: "wall" as const, grad: "from-[#1F3A5F] to-[#0D2137]" },
  { tag: "מיגונית", sub: "חצר", icon: "box" as const, grad: "from-[#0D2137] to-[#14304F]" },
  { tag: "בנייה פרטית", sub: "וילה", icon: "villa" as const, grad: "from-[#14304F] to-[#1F3A5F]" },
  { tag: "הרחבה", sub: "תוספת קומה", icon: "expand" as const, grad: "from-[#0A1628] to-[#14304F]" },
  { tag: "שיפוץ כללי", sub: "דופלקס", icon: "hammer" as const, grad: "from-[#0D2137] to-[#1F3A5F]" },
];

export default function ProjectsShowcase() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="h-1 w-16 gold-line mb-5" />
            <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
              הפרויקטים שלנו
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary)] leading-tight">
              פרויקטים שבונים אמון
            </h2>
            <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
              בחרנו עבורכם מקבץ פרויקטים מייצגים מתיק העבודות. תמונות וסרטונים עולים בקרוב —
              עד אז, כל פרויקט שהסתיים מספר סיפור של ביצוע מדויק, אחריות ושקיפות.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.tag + i} delay={i * 80}>
              <div
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${it.grad} aspect-[4/3] border border-white/5 hover:border-[var(--color-accent)]/40 transition-all duration-500 shine`}
              >
                {/* pattern overlay */}
                <div aria-hidden className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
                {/* corner gold accent */}
                <div aria-hidden className="absolute top-0 end-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-accent)]/30 to-transparent" />

                {/* icon center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500">
                    <ServiceIcon name={it.icon} size={40} />
                  </div>
                </div>

                {/* bottom meta */}
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                  <div>
                    <div className="text-white font-bold text-lg">{it.tag}</div>
                    <div className="text-white/60 text-sm">{it.sub}</div>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] bg-black/30 rounded-full px-3 py-1 backdrop-blur border border-[var(--color-accent)]/30">
                    בקרוב
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
            תיק עבודות מפורט עם תמונות וסרטונים מתעדכן בימים אלה.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
