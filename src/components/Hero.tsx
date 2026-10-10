import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { siteImages } from "@/lib/assets";

const heroImage = siteImages.hero.main;
const BOOKING_URL = "https://calendar.app.google/Ng7vmb3euhFMuxcc9";

export const Hero = () => {
  const { t } = useLanguage();

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
          <h1 className="text-4xl font-bold mb-4 leading-tight uppercase">
            {t.hero.title1}{" "}<br className="md:hidden" />{t.hero.title2}
          </h1>
          <p className="text-lg mb-8 opacity-95 leading-relaxed whitespace-pre-line md:whitespace-normal">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col gap-6 items-center">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-[52px] border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-base px-8 py-6 rounded-full backdrop-blur-sm bg-primary-foreground/10"
            >
              {t.hero.explore}
            </Button>
            <Button 
              size="lg" 
              asChild
              className="h-[52px] bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8 py-6 rounded-full shadow-lg"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="relative">
                {t.hero.bookFree}
                <span className="absolute -right-5 -top-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary text-[10px] font-bold leading-none text-white shadow-sm" aria-label="Free assessment">
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
          className="absolute inset-0 w-[110%] h-full object-cover object-top -left-[10%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to left, hsl(25 25% 28%) 0%, hsl(25 25% 28%) 15%, hsl(25 25% 28% / 0.8) 30%, hsl(25 25% 28% / 0.4) 45%, transparent 65%)'
          }}
        />

        <div className="absolute inset-0 container pl-4 pr-[calc(10%+1rem)] mx-auto flex items-center justify-end">
          <div className="w-2/5 text-primary-foreground text-right">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight uppercase">
              {t.hero.title1}<br />{t.hero.title2}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-95 leading-relaxed whitespace-pre-line">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col gap-8 items-end">
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-[52px] border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6 rounded-full backdrop-blur-sm bg-primary-foreground/10"
              >
                {t.hero.explore}
              </Button>
              <Button 
                size="lg" 
                asChild
                className="h-[52px] bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="relative">
                  {t.hero.bookFree}
                  <span className="absolute -right-5 -top-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary text-[10px] font-bold leading-none text-white shadow-sm" aria-label="Free assessment">
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
