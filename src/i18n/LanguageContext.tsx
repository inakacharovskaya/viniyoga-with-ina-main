import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Lang, type Dict } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem("lang");
    if (stored === "en" || stored === "de") return stored;
    const nav = window.navigator.language?.toLowerCase() ?? "";
    return nav.startsWith("de") ? "de" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang: setLangState,
    toggle: () => setLangState((l) => (l === "en" ? "de" : "en")),
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};