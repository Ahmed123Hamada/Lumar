import { Truck, Package, Gavel, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Opportunities = () => {
  const { t } = useLanguage();

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
    <section id="opportunities" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary-gold/10 border border-primary-gold/30 text-primary-gold text-sm font-semibold mb-4 tracking-wider uppercase">
            Special Division
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            LUMAR <span className="text-primary-gold">|</span> Special Trading
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.opportunities.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-primary-gold/50"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-gold via-primary-orange to-primary-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-gold/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-gold transition-colors">
                  {opp.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {opp.description}
                </p>

                <div className="flex items-center text-primary-gold text-sm font-semibold tracking-wide">
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    View Opportunities
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-gold text-gray-900 rounded-xl font-bold hover:bg-white transition-colors duration-300"
          >
            {t.opportunities.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
