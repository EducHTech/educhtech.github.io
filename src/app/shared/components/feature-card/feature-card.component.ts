import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ImageComponent } from '@app/shared/components/image/image.component';
import type { FeatureCard } from '@app/shared/models/content.model';

/** Carte avec icône (emoji) ou image, titre, sous-titre et texte. Le contenu projeté s'affiche en haut. */
@Component({
  selector: 'app-feature-card',
  imports: [ImageComponent],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardComponent {
  readonly card = input.required<FeatureCard>();
}
