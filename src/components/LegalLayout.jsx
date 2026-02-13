import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
const legalBg = '/images/global-logistics-transportation-network.jpg';

const LegalLayout = ({ title, children, onBack }) => {
    const { direction, t } = useLanguage();
    const isRtl = direction === 'rtl';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-surface-50 animate-slide-down pb-20 w-full overflow-x-hidden ">
            {/* Background Hero Section */}
            <div className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 w-full h-full">
                    <img
                        src={legalBg}
                        alt="LUMAR Trade Office - Legal and Compliance Documentation"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div
                        className="absolute inset-0 bg-primary-blue/85"
                        aria-hidden
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-surface-50 via-transparent to-primary-blue/30"
                        aria-hidden
                    />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 max-md:pb-10">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary-gold/20 backdrop-blur-md border border-primary-gold/30 text-primary-gold text-xs font-bold uppercase tracking-widest mb-6 focus-visible:outline-none">
                        LUMAR Legal
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-sm">
                        {title}
                    </h1>
                    <div className="h-1.5 w-24 bg-primary-gold rounded-full mx-auto mt-8 shadow-lg shadow-primary-gold/20 " />
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl -mt-20 relative z-20">
                <button
                    onClick={onBack}
                    className={`flex items-center gap-2 text-white bg-primary-blue/40 backdrop-blur-md px-5 py-2.5 rounded-xl hover:bg-primary-gold hover:text-primary-blue transition-all mb-8 group shadow-xl border border-white/10`}
                >
                    <ArrowLeft size={18} className={`${isRtl ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} />
                    <span className="font-bold text-sm tracking-wide">
                        {isRtl ? 'العودة للرئيسية' : 'Back to Home'}
                    </span>
                </button>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-primary-blue/10 border border-black/5 overflow-hidden relative">
                    {/* Subtle gold accent */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-gold/40 via-primary-gold to-primary-gold/40" />

                    <div className="prose prose-blue max-w-none text-primary-blue/80 leading-relaxed space-y-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
