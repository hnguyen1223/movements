import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { ResizableLayoutModule } from '@movements/shared/ui/resizable-layout';

@NgModule({
  imports: [
    CommonModule,
    NzMenuModule,
    RouterModule,
    NzIconModule,
    ResizableLayoutModule,
  ],
  declarations: [LayoutComponent, SideNavComponent],
})
export class WebFeatureLayoutModule {}
