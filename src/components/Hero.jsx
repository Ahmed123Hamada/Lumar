import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
const heroImage = '/images/global-logistics-transportation-network.jpg';

const Hero = () => {
  const { t, direction } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with subtle motion */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Global Sourcing and Trade Logistics - Lumar Trade Office"
          fetchpriority="high"
          loading="eager"
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover object-center animate-hero-zoom"
        />
        {/* Overlay: light at top, slightly stronger at bottom for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/40 to-primary-blue/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-blue/30 via-transparent to-primary-blue/25"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <div className="hero-entrance max-w-4xl mx-auto">
          <h1 className="hero-title text-display font-bold text-white mb-6 tracking-tight drop-shadow-md">
            {t.hero.title.split('|').map((part, index, array) => (
              <span key={index} className={index > 0 ? "text-[0.85em] text-white/90 font-medium" : ""}>
                {part}
                {index < array.length - 1 && (
                  <span className="text-primary-gold mx-2">|</span>
                )}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-white/95 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="hero-ctas flex justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-gradient-to-r from-primary-gold to-primary-orange text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-orange-glow hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 border border-white/20 overflow-hidden max-md:px-5 max-md:py-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta}
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${direction === 'rtl' ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll-bounce"
        aria-hidden
      >
        <div className="w-9 h-14 rounded-full border-2 border-primary-gold/70 flex items-start justify-center pt-3 bg-primary-blue/20 backdrop-blur-sm">
          <div className="w-1.5 h-2.5 bg-primary-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
