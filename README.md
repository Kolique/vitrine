# AuditAccès — site vitrine

Site vitrine professionnel d'un auditeur indépendant en accessibilité numérique
(RGAA 4.1.2). Construit avec [Astro](https://astro.build) : 100 % statique,
aucun JavaScript envoyé au navigateur, conforme RGAA par conception.

## Tester le site en local

```bash
npm install     # une seule fois
npm run dev     # puis ouvrez http://localhost:4321
```

Pour vérifier la version finale telle qu'elle sera en ligne :

```bash
npm run build && npm run preview
```

## Personnaliser le site (placeholders à remplacer)

Presque tout se remplace dans **un seul fichier : `src/config.ts`**

| Placeholder | Où | Quoi mettre |
|---|---|---|
| `calendly` | `src/config.ts` | l'URL de votre événement Calendly « appel découverte 20 min » — elle alimente le module intégré de la page `/reserver/` et le lien de secours |
| `auditeur.nom` | `src/config.ts` | votre prénom et nom |
| `auditeur.region` | `src/config.ts` | votre région |
| `auditeur.email` | `src/config.ts` | votre e-mail professionnel |
| `auditeur.telephone` / `telephoneHref` | `src/config.ts` | votre téléphone (affiché / format `+33...`) |
| `legal.statut` | `src/config.ts` | votre statut juridique |
| `legal.siret` | `src/config.ts` | votre numéro SIRET |
| `legal.adresse` | `src/config.ts` | votre adresse professionnelle |
| `legal.tvaMention` | `src/config.ts` | votre situation TVA |
| `declarationDate` | `src/config.ts` | la date de publication de votre déclaration d'accessibilité |
| `url` | `src/config.ts` **et** `site` dans `astro.config.mjs` **et** `Sitemap` dans `public/robots.txt` | votre nom de domaine final |
| Votre photo | `src/pages/a-propos.astro` | déposez `portrait.jpg` dans `public/` et suivez le commentaire dans le fichier |

Après chaque modification, commitez et poussez : Vercel redéploie automatiquement.

## Déployer sur Vercel (pas à pas, niveau débutant)

1. **Créer un compte** : allez sur [vercel.com/signup](https://vercel.com/signup)
   et choisissez « Continue with GitHub » (le site est déjà sur GitHub, c'est le
   plus simple). Autorisez Vercel à accéder à votre compte GitHub.
2. **Importer le projet** : sur le tableau de bord Vercel, cliquez sur
   « Add New… → Project », trouvez le dépôt `vitrine` dans la liste et cliquez
   sur « Import ».
3. **Ne touchez à rien** : Vercel détecte automatiquement Astro (framework,
   commande de build, dossier de sortie). Cliquez sur « Deploy ».
4. **C'est en ligne** : après ~1 minute, votre site est accessible sur une
   adresse du type `vitrine-xxx.vercel.app`. Chaque `git push` sur la branche
   principale redéploiera le site automatiquement.

## Acheter un nom de domaine et le connecter

1. **Acheter** : chez un registrar comme [OVH](https://www.ovhcloud.com/fr/domains/),
   [Gandi](https://www.gandi.net/fr) ou directement chez Vercel
   (onglet « Domains »). Un `.fr` coûte environ 7-15 €/an.
2. **Déclarer le domaine dans Vercel** : dans votre projet Vercel →
   « Settings → Domains » → saisissez votre domaine (ex. `auditacces.fr`)
   → « Add ». Ajoutez aussi `www.auditacces.fr` ; Vercel proposera de rediriger
   l'un vers l'autre — acceptez.
3. **Configurer le DNS chez le registrar** : Vercel affiche exactement quoi
   faire. En général :
   - pour `auditacces.fr` : un enregistrement `A` pointant vers `76.76.21.21` ;
   - pour `www` : un enregistrement `CNAME` pointant vers `cname.vercel-dns.com`.
   Chez OVH/Gandi, cela se fait dans « Zone DNS » : modifiez ou créez ces deux
   enregistrements, enregistrez.
4. **Attendre la propagation** (de quelques minutes à quelques heures). Quand
   Vercel affiche une coche verte, le domaine est actif — avec HTTPS
   automatique, rien d'autre à faire.
5. **Dernière étape** : mettez le domaine final dans `astro.config.mjs`
   (`site:`), `src/config.ts` (`url:`) et `public/robots.txt`, puis poussez.

## Structure du projet

```
src/
  config.ts            ← TOUS les placeholders (nom, Calendly, SIRET…)
  styles/global.css    ← système de design (couleurs, typographie)
  layouts/             ← gabarits de page (Base, Article)
  components/          ← en-tête, pied de page, bandeau CTA
  pages/               ← une page = un fichier
    index.astro          Accueil
    reserver.astro       Réserver (Calendly intégré + alternatives)
    offres.astro         Offres (sur devis)
    methode.astro        Méthode en 6 étapes
    faq.astro            FAQ
    a-propos.astro       À propos
    mentions-legales.astro
    accessibilite.astro  Déclaration d'accessibilité
    conseils/            4 articles SEO + index
public/                ← favicon, robots.txt, image Open Graph
```

## Accessibilité

Ce site est conçu pour être totalement conforme RGAA 4.1.2 : HTML sémantique,
lien d'évitement, navigation clavier complète avec focus visible, contrastes
AA/AAA, aucun carrousel, aucun script côté client, respect de
`prefers-reduced-motion`. Avant de publier des modifications, gardez ces
principes — la déclaration d'accessibilité du site (`/accessibilite/`) vous
engage.
