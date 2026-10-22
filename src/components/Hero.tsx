import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { siteImages } from "@/lib/assets";
import { localizedPath } from "@/lib/routing";

const heroImage = siteImages.hero.main;
const BOOKING_URL = "https://calendar.app.google/Ng7vmb3euhFMuxcc9";

export const Hero = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden relative">
        <div className="w-full">
          <img 
            src={heroImage} 
            alt={t.hero.imgAlt}
            className="w-full h-[350px] object-cover object-top"
          />
          <div 
            className="absolute inset-0 h-[350px]"
            style={{
              background: 'linear-gradient(to top, hsl(25 25% 28%) 0%, hsl(25 25% 28% / 0.6) 25%, transparent 55%)'
            }}
          />
        </div>
        <div className="px-6 pt-6 pb-12 text-white text-center" style={{ backgroundColor: 'hsl(25 25% 28%)' }}>
          <h1 className="text-4xl font-bold mb-4 leading-tight tracking-[5px]">
            {t.hero.title1}<br />{t.hero.title2}
          </h1>
          <p className="text-lg mb-8 opacity-95 leading-relaxed whitespace-pre-line md:whitespace-normal">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <Button 
              size="lg" 
              asChild
              className="h-[52px] min-w-0 flex-1 whitespace-nowrap border-2 border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-[11px] min-[380px]:text-xs sm:text-sm md:flex-none md:text-base px-1.5 min-[380px]:px-2 sm:px-4 md:px-8 py-6 rounded-full shadow-lg"
            >
              <Link to={localizedPath("/services", lang)}>{t.hero.explore}</Link>
            </Button>
            <Button 
              size="lg" 
              asChild
              variant="outline"
              className="h-[52px] min-w-0 flex-1 whitespace-nowrap border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-[11px] min-[380px]:text-xs sm:text-sm md:flex-none md:text-base px-1.5 min-[380px]:px-2 sm:px-4 md:px-8 py-6 rounded-full backdrop-blur-sm"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="relative whitespace-nowrap">
                {t.hero.bookFree}
                <span className="absolute -right-2 -top-6 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[10px] font-extrabold leading-none tracking-[0.02em] text-white shadow-md" aria-label="Free assessment">
                  FREE
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative w-full overflow-hidden" style={{ minHeight: '700px' }}>
        <img
          src={heroImage}
          alt={t.hero.imgAlt}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to left, hsl(25 25% 28%) 0%, hsl(25 25% 28% / 0.82) 15%, hsl(25 25% 28% / 0.55) 30%, hsl(25 25% 28% / 0.25) 45%, transparent 65%)'
          }}
        />

        <div className="absolute inset-0 container pl-4 pr-[calc(6%+1rem)] mx-auto flex items-center justify-end">
          <div className="w-2/5 text-primary-foreground text-right">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-[5px]">
              {t.hero.title1}<br />{t.hero.title2}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-95 leading-relaxed whitespace-pre-line">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col gap-8 items-end">
              <Button 
                size="lg" 
                asChild
                className="h-[52px] border-2 border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8 py-6 rounded-full shadow-lg"
              >
                <Link to={localizedPath("/services", lang)}>{t.hero.explore}</Link>
              </Button>
              <Button 
                size="lg" 
                asChild
                variant="outline"
                className="h-[52px] border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="relative pr-16">
                  {t.hero.bookFree}
                  <span className="absolute right-1 -top-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xs font-extrabold leading-none tracking-[0.04em] text-white shadow-md" aria-label="Free assessment">
                    FREE
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
