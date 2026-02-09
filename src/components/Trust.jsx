import { Shield, TrendingUp, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useScrollReveal, useScrollRevealStagger } from '../hooks/useScrollReveal';
import imgSecure from '../assets/images/global-logistics-transportation-network.jpg';
import imgLogistics from '../assets/images/aerial-view-container-ship-harbor.jpg';
import imgGermany from '../assets/images/logistic-centre.jpg';

const Trust = () => {
  const { t } = useLanguage();
  const headingRef = useScrollReveal();
  const gridRef = useScrollRevealStagger();

  const trustPoints = [
    {
      icon: Shield,
      title: t.trust.point1.title,
      description: t.trust.point1.description,
      image: imgSecure,
    },
    {
      icon: TrendingUp,
      title: t.trust.point2.title,
      description: t.trust.point2.description,
      image: imgLogistics,
    },
    {
      icon: MapPin,
      title: t.trust.point3.title,
      description: t.trust.point3.description,
      image: imgGermany,
    },
  ];

  return (
    <section className="py-24 sm:py-28 bg-surface-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal-item text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-display-sm font-bold text-primary-blue mb-4">
            {t.trust.title}
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;

            // Determine animation direction
            let animationClass = 'reveal-item';
            if (index === 0) animationClass = 'reveal-left';
            if (index === 2) animationClass = 'reveal-right';

            const delayClass = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'][index];
            return (
              <article
                key={index}
                className={`${animationClass} ${delayClass} group relative bg-white rounded-2xl overflow-hidden shadow-card-modern hover:shadow-card-modern-hover hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 will-change-transform`}
              >
                <div className="relative h-36 overflow-hidden rounded-t-2xl">
                  <img
                    src={point.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/45 to-primary-blue/25" aria-hidden />
                  <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border border-white/25">
                    <Icon className="text-white" size={22} aria-hidden />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-primary-blue mb-2 group-hover:text-primary-gold-dark transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-surface-300 leading-relaxed">
                    {point.description}
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

export default Trust;
