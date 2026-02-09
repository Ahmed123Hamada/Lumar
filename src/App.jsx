import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Opportunities from './components/Opportunities';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <div className="min-h-screen bg-surface-50 font-lama text-primary-blue">
        <Header />
        <main>
          <Hero />
          <Services />
          <Opportunities />
          <Trust />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;
