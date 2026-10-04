import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { ActionLinksComponent } from '@app/shared/components/action-links/action-links.component';
import { CardGridComponent } from '@app/shared/components/card-grid/card-grid.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { SplitLayoutComponent } from '@app/shared/components/split-layout/split-layout.component';

import * as data from '../../data/studio.data';

@Component({
  selector: 'app-studio-page',
  imports: [PageLayoutComponent, HeroComponent, SectionComponent, SplitLayoutComponent, CardGridComponent, ActionLinksComponent],
  templateUrl: './studio.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudioPage {
  protected readonly data = data;
}
