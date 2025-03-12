import React from 'react';
import Image from 'next/image';

const partners = [
  {
    name: 'Microsoft',
    logo: '/partners/microsoft.svg',
  },
  {
    name: 'Google',
    logo: '/partners/google.svg',
  },
  {
    name: 'Amazon Web Services',
    logo: '/partners/aws.svg',
  }
];

export default function Partners() {
  return (
    <section className="py-16 bg-[#020617]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Nos Partenaires
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-40 h-20"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}