export type Lang = "en" | "de";

export type Dict = {
  brandName: string;
  nav: { home: string; services: string; about: string; contact: string; bookNow: string };
  hero: { title1: string; title2: string; subtitle: string; bookFree: string; explore: string; imgAlt: string };
  index: {
    sectionTitle: string; sectionSubtitle: string;
    servicesTitle: string; servicesDesc: string;
    aboutTitle: string; aboutDesc: string;
    contactTitle: string; contactDesc: string;
    learnMore: string;
  };
  services: {
    heading: string; subheading: string;
    meditationTitle1: string; meditationTitle2: string; meditationDesc: string; meditationBody: string;
    meditationFeat1: string; meditationFeat2: string; meditationFeat3: string; meditationCta: string;
    yogaTitle1: string; yogaTitle2: string; yogaDesc: string; yogaBody: string;
    yogaFeat1: string; yogaFeat2: string; yogaFeat3: string; yogaCta: string;
    perHour: string; firstFree: string; footnote: string; footnoteRest: string;
  };
  about: {
    meet: string; meet1: string;
    practiceTitle: string; practice1: string; practice2: string; practice3: string;
    rewireTitle: string; rewire1: string; rewire2: string; rewire3: string;
    processHeader: string; processItem1Bold: string; processItem1: string; processItem2Bold: string; processItem2: string;
    pathHeader: string; pathItem1: string; pathItem2: string;
    chooseHeader: string; chooseBody: string;
    guideHeader: string;
    guideYogaPrefix: string; guideYogaBold: string; guideYogaSuffix: string;
    guideMeditationPrefix: string; guideMeditationBold: string; guideMeditationSuffix: string;
    certs: string; accreditedBy: string;
  };
  testimonials: { heading: string; subheading: string; rating: string; reviews: string };
  contact: {
    heading: string; subheading: string;
    namePh: string; emailPh: string; messagePh: string; send: string;
    sentTitle: string; sentDesc: string;
    getInTouch: string;
    location: string; locationValue: string; locationSub: string;
    availability: string; availabilityValue: string; availabilitySub: string;
    responseTime: string; responseValue: string; responseSub: string;
    expect: string; expect1: string; expect2: string; expect4: string;
  };
  footer: { rights: string; tagline: string; follow: string; instagram: string; legalNotice: string; privacyPolicy: string };
  toggle: { label: string };
};