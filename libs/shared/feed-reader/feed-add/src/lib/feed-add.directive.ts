import { Directive, HostListener } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FeedAddPopupComponent } from './feed-add-popup/feed-add-popup.component';

@Directive({
  selector: '[movementsFeedAdd]',
})
export class FeedAddDirective {
  constructor(private nzModal: NzModalService) {}

  @HostListener('click', ['$event'])
  onClick(event: any): void {
    event.stopPropagation();
    const modal = this.nzModal.create({
      nzTitle: 'Add Feed',
      nzContent: FeedAddPopupComponent,
      nzClosable: false,
      nzFooter: null
    });
  }
}
