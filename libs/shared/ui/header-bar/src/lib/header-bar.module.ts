import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  headerBarControl,
  headerBarHeading,
  headerBarIcon,
  HeaderBarComponent,
} from './header-bar/header-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderBarComponent,
    headerBarIcon,
    headerBarHeading,
    headerBarControl,
  ],
  exports: [
    HeaderBarComponent,
    headerBarIcon,
    headerBarHeading,
    headerBarControl,
  ],
})
export class HeaderBarModule {}
