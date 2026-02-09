import { useLanguage } from '../LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-6">
                        {t.about.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        {t.about.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
