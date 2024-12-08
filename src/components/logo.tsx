import React from 'react';
import { Eye, Triangle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center space-x-2"
    >
      <motion.div 
        className="relative"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <Triangle
          size={28}
          className="text-blue-400 transform rotate-180"
          fill="currentColor"
          strokeWidth={1}
        />
        <Eye
          size={16}
          className="text-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
      <motion.span 
        className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        NextView
      </motion.span>
    </motion.div>
  );
};