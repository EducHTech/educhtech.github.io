import type { FeatureCard, Hero, ImageAsset, SectionHeader } from '@app/shared/models/content.model';

/**
 * Contenu d'une page d'événement ou de projet (voir EventPage) :
 * en-tête, présentation en deux colonnes, puis cartes « points forts ».
 */
export interface EventContent {
  hero: Hero;
  presentation: {
    header: SectionHeader;
    paragraphs: readonly string[];
    image: ImageAsset;
  };
  highlights: {
    header: SectionHeader;
    cards: readonly FeatureCard[];
  };
}

export const MINI_FTC: EventContent = {
  hero: {
    badge: { label: 'Innovation compétitive ouverte', tone: 'indigo' },
    title: 'Le Mini-FTC :',
    highlight: 'la robotique compétitive pour tous',
    subtitle:
      'Un format pensé pour introduire les jeunes à la stratégie, au design et au travail d’équipe sans les obstacles du coût ou de la complexité.',
  },
  presentation: {
    header: {
      badge: { label: 'Le concept' },
      title: 'Un format plus simple, plus accessible',
      description:
        'Les grands formats de compétition peuvent être coûteux et exigeants. Le Mini-FTC cherche à préserver la valeur de l’apprentissage, mais dans une version plus légère et plus accessible.',
    },
    paragraphs: [
      'L’enjeu est de rendre la robotique éducative plus inclusive, plus concrète et plus facile à reproduire dans une école, un centre communautaire ou un programme d’atelier.',
    ],
    image: { path: 'evenements/base-mini-ftc.webp', alt: 'Robot Mini-FTC' },
  },
  highlights: {
    header: { badge: { label: 'Pourquoi ça marche', tone: 'indigo' }, title: 'Un modèle clair, concret et reproductible' },
    cards: [
      {
        icon: '⚙️',
        title: 'Conception',
        text: 'Les participants apprennent à modéliser, assembler et tester un robot simple, en construisant progressivement des compétences techniques.',
      },
      {
        icon: '🧠',
        title: 'Programmation',
        text: 'Le travail de logique, de capteurs et de stratégie permet de relier la pensée à une action concrète et mesurable.',
      },
      {
        icon: '🤝',
        title: 'Travail d’équipe',
        text: 'Le format encourage la coordination, l’entraide et l’analyse du rendement, autant que la créativité.',
      },
    ],
  },
};

export const EUREKA: EventContent = {
  hero: {
    badge: { label: 'Exposants au Festival Eurêka! de Montréal', tone: 'indigo' },
    title: 'Eurêka! :',
    highlight: 'la robotique éducative à Montréal',
    subtitle:
      'ÉducHTech et Les Dragons étaient exposants au Festival Eurêka! pour présenter leurs robots, rencontrer le public et faire vivre la robotique aux jeunes visiteurs.',
  },
  presentation: {
    header: {
      badge: { label: 'Notre kiosque' },
      title: 'Faire essayer la robotique au public',
      description:
        'Au Festival Eurêka! de Montréal, notre rôle d’exposants était concret : expliquer, démontrer et laisser les visiteurs découvrir ce que les jeunes construisent.',
    },
    paragraphs: [
      'Ce contact direct avec le public met en valeur le travail d’équipe, la créativité et la capacité des jeunes à transmettre leurs apprentissages.',
    ],
    image: { path: 'evenements/eureka.webp', alt: 'Kiosque ÉducHTech au Festival Eurêka! de Montréal' },
  },
  highlights: {
    header: { badge: { label: 'Sur place', tone: 'indigo' }, title: 'Ce que nous avons présenté comme exposants' },
    cards: [
      {
        icon: '🤖',
        title: 'Démonstrations',
        text: 'Des robots et prototypes qui rendent visibles les compétences du groupe et le potentiel des nouvelles générations.',
      },
      {
        icon: '🎯',
        title: 'Ateliers interactifs',
        text: 'Un cadre simple pour permettre aux jeunes visiteurs d’essayer, observer et poser des questions.',
      },
      {
        icon: '💡',
        title: 'Transmission',
        text: 'La science, la création et le sens collectif deviennent accessibles au plus grand nombre.',
      },
    ],
  },
};

export const TEMPS_DES_FETES: EventContent = {
  hero: {
    badge: { label: 'Temps de partage', tone: 'rouge' },
    title: 'Le temps des fêtes',
    highlight: 'approche',
    subtitle:
      'Un moment de célébration, de transmission et de mise en valeur des jeunes qui contribuent à l’écosystème ÉducHTech.',
  },
  presentation: {
    header: {
      badge: { label: 'Le contexte' },
      title: 'Une période propice à la transmission',
      description:
        'À l’approche des fêtes, nous célébrons les apprentissages, les projets et les liens tissés autour de la robotique éducative.',
    },
    paragraphs: [
      'C’est aussi un moment de rendre hommage aux jeunes, aux mentors et aux communautés qui soutiennent le développement de compétences techniques, humaines et sociales.',
    ],
    image: { path: 'evenements/activite-robotique.webp', alt: 'ÉducHTech en période festive' },
  },
  highlights: {
    header: { badge: { label: 'Ce qui compte', tone: 'indigo' }, title: 'La communauté avant tout' },
    cards: [
      {
        icon: '🤝',
        title: 'Mentorat',
        text: 'Des jeunes plus avancés accompagnent les autres et créent une dynamique de transmission réelle.',
      },
      {
        icon: '🎁',
        title: 'Célébration',
        text: 'Les projets aboutis, les initiatives et les réussites collectives sont autant de raisons de célébrer.',
      },
      {
        icon: '🚀',
        title: 'Perspective',
        text: 'À travers ces moments, on renforce l’idée d’une communauté qui grandit ensemble dans la création et l’engagement.',
      },
    ],
  },
};
