/**
 * Real projects gallery — anchor for E-E-A-T (B-020).
 *
 * Each entry corresponds to a real project executed by Hithadshut.
 * The image filenames below are the agreed canonical names; the actual
 * image files live in `public/projects/`. Placeholder SVGs may exist
 * temporarily until the real photographs are saved at the same paths
 * (see public/projects/README.md and seo/BLOCKERS.md B-020).
 *
 * Do not invent projects. Every entry here must correspond to an
 * actual project the company executed. Anonymized location is fine
 * (city + neighborhood); precise street address is not published.
 */
export type ProjectStage =
  | "foundation"     // יסודות וזיון
  | "structure"      // שלד ויציקת קונסטרוקציה
  | "slab"           // יציקת תקרה
  | "walls"          // יציקת קירות ממ״ד / חיזוקים
  | "finished"       // גמר ומסירה
  | "before";        // לפני התחלת העבודה

export type Project = {
  slug: string;
  /** Short title shown on cards. */
  title: string;
  /** What was actually built — service category. */
  serviceType:
    | "ממ״ד"
    | "מיגון חדר"
    | "מיגונית"
    | "ממ״ד טרומי"
    | "בנייה פרטית"
    | "תוספת בנייה"
    | "שיפוץ";
  /** City + neighborhood. No street address. */
  location: string;
  /** Month when the photo / stage shown. */
  capturedAt: string; // YYYY-MM
  /** Stage shown in the primary image. */
  stage: ProjectStage;
  /** 1-2 sentence factual description. No marketing fluff. */
  description: string;
  /** Path under /public/projects/. Use kebab-case English filenames. */
  image: string;
  /** Hebrew alt text. Required. */
  alt: string;
  /** Image actual rendered ratio (we render in a fixed-height card). */
  width: number;
  height: number;
  /**
   * Set true once the real photo is in place at `image` path. While
   * false, the gallery renders a "תמונה תיווסף" placeholder card with
   * the description and skips the broken image. This lets us ship the
   * gallery infra now and turn each project on as Ofek confirms the
   * upload.
   */
  hasRealImage: boolean;
  /** Optional which service slug this project showcases — used to embed it on the service page. */
  showcaseOnService?:
    | "building-mamad"
    | "room-reinforcement"
    | "migunit"
    | "prefab-mamad"
    | "private-construction"
    | "renovations"
    | "extensions";
};

/** Helper: get the first project (with image) tagged for a given service. */
export function getProjectForService(slug: string): Project | undefined {
  return projects.find((p) => p.showcaseOnService === slug);
}

/** Helper: lookup project by slug for the dynamic /projects/[slug] route. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * Five real projects shown to us by Ofek (the 5 photos sent on session 2).
 * Filenames below are the agreed canonical paths; until the JPGs are
 * actually saved at /public/projects/<filename>, hasRealImage is `false`
 * and the card renders the description-only placeholder.
 */
export const projects: Project[] = [
  {
    slug: "private-villa-structure",
    title: "וילה דו-קומתית בשלב שלד",
    serviceType: "בנייה פרטית",
    location: "אזור המרכז",
    capturedAt: "2026-04",
    stage: "structure",
    description:
      "וילה דו-קומתית בבנייה פרטית מלאה: יציקת קונסטרוקציה, קירות בטון מזוין, ושלד מוכן לחיפוי. תכנון משלב ממ״ד דירתי בקומת הקרקע.",
    image: "/projects/private-villa-structure.jpg",
    alt: "וילה דו-קומתית בשלב שלד עם פיגום ויציקות בטון מזוין — פרויקט בנייה פרטית של התחדשות בינוי ויזמות",
    width: 1600,
    height: 1200,
    hasRealImage: false,
    showcaseOnService: "private-construction",
  },
  {
    slug: "migunit-backyard-finished",
    title: "מיגונית מותקנת בחצר אחורית",
    serviceType: "מיגונית",
    location: "אזור המרכז",
    capturedAt: "2026-03",
    stage: "finished",
    description:
      "מיגונית מותקנת בחצר אחורית קטנה: דלת הדף תקנית, חלון אטום, חיבור חשמל. התקנה מהירה ללא בנייה רטובה. החצר עובדה לדשא סינתטי.",
    image: "/projects/migunit-backyard-finished.jpg",
    alt: "מיגונית מוכנה מותקנת בחצר אחורית עם דשא סינתטי, דלת הדף לבנה וחלון תקני — התחדשות בינוי ויזמות",
    width: 1600,
    height: 1200,
    hasRealImage: false,
    showcaseOnService: "migunit",
  },
  {
    slug: "extension-roof-pour",
    title: "יציקת תקרה בתוספת בנייה",
    serviceType: "תוספת בנייה",
    location: "אזור המרכז",
    capturedAt: "2026-04",
    stage: "slab",
    description:
      "יציקת תקרת בטון מזוין בתוספת בנייה לבית פרטי. זיון לפי חישוב סטטי, יציקה ביום אחד, בלי לחסום את הבית הראשי.",
    image: "/projects/extension-roof-pour.jpg",
    alt: "יציקת תקרת בטון רטוב על זיון פלדה בתוספת בנייה — פרויקט של התחדשות בינוי ויזמות",
    width: 1200,
    height: 1600,
    hasRealImage: false,
    showcaseOnService: "extensions",
  },
  {
    slug: "mamad-foundation-rebar",
    title: "יסודות וזיון לתוספת ממ״ד",
    serviceType: "ממ״ד",
    location: "אזור המרכז",
    capturedAt: "2026-04",
    stage: "foundation",
    description:
      "ביסוס וזיון פלדה לתוספת ממ״ד צמוד לבית פרטי קיים. רשת זיון כפולה לפי חישוב קונסטרוקטור, יריעת איטום, והכנה ליציקת בטון מזוין.",
    image: "/projects/mamad-foundation-rebar.jpg",
    alt: "יסודות וזיון פלדה כפול לפני יציקה לתוספת ממ״ד צמוד לבית פרטי — התחדשות בינוי ויזמות",
    width: 1200,
    height: 1600,
    hasRealImage: false,
    showcaseOnService: "building-mamad",
  },
  {
    slug: "mamad-walls-cast",
    title: "ממ״ד צמוד — קירות בטון מזוין",
    serviceType: "ממ״ד",
    location: "אזור המרכז",
    capturedAt: "2026-04",
    stage: "walls",
    description:
      "תוספת ממ״ד צמוד לבית פרטי קיים: קירות בטון מזוין יצוקים בעובי תקני, זיון לתקרה מוכן, מיקום בין שני בתים בשכונה צפופה.",
    image: "/projects/mamad-walls-cast.jpg",
    alt: "קירות בטון מזוין יצוקים לתוספת ממ״ד צמוד עם זיון לתקרה בולט — פרויקט של התחדשות בינוי ויזמות",
    width: 1600,
    height: 900,
    hasRealImage: false,
    showcaseOnService: "room-reinforcement",
  },
];

export const featuredProjects = projects.slice(0, 3);
