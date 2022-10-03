import { Component, OnInit } from '@angular/core';
import {
  Feed,
  FeedService,
  commonDetailTrackBy,
} from '@movements/shared/data-access/feed';
import { Observable } from 'rxjs';

@Component({
  selector: 'movements-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  trackByFn = commonDetailTrackBy;
  favorites$: Observable<Feed[]>;
  others$: Observable<Feed[]>;
  constructor(private feedService: FeedService) {
    this.favorites$ = feedService.getFavorites();
    this.others$ = feedService.getOthers();
  }

  ngOnInit(): void {}
}
