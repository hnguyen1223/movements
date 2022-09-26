import { Injectable } from '@angular/core';
import { PersistenceService } from '@movements/shared/data-access/persistence';
import {
  BehaviorSubject,
  catchError,
  from,
  map,
  Observable,
  of,
  tap,
} from 'rxjs';
import { Feed } from './feed.model';

import { Functions, httpsCallable } from '@angular/fire/functions';
import { SAMPLE_FEEDS } from './feed.sample';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  feeds: Feed[] = [];

  feedSubject: BehaviorSubject<Feed[]> = new BehaviorSubject([] as Feed[]);
  constructor(
    private persistenceService: PersistenceService,
    private fns: Functions
  ) {
    this.feedSubject.next(persistenceService.getItem('feeds') ?? SAMPLE_FEEDS);
    this.persistenceService.setItem('feeds', this.feedSubject.getValue());
  }

  addFeed(feed: Feed) {
    this.feedSubject.next([...this.feedSubject.getValue(), feed]);
  }
  removeFeed(id: string) {}
  loadFeed(link: string): Observable<Feed | any> {
    return from(httpsCallable(this.fns, 'getFeed')({ link })).pipe(
      tap(console.log),
      catchError((err) => {
        console.log(err);
        return of(undefined);
      })
      // map((result) => parseFeedByDomParser(result.data))
    );
  }
  getFavorites() {
    return this.feedSubject
      .asObservable()
      .pipe(map((feeds) => feeds.filter((feed) => feed.isFavorite)));
  }

  getOthers() {
    return this.feedSubject
      .asObservable()
      .pipe(map((feeds) => feeds.filter((feed) => !feed.isFavorite)));
  }
}
