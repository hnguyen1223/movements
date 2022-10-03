import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtensionShellModule } from '@movements/extension/shell';
import { getAppConfigProvider } from '@movements/shared/util/app-config';

import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { isNotNullish } from '@movements/shared/util/is-not-nullish';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ExtensionShellModule,
    ...(environment.firebase
      ? [
          provideFirebaseApp(() => initializeApp(environment.firebase as any)),
          provideFunctions(() => getFunctions()),
        ]
      : []),
    HttpClientModule,
  ],
  providers: [getAppConfigProvider(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
