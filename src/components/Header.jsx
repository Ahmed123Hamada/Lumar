import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
const logo = '/images/Logo lumar -01.png';

const navItems = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'opportunities', key: 'opportunities' },
  { id: 'contact', key: 'contact' },
];

const Header = ({ onHomeClick }) => {
  const { t, toggleLanguage, language, direction } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Hide on scroll down, show on scroll up
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          setIsScrolled(currentScrollY > 24);
          setLastScrollY(currentScrollY);

          // Active section detection
          const scrollCheck = currentScrollY + 120;
          for (let i = navItems.length - 1; i >= 0; i--) {
            const el = document.getElementById(navItems[i].id);
            if (el && el.offsetTop <= scrollCheck) {
              setActiveSection(navItems[i].id);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);

    const currentHash = window.location.hash.replace('#', '');
    if (['impressum', 'privacy'].includes(currentHash)) {
      window.location.hash = id === 'home' ? '' : id;
      return;
    }

    if (id === 'home') {
      if (window.lenis) {
        window.lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        if (window.lenis) {
          window.lenis.scrollTo(element);
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-3' : 'py-5'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div
        className={`container mx-auto p-3 sm:px-6 border border-white/5 rounded-2xl backdrop-blur-sm relative z-[60] ${isScrolled
          ? 'bg-primary-blue/70 backdrop-blur-lg shadow-lg border-b border-white/5 py-2'
          : 'bg-transparent'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center justify-center group relative z-50 transition-transform duration-300 active:scale-95 text-left"
          >
            <div
              className={`absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-card transition-all duration-300 group-hover:shadow-card-hover group-hover:border-primary-gold/30 border border-white/10`}
            />
            <img
              src={logo}
              alt="LUMAR"
              width="180"
              height="56"
              className={`transition-all duration-500 relative z-10 ${isScrolled ? 'h-12 w-auto' : 'w-auto h-14 md:h-14'
                }`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-2 rounded-2xl backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === item.id
                  ? 'text-primary-blue bg-white shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
              >
                {t.nav[item.key]}
              </button>
            ))}
            <div className="w-px h-6 bg-white/20 mx-2" />
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <Globe size={18} className="text-primary-gold" />
              <span className="text-sm font-medium text-primary-gold">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button
              onClick={toggleLanguage}
              className="p-2 text-white/90 hover:text-primary-gold transition-colors"
            >
              <span className="text-sm font-medium">
                {language === 'en' ? 'AR' : 'EN'}
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-primary-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/*               MOBILE MENU OVERLAY                  */}
      {/* ──────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen
          ? 'opacity-100 visible pointer-events-auto'
          : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red   via-red-dark to-[#001440]" />

        {/* Decorative blobs (optional) */}
        <div className="absolute  right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-gold/10 rounded-full blur-3xl translate-x-1/3 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-orange/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 animate-pulse-slow" style={{ animationDelay: '1.2s' }} />

        {/* Main content – centered vertically & horizontally */}
        <div className="relative z-10 flex flex-col items-top justify-top min-h-screen px-6 mt-28">

          {/* Navigation items */}
          <nav className="flex flex-col items-center gap-5 w-full max-w-md bg-black/30 backdrop-blur-lg text-white border border-white/10 hover:scale-102 hover:shadow-lg p-4 rounded-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`
                  w-full max-w-sm py-5 px-8 text-xl sm:text-2xl font-semibold tracking-wide
                  rounded-2xl transition-all duration-500 transform
                  ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                  ${activeSection === item.id
                    ? 'bg-gradient-to-r from-primary-gold to-primary-orange text-primary-blue shadow-2xl shadow-primary-gold/40 scale-105'
                    : 'bg-white/10 backdrop-blur-lg text-white border border-white/10  hover:scale-102 hover:shadow-lg'
                  }
                `}
              >
                {t.nav[item.key]}
              </button>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;