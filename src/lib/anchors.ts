/**
 * Internal-link target registry.
 *
 * Single source of truth for the anchor + href + label triplets that feed
 * RelatedLinks, breadcrumbs, footers, and any contextual link rendering.
 *
 * URLs are organized by section in namespace objects below. As new pillar
 * sub-trees ship (TAMA 38, Chalufat Shaked, etc.), add a namespace object
 * for the section, then wire the entries into HREF_MAP. New LinkTarget
 * keys must be reflected in all four exported records below.
 */

export const PINUI_BINUI_HREFS = {
  pillar: "/pinui-binui",
  temurot: "/pinui-binui/temurot",
  chok67: "/pinui-binui/chok-67",
  kshishim: "/pinui-binui/kshishim",
  yorshim: "/pinui-binui/yorshim",
  eravut: "/pinui-binui/eravut",
  yazam: "/pinui-binui/yazam",
  sarvan: "/pinui-binui/sarvan",
  // Future: ownerAttorney,
  // zechuyot, madrich, misui — add here as each ships.
} as const;

export const ABOUT_HREFS = {
  ofekMazor: "/about/ofek-mazor",
  // Future: company, founders, partners — add here as each ships.
} as const;

export const MEMAD_HREFS = {
  bayitPrati: "/memad/bayit-prati",
  diraBekoma: "/memad/dira-bekoma",
  binyanMeshutaf: "/memad/binyan-meshutaf",
  binyanYashan: "/memad/binyan-yashan",
  komaElyona: "/memad/koma-elyona",
  tatKarkai: "/memad/tat-karkai",
} as const;

// Future: export const TAMA_38_HREFS = { ... };
// Future: export const CHALUFAT_SHAKED_HREFS = { ... };

export type LinkTarget =
  | "building-mamad"
  | "room-reinforcement"
  | "prefab-mamad"
  | "mamad-cost"
  | "mamad-process"
  | "home-front-command-approval"
  | "choosing-mamad-contractor"
  | "mamad-mistakes"
  | "compare-main"
  | "compare-tzamud"
  | "compare-rashum-hafer"
  | "contact"
  | "areas"
  | "pinui-binui"
  | "pinui-binui-temurot"
  | "pinui-binui-chok-67"
  | "pinui-binui-kshishim"
  | "pinui-binui-yorshim"
  | "pinui-binui-eravut"
  | "pinui-binui-yazam"
  | "pinui-binui-sarvan"
  | "memad-bayit-prati"
  | "memad-dira-bekoma"
  | "memad-binyan-meshutaf"
  | "ofek-mazor";

export const ANCHOR_VARIANTS: Record<LinkTarget, string[]> = {
  "building-mamad": [
    "בניית ממ״ד",
    "להקמת ממ״ד",
    "שירות בניית הממ״ד שלנו",
    "ממ״ד: מידע מלא",
    "בניית ממ״ד תקני",
    "הקמת חדר מוגן",
    "מידע על בניית ממ״ד",
    "בניית ממ״ד בבית פרטי",
  ],
  "room-reinforcement": [
    "מיגון חדר קיים",
    "חיזוק חדר קיים",
    "הסבת חדר למרחב מוגן",
    "שירות מיגון חדר",
    "מיגון לחדר קיים בבית",
    "פתרון מיגון חדר",
    "מיגון דירה קיימת",
  ],
  "prefab-mamad": [
    "ממ״ד מוכן",
    "ממ״ד טרומי",
    "יחידה ממוגנת מוכנה",
    "ממ״ד מוכן מהמפעל",
    "שירות הממ״ד הטרומי",
    "מידע על ממ״ד טרומי תקני",
    "פתרון ממ״ד מוכן",
  ],
  "mamad-cost": [
    "מחיר ממ״ד",
    "מדריך מחירי ממ״ד",
    "כמה עולה לבנות ממ״ד",
    "עלויות בניית ממ״ד",
    "למדריך המחירים",
    "טווחי מחיר לממ״ד",
    "פירוט עלויות ממ״ד",
    "מחירון ממ״ד: מדריך",
  ],
  "mamad-process": [
    "תהליך בניית ממ״ד",
    "איך בונים ממ״ד",
    "מדריך תהליך בניית ממ״ד",
    "שלבי בניית ממ״ד",
    "הדרך להקמת ממ״ד",
    "מבנה הפרויקט לבניית ממ״ד",
    "פירוט שלבי הממ״ד",
  ],
  "home-front-command-approval": [
    "אישורי פיקוד העורף",
    "מדריך אישור פקע״ר",
    "תהליך אישור פקע״ר לממ״ד",
    "איך מקבלים אישור פיקוד העורף",
    "אישור פקע״ר: מידע מלא",
    "התנהלות מול פיקוד העורף",
    "הגשה לפיקוד העורף",
  ],
  "choosing-mamad-contractor": [
    "איך בוחרים קבלן ממ״ד",
    "מדריך לבחירת קבלן ממ״ד",
    "בחירת קבלן לבניית ממ״ד",
    "מה לבדוק אצל קבלן ממ״ד",
    "קבלן ממ״ד: איך לבחור",
    "מדריך לבחירת קבלן מיגון",
    "שאלות לקבלן ממ״ד",
  ],
  "mamad-mistakes": [
    "טעויות בבניית ממ״ד",
    "10 טעויות נפוצות בממ״ד",
    "מה לא לעשות בבניית ממ״ד",
    "מלכודות בבניית ממ״ד",
    "טעויות לדעת לפני בניית ממ״ד",
    "איך להימנע מטעויות ממ״ד",
    "טעויות יקרות בבניית ממ״ד",
  ],
  "compare-main": [
    "השוואה: ממ״ד vs מיגון vs מיגונית",
    "מה מתאים לכם: ממ״ד, מיגון או מיגונית",
    "השוואת פתרונות מיגון",
    "מדריך השוואה בין הפתרונות",
    "השוואה טכנית בין שלושת הפתרונות",
    "איזה פתרון מיגון מתאים",
    "ממ״ד, מיגון או מיגונית: מה עדיף",
  ],
  "compare-tzamud": [
    "ממ״ד צמוד מול חיצוני",
    "השוואה: ממ״ד צמוד vs ממ״ד חיצוני",
    "מה עדיף: ממ״ד צמוד או חיצוני",
    "ממ״ד פנימי או חיצוני",
    "השוואה טכנית: צמוד vs חיצוני",
    "בין ממ״ד צמוד לממ״ד בחצר",
    "לבחור בין ממ״ד צמוד לחיצוני",
  ],
  "compare-rashum-hafer": [
    "קבלן רשום מול חאפר",
    "השוואה: קבלן רשום vs חאפר",
    "איך לזהות חאפר",
    "למה לעבוד רק עם קבלן רשום",
    "סימני אזהרה לחאפר בפרויקט",
    "ההבדל בין קבלן רשום לחאפר",
    "דגלים אדומים בבחירת קבלן ממ״ד",
  ],
  "contact": [
    "צרו קשר",
    "השאירו פרטים",
    "לקבלת הצעת מחיר",
    "דברו עם מומחה",
    "ליצירת קשר",
    "לשיחת ייעוץ ראשונית",
    "פנייה לצוות הפרויקט",
  ],
  "areas": [
    "אזורי שירות",
    "כל האזורים",
    "היכן אנחנו עובדים",
    "מפת אזורי שירות",
    "ערים וישובים בהם אנחנו פועלים",
    "אזורי פעילות",
    "מצא את העיר שלך",
  ],
  "pinui-binui": [
    "מדריך פינוי בינוי המלא",
    "מדריך פינוי בינוי 2026",
    "פינוי בינוי: המדריך לבעלי דירות",
    "כל מה שצריך לדעת על פינוי בינוי",
    "המדריך לבעלי דירות במתחם",
    "מסלול ההתחדשות העירונית",
    "פינוי בינוי בישראל",
  ],
  "pinui-binui-temurot": [
    "מדריך מפורט על תמורות בפינוי בינוי",
    "תמורות בפינוי בינוי: כמה מטר ומה כלול",
    "מה מקבלים בפינוי בינוי",
    "התמורה הסטנדרטית בפינוי בינוי",
    "כמה דירות, כמה מטר ומה הסטנדרט",
    "תמורות וחישובים בפינוי בינוי",
    "מדריך התמורות",
  ],
  "pinui-binui-chok-67": [
    "מדריך מפורט על חוק 67%",
    "חוק 67% בפינוי בינוי",
    "תיקון 80% ל-67% בפינוי בינוי",
    "רוב נדרש בפינוי בינוי",
    "דייר סרבן בפינוי בינוי",
    "מה השתנה בחוק פינוי בינוי",
    "ההבדל בין רף לתביעה לרף לביצוע",
  ],
  "pinui-binui-kshishim": [
    "מדריך מפורט על זכויות קשישים",
    "זכויות קשישים בפינוי בינוי",
    "פינוי בינוי לקשישים",
    "זכויות גיל 70+ בפינוי בינוי",
    "זכויות גיל 75+ בפינוי בינוי",
    "חלופות לקשיש בהסכם פינוי בינוי",
    "הגנות קשישים בהסכם",
  ],
  "pinui-binui-yorshim": [
    "ירושה דירה בפינוי בינוי",
    "מדריך ירושה ויורשים בפינוי בינוי",
    "מלכוד היורשים בפינוי בינוי",
    "פטור מס שבח ליורשים",
    "זכויות יורשים בפינוי בינוי",
    "סעיף יורשים בהסכם פינוי בינוי",
    "מה לעשות עם דירה שירשתי בפינוי בינוי",
  ],
  "pinui-binui-eravut": [
    "ערבויות בפינוי בינוי",
    "מדריך ערבויות בפינוי בינוי",
    "ערבות חוק מכר",
    "ערבויות בנקאיות בפרויקט פינוי בינוי",
    "סוגי ערבויות שצריך לדרוש",
    "מה לבדוק בערבויות פינוי בינוי",
    "ערבויות לדיירים בפרויקט התחדשות",
  ],
  "pinui-binui-yazam": [
    "איך בוחרים יזם פינוי בינוי",
    "מדריך לבחירת יזם פינוי בינוי",
    "12 שאלות ליזם פינוי בינוי",
    "דגלים אדומים יזם פינוי בינוי",
    "השוואת יזמים פינוי בינוי",
    "בדיקת יזם פינוי בינוי",
    "איך מזהים יזם בעייתי",
  ],
  "pinui-binui-sarvan": [
    "דייר סרבן בפינוי בינוי",
    "מדריך דייר סרבן",
    "הליך תביעה דייר סרבן",
    "כונס נכסים פינוי בינוי",
    "סבירות הסירוב בפינוי בינוי",
    "מה קורה אם דייר לא חותם",
    "הגנות לדייר סרבן",
  ],
  "memad-bayit-prati": [
    "ממ״ד לבית פרטי",
    "מדריך ממ״ד לבית פרטי",
    "בניית ממ״ד בבית פרטי",
    "כמה עולה ממ״ד בבית פרטי",
    "ממ״ד צמוד או חיצוני בבית פרטי",
    "מסלול פטור ממ״ד בית פרטי",
    "אפשרויות ממ״ד לבית צמוד קרקע",
  ],
  "memad-dira-bekoma": [
    "ממ״ד בדירה בקומה",
    "ממ״ד בדירה",
    "ממ״ד בקומה גבוהה",
    "ממ״ד בדירת קומה שנייה",
    "עלות ממ״ד בדירה",
    "פתרון מיגון לדירה בקומה",
    "ממ״ד או שיפור מיגון בדירה",
  ],
  "memad-binyan-meshutaf": [
    "ממ״ד בבניין משותף",
    "ממ״ד משותף לבניין",
    "ממ״ד דירתי או משותף",
    "הסכמת דיירים ממ״ד",
    "ועד בית ממ״ד",
    "מימון ממ״ד בבניין",
    "חלוקת עלויות ממ״ד",
  ],
  "ofek-mazor": [
    "אופק מזור, מנכ״ל ומייסד",
    "אופק מזור: מנכ״ל ומייסד התחדשות",
    "פרופיל מקצועי של אופק מזור",
    "על אופק מזור, מנכ״ל החברה",
    "אופק מזור — המנכ״ל",
    "אודות אופק מזור",
    "מנכ״ל החברה: אופק מזור",
  ],
};

// Deterministic rotation based on a seed (e.g. the source page slug) so anchors
// look natural but don't repeat on the same page.
export function pickAnchor(
  target: LinkTarget,
  seed: string,
  usedIndices: Set<number> = new Set()
): string {
  const pool = ANCHOR_VARIANTS[target];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  let idx = Math.abs(hash) % pool.length;
  let attempts = 0;
  while (usedIndices.has(idx) && attempts < pool.length) {
    idx = (idx + 1) % pool.length;
    attempts++;
  }
  usedIndices.add(idx);
  return pool[idx];
}

export const HREF_MAP: Record<LinkTarget, string> = {
  "building-mamad": "/services/building-mamad",
  "room-reinforcement": "/services/room-reinforcement",
  "prefab-mamad": "/services/prefab-mamad",
  "mamad-cost": "/guides/mamad-cost",
  "mamad-process": "/guides/mamad-process",
  "home-front-command-approval": "/guides/home-front-command-approval",
  "choosing-mamad-contractor": "/guides/choosing-mamad-contractor",
  "mamad-mistakes": "/guides/mamad-mistakes",
  "compare-main": "/compare/mamad-vs-miggun-vs-migunit",
  "compare-tzamud": "/compare/mamad-tzamud-vs-hitzoni",
  "compare-rashum-hafer": "/compare/katlan-rashum-vs-hafer",
  "contact": "/contact",
  "areas": "/areas",
  "pinui-binui": PINUI_BINUI_HREFS.pillar,
  "pinui-binui-temurot": PINUI_BINUI_HREFS.temurot,
  "pinui-binui-chok-67": PINUI_BINUI_HREFS.chok67,
  "pinui-binui-kshishim": PINUI_BINUI_HREFS.kshishim,
  "pinui-binui-yorshim": PINUI_BINUI_HREFS.yorshim,
  "pinui-binui-eravut": PINUI_BINUI_HREFS.eravut,
  "pinui-binui-yazam": PINUI_BINUI_HREFS.yazam,
  "pinui-binui-sarvan": PINUI_BINUI_HREFS.sarvan,
  "memad-bayit-prati": MEMAD_HREFS.bayitPrati,
  "memad-dira-bekoma": MEMAD_HREFS.diraBekoma,
  "memad-binyan-meshutaf": MEMAD_HREFS.binyanMeshutaf,
  "ofek-mazor": ABOUT_HREFS.ofekMazor,
};

// Short one-line summaries shown on RelatedLinks cards.
export const TARGET_SUMMARY: Record<LinkTarget, string> = {
  "building-mamad":
    "ממ״ד חדש צמוד לבית או בתוך המבנה. תכנון, אישורי פקע״ר וביצוע מלא.",
  "room-reinforcement":
    "חיזוק חדר קיים לרמת הגנה גבוהה. פתרון מהיר ומשתלם לבתים ודירות.",
  "prefab-mamad":
    "ממ״ד טרומי מאושר פקע״ר, יחידה ממוגנת תקנית המגיעה מוכנה מהמפעל.",
  "mamad-cost":
    "מה משפיע על המחיר, מה כלול ואיך משווים הצעות נכון.",
  "mamad-process":
    "שלב אחר שלב, מהסיור הראשון ועד מסירת המפתח.",
  "home-front-command-approval":
    "מסלולי רישוי, מסמכים נדרשים וזמני אישור פיקוד העורף.",
  "choosing-mamad-contractor":
    "עשר שאלות שחובה לשאול, דגלים אדומים ומה לבדוק ברישיונות.",
  "mamad-mistakes":
    "טעויות נפוצות שמייקרות את הפרויקט, ואיך להימנע מהן.",
  "compare-main":
    "השוואה טכנית מלאה בין ממ״ד, מיגון חדר ומיגונית, כולל עלות וזמן.",
  "compare-tzamud":
    "מה ההבדל בין ממ״ד צמוד לבית לבין ממ״ד חיצוני בחצר.",
  "compare-rashum-hafer":
    "קבלן רשום מול חאפר: איך לזהות, מה לבדוק ולמה זה קריטי.",
  "contact":
    "השאירו פרטים וחזרנו אליכם תוך שעות עם הצעה מותאמת.",
  "areas":
    "רשימת הערים והישובים שבהם אנחנו פועלים ברחבי הארץ.",
  "pinui-binui":
    "מסלול, חוק 67%, תמורות, זכויות דיירים ולוח זמנים אמיתי לבעלי דירות.",
  "pinui-binui-temurot":
    "כמה מטר, חניה, מחסן, פיצוי כספי ושכר דירה לתקופת הביניים.",
  "pinui-binui-chok-67":
    "מה השתנה מ-80% ל-67%, ההבדל בין רף לתביעה לרף לביצוע, וההגנות שנותרו לדייר.",
  "pinui-binui-kshishim":
    "זכויות גיל 70+/75+, חלופות חובה בהסכם, וטעויות נפוצות שעולות יקר למשפחות.",
  "pinui-binui-yorshim":
    "מלכוד היורשים, נייר העמדה של רשות המסים, וסעיפי הסכם שמגנים על זכויות יורשים.",
  "pinui-binui-eravut":
    "ערבות חוק מכר, ערבויות בנקאיות לשלבי בנייה, שכר דירה ומסירה, ומה אסור לקבל.",
  "pinui-binui-yazam":
    "12 שאלות לפני בחירה, 8 דגלים אדומים, השוואת הצעות, ובדיקת רקע על יזם.",
  "pinui-binui-sarvan":
    "ההליך המשפטי, סירוב סביר מול בלתי סביר, הגנות הדייר, וכונס נכסים.",
  "memad-bayit-prati":
    "ארבעה סוגי ממ״ד לבית פרטי, מחירון מפורט, מסלול הפטור, ושלבי הביצוע מהתכנון ועד המסירה.",
  "memad-dira-bekoma":
    "שלושה פתרונות מיגון בדירה בקומה, מתי כל אחד מתאים, עלויות, אישורים, והשפעה על המבנה הקיים.",
  "memad-binyan-meshutaf":
    "השוואת ממ״ד דירתי לעומת משותף, חלוקת עלויות, הסכמת דיירים, ומימון לבניין של 2-8 דיירים.",
  "ofek-mazor":
    "פרופיל מקצועי של אופק מזור, מנכ״ל ומייסד התחדשות בינוי ויזמות.",
};

export const TARGET_LABEL: Record<LinkTarget, string> = {
  "building-mamad": "בניית ממ״ד",
  "room-reinforcement": "מיגון חדר קיים",
  "prefab-mamad": "ממ״ד מוכן",
  "mamad-cost": "מחיר ממ״ד",
  "mamad-process": "תהליך בניית ממ״ד",
  "home-front-command-approval": "אישורי פיקוד העורף",
  "choosing-mamad-contractor": "בחירת קבלן ממ״ד",
  "mamad-mistakes": "טעויות בבניית ממ״ד",
  "compare-main": "השוואת הפתרונות",
  "compare-tzamud": "ממ״ד צמוד vs חיצוני",
  "compare-rashum-hafer": "קבלן רשום vs חאפר",
  "contact": "צור קשר",
  "areas": "אזורי שירות",
  "pinui-binui": "פינוי בינוי",
  "pinui-binui-temurot": "תמורות בפינוי בינוי",
  "pinui-binui-chok-67": "חוק 67% בפינוי בינוי",
  "pinui-binui-kshishim": "זכויות קשישים בפינוי בינוי",
  "pinui-binui-yorshim": "ירושה דירה בפינוי בינוי",
  "pinui-binui-eravut": "ערבויות בפינוי בינוי",
  "pinui-binui-yazam": "בחירת יזם פינוי בינוי",
  "pinui-binui-sarvan": "דייר סרבן בפינוי בינוי",
  "memad-bayit-prati": "ממ״ד לבית פרטי",
  "memad-dira-bekoma": "ממ״ד בדירה בקומה",
  "memad-binyan-meshutaf": "ממ״ד בבניין משותף",
  "ofek-mazor": "אופק מזור, מנכ״ל ומייסד",
};
