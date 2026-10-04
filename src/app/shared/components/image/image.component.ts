import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { imageSize, imageSrc } from '@app/shared/images/image.utils';
import type { ImageAsset } from '@app/shared/models/content.model';

/**
 * Image optimisée (NgOptimizedImage) à partir d'un ImageAsset.
 * Le parent ajuste le rendu avec des variables CSS :
 * --image-fit, --image-ratio, --image-height, --image-radius.
 */
@Component({
  selector: 'app-image',
  imports: [NgOptimizedImage],
  template: `
    <img
      [ngSrc]="src()"
      [width]="size().width"
      [height]="size().height"
      [alt]="image().alt"
      [priority]="priority()"
    />
  `,
  styleUrl: './image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  readonly image = input.required<ImageAsset>();
  /** À activer pour l'image principale visible au chargement (LCP). */
  readonly priority = input(false);

  protected readonly src = computed(() => imageSrc(this.image().path));
  protected readonly size = computed(() => imageSize(this.image().path));
}
