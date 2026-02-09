import { Truck, Package, Gavel, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useScrollReveal, useScrollRevealStagger } from '../hooks/useScrollReveal';
import imgEquipment from '../assets/images/high-angle-view-container-ship-commercial-dock.jpg';
import imgSurplus from '../assets/images/aerial-view-cargo-ship-cargo-container-harbor.jpg';
import imgAuctions from '../assets/images/vibrant-nighttime-port-scene-with-cargo-city-lights.jpg';

const Opportunities = () => {
  const { t, language } = useLanguage();
  const headingRef = useScrollReveal();
  const gridRef = useScrollRevealStagger();

  const whatsappNumber = '4915565999683';

  const createWhatsAppLink = (opportunityTitle) => {
    const message = language === 'en'
      ? `Hello LUMAR, I'm interested in: ${opportunityTitle}`
      : `مرحباً لومار، أنا مهتم بـ: ${opportunityTitle}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const opportunities = [
    {
      icon: Truck,
      title: t.opportunities.opp1.title,
      description: t.opportunities.opp1.description,
      image: imgEquipment,
    },
    {
      icon: Package,
      title: t.opportunities.opp2.title,
      description: t.opportunities.opp2.description,
      image: imgSurplus,
    },
    {
      icon: Gavel,
      title: t.opportunities.opp3.title,
      description: t.opportunities.opp3.description,
      image: imgAuctions,
    },
  ];

  return (
    <section id="opportunities" className="py-24 sm:py-28 bg-primary-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-gold/5 to-transparent pointer-events-none" aria-hidden />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={headingRef} className="reveal-item text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm font-bold text-white mb-4">
            {t.opportunities.title}
          </h2>
          <p className="text-xl text-primary-gold font-medium mb-3">
            {t.opportunities.subtitle}
          </p>
          <p className="text-base text-white/80 leading-relaxed">
            {t.opportunities.description}
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            const delayClass = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'][index];
            return (
              <article
                key={index}
                className={`reveal-item ${delayClass} group relative bg-white rounded-2xl overflow-hidden shadow-card-modern hover:shadow-card-modern-hover hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 will-change-transform`}
              >
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={opp.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/55 to-primary-blue/35" aria-hidden />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border border-white/25 shadow-inner">
                    <Icon className="text-white" size={24} aria-hidden />
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white drop-shadow-md">
                    {opp.title}
                  </h3>
                </div>
                <div className="p-6 lg:p-7">
                  <p className="text-sm text-surface-300 leading-relaxed min-h-[3.5rem] mb-5">
                    {opp.description}
                  </p>
                  <a
                    href={createWhatsAppLink(opp.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[#25D366] text-white rounded-xl text-sm font-semibold hover:bg-[#20bd5a] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 transition-all duration-200"
                  >
                    <MessageCircle size={20} aria-hidden />
                    {t.opportunities.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
