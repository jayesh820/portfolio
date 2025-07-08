import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Phone, Mail, Calendar, Award, Code, Briefcase } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { PageTransition } from '../components/PageTransition';

export const Resume: React.FC = () => {
  const { language } = useTheme();

  const experiences = [
    {
      title: 'DevOps Intern',
      company: 'Linux World',
      location: 'Remote',
      duration: '2024 - Present',
      description: language === 'en' ? 
        'Working on CI/CD pipelines, containerization with Docker, and cloud infrastructure management' :
        'CI/CD पाइपलाइन, Docker के साथ कंटेनराइज़ेशन, और क्लाउड इन्फ्रास्ट्रक्चर प्रबंधन पर काम कर रहा है',
      achievements: [
        language === 'en' ? 'Implemented automated deployment pipelines' : 'स्वचालित तैनाती पाइपलाइन लागू की',
        language === 'en' ? 'Reduced deployment time by 60%' : 'तैनाती समय में 60% की कमी',
        language === 'en' ? 'Set up monitoring and alerting systems' : 'निगरानी और अलर्ट सिस्टम स्थापित किए'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Vivekananda Global University',
      location: 'Jaipur, Rajasthan',
      duration: '2022 - 2026',
      gpa: 'CGPA: 8.5/10'
    }
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'In Progress'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker',
      date: '2024',
      status: 'In Progress'
    },
    {
      name: 'Python Programming',
      issuer: 'HackerRank',
      date: '2023',
      status: 'Completed'
    }
  ];

  const skills = {
    'Programming Languages': ['Python', 'JavaScript', 'Java', 'C++', 'HTML/CSS'],
    'Frameworks & Libraries': ['React', 'Node.js', 'Django', 'Flask', 'TensorFlow'],
    'DevOps & Tools': ['Docker', 'Jenkins', 'Git', 'Linux', 'AWS'],
    'Databases': ['MySQL', 'MongoDB', 'SQLite'],
    'AI/ML': ['OpenCV', 'Pandas', 'NumPy', 'Scikit-learn', 'MediaPipe']
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            {language === 'en' ? 'Resume' : 'रिज्यूमे'}
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto"
          >
            <Download size={20} />
            <span>{language === 'en' ? 'Download PDF' : 'PDF डाउनलोड करें'}</span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-strong rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Mail className="mr-2" size={20} />
                {language === 'en' ? 'Contact' : 'संपर्क'}
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-pink-400" />
                  <span className="text-gray-300">Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-pink-400" />
                  <span className="text-gray-300">+91 7357557976</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-pink-400" />
                  <span className="text-gray-300">jayeshsaini820@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-strong rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="mr-2" size={20} />
                {language === 'en' ? 'Skills' : 'कौशल'}
              </h2>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-pink-400 font-semibold mb-2 text-sm">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-strong rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="mr-2" size={20} />
                {language === 'en' ? 'Certifications' : 'प्रमाणपत्र'}
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-pink-400 pl-4">
                    <h3 className="font-semibold text-white text-sm">{cert.name}</h3>
                    <p className="text-gray-400 text-xs">{cert.issuer}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-gray-400 text-xs">{cert.date}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        cert.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-strong rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {language === 'en' ? 'Professional Summary' : 'व्यावसायिक सारांश'}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {language === 'en' 
                  ? "Passionate B.Tech student with hands-on experience in AI/ML, DevOps, and full-stack development. Currently working as a DevOps intern at Linux World, focusing on automation, containerization, and cloud infrastructure. Developed 12+ projects including AI voice analyzers, gesture-controlled systems, and CI/CD pipelines. Skilled in Python, JavaScript, Docker, and Jenkins with a strong foundation in machine learning and computer vision."
                  : "AI/ML, DevOps, और फुल-स्टैक विकास में व्यावहारिक अनुभव के साथ उत्साही B.Tech छात्र। वर्तमान में Linux World में DevOps इंटर्न के रूप में काम कर रहा है, ऑटोमेशन, कंटेनराइज़ेशन, और क्लाउड इन्फ्रास्ट्रक्चर पर ध्यान केंद्रित कर रहा है। AI वॉइस एनालाइज़र, जेस्चर-कंट्रोल्ड सिस्टम, और CI/CD पाइपलाइन सहित 12+ प्रोजेक्ट विकसित किए हैं।"
                }
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-strong rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="mr-2" size={24} />
                {language === 'en' ? 'Experience' : 'अनुभव'}
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-pink-400 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="text-pink-400 font-semibold">{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-gray-300 font-medium">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{exp.description}</p>
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-strong rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Calendar className="mr-2" size={24} />
                {language === 'en' ? 'Education' : 'शिक्षा'}
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-purple-400 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="text-purple-400 font-semibold">{edu.duration}</span>
                    </div>
                    <p className="text-gray-300 font-medium mb-1">{edu.field}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-gray-300">{edu.institution}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{edu.location}</span>
                    </div>
                    <span className="text-green-400 font-semibold">{edu.gpa}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Projects Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-strong rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {language === 'en' ? 'Key Projects' : 'मुख्य प्रोजेक्ट'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'AI Voice Analyzer', tech: 'Python, TensorFlow' },
                  { name: 'CI/CD Pipeline', tech: 'Jenkins, Docker' },
                  { name: 'Gesture Car Control', tech: 'OpenCV, Arduino' },
                  { name: 'Music Recommendation', tech: 'ML, Spotify API' }
                ].map((project, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-1">{project.name}</h3>
                    <p className="text-gray-400 text-sm">{project.tech}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};