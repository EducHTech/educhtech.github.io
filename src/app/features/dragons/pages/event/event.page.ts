import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { CardGridComponent } from '@app/shared/components/card-grid/card-grid.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { SplitLayoutComponent } from '@app/shared/components/split-layout/split-layout.component';

import type { EventContent } from '../../data/evenements.data';

/**
 * Gabarit des pages d'événement (Mini-FTC, Eurêka!, Temps des fêtes).
 * Le contenu vient de `data.content` de la route (liaison automatique avec withComponentInputBinding).
 */
@Component({
  selector: 'app-event-page',
  imports: [PageLayoutComponent, HeroComponent, SectionComponent, SplitLayoutComponent, CardGridComponent],
  templateUrl: './event.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventPage {
  readonly content = input.required<EventContent>();
}
