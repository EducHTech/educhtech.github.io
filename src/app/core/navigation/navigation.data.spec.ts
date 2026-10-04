import { routes } from '@app/app.routes';
import type { NavItem } from '@app/shared/models/navigation.model';

import { FOOTER_COLUMNS, MAIN_NAVIGATION } from './navigation.data';
import { PATHS } from './paths';

const routePaths = new Set(routes.map((route) => `/${route.path}`));

describe('Navigation', () => {
  const navLinks: NavItem[] = MAIN_NAVIGATION.flatMap((item): readonly NavItem[] => item.children ?? [item]);
  const footerLinks = FOOTER_COLUMNS.flatMap((column) => column.links);

  it.each([...navLinks, ...footerLinks])('le lien « $label » mène à une route existante', ({ route }) => {
    expect(routePaths.has(route ?? '')).toBe(true);
  });

  it('chaque page du site (sauf 404) est accessible depuis le menu', () => {
    const menuRoutes = new Set(navLinks.map((item) => item.route));
    const pages = Object.values(PATHS).filter((path) => path !== PATHS.introuvable);
    for (const path of pages) {
      expect(menuRoutes.has(`/${path}`), `/${path} absent du menu`).toBe(true);
    }
  });
});
