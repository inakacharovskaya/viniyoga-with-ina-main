const inaNamaste = "/images/panorama-face-smooth.jpg";
const inaHeadstand = "/images/ina-headstand.jpg";
const inaSeatedTwist = "/images/ina-seated-twist.jpg";
const eRyt500 = "/images/e-ryt500-yoga-alliance.png";
const yacep = "/images/yacep-yoga-alliance.png";
const iayt = "/images/iayt-accredited.png";
const yogaTherapyGreece = "/images/yoga-therapy-greece-transparent.png";
import { useLanguage } from "@/i18n/LanguageContext";

const rys200 = "/images/rys-200.webp";
const rys300 = "/images/rys-300.webp";

export const About = () => {
  const { t } = useLanguage();
  const certifications = [
    { image: rys200, alt: "RYS 200 Registered Yoga School" },
    { image: rys300, alt: "RYS 300 Yoga Alliance Certification" },
    { image: eRyt500, alt: "E-RYT 500 Yoga Alliance Certification" },
    { image: yacep, alt: "YACEP Yoga Alliance Continuing Education Provider" },
  ];

  return (
    <>
      {/* Panorama hero */}
      <section className="w-full">
        <img
          src={inaNamaste}
          alt="Ina with hands in namaste surrounded by plants"
          className="w-full h-[60vh] md:h-[90vh] object-cover"
        />
      </section>

      {/* Meet Ina - light bg, dark text */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              {t.about.meet}
            </h2>
            <div className="prose prose-lg max-w-none mx-auto text-foreground/90 space-y-8 text-center">
              {[t.about.meet1, t.about.meet2].map((para, pIdx) => (
                <p key={pIdx} className="text-xl leading-relaxed">
                  {(para.match(/[^.!?]+[.!?]*\s*/g) ?? [para]).map((sentence, sIdx) => (
                    <span key={sIdx} className="block text-pretty">
                      {sentence.trim()}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From Practice to Professional Purpose - image left, text right */}
      <section className="py-16 bg-background">
        <div className="grid md:grid-cols-2 items-center">
          <img
            src={inaHeadstand}
            alt="Ina in a yoga inversion pose"
            className="w-full aspect-square object-cover"
          />
          <div className="text-foreground/90 space-y-4 px-4 py-8 md:px-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t.about.practiceTitle}
              </h3>
              <p className="text-xl leading-relaxed">
                {t.about.practice1}
              </p>
            <p className="text-xl leading-relaxed">
                {t.about.practice2}
              </p>
            <p className="text-xl leading-relaxed">
                {t.about.practice3}
              </p>
          </div>
        </div>
      </section>

      {/* Rewiring your Resilience - text left, image right */}
      <section className="py-16 bg-background">
        <div className="grid md:grid-cols-2 items-center">
          <div className="text-foreground/90 space-y-4 px-4 py-8 md:px-12 md:order-1 order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t.about.rewireTitle}
              </h3>
              <p className="text-xl leading-relaxed">
                {t.about.rewire1}
              </p>
            <p className="text-xl leading-relaxed">
                {t.about.rewire2}
              </p>
            <p className="text-xl leading-relaxed">
                {t.about.rewire3}
              </p>
          </div>
          <img
            src={inaSeatedTwist}
            alt="Ina in a seated twist pose"
            className="w-full aspect-square object-cover md:order-2 order-1 scale-x-[-1]"
          />
        </div>
      </section>

      {/* Closing section - light bg, dark text */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-foreground/90 space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              {t.about.certs}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
               {certifications.map((cert, index) => (
                 <div 
                   key={index} 
                   className={`flex-shrink-0 flex items-center justify-center ${
                     index === 0 ? 'w-28 h-28' : index === 1 ? 'w-32 h-32' : 'w-28 h-28'
                   }`}
                 >
                   <img 
                     src={cert.image} 
                     alt={cert.alt}
                     className="w-full h-full object-cover"
                   />
                 </div>
               ))}
             </div>
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                  {t.about.accreditedBy}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8">
                   <img
                     src={iayt}
                     alt="IAYT Accredited Yoga Therapy Training Program"
                     className="w-64 h-auto object-contain"
                   />
                   <a
                     href="https://yogatherapygreece.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <img
                       src={yogaTherapyGreece}
                       alt="Yoga Therapy Greece"
                       className="w-32 h-auto object-contain"
                     />
                   </a>
                </div>
              </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl leading-relaxed font-bold text-foreground">
              {t.about.closing1}
            </p>
            <p className="text-2xl leading-relaxed font-bold text-foreground mt-2">
              {t.about.closing2}
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
