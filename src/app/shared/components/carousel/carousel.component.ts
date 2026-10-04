import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';

import { ImageComponent } from '@app/shared/components/image/image.component';
import type { ImageAsset } from '@app/shared/models/content.model';

/**
 * Carrousel d'images accessible : boutons précédent/suivant, points de navigation,
 * défilement automatique (suspendu au survol, au focus, ou si l'utilisateur préfère moins d'animations).
 */
@Component({
  selector: 'app-carousel',
  imports: [ImageComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(mouseenter)': 'paused.set(true)',
    '(mouseleave)': 'paused.set(false)',
    '(focusin)': 'paused.set(true)',
    '(focusout)': 'paused.set(false)',
  },
})
export class CarouselComponent {
  readonly slides = input.required<readonly ImageAsset[]>();
  readonly label = input('Carrousel');
  /** Délai entre deux diapositives, en ms. 0 pour désactiver. */
  readonly interval = input(5000);

  protected readonly index = signal(0);
  protected readonly paused = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);
    // afterNextRender ne s'exécute que dans le navigateur (jamais pendant le pré-rendu).
    afterNextRender(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion || this.interval() <= 0) return;
      const timer = setInterval(() => {
        if (!this.paused()) this.next();
      }, this.interval());
      destroyRef.onDestroy(() => clearInterval(timer));
    });
  }

  next(): void {
    this.goTo(this.index() + 1);
  }

  previous(): void {
    this.goTo(this.index() - 1);
  }

  goTo(i: number): void {
    const count = this.slides().length;
    this.index.set(((i % count) + count) % count);
  }
}
