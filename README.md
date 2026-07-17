# Diayma Seller

Landing page + fallback web pour l'app mobile **Diayma Vendeuse** (Flutter).

**Rôle :** ce domaine est la **cible du magic link SMS d'activation** envoyé par l'API à la
vendeuse. Configuré comme Universal Link iOS / App Link Android, il ouvre directement
l'app Flutter si installée ; sinon, il affiche cette page de fallback ("Télécharge l'app").

Se réfère à [`diayma-api`](https://github.com/mm2002-pn/diayma-api) (env `SELLER_APP_URL`).

---

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS (mêmes tokens que le reste de l'écosystème Diayma)
- react-router-dom
- lucide-react

## Démarrage local

```bash
npm install
npm run dev
```

Accès : http://localhost:5177

## Pages

| Route | Description |
|---|---|
| `/` | Landing page marketing — présentation de l'app, télécharger Play Store / App Store |
| `/activate?token=...` | Fallback quand le magic link est cliqué sans app installée (guide vers stores) |

## Deep linking (Universal Links / App Links)

Les fichiers de configuration sont dans `public/.well-known/` :

- `apple-app-site-association` (iOS) — à mettre à jour avec le `TEAM_ID.bundle-id` fournis par le dev Flutter
- `assetlinks.json` (Android) — à mettre à jour avec le `package_name` et `sha256_cert_fingerprints`

Le `netlify.toml` sert ces fichiers avec `Content-Type: application/json`
(obligatoire pour Apple, sinon iOS ne vérifie pas l'association).

## Déploiement Netlify

Le repo est prêt pour Netlify :
1. `netlify.toml` fournit la config build + SPA redirect + headers `.well-known/`
2. Push sur GitHub, connecte le repo dans Netlify, ça build automatiquement

Une fois déployé, Netlify fournit un domaine `diayma-seller.netlify.app` — à mettre
dans l'env `SELLER_APP_URL` côté API Diayma (Railway).
