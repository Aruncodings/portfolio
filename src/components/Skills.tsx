import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Database, Globe, Palette, Users, MessageCircle,
  GitBranch, Github, Figma, Terminal
} from 'lucide-react';

// SVG Icons for specific technologies
const PythonIcon = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.9 2.2c-4.8 0-8.7 3.9-8.7 8.7v1.4c0 4.8 3.9 8.7 8.7 8.7h1.4c4.8 0 8.7-3.9 8.7-8.7v-1.4c0-4.8-3.9-8.7-8.7-8.7h-1.4zm-1.1 2.2h3.3c1.1 0 2 .9 2 2v3.3c0 1.1-.9 2-2 2h-3.3c-1.1 0-2-.9-2-2v-3.3c0-1.1.9-2 2-2zm-6.6 5.5h3.3c1.1 0 2 .9 2 2v3.3c0 1.1-.9 2-2 2h-3.3c-1.1 0-2-.9-2-2v-3.3c0-1.1.9-2 2-2z"/>
  </svg>
);

const HTMLLogo = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const CSSLogo = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
  </svg>
);

const JSLogo = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-7.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
  </svg>
);

const FlaskLogo = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.9 14.5h-.1c-.1 0-.1 0-.2.1-.1.1-.1.2-.1.3v.1l-1.6 3.9h-3.3l.2-9.8-1.1-2.1h5.5c.1 0 .3 0 .4.1.1.1.1.3.1.4v1.2c0 .2-.1.3-.2.4-.1.1-.3.1-.4.1h-3.6l-.1 3.8h1.8c.2 0 .3.1.4.2.1.2.1.3.1.5v1.2zm-7.1-9.8L7.6 19.9H4.3L2.7 16c-.1-.1-.1-.2-.1-.3v-.1c0-.1 0-.2-.1-.2 0-.1-.1-.1-.2-.1H.9c-.2 0-.3-.1-.4-.2-.1-.2-.1-.3-.1-.5v-1.2c0-.2.1-.3.2-.4.1-.1.3-.1.4-.1h1.2l.2-1.1h-.3c-.2 0-.3-.1-.4-.2-.1-.2-.1-.3-.1-.5v-1.2c0-.2.1-.3.2-.4.1-.1.3-.1.4-.1h.6l1.1-5.5h5.3zm-2.8 0h-1.9l-.7 3.6h3.3l-.7-3.6z"/>
  </svg>
);

const DjangoLogo = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z"/>
  </svg>
);

const MySQLIcon = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 16.5v-3.75h3.75v3.75h-3.75zm-4.125 0v-3.75h3.75v3.75h-3.75zm-4.125 0v-3.75h3.75v3.75H8.25zm-4.125 0v-3.75h3.75v3.75H4.125zm8.25-4.125v-3.75h3.75v3.75h-3.75zm-4.125 0v-3.75h3.75v3.75H8.25zm-4.125 0v-3.75h3.75v3.75H4.125zm8.25-4.125v-3.75h3.75v3.75h-3.75zm-4.125 0v-3.75h3.75v3.75H8.25zm-4.125 0v-3.75h3.75v3.75H4.125z"/>
  </svg>
);

const MongoDBIcon = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-1.326 0-2.598.22-3.787.613a11.94 11.94 0 00-3.088 1.65A12.06 12.06 0 002.613 3.8 11.94 11.94 0 000 12c0 1.326.22 2.598.613 3.787a11.94 11.94 0 001.65 3.088 12.06 12.06 0 003.088 1.65A11.94 11.94 0 0012 24c1.326 0 2.598-.22 3.787-.613a11.94 11.94 0 003.088-1.65 12.06 12.06 0 001.65-3.088A11.94 11.94 0 0024 12c0-1.326-.22-2.598-.613-3.787a11.94 11.94 0 00-1.65-3.088 12.06 12.06 0 00-3.088-1.65A11.94 11.94 0 0012 0zm0 1.5c1.083 0 2.12.18 3.088.506a10.44 10.44 0 012.715 1.406 10.56 10.56 0 011.406 2.715A10.44 10.44 0 0119.5 12c0 1.083-.18 2.12-.506 3.088a10.44 10.44 0 01-1.406 2.715 10.56 10.56 0 01-2.715 1.406A10.44 10.44 0 0112 19.5c-1.083 0-2.12-.18-3.088-.506a10.44 10.44 0 01-2.715-1.406 10.56 10.56 0 01-1.406-2.715A10.44 10.44 0 014.5 12c0-1.083.18-2.12.506-3.088a10.44 10.44 0 011.406-2.715 10.56 10.56 0 012.715-1.406A10.44 10.44 0 0112 1.5z"/>
  </svg>
);

const PostmanIcon = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.5 12c0-1.933-.516-3.75-1.406-5.313l-2.844 2.844c.254.633.398 1.324.398 2.047 0 .723-.144 1.414-.398 2.047l2.844 2.844c.89-1.563 1.406-3.38 1.406-5.313zM12 21.5c-1.933 0-3.75-.516-5.313-1.406l2.844-2.844c.633.254 1.324.398 2.047.398.723 0 1.414-.144 2.047-.398l2.844 2.844c-1.563.89-3.38 1.406-5.313 1.406zm-7.594-5.313l2.844-2.844c-.254-.633-.398-1.324-.398-2.047 0-.723.144-1.414.398-2.047L4.406 7.5C3.516 9.063 3 10.88 3 12c0 1.933.516 3.75 1.406 5.313zM12 3c1.933 0 3.75.516 5.313 1.406l-2.844 2.844c-.633-.254-1.324-.398-2.047-.398-.723 0-1.414.144-2.047.398L6.687 4.406C8.25 3.516 10.067 3 12 3z"/>
  </svg>
);

const PhotoshopIcon = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8.5v-7h2.5c1.657 0 3 1.343 3 3.5S12.657 13.5 11 13.5h-2.5zm0-2.5h2.5c.552 0 1-.448 1-1s-.448-1-1-1h-2.5v2z"/>
  </svg>
);

const IllustratorIcon = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-16h2v8h-2V6zm0 10h2v2h-2v-2z"/>
  </svg>
);

const VSCodeIcon = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
  </svg>
);

const ChatGPTIcon = () => (
  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.9 2.2c-4.8 0-8.7 3.9-8.7 8.7v1.4c0 4.8 3.9 8.7 8.7 8.7h1.4c4.8 0 8.7-3.9 8.7-8.7v-1.4c0-4.8-3.9-8.7-8.7-8.7h-1.4zm-1.1 2.2h3.3c1.1 0 2 .9 2 2v3.3c0 1.1-.9 2-2 2h-3.3c-1.1 0-2-.9-2-2v-3.3c0-1.1.9-2 2-2zm-6.6 5.5h3.3c1.1 0 2 .9 2 2v3.3c0 1.1-.9 2-2 2h-3.3c-1.1 0-2-.9-2-2v-3.3c0-1.1.9-2 2-2z"/>
  </svg>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <HTMLLogo /> },
        { name: "CSS", icon: <CSSLogo /> },
        { name: "JavaScript", icon: <JSLogo /> }
      ]
    },
    {
      icon: Code,
      title: "Backend Technologies",
      skills: [
        { name: "Python", icon: <PythonIcon /> },
        { name: "Flask", icon: <FlaskLogo /> },
        { name: "Django", icon: <DjangoLogo /> }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <MySQLIcon /> },
        { name: "SQLite", icon: <Database className="w-4 h-4 mr-1" /> },
        { name: "MongoDB", icon: <MongoDBIcon /> }
      ]
    },
    {
      icon: Terminal,
      title: "Tools",
      skills: [
        { name: "VS Code", icon: <VSCodeIcon /> },
        { name: "Git", icon: <GitBranch className="w-4 h-4 mr-1" /> },
        { name: "GitHub", icon: <Github className="w-4 h-4 mr-1" /> },
        { name: "Postman", icon: <PostmanIcon /> },
        { name: "ChatGPT", icon: <ChatGPTIcon /> }
      ]
    },
    {
      icon: Palette,
      title: "Design",
      skills: [
        { name: "Figma", icon: <Figma className="w-4 h-4 mr-1" /> },
        { name: "Adobe Photoshop", icon: <PhotoshopIcon /> },
        { name: "Adobe Illustrator", icon: <IllustratorIcon /> }
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
                  {language === "Tamil" ? "IN" : "🇬🇧"}
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
