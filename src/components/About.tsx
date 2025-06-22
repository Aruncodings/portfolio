import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "University Name",
      year: "2021-2025",
      gpa: "8.5/10"
    }
  ];

  const achievements = [
    "Full-stack web development expertise",
    "Machine learning and AI implementation",
    "Database design and optimization",
    "Cloud computing and DevOps practices",
    "Agile development methodologies"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated software developer with a strong foundation in computer science 
              and a passion for creating innovative solutions. My journey in technology has been 
              driven by curiosity and a desire to build applications that make a positive impact.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With expertise spanning full-stack development, machine learning, and modern web 
              technologies, I enjoy tackling complex challenges and turning ideas into reality. 
              I'm always eager to learn new technologies and collaborate with like-minded individuals.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <Award className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                <h4 className="text-xl font-bold text-gray-900">Education</h4>
              </div>
              
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h5 className="font-semibold text-gray-900">{edu.degree}</h5>
                  <p className="text-blue-600 font-medium">{edu.field}</p>
                  <p className="text-gray-600">{edu.institution}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{edu.year}</span>
                    <span className="ml-4 font-medium">GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">Let's Connect!</h4>
              <p className="mb-4">
                I'm always open to discussing new opportunities, collaborating on 
                interesting projects, or just having a chat about technology.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;