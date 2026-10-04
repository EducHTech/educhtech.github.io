import { PATHS, link } from '@app/core/navigation/paths';
import type { ActionLink, FeatureCard, Hero, Metric, SectionHeader } from '@app/shared/models/content.model';

export const HERO: Hero = {
  badge: { label: '🚀 Robotique éducative, jeunes mentors, jeunes animateurs, impact durable', tone: 'rouge' },
  title: 'ÉducHTech transforme la robotique scolaire en',
  highlight: 'moteur de relève',
  subtitle:
    'Nous mentorons des équipes du secondaire, structurons leur année avec ÉducHTech App, outillons leurs ateliers avec ÉducHTech Studio et aidons les jeunes à transmettre leur savoir aux plus petits. Les activités créent une source d’autofinancement locale pour garder la robotique vivante.',
};

export const METRICS: readonly Metric[] = [
  { value: '3 ans', label: 'Depuis la création d’ÉducHTech et son déploiement concret' },
  { value: '10 ans', label: 'De mentorat et d’expérience dans la robotique locale' },
  { value: '50+', label: 'Jeunes du secondaire mentorés et accompagnés' },
  { value: '10+', label: 'Mentors qui sont revenus pour soutenir la relève' },
  { value: '7', label: 'Nouveaux animateurs 2026 engagés dans les activités du camp' },
  { value: '72', label: 'Jeunes accueillis au camp de jour Centre-Sablon en 2026' },
];

export const MISSION: SectionHeader = {
  badge: { label: 'Notre mission' },
  title: 'Former, transmettre, financer',
  description:
    'Notre approche relie le mentorat des équipes du secondaire, les ateliers pour les jeunes du primaire, la réutilisation de matériel existant et une boucle de revenus qui soutient les programmes de robotique.',
};

export const MISSION_CARDS: readonly FeatureCard[] = [
  {
    icon: '👩‍🏫',
    title: 'Mentorer les équipes',
    text: 'ÉducHTech App aide les jeunes et les mentors à planifier l’année, organiser les séances et suivre les heures pour améliorer le fonctionnement de l’équipe.',
  },
  {
    icon: '♻️',
    title: 'Une robotique circulaire',
    text: 'Les robots qui dormaient dans les placards redeviennent des outils d’apprentissage grâce à des ateliers adaptables.',
  },
  {
    icon: '💡',
    title: 'Une boucle de financement',
    text: 'Les ateliers animés par les jeunes financent une partie des équipes, des déplacements, du matériel et de l’encadrement.',
  },
];

export const RESULTS: SectionHeader = {
  badge: { label: 'Où nous en sommes' },
  title: 'Un modèle validé par des résultats concrets',
};

export const RESULT_CARDS: readonly FeatureCard[] = [
  {
    icon: '🏆',
    title: '10 ans de mentorat',
    text: 'Une expérience terrain construite avec Les Dragons de l’école secondaire Jeanne-Mance depuis 2016.',
  },
  {
    icon: '🥇',
    title: 'Des ateliers testés',
    text: 'Mini-FTC, camps et activités communautaires ont permis de transformer l’expertise des équipes en expériences accessibles.',
  },
  {
    icon: '🌍',
    title: 'Qualification mondiale 2024',
    text: 'Une preuve du niveau technique atteint par la relève lorsqu’elle est accompagnée avec constance.',
  },
  {
    icon: '🚀',
    title: 'Un modèle testé sur le terrain',
    text: 'Le camp Centre-Sablon a démontré la capacité à produire, animer et financer des activités réelles.',
  },
];

export const CALL_TO_ACTION: SectionHeader = {
  title: 'Nous avançons avec une approche claire et concrète',
  description:
    'Nous cherchons des partenaires scolaires, communautaires et technologiques pour déployer ce modèle là où la robotique existe déjà, mais manque de continuité.',
};

export const CALL_TO_ACTION_LINKS: readonly ActionLink[] = [
  { label: 'Découvrir les activités', route: link(PATHS.camps) },
  { label: 'Nous contacter', route: link(PATHS.contact), variant: 'secondary' },
];
