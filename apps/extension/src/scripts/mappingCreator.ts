// projects/dialer-component/src/app/compile.ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ExtensionMappingCreatorModule } from '@movements/extension/mapping-creator';
import { environment } from '../environments/environment';
import 'zone.js';

if (environment.production) {
  enableProdMode();
}
enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(ExtensionMappingCreatorModule)
  .catch((err) => console.log(err));
