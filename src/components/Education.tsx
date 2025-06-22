import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "M.Sc. Artificial Intelligence & Data Science",
      institution: "Takshashila University",
      period: "2022 – 2024",
      cgpa: "9.19",
      type: "Master's Degree",
      current: false
    },
    {
      degree: "B.Sc. Physics",
      institution: "E.S. Arts & Science College",
      period: "2019 – 2022",
      cgpa: "7.6",
      type: "Bachelor's Degree",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic foundation in AI, Data Science, and Physics with strong analytical skills.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 h-full w-0.5 bg-cyan-500"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex items-start mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Content card */}
              <div className="ml-16 flex-1">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {edu.type}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Award className="h-4 w-4 mr-2" />
                        CGPA: <span className="font-semibold ml-1">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;