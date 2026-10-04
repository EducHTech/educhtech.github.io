import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const ZEFFY_SCRIPT_URL = 'https://www.zeffy.com/embed/v2/zeffy-embed.js';
const ZEFFY_SCRIPT_ID = 'zeffy-embed-script';

/**
 * Formulaire de don Zeffy.
 * Le script officiel est (re)chargé à chaque affichage pour qu'il détecte le formulaire,
 * même après une navigation interne. S'il ne se charge pas, on affiche l'iframe de secours.
 */
@Component({
  selector: 'app-zeffy-embed',
  template: `
    @if (fallback()) {
      <iframe class="fallback" title="Formulaire de don propulsé par Zeffy" [src]="fallbackSrc()"></iframe>
    } @else {
      <div data-zeffy-embed [attr.data-form-url]="'/embed/donation-form/' + formId()"></div>
    }
  `,
  styleUrl: './zeffy-embed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZeffyEmbedComponent {
  /** Identifiant du formulaire Zeffy (dernière partie de l'URL du formulaire). */
  readonly formId = input.required<string>();

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly fallback = signal(false);
  protected readonly fallbackSrc = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.zeffy.com/embed/donation-form/${encodeURIComponent(this.formId())}`,
    ),
  );

  constructor() {
    const document = inject(DOCUMENT);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      document.getElementById(ZEFFY_SCRIPT_ID)?.remove();
      const script = document.createElement('script');
      script.id = ZEFFY_SCRIPT_ID;
      script.src = ZEFFY_SCRIPT_URL;
      script.async = true;
      script.onerror = () => this.fallback.set(true);
      document.body.appendChild(script);
      destroyRef.onDestroy(() => script.remove());
    });
  }
}
