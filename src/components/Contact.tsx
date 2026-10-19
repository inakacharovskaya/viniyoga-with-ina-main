import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import { siteImages } from "@/lib/assets";

const brandLogo = siteImages.brand.logo;
const fieldClassName = "bg-white/10 border-white/20 text-white placeholder:text-white/90";

export const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/a.kacharovskaya@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed");
      }

      toast({
        title: "Your message has been sent!",
        description: (
          <>
            Thank you for your interest.
            <br />
            I will get back to you soon.
          </>
        ),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Unable to send your message",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.25] md:leading-[1.25] whitespace-pre-line">
              {t.contact.heading}
            </h2>
            <p className="text-xl opacity-90">
              {t.contact.subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="potential client ALERT" />
                <input type="hidden" name="_template" value="table" />
                <div>
                  <Input
                    name="name"
                    placeholder={t.contact.namePh}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t.contact.emailPh}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t.contact.messagePh}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className={fieldClassName}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full py-6"
                >
                  {t.contact.send}
                </Button>
              </form>
              <div className="flex justify-center mt-6">
                <img src={brandLogo} alt={`${t.brandName} logo`} className="h-60 w-auto opacity-80" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t.contact.getInTouch}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">{t.contact.location}</div>
                      <div className="opacity-90 text-base">{t.contact.locationValue}</div>
                      <div className="text-sm opacity-75 mt-1">{t.contact.locationSub}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">{t.contact.availability}</div>
                      <div className="opacity-90 text-base">{t.contact.availabilityValue}</div>
                      <div className="text-sm opacity-75 mt-1">{t.contact.availabilitySub}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">{t.contact.responseTime}</div>
                      <div className="opacity-90 text-base">{t.contact.responseValue}</div>
                      <div className="text-sm opacity-75 mt-1">{t.contact.responseSub}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-lg mb-3">{t.contact.expect}</h4>
                <ul className="space-y-2 text-base opacity-90">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>{t.contact.expect1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>{t.contact.expect2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✓</span>
                    <span>{t.contact.expect4}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
