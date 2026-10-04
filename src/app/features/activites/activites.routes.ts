import type { Routes } from '@angular/router';

import { PATHS } from '@app/core/navigation/paths';

import { SIMULATEUR_COUT_ATELIERS, SIMULATEUR_FINANCEMENT_EQUIPE } from './data/simulateurs.data';

const loadComingSoon = () => import('./pages/coming-soon/coming-soon.page').then((m) => m.ComingSoonPage);

export const ACTIVITES_ROUTES: Routes = [
  {
    path: PATHS.camps,
    title: 'Camps & Ateliers de Robotique | ÉducHTech & Les Dragons',
    data: {
      seo: {
        description:
          'Découvrez nos camps et ateliers de robotique pour le primaire et secondaire : 3D, construction, programmation et mini-compétition, animés par les jeunes des Dragons.',
      },
    },
    loadComponent: () =>
      import('./pages/camps-et-ateliers/camps-et-ateliers.page').then((m) => m.CampsEtAteliersPage),
  },
  {
    path: PATHS.parEtPour,
    title: 'Par et Pour les Jeunes',
    data: {
      seo: {
        description:
          'Page temporaire présentant le projet Par et Pour les Jeunes d’ÉducHTech et un carrousel de publications Instagram pendant la construction du site du projet 2026.',
      },
    },
    loadComponent: () => import('./pages/par-et-pour/par-et-pour.page').then((m) => m.ParEtPourPage),
  },
  {
    path: PATHS.simulateurCoutAteliers,
    title: 'Simulateur de coût des ateliers',
    data: {
      content: SIMULATEUR_COUT_ATELIERS,
      seo: {
        description:
          'Vous êtes un centre de loisirs ou une école ? Simulez bientôt le coût de recevoir des ateliers de robotique ÉducHTech.',
      },
    },
    loadComponent: loadComingSoon,
  },
  {
    path: PATHS.simulateurFinancementEquipe,
    title: 'Simulateur de financement d’équipe',
    data: {
      content: SIMULATEUR_FINANCEMENT_EQUIPE,
      seo: {
        description:
          'Vous êtes une équipe de robotique ? Simulez bientôt comment ÉducHTech peut contribuer à financer votre année de robotique.',
      },
    },
    loadComponent: loadComingSoon,
  },
];
