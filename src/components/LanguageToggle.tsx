import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { localizedPath } from "@/lib/routing";

export const LanguageToggle = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const switchLanguage = () => {
    const nextLanguage = lang === "en" ? "de" : "en";
    const currentPath = location.pathname.replace(/^\/(en|de)(?=\/|$)/, "") || "/";
    setLang(nextLanguage);
    navigate(localizedPath(currentPath, nextLanguage));
  };

  return (
    <button
      onClick={switchLanguage}
      aria-label={t.toggle.label}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 shadow-lg hover:shadow-xl transition-all tracking-[0.15em] text-xs font-semibold"
    >
      <Globe className="h-4 w-4" />
      <span>{lang === "en" ? "DE" : "EN"}</span>
    </button>
  );
};