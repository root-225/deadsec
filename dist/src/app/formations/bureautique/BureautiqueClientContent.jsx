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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BureautiqueClientContent;
var react_1 = __importStar(require("react"));
var InscriptionForm_1 = __importDefault(require("@/components/InscriptionForm"));
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
function BureautiqueClientContent() {
    var _a = (0, react_1.useState)(null), selectedModule = _a[0], setSelectedModule = _a[1];
    var modules = [
        {
            id: 1,
            icon: <fa_1.FaFileWord className="w-6 h-6"/>,
            title: 'Traitement de Texte Avancé',
            description: 'Maîtrise des fonctionnalités de Word pour des documents professionnels.',
            duration: '4 semaines',
            students: '200+',
            topics: [
                'Mise en page complexe',
                'Styles et modèles',
                'Publipostage',
                'Table des matières'
            ]
        },
        {
            id: 2,
            icon: <fa_1.FaFileExcel className="w-6 h-6"/>,
            title: 'Analyse de Données avec Excel',
            description: 'Exploitation avancée d\'Excel pour l\'analyse et la visualisation.',
            duration: '6 semaines',
            students: '180+',
            topics: [
                'Tableaux croisés dynamiques',
                'Fonctions avancées',
                'Graphiques personnalisés',
                'Macros de base'
            ]
        },
        {
            id: 3,
            icon: <fa_1.FaFilePowerpoint className="w-6 h-6"/>,
            title: 'Présentations Impactantes',
            description: 'Création de présentations PowerPoint professionnelles et engageantes.',
            duration: '4 semaines',
            students: '150+',
            topics: [
                'Design de diapositives',
                'Animations et transitions',
                'Intégration multimédia',
                'Prise de parole'
            ]
        },
        {
            id: 4,
            icon: <fa_1.FaEnvelope className="w-6 h-6"/>,
            title: 'Gestion Efficace des Emails',
            description: 'Optimisation de l\'utilisation de la messagerie (ex: Outlook).',
            duration: '3 semaines',
            students: '250+',
            topics: [
                'Organisation de la boîte mail',
                'Règles et filtres',
                'Gestion du calendrier',
                'Etiquette professionnelle'
            ]
        },
        {
            id: 5,
            icon: <fa_1.FaTasks className="w-6 h-6"/>,
            title: 'Organisation et Productivité',
            description: 'Méthodes et outils pour améliorer l\'organisation personnelle.',
            duration: '3 semaines',
            students: '190+',
            topics: [
                'Gestion du temps',
                'Prise de notes efficace',
                'Outils collaboratifs',
                'Organisation numérique'
            ]
        }
    ];
    var totalWeeks = modules.reduce(function (sum, module) { return sum + parseInt(module.duration); }, 0);
    var totalStudents = modules.reduce(function (sum, module) { return sum + parseInt(module.students.replace('+', '')); }, 0);
    return (<>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
            <fa_1.FaKeyboard className="w-16 h-16"/>
          </div>
        </framer_motion_1.motion.div>

        <framer_motion_1.motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Formation Bureautique
        </framer_motion_1.motion.h1>

        <framer_motion_1.motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Maîtrisez les outils bureautiques essentiels pour booster votre productivité et votre efficacité professionnelle au quotidien.
        </framer_motion_1.motion.p>

        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <fa_1.FaGraduationCap className="w-6 h-6 text-blue-500"/>
            <span className="text-gray-700 dark:text-gray-300">{modules.length} Modules Complets</span>
          </div>
          <div className="flex items-center gap-2">
            <fa_1.FaCalendarAlt className="w-6 h-6 text-cyan-500"/>
            <span className="text-gray-700 dark:text-gray-300">{totalWeeks} Semaines</span>
          </div>
          <div className="flex items-center gap-2">
            <fa_1.FaUsers className="w-6 h-6 text-teal-500"/>
            <span className="text-gray-700 dark:text-gray-300">{totalStudents}+ Étudiants</span>
          </div>
        </framer_motion_1.motion.div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map(function (module, index) { return (<framer_motion_1.motion.div key={module.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative group" onMouseEnter={function () { return setSelectedModule(module.id); }} onMouseLeave={function () { return setSelectedModule(null); }}>
            <div className="h-full rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{module.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">{module.description}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <fa_1.FaCalendarAlt className="w-5 h-5 text-blue-500"/>
                  Durée: {module.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <fa_1.FaUsers className="w-5 h-5 text-cyan-500"/>
                  Étudiants: {module.students}
                </div>

                <div className="space-y-2">
                  {module.topics.map(function (topic, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"/>
                      {topic}
                    </framer_motion_1.motion.div>); })}
                </div>
              </div>
            </div>
          </framer_motion_1.motion.div>); })}
      </div>

      {/* Inscription Form Section */}
      <div className="max-w-2xl mx-auto mt-16">
        <InscriptionForm_1.default formationName="Bureautique"/>
      </div>
    </>);
}
