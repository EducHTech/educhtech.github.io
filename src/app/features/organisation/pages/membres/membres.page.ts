import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { ActionLinksComponent } from '@app/shared/components/action-links/action-links.component';
import { CardGridComponent } from '@app/shared/components/card-grid/card-grid.component';
import { EmbedFrameComponent } from '@app/shared/components/embed-frame/embed-frame.component';
import { FeatureCardComponent } from '@app/shared/components/feature-card/feature-card.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { SectionComponent } from '@app/shared/components/section/section.component';

import * as data from '../../data/membres.data';

@Component({
  selector: 'app-membres-page',
  imports: [
    PageLayoutComponent,
    HeroComponent,
    SectionComponent,
    CardGridComponent,
    FeatureCardComponent,
    EmbedFrameComponent,
    ActionLinksComponent,
  ],
  templateUrl: './membres.page.html',
  styleUrl: './membres.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembresPage {
  protected readonly data = data;
}
