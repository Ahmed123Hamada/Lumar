import { useLanguage } from '../LanguageContext';
import { Globe, MapPin } from 'lucide-react';

const GlobalReach = () => {
    const { t } = useLanguage();

    const regions = [
        { ...t.globalReach.region1, color: 'bg-red-50 text-red-600 border-red-100' },
        { ...t.globalReach.region2, color: 'bg-blue-50 text-blue-600 border-blue-100' },
        { ...t.globalReach.region3, color: 'bg-amber-50 text-amber-600 border-amber-100' },
        { ...t.globalReach.region4, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    ];

    return (
        <section id="global-reach" className="py-20 bg-surface-50 relative overflow-hidden">
            {/* Background Map Decoration */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <Globe className="absolute -right-20 top-20 w-96 h-96 text-primary-blue" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
                        {t.globalReach.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t.globalReach.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {regions.map((region, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl border ${region.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/50 backdrop-blur-sm`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${region.color.split(' ')[0]}`}>
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">
                                    {region.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {region.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
