import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Summary = () => {
  return (
    <section id="summary" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-cyan-500 rounded-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Versatile Software Developer with hands-on experience in backend and full-stack development 
                using <span className="font-semibold text-cyan-600 dark:text-cyan-400">Python (Flask, Django)</span> and 
                <span className="font-semibold text-cyan-600 dark:text-cyan-400"> SQL</span>. Proficient in 
                Data Structures and Algorithms (DSA) with a strong problem-solving mindset, enabling efficient 
                code design and system logic. Skilled in system optimization, database design, and automation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;