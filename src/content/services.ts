export type ServiceMeta = {
  slug: string;
  name: string;
  shortName: string;
  path: string;
  blurb: string;
};

export const serviceMatrix: ServiceMeta[] = [
  {
    slug: "building-mamad",
    name: "בניית ממ״ד",
    shortName: "בניית ממ״ד",
    path: "/services/building-mamad",
    blurb:
      "בניית ממ״ד חדש מבטון מזוין לפי תקן פיקוד העורף, מתכנון וחישוב קונסטרוקטיבי ועד מסירה עם אישור גמר.",
  },
  {
    slug: "room-reinforcement",
    name: "מיגון חדר קיים",
    shortName: "מיגון חדר",
    path: "/services/room-reinforcement",
    blurb:
      "חיזוק חדר קיים והפיכתו לחדר מוגן. פתרון מהיר יחסית ומשתלם לדירות ובתים ללא ממ״ד.",
  },
  {
    slug: "migunit",
    name: "מיגונית",
    shortName: "מיגונית",
    path: "/services/migunit",
    blurb:
      "יחידת מיגון מוכנה מהמפעל להתקנה בחצר. פתרון מהיר ללא בנייה מורכבת, לעיתים ללא היתר.",
  },
  {
    slug: "prefab-mamad",
    name: "ממ״ד מוכן",
    shortName: "ממ״ד מוכן",
    path: "/services/prefab-mamad",
    blurb:
      "יחידה ממוגנת טרומית: מתי זה תקני פקע״ר ומתי זו רק יחידה ממוגנת גנרית. ליווי מקצועי בבחירה.",
  },
];

export function getServiceMeta(slug: string): ServiceMeta | undefined {
  return serviceMatrix.find((s) => s.slug === slug);
}

export const geoServiceSlugs = serviceMatrix.map((s) => s.slug);
