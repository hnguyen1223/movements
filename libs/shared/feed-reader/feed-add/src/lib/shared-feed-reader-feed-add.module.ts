import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedAddDirective } from './feed-add.directive';
import { FeedAddPopupComponent } from './feed-add-popup/feed-add-popup.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

@NgModule({
  imports: [
    CommonModule,
    NzModalModule,
    NzInputModule,
    NzCardModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzAutocompleteModule
  ],
  declarations: [FeedAddDirective, FeedAddPopupComponent],
  exports: [FeedAddDirective],
})
export class SharedFeedReaderFeedAddModule {}
