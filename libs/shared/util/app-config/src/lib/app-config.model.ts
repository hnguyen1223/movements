export interface AppConfig {
  production: boolean;
  localStoragePrefix: string;
  isWebApp: boolean;
  firebase?: { [key: string]: string };
}
