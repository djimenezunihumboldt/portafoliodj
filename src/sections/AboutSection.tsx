// import { Code2, Lightbulb, Target } from 'lucide-react';

import { useLanguage } from '../hooks/useLanguage';
// ...existing code...
import { useEffect, useState } from 'react';


const AboutSection = () => {

  const { t } = useLanguage();

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => setShow(true), 1200); // Retardo aún mayor
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            {t('about.title')} <span className="text-primary-600 dark:text-primary-400">{t('about.me')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <p className={`text-lg text-secondary-700 dark:text-secondary-200 leading-relaxed text-justify transition-all duration-[3000ms] ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t('about.description')}
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              {t('about.education.title')}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* University Education */}
            <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <a 
                    href="https://www.unihumboldt.edu.ve/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-white dark:bg-secondary-700 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-secondary-600"
                  >
                    <img 
                      src="/uah-logo.jpg" 
                      alt="Logo Universidad Alejandro de Humboldt" 
                      className="w-12 h-12 object-contain rounded-full"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-secondary-900 dark:text-white">
                      {t('about.education.degree')}
                    </h4>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {t('about.education.period')}
                    </span>
                  </div>
                  <a 
                    href="https://www.unihumboldt.edu.ve/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    <h5 className="text-lg font-semibold text-secondary-700 dark:text-secondary-300 mb-3 hover:underline">
                      {t('about.education.university')}
                    </h5>
                  </a>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {t('about.education.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* UCAB Education */}
            <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <a 
                    href="https://www.ucab.edu.ve/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-white dark:bg-secondary-700 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-secondary-600"
                  >
                    <img 
                      src="/ucab-logo.webp" 
                      alt="Logo Universidad Católica Andrés Bello" 
                      className="w-12 h-12 object-contain"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-secondary-900 dark:text-white">
                      {t('about.education.ucab.degree')}
                    </h4>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {t('about.education.ucab.period')}
                    </span>
                  </div>
                  <a 
                    href="https://www.ucab.edu.ve/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <h5 className="text-lg font-semibold text-secondary-700 dark:text-secondary-300 mb-3 hover:underline">
                      {t('about.education.ucab.university')}
                    </h5>
                  </a>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {t('about.education.ucab.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Education */}
            <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <a 
                    href="https://uepsanvicente.wordpress.com/historia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-white dark:bg-secondary-700 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-secondary-600"
                  >
                    <img 
                      src="/savi-logo.webp" 
                      alt="Logo U.E.P. Escuela San Vicente" 
                      className="w-12 h-12 object-contain"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-secondary-900 dark:text-white">
                      {t('about.education.technical')}
                    </h4>
                    <span className="text-accent-600 dark:text-accent-400 font-semibold bg-accent-50 dark:bg-accent-900/20 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {t('about.education.technical.year')}
                    </span>
                  </div>
                  <a 
                    href="https://uepsanvicente.wordpress.com/historia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300"
                  >
                    <h5 className="text-lg font-semibold text-secondary-700 dark:text-secondary-300 mb-3 hover:underline">
                      {t('about.education.technical.school')}
                    </h5>
                  </a>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {t('about.education.technical.desc')}
                  </p>
                </div>
              </div>
            </div> {/* cierre de Technical Education */}

            {/* Certifications */}
            <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg transition-all duration-300">
              <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-6 text-center">
                {t('about.education.certificationsTitle')}
              </h4>
              <div className="space-y-8">
                {/* Certification 1 */}
                <div className="flex flex-col md:flex-row items-center gap-6 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="md:w-2/5">
                    <a href="/fundamentos-gestion-tiempo.jpeg" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/fundamentos-gestion-tiempo.jpeg" 
                          alt={t('about.education.certification1.title')}
                          className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
                        />
                    </a>
                  </div>
                  <div className="md:w-3/5">
                    <h5 className="font-bold text-lg text-secondary-800 dark:text-secondary-100">{t('about.education.certification1.title')}</h5>
                    <p className="text-secondary-600 dark:text-secondary-400">{t('about.education.certification1.platform')} - <span className="font-medium">{t('about.education.certification1.date')}</span></p>
                  </div>
                </div>
                {/* Certification 2 */}
                <div className="flex flex-col md:flex-row items-center gap-6 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="md:w-2/5">
                    <a href="/fundamentos-desarrollo-web.jpeg" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="/fundamentos-desarrollo-web.jpeg" 
                          alt={t('about.education.certification2.title')}
                          className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
                        />
                    </a>
                  </div>
                  <div className="md:w-3/5">
                    <h5 className="font-bold text-lg text-secondary-800 dark:text-secondary-100">{t('about.education.certification2.title')}</h5>
                    <p className="text-secondary-600 dark:text-secondary-400">{t('about.education.certification2.platform')} - <span className="font-medium">{t('about.education.certification2.date')}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;