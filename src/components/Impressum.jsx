import React from 'react';
import LegalLayout from './LegalLayout';
import { useLanguage } from '../LanguageContext';
import { Mail, Phone, MapPin, User, Briefcase, Info } from 'lucide-react';

const Impressum = ({ onBack }) => {
    const { t } = useLanguage();

    const sections = [
        {
            icon: <User className="text-primary-gold" size={20} />,
            label: t.impressum.name,
            value: "Moayad Kzibra"
        },
        {
            icon: <Briefcase className="text-primary-gold" size={20} />,
            label: t.impressum.tradeName,
            value: "LUMAR – Trade & Sourcing Services"
        },
        {
            icon: <MapPin className="text-primary-gold" size={20} />,
            label: t.impressum.address,
            value: "Tucholskystr.35\n44141, Dortmund, Germany"
        },
        {
            icon: <Mail className="text-primary-gold" size={20} />,
            label: t.footer.email,
            value: "info@lumarglobal.com",
            isLink: true,
            href: "mailto:info@lumarglobal.com"
        },
        {
            icon: <Phone className="text-primary-gold" size={20} />,
            label: t.footer.phone,
            value: "+49 155 65999683",
            isLink: true,
            href: "tel:+4915565999683"
        },
        {
            icon: <Info className="text-primary-gold" size={20} />,
            label: t.impressum.legalStatus,
            value: `${t.impressum.consultant}\n(${t.impressum.registrationStatus})`
        }
    ];

    return (
        <LegalLayout title={t.impressum.title} onBack={onBack}>
            <div className="grid gap-8 sm:grid-cols-2">
                {sections.map((section, index) => (
                    <div key={index} className="flex gap-4 p-5 rounded-2xl bg-surface-50 border border-black/[0.03]">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            {section.icon}
                        </div>
                        <div>
                            <p className="text-xs font-bold text-primary-gold uppercase tracking-wider mb-1">
                                {section.label}
                            </p>
                            {section.isLink ? (
                                <a
                                    href={section.href}
                                    className="text-primary-blue font-medium hover:text-primary-gold transition-colors break-all"
                                    dir="ltr"
                                >
                                    {section.value}
                                </a>
                            ) : (
                                <p className="text-primary-blue font-medium whitespace-pre-line leading-relaxed" dir="ltr">
                                    {section.value}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-primary-blue/5 border border-primary-blue/10">
                <p className="text-sm text-primary-blue/70 italic">
                    {t.isRtl
                        ? "يتم توفير هذه المعلومات وفقاً لمتطلبات القانون الألماني (Telemediengesetz)."
                        : "This information is provided in accordance with the German Telemedia Act (Telemediengesetz)."}
                </p>
            </div>
        </LegalLayout>
    );
};

export default Impressum;
