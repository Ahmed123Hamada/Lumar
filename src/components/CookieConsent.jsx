import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
    const { t, isRtl } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already given consent
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-6 left-6 right-6 z-[9999] md:left-auto md:max-w-md animate-slide-up`}>
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,39,104,0.15)] border border-black/5 p-6 md:p-8 relative overflow-hidden group">
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary-gold/5 rounded-full blur-2xl group-hover:bg-primary-gold/10 transition-colors" />

                <div className="relative flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-gold/10 flex items-center justify-center text-primary-gold">
                        <Cookie size={28} />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary-blue mb-2">
                            {isRtl ? 'نحن نستخدم الكوكيز' : 'We use cookies'}
                        </h3>
                        <p className="text-sm text-primary-blue/70 leading-relaxed mb-6">
                            {t.cookieBanner.message}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2.5 bg-primary-blue text-white rounded-xl text-sm font-semibold hover:bg-primary-blue/90 transition-all hover:shadow-lg hover:shadow-primary-blue/20"
                            >
                                {t.cookieBanner.accept}
                            </button>
                            <button
                                onClick={handleDecline}
                                className="px-6 py-2.5 bg-surface-100 text-primary-blue/60 rounded-xl text-sm font-semibold hover:bg-surface-200 transition-all"
                            >
                                {t.cookieBanner.decline}
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="flex-shrink-0 p-1 text-primary-blue/30 hover:text-primary-blue transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

// Add CSS for slide-up animation if logic not in index.css
// But I'll use a standard Tailwind class or add it to App.jsx style block

export default CookieConsent;
