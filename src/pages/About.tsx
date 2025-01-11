import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          I am Rohit Tiwari, a seasoned Regional IT Lead with over 3 years of professional experience. 
          My expertise spans IT server management, software engineering, and technical support. 
          I am passionate about leveraging technology to solve business challenges, optimize processes, 
          and foster innovation. My leadership philosophy emphasizes continuous improvement, collaboration, 
          and achieving organizational goals. Beyond my professional life, I enjoy exploring emerging 
          technologies and expanding my skills in AI, cloud computing, and cybersecurity.
        </p>
        <a
          href="https://drive.google.com/drive/folders/17AfnYmN4on6i9KhMEdz_yIj5TETrZWrT?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FileDown className="mr-2" size={20} />
          Download My Resume
        </a>
      </div>
    </motion.div>
  );
}
