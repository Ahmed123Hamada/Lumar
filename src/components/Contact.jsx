import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Send, CheckCircle, Smartphone, Mail, MapPin } from 'lucide-react';
import { useScrollReveal, useScrollRevealStagger } from '../hooks/useScrollReveal';

const Contact = () => {
    const { t, direction } = useLanguage();
    const revealRef = useScrollReveal();
    const contentRef = useScrollRevealStagger();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setIsSent(false), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-surface-50">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-blue/5 to-transparent skew-x-12 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div ref={revealRef} className="reveal-item text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-display-sm font-bold text-primary-blue mb-4">
                        {t.contactSection.title}
                    </h2>
                    <p className="text-lg text-surface-300">
                        {t.contactSection.subtitle}
                    </p>
                </div>

                <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="reveal-left space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-card-modern hover:shadow-card-modern-hover transition-all duration-300 group">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-primary-blue/5 flex items-center justify-center text-primary-blue group-hover:scale-110 transition-transform duration-300">
                                    <Smartphone size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary-blue mb-2">{t.footer.contact}</h3>
                                    <div className="space-y-1">
                                        <p className="text-surface-300">+49 155 65999683</p>
                                        <p className="text-sm text-primary-gold font-medium">Available on WhatsApp</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-card-modern hover:shadow-card-modern-hover transition-all duration-300 group">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-primary-gold/10 flex items-center justify-center text-primary-gold group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary-blue mb-2">{t.footer.email}</h3>
                                    <p className="text-surface-300">info@lumarglobal.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-card-modern hover:shadow-card-modern-hover transition-all duration-300 group">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-primary-orange/5 flex items-center justify-center text-primary-orange group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary-blue mb-2">{t.contactSection.location.title}</h3>
                                    <p className="text-surface-300">{t.contactSection.location.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="reveal-right bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-surface-200/50 relative overflow-hidden"
                    >
                        {isSent && (
                            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary-blue mb-2">{t.contactSection.form.sent}</h3>
                                <p className="text-surface-300">{t.contactSection.subtitle}</p>
                            </div>
                        )}

                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-primary-blue ml-1 block">
                                    {t.contactSection.form.name}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-surface-50 border-transparent focus:bg-white focus:border-primary-gold focus:ring-4 focus:ring-primary-gold/10 transition-all duration-200 outline-none"
                                    placeholder={t.contactSection.form.name}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-primary-blue ml-1 block">
                                    {t.contactSection.form.phone}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-surface-50 border-transparent focus:bg-white focus:border-primary-gold focus:ring-4 focus:ring-primary-gold/10 transition-all duration-200 outline-none"
                                    placeholder={t.contactSection.form.phone}
                                />
                            </div>
                        </div>

                        <div className="space-y-2 mb-6">
                            <label className="text-sm font-semibold text-primary-blue ml-1 block">
                                {t.contactSection.form.email}
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-surface-50 border-transparent focus:bg-white focus:border-primary-gold focus:ring-4 focus:ring-primary-gold/10 transition-all duration-200 outline-none"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2 mb-8">
                            <label className="text-sm font-semibold text-primary-blue ml-1 block">
                                {t.contactSection.form.message}
                            </label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-surface-50 border-transparent focus:bg-white focus:border-primary-gold focus:ring-4 focus:ring-primary-gold/10 transition-all duration-200 outline-none resize-none"
                                placeholder={t.contactSection.form.message}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-primary-blue text-white rounded-xl font-bold shadow-lg shadow-primary-blue/20 hover:shadow-xl hover:shadow-primary-blue/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>{t.contactSection.form.submit}</span>
                                    <Send size={18} className={`transition-transform duration-300 ${direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
