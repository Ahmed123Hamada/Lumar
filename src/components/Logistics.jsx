import { useLanguage } from '../LanguageContext';
import { Ship, FileCheck, SearchCheck, MapPin } from 'lucide-react';
import { useScrollRevealStagger } from '../hooks/useScrollReveal';
import logisticBg from '../assets/images/airplane-flying-cargo-containers-sunset.jpg';

const Logistics = () => {
    const { t } = useLanguage();
    const staggerRef = useScrollRevealStagger();

    const features = [
        { ...t.logistics.feature1, icon: Ship },
        { ...t.logistics.feature2, icon: FileCheck },
        { ...t.logistics.feature3, icon: SearchCheck },
        { ...t.logistics.feature4, icon: MapPin },
    ];

    return (
        <section id="logistics" className="relative py-24 overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img
                    src={logisticBg}
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Modern Dark Overlay */}
                <div className="absolute inset-0 bg-primary-blue/40 backdrop-blur-[2px]" />
                {/* Gradient Overlay for better transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/20 via-transparent to-primary-blue/20" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div ref={staggerRef} className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-primary-gold/30 text-primary-blue text-xs font-bold uppercase tracking-widest mb-6 reveal-top">
                            LUMAR Logistics
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 reveal-top tracking-tight">
                            {t.logistics.title}
                        </h2>
                        <p className="text-lg text-white/70 max-w-3xl mx-auto reveal-top leading-relaxed">
                            {t.logistics.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex gap-6 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary-gold/40 transition-all duration-500 group shadow-2xl reveal-item"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-gold via-primary-orange to-primary-gold flex items-center justify-center shadow-lg shadow-primary-gold/20 group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-gold transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white/60 leading-relaxed">
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
