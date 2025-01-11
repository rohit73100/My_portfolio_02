import React from 'react';
import { motion } from 'framer-motion';
import { Server, Network, Shield, Users, Brain, Clock, Cloud, Database } from 'lucide-react';

const skills = {
  technical: [
    { name: 'Windows OS', icon: Server },
    { name: 'Networking (TCP/IP, DNS, DHCP)', icon: Network },
    { name: 'Google Cloud', icon: Cloud },
    { name: 'Firewall Configuration (Fortigate)', icon: Shield }
  ],
  infrastructure: [
    { name: 'Server Administration', icon: Server },
    { name: 'Storage Solutions', icon: Database },
    { name: 'Disaster Recovery Planning', icon: Shield }
  ],
  soft: [
    { name: 'Leadership', icon: Users },
    { name: 'Adaptability', icon: Brain },
    { name: 'Time Management', icon: Clock }
  ]
};

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Skills</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h2>
          <div className="space-y-4">
            {skills.technical.map((skill, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <skill.icon className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure Management</h2>
          <div className="space-y-4">
            {skills.infrastructure.map((skill, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <skill.icon className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Soft Skills</h2>
          <div className="space-y-4">
            {skills.soft.map((skill, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <skill.icon className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}