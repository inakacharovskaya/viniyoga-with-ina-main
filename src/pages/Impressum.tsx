import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const Impressum = () => {
  const { lang } = useLanguage();
  const isGerman = lang === "de";

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-10 text-center">
            <header className="pt-8">
              <h1 className="text-2xl md:text-4xl text-foreground">
                {isGerman ? "Impressum" : "Legal Notice"}
              </h1>
            </header>

            <div className="space-y-8 text-foreground/90 text-center">
              <section className="space-y-4 text-center">
                <p className="text-sm md:text-base tracking-[0.16em] text-muted-foreground">Stand: 8. Oktober 2026</p>
                <h2 className="text-xl md:text-2xl text-foreground">{isGerman ? "Angaben gemäß § 5 TMG" : "Information in accordance with § 5 TMG"}</h2>
                <p className="text-base md:text-lg leading-relaxed">Alina Kacharovskaya</p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {isGerman ? "Yogatherapeutin & Yogalehrerin" : "Yoga therapist and yoga teacher"}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Altenbergerstraße 30a<br />
                  48268 Greven<br />
                  {isGerman ? "Deutschland" : "Germany"}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  E-Mail: <a href="mailto:a.kacharovskaya@gmail.com" className="underline underline-offset-4 hover:text-primary">a.kacharovskaya@gmail.com</a>
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman ? "Telefon" : "Phone"}: <a href="tel:+436764207471" className="underline underline-offset-4 hover:text-primary">+43 676 4207471</a>
                </p>
              </section>

              <section className="space-y-4 text-center">
                <h2 className="text-xl md:text-2xl text-foreground">{isGerman ? "Steuernummer" : "Tax number"}</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman
                    ? "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet."
                    : "Tax-exempt under § 19 UStG (Small Business Regulation)."}
                </p>
                <p className="text-base md:text-lg leading-relaxed font-medium">DE464998256</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-foreground">{isGerman ? "Streitbeilegung / Verbraucherinfo" : "Dispute resolution / consumer info"}</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman
                    ? "Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung bereit: "
                    : "The European Commission provides an online platform for out-of-court dispute resolution: "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman
                    ? "Ich nehme nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil."
                    : "I do not participate in a dispute resolution procedure before a consumer arbitration board."}
                </p>
              </section>

              <section className="space-y-6 text-center">
                <h2 className="text-xl md:text-2xl text-foreground">{isGerman ? "Zertifikate" : "Certificates"}</h2>
                <img
                  src="/images/certificates/Alina_IAYT800.jpg"
                  alt={isGerman ? "IAYT-Zertifikat von Alina Kacharovskaya" : "IAYT certificate of Alina Kacharovskaya"}
                  className="mx-auto h-auto w-full max-w-3xl object-contain"
                />
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
