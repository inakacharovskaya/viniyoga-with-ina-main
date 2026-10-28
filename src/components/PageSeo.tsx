import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { getInternalPath, localizedPath } from "@/lib/routing";

const pageMetadata = {
  en: {
    "/": {
      title: "Viniyoga with Ina",
      description:
        "Personalised yoga therapy and meditation practice with Ina in Münster",
    },
    "/services": {
      title: "Yoga Therapy for Stress & Chronic Illness | Viniyoga with Ina",
      description:
        "Explore somatic movement for stress and nervous system healing practices through personalized yoga therapy for fatigue and chronic illness, including gentle movement alongside chronic pain.",
    },
    "/about": {
      title: "Mind-Body Connection for Chronic Illness | Viniyoga with Ina",
      description:
        "Meet Ina and explore the mind-body connection for chronic illness through personalized yoga therapy, mindful movement, breath, and meditation.",
    },
  },
  de: {
    "/": {
      title: "Viniyoga mit Ina",
      description:
        "Personalisierte Yogatherapie und Meditationspraxis mit Ina in Münster",
    },
    "/services": {
      title: "Yogatherapie bei Erschöpfung & Stress | Viniyoga mit Ina",
      description:
        "Yoga bei Autoimmunerkrankungen und Yogatherapie bei Erschöpfung: achtsame Bewegung bei chronischem Stress. Bewegung kann das Nervensystem regulieren und chronische Schmerzen ergänzend begleiten.",
    },
    "/about": {
      title: "Körper-Geist-Verbindung bei chronischer Erkrankung | Viniyoga mit Ina",
      description:
        "Lerne Ina kennen: Yogatherapeutin und Neurowissenschaftlerin mit einem individuellen, achtsamen Ansatz für Bewegung, Atmung und chronische Erkrankungen.",
    },
  },
} as const;

export const PageSeo = () => {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const [, pathLanguage, ...pathSegments] = pathname.split("/");
    const currentLanguage = pathLanguage === "de" || pathLanguage === "en" ? pathLanguage : lang;
    const pagePath = getInternalPath(pathname);
    const metadata = pageMetadata[currentLanguage][pagePath as keyof (typeof pageMetadata)[typeof currentLanguage]];
    if (!metadata) return;

    document.title = metadata.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", metadata.description);

    const openGraphTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    openGraphTitle?.setAttribute("content", metadata.title);

    const openGraphDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    openGraphDescription?.setAttribute("content", metadata.description);

    const socialUrl =
      pagePath === "/"
        ? currentLanguage === "de"
          ? "https://viniyoga-with-ina.de/de"
          : "https://viniyoga-with-ina.de/"
        : `https://viniyoga-with-ina.de${localizedPath(pagePath, currentLanguage)}`;
    const socialImage = "https://viniyoga-with-ina.de/images/hero/ina-hero-optimized.jpg";
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", socialUrl);
    document.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.setAttribute("content", socialImage);
    document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute(
      "content",
      currentLanguage === "de" ? "de_DE" : "en_GB",
    );
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute("content", metadata.title);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute("content", metadata.description);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:url"]')?.setAttribute("content", socialUrl);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:image"]')?.setAttribute("content", socialImage);

    const canonicalUrl = socialUrl;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;
  }, [lang, pathname]);

  return null;
};