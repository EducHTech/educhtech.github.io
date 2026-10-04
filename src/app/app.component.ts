import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { SiteMenuComponent } from '@app/core/layout/site-menu/site-menu.component';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet, SiteMenuComponent],
  template: `
    <ion-app>
      <app-site-menu />
      <ion-router-outlet id="main-content" />
    </ion-app>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
