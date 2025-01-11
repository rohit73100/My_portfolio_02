import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from '../assest/rohit_profile.png';
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          filter: 'brightness(0.3)'
        }}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
  <img
    src={img}
    alt="Rohit Tiwari"
    className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
  />
</div>


            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Rohit Tiwari
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8">
              Dynamic Regional IT Lead | Expertise in IT Infrastructure and Software Engineering
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link
                to="/experience"
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Explore My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                Contact Me
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="tel:+919264917285"
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <Phone className="mr-2" size={20} />
                +91 92649 17285
              </a>
              <a
                href="mailto:rohit73100@gmail.com"
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                rohit73100@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}