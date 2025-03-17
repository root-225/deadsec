import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaLaptopCode, FaMobileAlt, FaChartBar, FaUsers, FaRocket } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Transformation Digitale | HK Consulting',
  description: 'Accompagnement dans votre transition numérique pour rester compétitif.',
};

export default function DigitalServicePage() {
  const features = [
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      title: "Développement Web & Mobile",
      description: "Création d'applications web et mobiles modernes et performantes pour améliorer votre présence numérique."
    },
    {
      icon: <FaChartBar className="w-6 h-6" />,
      title: "Analyse de Données",
      description: "Exploitation de vos données pour obtenir des insights précieux et prendre des décisions éclairées."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Expérience Utilisateur",
      description: "Conception d'interfaces intuitives et attrayantes pour maximiser l'engagement des utilisateurs."
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Stratégie Digitale",
      description: "Élaboration d'une feuille de route numérique alignée sur vos objectifs d'affaires."
    }
  ];

  const benefits = [
    "Amélioration de l'efficacité opérationnelle",
    "Augmentation de la satisfaction client",
    "Réduction des coûts à long terme",
    "Accélération de la croissance",
    "Adaptation rapide aux changements du marché",
    "Avantage concurrentiel durable"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">Transformation</span> Digitale
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Accompagnement personnalisé pour réussir votre transition numérique et rester compétitif dans un monde en constante évolution.
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
                  src="/images/digital-service.jpg"
                  alt="Transformation Digitale"
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
            Nos Solutions de Transformation Digitale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-400 text-white mr-4">
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
                Pourquoi Entreprendre une Transformation Digitale
              </h2>
              <p className="text-gray-600 mb-8">
                La transformation digitale n'est pas seulement une tendance, c'est une nécessité pour les entreprises qui souhaitent prospérer dans l'économie numérique d'aujourd'hui.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Prêt à Transformer Votre Entreprise?</h3>
                <p className="text-gray-600 mb-6">
                  Nos experts en transformation digitale vous accompagneront à chaque étape de votre parcours numérique, de l'élaboration de la stratégie à la mise en œuvre des solutions.
                </p>
                <Link href="/contact" className="inline-block bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium py-3 px-6 rounded-lg hover:from-green-700 hover:to-teal-600 transition-all">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Commencez Votre Transformation Digitale Aujourd'hui
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ne laissez pas votre entreprise prendre du retard. Contactez-nous dès maintenant pour découvrir comment notre expertise en transformation digitale peut vous aider à atteindre vos objectifs.
          </p>
          <Link href="/contact" className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Demander une Consultation
          </Link>
        </div>
      </section>
    </div>
  );
} 