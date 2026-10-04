import type { Routes } from '@angular/router';

import { PATHS } from './paths';

/** Pages de l'ancien site statique, accessibles en « /<page>.html ». */
const LEGACY_PAGES = Object.values(PATHS).filter((path) => path !== PATHS.introuvable);

/**
 * Anciennes URL (ex. /membres.html) redirigées vers les nouvelles (/membres).
 * Sur GitHub Pages, scripts/postbuild.mjs copie chaque page pré-rendue en <page>.html :
 * le contenu s'affiche tout de suite, puis le routeur corrige l'URL sans recharger.
 */
export const LEGACY_HTML_ROUTES: Routes = LEGACY_PAGES.map((path) => ({
  path: `${path || 'index'}.html`,
  redirectTo: `/${path}`,
  pathMatch: 'full' as const,
}));
