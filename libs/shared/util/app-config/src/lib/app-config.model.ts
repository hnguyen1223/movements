export interface AppConfig {
  production: boolean;
  localStoragePrefix: string;
  firebase: { [key: string]: string };
}
