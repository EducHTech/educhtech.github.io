import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { imageSrc } from '@app/shared/images/image.utils';
import type { PageSeo } from '@app/shared/models/seo.model';

export const SITE_URL = 'https://www.educhtech.org';
export const SITE_NAME = 'ÉducHTech';
const DEFAULT_IMAGE = 'marque/og-image.jpg';

export interface PageMeta extends PageSeo {
  title: string;
  /** Chemin de la page, ex. « /membres ». */
  path: string;
}

/** Met à jour <title>, la description, l'URL canonique et les balises Open Graph / Twitter. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(page: PageMeta): void {
    const url = `${SITE_URL}${page.path === '/' ? '/' : page.path.replace(/\/$/, '')}`;
    const image = `${SITE_URL}${imageSrc(page.image ?? DEFAULT_IMAGE)}`;

    this.title.setTitle(page.title);
    this.setCanonical(url);

    const tags: Record<string, string> = {
      'name=description': page.description,
      'property=og:title': page.title,
      'property=og:description': page.description,
      'property=og:url': url,
      'property=og:image': image,
      'name=twitter:title': page.title,
      'name=twitter:description': page.description,
      'name=twitter:image': image,
    };
    for (const [selector, content] of Object.entries(tags)) {
      const [attr, name] = selector.split('=');
      this.meta.updateTag({ [attr]: name, content }, `${attr}="${name}"`);
    }
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }
}
