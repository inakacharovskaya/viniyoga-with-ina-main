import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const { lang, toggle, t } = useLanguage();
  return (
    <button
      onClick={toggle}
      aria-label={t.toggle.label}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 shadow-lg hover:shadow-xl transition-all uppercase tracking-[0.15em] text-xs font-semibold"
    >
      <Globe className="h-4 w-4" />
      <span>{lang === "en" ? "DE" : "EN"}</span>
    </button>
  );
};