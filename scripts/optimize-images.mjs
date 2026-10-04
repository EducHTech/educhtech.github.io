/**
 * Optimise les images du site et régénère le manifeste des dimensions.
 *
 * Usage :
 *   npm run optimize:images                  -> régénère seulement le manifeste
 *   npm run optimize:images -- <dossier>     -> convertit les images de <dossier>
 *                                               vers public/images, puis régénère le manifeste
 *
 * - JPG/PNG -> WebP (qualité 80), largeur max 1600 px (jamais agrandies).
 * - SVG copiés tels quels.
 * - Noms de fichiers en minuscules (GitHub Pages est sensible à la casse).
 * - Le manifeste (src/app/shared/images/image-manifest.ts) donne largeur/hauteur
 *   de chaque image, utilisées par NgOptimizedImage pour éviter les décalages de mise en page.
 */
import { copyFile, mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import sharp from 'sharp';

const ROOT = resolve(import.meta.dirname, '..');
const PUBLIC_IMAGES = join(ROOT, 'public', 'images');
const MANIFEST = join(ROOT, 'src', 'app', 'shared', 'images', 'image-manifest.ts');
const MAX_WIDTH = 1600;
const RASTER = new Set(['.jpg', '.jpeg', '.png']);
const KNOWN = new Set([...RASTER, '.webp', '.svg']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const toPosix = (p) => p.replaceAll(sep, '/');

async function convert(srcDir) {
  for await (const file of walk(srcDir)) {
    const ext = extname(file).toLowerCase();
    if (!KNOWN.has(ext)) continue;
    const rel = toPosix(relative(srcDir, file)).toLowerCase();
    const out = join(PUBLIC_IMAGES, RASTER.has(ext) ? rel.replace(/\.(jpe?g|png)$/, '.webp') : rel);
    await mkdir(dirname(out), { recursive: true });
    if (RASTER.has(ext)) {
      await sharp(file)
        .rotate()
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(out);
    } else {
      await copyFile(file, out);
    }
    const { size } = await stat(out);
    console.warn(`✔ ${rel} -> ${toPosix(relative(ROOT, out))} (${Math.round(size / 1024)} Ko)`);
  }
}

async function writeManifest() {
  const entries = [];
  for await (const file of walk(PUBLIC_IMAGES)) {
    if (!KNOWN.has(extname(file).toLowerCase())) continue;
    const { width, height } = await sharp(file).metadata();
    entries.push([toPosix(relative(PUBLIC_IMAGES, file)), width, height]);
  }
  entries.sort(([a], [b]) => a.localeCompare(b));
  const body = entries.map(([p, w, h]) => `  '${p}': { width: ${w}, height: ${h} },`).join('\n');
  await mkdir(dirname(MANIFEST), { recursive: true });
  await writeFile(
    MANIFEST,
    `// Fichier généré par scripts/optimize-images.mjs — ne pas modifier à la main.\n` +
      `export const IMAGE_MANIFEST = {\n${body}\n} as const satisfies Record<string, { width: number; height: number }>;\n\n` +
      `export type ImagePath = keyof typeof IMAGE_MANIFEST;\n`,
  );
  console.warn(`Manifeste : ${entries.length} images.`);
}

const srcDir = process.argv[2];
if (srcDir) await convert(resolve(srcDir));
await writeManifest();
