import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { Metric } from '@app/shared/models/content.model';

/** Chiffres clés (ex. « 50+ jeunes mentorés »). */
@Component({
  selector: 'app-metric-grid',
  templateUrl: './metric-grid.component.html',
  styleUrl: './metric-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.compact]': 'compact()',
  },
})
export class MetricGridComponent {
  readonly metrics = input.required<readonly Metric[]>();
  /** Variante empilée et alignée à gauche (dans une colonne de texte). */
  readonly compact = input(false);
}
