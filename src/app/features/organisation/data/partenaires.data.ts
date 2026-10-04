import { PATHS, link } from '@app/core/navigation/paths';
import type { ActionLink, FeatureCard, Hero, SectionHeader } from '@app/shared/models/content.model';

export const HERO: Hero = {
  badge: { label: 'Ils nous font confiance', tone: 'indigo' },
  title: 'Des partenaires engagés',
  highlight: 'pour la robotique éducative',
  subtitle:
    'ÉducHTech travaille avec des écoles, des institutions et des acteurs du terrain pour rendre la robotique plus accessible, plus durable et plus utile pour les jeunes.',
};

export const PARTNERS: readonly FeatureCard[] = [
  {
    title: 'École secondaire Jeanne-Mance',
    image: { path: 'partenaires/jeanne-mance.webp', alt: 'Logo de l’école secondaire Jeanne-Mance' },
    text: 'Les Dragons sont au cœur de notre modèle de mentorat. L’école secondaire Jeanne-Mance soutient le développement des camps de jour et des activités avec un centre de services voisin, afin de permettre aux jeunes de transmettre leur expertise en robotique.',
  },
  {
    title: 'CAE',
    image: { path: 'partenaires/cae.webp', alt: 'Logo de CAE' },
    text: 'CAE reconnaît l’engagement bénévole de ses employés grâce à son programme de bénévolat. En 2023, Yann a reçu le prix argent de ce programme pour la fondation de l’OBNL ÉducHTech, réalisée en parallèle de son travail chez CAE.',
  },
];

export const SOUTIEN: SectionHeader = {
  title: 'Nous soutenir',
  description:
    'Votre appui permet d’accroître l’accès à la robotique éducative, de financer des ateliers et de soutenir les jeunes dans leur parcours de mentorat et de transmission.',
};

/** Formulaire de don Zeffy. */
export const ZEFFY_FORM_ID = 'd95c1f68-f631-4012-80cc-721dd30c7b82';

export const SOUTIEN_LINKS: readonly ActionLink[] = [
  { label: 'Devenir partenaire', route: link(PATHS.contact), variant: 'secondary' },
];
