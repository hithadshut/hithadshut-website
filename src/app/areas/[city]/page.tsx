import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import InlineLeadForm from "@/components/InlineLeadForm";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import { site } from "@/lib/site";
import { areas, getArea } from "@/content/areas";
import { serviceMatrix } from "@/content/services";

type Params = Promise<{ city: string }>;

export async function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city } = await params;
  const area = getArea(city);
  if (!area) return {};
  return buildMetadata({
    title: `בניית ממ״ד ב${area.name} | קבלן מורשה פקע״ר | התחדשות`,
    description: `בניית ממ״ד ב${area.name}: חברת בינוי ויזמות, ליווי מלא מתכנון ועד אישור פיקוד העורף. הצעת מחיר תוך 24 שעות.`,
    path: `/areas/${area.slug}`,
  });
}

const baseFaqs = (cityName: string, isFrontLine = false) => [
  {
    q: `כמה עולה לבנות ממ״ד ב${cityName}?`,
    a: isFrontLine
      ? `ממ״ד 9 מ״ר ב${cityName}: 180,000-230,000 ₪ + מע״מ. ממ״ד 12 מ״ר: 230,000-270,000 ₪ + מע״מ. ${cityName} מסווגת כאזור בדרישות פקע״ר מחמירות יותר, מה שמוסיף 15%-25% לעלות הבסיסית לעומת ערי פנים הארץ, בעיקר בשל עובי קירות גדול יותר ודרישות מוגברות לדלת ולחלון הדף.`
      : `ממ״ד 9 מ״ר בבית פרטי ב${cityName}: טווח כללי של 160,000-200,000 ₪ + מע״מ. ממ״ד 12 מ״ר: 200,000-220,000 ₪ + מע״מ. ההצעה הסופית מותאמת לנכס ולדרישות פקע״ר באזור.`,
  },
  {
    q: `כמה זמן לוקח לבנות ממ״ד ב${cityName}?`,
    a: `אישור פיקוד העורף: עד 14 ימי עבודה במסלול פטור. ביצוע: 6-10 שבועות לממ״ד סטנדרטי. סך הכל: 2-4 חודשים מהפנייה ועד מסירה, בכפוף לוועדה המקומית ב${cityName}.`,
  },
  {
    q: `אילו אישורים נדרשים לבניית ממ״ד ב${cityName}?`,
    a: `אישור פיקוד העורף (חובה), ובהתאם למסלול: פטור מהיתר, רישוי מקוצר או היתר מלא מהוועדה המקומית ב${cityName}. אנחנו מלווים את התהליך מול כל הגורמים.`,
  },
  {
    q: "האם אתם עובדים עם קבלן משנה או מבצעים בעצמכם?",
    a: "התחדשות היא חברת בינוי ויזמות. אנחנו הקבלנים המבצעים. חוזה אחד, חברה אחת, אחריות מלאה על כל הפרויקט.",
  },
  {
    q: `האם יש הבדל בעובי קירות הממ״ד ב${cityName} לעומת אזורים אחרים?`,
    a: isFrontLine
      ? `כן. ${cityName} מסווגת באזור קו קדמי, ופקע״ר מחייב עובי קירות גדול יותר מ-25 ס״מ הסטנדרטי. גם רכיבי הדלת והחלון נבדקים לעמידות גבוהה יותר, וזמני ההתרעה הקצרים מחייבים שהמרחב המוגן יהיה במרחק שניות מחדרי השינה.`
      : `הדרישות נקבעות לפי הנחיות פקע״ר לאזור. באזורי קו קדמי או חזית דרומית או צפונית ייתכן שיידרש עובי קירות גדול יותר מ-25 ס״מ הסטנדרטי. אנחנו בודקים את הדרישות הספציפיות ל${cityName} כחלק מהתכנון.`,
  },
];

export default async function AreaPage({ params }: { params: Params }) {
  const { city } = await params;
  const area = getArea(city);
  if (!area) notFound();

  const areaUrl = `/areas/${area.slug}`;
  const faqs = baseFaqs(area.name, area.isFrontLine);

  const breadcrumb = breadcrumbJsonLd([
    { name: "בית", url: "/" },
    { name: "אזורי שירות", url: "/areas" },
    { name: area.name, url: areaUrl },
  ]);

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": `${site.url}${areaUrl}#localbusiness`,
    name: `${site.name} - ${area.name}`,
    url: `${site.url}${areaUrl}`,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}${site.ogImage}`,
    description: `בניית ממ״ד, מיגון חדר ומיגוניות ב${area.name}: חברת בינוי ויזמות, ליווי מלא.`,
    priceRange: "₪₪₪",
    areaServed: { "@type": "City", name: area.name },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
      addressLocality: area.name,
      addressRegion: area.district,
    },
  };

  const service = serviceJsonLd({
    name: `בניית ממ״ד ב${area.name}`,
    description: `שירותי בניית ממ״ד, מיגון חדר, מיגונית וממ״ד מוכן ב${area.name} וסביבתה. ליווי הנדסי מלא ואישורי פקע״ר.`,
    url: areaUrl,
    serviceType: "בניית ממ״ד",
  });

  return (
    <>
      <PageHero
        eyebrow={`אזור שירות · ${area.district}`}
        title={`בניית ממ״ד ב${area.name}: חברת התחדשות`}
        subtitle={`חברת בינוי ויזמות ב${area.name}: בניית ממ״דים, מיגון חדרים, מיגוניות וממ״דים מוכנים. ליווי מלא, אישורי פקע״ר, עבודה מקצועית.`}
        crumbs={[
          { name: "אזורי שירות", href: "/areas" },
          { name: area.name, href: areaUrl },
        ]}
      />

      <JsonLd data={[breadcrumb, localBusiness, service, faqJsonLd(faqs)]} />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight mb-5">
              למה לבחור בהתחדשות ב{area.name}
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              {area.localNote ??
                `אנחנו מבצעים פרויקטים של בניית ממ״ד ומיגון ב${area.name} וסביבתה. חברת בינוי ויזמות: לא מתווכים, לא קבלני משנה חיצוניים. הקבלנים, המהנדסים והאדריכלים פועלים תחת חוזה אחד ואחריות אחת.`}{" "}
              כל פרויקט נבחן פרטנית מול סוג הבית, רמת האיום באזור והדרישות של פיקוד העורף לאזור {area.district}.
            </p>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              ההתמחות המרכזית שלנו היא ממ״דים. זה הליבה של החברה. בנוסף אנחנו מבצעים מיגון חדרים
              קיימים, התקנת מיגוניות ותכנון ממ״דים מוכנים. לכל פתרון פרופיל עלות, לוח זמנים ורמת
              הגנה שונה, ובעמוד הזה תמצאו את ההבדלים והפתרון שמתאים לכם ב{area.name}.
            </p>
          </div>
        </Reveal>

        {area.neighborhoods && area.neighborhoods.length > 0 && (
          <Reveal>
            <div className="mt-10">
              <h3 className="text-xl md:text-2xl font-black text-[var(--color-primary)] mb-4">
                שכונות שאנחנו מכסים ב{area.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {area.neighborhoods.map((n) => (
                  <li
                    key={n}
                    className="px-3.5 py-1.5 text-sm rounded-full bg-[var(--color-soft)] border border-[var(--color-border)] text-[var(--color-ink)] font-semibold"
                  >
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                * רשימה חלקית. אנחנו עובדים בכל רחבי {area.name} והסביבה.
              </p>
            </div>
          </Reveal>
        )}
      </Section>

      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight">
              השירותים שלנו ב{area.name}
            </h2>
            <p className="mt-3 text-[var(--color-muted)]">
              ארבעה פתרונות מיגון עיקריים, את כולם אנחנו מבצעים בעצמנו. ליווי הנדסי ואישור פקע״ר נכללים בכל אחד.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceMatrix.map((s) => (
            <Link
              key={s.slug}
              href={`/areas/${area.slug}/${s.slug}`}
              className="card-premium p-6 h-full block hover:shadow-[var(--shadow-deep)] transition"
            >
              <div className="text-[var(--color-accent-dark)] font-extrabold text-xs mb-2">
                {area.name}
              </div>
              <h3 className="font-black text-lg text-[var(--color-primary)] mb-2">
                {s.name} ב{area.name}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.blurb}</p>
              <div className="mt-4 text-sm font-bold text-[var(--color-primary)]">
                פרטים ומחירים ←
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight">
              התהליך ב{area.name}: ארבעה שלבים
            </h2>
          </div>
        </Reveal>
        <ol className="grid md:grid-cols-2 gap-5">
          {[
            {
              t: "פנייה וסיור",
              d: `אתם משאירים פרטים, אנחנו מתאמים סיור ב${area.name} ללא עלות, ללא התחייבות.`,
            },
            {
              t: "תכנון ואישורים",
              d: `אדריכל וקונסטרוקטור מכינים תכניות, אנחנו מטפלים מול פקע״ר והוועדה ב${area.district}.`,
            },
            {
              t: "חוזה וביצוע",
              d: "חוזה עם מפרט ולוח זמנים, חפירה, יציקה, מערכות וגמר. הכל על ידי צוותים שלנו.",
            },
            {
              t: "בדיקות ומסירה",
              d: "בדיקות אטימות, אישור גמר, מסירה עם תיק פרויקט ואחריות קבלן לפי חוק המכר.",
            },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <li className="card-premium p-6 h-full flex gap-5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--color-primary)] text-[var(--color-accent)] flex items-center justify-center text-xl font-black">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-black text-lg text-[var(--color-primary)] mb-1">{s.t}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="soft-reverse">
        <Reveal>
          <div className="max-w-3xl">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight mb-5">
              עוד על בניית ממ״ד: מדריכים מקצועיים
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              לפני שמתחילים פרויקט ב{area.name}, שווה לקרוא את המדריכים שלנו על עלויות, תהליך ומסלולי
              הרישוי. גם אם תבחרו שלא לעבוד איתנו, המידע יעזור לכם לקבל החלטה מושכלת.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
              <li>
                <Link href="/guides/mamad-cost" className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]">
                  ← כמה עולה ממ״ד
                </Link>
              </li>
              <li>
                <Link href="/guides/mamad-process" className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]">
                  ← איך בונים ממ״ד, שלב אחר שלב
                </Link>
              </li>
              <li>
                <Link href="/guides/home-front-command-approval" className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]">
                  ← אישורי פיקוד העורף
                </Link>
              </li>
              <li>
                <Link href="/guides/choosing-mamad-contractor" className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]">
                  ← איך בוחרים קבלן ממ״ד
                </Link>
              </li>
              <li>
                <Link href="/compare/mamad-vs-miggun-vs-migunit" className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]">
                  ← ממ״ד מול מיגון מול מיגונית: השוואה
                </Link>
              </li>
              <li>
                <Link href="/areas" className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]">
                  ← כל אזורי השירות
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>
      </Section>

      <InlineLeadForm
        title={`מעוניינים בממ״ד ב${area.name}?`}
        subtitle="השאירו פרטים ונחזור אליכם תוך שעות עם הצעה מותאמת לבית ולאזור שלכם."
        defaultService="בניית ממ״ד"
      />

      <RelatedLinks
        seed={`areas/${area.slug}`}
        targets={["building-mamad", "mamad-cost", "compare-main", "contact"]}
      />

      <FAQ items={faqs} eyebrow="שאלות ותשובות" title={`שאלות נפוצות: ${area.name}`} tone="soft" />
    </>
  );
}
