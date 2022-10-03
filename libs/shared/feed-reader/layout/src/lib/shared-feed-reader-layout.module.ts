import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { ResizableLayoutModule } from '@movements/shared/ui/resizable-layout';
import { SideNavBottomComponent } from './side-nav-bottom/side-nav-bottom.component';
import { UriEncodeModule } from '@movements/shared/util/uri-encode';
import { HeaderBarModule } from '@movements/shared/ui/header-bar';
import { SharedFeedReaderFeedAddModule } from '@movements/shared-feed-reader-feed-add';

@NgModule({
  imports: [
    CommonModule,
    NzMenuModule,
    RouterModule,
    NzIconModule,
    NzButtonModule,
    SharedFeedReaderFeedAddModule,
    ResizableLayoutModule,
    HeaderBarModule,
    UriEncodeModule,
  ],
  declarations: [LayoutComponent, SideNavComponent, SideNavBottomComponent],
})
export class SharedFeedReaderLayoutModule {}
