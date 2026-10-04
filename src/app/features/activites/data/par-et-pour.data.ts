import type { Hero, ImageAsset, SectionHeader } from '@app/shared/models/content.model';

export const HERO: Hero = {
  badge: { label: 'Projet 2026', tone: 'rouge' },
  title: 'Par et Pour',
  highlight: 'les Jeunes',
  subtitle:
    'Le site web complet qui présentera notre projet Par et Pour les Jeunes 2026 est en cours de construction. En attendant, cette page rassemble des extraits de nos publications Instagram pour montrer l’ambiance, les apprentissages et la dynamique du projet.',
};

export const PUBLICATIONS: SectionHeader = {
  badge: { label: 'Extraits', tone: 'indigo' },
  title: 'Nos publications Instagram',
  description:
    'Quelques moments partagés pour présenter le projet, ses visées éducatives et le travail réalisé avec les jeunes.',
};

export const SLIDES: readonly ImageAsset[] = [
  { path: 'par-et-pour/2.webp', alt: 'Préparation du projet Par et Pour' },
  { path: 'par-et-pour/3.webp', alt: 'Partenariat et engagement communautaire' },
  { path: 'par-et-pour/5.webp', alt: 'Atelier robotique et collaboration avec les jeunes' },
  { path: 'par-et-pour/6.webp', alt: 'Développement des compétences et des projets concrets' },
  { path: 'par-et-pour/8.webp', alt: 'Vision de la robotique éducative en action' },
  { path: 'par-et-pour/9.webp', alt: 'Impact social et inspiration pour les jeunes' },
  { path: 'par-et-pour/11.webp', alt: 'Projet d’entrepreneuriat social et innovation positive' },
  { path: 'par-et-pour/12.webp', alt: 'Le projet mobilise les acteurs et les jeunes' },
  { path: 'par-et-pour/18.webp', alt: 'Les jeunes au cœur du projet, équipe et communauté' },
  { path: 'par-et-pour/19.webp', alt: 'Engagement de la communauté pour un avenir innovant' },
];
