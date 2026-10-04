import type { ApplicationConfig } from '@angular/core';
import { importProvidersFrom, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { IonicServerModule } from '@ionic/angular-server';

import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes)), importProvidersFrom(IonicServerModule)],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
