import { site } from "@/lib/site";

/**
 * /llms.txt manifest.
 *
 * Single source of truth for the AI-search-engine authority manifest
 * served at https://hithadshut.co.il/llms.txt. The route handler at
 * src/app/llms.txt/route.ts renders this structure as plain text per
 * the llmstxt.org spec.
 *
 * When a new authority page ships, add it here in the same launch
 * commit. Pages absent from this manifest are still in the sitemap;
 * they're just not surfaced to AI crawlers as part of the curated
 * authority view.
 */

export type LlmsManifestItem = {
  /** Absolute URL or path. Paths are absolutized against site.url. */
  url: string;
  /** Hebrew link text. */
  label: string;
  /** Hebrew one-line description. Optional; included after a colon when present. */
  description?: string;
};

export type LlmsManifestSection = {
  /** Hebrew H2 heading (rendered as "## ..."). */
  title: string;
  items: LlmsManifestItem[];
};

export type LlmsManifest = {
  /** Hebrew H1 (rendered as "# ..."). */
  title: string;
  /** Hebrew blockquote summary (rendered as "> ..."). */
  summary: string;
  sections: LlmsManifestSection[];
};

export const llmsManifest: LlmsManifest = {
  title: "התחדשות בינוי ויזמות",
  summary:
    "חברת בנייה ישראלית המתמחה בבניית ממ״ד תקני, שיפור מיגון, ובהמשך התחדשות עירונית. ליווי מקצועי לבעלי דירות מהתכנון עד מסירת המפתח. נוסדה ומובלת על ידי אופק מזור, מנכ״ל ומייסד.",
  sections: [
    {
      title: "שירותים מרכזיים",
      items: [
        {
          url: "/services/building-mamad",
          label: "בניית ממ״ד",
          description: "בניית ממ״ד תקני בבית פרטי או דירה לפי תקן פיקוד העורף.",
        },
        {
          url: "/services/room-reinforcement",
          label: "שיפור מיגון חדר קיים",
          description:
            "חיזוק חדר קיים כפתרון מיגון לבניינים שבהם בניית ממ״ד אינה אפשרית.",
        },
        {
          url: "/services/prefab-mamad",
          label: "ממ״ד יביל / טרומי",
          description: "יחידה ממוגנת ממפעל עם אישור פיקוד העורף ייעודי לכתובת.",
        },
        {
          url: "/services/private-construction",
          label: "בנייה פרטית",
          description: "בנייה של בתים פרטיים מהמגרש עד המפתח.",
        },
        {
          url: "/services/renovations",
          label: "שיפוצים",
          description: "שיפוצים מקיפים לדירות ובתים.",
        },
        {
          url: "/services/extensions",
          label: "הרחבות ותוספות",
          description: "תוספות בנייה, חדרים, יחידות דיור.",
        },
      ],
    },
    {
      title: "התחדשות עירונית",
      items: [
        {
          url: "/pinui-binui",
          label: "פינוי בינוי 2026 — המדריך המלא",
          description:
            "המסלול, חוק 67%, תמורות, זכויות דיירים בני 70+, ולוח הזמנים האמיתי.",
        },
        {
          url: "/pinui-binui/temurot",
          label: "תמורות בפינוי בינוי 2026 — כמה מטר, חניה, פיצוי כספי",
          description:
            "מה כולל סטנדרט תמורות, מה מעבר לסטנדרט, ומה אסור לוותר עליו בהסכם.",
        },
        {
          url: "/pinui-binui/chok-67",
          label: "חוק 67% בפינוי בינוי: מה זה אומר עליכם",
          description:
            "רוב נדרש, דייר סרבן, ההבדל בין רף לתביעה לרף לביצוע, וההגנות שנותרו לדייר.",
        },
        {
          url: "/pinui-binui/kshishim",
          label: "זכויות קשישים בפינוי בינוי: גיל 70+, 75+, ומה המשמעות",
          description:
            "החלופות החובה (דיור מוגן, דירה חלופית, שתי דירות), איך לעגן בהסכם, וטעויות נפוצות.",
        },
        {
          url: "/pinui-binui/yorshim",
          label: "ירושת דירה בפינוי בינוי 2026",
          description:
            "מלכוד היורשים, נייר העמדה החדש של רשות המסים, סעיפים שחובה לעגן בהסכם, ופטור ממס שבח ליורשים.",
        },
        {
          url: "/pinui-binui/eravut",
          label: "ערבויות בפינוי בינוי 2026",
          description:
            "ערבות חוק מכר, ערבויות בנקאיות לשלבי בנייה, ערבות שכר דירה ומסירה, ומה אסור לקבל.",
        },
        {
          url: "/pinui-binui/yazam",
          label: "איך בוחרים יזם פינוי בינוי 2026",
          description:
            "12 שאלות שחובה לשאול, 8 דגלים אדומים, השוואת הצעות, ובדיקת רקע על יזם.",
        },
        {
          url: "/pinui-binui/sarvan",
          label: "דייר סרבן בפינוי בינוי 2026",
          description:
            "ההליך המשפטי, סירוב סביר מול בלתי סביר, הגנות לדייר, כונס נכסים, וזכויות גיל בתביעה.",
        },
        {
          url: "/tama-38",
          label: "תמ״א 38 ב-2026",
          description:
            "סוף תוכנית המתאר, ההבדל בין 38/1 ל-38/2, מצב הפרויקטים, ואלטרנטיבות.",
        },
        {
          url: "/tama-38/pkia-2026",
          label: "תמ״א 38 פוקעת ב-2026",
          description:
            "מה דייר עושה עכשיו: לוח זמנים, בדיקת סטטוס, שלוש אפשרויות פעולה.",
        },
        {
          url: "/tama-38/sug-1",
          label: "תמ״א 38/1 (חיזוק)",
          description:
            "מסלול חיזוק בלי הריסה, רוב 66%, מצב המסלול בפוקעת תמ״א 38.",
        },
        {
          url: "/tama-38/sug-2",
          label: "תמ״א 38/2 (הריסה ובנייה)",
          description:
            "מסלול הריסה ובנייה מחדש, רוב 80%, וההבדלים מחלופת שקד.",
        },
        {
          url: "/chalufat-shaked",
          label: "חלופת שקד 2026",
          description:
            "תיקון 139 — המסלול שמחליף את תמ״א 38/2, רוב 80%, וזכויות בנייה עד 400%.",
        },
      ],
    },
    {
      title: "ממ״ד עומק — סוגים ותרחישים",
      items: [
        {
          url: "/memad/bayit-prati",
          label: "ממ״ד לבית פרטי 2026",
          description:
            "ארבעה סוגי ממ״ד (צמוד פנימי, חיצוני, גג, תת-קרקעי), מחירון 160-280 אלף ש״ח, ומסלול הפטור.",
        },
        {
          url: "/memad/dira-bekoma",
          label: "ממ״ד בדירה בקומה 2026",
          description:
            "שלושה פתרונות מיגון בדירה בקומה, אישורים נדרשים, וההשפעה על המבנה הקיים.",
        },
        {
          url: "/memad/binyan-meshutaf",
          label: "ממ״ד בבניין משותף 2026",
          description:
            "ממ״ד דירתי לעומת משותף, חלוקת עלויות, הסכמת דיירים, ומימון לבניין של 2-8 דיירים.",
        },
        {
          url: "/memad/binyan-yashan",
          label: "ממ״ד לבניין ישן 2026",
          description:
            "ארבעה פתרונות לבניין מלפני 1992: ממ״ד תקני, שיפור מיגון, ממ״ד יביל, או התחדשות עירונית.",
        },
        {
          url: "/memad/koma-elyona",
          label: "ממ״ד בקומה עליונה 2026",
          description:
            "ממ״ד על הגג ובפנטהאוז: חיזוק מבנה, משאבת בטון, אישורים, ועלויות 200-280 אלף ש״ח.",
        },
        {
          url: "/memad/tat-karkai",
          label: "ממ״ד תת-קרקעי 2026",
          description:
            "ממ״ד במרתף או תת-קרקעי: רמת הגנה גבוהה, שיקולי מי תהום, איטום, ואוורור משופר.",
        },
      ],
    },
    {
      title: "מדריכי סמכות",
      items: [
        {
          url: "/guides/mamad-cost",
          label: "מחיר ממ״ד 2026",
          description:
            "טווחי מחירים מבוססי שוק, פירוט רכיבים, איך להשוות הצעות.",
        },
        {
          url: "/guides/mamad-process",
          label: "תהליך בניית ממ״ד",
          description: "שלבי הפרויקט מהייעוץ הראשוני עד מסירת המפתח.",
        },
        {
          url: "/guides/home-front-command-approval",
          label: "אישורי פיקוד העורף",
          description: "מסמכים, זמני אישור, טעויות שגורמות לעיכוב.",
        },
        {
          url: "/guides/choosing-mamad-contractor",
          label: "בחירת קבלן ממ״ד",
          description: "10 שאלות שחובה לשאול, דגלים אדומים, רישיון וביטוח.",
        },
        {
          url: "/guides/mamad-mistakes",
          label: "10 טעויות נפוצות בבניית ממ״ד",
          description: "טעויות שמייקרות את הפרויקט.",
        },
        {
          url: "/guides/mamad-permit-exemption-2026",
          label: "מסלול פטור מהיתר 2026",
          description: "הוראת חרבות ברזל, מי זכאי, איך מגישים.",
        },
        {
          url: "/guides/mamad-vs-shelter",
          label: "ממ״ד מול מקלט בבניין",
          description: "השוואה ומה עדיף.",
        },
        {
          url: "/guides/mamad-air-filter-system",
          label: "מערכת אוורור וסינון",
          description: "תקן סינון, NBC, דרישות באזורי קו קדמי.",
        },
      ],
    },
    {
      title: "השוואות התחדשות עירונית",
      items: [
        {
          url: "/hashvaa/pinui-vs-tama",
          label: "פינוי בינוי מול תמ״א 38 2026",
          description:
            "ההבדלים בין מתחם לבניין יחיד, רוב, זמן, תמורה, וההכרעה ב-2026.",
        },
        {
          url: "/hashvaa/shaked-vs-tama",
          label: "חלופת שקד מול תמ״א 38 2026",
          description:
            "מסגרת חוקית, זכויות בנייה, תהליך אישור, ומה דייר עושה במעבר.",
        },
        {
          url: "/hashvaa/migun-vs-pinui",
          label: "שיפור מיגון מול פינוי בינוי 2026",
          description:
            "שתי גישות שונות: מתי כל פתרון מתאים, מסגרת החלטה, ומה לבדוק.",
        },
      ],
    },
    {
      title: "עמודי השוואה",
      items: [
        {
          url: "/compare/mamad-vs-miggun-vs-migunit",
          label: "ממ״ד מול שיפור מיגון מול מיגונית",
          description:
            "מה ההבדל המקצועי, מתי כל פתרון מתאים, ומה אינו פתרון לבית פרטי.",
        },
        {
          url: "/compare/mamad-tzamud-vs-hitzoni",
          label: "ממ״ד צמוד מול חיצוני",
          description: "קריטריונים לבחירה.",
        },
        {
          url: "/compare/katlan-rashum-vs-hafer",
          label: "קבלן רשום מול חאפר",
          description: "ההבדל המשפטי והמעשי.",
        },
      ],
    },
    {
      title: "אזורי שירות מובחנים",
      items: [
        {
          url: "/areas/ramat-gan",
          label: "רמת גן",
          description: "פרויקטי בנייה ושיפור מיגון בבניינים ותיקים.",
        },
        {
          url: "/areas/givatayim",
          label: "גבעתיים",
          description: "פרויקטים בבניינים בני 50+ שנה במסגרת תוכנית רע/2000.",
        },
        {
          url: "/areas/herzliya",
          label: "הרצליה",
          description: "ממ״ד בווילות פרטיות בהרצליה פיתוח ובמרכז העיר.",
        },
        {
          url: "/areas/modiin",
          label: "מודיעין",
          description:
            "שדרוג מיגון בבניינים מהדור הראשון של העיר ובמודיעין-מכבים-רעות הוותיקה.",
        },
      ],
    },
    {
      title: "אודות וצור קשר",
      items: [
        {
          url: "/about/ofek-mazor",
          label: "אופק מזור, מנכ״ל ומייסד",
          description: "פרופיל מקצועי.",
        },
        {
          url: "/about",
          label: "אודות החברה",
          description: "מודל העבודה והאחריות.",
        },
        {
          url: "/contact",
          label: "צור קשר",
          description: "פנייה לייעוץ ראשוני ללא עלות.",
        },
      ],
    },
    {
      title: "Optional",
      items: [
        {
          url: "/sitemap.xml",
          label: "Sitemap",
          description: "רשימה מלאה של כל העמודים.",
        },
      ],
    },
  ],
};

function absolutize(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${site.url}${url.startsWith("/") ? url : `/${url}`}`;
}

/** Render the manifest as plain text per the llmstxt.org spec. */
export function renderLlmsManifest(manifest: LlmsManifest = llmsManifest): string {
  const lines: string[] = [];
  lines.push(`# ${manifest.title}`);
  lines.push("");
  lines.push(`> ${manifest.summary}`);
  lines.push("");
  for (const section of manifest.sections) {
    lines.push(`## ${section.title}`);
    for (const item of section.items) {
      const linkLine = item.description
        ? `- [${item.label}](${absolutize(item.url)}): ${item.description}`
        : `- [${item.label}](${absolutize(item.url)})`;
      lines.push(linkLine);
    }
    lines.push("");
  }
  return lines.join("\n").replace(/\n+$/, "\n");
}
