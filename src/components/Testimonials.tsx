import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonials = [
  {
    name: "Borka",
    initial: "B",
    rating: 5,
    text: "Ina took care of me both physically and mentally. My challenge was to find a series of movements that work for what my body enjoys and sync that with what my body would need, struggling with an autoimmune disease. I felt very much at ease at every session because of her approachable and easy-going style. I learned a lot from her about yoga being so much more than just a form of physical exercise. I particularly appreciated her flexibility in finding the right time to meet, and her kindness of never making me feel bad about last-minute changes. All in all, she's an awesome, kind, fun yoga teacher, and I feel lucky to have crossed paths with her!",
  },
  {
    name: "Rachel",
    initial: "R",
    rating: 5,
    text: "Working with Ina was a rewarding and deeply educational experience. I wanted to try out yoga therapy during a period of massive life change. I set a goal to use this opportunity to improve my mind-body connection and work on my asthma.\n\nIna's guidance immediately shifted my perspective. She made me realize that my hypermobility is the main reason why I love yoga so much but now I know how to use yoga to strengthen my body. I discovered yoga tools that I would have never found in a yoga studio.\n\nI felt incredibly cared for and supported because of her genuinely curious and attentive approach. Ina is non-judgmental about consistency and was surprisingly good at recalling small, personal details from our conversations. She made me feel truly seen and heard.",
  },
  {
    name: "Julian",
    initial: "J",
    rating: 5,
    text: "In a fortunate incident of chance, I stumbled upon Ina's Viniyoga Club at the University of Glasgow shortly before she ran an 8-week mindfulness-based anxiety-relief program. Yoga used to be a big pillar of my life and foundational to my well-being in the past and the MBAR program alongside Ina's other sessions made me rediscover just why I had cherished the practice so much! Thanks for reigniting this passion with your focused, patient and powerful guidance! I won't let it go again!",
  },
];

export const Testimonials = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.testimonials.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-semibold text-primary">{t.testimonials.rating}</span>
            <a
              href="https://www.facebook.com/viniyogawithina/reviews/?id=100090620387024&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary underline underline-offset-4 transition-colors"
            >
              {t.testimonials.reviews}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
