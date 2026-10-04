/**
 * Étapes après `ng build`, propres à l'hébergement GitHub Pages :
 *  1. 404.html     : copie de la page /404 pré-rendue (servie par GitHub Pages pour toute URL inconnue).
 *  2. <page>.html  : copie de <page>/index.html.
 *       - « /membres » est servie directement (GitHub Pages essaie <chemin>.html avant le dossier) ;
 *       - les anciennes URL du site statique (« /membres.html ») continuent de fonctionner :
 *         le routeur Angular les redirige ensuite vers « /membres » (voir legacy.routes.ts).
 *  3. sitemap.xml  : liste de toutes les pages pré-rendues.
 *
 * Les pages sont détectées automatiquement (dossiers contenant un index.html) :
 * rien à modifier ici quand on ajoute une page.
 */
import { copyFile, readdir, stat, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const SITE_URL = 'https://www.educhtech.org';
const DIST = resolve(import.meta.dirname, '..', 'dist', 'educhtech-site', 'browser');
const NOT_FOUND = '404';

const exists = (path) =>
  stat(path).then(
    () => true,
    () => false,
  );

const pages = [];
for (const entry of await readdir(DIST, { withFileTypes: true })) {
  if (entry.isDirectory() && (await exists(join(DIST, entry.name, 'index.html')))) {
    pages.push(entry.name);
  }
}
pages.sort();

// 1. Page 404
await copyFile(join(DIST, NOT_FOUND, 'index.html'), join(DIST, '404.html'));

// 2. <page>.html
const contentPages = pages.filter((page) => page !== NOT_FOUND);
for (const page of contentPages) {
  await copyFile(join(DIST, page, 'index.html'), join(DIST, `${page}.html`));
}

// 3. Plan du site
const urls = ['', ...contentPages].map((page) => `  <url><loc>${SITE_URL}/${page}</loc></url>`).join('\n');
await writeFile(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

console.warn(`postbuild : 404.html, ${contentPages.length} pages <page>.html, sitemap.xml (${contentPages.length + 1} URL).`);
