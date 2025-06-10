import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaLaptopCode, FaKeyboard, FaBrain } from 'react-icons/fa'; // Import icons
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Nos Formations | deadsec',
  description: 'Découvrez nos formations en cybersécurité, bureautique et intelligence artificielle.',
};

const formations = [
  {
    title: 'Formation Cybersécurité',
    description: 'Protégez vos systèmes et données contre les menaces numériques.',
    href: '/formations/cybersecurite',
    icon: <FaLaptopCode className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" /> // Add icon
  },
  {
    title: 'Formation Bureautique',
    description: 'Optimisez votre productivité avec les logiciels de bureautique.',
    href: '/formations/bureautique',
    icon: <FaKeyboard className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" /> // Add icon
  },
  {
    title: 'Formation Intelligence Artificielle',
    description: 'Maîtrisez les technologies IA et développez des solutions intelligentes.',
    href: '/formations/intelligence-artificielle',
    icon: <FaBrain className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" /> // Add icon
  },
];

export default function FormationsLandingPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16"> {/* Increased bottom margin */}
       <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Nos Formations</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Développez vos compétences avec nos programmes spécialisés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
        {formations.map((formation) => (
          <Link key={formation.title} href={formation.href} passHref>
            {/* Removed empty lines */}
           <div className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center cursor-pointer border border-transparent hover:border-blue-500 dark:hover:border-blue-400"> {/* Centered text, increased padding, added border on hover */}
             {/* Display icon */}
             <div className="flex justify-center mb-4">
                {formation.icon}
             </div>
             <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{formation.title}</h2>
             <p className="text-gray-600 dark:text-gray-400 mb-6"> {/* Increased bottom margin */}
                {formation.description}
              </p>

             <div className="mt-auto flex items-center justify-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline"> {/* Centered link, pushed to bottom */}
               <span>En savoir plus</span>
               <svg className="ml-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"> {/* Adjusted margin */}
                 <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
               </svg>
             </div>
            </div>
          </Link>
        ))}
      </div>

      <Contact />
    </div>
  );
}