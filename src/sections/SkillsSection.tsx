import { useLanguage } from '../hooks/useLanguage';
import { useInView } from 'react-intersection-observer';
import reactIcon from '../assets/react-icon.png';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiHtml5, 
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiFigma,
  SiDocker,
  SiAmazon,
  SiVite,
  SiJest
} from 'react-icons/si';

const SkillsSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', level: 90, icon: <img src={reactIcon} alt="React" className="w-5 h-5" /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="w-5 h-5 text-blue-600" /> },
        { name: 'Tailwind CSS', level: 88, icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" /> },
        { name: 'Next.js', level: 82, icon: <SiNextdotjs className="w-5 h-5 text-black dark:text-white" /> },
        { name: 'HTML/CSS', level: 95, icon: <SiHtml5 className="w-5 h-5 text-orange-600" /> },
        { name: 'JavaScript', level: 92, icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> }
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 87, icon: <SiNodedotjs className="w-5 h-5 text-green-600" /> },
        { name: 'Express.js', level: 85, icon: <SiExpress className="w-5 h-5 text-gray-600 dark:text-gray-300" /> },
        { name: 'PostgreSQL', level: 80, icon: <SiPostgresql className="w-5 h-5 text-blue-600" /> },
        { name: 'MongoDB', level: 78, icon: <SiMongodb className="w-5 h-5 text-green-500" /> },
        { name: 'REST APIs', level: 90, icon: '🔌' },
        { name: 'GraphQL', level: 75, icon: <SiGraphql className="w-5 h-5 text-pink-600" /> }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git', level: 90, icon: <SiGit className="w-5 h-5 text-orange-500" /> },
        { name: 'Docker', level: 75, icon: <SiDocker className="w-5 h-5 text-blue-500" /> },
        { name: 'AWS', level: 70, icon: <SiAmazon className="w-5 h-5 text-orange-400" /> },
        { name: 'Vite', level: 85, icon: <SiVite className="w-5 h-5 text-purple-500" /> },
        { name: 'Jest', level: 80, icon: <SiJest className="w-5 h-5 text-red-600" /> },
        { name: 'Figma', level: 75, icon: <SiFigma className="w-5 h-5 text-purple-600" /> }
      ]
    }
  ];

  return (
    <section ref={ref} id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-secondary-900 dark:to-secondary-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            {t('skills.title')} <span className="text-primary-600 dark:text-primary-400">{t('skills.subtitle')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 ${
                inView 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className={`text-2xl font-bold text-secondary-900 dark:text-white mb-6 text-center transition-all duration-700 ${
                inView 
                  ? 'transform scale-100 opacity-100' 
                  : 'transform scale-75 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 0.2 + 0.1}s` }}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`text-lg flex items-center justify-center transition-all duration-700 ${
                          inView 
                            ? 'transform scale-100 opacity-100 animate-bounce' 
                            : 'transform scale-0 opacity-0'
                        }`} 
                        style={{ animationDelay: `${skillIndex * 0.1}s` }}>
                          {skill.icon}
                        </span>
                        <span className="font-medium text-secondary-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className={`text-sm text-secondary-600 dark:text-secondary-400 font-semibold transition-all duration-700 ${
                        inView 
                          ? 'transform translateX-0 opacity-100' 
                          : 'transform translateX-4 opacity-0'
                      }`}
                      style={{ animationDelay: `${skillIndex * 0.1 + 0.5}s` }}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-secondary-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out transform origin-left ${
                          inView ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${skillIndex * 0.15 + 0.3}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes skillBar {
            from { width: 0%; }
            to { width: var(--target-width); }
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSection;