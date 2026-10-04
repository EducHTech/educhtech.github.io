import type { Hero, ImageAsset, SectionHeader } from '@app/shared/models/content.model';

export const HERO: Hero = {
  badge: { label: 'Parole, pédagogie, transmission', tone: 'rouge' },
  title: 'TEDx Ville-Marie ED 2025 :',
  highlight: 'une voix pour la robotique éducative',
  subtitle:
    'Une occasion de partager la manière dont la robotique peut devenir un outil de curiosité, de leadership et de transmission entre les générations.',
};

export const CONCEPT = {
  header: {
    badge: { label: 'Le concept' },
    title: 'Rendre la robotique visible, accessible et inspirante',
    description:
      'La robotique ne doit pas être perçue comme un domaine réservé à quelques experts. Elle devient un levier concret d’apprentissage quand on la présente avec clarté.',
  } satisfies SectionHeader,
  paragraphs: [
    'Les Dragons veulent montrer que la technologie n’est pas juste un sujet technique : elle est aussi un espace de création, de réflexion et d’engagement collectif.',
  ],
  image: { path: 'evenements/activite-robotique.webp', alt: 'Jeunes en activité de robotique éducative' } satisfies ImageAsset,
};

export const BALADO = {
  header: {
    badge: { label: 'Balado', tone: 'rouge' },
    title: 'Écouter l’entrevue Hors saison',
    description:
      'Une discussion sur la robotique éducative, le mentorat et la manière dont les jeunes apprennent à bâtir, expliquer et transmettre leurs projets.',
  } satisfies SectionHeader,
  image: { path: 'evenements/tedx.webp', alt: 'Balado Hors saison avec ÉducHTech et Les Dragons' } satisfies ImageAsset,
  audioSrc: '/documents/hors-saison.mp3',
};
