import { PATHS, link } from '@app/core/navigation/paths';
import type { ActionLink, FeatureCard, Hero, SectionHeader } from '@app/shared/models/content.model';

export const HERO: Hero = {
  badge: { label: 'Organisation' },
  title: 'Les personnes qui',
  highlight: 'font vivre ÉducHTech',
  subtitle:
    'Une structure simple, crédible et engagée : fondation, gouvernance et accompagnement par les jeunes et les mentors.',
};

export const DIRECTION: SectionHeader = { badge: { label: 'Directeurs' }, title: 'Direction' };

export const DIRECTORS: readonly FeatureCard[] = [
  {
    image: { path: 'membres/yann.webp', alt: 'Yann le Chevoir' },
    title: 'Yann le Chevoir',
    subtitle: 'Directeur',
    text: 'Développeur logiciel chez CAE. Mentor puis coach bénévole d’équipes de robotique FIRST depuis 2016.',
  },
  {
    image: { path: 'membres/luca.webp', alt: 'Luca Bedel' },
    title: 'Luca Bedel',
    subtitle: 'Directeur',
    text: 'Étudiant au baccalauréat à Polytechnique Montréal. Ancien élève des programmes FIRST. Mentor depuis 2021.',
  },
];

export const PRIX_JEUNESSE = {
  card: {
    title: 'Bravo, Yann !',
    subtitle: 'Prix Jeunesse',
    text: 'L’engagement de notre président fondateur et directeur donne un exemple inspirant de leadership, de générosité et de dévouement au service des jeunes.',
  } satisfies FeatureCard,
  videoUrl:
    'https://www.facebook.com/plugins/video.php?height=560&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1544679166794327%2F&show_text=false&width=320&t=0',
  videoTitle: 'Vidéo Facebook : Prix Jeunesse remis à Yann le Chevoir',
};

export const CONSEIL: SectionHeader = { badge: { label: 'CA' }, title: 'Conseil d’administration' };

export const BOARD: readonly FeatureCard[] = [
  { icon: '🧭', title: 'Président', text: 'Jean' },
  { icon: '🧭', title: 'Vice-Président', text: 'Loïc' },
  { icon: '💰', title: 'Trésorier', text: 'Islam (fondateur)' },
  { icon: '✍️', title: 'Secrétaire', text: 'Ophélie' },
  { icon: '🌱', title: 'Administratrice Jeunesse', text: 'Salma' },
];

export const MENTORAT: SectionHeader = { badge: { label: 'Mentorat' }, title: 'Mentors' };

export const MENTORS: readonly FeatureCard[] = [
  { icon: '🎓', title: 'Ophélie' },
  { icon: '🎓', title: 'Sophiane' },
];

export const CALL_TO_ACTION: SectionHeader = {
  title: 'Une structure qui soutient l’action',
  description:
    'ÉducHTech s’appuie sur une gouvernance claire et un mentorat solide pour faire grandir ses activités et soutenir les jeunes qui portent la mission.',
};

export const CALL_TO_ACTION_LINKS: readonly ActionLink[] = [{ label: 'Nous contacter', route: link(PATHS.contact) }];
