import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { ActionLinksComponent } from '@app/shared/components/action-links/action-links.component';
import { CardGridComponent } from '@app/shared/components/card-grid/card-grid.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { ImageComponent } from '@app/shared/components/image/image.component';
import { SectionComponent } from '@app/shared/components/section/section.component';

import * as data from '../../data/educhtech-app.data';

@Component({
  selector: 'app-educhtech-app-page',
  imports: [PageLayoutComponent, HeroComponent, SectionComponent, ImageComponent, CardGridComponent, ActionLinksComponent],
  templateUrl: './educhtech-app.page.html',
  styleUrl: './educhtech-app.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EduchtechAppPage {
  protected readonly data = data;
}
