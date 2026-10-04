import { DOCUMENT, Injectable, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';

/**
 * Avec Ionic, la page ne défile pas dans `window` mais dans <ion-content>.
 * Ce ViewportScroller remplace celui d'Angular pour que les liens d'ancre
 * (routerLink + fragment, ex. /les-dragons#robotique) défilent au bon endroit.
 */
@Injectable()
export class IonContentViewportScroller extends ViewportScroller {
  private readonly document = inject(DOCUMENT);

  override setOffset(): void {
    // L'en-tête Ionic est hors de la zone de défilement : aucun décalage nécessaire.
  }

  override getScrollPosition(): [number, number] {
    return [0, 0];
  }

  override scrollToPosition(): void {
    // Chaque page Ionic a son propre ion-content, qui commence déjà en haut.
  }

  override scrollToAnchor(anchor: string, options?: ScrollOptions): void {
    // Plusieurs pages peuvent être dans le DOM (pile Ionic) : on cible la page visible.
    const page = this.document.querySelector('ion-router-outlet > .ion-page:not(.ion-page-hidden)');
    const target = (page ?? this.document).querySelector(`#${CSS.escape(anchor)}`);
    target?.scrollIntoView({ behavior: options?.behavior ?? 'smooth', block: 'start' });
  }

  override setHistoryScrollRestoration(): void {
    // Sans objet avec ion-content.
  }
}
