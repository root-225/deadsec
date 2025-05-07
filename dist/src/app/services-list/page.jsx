"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = ServicesListPage;
var link_1 = __importDefault(require("next/link"));
var fa_1 = require("react-icons/fa");
exports.metadata = {
    title: 'Nos Services | deadsec',
    description: 'Découvrez nos services professionnels en cloud, sécurité, IA et transformation digitale.',
};
function ServicesListPage() {
    var services = [
        {
            id: 'cloud',
            title: 'Services Cloud',
            description: 'Solutions cloud personnalisées pour optimiser vos opérations et réduire les coûts.',
            icon: fa_1.FaCloud,
            image: '/images/cloud-service.jpg',
            gradient: 'from-blue-500 to-cyan-400',
            textGradient: 'from-blue-600 to-cyan-500',
            bgGradient: 'from-blue-50 to-cyan-50',
            href: '/services/cloud',
        },
        {
            id: 'security',
            title: 'Services de Sécurité',
            description: 'Protection complète de vos données et systèmes contre les menaces modernes.',
            icon: fa_1.FaShieldAlt,
            image: '/images/security-service.jpg',
            gradient: 'from-red-500 to-orange-400',
            textGradient: 'from-red-600 to-orange-500',
            bgGradient: 'from-red-50 to-orange-50',
            href: '/services/security',
        },
        {
            id: 'ai',
            title: 'Services d\'Intelligence Artificielle',
            description: 'Intégration de solutions IA avancées pour transformer votre entreprise.',
            icon: fa_1.FaRobot,
            image: '/images/ai-service.jpg',
            gradient: 'from-purple-500 to-indigo-400',
            textGradient: 'from-purple-600 to-indigo-500',
            bgGradient: 'from-purple-50 to-indigo-50',
            href: '/services/ai',
        },
        {
            id: 'digital',
            title: 'Transformation Digitale',
            description: 'Accompagnement dans votre transition numérique pour rester compétitif.',
            icon: fa_1.FaLaptopCode,
            image: '/images/digital-service.jpg',
            gradient: 'from-green-500 to-teal-400',
            textGradient: 'from-green-600 to-teal-500',
            bgGradient: 'from-green-50 to-teal-50',
            href: '/services/digital',
        },
    ];
    return (<div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Nos Services Professionnels
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Des solutions innovantes et personnalisées pour répondre aux défis technologiques de votre entreprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <link_1.default href="/contact" className="btn-primary">
              Contactez-nous
            </link_1.default>
            <link_1.default href="/about" className="btn-secondary">
              En savoir plus
            </link_1.default>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(function (service) { return (<link_1.default key={service.id} href={service.href} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className={"h-3 bg-gradient-to-r ".concat(service.gradient)}></div>
              <div className="p-6">
                <div className={"inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ".concat(service.bgGradient, " mb-4")}>
                  {service.icon && <service.icon className={"h-6 w-6 text-gradient bg-gradient-to-r ".concat(service.textGradient)}/>}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                  <span>En savoir plus</span>
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </link_1.default>); })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Prêt à transformer votre entreprise?
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nos services peuvent vous aider.
          </p>
          <link_1.default href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors">
            Demander un devis gratuit
          </link_1.default>
        </div>
      </div>
    </div>);
}
