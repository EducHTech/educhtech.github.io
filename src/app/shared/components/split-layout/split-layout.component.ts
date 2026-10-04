import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BadgeComponent } from '@app/shared/components/badge/badge.component';
import { ImageComponent } from '@app/shared/components/image/image.component';
import type { ImageAsset, SectionHeader } from '@app/shared/models/content.model';

/**
 * Deux colonnes : texte (en-tête optionnel + contenu projeté) et image.
 * Passe en une colonne sous 900px.
 */
@Component({
  selector: 'app-split-layout',
  imports: [BadgeComponent, ImageComponent],
  templateUrl: './split-layout.component.html',
  styleUrl: './split-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.image-first]': 'imageFirst()',
    '[class.contain]': 'fit() === "contain"',
  },
})
export class SplitLayoutComponent {
  readonly image = input.required<ImageAsset>();
  readonly header = input<SectionHeader>();
  readonly imageFirst = input(false);
  /** `contain` pour une capture d'écran ou un petit visuel qu'on ne veut pas recadrer. */
  readonly fit = input<'cover' | 'contain'>('cover');
}
