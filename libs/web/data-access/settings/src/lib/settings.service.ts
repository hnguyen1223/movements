import { Injectable } from '@angular/core';
import { PersistenceService } from '@movements/shared/data-access/persistence';
import { DEFAULT_SETTINGS, Settings } from './settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  SETTINGS_PREFIX = 'SETTINGS_';
  settings = DEFAULT_SETTINGS;
  constructor(private persistenceService: PersistenceService) {
    this.loadSettings();
  }

  private loadSettings() {
    Object.keys(this.settings).forEach(
      (key) =>
        (this.settings[key as keyof Settings] =
          this.persistenceService.getItem(this.SETTINGS_PREFIX + key) ??
          this.settings[key as keyof Settings])
    );
  }

  persistSettings() {
    Object.keys(this.settings).forEach((key) =>
      this.persistenceService.setItem(
        this.SETTINGS_PREFIX + key,
        this.settings[key as keyof Settings]
      )
    );
  }

  set(key: keyof Settings, value: any) {
    this.settings[key] = value;
    this.persistenceService.setItem(this.SETTINGS_PREFIX + key, value);
  }

  get(key: keyof Settings) {
    return this.settings[key];
  }
}
