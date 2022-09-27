import { Injectable } from '@angular/core';
import { PersistenceService } from '@movements/shared/data-access/persistence';
import { BehaviorSubject, from, map, Observable } from 'rxjs';
import { Feed, FeedItem } from './feed.model';

import { Functions, httpsCallable } from '@angular/fire/functions';
import { SAMPLE_FEEDS } from './feed.sample';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  feedSubject: BehaviorSubject<{ [key: string]: Feed }> = new BehaviorSubject(
    {}
  );
  constructor(
    private persistenceService: PersistenceService,
    private fns: Functions
  ) {
    this.feedSubject.next(persistenceService.getItem('feeds') ?? SAMPLE_FEEDS);
    this.persistenceService.setItem('feeds', this.feedSubject.getValue());
  }

  addFeed(feed: Feed) {
    this.feedSubject.next({
      ...this.feedSubject.getValue(),
      [feed.id]: {
        ...(this.feedSubject.getValue()[feed.id] ?? { isFavorite: false }),
        ...feed,
      },
    });
    console.log(feed);
    console.log(this.feedSubject.getValue());
  }
  removeFeed(id: string) {}

  getFeed(id: string): Observable<Feed> {
    return this.feedSubject.asObservable().pipe(
      map((feeds) => {
        if (id === 'all')
          return {
            id: 'All',
            title: 'All',
            description: 'By You <3',
            publishedOn: '',
            updatedOn: '',
            link: '',
            image: '',
            items: Object.values(feeds).reduce(
              (arr: FeedItem[], feed) => [...arr, ...feed.items],
              []
            ),
            isFavorite: false,
          };
        else if (feeds[id]) return feeds[id];
        else throw new Error('Feed Not Found');
      })
    );
  }
  getFavorites() {
    return this.feedSubject
      .asObservable()
      .pipe(
        map((feeds) => Object.values(feeds).filter((feed) => feed.isFavorite))
      );
  }

  getOthers() {
    return this.feedSubject
      .asObservable()
      .pipe(
        map((feeds) => Object.values(feeds).filter((feed) => !feed.isFavorite))
      );
  }

  getFeedItems(id: string): Observable<FeedItem[]> {
    return this.feedSubject.asObservable().pipe(
      map((feeds) => {
        if (feeds[id]) return feeds[id].items;
        else throw new Error('Feed Not Found');
      })
    );
    // if (this.feedSubject.getValue().find((f) => f.id))
    //   return this.feedSubject
    //     .asObservable()
    //     .pipe(map((feeds) => feeds.find((f) => f.id === id)!.items));
    // throw new Error('Feed Not Found');
  }

  refreshFeed(id: string) {
    if (id === 'all')
      Object.values(this.feedSubject.getValue()).forEach((feed) =>
        this.loadFeed(feed.link).subscribe((feed) => this.addFeed(feed))
      );
    else
      this.loadFeed(this.feedSubject.getValue()[id].link).subscribe((feed) =>
        this.addFeed(feed)
      );
    // console.log('refresh');
    // this.getFeed(id).pipe(switchMap((feed) => this.loadFeed(feed.id))),
    //   tap((feed: Feed) => this.addFeed(feed)),
    //   finalize(() => console.log('finally'));
  }

  loadFeed(link: string): Observable<Feed> {
    return from(httpsCallable(this.fns, 'getFeed')({ link })).pipe(
      // tap(console.log)
      map((result) => (result.data as any).feed as Feed)
    );
  }
}
