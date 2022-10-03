// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
  production: false,
  localStoragePrefix: 'ME',
  isWebApp: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
