import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Brain, Wrench, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { PageTransition } from '../components/PageTransition';

export const Skills: React.FC = () => {
  const { language } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'all',
      name: language === 'en' ? 'All Skills' : 'सभी कौशल',
      icon: Code2,
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: 'languages',
      name: language === 'en' ? 'Languages' : 'भाषाएं',
      icon: Code2,
      color: 'from-blue-400 to-teal-400'
    },
    {
      id: 'frameworks',
      name: language === 'en' ? 'Frameworks' : 'फ्रेमवर्क',
      icon: Database,
      color: 'from-green-400 to-emerald-400'
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: Cloud,
      color: 'from-orange-400 to-red-400'
    },
    {
      id: 'ai',
      name: 'AI/ML',
      icon: Brain,
      color: 'from-pink-400 to-purple-400'
    },
    {
      id: 'tools',
      name: language === 'en' ? 'Tools' : 'उपकरण',
      icon: Wrench,
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  const skills = [
    // Languages
    { name: 'Python', level: 90, category: 'languages', color: 'from-yellow-400 to-orange-500' },
    { name: 'JavaScript', level: 85, category: 'languages', color: 'from-yellow-300 to-yellow-500' },
    { name: 'Java', level: 80, category: 'languages', color: 'from-red-400 to-orange-500' },
    { name: 'C++', level: 75, category: 'languages', color: 'from-blue-400 to-purple-500' },
    { name: 'HTML/CSS', level: 90, category: 'languages', color: 'from-orange-400 to-red-500' },
    
    // Frameworks
    { name: 'React', level: 85, category: 'frameworks', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', level: 80, category: 'frameworks', color: 'from-green-400 to-emerald-500' },
    { name: 'Django', level: 75, category: 'frameworks', color: 'from-green-600 to-green-700' },
    { name: 'Flask', level: 70, category: 'frameworks', color: 'from-gray-400 to-gray-600' },
    
    // DevOps
    { name: 'Docker', level: 85, category: 'devops', color: 'from-blue-400 to-blue-600' },
    { name: 'Jenkins', level: 80, category: 'devops', color: 'from-red-400 to-red-600' },
    { name: 'Linux', level: 90, category: 'devops', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Git', level: 85, category: 'devops', color: 'from-orange-400 to-orange-600' },
    { name: 'AWS', level: 70, category: 'devops', color: 'from-orange-300 to-orange-500' },
    
    // AI/ML
    { name: 'TensorFlow', level: 80, category: 'ai', color: 'from-orange-400 to-red-500' },
    { name: 'OpenCV', level: 85, category: 'ai', color: 'from-blue-400 to-green-500' },
    { name: 'Pandas', level: 85, category: 'ai', color: 'from-purple-400 to-pink-500' },
    { name: 'NumPy', level: 80, category: 'ai', color: 'from-blue-300 to-blue-500' },
    { name: 'Scikit-learn', level: 75, category: 'ai', color: 'from-orange-300 to-orange-500' },
    
    // Tools
    { name: 'VS Code', level: 95, category: 'tools', color: 'from-blue-400 to-blue-600' },
    { name: 'PyCharm', level: 85, category: 'tools', color: 'from-green-400 to-green-600' },
    { name: 'Postman', level: 80, category: 'tools', color: 'from-orange-400 to-orange-600' },
    { name: 'MongoDB', level: 75, category: 'tools', color: 'from-green-400 to-green-600' },
    { name: 'MySQL', level: 80, category: 'tools', color: 'from-blue-400 to-blue-600' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

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
            {language === 'en' ? 'Skills & Expertise' : 'कौशल और विशेषज्ञता'}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === 'en' 
              ? "Technologies and tools I use to bring ideas to life"
              : "विचारों को जीवन में लाने के लिए मैं जो तकनीकें और उपकरण उपयोग करता हूं"
            }
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'glass hover:glass-strong text-gray-300 hover:text-white'
              }`}
            >
              <category.icon size={20} />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-strong rounded-2xl p-6 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{language === 'en' ? 'Beginner' : 'शुरुआती'}</span>
                  <span>{language === 'en' ? 'Expert' : 'विशेषज्ञ'}</span>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-4 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {skill.level >= 80 && (language === 'en' ? 'Advanced proficiency' : 'उन्नत प्रवीणता')}
                {skill.level >= 60 && skill.level < 80 && (language === 'en' ? 'Intermediate level' : 'मध्यम स्तर')}
                {skill.level < 60 && (language === 'en' ? 'Learning & improving' : 'सीखना और सुधार')}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 glass-strong rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            {language === 'en' ? 'Continuous Learning' : 'निरंतर सीखना'}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {language === 'en' 
              ? "Technology evolves rapidly, and so do I. I'm always exploring new frameworks, tools, and methodologies to stay at the forefront of innovation."
              : "तकनीक तेजी से विकसित होती है, और मैं भी। मैं हमेशा नए फ्रेमवर्क, उपकरण और पद्धतियों की खोज करता रहता हूं ताकि नवाचार में सबसे आगे रह सकूं।"
            }
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};