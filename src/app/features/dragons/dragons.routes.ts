import type { Routes } from '@angular/router';

import { PATHS } from '@app/core/navigation/paths';

import { EUREKA, MINI_FTC, TEMPS_DES_FETES } from './data/evenements.data';

const loadEventPage = () => import('./pages/event/event.page').then((m) => m.EventPage);

export const DRAGONS_ROUTES: Routes = [
  {
    path: PATHS.dragons,
    title: 'Les Dragons',
    data: {
      seo: {
        description:
          'Découvrez la saison 2025-2026 de l’équipe de robotique Les Dragons de l’école secondaire Jeanne-Mance.',
      },
    },
    loadComponent: () => import('./pages/les-dragons/les-dragons.page').then((m) => m.LesDragonsPage),
  },
  {
    path: PATHS.miniFtc,
    title: 'Le Mini-FTC des Dragons',
    data: {
      content: MINI_FTC,
      seo: {
        description:
          'Découvrez le Mini-FTC, une forme accessible et collaborative de robotique éducative pensée par Les Dragons.',
      },
    },
    loadComponent: loadEventPage,
  },
  {
    path: PATHS.tedx,
    title: 'TEDx Ville-Marie ED 2025',
    data: {
      seo: {
        description:
          'Retour sur la présence de Les Dragons dans la robotique éducative et le partage de leur vision auprès du public.',
      },
    },
    loadComponent: () => import('./pages/tedx/tedx.page').then((m) => m.TedxPage),
  },
  {
    path: PATHS.eureka,
    title: 'Festival Eurêka! de Montréal',
    data: {
      content: EUREKA,
      seo: {
        description:
          'ÉducHTech était exposant au Festival Eurêka! de Montréal pour faire découvrir la robotique éducative, les démonstrations et les ateliers portés par les jeunes.',
      },
    },
    loadComponent: loadEventPage,
  },
  {
    path: PATHS.tempsDesFetes,
    title: 'Le temps des fêtes approche',
    data: {
      content: TEMPS_DES_FETES,
      seo: {
        description: 'Un moment de partage, de célébration et de transmission autour de la robotique éducative.',
      },
    },
    loadComponent: loadEventPage,
  },
];
