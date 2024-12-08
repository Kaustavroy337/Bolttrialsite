import React from 'react';
import { Palette, Globe, Megaphone, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Palette className="w-8 h-8 text-blue-400" />,
    title: 'Creative Design',
    description: 'My Name is Kaustav'
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    title: 'Digital Strategy',
    description: 'Data-driven approaches to reach and engage your target audience.'
  },
  {
    icon: <Megaphone className="w-8 h-8 text-blue-400" />,
    title: 'Brand Marketing',
    description: 'Build and strengthen your brand identity across all channels.'
  },
  {
    icon: <BarChart className="w-8 h-8 text-blue-400" />,
    title: 'Analytics & ROI',
    description: 'Measure and optimize campaign performance for maximum impact.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-900/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700/50"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};