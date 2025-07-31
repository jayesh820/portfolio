import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, User, Code, MessageCircle, Zap, Star, Rocket } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { PageTransition } from '../components/PageTransition';

export const Home: React.FC = () => {
  const { language } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = {
    en: ['Full Stack Developer', 'AI/ML Engineer', 'DevOps Specialist', 'Problem Solver', 'Tech Innovator', 'Code Architect'],
    hi: ['फुल स्टैक डेवलपर', 'AI/ML इंजीनियर', 'DevOps विशेषज्ञ', 'समस्या समाधानकर्ता', 'तकनीकी नवप्रवर्तक', 'कोड आर्किटेक्ट']
  };

  useEffect(() => {
    const roleText = roles[language][currentRole];
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(roleText.slice(0, index));
      index++;
      if (index > roleText.length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles[language].length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole, language]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Additional floating orbs */}
          <motion.div
            className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl"
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Animated greeting */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="flex items-center space-x-3 mb-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center"
                >
                  <Star className="text-white" size={16} />
                </motion.div>
                <motion.span 
                  className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text font-bold text-lg"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  {language === 'en' ? 'Building the Future' : 'भविष्य का निर्माण'}
                </motion.span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Rocket className="text-pink-400" size={20} />
                </motion.div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                {language === 'en' ? "Hey, I'm" : "नमस्ते, मैं"}
              </motion.h1>
              
              <motion.div className="relative">
                <motion.h2 
                  className="text-6xl md:text-8xl font-bold text-white relative"
                  animate={{ 
                    y: [0, -5, 0],
                    textShadow: [
                      '0 0 20px rgba(255,255,255,0.5)',
                      '0 0 40px rgba(255,255,255,0.8)',
                      '0 0 20px rgba(255,255,255,0.5)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Jayesh
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.h2>
                
                {/* Floating elements around name */}
                <motion.div
                  className="absolute -top-4 left-1/4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 right-1/4 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [360, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="h-16 flex items-center">
                <motion.span 
                  className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-mono font-bold"
                  key={displayText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {displayText}
                  <motion.span
                    className="text-pink-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </motion.span>
              </div>
              
              <motion.p 
                className="text-lg text-gray-400 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {language === 'en' 
                  ? "B.Tech student from Vivekananda Global University, Jaipur. Passionate about AI/ML, DevOps, and creating innovative solutions that make a difference in the world."
                  : "विवेकानंद ग्लोबल यूनिवर्सिटी, जयपुर से B.Tech छात्र। AI/ML, DevOps और दुनिया में बदलाव लाने वाले नवाचार समाधान बनाने का शौकीन।"
                }
              </motion.p>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-xl flex items-center justify-center space-x-2 text-white font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{language === 'en' ? 'View Projects' : 'प्रोजेक्ट देखें'}</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('about')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full glass px-8 py-4 rounded-xl flex items-center justify-center space-x-2 text-white font-semibold hover:glass-strong transition-all group"
              >
                <User size={20} className="group-hover:rotate-12 transition-transform" />
                <span>{language === 'en' ? 'About Me' : 'मेरे बारे में'}</span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('skills')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full glass px-8 py-4 rounded-xl flex items-center justify-center space-x-2 text-white font-semibold hover:glass-strong transition-all group"
              >
                <Code size={20} className="group-hover:rotate-12 transition-transform" />
                <span>{language === 'en' ? 'My Skills' : 'मेरे कौशल'}</span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full glass px-8 py-4 rounded-xl flex items-center justify-center space-x-2 text-white font-semibold hover:glass-strong transition-all group"
              >
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                <span>{language === 'en' ? 'Contact Me' : 'संपर्क करें'}</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.button
                onClick={() => scrollToSection('resume')}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 rounded-xl flex items-center space-x-2 text-white font-semibold hover:glass-strong transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download size={20} className="group-hover:translate-y-1 transition-transform relative z-10" />
                <span className="relative z-10">{language === 'en' ? 'Download Resume' : 'रिज्यूमे डाउनलोड करें'}</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/jayesh820', color: 'hover:text-gray-300', bg: 'hover:bg-gray-800/50' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/jayesh-saini-18a30a27a/', color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/20' },
                { icon: Mail, href: 'mailto:jayeshsaini820@gmail.com', color: 'hover:text-red-400', bg: 'hover:bg-red-500/20' },
                { icon: Phone, href: 'tel:+917357557976', color: 'hover:text-green-400', bg: 'hover:bg-green-500/20' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 glass rounded-xl ${social.color} ${social.bg} text-gray-400 transition-all hover:glass-strong group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <social.icon size={24} className="group-hover:animate-pulse relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Photo Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                className="relative z-10"
              >
                <motion.div 
                  className="w-80 h-80 mx-auto glass-strong rounded-full flex items-center justify-center overflow-hidden relative group"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(236, 72, 153, 0.3)',
                      '0 0 40px rgba(236, 72, 153, 0.6)',
                      '0 0 60px rgba(236, 72, 153, 0.4)',
                      '0 0 40px rgba(236, 72, 153, 0.6)',
                      '0 0 20px rgba(236, 72, 153, 0.3)'
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 4, repeat: Infinity },
                    scale: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="/jayesh-profile.jpg" 
                    alt="Jayesh Saini"
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Enhanced Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(45deg, #f472b6, #a855f7, #6366f1) border-box',
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'exclude',
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Enhanced Floating Badge */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    <Zap size={14} />
                    <span>Available</span>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[
                  { size: 'w-8 h-8', color: 'bg-yellow-400', position: 'top-8 left-8', delay: 0 },
                  { size: 'w-6 h-6', color: 'bg-green-400', position: 'top-16 right-12', delay: 0.5 },
                  { size: 'w-10 h-10', color: 'bg-blue-400', position: 'bottom-20 left-16', delay: 1 },
                  { size: 'w-4 h-4', color: 'bg-purple-400', position: 'bottom-12 right-8', delay: 1.5 },
                  { size: 'w-5 h-5', color: 'bg-pink-400', position: 'top-32 left-32', delay: 2 },
                  { size: 'w-7 h-7', color: 'bg-indigo-400', position: 'bottom-32 right-32', delay: 2.5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.size} ${item.color} rounded-full ${item.position}`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      delay: item.delay,
                    }}
                  />
                ))}
              </motion.div>

              {/* Enhanced Background Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-indigo-600/30 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />
              
              {/* Additional glow layers */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 via-transparent to-pink-500/20 rounded-full blur-2xl -z-10"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};