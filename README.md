# Site ÉducHTech — www.educhtech.org

Site vitrine d'ÉducHTech, construit avec **Ionic 8 + Angular 21 + TypeScript**, selon les mêmes conventions que [ÉducHTechApp](../../ÉducHTechApp). Toutes les pages sont **pré-rendues en HTML statique** au build, puis hébergées sur **GitHub Pages**.

## Démarrer

```bash
npm install
npm start            # serveur de développement : http://localhost:4200
npm test             # tests unitaires (Vitest)
npm run lint         # ESLint (mêmes règles qu'ÉducHTechApp)
npm run build        # build de production + pré-rendu -> dist/educhtech-site/browser
npm run serve:dist   # sert le build localement : http://localhost:8080
```

Node 22 ou plus récent.

**Sur un autre ordinateur Windows :** cloner le dépôt, puis double-cliquer sur `demarrer.bat`. Il installe les dépendances au premier lancement et ouvre le site dans le navigateur.

**Sans rien installer (Windows) :** copier le dossier `site-statique/` sur l'ordinateur et double-cliquer sur `ouvrir-site.bat`. Un petit serveur PowerShell (inclus dans Windows) sert le site pré-rendu sur http://localhost:8080. Après une modification du site, régénérer ce dossier avec `npm run export:statique`.

## Structure

```
public/                      Fichiers copiés tels quels : CNAME, robots.txt, favicons, images/ (WebP), documents/
scripts/
  optimize-images.mjs        Convertit les photos en WebP et régénère le manifeste des images
  postbuild.mjs              404.html, <page>.html (anciennes URL) et sitemap.xml
src/
  styles.scss                Styles globaux : Ionic + thème
  theme/                     _variables.scss (palette ÉducHTech, couleurs Ionic), _breakpoints.scss, _utilities.scss
  app/
    app.config.ts            Fournisseurs : Ionic, routeur, SEO, zoneless
    app.routes.ts            Assemble les routes de chaque fonctionnalité
    core/
      layout/                En-tête, menu mobile, pied de page, gabarit de page (page-layout)
      navigation/            paths.ts (chemins), navigation.data.ts (menu + pied de page), legacy.routes.ts
      seo/                   Titre, description, URL canonique, Open Graph
      scroll/                Défilement vers les ancres dans <ion-content>
    shared/
      components/            Blocs réutilisables : hero, section, card-grid, split-layout, carousel, gallery…
      models/                Types du contenu (Hero, FeatureCard, ImageAsset…)
      images/                Manifeste des images (généré) et utilitaires
    features/
      accueil/  organisation/  plateformes/  activites/  dragons/  not-found/
        <fonctionnalité>.routes.ts   Routes : titre, description SEO, page chargée à la demande
        data/*.data.ts               TOUT le texte des pages
        pages/<page>/                Composants de page (*.page.ts), qui ne font qu'assembler les blocs partagés
```

**Principe :** les textes sont dans les fichiers `data/*.data.ts`, la mise en forme dans les composants `shared/`. Pour modifier un texte, on ne touche qu'au fichier `data`.

## Tâches courantes

### Modifier un texte
Ouvrir le fichier `src/app/features/<fonctionnalité>/data/<page>.data.ts` correspondant.

### Ajouter une image
1. Mettre la photo d'origine (JPG/PNG) dans un dossier temporaire, rangée dans le sous-dossier voulu (ex. `tmp/dragons/robot.jpg`).
2. `npm run optimize:images -- tmp` : crée `public/images/dragons/robot.webp` et met à jour le manifeste.
3. L'utiliser dans un fichier `data` : `{ path: 'dragons/robot.webp', alt: 'Description de l'image' }`. Le chemin est vérifié par TypeScript.

Ne pas versionner les originaux (le dossier temporaire).

### Ajouter une page
1. Ajouter son chemin dans `core/navigation/paths.ts`.
2. Créer `features/<fonctionnalité>/data/<page>.data.ts` et `pages/<page>/<page>.page.ts|html` (s'inspirer d'une page existante).
3. Déclarer la route dans `<fonctionnalité>.routes.ts` (avec `title` et `data.seo.description`).
4. Ajouter le lien dans `core/navigation/navigation.data.ts`.

Les tests vérifient que chaque page a un H1, un titre et une description, et qu'elle figure dans le menu. Le pré-rendu, la copie `<page>.html` et le sitemap sont automatiques.

## Conventions

Les conventions sont les mêmes que dans ÉducHTechApp (voir `.github/instructions/angular-instruction.instructions.md`) :
- Composants standalone, `ChangeDetectionStrategy.OnPush`, `input()` / `output()`, `inject()`, signals.
- Templates avec `@if` / `@for`. Images avec `NgOptimizedImage` (via `<app-image>`).
- Composants Ionic importés depuis `@ionic/angular/standalone`.
- Préfixe `app-`, un dossier par composant. Pages en `*.page.ts`, composants en `*.component.ts`.
- Accessibilité WCAG AA : `alt` obligatoire, contrastes, navigation au clavier.

## Déploiement

Le workflow `.github/workflows/deploy.yml` lance le lint, les tests et le build à chaque push et pull request. Sur `master`, il publie `dist/educhtech-site/browser` sur GitHub Pages.

**Configuration requise, une seule fois :** dans GitHub → *Settings → Pages → Build and deployment → Source*, choisir **GitHub Actions**. Le domaine `www.educhtech.org` vient du fichier `public/CNAME`.

### URL
- Les pages sont servies à `/membres`, `/les-dragons`, etc.
- Les anciennes URL (`/membres.html`, …) fonctionnent toujours : elles affichent la page, puis le routeur remplace l'adresse par la nouvelle.
- Une URL inconnue affiche `404.html`.
