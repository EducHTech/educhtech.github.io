import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { ActionLinksComponent } from '@app/shared/components/action-links/action-links.component';
import { CardGridComponent } from '@app/shared/components/card-grid/card-grid.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { MetricGridComponent } from '@app/shared/components/metric-grid/metric-grid.component';
import { SectionComponent } from '@app/shared/components/section/section.component';

import * as data from '../../data/accueil.data';

@Component({
  selector: 'app-accueil-page',
  imports: [PageLayoutComponent, HeroComponent, MetricGridComponent, SectionComponent, CardGridComponent, ActionLinksComponent],
  templateUrl: './accueil.page.html',
  styleUrl: './accueil.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilPage {
  protected readonly data = data;
}
