import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LOGO, TAGLINE } from '@app/core/layout/brand';
import { FOOTER_COLUMNS } from '@app/core/navigation/navigation.data';
import { ImageComponent } from '@app/shared/components/image/image.component';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, ImageComponent],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly columns = FOOTER_COLUMNS;
  protected readonly logo = LOGO;
  protected readonly tagline = TAGLINE;
  /** Calculée au pré-rendu : l'année se met à jour à chaque déploiement. */
  protected readonly year = new Date().getFullYear();
}
