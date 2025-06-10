
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaPython, FaDatabase, FaChartLine, FaCode, FaGraduationCap, FaCertificate, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import InscriptionForm from '@/components/InscriptionForm';

export default function IntelligenceArtificielleClientContent() {
  const modules = [
    {
      title: 'Introduction à l\'IA',
      description: 'Comprendre les concepts fondamentaux de l\'intelligence artificielle et ses applications.',
      duration: '2 semaines',
      students: '150+',
      topics: [
        'Histoire et évolution de l\'IA',
        'Types d\'intelligence artificielle',
        'Applications actuelles',
        'Éthique et IA',
        'Tendances futures'
      ]
    },
    {
      title: 'Machine Learning',
      description: 'Maîtriser les algorithmes d\'apprentissage automatique et leurs implémentations.',
      duration: '4 semaines',
      students: '120+',
      topics: [
        'Apprentissage supervisé',
        'Apprentissage non supervisé',
        'Réseaux de neurones',
        'Scikit-learn et TensorFlow',
        'Évaluation des modèles'
      ]
    },
    {
      title: 'Deep Learning',
      description: 'Plongez dans l\'apprentissage profond avec les réseaux de neurones avancés.',
      duration: '3 semaines',
      students: '100+',
      topics: [
        'Réseaux de neurones convolutifs',
        'Réseaux récurrents (RNN/LSTM)',
        'Vision par ordinateur',
        'Traitement du langage naturel',
        'PyTorch et Keras'
      ]
    },
    {
      title: 'IA Générative',
      description: 'Créez du contenu avec les modèles génératifs et les LLMs.',
      duration: '2 semaines',
      students: '80+',
      topics: [
        'GANs (Generative Adversarial Networks)',
        'Transformers',
        'GPT et modèles de langage',
        'Génération d\'images',
        'Prompt Engineering'
      ]
    },
    {
      title: 'Déploiement et Production',
      description: 'Déployez vos modèles IA en production de manière efficace.',
      duration: '2 semaines',
      students: '90+',
      topics: [
        'MLOps et pipelines',
        'Containerisation Docker',
        'APIs REST pour IA',
        'Monitoring des modèles',
        'Optimisation des performances'
      ]
    },
    {
      title: 'Projet Final',
      description: 'Développez un projet complet d\'intelligence artificielle.',
      duration: '3 semaines',
      students: '75+',
      topics: [
        'Définition du projet',
        'Collecte et préparation des données',
        'Développement du modèle',
        'Interface utilisateur',
        'Présentation et documentation'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
            <FaBrain className="w-16 h-16" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Formation Intelligence Artificielle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
        >
          Plongez dans l'univers fascinant de l'intelligence artificielle et maîtrisez les technologies qui façonnent l'avenir. 
          De l'apprentissage automatique au deep learning, développez vos compétences avec nos experts.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <FaGraduationCap className="w-8 h-8 text-purple-500 mr-2" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">16 semaines</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Durée totale</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <FaUsers className="w-8 h-8 text-pink-500 mr-2" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">500+</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Étudiants formés</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <FaCertificate className="w-8 h-8 text-indigo-500 mr-2" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">95%</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Taux de réussite</p>
          </div>
        </motion.div>
      </div>

      {/* Modules Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Modules de Formation
        </motion.h2>

        {modules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="tech-card p-6 md:p-8 glow-effect group hover:glow relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {module.title}
                </h3>
                <div className="flex gap-2">
                  <FaRobot className="w-6 h-6 text-purple-500" />
                  <FaBrain className="w-6 h-6 text-pink-500" />
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">{module.description}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaCalendarAlt className="w-5 h-5 text-purple-500" />
                  Durée: {module.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaUsers className="w-5 h-5 text-pink-500" />
                  Étudiants: {module.students}
                </div>

                <div className="space-y-2">
                  {module.topics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                      {topic}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Inscription Form Section */}
      <div className="max-w-2xl mx-auto mt-16">
        <InscriptionForm formationName="Intelligence Artificielle" />
      </div>
    </>
  );
}
