import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageLayoutComponent } from '@app/core/layout/page-layout/page-layout.component';
import { CONTACT_EMAIL } from '@app/core/navigation/navigation.data';
import { HeroComponent } from '@app/shared/components/hero/hero.component';
import { SectionComponent } from '@app/shared/components/section/section.component';
import type { Hero } from '@app/shared/models/content.model';

@Component({
  selector: 'app-contact-page',
  imports: [PageLayoutComponent, HeroComponent, SectionComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  protected readonly email = CONTACT_EMAIL;
  protected readonly hero: Hero = {
    badge: { label: 'Échangeons ensemble' },
    title: 'Contactez',
    highlight: 'ÉducHTech',
    subtitle:
      'Vous souhaitez organiser un camp de robotique dans votre établissement, déployer ÉducHTech Studio ou devenir partenaire ?',
  };
}
