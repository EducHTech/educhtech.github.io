import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ActionLinksComponent } from '@app/shared/components/action-links/action-links.component';
import { BadgeComponent } from '@app/shared/components/badge/badge.component';
import type { Hero } from '@app/shared/models/content.model';

/**
 * En-tête de page (titre H1). Le contenu projeté s'affiche au-dessus de la pastille
 * (ex. le logo des Dragons).
 */
@Component({
  selector: 'app-hero',
  imports: [ActionLinksComponent, BadgeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.tinted]': 'tinted()',
  },
})
export class HeroComponent {
  readonly hero = input.required<Hero>();
  /** Fond dégradé léger (page Les Dragons). */
  readonly tinted = input(false);
}
