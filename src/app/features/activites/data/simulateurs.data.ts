import { PATHS, link } from '@app/core/navigation/paths';
import type { ActionLink, Hero, SectionHeader } from '@app/shared/models/content.model';

/** Contenu d'une page « Bientôt disponible » (voir ComingSoonPage). */
export interface ComingSoonContent {
  hero: Hero;
  details: SectionHeader;
}

const ACTIONS: readonly ActionLink[] = [
  { label: 'Être avisé du lancement', route: link(PATHS.contact) },
  { label: 'Retour à l’accueil', route: link(PATHS.accueil), variant: 'secondary' },
];

export const SIMULATEUR_COUT_ATELIERS: ComingSoonContent = {
  hero: {
    badge: { label: '🚧 Bientôt disponible', tone: 'rouge' },
    title: 'Vous êtes un centre de loisirs ou une école ?',
    highlight: 'Simulez le coût de vos ateliers',
    subtitle:
      'Cet outil est en préparation. Il vous permettra d’estimer le coût de recevoir des ateliers ou des camps de robotique ÉducHTech, animés par de jeunes formateurs, selon le nombre de participants, de semaines et d’animateurs requis.',
    actions: ACTIONS,
  },
  details: {
    badge: { label: 'En développement' },
    title: 'Ce que le simulateur permettra',
    description:
      'Le simulateur s’appuiera sur notre expérience réelle au camp du Centre-Sablon (trois semaines, 72 participations-jeunes) et sur le projet Par et Pour. Il visera à estimer, selon le nombre de jeunes, de semaines et d’ateliers souhaités (conception 3D, construction, programmation, mini-compétition), le coût approximatif pour votre établissement.',
  },
};

export const SIMULATEUR_FINANCEMENT_EQUIPE: ComingSoonContent = {
  hero: {
    badge: { label: '🚧 Bientôt disponible', tone: 'rouge' },
    title: 'Vous êtes une équipe de robotique ?',
    highlight: 'Simulez votre financement',
    subtitle:
      'Cet outil est en préparation. Il vous permettra d’estimer combien votre équipe pourrait générer en offrant des ateliers et des camps de robotique animés par vos jeunes, et comment ces revenus peuvent contribuer à financer votre année FTC.',
    actions: ACTIONS,
  },
  details: {
    badge: { label: 'En développement' },
    title: 'Ce que le simulateur permettra',
    description:
      'Le simulateur est en cours de conception à partir de notre preuve de concept au Centre-Sablon (72 participations-jeunes, environ 6 000 $ de revenus) et du projet Par et Pour. Il visera à estimer, selon le nombre de jeunes animateurs, d’ateliers et de participants, la contribution potentielle aux dépenses de votre équipe : inscription, robot, matériel, mentorat et déplacements.',
  },
};
