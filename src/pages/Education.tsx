import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Education</h1>
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4 hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 p-3 rounded-full">
              <GraduationCap className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}