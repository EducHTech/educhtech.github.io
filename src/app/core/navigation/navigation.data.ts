import type { FooterColumn, NavItem } from '@app/shared/models/navigation.model';

import { PATHS, link } from './paths';

/** Source unique du menu principal (en-tête sur ordinateur et menu latéral sur mobile). */
export const MAIN_NAVIGATION: readonly NavItem[] = [
  { label: 'Accueil', route: link(PATHS.accueil) },
  { label: 'Membres', route: link(PATHS.membres) },
  {
    label: 'Plateformes',
    children: [
      { label: 'ÉducHTech Studio', route: link(PATHS.studio) },
      { label: 'ÉducHTech App', route: link(PATHS.app) },
    ],
  },
  {
    label: 'Camps & Ateliers',
    children: [
      { label: 'Camps & Ateliers', route: link(PATHS.camps) },
      { label: 'Par et Pour', route: link(PATHS.parEtPour) },
      { label: 'Simulateur coût des ateliers', route: link(PATHS.simulateurCoutAteliers) },
      { label: 'Simulateur financement d’équipe', route: link(PATHS.simulateurFinancementEquipe) },
    ],
  },
  {
    label: 'Les Dragons',
    children: [
      { label: 'Les Dragons', route: link(PATHS.dragons) },
      { label: 'Mini-FTC', route: link(PATHS.miniFtc) },
      { label: 'TEDx Ville-Marie ED 2025', route: link(PATHS.tedx) },
      { label: 'Eurêka!', route: link(PATHS.eureka) },
      { label: 'Le temps des fêtes', route: link(PATHS.tempsDesFetes) },
    ],
  },
  { label: 'Partenaires', route: link(PATHS.partenaires) },
  { label: 'Contact', route: link(PATHS.contact) },
];

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: 'Plateformes',
    links: [
      { label: 'ÉducHTech Studio', route: link(PATHS.studio) },
      { label: 'ÉducHTech App', route: link(PATHS.app) },
    ],
  },
  {
    title: 'Activités',
    links: [
      { label: 'Camps de robotique', route: link(PATHS.camps) },
      { label: 'Les Dragons', route: link(PATHS.dragons) },
      { label: 'Par et Pour', route: link(PATHS.parEtPour) },
    ],
  },
  {
    title: 'Organisation',
    links: [
      { label: 'Membres', route: link(PATHS.membres) },
      { label: 'Partenaires', route: link(PATHS.partenaires) },
      { label: 'Contact', route: link(PATHS.contact) },
    ],
  },
];

export const CONTACT_EMAIL = 'contact@educhtech.org';
