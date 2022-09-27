import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UriEncodePipe } from './uri-encode.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [UriEncodePipe],
  exports: [UriEncodePipe],
})
export class UriEncodeModule {}
