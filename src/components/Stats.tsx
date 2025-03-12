import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  {
    number: '50+',
    label: 'Successful Projects'
  },
  {
    number: '98%',
    label: 'Client Satisfaction'
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#020617]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center space-x-8">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {stat.number}
              </h3>
              <p className="text-lg text-white">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}