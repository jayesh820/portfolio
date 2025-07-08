import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { PageTransition } from '../components/PageTransition';

export const Contact: React.FC = () => {
  const { language } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(language === 'en' ? 'Message sent successfully!' : 'संदेश सफलतापूर्वक भेज दिया गया!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'en' ? 'Phone' : 'फोन',
      value: '+91 7357557976',
      href: 'tel:+917357557976',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Email' : 'ईमेल',
      value: 'jayeshsaini820@gmail.com',
      href: 'mailto:jayeshsaini820@gmail.com',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: MapPin,
      title: language === 'en' ? 'Location' : 'स्थान',
      value: 'Jaipur, Rajasthan',
      href: '#',
      color: 'from-blue-400 to-indigo-400'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'jayesh820',
      href: 'https://github.com/jayesh820',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/jayesh820',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jayesh-saini-18a30a27a/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      name: 'Email',
      href: 'mailto:jayeshsaini820@gmail.com',
      color: 'hover:text-red-400'
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
            {language === 'en' ? 'Get In Touch' : 'संपर्क करें'}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === 'en' 
              ? "Have a project in mind? Let's discuss how we can work together to bring your ideas to life."
              : "कोई प्रोजेक्ट मन में है? आइए चर्चा करें कि हम आपके विचारों को जीवन में कैसे ला सकते हैं।"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageSquare className="mr-2" size={24} />
              {language === 'en' ? 'Send Message' : 'संदेश भेजें'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {language === 'en' ? 'Name' : 'नाम'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                    placeholder={language === 'en' ? 'Your Name' : 'आपका नाम'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {language === 'en' ? 'Email' : 'ईमेल'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                    placeholder={language === 'en' ? 'your.email@example.com' : 'आपका.ईमेल@example.com'}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'en' ? 'Subject' : 'विषय'}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                  placeholder={language === 'en' ? 'Project Discussion' : 'प्रोजेक्ट चर्चा'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {language === 'en' ? 'Message' : 'संदेश'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none"
                  placeholder={language === 'en' ? 'Tell me about your project...' : 'अपने प्रोजेक्ट के बारे में बताएं...'}
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-pink-400 hover:to-purple-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Send size={20} />
                    <span>{language === 'en' ? 'Send Message' : 'संदेश भेजें'}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {language === 'en' ? 'Contact Information' : 'संपर्क जानकारी'}
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center`}>
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-pink-400 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {language === 'en' ? 'Follow Me' : 'मुझे फॉलो करें'}
              </h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 glass rounded-xl ${social.color} text-gray-400 transition-all hover:glass-strong`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {language === 'en' ? 'Let\'s Create Something Amazing' : 'आइए कुछ अद्भुत बनाएं'}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {language === 'en' 
                  ? "I'm always excited to work on new projects and collaborate with amazing people. Whether you have a specific project in mind or just want to discuss ideas, I'd love to hear from you."
                  : "मैं हमेशा नए प्रोजेक्ट्स पर काम करने और अद्भुत लोगों के साथ सहयोग करने के लिए उत्साहित रहता हूं। चाहे आपके पास कोई विशिष्ट प्रोजेक्ट हो या सिर्फ विचारों पर चर्चा करना चाहते हों, मैं आपसे सुनना चाहूंगा।"
                }
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};