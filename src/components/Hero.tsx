import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaCode } from 'react-icons/fa';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Solutions Innovantes",
      description: "Développez votre entreprise avec des solutions numériques sur mesure",
      icon: <FaRocket className="w-8 h-8" />
    },
    {
      title: "Sécurité Maximale",
      description: "Protégez vos données avec nos solutions de sécurité avancées",
      icon: <FaShieldAlt className="w-8 h-8" />
    },
    {
      title: "Expertise Technique",
      description: "Bénéficiez de notre expertise en développement web et mobile",
      icon: <FaCode className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#020617] to-[#0f172a] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 lg:pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
              HK Communities
            </h1>
          </motion.div>

          <motion.h2 
            className="text-2xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            SOLUTIONS INNOVANTES INFORMATIQUES
          </motion.h2>

          {/* Animated Features */}
          <div className="relative h-32 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentFeature === index ? 1 : 0,
                  y: currentFeature === index ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ display: currentFeature === index ? 'flex' : 'none' }}
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="/services" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg font-semibold overflow-hidden"
            >
              <span className="relative z-10">Découvrir Nos Services</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/contact" 
              className="group relative px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold overflow-hidden"
            >
              <span className="relative z-10">Contactez-Nous</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isVisible ? 0.15 : 0, scale: isVisible ? 1 : 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isVisible ? 0.1 : 0, scale: isVisible ? 1 : 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1.5 h-3 bg-white rounded-full mx-auto"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}