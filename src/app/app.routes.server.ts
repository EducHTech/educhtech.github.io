import type { ServerRoute } from '@angular/ssr';
import { RenderMode } from '@angular/ssr';

import { LEGACY_HTML_ROUTES } from '@app/core/navigation/legacy.routes';

export const serverRoutes: ServerRoute[] = [
  // Anciennes URL en .html : pas de pré-rendu, scripts/postbuild.mjs crée ces fichiers.
  ...LEGACY_HTML_ROUTES.map((route): ServerRoute => ({ path: route.path ?? '', renderMode: RenderMode.Client })),
  // Toutes les autres pages sont pré-rendues en HTML statique au build (hébergement GitHub Pages).
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
