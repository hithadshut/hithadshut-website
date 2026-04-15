export const site = {
  name: "התחדשות",
  nameEn: "Hithadshut",
  tagline: "בניית ממ\"ד ומיגון הבית — מהתכנון ועד המפתח",
  description:
    "התחדשות — ליווי מלא לבעלי בתים בבניית ממ\"ד, מיגון חדר קיים ומיגונית. תכנון, אישורי פיקוד העורף, מיון קבלנים וליווי עד המפתח.",
  domain: "hithadshut.co.il",
  url: "https://hithadshut.co.il",
  phone: "054-671-2130",
  phoneE164: "+972546712130",
  phoneDial: "0546712130",
  whatsapp: "+972546712130",
  whatsappUrl:
    "https://wa.me/972546712130?text=%D7%94%D7%99%D7%99%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%20%D7%94%D7%AA%D7%97%D7%93%D7%A9%D7%95%D7%AA%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D",
  email: "info@hithadshut.co.il",
  serviceArea: "כל הארץ",
  hours: "א׳–ה׳ 08:00–19:00, ו׳ 08:00–13:00",
  locale: "he_IL",
  ogImage: "/og-image.png",
  twitter: "",
  // Internal social/links
  links: {
    privacy: "/privacy",
    terms: "/terms",
    contact: "/contact",
    about: "/about",
  },
};

export const services = [
  {
    slug: "building-mamad",
    title: "בניית ממ\"ד",
    shortTitle: "בניית ממ\"ד",
    summary:
      "בניית מרחב מוגן דירתי חדש בבית פרטי או בדירה — תכנון, אישור פיקוד העורף וליווי מלא עד לאישור גמר.",
    icon: "shield-plus",
  },
  {
    slug: "room-reinforcement",
    title: "מיגון חדר קיים",
    shortTitle: "מיגון חדר קיים",
    summary:
      "חיזוק והסבה של חדר קיים לרמת הגנה משופרת — פתרון מהיר יותר כשלא ניתן או לא כדאי לבנות ממ\"ד חדש.",
    icon: "wall",
  },
  {
    slug: "migunit",
    title: "מיגונית",
    shortTitle: "מיגונית",
    summary:
      "מיגונית חיצונית בחצר או בחניה — פתרון מהיר יחסית למגורים בבתים ללא ממ\"ד, בכפוף לאישורים.",
    icon: "box",
  },
  {
    slug: "prefab-mamad",
    title: "ממ\"ד מוכן / יחידה ממוגנת",
    shortTitle: "ממ\"ד מוכן",
    summary:
      "יחידה ממוגנת/ממ\"ד יביל שמגיעה מוכנה מהמפעל. חובה להבדיל בין יחידה ממוגנת גנרית לבין ממ\"ד תקני מאושר פקע\"ר.",
    icon: "module",
  },
] as const;

export const guides = [
  {
    slug: "mamad-cost",
    title: "כמה עולה ממ\"ד? מחיר ועלויות בנייה",
    short: "מחיר ממ\"ד",
  },
  {
    slug: "mamad-process",
    title: "איך בונים ממ\"ד — תהליך שלב אחר שלב",
    short: "תהליך בניית ממ\"ד",
  },
  {
    slug: "home-front-command-approval",
    title: "אישורי פיקוד העורף לממ\"ד",
    short: "אישורי פקע\"ר",
  },
  {
    slug: "choosing-mamad-contractor",
    title: "איך בוחרים קבלן ממ\"ד",
    short: "בחירת קבלן ממ\"ד",
  },
  {
    slug: "mamad-mistakes",
    title: "10 טעויות נפוצות בבניית ממ\"ד",
    short: "טעויות בבניית ממ\"ד",
  },
] as const;

export const compare = {
  slug: "mamad-vs-miggun-vs-migunit",
  title: "ממ\"ד מול מיגון חדר קיים מול מיגונית — מה מתאים לכם?",
};

export type ServiceSlug = (typeof services)[number]["slug"];
export type GuideSlug = (typeof guides)[number]["slug"];
