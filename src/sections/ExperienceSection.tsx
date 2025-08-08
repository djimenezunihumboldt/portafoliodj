import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const ExperienceSection = () => {
  const { t } = useLanguage();
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-collapse cuando el usuario scrollea fuera de la sección
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !showMore) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isVisible) {
        setShowMore(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMore]);

  const mainExperiences = [
    {
      title: t('experience.cinepic.title'),
      company: t('experience.cinepic.company'),
      period: t('experience.cinepic.period'),
      description: t('experience.cinepic.desc'),
      color: 'from-blue-500 to-blue-600',
      logo: '/cinepic-logo.png',
      link: 'https://cinepic.com.ve/es-AR?gad_source=1&gad_campaignid=21890163799&gbraid=0AAAAApnyOzIWVL7pMHNL4_-WCXswcG8Wp&gclid=Cj0KCQjwtMHEBhC-ARIsABua5iR8ggVZ_Fk1M3xTiVOMP_ce2O5OUdfoWCq9fDJG0FfvUAM5-YRAhZQaAmksEALw_wcB'
    },
    {
      title: t('experience.lido.title'),
      company: t('experience.lido.company'),
      period: t('experience.lido.period'),
      description: t('experience.lido.desc'),
      color: 'from-green-500 to-green-600',
      logo: '/lidotel-logo.jpg',
      link: 'https://lidotel.com/'
    },
    {
      title: t('experience.sambil.title'),
      company: t('experience.sambil.company'),
      period: t('experience.sambil.period'),
      description: t('experience.sambil.desc'),
      color: 'from-purple-500 to-purple-600',
      logo: '/sambil-logo.jpg',
      link: 'https://gruposambil.com/en/construction/'
    }
  ];

  // Experiencias adicionales del CV
  const additionalExperiences = [
    {
      title: t('experience.avec.title'),
      company: t('experience.avec.company'),
      period: t('experience.avec.period'),
      description: t('experience.avec.desc'),
      color: 'from-orange-500 to-orange-600',
      logo: '/avec-logo.png',
      link: 'https://www.avec.org.ve/'
    }
  ];

  const allExperiences = showMore ? [...mainExperiences, ...additionalExperiences] : mainExperiences;

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-secondary-900 dark:to-secondary-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            {t('experience.title')}{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              {t('experience.subtitle')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('experience.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-8">
              {allExperiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 mt-2 md:mt-0">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-semibold bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-secondary-600 dark:text-secondary-400 mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.link ? (
                          <div className="flex items-center gap-3">
                            {exp.logo && (
                              <div className="w-12 h-12 bg-white dark:bg-white rounded-lg flex items-center justify-center shadow-md border border-gray-200 transition-all duration-300 hover:scale-125 hover:shadow-lg active:scale-110 cursor-pointer">
                                <img 
                                  src={exp.logo} 
                                  alt={`Logo ${exp.company}`}
                                  className="w-10 h-10 object-contain transition-transform duration-300"
                                />
                              </div>
                            )}
                            <a 
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 hover:underline"
                            >
                              {exp.company}
                            </a>
                          </div>
                        ) : (
                          <span className="font-semibold">{exp.company}</span>
                        )}
                      </div>
                      
                      <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Botón Ver más */}
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {showMore ? (
                  <>
                    <ChevronUp size={20} />
                    {t('experience.showLess')}
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    {t('experience.showMore')}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
