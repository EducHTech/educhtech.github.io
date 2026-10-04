import { PATHS, link } from '@app/core/navigation/paths';
import type { ActionLink, FeatureCard, Hero, ImageAsset, SectionHeader } from '@app/shared/models/content.model';

export const HERO: Hero = {
  badge: { label: 'Logiciel de robotique éducative' },
  title: 'ÉducHTech Studio :',
  highlight: 'apprendre à programmer un robot sans se perdre',
  subtitle:
    'Une plateforme pensée pour rendre la robotique accessible, claire et progressive. Les jeunes apprennent en construisant des programmes visuels, puis passent progressivement vers des compétences plus avancées.',
};

export const ESSENTIEL = {
  header: {
    badge: { label: 'Le cœur du projet', tone: 'rouge' },
    title: 'Un environnement simple pour apprendre, tester et piloter',
    description:
      'ÉducHTech Studio permet à un jeune de programmer un robot en assemblant des blocs, de tester la logique, puis de piloter le robot dans un environnement de compétition ou d’atelier.',
  } satisfies SectionHeader,
  paragraphs: [
    'L’idée est simple : réduire la friction, limiter la confusion, et aider les jeunes à rester concentrés sur le robot, la logique et le plaisir d’apprendre.',
  ],
  image: { path: 'studio/studio.webp', alt: 'Interface principale d’ÉducHTech Studio' } satisfies ImageAsset,
};

export const ETAPES: SectionHeader = { badge: { label: 'Ce qu’il fait' }, title: 'Les trois étapes clés' };

export const ETAPES_CARDS: readonly FeatureCard[] = [
  {
    icon: '🧩',
    title: '1. Programmer visuellement',
    text: 'Les jeunes assemblent des blocs pour créer des actions, des conditions et des répétitions. C’est un apprentissage concret, progressif et accessible.',
  },
  {
    icon: '🧪',
    title: '2. Tester sans friction',
    text: 'Le robot peut être testé en mode autonome ou piloté, avec des éléments de suivi visuel pour comprendre ce qui se passe et corriger rapidement.',
  },
  {
    icon: '🎮',
    title: '3. Piloter comme une vraie équipe',
    text: 'La plateforme propose une logique de manette, de chronomètre et de séquence de match, proche de l’expérience réelle de la robotique compétitive.',
  },
];

export const PROGRESSION: SectionHeader = { badge: { label: 'Progression' }, title: 'Un outil qui grandit avec les jeunes' };

export const PROGRESSION_CARDS: readonly FeatureCard[] = [
  {
    icon: '🌱',
    title: 'Débutants',
    text: 'Interface plus simple, actions déjà préparées et apprentissage des bases de la logique.',
  },
  {
    icon: '🚀',
    title: 'Intermédiaire',
    text: 'Les jeunes créent plus d’actions, comprennent les capteurs et la logique conditionnelle.',
  },
  {
    icon: '🏆',
    title: 'Avancé',
    text: 'Le logiciel devient une passerelle vers des concepts plus techniques, en gardant une pédagogie claire et structurée.',
  },
];

export const CALL_TO_ACTION: SectionHeader = {
  title: 'Notre message',
  description:
    'ÉducHTech Studio aide les jeunes à apprendre la robotique de façon concrète, progressive et motivante. Il porte la mission centrale du projet : apprendre, transmettre et rendre la robotique plus durable et plus accessible.',
};

export const CALL_TO_ACTION_LINKS: readonly ActionLink[] = [{ label: 'Nous contacter', route: link(PATHS.contact) }];
