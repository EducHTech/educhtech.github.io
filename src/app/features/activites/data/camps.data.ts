import { PATHS, link } from '@app/core/navigation/paths';
import type { ActionLink, FeatureCard, Hero, ImageAsset, Metric, SectionHeader } from '@app/shared/models/content.model';

export const HERO: Hero = {
  badge: { label: 'Programme Pédagogique Clé-en-main', tone: 'indigo' },
  title: 'Camps & Ateliers :',
  highlight: 'Apprendre en créant',
  subtitle:
    'Une formule testée sur le terrain pour initier les jeunes de 6 à 12 ans aux STIM, animée par des étudiants des Dragons et accompagnée par des mentors expérimentés.',
};

export const PARCOURS: SectionHeader = {
  badge: { label: 'Notre Parcours en 4 Étapes' },
  title: 'Une semaine intensive et passionnante',
  description: 'Chaque participant explore l’ensemble du cycle de développement d’un système robotique.',
};

export const PARCOURS_CARDS: readonly FeatureCard[] = [
  {
    image: { path: 'camp/cad.webp', alt: 'Jeune qui conçoit une pièce de robot en 3D' },
    title: '1. Conception CAD 3D',
    text: 'Introduction à la modélisation 3D (OnShape) et aux principes de conception mécanique et de structure.',
  },
  {
    image: { path: 'camp/assemblage.webp', alt: 'Jeunes qui assemblent un robot pendant un atelier' },
    title: '2. Assemblage & Montage',
    text: 'Construction physique du châssis, intégration des moteurs, engrenages, capteurs et câblage des sous-systèmes.',
  },
  {
    image: { path: 'camp/prog.webp', alt: 'Programmation d’un robot pendant l’atelier' },
    title: '3. Programmation',
    text: 'Initiation à la programmation, aux routines autonomes et au contrôle à distance par manette, avec les outils disponibles dans le contexte de l’activité.',
  },
  {
    image: { path: 'camp/compe.webp', alt: 'Mini-compétition de robotique en fin d’atelier' },
    title: '4. Mini-Compétition',
    text: 'Tournoi amical sur le terrain Mini-FTC pour tester les stratégies, collaborer et célébrer les réussites de la semaine.',
  },
];

export const CENTRE_SABLON = {
  header: {
    badge: { label: 'Preuve Commerciale Terrain', tone: 'rouge' },
    title: 'Succès du Camp Centre-Sablon (Été 2026)',
    description:
      'À l’été 2026, Les Dragons et ÉducHTech ont fourni les activités de robotique du camp de jour du Centre-Sablon à Montréal.',
  } satisfies SectionHeader,
  metrics: [
    {
      value: '72 participants',
      label: '3 semaines d’activités, avec 24 jeunes par semaine, soit 72 participations-jeunes.',
    },
    {
      value: '6 000 $ générés',
      label:
        'Une preuve de capacité à produire, animer et commercialiser des activités éducatives; l’autofinancement complet reste à démontrer.',
    },
  ] satisfies Metric[],
  image: { path: 'camp/sablon.webp', alt: 'Jeunes qui assemblent un robot pendant le camp de robotique' } satisfies ImageAsset,
};

export const RESERVATION = {
  header: {
    title: 'Organisez un atelier ou un camp dans votre établissement',
    description:
      'Nous pouvons structurer une activité avec du matériel existant, des étudiants animateurs et l’accompagnement de mentors. Contactez-nous pour discuter d’un projet scolaire ou estival.',
  } satisfies SectionHeader,
  links: [{ label: 'Faire une demande de réservation', route: link(PATHS.contact) }] satisfies ActionLink[],
  image: { path: 'camp/theo.webp', alt: 'Jeune participant fier de son atelier de robotique' } satisfies ImageAsset,
};
