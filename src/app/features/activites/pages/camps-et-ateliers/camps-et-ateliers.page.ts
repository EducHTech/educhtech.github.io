import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { ActionLinksComponent } from '@app/shared/components/action-links/action-links.component';
import { CardGridComponent } from '@app/shared/components/card-grid/card-grid.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { MetricGridComponent } from '@app/shared/components/metric-grid/metric-grid.component';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { SplitLayoutComponent } from '@app/shared/components/split-layout/split-layout.component';

import * as data from '../../data/camps.data';

@Component({
  selector: 'app-camps-et-ateliers-page',
  imports: [
    PageLayoutComponent,
    HeroComponent,
    SectionComponent,
    CardGridComponent,
    SplitLayoutComponent,
    MetricGridComponent,
    ActionLinksComponent,
  ],
  templateUrl: './camps-et-ateliers.page.html',
  styleUrl: './camps-et-ateliers.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampsEtAteliersPage {
  protected readonly data = data;
}
