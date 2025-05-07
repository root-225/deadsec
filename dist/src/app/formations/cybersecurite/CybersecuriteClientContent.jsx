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
exports.default = CybersecuriteClientContent;
var react_1 = __importStar(require("react"));
var InscriptionForm_1 = __importDefault(require("@/components/InscriptionForm")); // Import the new form component
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var Contact_1 = __importDefault(require("@/components/Contact")); // Keep Contact import
function CybersecuriteClientContent() {
    var _a = (0, react_1.useState)(null), selectedModule = _a[0], setSelectedModule = _a[1];
    // Remove formError and formSuccess states as the form is removed
    // const [formError, setFormError] = useState("");
    // const [formSuccess, setFormSuccess] = useState("");
    var _b = (0, react_1.useState)(false), showContactForm = _b[0], setShowContactForm = _b[1]; // Add state for contact form visibility
    var modules = [
        {
            id: 1,
            icon: <fa_1.FaShieldAlt className="w-6 h-6"/>,
            title: 'Introduction à la Cybersécurité',
            description: 'Fondamentaux et concepts de base de la sécurité informatique',
            duration: '4 semaines',
            students: '150+',
            topics: [
                'Principes de sécurité',
                'Types de menaces',
                'Analyse des risques',
                'Bonnes pratiques'
            ]
        },
        {
            id: 2,
            icon: <fa_1.FaNetworkWired className="w-6 h-6"/>,
            title: 'Sécurité des Réseaux',
            description: 'Protection et surveillance des infrastructures réseau',
            duration: '6 semaines',
            students: '120+',
            topics: [
                'Architecture sécurisée',
                'Pare-feu et VPN',
                'Détection d\'intrusion',
                'Sécurité Wi-Fi'
            ]
        },
        {
            id: 3,
            icon: <fa_1.FaKey className="w-6 h-6"/>,
            title: 'Cryptographie',
            description: 'Techniques de chiffrement et protection des données',
            duration: '5 semaines',
            students: '90+',
            topics: [
                'Algorithmes de chiffrement',
                'Gestion des clés',
                'PKI',
                'Protocoles sécurisés'
            ]
        },
        {
            id: 4,
            icon: <fa_1.FaBug className="w-6 h-6"/>,
            title: 'Gestion des Vulnérabilités',
            description: 'Identification et correction des failles de sécurité',
            duration: '6 semaines',
            students: '100+',
            topics: [
                'Scan de vulnérabilités',
                'Tests de pénétration',
                'Correction des failles',
                'Veille sécurité'
            ]
        },
        {
            id: 5,
            icon: <fa_1.FaCode className="w-6 h-6"/>,
            title: 'Sécurité Applicative',
            description: 'Développement et audit d\'applications sécurisées',
            duration: '7 semaines',
            students: '80+',
            topics: [
                'OWASP Top 10',
                'Tests de sécurité',
                'Secure coding',
                'API Security'
            ]
        },
        {
            id: 6,
            icon: <fa_1.FaExclamationTriangle className="w-6 h-6"/>,
            title: 'Réponse aux Incidents',
            description: 'Gestion et analyse des incidents de sécurité',
            duration: '5 semaines',
            students: '70+',
            topics: [
                'Plan de réponse',
                'Analyse forensique',
                'Gestion de crise',
                'Documentation'
            ]
        }
    ];
    return (<>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
            <fa_1.FaShieldAlt className="w-16 h-16"/>
          </div>
        </framer_motion_1.motion.div>

        <framer_motion_1.motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
          Formation Cybersécurité
        </framer_motion_1.motion.h1>

        <framer_motion_1.motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Devenez un expert en sécurité informatique avec notre programme complet couvrant tous les aspects essentiels de la cybersécurité moderne.
        </framer_motion_1.motion.p>

        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <fa_1.FaGraduationCap className="w-6 h-6 text-red-500"/>
            <span className="text-gray-700 dark:text-gray-300">6 Modules Complets</span>
          </div>
          <div className="flex items-center gap-2">
            <fa_1.FaCalendarAlt className="w-6 h-6 text-orange-500"/>
            <span className="text-gray-700 dark:text-gray-300">33 Semaines</span>
          </div>
          <div className="flex items-center gap-2">
            <fa_1.FaUsers className="w-6 h-6 text-yellow-500"/>
            <span className="text-gray-700 dark:text-gray-300">600+ Étudiants</span>
          </div>
        </framer_motion_1.motion.div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map(function (module, index) { return (<framer_motion_1.motion.div key={module.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative group" onMouseEnter={function () { return setSelectedModule(module.id); }} onMouseLeave={function () { return setSelectedModule(null); }}>
            <div className="h-full rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{module.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">{module.description}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <fa_1.FaCalendarAlt className="w-5 h-5 text-red-500"/>
                  Durée: {module.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <fa_1.FaUsers className="w-5 h-5 text-orange-500"/>
                  Étudiants: {module.students}
                </div>

                <div className="space-y-2">
                  {module.topics.map(function (topic, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500"/>
                      {topic}
                    </framer_motion_1.motion.div>); })}
                </div>
              </div>

              {/* Remove the "S'inscrire au Module" button */}
              {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-xl hover:from-red-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300"
            >
              S'inscrire au Module
            </motion.button> */}
            </div>
          </framer_motion_1.motion.div>); })}
      </div>

        {/* Inscription Form Section */}
        <div className="max-w-2xl mx-auto mt-16">
          <InscriptionForm_1.default formationName="Cybersécurité"/>
        </div>

        {/* Remove Registration Form */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Inscription à la formation</h3>
          <form
            className="space-y-6"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
              const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
              const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
              let valid = true;
              let errorMsg = '';
              if (!name) { valid = false; errorMsg = 'Le nom est requis.'; }
              else if (!email || !/^\S+@\S+\.\S+$/.test(email)) { valid = false; errorMsg = 'Email invalide.'; }
              else if (!phone || !/^\+?[0-9\s-]{7,}$/.test(phone)) { valid = false; errorMsg = 'Numéro de téléphone invalide.'; }
              if (!valid) {
                // setFormError(errorMsg);
                // setFormSuccess('');
                return;
              }
              // setFormError('');
              // setFormSuccess('Inscription réussie ! Nous vous contacterons bientôt.');
              form.reset();
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom complet</label>
              <input type="text" name="name" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Adresse email</label>
              <input type="email" name="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Numéro de téléphone</label>
              <input type="tel" name="phone" id="phone" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" required />
            </div>
            {/* {formError && <div className="text-red-600 dark:text-red-400 text-sm">{formError}</div>} */}
            {/* {formSuccess && <div className="text-green-600 dark:text-green-400 text-sm">{formSuccess}</div>} */}
            {/* <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-medium hover:from-red-700 hover:to-orange-600 transition-all duration-300">S'inscrire</button> */}
          {/* </form> */}
        {/* </motion.div> */}
      
      {/* Conditionally render Contact component */}
      {showContactForm && <Contact_1.default />}
      {/* Remove original Contact component rendering */}
      {/* <Contact /> */}
    </>);
}
