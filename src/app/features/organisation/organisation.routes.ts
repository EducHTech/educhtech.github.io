import type { Routes } from '@angular/router';

import { PATHS } from '@app/core/navigation/paths';

export const ORGANISATION_ROUTES: Routes = [
  {
    path: PATHS.membres,
    title: 'Membres & Gouvernance',
    data: {
      seo: {
        description:
          'Découvrez les membres fondateurs, le conseil d’administration et les mentors d’ÉducHTech, organisme de robotique éducative et d’entrepreneuriat social.',
      },
    },
    loadComponent: () => import('./pages/membres/membres.page').then((m) => m.MembresPage),
  },
  {
    path: PATHS.partenaires,
    title: 'Partenaires',
    data: {
      seo: {
        description:
          'Ils nous font confiance : écoles, partenaires, organismes et institutions qui soutiennent l’impact d’ÉducHTech.',
      },
    },
    loadComponent: () => import('./pages/partenaires/partenaires.page').then((m) => m.PartenairesPage),
  },
  {
    path: PATHS.contact,
    title: 'Contact',
    data: {
      seo: {
        description:
          'Contactez ÉducHTech pour réserver des camps, ateliers ou vous renseigner sur la plateforme ÉducHTech Studio.',
      },
    },
    loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
  },
];
