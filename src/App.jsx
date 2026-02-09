import { Suspense, lazy } from 'react';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

// Lazy load components that are below the fold
const About = lazy(() => import('./components/About'));
const WhyLumar = lazy(() => import('./components/WhyLumar'));
const Services = lazy(() => import('./components/Services'));
const Footer = lazy(() => import('./components/Footer'));

// Placeholder for loading state
const LoadingSection = () => (
  <div className="py-20 flex items-center justify-center bg-surface-50">
    <div className="w-10 h-10 border-4 border-primary-gold/30 border-t-primary-gold rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <div className="min-h-screen bg-surface-50 font-lama text-primary-blue">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<LoadingSection />}>
            <About />
            <WhyLumar />
            <Services />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;
