import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { ActionLink } from '@app/shared/models/content.model';

/** Rangée de boutons-liens (route interne, ancre ou lien externe). */
@Component({
  selector: 'app-action-links',
  imports: [RouterLink],
  templateUrl: './action-links.component.html',
  styleUrl: './action-links.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionLinksComponent {
  readonly links = input.required<readonly ActionLink[]>();
}
