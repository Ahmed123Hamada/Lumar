import React from 'react';
import LegalLayout from './LegalLayout';
import { useLanguage } from '../LanguageContext';
import { Database, ShieldCheck, Cookie, Activity, UserCog, Mail } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
    const { t } = useLanguage();

    const sections = [
        {
            icon: <Database className="text-primary-gold" size={24} />,
            title: t.privacy.sections.contactForm.title,
            content: t.privacy.sections.contactForm.content
        },
        {
            icon: <Activity className="text-primary-gold" size={24} />,
            title: t.privacy.sections.serverLogs.title,
            content: t.privacy.sections.serverLogs.content
        },
        {
            icon: <Cookie className="text-primary-gold" size={24} />,
            title: t.privacy.sections.cookies.title,
            content: t.privacy.sections.cookies.content
        },
        {
            icon: <ShieldCheck className="text-primary-gold" size={24} />,
            title: t.privacy.sections.purpose.title,
            content: t.privacy.sections.purpose.content
        },
        {
            icon: <UserCog className="text-primary-gold" size={24} />,
            title: t.privacy.sections.rights.title,
            content: t.privacy.sections.rights.content
        },
        {
            icon: <Mail className="text-primary-gold" size={24} />,
            title: t.privacy.sections.contact.title,
            content: t.privacy.sections.contact.content
        }
    ];

    return (
        <LegalLayout title={t.privacy.title} onBack={onBack}>
            <p className="text-lg text-primary-blue/70 mb-10 leading-relaxed font-medium">
                {t.privacy.introduction}
            </p>

            <div className="space-y-10">
                {sections.map((section, index) => (
                    <div key={index} className="relative pl-0 md:pl-4">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-50 flex items-center justify-center border border-black/[0.03] shadow-sm">
                                {section.icon}
                            </div>
                            <h2 className="text-xl font-bold text-primary-blue">
                                {section.title}
                            </h2>
                        </div>
                        <div className="text-primary-blue/80 leading-relaxed">
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </LegalLayout>
    );
};

export default PrivacyPolicy;
