import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaRobot, FaBrain, FaChartLine, FaComments, FaDatabase } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Services d\'Intelligence Artificielle | HK Consulting',
  description: 'Intégration de solutions IA avancées pour transformer votre entreprise.',
};

export default function AIServicePage() {
  const features = [
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Développement de modèles d'apprentissage automatique pour analyser vos données et prédire les tendances."
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Analyse Prédictive",
      description: "Anticipez les tendances futures et prenez des décisions éclairées basées sur des prédictions précises."
    },
    {
      icon: <FaComments className="w-6 h-6" />,
      title: "Chatbots Intelligents",
      description: "Automatisez votre service client avec des chatbots IA capables de comprendre et répondre aux demandes complexes."
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Traitement des Données",
      description: "Extraction d'insights précieux à partir de grands volumes de données non structurées."
    }
  ];

  const benefits = [
    "Automatisation des tâches répétitives",
    "Prise de décision basée sur les données",
    "Personnalisation avancée pour vos clients",
    "Optimisation des processus métier",
    "Détection d'anomalies et prévention des fraudes",
    "Avantage concurrentiel significatif"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Solutions <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">d'Intelligence Artificielle</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transformez votre entreprise avec nos solutions d'IA avancées et exploitez pleinement le potentiel de vos données.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Demander une consultation
                </Link>
                <Link href="/services-list" className="btn-secondary">
                  Tous nos services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="/images/ai-service.jpg"
                  alt="Services d'Intelligence Artificielle"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Solutions d'Intelligence Artificielle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-400 text-white mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi Adopter l'Intelligence Artificielle
              </h2>
              <p className="text-gray-600 mb-8">
                L'IA n'est plus un luxe mais une nécessité pour les entreprises qui souhaitent rester compétitives dans l'économie numérique d'aujourd'hui.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prêt à Exploiter la Puissance de l'IA?</h3>
                <p className="text-gray-600 mb-6">
                  Nos experts en IA vous aideront à identifier les opportunités d'application de l'intelligence artificielle dans votre entreprise et à développer des solutions sur mesure.
                </p>
                <Link href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-600 transition-all">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transformez Votre Entreprise avec l'IA
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour découvrir comment nos solutions d'intelligence artificielle peuvent vous aider à atteindre vos objectifs d'affaires.
          </p>
          <Link href="/contact" className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Demander une Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 