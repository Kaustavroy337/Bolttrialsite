import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client-Centric Approach",
    description: "We put our clients first, ensuring their vision and goals drive every decision we make."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Results-Driven",
    description: "Our strategies are meticulously crafted to deliver measurable impact and ROI."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation First",
    description: "We stay ahead of digital trends to provide cutting-edge solutions."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're a team of creative minds and strategic thinkers, dedicated to elevating brands in the digital space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-gray-300 mb-6">
              Founded in 2020, NextView has quickly established itself as a leading digital agency, 
              bringing together expertise in design, technology, and marketing to create exceptional 
              digital experiences.
            </p>
            <p className="text-gray-300">
              Our passion for innovation and commitment to excellence has helped numerous brands 
              achieve their digital transformation goals and establish strong market positions.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Our team"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-400/10 rounded-xl" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900/80 p-6 rounded-xl border border-gray-700/50"
            >
              <div className="p-3 bg-blue-400/10 rounded-xl text-blue-400 inline-block mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};