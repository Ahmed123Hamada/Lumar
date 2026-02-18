import { Package, Users, Cog } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useScrollReveal, useScrollRevealStagger } from '../hooks/useScrollReveal';
const imgIntlTrade = '/images/Services/SERVICE3.jpg';
const imgNetwork = '/images/Services/SERVICE1.jpg';
const imgIndustrial = '/images/Services/SERVICE2.jpg';
const logoEng = '/images/Services/Logo lumar -02eng.png';
const logoAr = '/images/Services/Logo lumar -services.png';

const Services = () => {
  const { t, language } = useLanguage();
  const headingRef = useScrollReveal();
  const gridRef = useScrollRevealStagger();

  const brandLogo = language === 'en' ? logoEng : logoAr;

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
    <section id="services" className="py-10 sm:py-28 bg-white overflow-hidden ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="flex justify-center items-center gap-10 text-center mx-auto mb-16 max-md:flex-col max-md:gap-y-6">
          {/* Left: Logo + Tag */}
          <div className="flex flex-col justify-center items-center">
            <div className="relative group">
              {/* Animated Glow Background */}
              <div className="absolute -inset-8 bg-primary-orange/10 rounded-full blur-3xl group-hover:bg-primary-orange/20 transition-all duration-700 opacity-0 group-hover:opacity-100" />

              {/* Logo Background Card */}
              <div className="relative bg-white px-10 py-6 rounded-[2rem] shadow-card border border-primary-blue/5 backdrop-blur-sm group-hover:border-primary-orange/20 transition-all duration-500 group-hover:shadow-card-hover group-hover:-translate-y-1">
                <img
                  src={brandLogo}
                  alt="Lumar Services Logo"
                  className="relative h-10 sm:h-10 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-gold/20 border border-primary-gold/30 text-primary-gold text-xs font-bold uppercase tracking-widest mt-4">
              {t.services.tag}
            </div>
          </div>

          {/* Right: Title + Subtitle */}
          <div className="flex flex-col items-center max-md:items-center ">
            <h2 className="text-display-sm font-bold text-primary-blue">
              {t.services.title.split('|').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-primary-gold mx-2">|</span>
                  )}
                </span>
              ))}
            </h2>
            <p className="text-lg w-[50%] text-black/40 leading-relaxed text-center">
              {t.services.subtitle}
            </p>
          </div>
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
