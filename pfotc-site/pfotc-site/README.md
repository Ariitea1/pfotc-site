
# PFOTC – Site officiel (Version Tech Moderne sombre)

**Stack** : Next.js 14 (App Router) + Tailwind CSS

## Développement
```bash
npm install
npm run dev
```
Le site est accessible sur http://localhost:3000

## Build & Production
```bash
npm run build
npm start
```

## Déploiement (Vercel conseillé)
- Importer ce repo dans Vercel
- Framework détecté automatiquement (Next.js)
- Variables d'env : aucune requise pour cette version statique

## Personnalisation
- Couleurs et halos : `app/globals.css`
- Liens footer (mail, domaine, LinkedIn) : `components/Footer.tsx`
- Contenus pages : dans `app/`

© PFOTC
