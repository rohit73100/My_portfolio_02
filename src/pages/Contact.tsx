import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<{
    message: string;
    type: 'success' | 'error' | '';
  }>({ message: '', type: '' });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [focused, setFocused] = React.useState({
    name: false,
    email: false,
    message: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_erqsw08',
        'template_reoa26e',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Rohit Tiwari',
          reply_to: formData.email,
        },
        'WRJda93Emn9q8QzYb'
      );

      setFormStatus({
        message: 'Message sent successfully! I will get back to you soon.',
        type: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({
        message: 'Failed to send message. Please try again later.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field: string) => {
    setFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field: string) => {
    setFocused(prev => ({
      ...prev,
      [field]: false
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-4 text-center"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 text-center mb-12"
        >
          Have a question or want to work together? Drop me a message!
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+919264917285"
                className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors p-4 rounded-lg hover:bg-blue-50 group border border-gray-100"
              >
                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-200 transition-colors">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <span className="font-medium">+91 92649 17285</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:rohit73100@gmail.com"
                className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors p-4 rounded-lg hover:bg-blue-50 group border border-gray-100"
              >
                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-200 transition-colors">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <span className="font-medium">rohit73100@gmail.com</span>
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 text-gray-700 p-4 rounded-lg group border border-gray-100"
              >
                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-200 transition-colors">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <span className="font-medium">Lucknow, UP, India</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-semibold mb-2 transition-colors ${
                    focused.name ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                  disabled={isSubmitting}
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-semibold mb-2 transition-colors ${
                    focused.email ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                  disabled={isSubmitting}
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-semibold mb-2 transition-colors ${
                    focused.message ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all resize-none"
                  disabled={isSubmitting}
                  placeholder="Your message here..."
                ></motion.textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-4 rounded-lg text-white text-lg font-semibold shadow-lg transition-all ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={24} className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                  ) : (
                    <XCircle className="mr-2 flex-shrink-0" size={20} />
                  )}
                  <span className="text-sm font-medium">{formStatus.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
