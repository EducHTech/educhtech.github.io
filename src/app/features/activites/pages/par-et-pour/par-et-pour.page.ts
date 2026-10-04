import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { CarouselComponent } from '@app/shared/components/carousel/carousel.component';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { SectionComponent } from '@app/shared/components/section/section.component';

import * as data from '../../data/par-et-pour.data';

@Component({
  selector: 'app-par-et-pour-page',
  imports: [PageLayoutComponent, HeroComponent, SectionComponent, CarouselComponent],
  template: `
    <app-page-layout>
      <app-hero [hero]="data.HERO" />
      <app-section [header]="data.PUBLICATIONS" [alt]="true">
        <app-carousel [slides]="data.SLIDES" label="Publications Instagram du projet Par et Pour" />
      </app-section>
    </app-page-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParEtPourPage {
  protected readonly data = data;
}
