import { AppConfig } from '@movements/shared/util/app-config';

export const environment: AppConfig = {
  firebase: {
    projectId: 'movements-1223',
    appId: '1:747905006296:web:9c0f0e233d8f039c2df5ad',
    storageBucket: 'movements-1223.appspot.com',
    locationId: 'us-west2',
    apiKey: 'AIzaSyC2ZKZNV-ohqA48SmLAdYJuvbMmCWr-uW8',
    authDomain: 'movements-1223.firebaseapp.com',
    // messagingSenderId: '747905006296',
  },
  production: true,
  localStoragePrefix: 'MW',
};
