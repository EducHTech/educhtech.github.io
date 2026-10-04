/**
 * Chemins des pages du site (sans « / » initial), utilisés par le routeur, les menus et les liens.
 * Les slugs reprennent ceux de l'ancien site (sans « .html ») pour conserver le référencement ;
 * scripts/postbuild.mjs génère une redirection depuis chaque ancienne URL en .html.
 */
export const PATHS = {
  accueil: '',
  membres: 'membres',
  studio: 'studio',
  app: 'educhtech-app',
  camps: 'camps-et-ateliers',
  parEtPour: 'par-et-pour',
  simulateurCoutAteliers: 'simulateur-cout-ateliers',
  simulateurFinancementEquipe: 'simulateur-financement-equipe',
  dragons: 'les-dragons',
  miniFtc: 'le-mini-ftc-des-dragons',
  tedx: 'plongez-au-coeur-de-la-robotique-educative-avec-educhtech-et-les-dragons',
  eureka: 'eureka-2025',
  tempsDesFetes: 'le-temps-des-fetes-approche',
  partenaires: 'partenaire',
  contact: 'contact',
  introuvable: '404',
} as const;

/** Lien absolu pour routerLink, ex. link('membres') -> '/membres'. */
export const link = (path: (typeof PATHS)[keyof typeof PATHS]): string => `/${path}`;
