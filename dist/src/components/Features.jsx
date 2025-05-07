"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Features;
var react_1 = __importStar(require("react"));
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var features = [
    {
        title: 'Solutions Cloud',
        description: 'Infrastructure cloud évolutive et sécurisée adaptée aux besoins de votre entreprise.',
        icon: <fa_1.FaCloud className="w-8 h-8"/>,
        gradient: 'from-blue-500 to-cyan-500',
        details: ['Services de Migration Cloud', 'Infrastructure as Code', 'Support Cloud 24/7', 'Optimisation des Coûts']
    },
    {
        title: 'IA & Machine Learning',
        description: 'Solutions d\'IA de pointe pour automatiser les processus et stimuler l\'innovation.',
        icon: <fa_1.FaRobot className="w-8 h-8"/>,
        gradient: 'from-purple-500 to-pink-500',
        details: ['Analytique Prédictive', 'Traitement du Langage Naturel', 'Vision par Ordinateur', 'Modèles de Deep Learning']
    },
    {
        title: 'Cybersécurité',
        description: 'Solutions de sécurité complètes pour protéger vos actifs numériques.',
        icon: <fa_1.FaShieldAlt className="w-8 h-8"/>,
        gradient: 'from-red-500 to-orange-500',
        details: ['Détection des Menaces', 'Audit de Sécurité', 'Gestion de la Conformité', 'Réponse aux Incidents']
    },
    {
        title: 'Transformation Digitale',
        description: 'Solutions stratégiques pour moderniser vos opérations commerciales.',
        icon: <fa_1.FaRocket className="w-8 h-8"/>,
        gradient: 'from-green-500 to-emerald-500',
        details: ['Automatisation des Processus', 'Stratégie Digitale', 'Gestion du Changement', 'Intégration Technologique']
    }
];
function Features() {
    var _a = (0, react_1.useState)(null), hoveredIndex = _a[0], setHoveredIndex = _a[1];
    return (<section className="relative py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Notre Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Découvrez comment nos solutions complètes peuvent transformer votre entreprise et stimuler sa croissance.
          </p>
        </framer_motion_1.motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map(function (feature, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="group" onMouseEnter={function () { return setHoveredIndex(index); }} onMouseLeave={function () { return setHoveredIndex(null); }}>
              <div className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className={"w-14 h-14 rounded-xl bg-gradient-to-r ".concat(feature.gradient, " flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300")}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>

                <framer_motion_1.AnimatePresence>
                  {hoveredIndex === index && (<framer_motion_1.motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="space-y-3">
                      {feature.details.map(function (detail, i) { return (<framer_motion_1.motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center text-slate-300">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                          {detail}
                        </framer_motion_1.motion.li>); })}
                    </framer_motion_1.motion.ul>)}
                </framer_motion_1.AnimatePresence>
              </div>
            </framer_motion_1.motion.div>); })}
        </div>
      </div>
    </section>);
}
