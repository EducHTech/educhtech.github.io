import type { Routes } from '@angular/router';

import { PATHS } from '@app/core/navigation/paths';

export const ACCUEIL_ROUTES: Routes = [
  {
    path: PATHS.accueil,
    pathMatch: 'full',
    title: 'ÉducHTech | Un OBNL d’entrepreneuriat social en robotique',
    data: {
      seo: {
        description:
          'ÉducHTech développe un modèle d’entrepreneuriat social où les jeunes transmettent la robotique, génèrent des revenus et contribuent à la pérennité de leur écosystème.',
      },
    },
    loadComponent: () => import('./pages/accueil/accueil.page').then((m) => m.AccueilPage),
  },
];
