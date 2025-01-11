import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Experience</h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 relative"
          >
            <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <Briefcase size={14} className="text-white" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
              <p className="text-blue-600 font-medium">{experience.company}</p>
              <p className="text-gray-500 text-sm mb-4">{experience.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {experience.description.map((desc, i) => (
                  <li key={i} className="text-gray-700">{desc}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}