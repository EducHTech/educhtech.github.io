import { TestBed } from '@angular/core/testing';

import type { ImageAsset } from '@app/shared/models/content.model';

import { CarouselComponent } from './carousel.component';

const SLIDES: ImageAsset[] = [
  { path: 'par-et-pour/2.webp', alt: 'Diapo 1' },
  { path: 'par-et-pour/3.webp', alt: 'Diapo 2' },
  { path: 'par-et-pour/5.webp', alt: 'Diapo 3' },
];

describe('CarouselComponent', () => {
  function setup() {
    const fixture = TestBed.createComponent(CarouselComponent);
    fixture.componentRef.setInput('slides', SLIDES);
    fixture.componentRef.setInput('interval', 0);
    fixture.detectChanges();
    const activeAlt = () =>
      (fixture.nativeElement as HTMLElement).querySelector('.carousel-slide.active img')?.getAttribute('alt');
    return { fixture, carousel: fixture.componentInstance, activeAlt };
  }

  it('affiche la première diapositive au départ', () => {
    const { activeAlt } = setup();
    expect(activeAlt()).toBe('Diapo 1');
  });

  it('boucle dans les deux sens', () => {
    const { fixture, carousel, activeAlt } = setup();

    carousel.previous();
    fixture.detectChanges();
    expect(activeAlt()).toBe('Diapo 3');

    carousel.next();
    fixture.detectChanges();
    expect(activeAlt()).toBe('Diapo 1');
  });

  it('affiche un point de navigation par diapositive', () => {
    const { fixture } = setup();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.dot').length).toBe(SLIDES.length);
  });
});
