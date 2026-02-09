import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import logo from '../assets/images/Logo lumar -01.png';

const navItems = [
  { id: 'home', key: 'home' },
  { id: 'services', key: 'services' },
  { id: 'opportunities', key: 'opportunities' },
  { id: 'contact', key: 'contact' },
];

const Header = () => {
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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setIsScrolled(currentScrollY > 24);
      setLastScrollY(currentScrollY);

      // Active section logic
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollCheck = currentScrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollCheck) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'py-3 bg-primary-blue/80 backdrop-blur-lg shadow-lg border-b border-white/5'
        : 'py-5 bg-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center group relative z-50 p-2"
          >
            {/* Blurred background behind logo */}
            <div className="absolute inset-0 bg-white/10 rounded-xl blur-lg scale-110" />
            <div className="absolute inset-0 bg-primary-gold/5 rounded-xl blur-md scale-105" />
            <img
              src={logo}
              alt="LUMAR"
              className={`transition-all duration-500 ${isScrolled ? 'h-16 w-42' : 'h-16 md:h-20 w-auto'} relative z-10 px-1`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-2xl backdrop-blur-sm border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === item.id
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
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button
              onClick={toggleLanguage}
              className="p-2 text-white/90 hover:text-primary-gold transition-colors"
            >
              <span className="text-sm font-medium">{language === 'en' ? 'AR' : 'EN'}</span>
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

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
        >
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-dark to-[#001440]" />

          {/* Decorative background elements */}
          <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-74 bg-white/5 rounded-full blur-2xl" />

          {/* Content container */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
            {/* Logo in menu */}
            <div className="mb-12">
              <img
                src={logo}
                alt="LUMAR"
                className="h-16 w-auto opacity-90"
              />
            </div>

            {/* Navigation items */}
            <nav className=" flex flex-col items-center justify-center align-center gap-4 p-6 w-full max-w-sm mt-[23rem] h-[calc(100vh-15rem)] border border-black/10 bg-black/50 w-[calc(100vw-2rem)] rounded-2xl backdrop-blur-md">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className={`w-full py-4 px-6 text-xl font-bold tracking-wide rounded-2xl transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    } ${activeSection === item.id
                      ? 'bg-gradient-to-r from-primary-gold to-primary-orange text-white shadow-2xl shadow-primary-gold/30 scale-105'
                      : 'bg-white/10 backdrop-blur-md text-white/90 hover:bg-white/20 hover:scale-105 border border-white/20'
                    }`}
                >
                  {t.nav[item.key]}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
