import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Code, 
  FolderOpen, 
  FileText, 
  MessageCircle,
  Settings,
  Github,
  Mail,
  Menu,
  X,
  Palette,
  Languages
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { path: '#home', icon: Home, label: 'Home', labelHi: 'होम' },
  { path: '#about', icon: User, label: 'About', labelHi: 'परिचय' },
  { path: '#skills', icon: Code, label: 'Skills', labelHi: 'कौशल' },
  { path: '#projects', icon: FolderOpen, label: 'Projects', labelHi: 'प्रोजेक्ट' },
  { path: '#resume', icon: FileText, label: 'Resume', labelHi: 'रिज्यूमे' },
  { path: '#contact', icon: Mail, label: 'Contact', labelHi: 'संपर्क' },
];

const themes = [
  { id: 'default', name: 'Default', color: '#ae9c98' },
  { id: 'neon', name: 'Neon', color: '#00f5ff' },
  { id: 'cyber', name: 'Cyber', color: '#39ff14' },
  { id: 'sunset', name: 'Sunset', color: '#ff6b35' },
  { id: 'rose', name: 'Rose', color: '#cc7f8d' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme, language, setLanguage } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 p-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-2xl p-4 flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-violet-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <span className="font-semibold text-lg hidden md:block">
                {language === 'en' ? 'Jayesh Saini' : 'जयेश सैनी'}
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.path.replace('#', ''))}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeSection === item.path.replace('#', '')
                      ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white'
                      : 'hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="text-sm font-medium">
                    {language === 'en' ? item.label : item.labelHi}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Settings size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 z-50 glass-strong rounded-2xl p-6 w-80"
          >
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Settings' : 'सेटिंग्स'}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Theme' : 'थीम'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id as any)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        theme === t.id
                          ? 'border-white bg-white/10'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: t.color }}
                        />
                        <span className="text-sm">{t.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'en' ? 'Language' : 'भाषा'}
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      language === 'en'
                        ? 'border-white bg-white/10'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('hi')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      language === 'hi'
                        ? 'border-white bg-white/10'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 glass-strong p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">
                  {language === 'en' ? 'Menu' : 'मेनू'}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.path.replace('#', ''))}
                    className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      activeSection === item.path.replace('#', '')
                        ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white'
                        : 'hover:bg-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">
                      {language === 'en' ? item.label : item.labelHi}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/jayesh820"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="mailto:jayeshsaini820@gmail.com"
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};