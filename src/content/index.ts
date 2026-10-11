import { aboutText } from "./sections/about";
import { contactText } from "./sections/contact";
import { footerText } from "./sections/footer";
import { heroText } from "./sections/hero";
import { homeText } from "./sections/home";
import { navigationText } from "./sections/navigation";
import { servicesText } from "./sections/services";
import { siteText } from "./sections/site";
import { testimonialsText } from "./sections/testimonials";
import type { Dict, Lang } from "./types";

export type { Dict, Lang } from "./types";

export const translations: Record<Lang, Dict> = {
  en: {
    brandName: siteText.en.brandName,
    nav: navigationText.en,
    hero: heroText.en,
    index: homeText.en,
    services: servicesText.en,
    about: aboutText.en,
    testimonials: testimonialsText.en,
    contact: contactText.en,
    footer: footerText.en,
    toggle: { label: siteText.en.languageToggle },
  },
  de: {
    brandName: siteText.de.brandName,
    nav: navigationText.de,
    hero: heroText.de,
    index: homeText.de,
    services: servicesText.de,
    about: aboutText.de,
    testimonials: testimonialsText.de,
    contact: contactText.de,
    footer: footerText.de,
    toggle: { label: siteText.de.languageToggle },
  },
};