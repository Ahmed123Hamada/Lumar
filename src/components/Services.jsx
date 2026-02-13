import { Package, Users, Cog } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useScrollReveal, useScrollRevealStagger } from '../hooks/useScrollReveal';
const imgIntlTrade = '/images/Services/SERVICE3.jpg';
const imgNetwork = '/images/Services/SERVICE1.jpg';
const imgIndustrial = '/images/Services/SERVICE2.jpg';

const Services = () => {
  const { t } = useLanguage();
  const headingRef = useScrollReveal();
  const gridRef = useScrollRevealStagger();

  const services = [
    {
      icon: Package,
      title: t.services.service1.title,
      description: t.services.service1.description,
      image: imgIntlTrade,
      iconBg: 'bg-primary-orange',
      iconColor: 'text-white',
    },
    {
      icon: Users,
      title: t.services.service2.title,
      description: t.services.service2.description,
      image: imgNetwork,
      iconBg: 'bg-primary-orange',
      iconColor: 'text-white',
    },
    {
      icon: Cog,
      title: t.services.service3.title,
      description: t.services.service3.description,
      image: imgIndustrial,
      iconBg: 'bg-primary-orange',
      iconColor: 'text-white',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal-item text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm font-bold text-primary-blue mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-black/40 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Determine animation direction based on index
            let animationClass = 'reveal-item'; // Default (up)
            if (index === 0) animationClass = 'reveal-left';
            if (index === 2) animationClass = 'reveal-right';

            const delayClass = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'][index];
            return (
              <article
                key={index}
                className={`${animationClass} ${delayClass} group relative bg-white rounded-2xl overflow-hidden shadow-card-modern hover:shadow-card-modern-hover hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 will-change-transform`}
              >
                <div className="relative h-40 overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decodings="async"
                    width="400"
                    height="200"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/50 via-primary-blue/50 to-primary-blue/30" aria-hidden />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl  backdrop-blur-md border border-white/20 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Icon className={service.iconColor} size={24} aria-hidden />
                  </div>
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="text-lg font-bold text-primary-blue mb-2.5 group-hover:text-primary-orange transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm font-bold text-black/40 leading-relaxed group-hover:text-primary-blue transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
