'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloud, FaRobot, FaShieldAlt, FaRocket } from 'react-icons/fa';

const features = [
  {
    title: 'Solutions Cloud',
    description: 'Infrastructure cloud évolutive et sécurisée adaptée aux besoins de votre entreprise.',
    icon: <FaCloud className="w-8 h-8" />,
    gradient: 'from-blue-500 to-cyan-500',
    details: ['Services de Migration Cloud', 'Infrastructure as Code', 'Support Cloud 24/7', 'Optimisation des Coûts']
  },
  {
    title: 'IA & Machine Learning',
    description: 'Solutions d\'IA de pointe pour automatiser les processus et stimuler l\'innovation.',
    icon: <FaRobot className="w-8 h-8" />,
    gradient: 'from-purple-500 to-pink-500',
    details: ['Analytique Prédictive', 'Traitement du Langage Naturel', 'Vision par Ordinateur', 'Modèles de Deep Learning']
  },
  {
    title: 'Cybersécurité',
    description: 'Solutions de sécurité complètes pour protéger vos actifs numériques.',
    icon: <FaShieldAlt className="w-8 h-8" />,
    gradient: 'from-red-500 to-orange-500',
    details: ['Détection des Menaces', 'Audit de Sécurité', 'Gestion de la Conformité', 'Réponse aux Incidents']
  },
  {
    title: 'Transformation Digitale',
    description: 'Solutions stratégiques pour moderniser vos opérations commerciales.',
    icon: <FaRocket className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-500',
    details: ['Automatisation des Processus', 'Stratégie Digitale', 'Gestion du Changement', 'Intégration Technologique']
  }
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Notre Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Découvrez comment nos solutions complètes peuvent transformer votre entreprise et stimuler sa croissance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="space-y-3"
                    >
                      {feature.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center text-slate-300"
                        >
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                          {detail}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}