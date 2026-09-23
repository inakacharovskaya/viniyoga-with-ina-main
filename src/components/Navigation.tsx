import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { siteImages } from "@/lib/assets";

const brandLogo = siteImages.brand.logo;
const navLinkClassName = "text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.1em] text-sm font-semibold";
const bookButtonClassName = "uppercase tracking-[0.1em]";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <img src={brandLogo} alt={`${t.brandName} logo`} className="h-10 w-auto flex-shrink-0" />
            <span className="font-display text-lg sm:text-xl text-foreground uppercase tracking-[0.22em] leading-tight">
              {(() => {
                const parts = t.brandName.split(" ");
                const first = parts[0];
                const rest = parts.slice(1).join("\u00A0"); // non-breaking spaces keep "with Ina" together
                return (
                  <>
                    {first}
                    <wbr />
                    <span className="ml-4 whitespace-nowrap tracking-[0.22em]">{rest}</span>
                  </>
                );
              })()}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={navLinkClassName}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className={bookButtonClassName}>
              <a href="https://calendar.app.google/9Q6kuJZFaaNDzJZ98" target="_blank" rel="noopener noreferrer">
                {t.nav.bookNow}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={navLinkClassName}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-fit">
                <a href="https://calendar.app.google/9Q6kuJZFaaNDzJZ98" target="_blank" rel="noopener noreferrer">
                  {t.nav.bookNow}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
