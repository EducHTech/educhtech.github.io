import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { SectionComponent } from '@app/shared/components/section/section.component';

import type { ComingSoonContent } from '../../data/simulateurs.data';

/**
 * Page « Bientôt disponible », partagée par les simulateurs.
 * Le contenu vient de `data.content` de la route (liaison automatique avec withComponentInputBinding).
 */
@Component({
  selector: 'app-coming-soon-page',
  imports: [PageLayoutComponent, HeroComponent, SectionComponent],
  template: `
    <app-page-layout>
      <app-hero [hero]="content().hero" />
      <app-section [header]="content().details" [alt]="true" [narrow]="true" />
    </app-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComingSoonPage {
  readonly content = input.required<ComingSoonContent>();
}
