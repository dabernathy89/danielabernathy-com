export const SITE = {
  website: "https://danielabernathy.com/",
  author: "Daniel Abernathy",
  profile: "https://satnaing.dev/",
  desc: "Personal website of Daniel Abernathy.",
  title: "Daniel Abernathy",
  ogImage: "abernathy-family.webp",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Chicago", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
} as const;
