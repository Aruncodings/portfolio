import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Globe, Palette, Users, MessageCircle,
  Html5, Css3, Javascript, Python, Flask, Django,
  Git, Github, Figma, Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <Html5 className="w-4 h-4 mr-1" /> },
        { name: "CSS", icon: <Css3 className="w-4 h-4 mr-1" /> },
        { name: "JavaScript", icon: <Javascript className="w-4 h-4 mr-1" /> }
      ]
    },
    {
      icon: Code,
      title: "Backend Technologies",
      skills: [
        { name: "Python", icon: <Python className="w-4 h-4 mr-1" /> },
        { name: "Flask", icon: <Flask className="w-4 h-4 mr-1" /> },
        { name: "Django", icon: <Django className="w-4 h-4 mr-1" /> }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <Database className="w-4 h-4 mr-1" /> },
        { name: "SQLite", icon: <Database className="w-4 h-4 mr-1" /> },
        { name: "MongoDB", icon: <Database className="w-4 h-4 mr-1" /> }
      ]
    },
    {
      icon: Terminal,
      title: "Tools",
      skills: [
        { name: "VS Code", icon: <Code className="w-4 h-4 mr-1" /> },
        { name: "Git", icon: <Git className="w-4 h-4 mr-1" /> },
        { name: "GitHub", icon: <Github className="w-4 h-4 mr-1" /> },
        { name: "Postman", icon: <Code className="w-4 h-4 mr-1" /> },
        { name: "ChatGPT", icon: <MessageCircle className="w-4 h-4 mr-1" /> }
      ]
    },
    {
      icon: Palette,
      title: "Design",
      skills: [
        { name: "Figma", icon: <Figma className="w-4 h-4 mr-1" /> },
        { name: "Adobe Photoshop", icon: <Palette className="w-4 h-4 mr-1" /> },
        { name: "Adobe Illustrator", icon: <Palette className="w-4 h-4 mr-1" /> }
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: <span className="w-4 h-4 mr-1">🧩</span> },
        { name: "Team Collaboration", icon: <span className="w-4 h-4 mr-1">👥</span> },
        { name: "Adaptability", icon: <span className="w-4 h-4 mr-1">🔄</span> },
        { name: "Rapid Learning", icon: <span className="w-4 h-4 mr-1">⚡</span> }
      ]
    }
  ];

  const languages = ["Tamil", "English"];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies & Skills
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and soft skills for building scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyan-500 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200 cursor-default"
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-8 text-white">
            <MessageCircle className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Languages</h3>
            <div className="flex justify-center space-x-4">
              {languages.map((language, index) => (
                <span
                  key={index}
                  className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-medium"
                >
                  {language === "Tamil" ? "🇱🇰" : "🇬🇧"}
                  <span className="ml-2">{language}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
