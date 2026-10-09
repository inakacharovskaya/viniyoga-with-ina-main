import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const Datenschutz = () => {
  const { lang } = useLanguage();
  const isGerman = lang === "de";

  const rights = isGerman
    ? [
        "Auskunft nach Art. 15 DSGVO",
        "Berichtigung nach Art. 16 DSGVO",
        "Löschung nach Art. 17 DSGVO",
        "Einschränkung der Verarbeitung nach Art. 18 DSGVO",
        "Datenübertragbarkeit nach Art. 20 DSGVO",
        "Beschwerde nach Art. 77 DSGVO",
      ]
    : [
        "Access under Art. 15 GDPR",
        "Correction under Art. 16 GDPR",
        "Deletion under Art. 17 GDPR",
        "Restriction under Art. 18 GDPR",
        "Portability under Art. 20 GDPR",
        "Complaint under Art. 77 GDPR",
      ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-10 text-center">
            <header className="pt-8">
              <h1 className="text-2xl md:text-4xl text-foreground uppercase">
                {isGerman ? "Datenschutzerklärung" : "Privacy Policy"}
              </h1>
            </header>

            <div className="space-y-8 text-foreground/90 text-center">
              <section className="space-y-4 text-center">
                <h2 className="text-2xl md:text-3xl text-foreground uppercase">{isGerman ? "Verantwortliche Stelle" : "Responsible controller"}</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Alina Kacharovskaya<br />
                  Altenbergerstraße 30a<br />
                  48268 Greven<br />
                  {isGerman ? "Deutschland" : "Germany"}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  E-Mail: <a href="mailto:a.kacharovskaya@gmail.com" className="underline underline-offset-4 hover:text-primary">a.kacharovskaya@gmail.com</a>
                </p>
              </section>

              <section className="space-y-4 text-center text-center">
                <h2 className="text-2xl md:text-3xl text-foreground uppercase">{isGerman ? "Hosting" : "Hosting"}</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman
                    ? "Diese Website wird von Vercel Inc. gehostet (440 N Barranca Ave #4133, Covina, CA 91723, USA)."
                    : "This website is hosted by Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA)."}
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman
                    ? "Server-Logdateien (z. B. IP-Adressen, Zugriffszeiten, Browserdaten) werden auf den Servern von Vercel verarbeitet, um die sichere und fehlerfreie Betriebsführung der Website zu gewährleisten. Grundlage ist Art. 6 Abs. 1 lit. f DSGVO."
                    : "Server log files (e.g. IP addresses, access metadata) are processed on Vercel servers for secure and error-free site operation based on Art. 6(1)(f) GDPR."}
                </p>
              </section>

              <section className="space-y-4 text-center">
                <h2 className="text-2xl md:text-3xl text-foreground uppercase">{isGerman ? "Webfonts" : "Web fonts"}</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman
                    ? "Auf dieser Website werden die Schriftarten Montserrat und Yeseva One verwendet. Die Fonts werden lokal im Projekt/Repository gehostet; es findet keine Übermittlung von personenbezogenen Daten oder IP-Adressen an Google-Server statt."
                    : "This website uses the fonts Montserrat and Yeseva One. The fonts are hosted locally in the project/repository, which means no personal data or IP addresses are transferred to Google servers."}
                </p>
              </section>

              <section className="space-y-4 text-center">
                <h2 className="text-2xl md:text-3xl text-foreground uppercase">{isGerman ? "Kontaktanfragen" : "Contact inquiries"}</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman
                    ? "E-Mail-Anfragen werden gemäß Art. 6 Abs. 1 lit. b DSGVO (Vertrag / vorvertragliches Verhältnis) und Art. 6 Abs. 1 lit. f DSGVO verarbeitet."
                    : "Email inquiries are processed under Art. 6(1)(b) GDPR (contract/pre-contract) and Art. 6(1)(f) GDPR."}
                </p>
              </section>

              <section className="space-y-4 text-center">
                <h2 className="text-2xl md:text-3xl text-foreground uppercase">{isGerman ? "Ihre Rechte" : "Your rights"}</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman
                    ? "Sie haben gemäß DSGVO folgende Rechte:" : "Under the GDPR, you have the following rights:"}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base md:text-lg leading-relaxed text-left mx-auto max-w-xl">
                  {rights.map((right) => (
                    <li key={right}>{right}</li>
                  ))}
                </ul>
                <p className="text-base md:text-lg leading-relaxed">
                  {isGerman
                    ? "Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie mich bitte per E-Mail: "
                    : "If you would like to exercise any of these rights, please contact me by email: "}
                  <a href="mailto:a.kacharovskaya@gmail.com" className="underline underline-offset-4 hover:text-primary">a.kacharovskaya@gmail.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
