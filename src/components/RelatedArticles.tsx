import Link from "next/link";

type GuideSlug =
  | "mamad-cost"
  | "mamad-process"
  | "home-front-command-approval"
  | "choosing-mamad-contractor"
  | "mamad-mistakes";

type GuideEntry = {
  slug: GuideSlug;
  href: string;
  title: string;
  description: string;
};

const GUIDES: GuideEntry[] = [
  {
    slug: "mamad-cost",
    href: "/guides/mamad-cost",
    title: "כמה עולה לבנות ממ״ד",
    description: "טווחי מחירים עדכניים לפי גודל, גורמים שמזיזים את המחיר ואיפה אפשר לחסוך.",
  },
  {
    slug: "mamad-process",
    href: "/guides/mamad-process",
    title: "תהליך בניית ממ״ד",
    description: "שבעה שלבים — מהייעוץ הראשוני ועד מסירת המפתח ואישורי הגמר.",
  },
  {
    slug: "home-front-command-approval",
    href: "/guides/home-front-command-approval",
    title: "אישורי פיקוד העורף",
    description: "תהליך מלא, מסמכים נדרשים, זמני אישור וטעויות שגורמות לעיכוב.",
  },
  {
    slug: "choosing-mamad-contractor",
    href: "/guides/choosing-mamad-contractor",
    title: "איך בוחרים קבלן ממ״ד",
    description: "10 שאלות שחובה לשאול, דגלים אדומים ומה לבדוק ברישיונות וביטוחים.",
  },
  {
    slug: "mamad-mistakes",
    href: "/guides/mamad-mistakes",
    title: "10 טעויות בבניית ממ״ד",
    description: "הטעויות היקרות ביותר בפרויקטים אמיתיים — ואיך להימנע מהן מראש.",
  },
];

type Props = {
  currentSlug: GuideSlug;
  title?: string;
  limit?: number;
};

/**
 * RelatedArticles — guide→guide "מאמרים נוספים שיעניינו אתכם" block.
 * Distinct from RelatedLinks (which is cross-type with anchor rotation).
 * Filters out currentSlug, shows up to `limit` same-type guides.
 */
export default function RelatedArticles({
  currentSlug,
  title = "מאמרים נוספים שיעניינו אתכם",
  limit = 3,
}: Props) {
  const items = GUIDES.filter((g) => g.slug !== currentSlug).slice(0, limit);

  if (items.length === 0) return null;

  return (
    <nav aria-label="מאמרים קשורים" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-3xl mb-8">
        <div className="h-1 w-16 gold-line mb-5" />
        <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] leading-tight">
          {title}
        </h2>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((g) => (
          <li key={g.slug}>
            <Link
              href={g.href}
              className="card-premium p-5 md:p-6 h-full block group transition hover:-translate-y-0.5"
            >
              <h3 className="text-base md:text-lg font-black text-[var(--color-primary)] group-hover:text-[var(--color-accent-dark)] transition mb-2 break-words">
                {g.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed break-words">
                {g.description}
              </p>
              <span
                aria-hidden
                className="inline-block mt-3 text-sm font-bold text-[var(--color-accent-dark)]"
              >
                קראו עוד ←
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
