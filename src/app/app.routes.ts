import type { Routes } from '@angular/router';

import { LEGACY_HTML_ROUTES } from '@app/core/navigation/legacy.routes';
import { ACCUEIL_ROUTES } from '@app/features/accueil/accueil.routes';
import { ACTIVITES_ROUTES } from '@app/features/activites/activites.routes';
import { DRAGONS_ROUTES } from '@app/features/dragons/dragons.routes';
import { NOT_FOUND_ROUTES } from '@app/features/not-found/not-found.routes';
import { ORGANISATION_ROUTES } from '@app/features/organisation/organisation.routes';
import { PLATEFORMES_ROUTES } from '@app/features/plateformes/plateformes.routes';

/**
 * Chaque fonctionnalité déclare ses routes (titre, SEO, page chargée à la demande)
 * dans son propre fichier `*.routes.ts`. NOT_FOUND_ROUTES (route « ** ») doit rester en dernier.
 */
export const routes: Routes = [
  ...ACCUEIL_ROUTES,
  ...ORGANISATION_ROUTES,
  ...PLATEFORMES_ROUTES,
  ...ACTIVITES_ROUTES,
  ...DRAGONS_ROUTES,
  ...LEGACY_HTML_ROUTES,
  ...NOT_FOUND_ROUTES,
];
