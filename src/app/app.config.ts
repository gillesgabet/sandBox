import { ApplicationConfig } from '@angular/core';
import { ROUTES, Routes, provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  //providers: [provideRouter(ROUTES), provideClientHydration(), provideAnimationsAsync('noop')]
  providers: [provideRouter(appRoutes), provideClientHydration(), provideAnimationsAsync('noop')]
};
