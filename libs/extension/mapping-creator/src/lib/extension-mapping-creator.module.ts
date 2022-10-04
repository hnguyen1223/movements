import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MappingCreatorComponent } from './mapping-creator/mapping-creator.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [MappingCreatorComponent],
})
export class ExtensionMappingCreatorModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MappingCreatorComponent, {
      injector,
    });
    customElements.define('me-mapping-creator', customElement);
  }
  ngDoBootstrap(appRef: ApplicationRef) {
    //Empty
  }
}
