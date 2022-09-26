import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);
import { RouterModule } from '@angular/router';
import { webFeatureShellRoutes } from './web-feature-shell.routes';
import { WebFeatureLayoutModule } from '@movements/web/feature/layout';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(webFeatureShellRoutes),
    WebFeatureLayoutModule
  ],
  exports: [RouterModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class WebFeatureShellModule {}
