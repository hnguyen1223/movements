import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Feed, FeedService } from '@movements/shared/data-access/feed';
import { isNotNullish } from '@movements/shared/util/is-not-nullish';
import { urlValidator } from '@movements/shared/util/url-validator';
import { NzModalRef } from 'ng-zorro-antd/modal';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';

@Component({
  selector: 'movements-feed-add-popup',
  templateUrl: './feed-add-popup.component.html',
  styleUrls: ['./feed-add-popup.component.scss'],
})
export class FeedAddPopupComponent implements OnInit {
  url = new FormControl('', urlValidator);
  loadedFeed$: Observable<Feed | undefined>;
  status$ = this.url.statusChanges;
  constructor(private feedService: FeedService, private modal: NzModalRef) {
    this.loadedFeed$ = this.url.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter(isNotNullish),
      withLatestFrom(this.url.statusChanges),
      switchMap(([url, status]) => {
        if (status === 'VALID') {
          this.url.markAsPending();
          return this.feedService
            .loadFeed(url)
            .pipe(
              tap((feed) =>
                this.url.setErrors(feed ? null : { feedLoadError: true })
              )
            );
        } else return of(undefined);
      })
    );
  }

  ngOnInit(): void {}

  addFeed(feed: Feed) {
    if (feed) {
      this.feedService.addFeed(feed);
      this.modal.close();
    }
  }
}
