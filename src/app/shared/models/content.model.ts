import type { ImagePath } from '@app/shared/images/image-manifest';

/** Image du dossier public/images, avec son texte alternatif (obligatoire, WCAG). */
export interface ImageAsset {
  path: ImagePath;
  alt: string;
}

/** Couleur d'une pastille : cyan (défaut), rouge ou indigo. */
export type BadgeTone = 'cyan' | 'rouge' | 'indigo';

export interface Badge {
  label: string;
  tone?: BadgeTone;
}

/** Lien d'action : route interne, ancre de la page courante ou URL externe. */
export interface ActionLink {
  label: string;
  route?: string;
  fragment?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export interface Hero {
  badge: Badge;
  /** Début du titre. */
  title: string;
  /** Fin du titre, affichée en dégradé. */
  highlight?: string;
  subtitle: string;
  actions?: readonly ActionLink[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface FeatureCard {
  title: string;
  icon?: string;
  /** Ligne mise en valeur sous le titre (ex. un rôle). */
  subtitle?: string;
  text?: string;
  image?: ImageAsset;
}

export interface SectionHeader {
  badge?: Badge;
  title: string;
  description?: string;
}

export interface GalleryItem {
  image: ImageAsset;
  caption: string;
}

export interface Video {
  /** Identifiant YouTube (ex. M86jCFljZT4). */
  youtubeId: string;
  title: string;
  description: string;
}
