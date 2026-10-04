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
    'Surtout, il transforme le matériel déjà présent dans les écoles en ateliers de robotique prêts à être animés, en offrant la même expérience pédagogique peu importe les robots disponibles.',
    'L’idée est simple : réduire la friction, limiter la confusion, et aider les jeunes à rester concentrés sur le robot, la logique et le plaisir d’apprendre.',
  ],
  image: { path: 'studio/studio.webp', alt: 'Interface principale d’ÉducHTech Studio' } satisfies ImageAsset,
};

export const PROBLEME: SectionHeader = {
  badge: { label: 'Pourquoi Studio', tone: 'indigo' },
  title: 'Une robotique scolaire fragile',
  description: 'La robotique à l’école se heurte à un double problème : la continuité et l’accessibilité.',
};

export const PROBLEME_CARDS: readonly FeatureCard[] = [
  {
    icon: '📦',
    title: 'Des robots dans les placards',
    text: 'Le programme a changé ou le fabricant n’est plus au rendez-vous. Pourtant, le matériel fonctionne encore.',
  },
  {
    icon: '🔄',
    title: 'Au primaire, tout recommence',
    text: 'Les plateformes changent constamment (LEGO, mBot…). Les écoles restent avec du matériel inutilisé et les jeunes doivent souvent repartir de zéro.',
  },
  {
    icon: '💸',
    title: 'Au secondaire, tout coûte plus cher',
    text: 'Inscription, construction, transport : la robotique de compétition coûte de plus en plus cher, et maintenir une équipe devient précaire.',
  },
];

export const ETAPES: SectionHeader = { badge: { label: 'Ce qu’il fait' }, title: 'Les quatre étapes clés' };

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
  {
    icon: '♻️',
    title: '4. Fonctionner avec le matériel existant',
    text: 'Le logiciel s’adapte aux robots déjà disponibles. Les ateliers ne dépendent plus d’un fabricant ni du prochain matériel à la mode : on brise le cycle de l’obsolescence.',
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

export const MODELE: SectionHeader = {
  badge: { label: 'Économie circulaire', tone: 'rouge' },
  title: 'Un modèle par et pour la relève',
  description:
    'Les plus grands transmettent leur expertise aux plus petits, et les activités des petits financent la robotique des grands. ÉducHTech Studio est la pièce maîtresse de cette boucle : au lieu de dépendre de la prochaine subvention, la robotique se finance de l’intérieur.',
};

export const MODELE_CARDS: readonly FeatureCard[] = [
  {
    icon: '🎓',
    title: 'Les anciens mentorent',
    text: 'Les anciens membres reviennent comme mentors pour encadrer la relève dans leur équipe du secondaire.',
  },
  {
    icon: '🤖',
    title: 'Les grands animent',
    text: 'Les jeunes du secondaire deviennent animateurs d’ateliers pour les plus petits : un premier emploi rémunéré qui finance leur propre parcours.',
  },
  {
    icon: '🌱',
    title: 'Les petits découvrent',
    text: 'Les plus jeunes vivent des ateliers de robotique concrets, et leur participation fait vivre les programmes du secondaire.',
  },
];

export const CALL_TO_ACTION: SectionHeader = {
  title: 'Notre message',
  description:
    'ÉducHTech Studio aide les jeunes à apprendre la robotique de façon concrète, progressive et motivante. Il porte la mission centrale du projet : apprendre, transmettre et rendre la robotique plus durable et plus accessible, pour que les jeunes deviennent des créateurs et des leaders, pas seulement des consommateurs de technologie.',
};

export const CALL_TO_ACTION_LINKS: readonly ActionLink[] = [{ label: 'Nous contacter', route: link(PATHS.contact) }];
