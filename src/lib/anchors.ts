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
  | "areas";

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
};
