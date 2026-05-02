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
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";
import { areas, getArea } from "@/content/areas";
import { serviceMatrix, getServiceMeta } from "@/content/services";
import { isGeoPairIndexable } from "@/content/indexable-geo";
import type { LinkTarget } from "@/lib/anchors";

const SERVICE_SLUG_TO_TARGET: Record<string, LinkTarget> = {
  "building-mamad": "building-mamad",
  "room-reinforcement": "room-reinforcement",
  "migunit": "migunit",
  "prefab-mamad": "prefab-mamad",
};

type Params = Promise<{ city: string; service: string }>;

export async function generateStaticParams() {
  const out: { city: string; service: string }[] = [];
  for (const a of areas) {
    for (const s of serviceMatrix) {
      out.push({ city: a.slug, service: s.slug });
    }
  }
  return out;
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function introTemplate(idx: number, city: string, svcName: string, blurb: string): string[] {
  const templates = [
    [
      `${svcName} ב${city} הוא התחום של חברת התחדשות בינוי ויזמות. ${blurb} בכל פרויקט שאנחנו מבצעים ב${city}, הצוות שלנו מתכנן ומבצע בפועל: אדריכל, קונסטרוקטור וקבלנים רשומים תחת אותה חברה. הלקוח חותם חוזה אחד מול חברה אחת, ומקבל אחריות מלאה גם על התכנון וגם על הביצוע.`,
      `התהליך בנוי לשקיפות מלאה: סיור ראשוני בבית ב${city}, אפיון מקצועי, הצעת מחיר סגורה, תכנון הנדסי וקונסטרוקטיבי, טיפול מול פיקוד העורף והוועדה המקומית, וביצוע מלא עד מסירה עם תיק פרויקט ואחריות קבלן לפי חוק המכר.`,
    ],
    [
      `המטרה שלנו ב${city} פשוטה: לתת לתושבים שירות ${svcName} ברמה של חברת בנייה רצינית, בלי הפתעות. ${blurb}`,
      `אנחנו מגיעים לסיור ראשוני ב${city}, מודדים, בוחנים אפשרויות הנדסיות וטכניות, ומכינים הצעת מחיר מפורטת. אם מתקדמים חותמים חוזה ברור, פותחים תיק מול הגורמים הנדרשים (פקע״ר, ועדה מקומית במידת הצורך), ומבצעים את העבודה בצוות שלנו. כל פרויקט נבנה לפי ההנחיות המחמירות של פיקוד העורף, עם חישוב סטטי מדויק ובדיקות אטימות לפני המסירה.`,
    ],
    [
      `תושבי ${city} שמחפשים ${svcName} מוצאים הרבה פעמים שוק מבולגן: המון הצעות, מחירים לא ברורים, וחוסר אחריות אחרי סיום העבודה. אצלנו זה עובד אחרת. ${blurb}`,
      `כחברת בינוי ויזמות שפועלת בפריסה ארצית, אנחנו מכירים את הדרישות הספציפיות ל${city}: ועדות מקומיות, טופוגרפיה, רמות איום. אנחנו מתאימים את התכנון ואת המפרט לכל פרויקט בנפרד. אין הצעה גנרית. יש הצעה אחת, שלכם, עם מחיר סגור, לוח זמנים מוגדר, ואחריות קבלן לפי חוק על כל העבודה.`,
    ],
    [
      `לפני שמתחילים פרויקט ${svcName} ב${city}, חשוב להבין מה בדיוק כולל השירות ומה הוא לא. ${blurb}`,
      `בהתחדשות אנחנו מקפידים על שקיפות מלאה. הצוות ב${city} כולל אדריכל שמכיר את הוועדה המקומית, קונסטרוקטור שמחשב את ההעמסה והחיזוקים, וקבלני ביצוע שמבצעים את העבודה. אנחנו לא עובדים בקיצורי דרך. ממ״ד או מיגון שלא בוצעו לפי התקן פשוט לא יאושרו על ידי פקע״ר, וגם אם יאושרו, לא ימלאו את תפקידם במקרה חירום. אצלנו הכל לפי הספר.`,
    ],
    [
      `${svcName} ב${city}: מה חשוב לדעת? ${blurb}`,
      `היתרון של עבודה עם חברת בינוי ויזמות כמו התחדשות ב${city} הוא המעטפת המלאה: אותו צוות שמתכנן הוא הצוות שמבצע. זה חוסך ללקוח ריצות בין מתכננים, קבלנים וגורמי אישור, וחוסך גם עיכובים שנובעים מחוסר תיאום. בנוסף, אחריות הקבלן לפי חוק נשארת אצל חברה אחת, זו שבצעה את הפרויקט מתחילתו ועד סופו. ב${city} אנחנו מפעילים צוות מקומי מלא, זמין לשאלות גם אחרי המסירה.`,
    ],
  ];
  return templates[idx % 5];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city, service } = await params;
  const area = getArea(city);
  const svc = getServiceMeta(service);
  if (!area || !svc) return {};
  // keep title <=60
  const title = `${svc.shortName} ב${area.name} | התחדשות בינוי ויזמות`;
  const description = `${svc.shortName} ב${area.name}: חברת בינוי ויזמות עם ליווי מלא, אישורי פקע״ר ואחריות קבלן. קבלו הצעת מחיר מותאמת.`;
  const base = buildMetadata({
    title,
    description,
    path: `/areas/${area.slug}/${svc.slug}`,
  });
  // Templated city×service pages are noindex by default to avoid the
  // doorway-pages penalty. The crawler can still follow internal links
  // (follow:true) so equity reaches the canonical service / area pages.
  if (!isGeoPairIndexable(area.slug, svc.slug)) {
    base.robots = { index: false, follow: true };
  }
  return base;
}

export default async function GeoServicePage({ params }: { params: Params }) {
  const { city, service } = await params;
  const area = getArea(city);
  const svc = getServiceMeta(service);
  if (!area || !svc) notFound();

  const pagePath = `/areas/${area.slug}/${svc.slug}`;
  const idx = hashStr(area.name + svc.slug) % 5;
  const [p1, p2] = introTemplate(idx, area.name, svc.name, svc.blurb);

  const faqs = [
    {
      q: `כמה עולה ${svc.name} ב${area.name}?`,
      a: area.isFrontLine
        ? `${area.name} מסווגת באזור בדרישות פקע״ר מחמירות, ולכן ממ״ד סטנדרטי של 9 מ״ר נע בטווח 180,000-230,000 ₪ + מע״מ ו-12 מ״ר סביב 230,000-270,000 ₪ + מע״מ. התוספת לעומת ערי פנים הארץ נובעת מעובי קירות גדול יותר ודרישות מחמירות לדלת ולחלון הדף. מיגון חדר ומיגוניות זולים יותר. ההצעה הסופית ניתנת אחרי סיור ומדידה.`
        : `העלות של ${svc.name} ב${area.name} משתנה לפי סוג הנכס, גודל ומיקום מדויק. בבניית ממ״ד טיפוסי טווחי המחיר נעים בין 160,000 ל-220,000 ₪ + מע״מ. מיגון חדר קיים ומיגוניות זולים יותר. ההצעה הסופית ניתנת אחרי סיור ומדידה.`,
    },
    {
      q: `כמה זמן לוקח פרויקט ${svc.shortName} ב${area.name}?`,
      a: `לוח הזמנים תלוי בסוג השירות ובאישורים הנדרשים. בממ״ד חדש: אישור פקע״ר עד 14 ימי עבודה במסלול פטור, ביצוע 6-10 שבועות. במיגון חדר קיים: לרוב 2-5 שבועות. במיגונית: כמה ימים עד שבועות בודדים. אנחנו מגדירים לוח זמנים מדויק ב${area.name} בחוזה.`,
    },
    {
      q: `האם ${svc.shortName} ב${area.name} דורש היתר בנייה?`,
      a: `תלוי בשירות ובסוג הנכס. ממ״ד חדש בבית פרטי נמוך לרוב במסלול פטור מהיתר על בסיס אישור פקע״ר. מיגון חדר קיים בדרך כלל לא דורש היתר. מיגונית בחצר במקרים רבים בפטור. אנחנו בודקים את הדרישות הספציפיות של הוועדה ב${area.name} כחלק מהתכנון ולא מתחילים לפני שהכל מסודר.`,
    },
    {
      q: `למה לבחור דווקא בהתחדשות ל${svc.shortName} ב${area.name}?`,
      a: `אנחנו חברת בינוי ויזמות, הקבלנים המבצעים בפועל. חוזה אחד, חברה אחת, אחריות מלאה. בנוסף, אנחנו מכירים את הדרישות של פקע״ר ושל הרשות המקומית ב${area.name}, ומספקים פתרון כולל: תכנון, רישוי, ביצוע ומסירה, בלי להעביר אחריות הלאה.`,
    },
  ];

  const breadcrumb = breadcrumbJsonLd([
    { name: "בית", url: "/" },
    { name: "אזורי שירות", url: "/areas" },
    { name: area.name, url: `/areas/${area.slug}` },
    { name: svc.name, url: pagePath },
  ]);

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": `${site.url}${pagePath}#localbusiness`,
    name: `${site.name} - ${svc.name} ${area.name}`,
    url: `${site.url}${pagePath}`,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}${site.ogImage}`,
    description: `${svc.name} ב${area.name}: חברת בינוי ויזמות עם ליווי מלא ואישורי פקע״ר.`,
    priceRange: "₪₪₪",
    areaServed: { "@type": "City", name: area.name },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
      addressLocality: area.name,
      addressRegion: area.district,
    },
  };

  const service2 = serviceJsonLd({
    name: `${svc.name} ב${area.name}`,
    description: `${svc.blurb} שירות ב${area.name} וסביבתה.`,
    url: pagePath,
    serviceType: svc.name,
  });

  return (
    <>
      <PageHero
        eyebrow={`${svc.shortName} · ${area.name}`}
        title={`${svc.name} ב${area.name}`}
        subtitle={`חברת התחדשות בינוי ויזמות מבצעת ${svc.shortName} ב${area.name} עם ליווי הנדסי מלא, אישורי פיקוד העורף ואחריות קבלן.`}
        crumbs={[
          { name: "אזורי שירות", href: "/areas" },
          { name: area.name, href: `/areas/${area.slug}` },
          { name: svc.shortName, href: pagePath },
        ]}
      />

      <JsonLd data={[breadcrumb, localBusiness, service2, faqJsonLd(faqs)]} />

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight mb-5">
              {svc.name} ב{area.name}: מה חשוב לדעת
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">{p1}</p>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">{p2}</p>
            {area.localNote && (
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">מאפייני {area.name}: </strong>
                {area.localNote}
              </p>
            )}
          </div>
        </Reveal>
      </Section>

      <Section tone="soft">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight">
              מה כולל השירות ב{area.name}
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              t: "סיור וייעוץ",
              d: `סיור מקצועי בבית ב${area.name}, מדידות, בחינת אפשרויות. ללא עלות, ללא התחייבות.`,
            },
            {
              t: "תכנון הנדסי",
              d: "אדריכל וקונסטרוקטור מכינים תכניות מפורטות, חישוב סטטי, מפרטים.",
            },
            {
              t: "רישוי ואישורי פקע״ר",
              d: `טיפול מול פיקוד העורף ומול הוועדה המקומית ב${area.name} עד קבלת אישור.`,
            },
            {
              t: "חוזה ברור",
              d: "חוזה מפורט עם מפרט, מחיר סגור, לוח זמנים ואחריות קבלן לפי חוק.",
            },
            {
              t: "ביצוע עם צוות שלנו",
              d: "הקבלנים שלנו מבצעים את העבודה. פיקוח יומיומי. צוות קבוע מתחילת הפרויקט ועד המסירה.",
            },
            {
              t: "מסירה ואחריות",
              d: "בדיקות, אישור גמר, תיק פרויקט. אחריות לפי חוק המכר וליווי גם אחרי המסירה.",
            },
          ].map((it, i) => (
            <Reveal key={it.t} delay={i * 50}>
              <div className="card-premium p-6 h-full">
                <div className="text-[var(--color-accent-dark)] font-extrabold text-xs mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-black text-lg text-[var(--color-primary)] mb-2">{it.t}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <div className="max-w-3xl">
            <div className="h-1 w-16 gold-line mb-5" />
            <h2 className="text-2xl md:text-4xl font-black text-[var(--color-primary)] leading-tight mb-5">
              מידע נוסף וקישורים מקצועיים
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              בדף זה סיכמנו את עיקרי השירות של {svc.name} ב{area.name}. למידע טכני מעמיק על השירות
              עצמו, לפני ההגעה להצעת מחיר, מומלץ להיכנס לעמוד השירות הכללי שלנו. שם תמצאו מפרט
              מקצועי, סוגי פתרונות, תהליך מלא ו-FAQ מקיף.
            </p>
            <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
              <Link
                href={svc.path}
                className="card-premium p-4 font-bold text-[var(--color-primary)] hover:shadow-[var(--shadow-deep)]"
              >
                ← {svc.name}: עמוד השירות הכללי
              </Link>
              <Link
                href={`/areas/${area.slug}`}
                className="card-premium p-4 font-bold text-[var(--color-primary)] hover:shadow-[var(--shadow-deep)]"
              >
                ← כל השירותים ב{area.name}
              </Link>
              <Link
                href="/guides/mamad-cost"
                className="card-premium p-4 font-bold text-[var(--color-primary)] hover:shadow-[var(--shadow-deep)]"
              >
                ← כמה עולה ממ״ד: מדריך עלויות
              </Link>
              <Link
                href="/compare/mamad-vs-miggun-vs-migunit"
                className="card-premium p-4 font-bold text-[var(--color-primary)] hover:shadow-[var(--shadow-deep)]"
              >
                ← השוואה בין פתרונות המיגון
              </Link>
            </div>
            <p className="mt-5 text-sm text-[var(--color-muted)]">
              שירותים אחרים ב{area.name}:{" "}
              {serviceMatrix
                .filter((s) => s.slug !== svc.slug)
                .map((s, i, arr) => (
                  <span key={s.slug}>
                    <Link
                      href={`/areas/${area.slug}/${s.slug}`}
                      className="font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-dark)]"
                    >
                      {s.shortName}
                    </Link>
                    {i < arr.length - 1 ? " · " : ""}
                  </span>
                ))}
            </p>
          </div>
        </Reveal>
      </Section>

      <InlineLeadForm
        title={`${svc.name} ב${area.name}: בואו נדבר`}
        subtitle="השאירו פרטים ונחזור אליכם תוך שעות עם הצעה מותאמת."
        defaultService={svc.name}
      />

      <RelatedLinks
        seed={`areas/${area.slug}/${svc.slug}`}
        targets={(() => {
          const primary = SERVICE_SLUG_TO_TARGET[svc.slug] ?? "building-mamad";
          const secondary: LinkTarget =
            hashStr(area.slug + svc.slug) % 2 === 0 ? "mamad-cost" : "compare-main";
          return [primary, secondary, "contact", "areas"] as LinkTarget[];
        })()}
      />

      <FAQ
        items={faqs}
        eyebrow="שאלות ותשובות"
        title={`${svc.shortName} ב${area.name}: שאלות נפוצות`}
        tone="soft"
        includeSchema={false}
      />
    </>
  );
}
