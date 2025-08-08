import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import { useLanguage } from '../hooks/useLanguage';

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 dark:from-secondary-900 dark:to-secondary-800 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image mejorada */}
          <div className="mt-24 mb-16">
            <div className="mx-auto w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-primary-500 via-primary-400 to-accent-500 p-[3px] shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-secondary-900 ring-2 ring-white dark:ring-secondary-800 overflow-hidden">
                <img
                  src={profileImage}
                  alt="Foto de perfil de Daniel Jiménez"
                  className="w-full h-full rounded-full object-cover object-top antialiased select-none"
                  loading="eager"
                  decoding="async"
                  width={224}
                  height={224}
                  sizes="(min-width: 768px) 14rem, 11rem"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 dark:text-white mb-6">
            {t('hero.greeting')}{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Daniel Jiménez
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {t('hero.viewProjects')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.contact')}
            </button>
            <a
              href="/cv-daniel-jimenez.pdf"
              download="CV-Daniel-Jimenez.pdf"
              className="flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Download size={20} />
              {t('hero.downloadCV')}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/djimenezunihumboldt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-jim%C3%A9nez-p%C3%A9rez-64b512133/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;