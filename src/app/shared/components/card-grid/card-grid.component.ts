import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FeatureCardComponent } from '@app/shared/components/feature-card/feature-card.component';
import type { FeatureCard } from '@app/shared/models/content.model';

/**
 * Grille de cartes (3 par ligne sur grand écran). La dernière ligne incomplète est centrée.
 * Des cartes supplémentaires peuvent être projetées après celles de `cards`.
 */
@Component({
  selector: 'app-card-grid',
  imports: [FeatureCardComponent],
  template: `
    @for (card of cards(); track card.title) {
      <app-feature-card [card]="card" />
    }
    <ng-content />
  `,
  styleUrl: './card-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--columns]': 'columns()',
  },
})
export class CardGridComponent {
  readonly cards = input<readonly FeatureCard[]>([]);
  readonly columns = input(3);
}
