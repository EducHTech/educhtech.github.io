import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ImageComponent } from '@app/shared/components/image/image.component';
import type { GalleryItem } from '@app/shared/models/content.model';

@Component({
  selector: 'app-gallery',
  imports: [ImageComponent],
  template: `
    @for (item of items(); track item.image.path) {
      <figure>
        <app-image [image]="item.image" />
        <figcaption>{{ item.caption }}</figcaption>
      </figure>
    }
  `,
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  readonly items = input.required<readonly GalleryItem[]>();
}
