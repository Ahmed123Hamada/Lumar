import { Truck, Package, Gavel, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useScrollRevealStagger } from '../hooks/useScrollReveal';
import specialBg from '../assets/images/vibrant-nighttime-port-scene-with-cargo-city-lights.jpg';

const Opportunities = () => {
  const { t } = useLanguage();
  const staggerRef = useScrollRevealStagger();

  const opportunities = [
    {
      icon: Truck,
      title: t.opportunities.opp1.title,
      description: t.opportunities.opp1.description,
    },
    {
      icon: Package,
      title: t.opportunities.opp2.title,
      description: t.opportunities.opp2.description,
    },
    {
      icon: Gavel,
      title: t.opportunities.opp3.title,
      description: t.opportunities.opp3.description,
    },
  ];

  return (
    <section id="opportunities" className="relative py-24 overflow-hidden min-h-[700px] flex items-center">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={specialBg}
          alt="Used Heavy Equipment, Truck Heads and Surplus Inventory Opportunities"
          className="w-full h-full object-cover"
        />
        {/* Deep navy overlay to match theme */}
        <div className="absolute inset-0 bg-primary-blue/50 backdrop-blur-[1px]" />
        {/* Radial gradient for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#001440_100%)] opacity-60" />
      </div>

      <div ref={staggerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-gold/20 border border-primary-gold/30 text-primary-gold text-xs font-bold uppercase tracking-widest mb-6 reveal-top">
            {t.opportunities.tag}
          </div>
          <div className="flex items-center justify-center flex-wrap gap-x-2 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight reveal-top max-md:text-3xl">
              {t.opportunities.title.split('|').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-primary-gold mx-2">|</span>
                  )}
                </span>
              ))}
            </h2>
          </div>

          <p className="text-lg text-white/70 max-w-2xl mx-auto reveal-top leading-relaxed">
            {t.opportunities.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary-gold/50 shadow-2xl reveal-item"
              >
                {/* Decorative gold glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-gold to-primary-orange rounded-[2.5rem] blur opacity-0 group-hover:opacity-20 transition duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-gold via-primary-orange to-primary-gold flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary-gold/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white m-auto h-[80px] group-hover:text-primary-gold transition-colors text-md">
                    {opp.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed text-md">
                    {opp.description}
                  </p>


                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary-gold text-primary-blue rounded-2xl font-extrabold hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary-gold/20"
          >
            {t.opportunities.cta}
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
