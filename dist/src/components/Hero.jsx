"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hero;
var react_1 = require("react");
var link_1 = __importDefault(require("next/link"));
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
function Hero() {
    var _a = (0, react_1.useState)(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = (0, react_1.useState)(0), currentFeature = _b[0], setCurrentFeature = _b[1];
    var features = [
        {
            title: "Solutions Innovantes",
            description: "Développez votre entreprise avec des solutions numériques sur mesure",
            icon: <fa_1.FaRocket className="w-8 h-8"/>
        },
        {
            title: "Sécurité Maximale",
            description: "Protégez vos données avec nos solutions de sécurité avancées",
            icon: <fa_1.FaShieldAlt className="w-8 h-8"/>
        },
        {
            title: "Expertise Technique",
            description: "Bénéficiez de notre expertise en développement web et mobile",
            icon: <fa_1.FaCode className="w-8 h-8"/>
        }
    ];
    (0, react_1.useEffect)(function () {
        setIsVisible(true);
        var interval = setInterval(function () {
            setCurrentFeature(function (prev) { return (prev + 1) % features.length; });
        }, 4000);
        return function () { return clearInterval(interval); };
    }, []);
    return (<div className="relative min-h-screen bg-gradient-to-b from-[#020617] to-[#0f172a] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 lg:pt-32">
        <framer_motion_1.motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center">
          <framer_motion_1.motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="inline-block">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
              deadsec
            </h1>
          </framer_motion_1.motion.div>

          <framer_motion_1.motion.h2 className="text-2xl md:text-4xl font-bold text-white mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            SOLUTIONS INNOVANTES INFORMATIQUES
          </framer_motion_1.motion.h2>

          {/* Animated Features */}
          <div className="relative h-32 mb-10">
            {features.map(function (feature, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{
                opacity: currentFeature === index ? 1 : 0,
                y: currentFeature === index ? 0 : 20
            }} transition={{ duration: 0.5 }} className="absolute inset-0 flex flex-col items-center justify-center" style={{ display: currentFeature === index ? 'flex' : 'none' }}>
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">{feature.description}</p>
              </framer_motion_1.motion.div>); })}
          </div>

          {/* CTA Buttons */}
          <framer_motion_1.motion.div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <link_1.default href="/services" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg font-semibold overflow-hidden">
              <span className="relative z-10">Découvrir Nos Services</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </link_1.default>
            <link_1.default href="/contact" className="group relative px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold overflow-hidden">
              <span className="relative z-10">Contactez-Nous</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>
            </link_1.default>
          </framer_motion_1.motion.div>
        </framer_motion_1.motion.div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <framer_motion_1.motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isVisible ? 0.15 : 0, scale: isVisible ? 1 : 0.5 }} transition={{ duration: 1, delay: 0.5 }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"/>
        <framer_motion_1.motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: isVisible ? 0.1 : 0, scale: isVisible ? 1 : 0.5 }} transition={{ duration: 1, delay: 0.7 }} className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"/>
      </div>

      {/* Scroll Indicator */}
      <framer_motion_1.motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}>
        <framer_motion_1.motion.div className="w-6 h-10 border-2 border-white rounded-full p-1" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <div className="w-1.5 h-3 bg-white rounded-full mx-auto"></div>
        </framer_motion_1.motion.div>
      </framer_motion_1.motion.div>
    </div>);
}
