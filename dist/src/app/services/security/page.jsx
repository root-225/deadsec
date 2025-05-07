"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = SecurityServicePage;
var link_1 = __importDefault(require("next/link"));
var image_1 = __importDefault(require("next/image"));
var fa_1 = require("react-icons/fa");
exports.metadata = {
    title: 'Services de Sécurité | deadsec',
    description: 'Protection complète de vos données et systèmes contre les menaces modernes.',
};
function SecurityServicePage() {
    var features = [
        {
            icon: <fa_1.FaLock className="w-6 h-6"/>,
            title: "Audit de Sécurité",
            description: "Évaluation complète de votre infrastructure pour identifier les vulnérabilités potentielles."
        },
        {
            icon: <fa_1.FaUserShield className="w-6 h-6"/>,
            title: "Protection des Données",
            description: "Solutions robustes pour protéger vos données sensibles contre les accès non autorisés."
        },
        {
            icon: <fa_1.FaEye className="w-6 h-6"/>,
            title: "Surveillance Continue",
            description: "Surveillance 24/7 de votre réseau pour détecter et répondre rapidement aux menaces."
        },
        {
            icon: <fa_1.FaServer className="w-6 h-6"/>,
            title: "Sécurité des Applications",
            description: "Protection de vos applications web et mobiles contre les attaques et les vulnérabilités."
        }
    ];
    var benefits = [
        "Protection contre les cybermenaces avancées",
        "Conformité aux réglementations de sécurité",
        "Réduction des risques de violation de données",
        "Détection précoce des menaces potentielles",
        "Réponse rapide aux incidents de sécurité",
        "Formation et sensibilisation des employés"
    ];
    return (<div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Solutions de <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">Sécurité</span> Avancées
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Protégez vos données et systèmes contre les menaces modernes avec nos solutions de sécurité complètes.
              </p>
              <div className="flex flex-wrap gap-4">
                <link_1.default href="/contact" className="btn-primary">
                  Demander une consultation
                </link_1.default>
                <link_1.default href="/services-list" className="btn-secondary">
                  Tous nos services
                </link_1.default>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative h-64 md:h-96 w-full">
                <image_1.default src="/images/security-service.jpg" alt="Services de Sécurité" fill className="object-cover rounded-xl shadow-lg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Solutions de Sécurité
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(function (feature, index) { return (<div key={index} className="bg-red-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-400 text-white mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>); })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir Nos Services de Sécurité
              </h2>
              <p className="text-gray-600 mb-8">
                Dans un monde où les cybermenaces évoluent constamment, nos solutions de sécurité vous offrent une protection complète et adaptée à vos besoins spécifiques.
              </p>
              <ul className="space-y-4">
                {benefits.map(function (benefit, index) { return (<li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>); })}
              </ul>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Besoin d'une Sécurité Renforcée?</h3>
                <p className="text-gray-600 mb-6">
                  Nos experts en sécurité vous aideront à identifier les vulnérabilités et à mettre en place des solutions adaptées pour protéger efficacement votre entreprise.
                </p>
                <link_1.default href="/contact" className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium py-3 px-6 rounded-lg hover:from-red-700 hover:to-orange-600 transition-all">
                  Contactez-nous
                </link_1.default>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Protégez Votre Entreprise Dès Aujourd'hui
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ne laissez pas les cybermenaces compromettre votre entreprise. Contactez-nous pour découvrir comment nos solutions de sécurité peuvent vous protéger.
          </p>
          <link_1.default href="/contact" className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Demander une Consultation
          </link_1.default>
        </div>
      </section>
    </div>);
}
