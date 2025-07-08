import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Code, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { PageTransition } from '../components/PageTransition';

export const Projects: React.FC = () => {
  const { language } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Voice Analyzer and Age Detector',
      description: language === 'en' ? 'Advanced AI system that analyzes voice patterns to predict age and gender using deep learning models' : 'गहरी शिक्षा मॉडल का उपयोग करके आयु और लिंग की भविष्यवाणी करने वाला उन्नत AI सिस्टम',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'NumPy'],
      category: 'ai',
      featured: true,
      image: 'https://images.pexels.com/photos/7715217/pexels-photo-7715217.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/jayesh820',
      demo: '#',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Mood-Based Song Suggestion',
      description: language === 'en' ? 'AI-powered music recommendation system that analyzes user emotions and suggests songs accordingly' : 'उपयोगकर्ता भावनाओं का विश्लेषण करने वाला AI-संचालित संगीत सिफारिश सिस्टम',
      tech: ['Python', 'Machine Learning', 'Spotify API', 'Flask'],
      category: 'ai',
      featured: true,
      image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/jayesh820',
      demo: '#',
      status: 'completed'
    },
    {
      id: 3,
      title: 'AI Car Control with Hand Gestures',
      description: language === 'en' ? 'Computer vision system that enables car control through hand gesture recognition' : 'हाथ के इशारों की पहचान के माध्यम से कार नियंत्रण सक्षम करने वाला कंप्यूटर विज़न सिस्टम',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Arduino'],
      category: 'ai',
      featured: true,
      image: 'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/jayesh820',
      demo: '#',
      status: 'completed'
    },
    {
      id: 4,
      title: 'File Management System',
      description: language === 'en' ? 'Intelligent file organization system with automated categorization and search capabilities' : 'स्वचालित वर्गीकरण और खोज क्षमताओं के साथ बुद्धिमान फ़ाइल संगठन सिस्टम',
      tech: ['Python', 'Tkinter', 'SQLite', 'OS Module'],
      category: 'python',
      featured: false,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/jayesh820/Python_projects',
      demo: '#',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Hand Gesture Calculator',
      description: language === 'en' ? 'Innovative calculator that performs operations through hand gesture recognition' : 'हाथ के इशारों की पहचान के माध्यम से संचालन करने वाला नवाचार कैलकुलेटर',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      category: 'ai',
      featured: false,
      image: 'https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/jayesh820',
      demo: '#',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Hand-Controlled Music Player',
      description: language === 'en' ? 'Music player controlled entirely through hand gestures for touchless interaction' : 'स्पर्श रहित बातचीत के लिए हाथ के इशारों के माध्यम से पूरी तरह से नियंत्रित संगीत प्लेयर',
      tech: ['Python', 'OpenCV', 'Pygame', 'MediaPipe'],
      category: 'ai',
      featured: false,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/jayesh820',
      demo: '#',
      status: 'completed'
    },
    {
      id: 7,
      title: 'Disease Prediction System',
      description: language === 'en' ? 'Machine learning model for early disease detection based on symptoms and medical history' : 'लक्षणों और चिकित्सा इतिहास के आधार पर प्रारंभिक बीमारी का पता लगाने के लिए मशीन लर्निंग मॉडल',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      category: 'ai',
      featured: false,
      image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/jayesh820',
      demo: '#',
      status: 'completed'
    },
    {
      id: 8,
      title: 'CI/CD Pipeline with Jenkins',
      description: language === 'en' ? 'Automated deployment pipeline with Jenkins, Docker, and AWS integration' : 'Jenkins, Docker, और AWS एकीकरण के साथ स्वचालित तैनाती पाइपलाइन',
      tech: ['Jenkins', 'Docker', 'AWS', 'Git'],
      category: 'devops',
      featured: true,
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/jayesh820/devops_project_ci_cd',
      demo: '#',
      status: 'completed'
    },
    {
      id: 9,
      title: 'Student Marks Predictor',
      description: language === 'en' ? 'ML model that predicts student performance based on various academic factors' : 'विभिन्न शैक्षणिक कारकों के आधार पर छात्र प्रदर्शन की भविष्यवाणी करने वाला ML मॉडल',
      tech: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      category: 'ai',
      featured: false,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/jayesh820',
      demo: '#',
      status: 'completed'
    }
  ];

  const categories = [
    { id: 'all', name: language === 'en' ? 'All Projects' : 'सभी प्रोजेक्ट' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'python', name: 'Python' },
    { id: 'devops', name: 'DevOps' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            {language === 'en' ? 'My Projects' : 'मेरे प्रोजेक्ट'}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === 'en' 
              ? "A collection of projects showcasing my skills in AI/ML, DevOps, and full-stack development"
              : "AI/ML, DevOps, और फुल-स्टैक विकास में मेरे कौशल को प्रदर्शित करने वाले प्रोजेक्ट्स का संग्रह"
            }
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'glass hover:glass-strong text-gray-300 hover:text-white'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-strong rounded-2xl overflow-hidden group cursor-pointer ${
                project.featured ? 'ring-2 ring-pink-400/50' : ''
              }`}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-white">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="p-2 bg-pink-500/20 rounded-lg">
                      <Github size={16} className="text-pink-400" />
                    </div>
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <ExternalLink size={16} className="text-purple-400" />
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                    {project.status === 'completed' ? 
                      (language === 'en' ? 'Completed' : 'पूर्ण') : 
                      (language === 'en' ? 'In Progress' : 'प्रगति में')
                    }
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-strong rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-black/60 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                          {project.featured && (
                            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                              Featured Project
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-white mb-3">
                            {language === 'en' ? 'Technologies Used' : 'उपयोग की गई तकनीकें'}
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full text-white border border-pink-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-3 rounded-xl text-white hover:from-gray-600 hover:to-gray-700 transition-all"
                          >
                            <Github size={20} />
                            <span>{language === 'en' ? 'View Code' : 'कोड देखें'}</span>
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-xl text-white hover:from-pink-400 hover:to-purple-400 transition-all"
                          >
                            <Play size={20} />
                            <span>{language === 'en' ? 'Live Demo' : 'लाइव डेमो'}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};