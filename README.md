# Maison du Temps — Site Web de Luxe

Site web haute-gamme pour Maison du Temps, institut de beauté & bien-être à Genève.

## 🎯 Stack Technique

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS v3 + composants shadcn/ui
- **Animations**: Framer Motion
- **i18n**: next-intl (FR/EN)
- **SEO**: next-seo, sitemap dynamique
- **Analytics**: @vercel/analytics
- **Icônes**: lucide-react
- **Typographies**: Fraunces (titres) + Inter (corps de texte)

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5000`.

### Production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── soins/             # Pages des soins
│   ├── formations/        # Page formations
│   ├── maison/            # Page à propos
│   ├── marques/           # Page marques partenaires
│   ├── tarifs/            # Page tarifs
│   ├── reservation/       # Page réservation
│   ├── contact/           # Page contact
│   ├── presse/            # Page presse
│   ├── legal/             # Pages légales
│   └── cgv/               # CGV
├── components/
│   ├── ui/                # Composants shadcn/ui
│   ├── layout/            # Header, Footer
│   └── sections/          # Hero, ServiceCard, etc.
├── data/                  # Données JSON
│   ├── services.json      # Catalogue des soins
│   ├── testimonials.json  # Témoignages
│   ├── brands.json        # Marques partenaires
│   └── formations.json    # Offre de formation
├── messages/              # Traductions i18n
│   ├── fr.json           # Français
│   └── en.json           # Anglais
└── public/                # Assets statiques
```

## ✏️ Éditer le Contenu

### Modifier les Soins

Éditez `data/services.json` :

```json
{
  "slug": "identifiant-unique",
  "title": "Nom du Soin",
  "category": "Soins du Visage",
  "durations": [60, 90],
  "priceFrom": 150,
  "summary": "Description courte",
  "description": "Description complète",
  "benefits": ["Bénéfice 1", "Bénéfice 2"],
  "image": "/images/services/mon-soin.jpg"
}
```

### Modifier les Témoignages

Éditez `data/testimonials.json` :

```json
{
  "id": "unique-id",
  "name": "Nom Client",
  "location": "Ville",
  "rating": 5,
  "text": "Témoignage complet",
  "service": "Nom du soin",
  "date": "2024-10"
}
```

### Modifier les Formations

Éditez `data/formations.json` :

```json
{
  "id": "formation-id",
  "title": "Titre de la Formation",
  "duration": "3 jours",
  "level": "Professionnel",
  "priceFrom": 1800,
  "summary": "Résumé",
  "description": "Description complète",
  "modules": ["Module 1", "Module 2"],
  "nextDates": ["2025-02-10"],
  "certification": true
}
```

### Modifier les Traductions

Éditez `messages/fr.json` ou `messages/en.json` pour personnaliser les textes du site.

## 🎨 Personnalisation du Design

### Couleurs

Les couleurs du thème sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  palace: {
    ivory: '#FBF8F3',
    anthracite: '#222222',
    'blue-deep': '#0B1A2A',
    'green-pine': '#0E2E2B',
  },
}
```

### Typographies

Les polices sont configurées dans `app/layout.tsx` avec Google Fonts.

## 📦 Déploiement sur Vercel

### 1. Connecter votre Repository GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <votre-repo-github>
git push -u origin main
```

### 2. Importer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Import Project"
3. Sélectionnez votre repository GitHub
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"

### 3. Variables d'Environnement (optionnel)

Si vous ajoutez des intégrations tierces (formulaires, analytics, etc.), configurez les variables d'environnement dans les paramètres Vercel.

### 4. Domaine Personnalisé

Dans les paramètres du projet Vercel :
1. Allez dans "Domains"
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions pour configurer les DNS

## 🔍 SEO

### Sitemap

Le sitemap est généré automatiquement à `/sitemap.xml` via `app/sitemap.ts`.

### Robots.txt

Le fichier `public/robots.txt` est déjà configuré.

### Meta Tags

Chaque page a ses propres meta tags optimisés pour le SEO. Pour les modifier, éditez le `metadata` dans chaque `page.tsx`.

## ♿ Accessibilité

Le site respecte les standards WCAG 2.2 AA :
- Navigation au clavier complète
- Labels ARIA appropriés
- Contrastes de couleurs validés
- Focus visibles
- Support de `prefers-reduced-motion`

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints Tailwind :
- Mobile : < 768px
- Tablette : 768px - 1024px
- Desktop : > 1024px

## 🛠️ Scripts Utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer la version de production localement
npm start

# Linting
npm run lint
```

## 📧 Support

Pour toute question concernant le site web :
- Email : contact@maisondutemps.ch
- Téléphone : +41 22 XXX XX XX

## 📄 Licence

© 2025 Maison du Temps. Tous droits réservés.
