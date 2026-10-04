import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';

import { SeoService } from './seo.service';

describe('SeoService', () => {
  let seo: SeoService;
  let document: Document;

  beforeEach(() => {
    seo = TestBed.inject(SeoService);
    document = TestBed.inject(DOCUMENT);
  });

  it('met à jour le titre, la description et les balises Open Graph', () => {
    seo.update({ title: 'Membres | ÉducHTech', description: 'Description test', path: '/membres' });

    const meta = TestBed.inject(Meta);
    expect(TestBed.inject(Title).getTitle()).toBe('Membres | ÉducHTech');
    expect(meta.getTag('name="description"')?.content).toBe('Description test');
    expect(meta.getTag('property="og:title"')?.content).toBe('Membres | ÉducHTech');
    expect(meta.getTag('property="og:image"')?.content).toBe('https://www.educhtech.org/images/marque/og-image.jpg');
  });

  it('définit une seule URL canonique, sans barre finale', () => {
    seo.update({ title: 't', description: 'd', path: '/membres/' });
    expect(document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe(
      'https://www.educhtech.org/membres',
    );

    seo.update({ title: 't', description: 'd', path: '/' });
    expect(document.querySelectorAll('link[rel="canonical"]').length).toBe(1);
    expect(document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe('https://www.educhtech.org/');
  });
});
