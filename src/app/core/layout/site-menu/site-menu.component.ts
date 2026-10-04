import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { MAIN_NAVIGATION } from '@app/core/navigation/navigation.data';

/** Menu latéral (mobile), généré à partir de MAIN_NAVIGATION comme l'en-tête. */
@Component({
  selector: 'app-site-menu',
  imports: [
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonMenuToggle,
    IonRouterLink,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './site-menu.component.html',
  styleUrl: './site-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteMenuComponent {
  protected readonly navigation = MAIN_NAVIGATION;
}
