import { InjectionToken, ValueProvider } from '@angular/core';
import { AppConfig } from './app-config.model';

export const APP_CONFIG = new InjectionToken<AppConfig>('App Config');

export const getAppConfigProvider = (config: AppConfig): ValueProvider => ({
  provide: APP_CONFIG,
  useValue: config,
});
