import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'À Propos | deadsec',
  description: 'Découvrez notre histoire, notre mission et nos valeurs.',
};

export default function AboutPage() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 matrix-bg opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 gradient-text mb-4">À Propos de Nous</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Nous sommes une équipe de passionnés de technologie dédiée à aider les entreprises à prospérer à l'ère numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Notre Histoire</h2>
            <p className="text-slate-400 mb-4">
              Fondée en 2020, deadsec a été à l'avant-garde de l'innovation technologique. Nous avons commencé avec une mission simple : rendre les technologies de pointe accessibles aux entreprises de toutes tailles.
            </p>
            <p className="text-slate-400">
              Aujourd'hui, nous sommes fiers de servir des clients dans divers secteurs, les aidant à naviguer dans le paysage complexe de la technologie moderne et de la transformation numérique.
            </p>
          </div>
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-20"></div>
            {/* Add your about image here */}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-white text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-slate-400">
                Nous repoussons constamment les limites du possible avec la technologie.
              </p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-slate-400">
                Nous nous efforçons d'atteindre l'excellence dans tout ce que nous faisons.
              </p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Intégrité</h3>
              <p className="text-slate-400">
                Nous maintenons les plus hauts standards d'intégrité et de transparence dans notre travail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}