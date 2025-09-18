import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Users, Code, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Software Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "Dec 2024 — Present",
      current: true,
      achievements: [
        "Successfully completed 5+ full-stack projects for diverse clients across e-commerce, healthcare, and education sectors.",
        "Developed custom web applications using React, Node.js, Python Django, and MySQL with 99% client satisfaction rate.",
        "Implemented responsive designs and optimized applications for mobile and desktop platforms, improving user engagement by 40%.",
        "Managed complete project lifecycle from client consultation to deployment and maintenance, ensuring on-time delivery.",
        "Built RESTful APIs and integrated third-party services including payment gateways, authentication systems, and cloud storage."
      ],
      metrics: {
        projects: "5+",
        clients: "4",
        satisfaction: "99%"
      }
    },
    {
      title: "Python Developer Intern",
      company: "ABI Tech Solutions",
      location: "Chennai",
      period: "Apr 2024 — Jul 2024",
      current: false,
      achievements: [
        "Assisted in software testing and debugging, ensuring application functionality and reporting defects to senior developers.",
        "Gained hands-on experience in Python web development environments, observing and adapting to professional workflows.",
        "Contributed to code reviews and documentation, improving team collaboration and knowledge sharing.",
        "Participated in Agile development processes including daily standups, sprint planning, and retrospectives."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering innovative solutions through freelance projects and professional development experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-cyan-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    {exp.current && (
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                        Active
                      </span>
                    )}
                  </div>

                  {/* Metrics for freelance work */}
                  {exp.metrics && (
                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                          {exp.metrics.projects}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                          {exp.metrics.clients}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600 dark:text-green-400">
                          {exp.metrics.satisfaction}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Satisfaction</div>
                      </div>
                    </div>
                  )}
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <CheckCircle className="text-cyan-500 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional credibility section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Key Strengths & Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-cyan-100 dark:bg-cyan-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Clean Code</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Writing maintainable, scalable code following industry best practices and design patterns.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 dark:bg-cyan-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Client-Focused</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Prioritizing clear communication, timely delivery, and exceeding client expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 dark:bg-cyan-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results-Driven</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Focusing on measurable outcomes and continuous improvement in every project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;