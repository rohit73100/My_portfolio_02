import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-600 transition-colors">
                <Award className="text-blue-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <div className="mt-2 flex items-center text-gray-500 group-hover:text-blue-500">
                  <span className="text-sm">View Certificate</span>
                  <ExternalLink size={16} className="ml-1" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}