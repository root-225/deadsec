# Documentation HK Consulting

Bienvenue dans la documentation officielle du site web HK Consulting. Cette documentation fournit des guides détaillés pour vous aider à gérer, maintenir et améliorer le site web.

## Guides disponibles

| Guide | Description |
|-------|-------------|
| [Guide GitHub](./GITHUB_GUIDE.md) | Instructions complètes pour la configuration Git, l'intégration GitHub et le déploiement du site. |
| [Guide des images](./IMAGE_GUIDE.md) | Instructions détaillées pour la gestion et l'optimisation des images du site. |
| [Guide des services](./SERVICES.md) | Informations sur les types de services et comment les personnaliser. |

## Arborescence du projet

```
hk-site/
├── docs/                   # Documentation
├── public/
│   ├── favicon.svg         # Favicon du site
│   └── images/             # Images du site
│       ├── general/        # Images générales (logo, favicon, etc.)
│       ├── services/       # Images des services
│       ├── team/           # Photos de l'équipe
│       ├── testimonials/   # Photos pour les témoignages
│       ├── blog/           # Images pour les articles de blog
│       └── projects/       # Images pour les projets
├── src/
│   ├── app/               # Structure des routes Next.js App Router
│   │   ├── page.tsx       # Page d'accueil
│   │   ├── about/         # Page À propos
│   │   ├── contact/       # Page Contact
│   │   └── services/      # Pages des services
│   │       ├── cloud/     # Service Cloud
│   │       ├── ai/        # Service IA
│   │       ├── security/  # Service Sécurité
│   │       └── digital/   # Service Transformation Digitale
│   ├── components/        # Composants React réutilisables
│   │   ├── Header.tsx     # En-tête du site
│   │   ├── Footer.tsx     # Pied de page du site
│   │   ├── Logo.tsx       # Composant du logo
│   │   ├── Contact.tsx    # Formulaire de contact
│   │   └── ...            # Autres composants
│   ├── lib/               # Utilitaires et fonctions
│   │   ├── colorUtils.ts  # Utilitaires pour les couleurs
│   │   └── ...            # Autres utilitaires
│   ├── scripts/           # Scripts utilitaires
│   │   ├── downloadImage.js     # Script de téléchargement d'images
│   │   └── prepare-images.js    # Script de traitement par lots d'images
│   └── styles/            # Styles et configuration Tailwind
├── tailwind.config.js     # Configuration Tailwind CSS
├── next.config.js         # Configuration Next.js
├── package.json           # Dépendances et scripts
└── README.md              # Documentation principale
```

## Scripts NPM utiles

Le projet inclut plusieurs scripts NPM pour faciliter le développement et le déploiement :

```bash
# Serveur de développement
npm run dev

# Construction pour la production
npm run build

# Démarrage du serveur de production
npm run start

# Linting du code
npm run lint

# Formatage du code avec Prettier
npm run format

# Analyse de la taille des bundles
npm run analyze

# Préparation des images (traitement par lots)
npm run prepare-images

# Export du site statique
npm run export

# Déploiement sur Vercel
npm run deploy:vercel

# Déploiement sur Netlify
npm run deploy:netlify
```

## Support technique

Si vous avez des questions ou rencontrez des problèmes, veuillez consulter d'abord cette documentation. Si vous ne trouvez pas de solution, contactez l'équipe de support technique via le [formulaire de contact](https://www.hk-consulting.fr/contact) ou envoyez un email à [support@hk-consulting.fr](mailto:support@hk-consulting.fr).

## Contribuer à la documentation

Pour améliorer cette documentation, veuillez soumettre vos suggestions ou corrections via des pull requests sur le dépôt GitHub. 