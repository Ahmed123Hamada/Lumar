import { useLanguage } from '../LanguageContext';
import { ShieldCheck, FileText, Coins, CheckCircle2 } from 'lucide-react';

const PaymentSecurity = () => {
    const { t } = useLanguage();

    const features = [
        { ...t.payment.feature1, icon: ShieldCheck },
        { ...t.payment.feature2, icon: FileText },
        { ...t.payment.feature3, icon: Coins },
        { ...t.payment.feature4, icon: CheckCircle2 },
    ];

    return (
        <section id="payment" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                            {t.payment.title}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t.payment.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex gap-4 p-6 bg-gradient-to-br from-surface-50 to-white rounded-xl border border-gray-100 hover:border-primary-gold/30 transition-all duration-300 hover:shadow-md"
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

export default PaymentSecurity;
