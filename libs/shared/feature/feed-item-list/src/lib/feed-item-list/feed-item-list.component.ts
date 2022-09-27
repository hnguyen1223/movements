import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import {
  commonDetailTrackBy,
  FeedItem,
} from '@movements/shared/data-access/feed';
import { LineClampDirective } from 'libs/shared/ui/line-clamp/src';

@Component({
  selector: 'movements-feed-item-list',
  standalone: true,
  imports: [
    CommonModule,
    NzListModule,
    NzButtonModule,
    LineClampDirective,
    NzImageModule,
  ],
  templateUrl: './feed-item-list.component.html',
  styleUrls: ['./feed-item-list.component.scss'],
})
export class FeedItemListComponent implements OnInit {
  @Input() items: FeedItem[] = [];
  trackByFn = commonDetailTrackBy;
  constructor() {}

  ngOnInit(): void {}
}
