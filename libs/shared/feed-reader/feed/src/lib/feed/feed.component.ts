import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feed, FeedService } from '@movements/shared/data-access/feed';
import { map, Observable, Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'movements-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  feed$: Observable<Feed>;
  unsub$: Subject<void> = new Subject();
  constructor(private feedService: FeedService, private route: ActivatedRoute) {
    this.feed$ = route.params.pipe(
      switchMap((params) => {
        feedService.refreshFeed(decodeURIComponent(params?.['id']));
        return feedService.getFeed(decodeURIComponent(params?.['id']));
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
