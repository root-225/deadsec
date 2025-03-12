'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';
import { FaCloud, FaRobot, FaShieldAlt, FaDigitalTachograph } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Cloud Solutions',
    description: 'Solutions cloud complètes incluant la migration, l\'optimisation et la gestion pour AWS, Azure et Google Cloud.',
    icon: <FaCloud className="w-8 h-8" />,
    features: [
      'Migration vers le Cloud',
      'Architecture Cloud',
      'Optimisation des Coûts',
      'Support Cloud 24/7',
      'Sécurité & Conformité'
    ],
    image: '/services/cloud-solutions.jpg',
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/20',
    learnMoreLink: '/services/cloud'
  },
  {
    id: 2,
    title: 'IA & Machine Learning',
    description: 'Solutions d\'IA de pointe incluant le développement de modèles personnalisés, l\'analyse de données et l\'automatisation intelligente.',
    icon: <FaRobot className="w-8 h-8" />,
    features: [
      'Modèles IA Personnalisés',
      'Analytique Prédictive',
      'Traitement du Langage Naturel',
      'Vision par Ordinateur',
      'Intégration IA'
    ],
    image: '/services/ai-ml.jpg',
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'bg-purple-500/20',
    learnMoreLink: '/services/ai'
  },
  {
    id: 3,
    title: 'Cybersécurité',
    description: 'Solutions de sécurité complètes pour protéger vos actifs numériques et assurer la conformité aux normes de l\'industrie.',
    icon: <FaShieldAlt className="w-8 h-8" />,
    features: [
      'Évaluation de Sécurité',
      'Détection des Menaces',
      'Gestion de la Conformité',
      'Formation en Sécurité',
      'Réponse aux Incidents'
    ],
    image: '/services/cybersecurity.jpg',
    color: 'from-red-500 to-orange-500',
    bgGlow: 'bg-red-500/20',
    learnMoreLink: '/services/security'
  },
  {
    id: 4,
    title: 'Transformation Digitale',
    description: 'Services de transformation numérique de bout en bout pour moderniser vos processus métier et votre pile technologique.',
    icon: <FaDigitalTachograph className="w-8 h-8" />,
    features: [
      'Automatisation des Processus',
      'Stratégie Digitale',
      'Modernisation Legacy',
      'Gestion du Changement',
      'Workplace Digital'
    ],
    image: '/services/digital-transformation.jpg',
    color: 'from-green-500 to-teal-500',
    bgGlow: 'bg-green-500/20',
    learnMoreLink: '/services/digital'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 matrix-bg opacity-10"></div>

      {/* Dynamic Background Glow */}
      <AnimatePresence>
        {hoveredService && (
          <motion.div
            key={`glow-${hoveredService}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute w-[600px] h-[600px] ${services.find(s => s.id === hoveredService)?.bgGlow} rounded-full mix-blend-multiply filter blur-3xl`}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              Nos Services
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto mt-6"
          >
            Des solutions technologiques complètes pour aider votre entreprise à prospérer à l'ère numérique.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg">
                <div className="relative h-64">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    priority={index < 2}
                    width={400}
                    height={400}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between items-center">
                    <Link
                      href={service.learnMoreLink}
                      className={`text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity flex items-center gap-2 group`}
                    >
                      En Savoir Plus
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link 
                      href="/contact"
                      className={`group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                      <span>Commencer</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}