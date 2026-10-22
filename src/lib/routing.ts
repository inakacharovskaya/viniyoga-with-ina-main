import type { Lang } from "@/content";

const pageSlugs = {
  services: { en: "services", de: "leistungen" },
  about: { en: "about", de: "ueber-mich" },
  contact: { en: "contact", de: "kontakt" },
  impressum: { en: "impressum", de: "impressum" },
  datenschutz: { en: "datenschutz", de: "datenschutz" },
} as const;

const getPathSegments = (path: string) => {
  const segments = path.split("/").filter(Boolean);
  if (segments[0] === "en" || segments[0] === "de") segments.shift();
  return segments;
};

const findPageKey = (slug: string) =>
  (Object.keys(pageSlugs) as Array<keyof typeof pageSlugs>).find((key) =>
    Object.values(pageSlugs[key]).includes(slug),
  );

export const localizedPath = (path: string, lang: Lang) => {
  const segments = getPathSegments(path);
  if (segments.length === 0) return `/${lang}/`;

  const pageKey = findPageKey(segments[0]);
  const localizedSegments = pageKey
    ? [pageSlugs[pageKey][lang], ...segments.slice(1)]
    : segments;

  return `/${lang}/${localizedSegments.join("/")}`;
};

export const getInternalPath = (path: string) => {
  const segments = getPathSegments(path);
  if (segments.length === 0) return "/";

  const pageKey = findPageKey(segments[0]);
  return `/${pageKey ?? segments[0]}${segments.length > 1 ? `/${segments.slice(1).join("/")}` : ""}`;
};