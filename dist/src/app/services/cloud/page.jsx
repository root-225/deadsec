"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = CloudServicePage;
var link_1 = __importDefault(require("next/link"));
var fa_1 = require("react-icons/fa");
var ServicePagePlaceholder_1 = __importDefault(require("@/components/ServicePagePlaceholder"));
exports.metadata = {
    title: 'Services Cloud | deadsec',
    description: 'Solutions cloud personnalisées pour optimiser vos opérations et réduire les coûts.',
};
function CloudServicePage() {
    var features = [
        {
            icon: <fa_1.FaServer className="w-6 h-6"/>,
            title: "Infrastructure Cloud",
            description: "Infrastructure évolutive et sécurisée pour répondre à vos besoins d'entreprise."
        },
        {
            icon: <fa_1.FaLock className="w-6 h-6"/>,
            title: "Sécurité Cloud",
            description: "Protection complète de vos données et applications dans le cloud."
        },
        {
            icon: <fa_1.FaSync className="w-6 h-6"/>,
            title: "Migration Cloud",
            description: "Transition en douceur de vos systèmes existants vers le cloud."
        },
        {
            icon: <fa_1.FaChartLine className="w-6 h-6"/>,
            title: "Optimisation Cloud",
            description: "Amélioration des performances et réduction des coûts de votre infrastructure cloud."
        }
    ];
    var benefits = [
        "Réduction des coûts d'infrastructure",
        "Évolutivité à la demande",
        "Haute disponibilité et fiabilité",
        "Sécurité renforcée",
        "Accès à distance et mobilité",
        "Récupération après sinistre"
    ];
    return (<div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Solutions <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Cloud</span> Innovantes
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Optimisez vos opérations et réduisez vos coûts avec nos solutions cloud personnalisées.
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
                <ServicePagePlaceholder_1.default service="cloud" className="w-full h-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Solutions Cloud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(function (feature, index) { return (<div key={index} className="bg-blue-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white mr-4">
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
                Pourquoi Choisir Nos Services Cloud
              </h2>
              <p className="text-gray-600 mb-8">
                Nos solutions cloud vous offrent de nombreux avantages pour améliorer l'efficacité et la compétitivité de votre entreprise.
              </p>
              <ul className="space-y-4">
                {benefits.map(function (benefit, index) { return (<li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>); })}
              </ul>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prêt à Migrer vers le Cloud?</h3>
                <p className="text-gray-600 mb-6">
                  Nos experts vous accompagnent à chaque étape de votre transition vers le cloud, de l'évaluation initiale à la mise en œuvre et au support continu.
                </p>
                <link_1.default href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all">
                  Contactez-nous
                </link_1.default>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transformez Votre Infrastructure IT
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour découvrir comment nos solutions cloud peuvent vous aider à atteindre vos objectifs d'affaires.
          </p>
          <link_1.default href="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Demander une Consultation
          </link_1.default>
        </div>
      </section>
    </div>);
}
