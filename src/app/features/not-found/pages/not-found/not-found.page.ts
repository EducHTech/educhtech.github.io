import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { PATHS, link } from '@app/core/navigation/paths';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import type { Hero } from '@app/shared/models/content.model';

@Component({
  selector: 'app-not-found-page',
  imports: [PageLayoutComponent, HeroComponent],
  template: `
    <app-page-layout>
      <app-hero [hero]="hero" />
    </app-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {
  protected readonly hero: Hero = {
    badge: { label: 'Erreur 404', tone: 'rouge' },
    title: 'Cette page',
    highlight: 'est introuvable',
    subtitle: 'Le lien est peut-être ancien ou la page a été déplacée. Utilisez le menu ou revenez à l’accueil.',
    actions: [
      { label: 'Retour à l’accueil', route: link(PATHS.accueil) },
      { label: 'Nous contacter', route: link(PATHS.contact), variant: 'secondary' },
    ],
  };
}
