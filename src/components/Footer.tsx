import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { localizedPath } from "@/lib/routing";

export const Footer = () => {
  const { lang, t } = useLanguage();
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container px-4 mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm opacity-80 mb-3">
          <Link to={localizedPath("/impressum", lang)} className="hover:opacity-100 transition-opacity">
            {t.footer.legalNotice}
          </Link>
          <span aria-hidden="true">•</span>
          <Link to={localizedPath("/datenschutz", lang)} className="hover:opacity-100 transition-opacity">
            {t.footer.privacyPolicy}
          </Link>
        </div>
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
          <a
            href="https://www.linkedin.com/in/alinakacharovskaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <Linkedin className="h-6 w-6 text-background" />
          </a>
        </div>
      </div>
    </footer>
  );
};
