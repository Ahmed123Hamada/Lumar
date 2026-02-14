import { useLanguage } from '../LanguageContext';
import { Shield, Award, Globe, FileCheck, Layers, Briefcase, Ship, Building2 } from 'lucide-react';
import { useScrollRevealStagger } from '../hooks/useScrollReveal';

const WhyLumar = () => {
    const { t } = useLanguage();
    const staggerRef = useScrollRevealStagger();

    const icons = [Shield, Award, Globe, FileCheck, Layers, Briefcase, Ship, Building2];

    const reasons = [
        t.why.reason1,
        t.why.reason2,
        t.why.reason3,
        t.why.reason4,
        t.why.reason5,
        t.why.reason6,
        t.why.reason7,
        t.why.reason8,
    ];

    return (
        <section id="why" className="py-20 bg-gradient-to-br from-surface-50 via-white to-surface-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
                        {t.why.title}
                    </h2>
                </div>

                <div ref={staggerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {reasons.map((reason, index) => {
                        const Icon = icons[index];
                        return (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 reveal-item"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-primary-gold" />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary-blue mb-2">
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyLumar;
