import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebFeatureShellModule } from '@movements/web/feature/shell';
import { getAppConfigProvider } from '@movements/shared/util/app-config';

import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebFeatureShellModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFunctions(() => getFunctions()),
  ],
  providers: [getAppConfigProvider(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
