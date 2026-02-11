import { useLanguage } from '../LanguageContext';
import { useScrollRevealStagger } from '../hooks/useScrollReveal';

const Methodology = () => {
    const { t } = useLanguage();
    const staggerRef = useScrollRevealStagger();

    const steps = [
        t.methodology.step1,
        t.methodology.step2,
        t.methodology.step3,
        t.methodology.step4,
        t.methodology.step5,
    ];

    return (
        <section id="methodology" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={staggerRef} className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4 reveal-top">
                            {t.methodology.title}
                        </h2>
                        <p className="text-lg text-gray-600 reveal-top">
                            {t.methodology.subtitle}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group relative flex gap-6 p-6 bg-gradient-to-r from-surface-50 to-white rounded-2xl border border-gray-100 hover:border-primary-gold/30 transition-all duration-300 hover:shadow-lg reveal-item"
                            >
                                {/* Step Number */}
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-gold to-primary-orange flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-primary-blue mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Line (except for last item) */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-[47px] top-[90px] w-0.5 h-12 bg-gradient-to-b from-primary-gold/50 to-transparent z-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
