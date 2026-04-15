export type Area = {
  slug: string;
  name: string;
  nameEn: string;
  district: string;
  neighborhoods?: string[];
  localNote?: string;
};

export const areas: Area[] = [
  {
    slug: "tel-aviv",
    name: "תל אביב",
    nameEn: "Tel Aviv",
    district: "מחוז תל אביב",
    neighborhoods: [
      "מרכז העיר",
      "צפון ישן",
      "צפון חדש",
      "רמת אביב",
      "יפו",
      "פלורנטין",
      "נווה צדק",
    ],
    localNote:
      "עיר צפופה עם מבנים ישנים וחדשים — בניית ממ״ד דורשת שיקולי גישה, רישוי עירוני וזמינות חנייה.",
  },
  {
    slug: "jerusalem",
    name: "ירושלים",
    nameEn: "Jerusalem",
    district: "מחוז ירושלים",
    neighborhoods: ["רחביה", "בקעה", "טלביה", "גילה", "פסגת זאב", "רמות", "הר נוף"],
    localNote:
      "מגוון רחב של בתים פרטיים, דירות גן וקוטג׳ים — כל פרויקט נבחן מול הוועדה המקומית והתכנון הקיים.",
  },
  {
    slug: "haifa",
    name: "חיפה",
    nameEn: "Haifa",
    district: "מחוז חיפה",
    neighborhoods: ["כרמל", "הדר", "קרית אליעזר", "רמת אלון", "נווה שאנן"],
    localNote:
      "טופוגרפיה הררית ובתים על מדרונות — תכנון ממ״ד דורש התייחסות להעמסת יסודות ולגישה לאתר.",
  },
  {
    slug: "rishon-lezion",
    name: "ראשון לציון",
    nameEn: "Rishon LeZion",
    district: "מחוז המרכז",
    localNote: "מערך שכונות חדשות וותיקות — לכל אזור פרופיל בנייה שונה וצורכי מיגון מותאמים.",
  },
  {
    slug: "petah-tikva",
    name: "פתח תקווה",
    nameEn: "Petah Tikva",
    district: "מחוז המרכז",
    localNote: "בתים פרטיים ודירות ותיקות שמתאימים לבניית ממ״ד חיצוני או מיגון חדר קיים.",
  },
  {
    slug: "netanya",
    name: "נתניה",
    nameEn: "Netanya",
    district: "מחוז המרכז",
    localNote: "עיר חוף עם בנייה חדשה לצד מתחמים ותיקים — התכנון מותאם לסוג הבית ולאזור.",
  },
  {
    slug: "beer-sheva",
    name: "באר שבע",
    nameEn: "Beer Sheva",
    district: "מחוז הדרום",
    localNote: "אזור עם דרישות מיגון מחמירות יותר — התכנון מותאם לרמות האיום באזור.",
  },
  {
    slug: "ashdod",
    name: "אשדוד",
    nameEn: "Ashdod",
    district: "מחוז הדרום",
    localNote: "עיר חוף דרומית — תקני מיגון מחמירים, עובי קירות עשוי להיות גדול מהסטנדרט.",
  },
  {
    slug: "ashkelon",
    name: "אשקלון",
    nameEn: "Ashkelon",
    district: "מחוז הדרום",
    localNote: "אזור קו קדמי — דרישות פקע״ר מחמירות יותר, תוספת עלות אופיינית לעובי קירות.",
  },
  {
    slug: "rehovot",
    name: "רחובות",
    nameEn: "Rehovot",
    district: "מחוז המרכז",
    localNote: "שילוב של בתים פרטיים ודירות — ממ״ד או מיגון חדר בהתאם לסוג הנכס.",
  },
  {
    slug: "ramat-gan",
    name: "רמת גן",
    nameEn: "Ramat Gan",
    district: "מחוז תל אביב",
    localNote: "עיר צפופה — חלק ניכר מהפרויקטים כרוך בבחינת היתכנות הנדסית ואישורי ועדה.",
  },
  {
    slug: "givatayim",
    name: "גבעתיים",
    nameEn: "Givatayim",
    district: "מחוז תל אביב",
    localNote: "בנייה צפופה ושכונות ותיקות — מיגון חדר קיים הוא פתרון נפוץ במקום ממ״ד חדש.",
  },
  {
    slug: "herzliya",
    name: "הרצליה",
    nameEn: "Herzliya",
    district: "מחוז תל אביב",
    localNote: "מגוון של בתים פרטיים וילות — פוטנציאל גבוה לממ״ד יצוק באתר.",
  },
  {
    slug: "raanana",
    name: "רעננה",
    nameEn: "Raanana",
    district: "מחוז המרכז",
    localNote: "עיר מתוכננת עם שכונות מסודרות — פרויקטים של ממ״ד והרחבה מתבצעים ברוטינה.",
  },
  {
    slug: "kfar-saba",
    name: "כפר סבא",
    nameEn: "Kfar Saba",
    district: "מחוז המרכז",
    localNote: "בתים פרטיים רבים — הוספת ממ״ד צמוד לבית היא פתרון נפוץ.",
  },
  {
    slug: "modiin",
    name: "מודיעין",
    nameEn: "Modiin",
    district: "מחוז המרכז",
    localNote: "עיר יחסית חדשה — מרבית הדירות כבר כוללות ממ״ד, מיגון חדר נפוץ בבתים פרטיים ותיקים.",
  },
  {
    slug: "hadera",
    name: "חדרה",
    nameEn: "Hadera",
    district: "מחוז חיפה",
    localNote: "מגוון אזורים ורמות בנייה — פתרון המיגון נבחר לפי סוג הנכס והמיקום.",
  },
  {
    slug: "nahariya",
    name: "נהריה",
    nameEn: "Nahariya",
    district: "מחוז הצפון",
    localNote: "אזור קו קדמי צפוני — דרישות פקע״ר מחמירות, עובי קירות גדול יותר מהסטנדרט.",
  },
  {
    slug: "kiryat",
    name: "הקריות",
    nameEn: "Kiryat",
    district: "מחוז חיפה",
    localNote: "מתחם הקריות שצפונית לחיפה — אזור מעורב של בתים פרטיים ודירות.",
  },
  {
    slug: "afula",
    name: "עפולה",
    nameEn: "Afula",
    district: "מחוז הצפון",
    localNote: "אזור מעורב של בתים פרטיים ושכונות חדשות — תכנון הממ״ד מותאם לכל מגרש.",
  },
  {
    slug: "ramat-hasharon",
    name: "רמת השרון",
    nameEn: "Ramat Hasharon",
    district: "מחוז תל אביב",
    localNote: "עיר עם הרבה בתים פרטיים — פרויקטים של ממ״ד והרחבה נפוצים.",
  },
  {
    slug: "hod-hasharon",
    name: "הוד השרון",
    nameEn: "Hod Hasharon",
    district: "מחוז המרכז",
    localNote: "שכונות של בתים פרטיים — תוספת ממ״ד במסגרת הרחבה היא פתרון מקובל.",
  },
  {
    slug: "yehud",
    name: "יהוד",
    nameEn: "Yehud",
    district: "מחוז המרכז",
    localNote: "עיר שמשלבת בנייה פרטית עם דירות — פתרון המיגון נקבע לפי סוג הנכס.",
  },
  {
    slug: "ganei-tikva",
    name: "גני תקווה",
    nameEn: "Ganei Tikva",
    district: "מחוז המרכז",
    localNote: "עיר בעיקר של בתים פרטיים — ממ״ד חיצוני או הרחבה עם ממ״ד הם פתרונות נפוצים.",
  },
  {
    slug: "or-yehuda",
    name: "אור יהודה",
    nameEn: "Or Yehuda",
    district: "מחוז תל אביב",
    localNote: "תמהיל של דירות ובתים ותיקים — מיגון חדר קיים פתרון נפוץ בדירות הישנות.",
  },
  {
    slug: "rosh-haayin",
    name: "ראש העין",
    nameEn: "Rosh HaAyin",
    district: "מחוז המרכז",
    localNote: "עיר מתפתחת עם שכונות חדשות ובתים פרטיים ותיקים — מגוון רחב של פתרונות מיגון.",
  },
  {
    slug: "shoham",
    name: "שוהם",
    nameEn: "Shoham",
    district: "מחוז המרכז",
    localNote: "יישוב מתוכנן של בתים פרטיים ודירות גן — ממ״ד צמוד לבית נפוץ.",
  },
  {
    slug: "zichron-yaakov",
    name: "זכרון יעקב",
    nameEn: "Zichron Yaakov",
    district: "מחוז חיפה",
    localNote: "יישוב עם בתים פרטיים וילות — פוטנציאל לממ״ד יצוק באתר בתכנון אדריכלי מתואם.",
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export const areaSlugs = areas.map((a) => a.slug);
