import type { ImagePath } from '@app/shared/images/image-manifest';

/** Métadonnées SEO déclarées dans `data.seo` de chaque route. */
export interface PageSeo {
  description: string;
  /** Image de partage (Open Graph). Par défaut : marque/og-image.jpg */
  image?: ImagePath;
}
