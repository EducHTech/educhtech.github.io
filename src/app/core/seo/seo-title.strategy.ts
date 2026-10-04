import { Injectable, inject } from '@angular/core';
import type { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TitleStrategy } from '@angular/router';

import type { PageSeo } from '@app/shared/models/seo.model';

import { SITE_NAME, SeoService } from './seo.service';

/**
 * Applique les métadonnées SEO à chaque navigation, à partir de `title` et `data.seo` des routes.
 * Un titre qui ne mentionne pas déjà « ÉducHTech » reçoit le suffixe « | ÉducHTech ».
 */
@Injectable({ providedIn: 'root' })
export class SeoTitleStrategy extends TitleStrategy {
  private readonly seo = inject(SeoService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot) ?? SITE_NAME;
    const route = deepestChild(snapshot.root);
    const pageSeo = route.data['seo'] as PageSeo | undefined;

    this.seo.update({
      title: pageTitle.includes(SITE_NAME) ? pageTitle : `${pageTitle} | ${SITE_NAME}`,
      description: pageSeo?.description ?? '',
      image: pageSeo?.image,
      path: snapshot.url.split(/[?#]/)[0],
    });
  }
}

function deepestChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  return route.firstChild ? deepestChild(route.firstChild) : route;
}
