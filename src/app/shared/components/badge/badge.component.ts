import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { Badge } from '@app/shared/models/content.model';

@Component({
  selector: 'app-badge',
  template: `{{ badge().label }}`,
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"tone-" + (badge().tone ?? "cyan")',
  },
})
export class BadgeComponent {
  readonly badge = input.required<Badge>();
}
