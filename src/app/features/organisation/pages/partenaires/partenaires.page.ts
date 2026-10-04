import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { ActionLinksComponent } from '@app/shared/components/action-links/action-links.component';
import { CardGridComponent } from '@app/shared/components/card-grid/card-grid.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { SectionComponent } from '@app/shared/components/section/section.component';
import { ZeffyEmbedComponent } from '@app/shared/components/zeffy-embed/zeffy-embed.component';

import * as data from '../../data/partenaires.data';

@Component({
  selector: 'app-partenaires-page',
  imports: [PageLayoutComponent, HeroComponent, SectionComponent, CardGridComponent, ZeffyEmbedComponent, ActionLinksComponent],
  templateUrl: './partenaires.page.html',
  styleUrl: './partenaires.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartenairesPage {
  protected readonly data = data;
}
