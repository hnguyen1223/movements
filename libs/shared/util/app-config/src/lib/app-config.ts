import { InjectionToken, ValueProvider } from '@angular/core';

export interface AppConfig {
  production: boolean;
  localStoragePrefix: string;
  firebase: { [key: string]: string };
}

export const APP_CONFIG = new InjectionToken<AppConfig>('App Config');

export const getAppConfigProvider = (config: AppConfig): ValueProvider => ({
  provide: APP_CONFIG,
  useValue: config,
});
