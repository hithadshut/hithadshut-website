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
  machshvonTemurot: "/pinui-binui/machshvon-temurot",
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

export const TAMA38_HREFS = {
  pillar: "/tama-38",
  pkia: "/tama-38/pkia-2026",
  sug1: "/tama-38/sug-1",
  sug2: "/tama-38/sug-2",
} as const;

export const SHAKED_HREFS = {
  pillar: "/chalufat-shaked",
} as const;

export const HASHVAA_HREFS = {
  pinuiVsTama: "/hashvaa/pinui-vs-tama",
  shakedVsTama: "/hashvaa/shaked-vs-tama",
  migunVsPinui: "/hashvaa/migun-vs-pinui",
} as const;

export const MADRICHIM_HREFS = {
  sofTama: "/madrichim/sof-tama-38-ma-laasot",
  shealotYazam: "/madrichim/10-shealot-le-yazam",
  eravutHevdel: "/madrichim/eravut-bankait-vs-chok-mehor",
  shipurMigun: "/madrichim/matey-shipur-migun-adif",
  yorshim: "/madrichim/zechut-baalut-vs-zechut-yorshim",
  yazamim: "/madrichim/hashvaa-yazamim-mobililim-2026",
} as const;

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
  | "pinui-binui-machshvon"
  | "memad-bayit-prati"
  | "memad-dira-bekoma"
  | "memad-binyan-meshutaf"
  | "memad-binyan-yashan"
  | "memad-koma-elyona"
  | "memad-tat-karkai"
  | "tama-38"
  | "tama-38-pkia"
  | "tama-38-sug-1"
  | "tama-38-sug-2"
  | "chalufat-shaked"
  | "hashvaa-pinui-vs-tama"
  | "hashvaa-shaked-vs-tama"
  | "hashvaa-migun-vs-pinui"
  | "madrichim-sof-tama"
  | "madrichim-shealot-yazam"
  | "madrichim-eravut-hevdel"
  | "madrichim-shipur-migun"
  | "madrichim-yorshim"
  | "madrichim-yazamim"
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
  "pinui-binui-machshvon": [
    "מחשבון פינוי בינוי",
    "בדיקת הצעה פינוי בינוי",
    "האם ההצעה הוגנת",
    "השוואת הצעות פינוי בינוי",
    "כלי הערכה לפינוי בינוי",
    "כדאיות פינוי בינוי",
    "הערכת תמורה פינוי בינוי",
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
  "memad-binyan-yashan": [
    "ממ״ד לבניין ישן",
    "הוספת ממ״ד לבניין ישן",
    "ממ״ד בבניין מאוכלס",
    "בעיות קונסטרוקציה ממ״ד",
    "שיפור מיגון בבניין ישן",
    "תמ״א 38 או ממ״ד",
    "פינוי בינוי או ממ״ד",
  ],
  "memad-koma-elyona": [
    "ממ״ד בקומה עליונה",
    "ממ״ד על הגג",
    "ממ״ד בפנטהאוז",
    "ממ״ד עילי",
    "תוספת קומה ממ״ד",
    "אישור ממ״ד גג",
    "עלות ממ״ד עליון",
  ],
  "memad-tat-karkai": [
    "ממ״ד תת-קרקעי",
    "ממ״ד במרתף",
    "ממ״ד תחת הקרקע",
    "הגנה תת-קרקעית",
    "עלות ממ״ד תת-קרקעי",
    "איטום ממ״ד תת-קרקעי",
    "ממ״ד עם מסת קרקע מעל",
  ],
  "tama-38": [
    "תמ״א 38",
    "מדריך תמ״א 38",
    "תמ״א 38 ב-2026",
    "מה זה תמ״א 38",
    "סוף תמ״א 38",
    "תמ״א 38 פוקעת",
    "תוכנית מתאר תמ״א 38",
  ],
  "tama-38-pkia": [
    "תמ״א 38 פוקעת",
    "סוף תמ״א 38 2026",
    "מה לעשות לפני פוקעת תמ״א 38",
    "פוקעת תמ״א 38 מאי 2026",
    "ביטול תמ״א 38",
    "פרויקט תמ״א 38 פעיל",
    "מצב פרויקטים אחרי פוקעה",
  ],
  "tama-38-sug-1": [
    "תמ״א 38 1",
    "תמ״א 38 חיזוק",
    "תמ״א 38 ללא הריסה",
    "רוב 66% תמ״א 38",
    "תמ״א 38 1 שלבים",
    "עלות תמ״א 38 1",
    "מסלול חיזוק תמ״א 38",
  ],
  "tama-38-sug-2": [
    "תמ״א 38 2",
    "תמ״א 38 הריסה ובנייה",
    "תמ״א 38 2 רוב 80%",
    "ביצוע תמ״א 38 2",
    "תמ״א 38 2 או חלופת שקד",
    "תמ״א 38 2 או פינוי בינוי",
    "מסלול הריסה ובנייה",
  ],
  "chalufat-shaked": [
    "חלופת שקד",
    "תיקון 139 חוק התכנון והבנייה",
    "חלופת שקד 2026",
    "חלופת שקד מול תמ״א 38",
    "חלופת שקד עלות",
    "חלופת שקד תהליך",
    "חלופת שקד או פינוי בינוי",
  ],
  "hashvaa-pinui-vs-tama": [
    "פינוי בינוי מול תמ״א 38",
    "השוואה פינוי בינוי תמ״א 38",
    "מה ההבדל בין פינוי בינוי לתמ״א 38",
    "מה כדאי פינוי בינוי או תמ״א 38",
    "מתחם או בניין יחיד",
    "מסלולי התחדשות עירונית",
  ],
  "hashvaa-shaked-vs-tama": [
    "חלופת שקד מול תמ״א 38",
    "השוואה חלופת שקד תמ״א",
    "מה ההבדל בין שקד לתמ״א",
    "אלטרנטיבה לתמ״א 38",
    "תיקון 139 או תמ״א 38",
  ],
  "hashvaa-migun-vs-pinui": [
    "שיפור מיגון מול פינוי בינוי",
    "מתי מיגון מספיק",
    "מתי צריך פינוי בינוי",
    "השוואה מיגון פינוי בינוי",
  ],
  "madrichim-sof-tama": [
    "סוף תמ״א 38",
    "מה דייר עושה אחרי תמ״א 38",
    "פרויקט תמ״א 38 ב-2026",
    "אלטרנטיבה לתמ״א 38",
  ],
  "madrichim-shealot-yazam": [
    "10 שאלות ליזם פינוי בינוי",
    "שאלות ליזם",
    "מה לשאול יזם",
    "מדריך שאלות לבחירת יזם",
  ],
  "madrichim-eravut-hevdel": [
    "ערבות בנקאית מול חוק מכר",
    "הבדל בין ערבויות",
    "סוגי ערבויות בפרויקט",
  ],
  "madrichim-shipur-migun": [
    "מתי שיפור מיגון עדיף",
    "שיפור מיגון או ממ״ד",
    "השוואת פתרונות מיגון",
  ],
  "madrichim-yorshim": [
    "זכות בעלות זכות יורשים",
    "ירושה בפינוי בינוי",
    "זכויות יורשים בנדל״ן",
  ],
  "madrichim-yazamim": [
    "השוואת יזמי פינוי בינוי",
    "יזמים מובילים בישראל",
    "מסגרת להערכת יזמים",
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
  "pinui-binui-machshvon": PINUI_BINUI_HREFS.machshvonTemurot,
  "memad-bayit-prati": MEMAD_HREFS.bayitPrati,
  "memad-dira-bekoma": MEMAD_HREFS.diraBekoma,
  "memad-binyan-meshutaf": MEMAD_HREFS.binyanMeshutaf,
  "memad-binyan-yashan": MEMAD_HREFS.binyanYashan,
  "memad-koma-elyona": MEMAD_HREFS.komaElyona,
  "memad-tat-karkai": MEMAD_HREFS.tatKarkai,
  "tama-38": TAMA38_HREFS.pillar,
  "tama-38-pkia": TAMA38_HREFS.pkia,
  "tama-38-sug-1": TAMA38_HREFS.sug1,
  "tama-38-sug-2": TAMA38_HREFS.sug2,
  "chalufat-shaked": SHAKED_HREFS.pillar,
  "hashvaa-pinui-vs-tama": HASHVAA_HREFS.pinuiVsTama,
  "hashvaa-shaked-vs-tama": HASHVAA_HREFS.shakedVsTama,
  "hashvaa-migun-vs-pinui": HASHVAA_HREFS.migunVsPinui,
  "madrichim-sof-tama": MADRICHIM_HREFS.sofTama,
  "madrichim-shealot-yazam": MADRICHIM_HREFS.shealotYazam,
  "madrichim-eravut-hevdel": MADRICHIM_HREFS.eravutHevdel,
  "madrichim-shipur-migun": MADRICHIM_HREFS.shipurMigun,
  "madrichim-yorshim": MADRICHIM_HREFS.yorshim,
  "madrichim-yazamim": MADRICHIM_HREFS.yazamim,
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
  "pinui-binui-machshvon":
    "כלי הערכה אינטראקטיבי לבדיקת הצעת יזם — תוספת מ״ר, חניה, מחסן, פיצוי, וזכויות גיל.",
  "memad-bayit-prati":
    "ארבעה סוגי ממ״ד לבית פרטי, מחירון מפורט, מסלול הפטור, ושלבי הביצוע מהתכנון ועד המסירה.",
  "memad-dira-bekoma":
    "שלושה פתרונות מיגון בדירה בקומה, מתי כל אחד מתאים, עלויות, אישורים, והשפעה על המבנה הקיים.",
  "memad-binyan-meshutaf":
    "השוואת ממ״ד דירתי לעומת משותף, חלוקת עלויות, הסכמת דיירים, ומימון לבניין של 2-8 דיירים.",
  "memad-binyan-yashan":
    "ארבעה פתרונות לבניין מלפני 1992: ממ״ד תקני, שיפור מיגון, ממ״ד יביל, או התחדשות עירונית.",
  "memad-koma-elyona":
    "ממ״ד על הגג ובפנטהאוז: חיזוק מבנה, משאבת בטון, אישורים, ולוגיסטיקה בגובה.",
  "memad-tat-karkai":
    "ממ״ד במרתף או תת-קרקעי: רמת הגנה גבוהה, שיקולי מי תהום, איטום, ואוורור משופר.",
  "tama-38":
    "תמ״א 38 ב-2026: היסטוריה, ההבדל בין 38/1 ל-38/2, מצב הפרויקטים, ולוח הזמנים של הפוקעה.",
  "tama-38-pkia":
    "תמ״א 38 פוקעת מאי 2026: מה הסטטוס של פרויקטים פעילים, ומה דייר צריך לעשות עכשיו.",
  "tama-38-sug-1":
    "תמ״א 38/1 (חיזוק): מסלול חיזוק בלי הריסה, רוב 66%, מצב המסלול ב-2026.",
  "tama-38-sug-2":
    "תמ״א 38/2 (הריסה ובנייה): מסלול הריסה ובנייה מחדש, רוב 80%, וההבדלים מחלופת שקד.",
  "chalufat-shaked":
    "חלופת שקד (תיקון 139): המסלול שמחליף את תמ״א 38/2, רוב 80%, וזכויות בנייה עד 400%.",
  "hashvaa-pinui-vs-tama":
    "השוואה: פינוי בינוי מול תמ״א 38 — מתחם מול בניין יחיד, רוב, זמן, וסיכונים.",
  "hashvaa-shaked-vs-tama":
    "השוואה: חלופת שקד מול תמ״א 38 — מה השתנה ומה דייר צריך לבחור ב-2026.",
  "hashvaa-migun-vs-pinui":
    "השוואה: שיפור מיגון מול פינוי בינוי — מתי כל פתרון מתאים, ואיך להחליט.",
  "madrichim-sof-tama":
    "סוף תמ״א 38: לוח זמנים של הפוקעה ופעולות נדרשות לדייר בפרויקט פעיל.",
  "madrichim-shealot-yazam":
    "10 השאלות שכל דייר חייב לשאול יזם פינוי בינוי לפני חתימה.",
  "madrichim-eravut-hevdel":
    "ערבות בנקאית מול ערבות חוק מכר: ההבדל המהותי וההשפעה על ההגנה הכלכלית.",
  "madrichim-shipur-migun":
    "מתי שיפור מיגון עדיף על בניית ממ״ד חדש: מסגרת החלטה לבעלי בניין ישן.",
  "madrichim-yorshim":
    "זכות בעלות מול זכות יורשים בפינוי בינוי: ההבחנה המשפטית ומה לעגן בהסכם.",
  "madrichim-yazamim":
    "מסגרת להערכת יזמי פינוי בינוי בישראל 2026: 8 קריטריונים לשקילה.",
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
  "pinui-binui-machshvon": "מחשבון פינוי בינוי",
  "memad-bayit-prati": "ממ״ד לבית פרטי",
  "memad-dira-bekoma": "ממ״ד בדירה בקומה",
  "memad-binyan-meshutaf": "ממ״ד בבניין משותף",
  "memad-binyan-yashan": "ממ״ד לבניין ישן",
  "memad-koma-elyona": "ממ״ד בקומה עליונה",
  "memad-tat-karkai": "ממ״ד תת-קרקעי",
  "tama-38": "תמ״א 38",
  "tama-38-pkia": "תמ״א 38 פוקעת",
  "tama-38-sug-1": "תמ״א 38/1 (חיזוק)",
  "tama-38-sug-2": "תמ״א 38/2 (הריסה ובנייה)",
  "chalufat-shaked": "חלופת שקד",
  "hashvaa-pinui-vs-tama": "פינוי בינוי מול תמ״א 38",
  "hashvaa-shaked-vs-tama": "חלופת שקד מול תמ״א 38",
  "hashvaa-migun-vs-pinui": "שיפור מיגון מול פינוי בינוי",
  "madrichim-sof-tama": "סוף תמ״א 38",
  "madrichim-shealot-yazam": "10 שאלות ליזם פינוי בינוי",
  "madrichim-eravut-hevdel": "ערבות בנקאית מול חוק מכר",
  "madrichim-shipur-migun": "מתי שיפור מיגון עדיף",
  "madrichim-yorshim": "זכות בעלות מול זכות יורשים",
  "madrichim-yazamim": "השוואת יזמי פינוי בינוי",
  "ofek-mazor": "אופק מזור, מנכ״ל ומייסד",
};
