import { PATHS, link } from '@app/core/navigation/paths';
import type { ActionLink, FeatureCard, Hero, ImageAsset, SectionHeader } from '@app/shared/models/content.model';

export const HERO: Hero = {
  badge: { label: 'Gestionnaire d’équipe' },
  title: 'ÉducHTech App :',
  highlight: 'planifier, apprendre et suivre l’année',
  subtitle:
    'La plateforme utilisée par les équipes du secondaire mentorées par ÉducHTech pour organiser leur saison, préparer les séances, centraliser les apprentissages et suivre les heures des élèves comme des mentors.',
};

export const PLATEFORME: SectionHeader = {
  badge: { label: 'Mentorat structuré', tone: 'indigo' },
  title: 'Une seule plateforme pour faire vivre une équipe',
};

export const CAPTURE: ImageAsset = { path: 'app/app.webp', alt: 'Tableau de tâches dans ÉducHTech App' };

export const PLATEFORME_CARDS: readonly FeatureCard[] = [
  {
    icon: '🗂️',
    title: 'Planifier l’année',
    text: 'Les objectifs, jalons, compétitions, tâches et responsabilités sont regroupés pour donner une vision claire de la saison.',
  },
  {
    icon: '⏱️',
    title: 'Préparer les séances',
    text: 'Les mentors structurent les rencontres, les contenus et les priorités afin que chaque séance fasse avancer l’équipe.',
  },
  {
    icon: '💼',
    title: 'Apprendre au même endroit',
    text: 'Les jeunes retrouvent les ressources, consignes et traces de travail dans un espace commun, lié à la réalité de leur équipe.',
  },
];

export const SUIVI: SectionHeader = { badge: { label: 'Suivi réel' }, title: 'Comprendre où va le temps' };

export const SUIVI_CARDS: readonly FeatureCard[] = [
  {
    icon: '👩‍🎓',
    title: 'Heures des élèves',
    text: 'Les élèves consignent leur implication pour mieux comprendre la charge de travail, l’équilibre des rôles et les points d’organisation à revoir.',
  },
  {
    icon: '🧭',
    title: 'Heures des mentors',
    text: 'Les mentors documentent leurs heures d’accompagnement, ce qui facilite le suivi, la reconnaissance du travail et la rémunération lorsqu’elle s’applique.',
  },
  {
    icon: '📊',
    title: 'Décisions plus claires',
    text: 'L’équipe peut repérer les déséquilibres, ajuster son fonctionnement et apprendre à gérer un projet technique de façon responsable.',
  },
];

export const CALL_TO_ACTION: SectionHeader = {
  title: 'Un outil au service du mentorat',
  description:
    'ÉducHTech App soutient le cœur de notre métier : accompagner des équipes du secondaire avec rigueur, continuité et une meilleure lecture de leur progression.',
};

export const CALL_TO_ACTION_LINKS: readonly ActionLink[] = [
  { label: 'Discuter d’un accompagnement', route: link(PATHS.contact) },
];
