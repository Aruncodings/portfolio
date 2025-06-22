import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink, FileText } from 'lucide-react';

const Hero = () => {
  const contactInfo = [
    { icon: Mail, text: 'arunkumaraiandds@gmail.com', href: 'mailto:arunkumaraiandds@gmail.com' },
    { icon: MapPin, text: 'Chennai, Tamil Nadu', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/arunkumar-mahendiran', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Aruncodings', label: 'GitHub' },
    { icon: ExternalLink, href: 'https://bit.ly/arunkumar_portfolio', label: 'Portfolio' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-full flex justify-center"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
            <img
              src="/head.png"
              alt="Arun Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            M. Arun Kumar
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-400 mb-6 font-semibold"
          >
            Software Developer
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
          >
            Versatile Software Developer with hands-on experience in backend and full-stack development using Python (Flask, Django) and SQL. Proficient in Data Structures and Algorithms with strong problem-solving skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6"
          >
            <motion.a
              href="/Arun_Kumar_2025_SDE_.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2"
            >
              <FileText className="h-5 w-5" />
              Download Resume
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/arunkumar-mahendiran"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2 rounded-lg font-medium flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center md:justify-start space-x-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-6 space-y-2"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                <info.icon className="h-5 w-5 mr-2 text-cyan-500" />
                <span>{info.text}</span>
              </div>
            ))}
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="mr-2">📞</span>
              <span>+91 9025455849</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
