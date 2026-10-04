import type { ImagePath } from './image-manifest';
import { IMAGE_MANIFEST } from './image-manifest';

/** Chemin public d'une image (servie depuis public/images). */
export const imageSrc = (path: ImagePath): string => `/images/${path}`;

/** Dimensions intrinsèques, requises par NgOptimizedImage. */
export const imageSize = (path: ImagePath): { width: number; height: number } => IMAGE_MANIFEST[path];
