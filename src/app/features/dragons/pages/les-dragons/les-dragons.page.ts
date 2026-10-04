import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { CardGridComponent } from '@app/shared/components/card-grid/card-grid.component';
import { EmbedFrameComponent } from '@app/shared/components/embed-frame/embed-frame.component';
import { GalleryComponent } from '@app/shared/components/gallery/gallery.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { ImageComponent } from '@app/shared/components/image/image.component';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { SplitLayoutComponent } from '@app/shared/components/split-layout/split-layout.component';

import * as data from '../../data/les-dragons.data';

@Component({
  selector: 'app-les-dragons-page',
  imports: [
    PageLayoutComponent,
    HeroComponent,
    ImageComponent,
    SectionComponent,
    SplitLayoutComponent,
    CardGridComponent,
    GalleryComponent,
    EmbedFrameComponent,
  ],
  templateUrl: './les-dragons.page.html',
  styleUrl: './les-dragons.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LesDragonsPage {
  protected readonly data = data;
}
