/**
 * ============================================================
 *  FICHIER DE CONFIGURATION — C'EST ICI QUE TOUT SE PERSONNALISE
 * ============================================================
 *  Remplacez chaque valeur marquée « À REMPLACER » par vos
 *  informations réelles. Tout le site se met à jour automatiquement.
 *  (Pensez aussi à l'URL du site dans astro.config.mjs)
 */

export const SITE = {
  /** Nom commercial du site */
  name: "AuditAccès",

  /** À REMPLACER — votre nom de domaine final (aussi dans astro.config.mjs) */
  url: "https://www.auditacces.fr",

  /** À REMPLACER — votre lien Calendly (événement « appel découverte 20 min ») */
  calendly: "https://calendly.com/VOTRE-COMPTE/appel-decouverte-20min",

  /** À REMPLACER — vos coordonnées */
  auditeur: {
    nom: "Prénom NOM", // À REMPLACER
    region: "Votre région (ex. : Auvergne-Rhône-Alpes)", // À REMPLACER
    email: "contact@auditacces.fr", // À REMPLACER
    telephone: "06 00 00 00 00", // À REMPLACER
    telephoneHref: "+33600000000", // À REMPLACER (format international, sans espaces)
  },

  /** À REMPLACER — informations légales (mentions légales) */
  legal: {
    statut: "Entrepreneur individuel (micro-entreprise)", // À REMPLACER si autre statut
    siret: "000 000 000 00000", // À REMPLACER
    adresse: "Adresse professionnelle, Code postal Ville", // À REMPLACER
    tvaMention: "TVA non applicable, article 293 B du CGI", // À REMPLACER si assujetti
  },

  /** À REMPLACER — date de publication de la déclaration d'accessibilité */
  declarationDate: "28 juillet 2026",
} as const;

/** Libellé du bouton de conversion — utilisé partout */
export const CTA_LABEL = "Réserver 20 minutes";
