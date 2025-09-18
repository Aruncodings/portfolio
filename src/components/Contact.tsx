import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arunkumaraiandds@gmail.com",
      href: "mailto:arunkumaraiandds@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9025455849",
      href: "tel:+919025455849"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aruncodings', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/arunkumar-mahendiran', label: 'LinkedIn' },
    { icon: ExternalLink, href: 'https://portfolio-aruncodings-projects.vercel.app/', label: 'Portfolio' },
  ];

  // Replace this URL with your actual Google Form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScPnCfCofE071lLN291fMOqI7d90zJSZD4u-ClqZQqKf0YbGA/viewform?usp=header";
  
  // Alternative: Direct link to open form in new tab
  const googleFormDirectUrl = "https://docs.google.com/forms/d/e/1FAIpQLScPnCfCofE071lLN291fMOqI7d90zJSZD4u-ClqZQqKf0YbGA/viewform?usp=header";

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a conversation about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-lg">
                    <info.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Optional: Button to open form in new tab */}
            <div className="mt-8">
              <motion.a
                href={googleFormDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Open Contact Form</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Option 1: Embedded Google Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Send Me a Message</h3>
            <div className="relative h-96 lg:h-[600px]">
              <iframe
                src={googleFormUrl}
                className="w-full h-full border-0 rounded-lg"
                title="Contact Form"
                loading="lazy"
              >
                Loading contact form...
              </iframe>
            </div>
          </motion.div>

          {/* Option 2: Styled container for form link (if embedded doesn't work well) */}
          {/* 
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center text-center"
          >
            <MessageSquare className="h-16 w-16 text-cyan-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Form</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Fill out our Google Form to get in touch. I'll respond to your message as soon as possible.
            </p>
            <motion.a
              href={googleFormDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Open Contact Form</span>
            </motion.a>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Contact;