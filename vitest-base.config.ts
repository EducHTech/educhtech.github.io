import { defineConfig } from 'vitest/config';

/**
 * Configuration Vitest complémentaire, chargée par le builder Angular (angular.json > test > runnerConfig).
 * Ionic publie des modules ES que Node ne sait pas résoudre directement :
 * on demande à Vitest de les transformer lui-même.
 */
export default defineConfig({
  test: {
    server: {
      deps: {
        inline: ['@ionic/angular', '@ionic/core', 'ionicons'],
      },
    },
  },
});
