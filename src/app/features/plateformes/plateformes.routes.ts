import type { Routes } from '@angular/router';

import { PATHS } from '@app/core/navigation/paths';

export const PLATEFORMES_ROUTES: Routes = [
  {
    path: PATHS.studio,
    title: 'ÉducHTech Studio | Programmer un robot de compétition avec des blocs',
    data: {
      seo: {
        description:
          'ÉducHTech Studio réunit dans une seule fenêtre la programmation par blocs, l’envoi au robot et le pilotage. Trois niveaux, de 6 à 17 ans, avec simulation intégrée.',
      },
    },
    loadComponent: () => import('./pages/studio/studio.page').then((m) => m.StudioPage),
  },
  {
    path: PATHS.app,
    title: 'ÉducHTech App | Gestionnaire d’équipe pour la robotique scolaire',
    data: {
      seo: {
        description:
          'ÉducHTech App aide les équipes de robotique mentorées à planifier l’année, organiser les séances, apprendre ensemble et suivre les heures des élèves et des mentors.',
      },
    },
    loadComponent: () => import('./pages/educhtech-app/educhtech-app.page').then((m) => m.EduchtechAppPage),
  },
];
