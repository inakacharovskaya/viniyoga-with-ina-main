import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const BOOKING_URL = "https://calendar.app.google/Ng7vmb3euhFMuxcc9";

const renderSpacedWord = (word: string) => {
  return word.split("").map((char, i) => {
    const next = word[i + 1];
    const isH = char.toLowerCase() === "h";
    const nextIsE = next && next.toLowerCase() === "e";
    return (
      <span
        key={i}
        className={`inline-block tracking-[0.15em] ${isH && nextIsE ? "mr-[-0.12em]" : ""}`}
      >
        {char}
      </span>
    );
  });
};

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 bg-accent/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.services.heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.services.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-primary/70" />
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-2">
                <span className="block tracking-[0.15em]">{t.services.yogaTitle1}</span>
                <span className="block tracking-[0.15em]">{renderSpacedWord(t.services.yogaTitle2)}</span>
              </CardTitle>
              <CardDescription className="text-lg">
                {t.services.yogaDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                {t.services.yogaBody}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.services.yogaFeat1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.services.yogaFeat2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.services.yogaFeat3}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€97</span>
                  <span className="text-muted-foreground">{t.services.perHour}</span>
                  <span className="ml-auto text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full font-semibold">
                    {t.services.firstFree}
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full py-6"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t.services.yogaCta}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-secondary to-secondary/70" />
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-3xl mb-2">
                <span className="block tracking-[0.15em]">{t.services.meditationTitle1}</span>
                <span className="block tracking-[0.15em]">{t.services.meditationTitle2}</span>
              </CardTitle>
              <CardDescription className="text-lg">
                {t.services.meditationDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                {t.services.meditationBody}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.services.meditationFeat1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.services.meditationFeat2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.services.meditationFeat3}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-secondary">€55</span>
                  <span className="text-muted-foreground">{t.services.perHour}</span>
                  <span className="ml-auto text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full font-semibold">
                    {t.services.firstFree}
                  </span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full py-6"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t.services.meditationCta}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-[0.1em] leading-snug max-w-3xl mx-auto">
            {t.services.footnote}
          </h3>
          <h4 className="text-xl md:text-2xl font-bold text-foreground whitespace-pre-line mt-2 max-w-3xl mx-auto">
            {t.services.footnoteRest}
          </h4>
        </div>

        <div className="max-w-4xl mx-auto mt-8 space-y-8 text-foreground/90">
          <div>
            <p className="text-lg leading-relaxed whitespace-pre-line text-center">
              {t.about.chooseBody}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl md:text-2xl font-bold text-foreground text-center">
              {t.about.guideHeader}
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg">
                <p className="text-base leading-relaxed text-foreground/90">
                  {t.about.guideYogaPrefix}
                  <strong className="text-foreground font-bold">{t.about.guideYogaBold}</strong>
                  {t.about.guideYogaSuffix}
                </p>
              </div>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-base leading-relaxed text-foreground/90">
                  {t.about.guideMeditationPrefix}
                  <strong className="text-foreground font-bold">{t.about.guideMeditationBold}</strong>
                  {t.about.guideMeditationSuffix}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
