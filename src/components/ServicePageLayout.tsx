import PageHero from "./PageHero";
import Section, { Prose } from "./Section";
import FAQ from "./FAQ";
import InlineLeadForm from "./InlineLeadForm";
import JsonLd from "./JsonLd";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";
import { serviceJsonLd, type FaqItem } from "@/lib/schema";
import type { ReactNode } from "react";

type Step = { title: string; text: string };
type Benefit = { title: string; text: string };
type Subtype = { title: string; text: string };
type Crumb = { name: string; href: string };

type Props = {
  path: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  crumbs: Crumb[];
  serviceName: string;
  serviceDescription: string;
  intro: ReactNode;
  includes: string[];
  subtypes?: Subtype[];
  subtypesTitle?: string;
  steps: Step[];
  benefits: Benefit[];
  timeline?: string;
  pricing?: string;
  faqs: FaqItem[];
  defaultService: string;
  children?: ReactNode;
};

export default function ServicePageLayout({
  path,
  eyebrow,
  title,
  subtitle,
  crumbs,
  serviceName,
  serviceDescription,
  intro,
  includes,
  subtypes,
  subtypesTitle = "סוגים ותצורות",
  steps,
  benefits,
  timeline,
  pricing,
  faqs,
  defaultService,
  children,
}: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} crumbs={crumbs} />

      <JsonLd
        data={serviceJsonLd({
          name: serviceName,
          description: serviceDescription,
          url: path,
          serviceType: serviceName,
        })}
      />

      {/* Intro + trust badges */}
      <Section tone="white">
        <div className="grid lg:grid-cols-3 gap-10">
          <Reveal variant="right" className="lg:col-span-2">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight mb-5">
              מה כולל השירות שלנו
            </h2>
            <Prose>{intro}</Prose>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {includes.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--color-ink)]">
                  <span className="mt-0.5 inline-flex w-6 h-6 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] items-center justify-center text-xs font-black shrink-0">✓</span>
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="left">
            <div className="card-premium p-6 md:p-7">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent-dark)] mb-3">
                אמון ואיכות
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="inline-flex w-10 h-10 rounded-xl bg-[var(--color-primary)]/5 text-[var(--color-primary)] items-center justify-center shrink-0">
                    <ServiceIcon name="certificate" size={22} />
                  </span>
                  <div>
                    <div className="font-bold text-[var(--color-primary)]">קבלנים רשומים</div>
                    <div className="text-sm text-[var(--color-muted)]">רישום בפנקס הקבלנים, סיווג מתאים, ביטוח בתוקף.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex w-10 h-10 rounded-xl bg-[var(--color-primary)]/5 text-[var(--color-primary)] items-center justify-center shrink-0">
                    <ServiceIcon name="shield" size={22} />
                  </span>
                  <div>
                    <div className="font-bold text-[var(--color-primary)]">אישור פיקוד העורף</div>
                    <div className="text-sm text-[var(--color-muted)]">עבודה לפי תקן 4422 והנחיות פקע״ר העדכניות.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex w-10 h-10 rounded-xl bg-[var(--color-primary)]/5 text-[var(--color-primary)] items-center justify-center shrink-0">
                    <ServiceIcon name="key" size={22} />
                  </span>
                  <div>
                    <div className="font-bold text-[var(--color-primary)]">אחריות על העבודה</div>
                    <div className="text-sm text-[var(--color-muted)]">אחריות קבלן על פי חוק, שירות גם אחרי המסירה.</div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Subtypes */}
      {subtypes && subtypes.length > 0 && (
        <Section tone="soft">
          <Reveal>
            <div className="max-w-3xl mb-10">
              <div className="h-1 w-16 gold-line mb-5" />
              <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight">
                {subtypesTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {subtypes.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card-premium p-7 h-full">
                  <div className="text-[var(--color-accent-dark)] font-extrabold text-sm mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="font-black text-lg text-[var(--color-primary)] mb-3">{s.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Process steps */}
      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight">
              שלבי התהליך
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              כל שלב מוגדר, מתועד ומאושר מולכם לפני המעבר הלאה. בלי הפתעות.
            </p>
          </div>
        </Reveal>
        <ol className="grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <li className="card-premium p-6 h-full flex gap-5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--color-primary)] text-[var(--color-accent)] flex items-center justify-center text-xl font-black">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-black text-lg text-[var(--color-primary)] mb-1">{s.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Benefits / value */}
      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight">
              מה מקבלים מאיתנו
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="card-premium p-6 h-full">
                <h3 className="font-black text-[var(--color-primary)] mb-2">{b.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Timeline & Pricing banner */}
      {(timeline || pricing) && (
        <Section tone="dark">
          <div className="grid md:grid-cols-2 gap-10">
            {timeline && (
              <Reveal variant="right">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
                  לו״ז משוער
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3">זמני ביצוע</h3>
                <p className="text-white/80 leading-relaxed">{timeline}</p>
                <p className="mt-4 text-xs text-white/50">
                  * טווחים כלליים בלבד. לוח זמנים סופי נקבע בחוזה לפי הפרויקט.
                </p>
              </Reveal>
            )}
            {pricing && (
              <Reveal variant="left">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
                  עלויות
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3">טווחי מחיר</h3>
                <p className="text-white/80 leading-relaxed">{pricing}</p>
                <p className="mt-4 text-xs text-white/50">
                  * טווחים אינדיקטיביים. הצעת מחיר סופית מותאמת לבית ולדרישות. כל המחירים אינם כוללים מע״מ.
                </p>
              </Reveal>
            )}
          </div>
        </Section>
      )}

      {children}

      <InlineLeadForm
        title="מתעניינים בפרויקט? בואו נדבר."
        subtitle="השאירו פרטים ונחזור אליכם תוך שעות ספורות עם שיחת ייעוץ ראשונית — ללא עלות."
        defaultService={defaultService}
      />

      <FAQ items={faqs} eyebrow="שאלות ותשובות" title="שאלות נפוצות" tone="soft" />
    </>
  );
}
