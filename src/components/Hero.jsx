import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import heroImage from '../assets/images/global-logistics-transportation-network.jpg';

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
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center animate-hero-float"
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
          <p className="hero-label text-primary-gold font-semibold text-sm sm:text-base uppercase tracking-[0.2em] mb-5">
            Global Trade & Sourcing
          </p>
          <h1 className="hero-title text-display font-bold text-white mb-6 tracking-tight drop-shadow-md">
            {t.hero.title}
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-white/95 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('services')}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary-blue rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto border border-white/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta1}
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${direction === 'rtl' ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
            <button
              onClick={() => scrollToSection('opportunities')}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary-orange text-white rounded-2xl font-semibold text-base shadow-lg hover:bg-primary-orange-light hover:shadow-orange-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto border border-primary-gold/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta2}
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
