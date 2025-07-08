import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, Briefcase, Heart, Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { PageTransition } from '../components/PageTransition';

export const About: React.FC = () => {
  const { language } = useTheme();

  const timeline = [
    {
      year: '2022',
      title: language === 'en' ? 'Started B.Tech' : 'B.Tech शुरू किया',
      description: language === 'en' ? 'Began my journey at Vivekananda Global University, Jaipur' : 'विवेकानंद ग्लोबल यूनिवर्सिटी, जयपुर में यात्रा शुरू की',
      icon: GraduationCap
    },
    {
      year: '2023',
      title: language === 'en' ? 'First Project' : 'पहला प्रोजेक्ट',
      description: language === 'en' ? 'Developed my first AI project - Voice Analyzer' : 'मेरा पहला AI प्रोजेक्ट विकसित किया - Voice Analyzer',
      icon: Code2
    },
    {
      year: '2024',
      title: language === 'en' ? 'DevOps Internship' : 'DevOps इंटर्नशिप',
      description: language === 'en' ? 'Started internship at Linux World' : 'Linux World में इंटर्नशिप शुरू की',
      icon: Briefcase
    },
    {
      year: '2025',
      title: language === 'en' ? 'Current Goal' : 'वर्तमान लक्ष्य',
      description: language === 'en' ? 'Building innovative AI solutions and completing graduation' : 'नवाचार AI समाधान बनाना और स्नातक पूरा करना',
      icon: Heart
    }
  ];

  const facts = [
    {
      label: language === 'en' ? 'Projects Completed' : 'पूरे प्रोजेक्ट',
      value: '12+',
      color: 'from-blue-400 to-purple-400'
    },
    {
      label: language === 'en' ? 'Technologies' : 'तकनीकें',
      value: '15+',
      color: 'from-green-400 to-teal-400'
    },
    {
      label: language === 'en' ? 'GitHub Repos' : 'GitHub Repos',
      value: '20+',
      color: 'from-pink-400 to-rose-400'
    },
    {
      label: language === 'en' ? 'Coffee Consumed' : 'कॉफी का सेवन',
      value: '∞',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

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
            {language === 'en' ? 'About Me' : 'मेरे बारे में'}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === 'en' 
              ? "Passionate about technology, driven by curiosity, and always ready to learn something new."
              : "तकनीक के प्रति उत्साही, जिज्ञासा से प्रेरित, और हमेशा कुछ नया सीखने को तैयार।"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {language === 'en' ? 'Personal Information' : 'व्यक्तिगत जानकारी'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {language === 'en' ? 'Location' : 'स्थान'}
                    </p>
                    <p className="text-white font-semibold">Jaipur, Rajasthan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {language === 'en' ? 'Education' : 'शिक्षा'}
                    </p>
                    <p className="text-white font-semibold">B.Tech - VGU</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {language === 'en' ? 'Current Role' : 'वर्तमान भूमिका'}
                    </p>
                    <p className="text-white font-semibold">DevOps Intern</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <Calendar size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {language === 'en' ? 'Experience' : 'अनुभव'}
                    </p>
                    <p className="text-white font-semibold">2+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-strong rounded-2xl p-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className={`text-3xl font-bold bg-gradient-to-r ${fact.color} bg-clip-text text-transparent mb-2`}
                >
                  {fact.value}
                </motion.div>
                <p className="text-gray-400 text-sm">{fact.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {language === 'en' ? 'My Journey' : 'मेरी यात्रा'}
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-400 rounded-full" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-strong rounded-2xl p-6">
                      <div className="text-sm text-gray-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                      <item.icon size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="glass-strong rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">
            {language === 'en' ? 'What Drives Me' : 'मुझे क्या प्रेरित करता है'}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            {language === 'en' 
              ? "I'm passionate about leveraging technology to solve real-world problems. My journey from a curious student to a DevOps intern has been filled with exciting challenges and continuous learning. I believe in the power of AI and automation to transform industries, and I'm committed to being part of that transformation."
              : "मैं वास्तविक दुनिया की समस्याओं को हल करने के लिए तकनीक का उपयोग करने के बारे में उत्साही हूं। एक जिज्ञासु छात्र से DevOps इंटर्न तक की मेरी यात्रा रोमांचक चुनौतियों और निरंतर सीखने से भरी रही है। मैं AI और स्वचालन की शक्ति में विश्वास करता हूं जो उद्योगों को बदल सकती है, और मैं उस परिवर्तन का हिस्सा बनने के लिए प्रतिबद्ध हूं।"
            }
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};