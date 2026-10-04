import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { filter } from 'rxjs';

import { MAIN_NAVIGATION } from '@app/core/navigation/navigation.data';
import { ImageComponent } from '@app/shared/components/image/image.component';
import { LOGO } from '@app/core/layout/brand';

/**
 * Barre de navigation. Sur ordinateur : menu horizontal avec sous-menus.
 * Sous 900px : bouton qui ouvre le menu latéral (app-site-menu).
 */
@Component({
  selector: 'app-site-header',
  imports: [IonButtons, IonMenuButton, RouterLink, RouterLinkActive, ImageComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'openGroup.set(null)',
  },
})
export class SiteHeaderComponent {
  protected readonly navigation = MAIN_NAVIGATION;
  protected readonly logo = LOGO;
  /** Sous-menu ouvert au clic ou au clavier (le survol est géré en CSS). */
  protected readonly openGroup = signal<string | null>(null);

  constructor() {
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.openGroup.set(null));
  }

  protected toggle(label: string): void {
    this.openGroup.update((current) => (current === label ? null : label));
  }
}
