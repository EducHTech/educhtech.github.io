import type { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app.routes';

/** Vérifie que chaque page se charge et affiche son titre principal (H1). */
describe('Pages du site', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideIonicAngular({ mode: 'md' })],
    });
  });

  const pageRoutes = routes.filter((route) => route.loadComponent && route.path !== '**');

  it.each(pageRoutes.map((route) => [route.path || '(accueil)', route] as const))(
    '%s : la page s’affiche avec un H1',
    async (_label, route) => {
      const component = (await route.loadComponent?.()) as Type<unknown>;
      const fixture = TestBed.createComponent(component);
      if (route.data?.['content']) {
        fixture.componentRef.setInput('content', route.data['content']);
      }
      fixture.detectChanges();
      await fixture.whenStable();

      const h1 = (fixture.nativeElement as HTMLElement).querySelector('h1');
      expect(h1?.textContent?.trim().length).toBeGreaterThan(0);
    },
  );

  it('chaque ancienne URL .html redirige vers une page existante', () => {
    const pagePaths = new Set(pageRoutes.map((route) => `/${route.path}`));
    const legacy = routes.filter((route) => route.path?.endsWith('.html'));
    expect(legacy.length).toBe(pageRoutes.length - 1); // toutes sauf /404
    for (const route of legacy) {
      expect(pagePaths.has(route.redirectTo as string), `${route.path} -> ${route.redirectTo}`).toBe(true);
    }
  });

  it('chaque page déclare un titre et une description SEO', () => {
    for (const route of pageRoutes) {
      expect(route.title, `titre manquant : ${route.path}`).toBeTruthy();
      expect(route.data?.['seo']?.description, `description manquante : ${route.path}`).toBeTruthy();
    }
  });
});
