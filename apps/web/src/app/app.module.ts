import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { persistenceServiceProvider } from '@movements/shared/data-access/persistence';
import { getAppConfigProvider } from '@movements/shared/util/app-config';
import { settingsServiceProvider } from '@movements/web/data-access/settings';

import { WebFeatureShellModule } from '@movements/web/feature/shell';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebFeatureShellModule],
  providers: [
    getAppConfigProvider(environment),
    persistenceServiceProvider,
    settingsServiceProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
