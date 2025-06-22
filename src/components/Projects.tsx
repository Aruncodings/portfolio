import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Healthcare System (WebApp)",
      date: "Jun 2024",
      github: "https://github.com/Aruncodings/Smart-Healthcare-System",
      description: "A machine learning-powered healthcare application for diabetes risk prediction.",
      achievements: [
        "Developed a supervised learning model using Scikit-learn to classify diabetes risk with 85% accuracy.",
        "Designed a lightweight Flask backend integrated with SQLite to handle patient inputs and prediction outputs efficiently.",
        "Improved response to prediction workflow by 20% through optimized data handling and model integration."
      ],
      technologies: ["Python", "Flask", "Scikit-learn", "SQLite", "Machine Learning"],
      featured: true
    },
    {
      title: "Image-to-OCR Voice Toolkit",
      date: "Apr 2023",
      github: "https://github.com/Aruncodings/OCR-Toolkit",
      description: "An accessible desktop application for visually impaired users with OCR and voice feedback.",
      achievements: [
        "Built an accessible desktop toolkit using Python, integrating Tesseract OCR, Tkinter, and voice output for the visually impaired.",
        "Streamlined image-to-text conversion and speech feedback, enabling hands-free interaction.",
        "Enhanced GUI design for clarity and ease of use, reducing manual input time by 40%."
      ],
      technologies: ["Python", "Tesseract OCR", "Tkinter", "Text-to-Speech", "GUI"],
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative solutions showcasing expertise in Python development, machine learning, and user-centered design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.date}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {project.featured && (
                  <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-sm font-medium ml-4">
                    Featured
                  </span>
                )}
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Code className="h-4 w-4 mr-2 text-cyan-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Aruncodings"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Github className="h-5 w-5" />
            <span>View More Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;