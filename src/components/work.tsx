import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Zap } from 'lucide-react';

const projects = [
  {
    title: "Global Tech Rebrand",
    category: "Branding & Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    description: "Complete digital transformation for a leading tech company."
  },
  {
    title: "E-commerce Revolution",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    description: "Award-winning e-commerce platform with AI-driven recommendations."
  },
  {
    title: "Social Impact Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
    description: "Viral social media campaign reaching millions globally."
  }
];

const stats = [
  { icon: <Award />, value: "150+", label: "Projects Completed" },
  { icon: <Zap />, value: "98%", label: "Client Satisfaction" }
];

export const Work = () => {
  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming visions into digital reality through innovative solutions and creative excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-blue-400 text-sm font-medium mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                >
                  View Case Study <ExternalLink className="ml-2" size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center space-x-4">
              <div className="p-3 bg-blue-400/10 rounded-xl text-blue-400">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};