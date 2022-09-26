import { FactoryProvider, Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from '@movements/shared/util/app-config';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  prefix = '';
  constructor(@Inject(APP_CONFIG) appConfig: AppConfig) {
    this.prefix = appConfig.localStoragePrefix + '_';
  }

  setItem(key: string, value: any) {
    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(value));
    } catch (e) {
      localStorage.setItem(this.prefix + key, value);
    }
  }

  getItem(key: string): any {
    const value = localStorage.getItem(this.prefix + key);
    try {
      return JSON.parse(value as any);
    } catch (e) {
      return value;
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(this.prefix + key);
  }
}

const persistenceServiceFactory = (appConfig: AppConfig) =>
  new PersistenceService(appConfig);

export const persistenceServiceProvider: FactoryProvider = {
  provide: PersistenceService,
  useFactory: persistenceServiceFactory,
  deps: [APP_CONFIG],
};
