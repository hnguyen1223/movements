import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ResizableLayoutComponent,
  ResizableLayoutLeft,
  ResizableLayoutRight,
} from './resizable-layout/resizable-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ResizableLayoutComponent,
    ResizableLayoutLeft,
    ResizableLayoutRight,
  ],
  exports: [
    ResizableLayoutComponent,
    ResizableLayoutLeft,
    ResizableLayoutRight,
  ],
})
export class ResizableLayoutModule {}
