import { useLanguage } from '../LanguageContext';
import { Ship, FileCheck, SearchCheck, MapPin } from 'lucide-react';

const Logistics = () => {
    const { t } = useLanguage();

    const features = [
        { ...t.logistics.feature1, icon: Ship },
        { ...t.logistics.feature2, icon: FileCheck },
        { ...t.logistics.feature3, icon: SearchCheck },
        { ...t.logistics.feature4, icon: MapPin },
    ];

    return (
        <section id="logistics" className="py-20 bg-gradient-to-br from-surface-50 via-white to-surface-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                            {t.logistics.title}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t.logistics.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-primary-gold/30 transition-all duration-300 hover:shadow-md"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-gold/20 to-primary-orange/20 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary-orange" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary-blue mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Logistics;
