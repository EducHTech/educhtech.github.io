import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BadgeComponent } from '@app/shared/components/badge/badge.component';
import type { SectionHeader } from '@app/shared/models/content.model';

/**
 * Bloc de page avec en-tête optionnel (pastille, titre H2, description).
 * - `alt` : fond gris bleuté pour alterner les sections.
 * - `narrow` : contenu centré et étroit (sections d'appel à l'action).
 */
@Component({
  selector: 'app-section',
  imports: [BadgeComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.alt]': 'alt()',
    '[class.narrow]': 'narrow()',
    '[attr.id]': 'anchor()',
  },
})
export class SectionComponent {
  readonly header = input<SectionHeader>();
  readonly alt = input(false);
  readonly narrow = input(false);
  /** Identifiant d'ancre (ex. « robotique » pour /les-dragons#robotique). */
  readonly anchor = input<string>();
}
