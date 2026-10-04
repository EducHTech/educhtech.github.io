import type { Routes } from '@angular/router';

import { PATHS } from '@app/core/navigation/paths';

const loadNotFound = () => import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage);
const notFoundData = { seo: { description: 'Cette page est introuvable.' } };

/**
 * `/404` est pré-rendue puis copiée en 404.html par scripts/postbuild.mjs :
 * GitHub Pages sert ce fichier pour toute URL inconnue.
 */
export const NOT_FOUND_ROUTES: Routes = [
  { path: PATHS.introuvable, title: 'Page introuvable', data: notFoundData, loadComponent: loadNotFound },
  { path: '**', title: 'Page introuvable', data: notFoundData, loadComponent: loadNotFound },
];
