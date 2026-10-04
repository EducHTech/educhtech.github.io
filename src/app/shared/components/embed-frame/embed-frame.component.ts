import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Cadre pour une intégration externe (YouTube, Facebook…).
 * Seuls les domaines de ALLOWED_HOSTS sont acceptés, car l'URL est marquée comme sûre.
 */
const ALLOWED_HOSTS = ['www.youtube-nocookie.com', 'www.youtube.com', 'www.facebook.com'];

@Component({
  selector: 'app-embed-frame',
  template: `
    @if (safeSrc(); as src) {
      <iframe
        [src]="src"
        [title]="title()"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    }
  `,
  styleUrl: './embed-frame.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.aspect-ratio]': 'ratio()',
    '[style.max-width]': 'maxWidth()',
  },
})
export class EmbedFrameComponent {
  readonly src = input.required<string>();
  readonly title = input.required<string>();
  readonly ratio = input('16 / 9');
  readonly maxWidth = input<string>();

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly safeSrc = computed(() => {
    const url = new URL(this.src());
    if (url.protocol !== 'https:' || !ALLOWED_HOSTS.includes(url.hostname)) {
      console.error(`Intégration refusée : ${url.hostname} n'est pas autorisé.`);
      return null;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.toString());
  });
}

/** URL d'intégration YouTube (domaine sans témoins). */
export const youtubeEmbedUrl = (id: string): string => `https://www.youtube-nocookie.com/embed/${id}`;
