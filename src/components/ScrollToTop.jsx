import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        if (window.lenis) {
            window.lenis.scrollTo(0);
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="p-3 bg-primary-gold text-primary-blue rounded-full shadow-lg shadow-primary-gold/20 hover:bg-primary-gold-light hover:shadow-glow-gold hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </button>
        </div>
    );
};

export default ScrollToTop;
