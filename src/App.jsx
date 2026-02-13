import { Suspense, lazy, useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import Lenis from 'lenis';


import './index.css';

// Lazy load components
const About = lazy(() => import('./components/About'));
const WhyLumar = lazy(() => import('./components/WhyLumar'));
const Services = lazy(() => import('./components/Services'));
const Opportunities = lazy(() => import('./components/Opportunities'));
const Methodology = lazy(() => import('./components/Methodology'));
const GlobalReach = lazy(() => import('./components/GlobalReach'));
const Logistics = lazy(() => import('./components/Logistics'));
const PaymentSecurity = lazy(() => import('./components/PaymentSecurity'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Impressum = lazy(() => import('./components/Impressum'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));

// Placeholder for loading state
const LoadingSection = () => (
  <div className="py-20 flex items-center justify-center bg-surface-50">
    <div className="w-10 h-10 border-4 border-primary-gold/30 border-t-primary-gold rounded-full animate-spin" />
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Synchronize scroll-to links with Lenis
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          lenis.scrollTo(target);
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      lenis.destroy();
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['impressum', 'privacy'].includes(hash)) {
        setCurrentPage(hash);
        if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = page === 'home' ? '' : page;
  };

  return (
    <LanguageProvider>
      <ScrollProgress />
      <div className="min-h-screen bg-surface-50 font-lama text-primary-blue">
        <Header onHomeClick={() => navigateTo('home')} />

        <main>
          {currentPage === 'home' && (
            <>
              <Hero />
              <Suspense fallback={<LoadingSection />}>
                <About />
                <WhyLumar />
                <Services />
                <Opportunities />
                {/* <Methodology /> */}
                <GlobalReach />
                <Logistics />
                {/* <PaymentSecurity /> */}
                <Contact />
              </Suspense>
            </>
          )}

          {currentPage === 'impressum' && (
            <Suspense fallback={<LoadingSection />}>
              <Impressum onBack={() => navigateTo('home')} />
            </Suspense>
          )}

          {currentPage === 'privacy' && (
            <Suspense fallback={<LoadingSection />}>
              <PrivacyPolicy onBack={() => navigateTo('home')} />
            </Suspense>
          )}
        </main>

        <Suspense fallback={null}>
          <Footer onLegalClick={navigateTo} />
        </Suspense>

        <ScrollToTop />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}

export default App;
