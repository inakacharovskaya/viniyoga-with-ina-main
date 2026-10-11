import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const sections = [
    {
      title: t.index.servicesTitle,
      description: t.index.servicesDesc,
      icon: Brain,
      to: "/services",
    },
    {
      title: t.index.aboutTitle,
      description: t.index.aboutDesc,
      icon: Heart,
      to: "/about",
    },
    {
      title: t.index.contactTitle,
      description: t.index.contactDesc,
      icon: MessageCircle,
      to: "/contact",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <Hero />
      
      {/* Quick Links Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.index.sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.index.sectionSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sections.map((section) => (
              <Card key={section.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  <Button variant="ghost" asChild className="group-hover:text-primary">
                    <Link to={section.to}>
                      {t.index.learnMore} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
