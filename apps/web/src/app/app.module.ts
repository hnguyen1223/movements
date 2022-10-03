import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebShellModule } from '@movements/web-shell';
import { getAppConfigProvider } from '@movements/shared/util/app-config';

import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

import { AppComponent } from './app.component';
// import { isNotNullish } from '@movements/shared/util/is-not-nullish';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebShellModule,
    ...(environment.firebase
      ? [
          provideFirebaseApp(() => initializeApp(environment.firebase as any)),
          provideFunctions(() => getFunctions()),
        ]
      : []),
  ],
  providers: [getAppConfigProvider(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
