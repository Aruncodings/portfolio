import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aruncodings', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/arunkumar-mahendiran', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:arunkumaraiandds@gmail.com', label: 'Email' },
    { icon: ExternalLink, href: 'https://portfolio-aruncodings-projects.vercel.app/', label: 'Portfolio' },
  ];

  const quickLinks = [
    { href: '#summary', label: 'Summary' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold">M. Arun Kumar</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Software Developer passionate about creating innovative solutions with Python, 
              Flask, Django, and modern web technologies. Always learning, always building.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © {currentYear} M. Arun Kumar. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.div>
              <span>and React</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
