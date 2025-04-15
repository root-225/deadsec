# Guide des Services deadsec

Ce document présente les différents types de services offerts par deadsec et explique comment personnaliser ou ajouter de nouveaux services au site web.

## Services Actuels

Le site web propose actuellement quatre catégories principales de services :

### 1. Services Cloud

**Page :** `/services/cloud`

Services d'infrastructure cloud, d'hébergement et de solutions SaaS. Cette catégorie inclut :
- Déploiement d'infrastructure cloud
- Migration vers le cloud
- Gestion des ressources cloud
- Solutions SaaS personnalisées

### 2. Services de Cybersécurité

**Page :** `/services/security`

Services de protection des données et de sécurisation des systèmes d'information. Cette catégorie inclut :
- Audit de sécurité
- Protection contre les cyberattaques
- Gestion des identités et des accès
- Surveillance continue et détection des menaces

### 3. Services d'Intelligence Artificielle

**Page :** `/services/ai`

Solutions basées sur l'intelligence artificielle et l'apprentissage automatique. Cette catégorie inclut :
- Machine Learning
- Analyses prédictives
- Chatbots intelligents
- Traitement des données massives

### 4. Services de Transformation Digitale

**Page :** `/services/digital`

Accompagnement dans la transition numérique des entreprises. Cette catégorie inclut :
- Développement web et mobile
- Analyse des données
- Expérience utilisateur
- Stratégie digitale

## Structure des Pages de Services

Chaque page de service suit une structure similaire comprenant :

1. **Section Hero** - Introduction au service avec titre, sous-titre et image/gradient
2. **Section Fonctionnalités** - Présentation des principales fonctionnalités du service
3. **Section Avantages** - Explication des bénéfices pour les clients
4. **Section CTA** - Appel à l'action pour contacter l'entreprise

## Personnalisation des Services Existants

### Modification du Contenu

Pour modifier le contenu d'un service existant, éditez le fichier correspondant dans `src/app/services/[service]/page.tsx`. Par exemple, pour modifier le service Cloud, éditez `src/app/services/cloud/page.tsx`.

Vous pouvez modifier :
- Le texte (titre, sous-titre, descriptions)
- Les fonctionnalités présentées
- Les avantages listés
- Les icônes (importées depuis React Icons)

### Modification du Style

Chaque service possède un schéma de couleurs spécifique défini dans `src/lib/colorUtils.ts`. Pour modifier l'apparence visuelle d'un service :

1. Ouvrez le fichier `src/lib/colorUtils.ts`
2. Trouvez l'objet `serviceColors` correspondant au service que vous souhaitez modifier
3. Ajustez les propriétés `primary`, `secondary`, `gradient` et `bgGradient` selon vos besoins

Exemple :
```typescript
export const serviceColors: Record<ServiceType, ServiceColorScheme> = {
  cloud: {
    primary: colors.blue[500],
    secondary: colors.cyan[400],
    gradient: 'from-blue-500 to-cyan-400',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
  },
  // Autres services...
};
```

## Ajout d'un Nouveau Service

Pour ajouter un nouveau type de service au site web, suivez ces étapes :

### 1. Création de la Page du Service

1. Créez un nouveau dossier pour votre service dans `src/app/services/[nouveau-service]/`
2. Créez un fichier `page.tsx` à l'intérieur de ce dossier
3. Utilisez la structure suivante comme modèle :

```tsx
import Image from 'next/image';
import { Metadata } from 'next';
import { FiCheck } from 'react-icons/fi';
// Importez les icônes spécifiques à votre service

export const metadata: Metadata = {
  title: 'Nom du Service | deadsec',
  description: 'Description concise du service',
};

export default function NouveauServicePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-[COLOR1] to-[COLOR2] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Titre Principal
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Sous-titre explicatif du service
              </p>
              <a href="/contact" className="btn-primary">
                Nous Contacter
              </a>
            </div>
            <div className="md:w-1/2">
              {/* Image ou placeholder pour le service */}
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Nos Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fonctionnalité 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              {/* Icône */}
              <h3 className="text-xl font-semibold mt-4 dark:text-white">
                Fonctionnalité 1
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Description de la fonctionnalité
              </p>
            </div>

            {/* Répétez pour les autres fonctionnalités */}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Pourquoi Choisir Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Avantage 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <FiCheck className="text-green-500 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold dark:text-white">
                  Avantage 1
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Description de l'avantage
                </p>
              </div>
            </div>

            {/* Répétez pour les autres avantages */}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-[COLOR1] to-[COLOR2] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Transformer Votre Entreprise?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour découvrir comment nos solutions peuvent répondre à vos besoins.
          </p>
          <a href="/contact" className="btn-white">
            Demander une Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
```

### 2. Ajout du Service au Système de Couleurs

1. Ouvrez `src/lib/colorUtils.ts`
2. Ajoutez votre nouveau service au type `ServiceType` :
```typescript
export type ServiceType = 'cloud' | 'security' | 'ai' | 'digital' | 'nouveau-service';
```
3. Ajoutez la configuration de couleurs pour votre service :
```typescript
export const serviceColors: Record<ServiceType, ServiceColorScheme> = {
  // Services existants...
  'nouveau-service': {
    primary: colors.indigo[500],
    secondary: colors.pink[400],
    gradient: 'from-indigo-500 to-pink-400',
    bgGradient: 'from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20',
  },
};
```

### 3. Ajout du Service au Composant ServicePagePlaceholder

1. Ouvrez `src/components/ServicePagePlaceholder.tsx`
2. Ajoutez une configuration pour votre nouveau service dans l'objet `gradientConfigs`
3. Ajoutez l'icône et les couleurs appropriées

### 4. Mise à Jour de la Navigation

1. Ajoutez votre service au menu de navigation dans `src/components/Header.tsx`
2. Ajoutez votre service à la liste des services dans le pied de page (`src/components/Footer.tsx`)

## Bonnes Pratiques

### Cohérence Visuelle

- Maintenez une cohérence visuelle entre les différentes pages de services
- Utilisez des icônes de style similaire pour toutes les fonctionnalités
- Respectez la palette de couleurs définie pour chaque service

### Contenu

- Gardez les descriptions concises et axées sur les bénéfices pour les clients
- Utilisez un langage simple et évitez le jargon technique excessif
- Mettez en avant les aspects différenciateurs de chaque service

### Responsive Design

- Assurez-vous que chaque page de service s'affiche correctement sur tous les appareils
- Testez l'affichage sur mobile, tablette et desktop
- Optimisez les images pour les différentes tailles d'écran

## Ressources Utiles

- [React Icons](https://react-icons.github.io/react-icons/) pour les icônes de fonctionnalités
- [Tailwind CSS](https://tailwindcss.com/docs) pour les classes CSS utilisées
- [Next.js Documentation](https://nextjs.org/docs) pour l'architecture des pages

## Exemple de Personnalisation Avancée

Pour une personnalisation plus avancée, vous pouvez créer des composants spécifiques à chaque service. Par exemple, pour un service d'IA avec une démonstration interactive :

1. Créez un composant `AIDemo.tsx` dans `src/components/services/`
2. Intégrez ce composant dans la page du service AI
3. Développez les fonctionnalités interactives spécifiques à ce service

Cela permet d'ajouter des fonctionnalités uniques à certains services tout en maintenant une structure cohérente pour l'ensemble du site.