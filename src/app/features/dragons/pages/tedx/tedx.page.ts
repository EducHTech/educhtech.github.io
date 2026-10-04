import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { SplitLayoutComponent } from '@app/shared/components/split-layout/split-layout.component';

import * as data from '../../data/tedx.data';

@Component({
  selector: 'app-tedx-page',
  imports: [PageLayoutComponent, HeroComponent, SectionComponent, SplitLayoutComponent],
  templateUrl: './tedx.page.html',
  styleUrl: './tedx.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TedxPage {
  protected readonly data = data;
}
