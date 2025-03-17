# Guide d'intégration et de déploiement avec GitHub

Ce guide fournit des instructions détaillées sur la façon d'initialiser votre dépôt Git, de le connecter à GitHub, et de déployer votre site web sur diverses plateformes.

## Prérequis

- [Git](https://git-scm.com/downloads) installé sur votre machine
- Un compte [GitHub](https://github.com/)
- Votre projet Next.js configuré et fonctionnel localement

## Table des matières

1. [Configuration initiale de Git](#1-configuration-initiale-de-git)
2. [Initialisation du dépôt](#2-initialisation-du-dépôt)
3. [Connexion avec GitHub](#3-connexion-avec-github)
4. [Ajout et validation des fichiers](#4-ajout-et-validation-des-fichiers)
5. [Poussée vers GitHub](#5-poussée-vers-github)
6. [Déploiement sur différentes plateformes](#6-déploiement-sur-différentes-plateformes)
7. [Bonnes pratiques Git](#7-bonnes-pratiques-git)
8. [Résolution des problèmes courants](#8-résolution-des-problèmes-courants)

## 1. Configuration initiale de Git

Configurez votre identité Git pour que vos commits soient correctement attribués :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

Pour vérifier vos paramètres actuels :

```bash
git config --list
```

## 2. Initialisation du dépôt

Naviguez vers le répertoire de votre projet et initialisez un dépôt Git :

```bash
cd chemin/vers/votre/projet
git init
```

Créez un fichier `.gitignore` pour exclure les fichiers et dossiers qui ne devraient pas être suivis par Git :

```bash
# Dépendances
/node_modules
/.pnp
.pnp.js

# Build et production
/.next/
/out/
/build
/dist

# Fichiers d'environnement
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Fichiers de logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Autres
.DS_Store
*.pem
.vercel
.idea
.vscode
```

## 3. Connexion avec GitHub

### Création d'un nouveau dépôt sur GitHub

1. Connectez-vous à votre compte GitHub
2. Cliquez sur le bouton "+" en haut à droite et sélectionnez "New repository"
3. Donnez un nom à votre dépôt (par exemple, "hk-site")
4. Choisissez si vous voulez que le dépôt soit public ou privé
5. Ne cochez PAS "Initialize this repository with a README"
6. Cliquez sur "Create repository"

### Connexion de votre dépôt local au dépôt GitHub

Après avoir créé le dépôt, GitHub affichera des instructions. Suivez ces instructions pour connecter votre dépôt local :

```bash
git remote add origin https://github.com/votre-nom-utilisateur/hk-site.git
```

Vérifiez que la connexion a été établie :

```bash
git remote -v
```

## 4. Ajout et validation des fichiers

Ajoutez tous les fichiers à l'index Git :

```bash
git add .
```

Pour voir l'état actuel de votre index :

```bash
git status
```

Validez les changements avec un message de commit descriptif :

```bash
git commit -m "Initial commit"
```

## 5. Poussée vers GitHub

Poussez vos commits vers le dépôt distant :

```bash
# Si vous utilisez la branche main (par défaut depuis 2020)
git push -u origin main

# Si vous utilisez encore la branche master (ancienne convention)
git push -u origin master
```

L'option `-u` (ou `--set-upstream`) configure le suivi de la branche distante, ce qui vous permet d'utiliser simplement `git push` et `git pull` sans arguments à l'avenir.

## 6. Déploiement sur différentes plateformes

### Déploiement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com/) si vous n'en avez pas déjà un
2. Connectez votre compte GitHub à Vercel
3. Importez votre dépôt dans Vercel
4. Configurez les variables d'environnement si nécessaire
5. Déployez !

Pour les déploiements ultérieurs, vous pouvez utiliser la CLI Vercel :

```bash
# Installation de la CLI Vercel
npm install -g vercel

# Déploiement
vercel
```

### Déploiement sur Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com/) si vous n'en avez pas déjà un
2. Connectez votre compte GitHub à Netlify
3. Importez votre dépôt dans Netlify
4. Configurez les paramètres de build :
   - Commande de build : `npm run build`
   - Répertoire de publication : `.next` (ou `out` si vous utilisez l'export statique)
5. Configurez les variables d'environnement si nécessaire
6. Déployez !

Pour les déploiements ultérieurs, vous pouvez utiliser la CLI Netlify :

```bash
# Installation de la CLI Netlify
npm install -g netlify-cli

# Déploiement
netlify deploy --prod
```

## 7. Bonnes pratiques Git

### Utilisation des branches

Créez des branches séparées pour chaque fonctionnalité ou correction de bug :

```bash
# Créer une nouvelle branche
git checkout -b nom-de-la-branche

# Vérifier sur quelle branche vous êtes
git branch

# Changer de branche
git checkout nom-de-la-branche
```

### Fusion des branches

Une fois votre travail terminé sur une branche, fusionnez-la avec la branche principale :

```bash
# Revenir à la branche principale
git checkout main

# Fusionner votre branche de fonctionnalité
git merge nom-de-la-branche
```

### Messages de commit significatifs

Utilisez des messages de commit clairs et descriptifs qui expliquent pourquoi un changement a été fait, pas seulement ce qui a été changé.

Structure recommandée :

```
type: court résumé

Description détaillée si nécessaire.
```

Types courants :
- `feat` : nouvelle fonctionnalité
- `fix` : correction de bug
- `docs` : changements de documentation
- `style` : formatage, point-virgule manquant, etc.
- `refactor` : remaniement du code sans changement de fonctionnalité
- `test` : ajout ou modification de tests
- `chore` : mise à jour des tâches de build, configurations, etc.

Exemple :
```
feat: ajouter la fonctionnalité de mode sombre

Implémente un bouton de basculement dans l'en-tête et sauvegarde 
la préférence dans localStorage. Ajuste les couleurs pour le mode sombre.
```

## 8. Résolution des problèmes courants

### Conflits de fusion

Si vous rencontrez un conflit de fusion :

1. Ouvrez les fichiers marqués comme en conflit
2. Recherchez les marqueurs `<<<<<<<`, `=======` et `>>>>>>>` qui indiquent les sections en conflit
3. Modifiez le contenu pour résoudre le conflit
4. Supprimez les marqueurs de conflit
5. Ajoutez les fichiers résolus et validez

```bash
git add .
git commit -m "Résoudre les conflits de fusion"
```

### Récupération des modifications distantes

Pour récupérer les dernières modifications du dépôt distant :

```bash
git pull origin main
```

### Annulation des modifications

Pour annuler les modifications non validées dans un fichier :

```bash
git checkout -- nom-du-fichier
```

Pour annuler un commit (crée un nouveau commit qui inverse les changements) :

```bash
git revert HEAD
```

---

## Ressources supplémentaires

- [Documentation officielle de Git](https://git-scm.com/doc)
- [Documentation GitHub](https://docs.github.com/)
- [Guide interactif d'apprentissage de Git](https://learngitbranching.js.org/)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Netlify](https://docs.netlify.com/) 