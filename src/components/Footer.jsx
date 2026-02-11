import { Mail, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import logo from '../assets/images/Logo lumar -06.png';
import footerBg from '../assets/images/vibrant-nighttime-port-scene-with-cargo-city-lights.jpg';
import { useScrollRevealStagger } from '../hooks/useScrollReveal';

const Footer = ({ onLegalClick }) => {
  const { t } = useLanguage();
  const footerRef = useScrollRevealStagger();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'services', label: t.footer.services },
    { id: 'opportunities', label: t.footer.opportunities },
    { id: 'contact', label: t.footer.contact },
  ];

  return (
    <footer id="contact" className="relative text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerBg}
          alt=""
          loading="lazy"
          decodings="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-primary-blue/92"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-blue via-primary-blue/95 to-primary-blue/85"
          aria-hidden
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Top accent line */}
        <div className="h-1 w-24 bg-primary-gold rounded-full mb-12" aria-hidden />

        <div ref={footerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-14">
          {/* Company */}
          <div className="reveal-item reveal-delay-1">
            <img src={logo} alt="LUMAR" className=" w-48  opacity-95 rounded-lg" />
            <p className="text-white/80 leading-relaxed text-sm max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="reveal-item reveal-delay-2">
            <h3 className="text-xs font-bold text-primary-gold uppercase tracking-widest mb-5">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-primary-gold transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-item reveal-delay-3">
            <h3 className="text-xs font-bold text-primary-gold uppercase tracking-widest mb-5">
              {t.footer.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onLegalClick('impressum')}
                  className="text-white/80 hover:text-primary-gold transition-colors text-sm text-left"
                >
                  {t.footer.impressum}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLegalClick('privacy')}
                  className="text-white/80 hover:text-primary-gold transition-colors text-sm text-left"
                >
                  {t.footer.privacy}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="reveal-item reveal-delay-4">
            <h3 className="text-xs font-bold text-primary-gold uppercase tracking-widest mb-5">
              {t.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-gold/20 text-primary-gold">
                  <Globe size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-xs text-white/50">{t.footer.website}</p>
                  <a
                    href="https://lumarglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-primary-gold transition-colors text-sm font-medium"
                  >
                    lumarglobal.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-gold/20 text-primary-gold">
                  <Mail size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-xs text-white/50">{t.footer.email}</p>
                  <a
                    href="mailto:info@lumarglobal.com"
                    className="text-white/90 hover:text-primary-gold transition-colors text-sm font-medium"
                  >
                    info@lumarglobal.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-gold/20 text-primary-gold">
                  <Phone size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-xs text-white/50">{t.footer.phone}</p>
                  <a
                    href="https://wa.me/4915565999683"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-primary-gold transition-colors text-sm font-medium"
                  >
                    +49 155 65999683
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center sm:text-left">
            {t.footer.rights}
          </p>
          <p className="text-primary-gold/90 text-sm font-medium">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
