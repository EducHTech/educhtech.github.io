import { youtubeEmbedUrl } from '@app/shared/components/embed-frame/embed-frame.component';
import type { FeatureCard, GalleryItem, Hero, ImageAsset, SectionHeader, Video } from '@app/shared/models/content.model';

/** Ancres de la page, utilisées par les boutons du haut. */
export const ANCRES = { robotique: 'robotique', moments: 'moments' } as const;

export const LOGO_DRAGONS: ImageAsset = { path: 'dragons/logo-dragons.svg', alt: 'Logo Les Dragons' };

export const HERO: Hero = {
  badge: { label: 'Saison 2025-2026 · Décoder', tone: 'rouge' },
  title: 'Les Dragons de l’école secondaire',
  highlight: 'Jeanne-Mance',
  subtitle:
    'Une année pour apprendre, construire, participer à des compétitions et grandir ensemble autour de la robotique.',
  actions: [
    { label: 'Découvrir notre saison', fragment: ANCRES.robotique },
    { label: 'Voir nos moments', fragment: ANCRES.moments, variant: 'secondary' },
  ],
};

export const ANNEE = {
  header: {
    badge: { label: 'Notre année' },
    title: 'Une saison de continuité chez les Dragons',
    description: 'L’équipe de robotique Les Dragons participe à plusieurs compétitions de robotique, dont FTC et FRC.',
  } satisfies SectionHeader,
  paragraphs: [
    'Ces compétitions nous permettent de développer des habiletés en programmation, en mécanique, en modélisation 3D et en travail d’équipe. Chaque année, un nouveau défi est révélé et c’est à nous, les jeunes, de fabriquer un robot de A à Z avec l’aide de nos mentors et des anciens membres de l’équipe.',
    'Durant la saison 2025-2026 Décoder, les Dragons étaient principalement composés de recrues, c’est-à-dire des apprentis roboticiens. Les anciens membres de l’équipe, soutenus par les mentors, les ont formées tout au long de la saison sur la modélisation 3D, la mécanique du robot et la programmation. Nous avons prototypé de nouveaux concepts pour résoudre le défi de l’année. Nous sommes ensuite allés à la compétition FTC régionale, où nous avons reçu le prix de la sensibilisation. Une fois l’équipe pleinement formée, nous nous sommes attaqués à la compétition FRC et avons remporté le prix Étoile montante. Nous sommes très fier·ères de cette année de continuité chez les Dragons !',
  ],
  image: { path: 'dragons/frc1.webp', alt: 'Les Dragons avec leur robot à la compétition FRC' } satisfies ImageAsset,
};

export const ROBOTIQUE: SectionHeader = {
  badge: { label: 'Robotique', tone: 'indigo' },
  title: 'Du prototype au terrain',
  description:
    'Nous avons appris en faisant : imaginer un système, le prototyper, le tester, puis l’améliorer jusqu’à ce qu’il fonctionne vraiment.',
};

export const ROBOTIQUE_CARDS: readonly FeatureCard[] = [
  {
    icon: '⚙️',
    title: 'Le robot',
    text: 'Nous avons appris la modélisation 3D, la mécanique et la programmation en construisant notre robot pour relever le défi de l’année.',
  },
  {
    icon: '🏁',
    title: 'Les compétitions',
    text: 'En mécanique, en programmation et devant les juges, FTC et FRC nous ont permis de mettre en pratique ce que nous avions appris.',
  },
  {
    icon: '🛠️',
    title: 'Le prototypage',
    text: 'Ramasseur, lanceur et autres systèmes : nous avons prototypé de nouvelles idées pour résoudre le défi de l’année.',
  },
];

export const ESPRIT_EQUIPE = {
  header: {
    badge: { label: 'Esprit d’équipe', tone: 'rouge' },
    title: 'Les Dragons, c’est une grande famille',
    description:
      'La robotique ne se résume pas au robot. Nous avons aussi pris le temps de nous retrouver, de nous entraider et de créer des souvenirs pendant toute la saison.',
  } satisfies SectionHeader,
  paragraphs: [
    'Au programme : tournage de la vidéo de recrutement et partage avec les classes, kiosque aux portes ouvertes, ateliers avec les recrues, 5 à 7, Créativité Québec, Par et Pour en janvier, rencontre amicale et vidéos d’animation avec Ibrahim.',
    'Nous avons aussi partagé des soupers d’Halloween et de Noël, un souper avec les Spartiates, des jeux de société et une activité de Saint-Valentin avec des churros. Nous avons également participé au camp de jour de l’été.',
  ],
  image: { path: 'dragons/meet.webp', alt: 'Les membres des Dragons lors d’une activité d’équipe' } satisfies ImageAsset,
  events: ['Recrutement', 'Portes ouvertes', '5 à 7', 'Par et Pour', 'Soupers', 'Camp de jour', 'Bôsapin'],
};

export const FINANCEMENT = {
  header: {
    badge: { label: 'Financement et transmission' },
    title: 'Des projets par et pour les jeunes',
    description:
      'Pour faire vivre nos projets, nous avons aussi dû trouver du financement pour nos activités et nos compétitions.',
  } satisfies SectionHeader,
  paragraphs: [
    'Pour la deuxième année de suite, nous avons vendu des sapins de Noël en collaboration avec Bôsapin. Nous avons aussi participé à un appel à projets de la Ville de Montréal pour notre projet d’ateliers de robotique.',
    'Notre projet consiste à offrir des ateliers de robotique dans des maisons de jeunes, par et pour les jeunes. Le projet nous permet de transmettre nos connaissances en robotique à d’autres jeunes.',
    'Les bourses Best Buy et le soutien de nos partenaires nous aident aussi à poursuivre nos projets et notre saison de robotique.',
  ],
  image: { path: 'dragons/ppcj.webp', alt: 'Atelier de robotique Par et Pour avec les jeunes' } satisfies ImageAsset,
};

export const GALERIE: SectionHeader = {
  badge: { label: 'Une saison en images', tone: 'indigo' },
  title: 'Notre saison en quelques moments',
  description:
    'Voici quelques moments de notre année 2025-2026, entre compétitions, prototypage et activités d’équipe.',
};

export const GALERIE_ITEMS: readonly GalleryItem[] = [
  { image: { path: 'dragons/ftc.webp', alt: 'Les Dragons à la compétition FTC' }, caption: 'Compétition FTC' },
  { image: { path: 'dragons/frc2.webp', alt: 'Le robot des Dragons à une compétition FRC' }, caption: 'Compétition FRC' },
  { image: { path: 'dragons/frc3.webp', alt: 'L’équipe des Dragons à une compétition FRC' }, caption: 'Les Dragons en FRC' },
  { image: { path: 'dragons/crea1.webp', alt: 'Les Dragons à Créativité Québec' }, caption: 'Créativité Québec' },
  { image: { path: 'dragons/souper.webp', alt: 'Souper de l’équipe des Dragons' }, caption: 'Activités d’équipe' },
  {
    image: { path: 'dragons/st-valentin.webp', alt: 'Activité de Saint-Valentin des Dragons' },
    caption: 'Saint-Valentin et churros',
  },
];

export const MOT_DE_LA_FIN =
  'Nous sommes très fier·ères de cette année de continuité chez les Dragons. Merci à nos mentors, à nos partenaires, à nos familles et à toutes les personnes qui nous ont accompagnés pendant la saison.';

export const VIDEOS_HEADER: SectionHeader = {
  badge: { label: 'Vidéos de la saison' },
  title: 'Nos projets et nos prix en images',
  description: 'Découvrez quelques-unes des vidéos réalisées pendant la saison.',
};

export const VIDEOS: readonly (Video & { url: string })[] = [
  {
    youtubeId: 'M86jCFljZT4',
    title: 'Bourse Best Buy',
    description: 'Notre vidéo réalisée dans le cadre de la candidature à la bourse Best Buy.',
  },
  {
    youtubeId: 'DtTEvwo_tFM',
    title: 'Vidéo d’animation sécurité',
    description: 'Une vidéo d’animation réalisée par Ibrahim autour de la sécurité de l’équipe.',
  },
].map((video) => ({ ...video, url: youtubeEmbedUrl(video.youtubeId) }));
