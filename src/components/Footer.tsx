import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container px-4 mx-auto text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} {t.brandName}. {t.footer.rights}
        </p>
        <p className="text-sm opacity-80 mt-2">
          {t.footer.tagline}
        </p>
        <div className="flex items-center justify-center gap-6 mt-5">
          <a
            href="https://www.facebook.com/viniyogawithina/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.follow}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <Facebook className="h-6 w-6 text-background" />
          </a>
          <a
            href="https://www.instagram.com/viniyoga_with_ina/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.instagram}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <Instagram className="h-6 w-6 text-background" />
          </a>
        </div>
      </div>
    </footer>
  );
};
