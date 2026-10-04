import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader } from '@ionic/angular/standalone';

import { SiteFooterComponent } from '@app/core/layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from '@app/core/layout/site-header/site-header.component';

/**
 * Gabarit commun à toutes les pages : en-tête Ionic, contenu défilant et pied de page.
 * Chaque page l'utilise comme racine : <app-page-layout> ...sections... </app-page-layout>
 * L'hôte est en `display: contents` pour qu'ion-header et ion-content restent
 * des enfants directs de la page Ionic (.ion-page).
 */
@Component({
  selector: 'app-page-layout',
  imports: [IonHeader, IonContent, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <ion-header class="ion-no-border">
      <app-site-header />
    </ion-header>
    <ion-content>
      <main>
        <ng-content />
      </main>
      <app-site-footer />
    </ion-content>
  `,
  styles: `
    :host {
      display: contents;
    }

    main {
      background-image:
        radial-gradient(circle at 15% 10%, rgba(4, 155, 219, 0.07) 0%, transparent 42%),
        radial-gradient(circle at 85% 55%, rgba(76, 108, 240, 0.06) 0%, transparent 45%);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {}
