import { Github, ExternalLink, Calendar, Code } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const allProjects = [
    {
      id: 6,
      title: t('projects.items.finanzas.title'),
      description: t('projects.items.finanzas.desc'),
      image: '/Finanzas Personales VE.png',
      technologies: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'LocalStorage'],
      githubUrl: 'https://github.com/djimenezunihumboldt/Finanzas-Personales-Ve',
      liveUrl: 'https://djimenezunihumboldt.github.io/Finanzas-Personales-Ve/',
      date: '2025',
      category: t('projects.frontend')
    },
    {
      id: 5,
      title: t('projects.items.analytics.title'),
      description: t('projects.items.analytics.desc'),
      image: '/analytics-dashboard.png',
      technologies: ['React', 'Vite', 'Chart.js', 'TypeScript'],
      githubUrl: 'https://github.com/djimenezunihumboldt/Analytics-Dashboard-pro',
      liveUrl: 'https://djimenezunihumboldt.github.io/Analytics-Dashboard-pro/#',
      date: '2025',
      category: t('projects.frontend')
    },
    {
      id: 3,
      title: t('projects.items.university.title'),
      description: t('projects.items.university.desc'),
      image: '/proyecto1.png',
      technologies: ['React', 'Vite', 'TypeScript'],
      githubUrl: 'https://github.com/djimenezunihumboldt/web/tree/prueba1',
      liveUrl: 'https://djimenezunihumboldt.github.io/web/',
      date: '2025',
      category: t('projects.fullstack')
    }
  ];

  const projects = allProjects;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            {t('projects.title')} <span className="text-primary-600 dark:text-primary-400">{t('projects.subtitle')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-secondary-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Links overlay */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-secondary-600 dark:text-secondary-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 dark:bg-secondary-700 hover:bg-gray-200 dark:hover:bg-secondary-600 text-secondary-900 dark:text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Code size={16} />
                    <span>{t('projects.code')}</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>{t('projects.demo')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              {t('projects.more')}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              {t('projects.more.desc')}
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Github size={20} />
              <span>{t('projects.github')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;