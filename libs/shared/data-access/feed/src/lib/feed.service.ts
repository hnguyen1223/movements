import { Injectable } from '@angular/core';
import { PersistenceService } from '@movements/shared/data-access/persistence';
import { BehaviorSubject, catchError, from, map, Observable, of } from 'rxjs';
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

  /**
   * Add a fully loaded feed
   * @param feed fully loaded feed
   */
  addFeed(feed: Feed) {
    this.feedSubject.next({
      ...this.feedSubject.getValue(),
      [feed.id]: {
        ...(this.feedSubject.getValue()[feed.id] ?? { isFavorite: false }),
        ...feed,
      },
    });
    this.persistenceService.setItem('feeds', this.feedSubject.getValue());
  }
  removeFeed(id: string) {}

  getFeed(id: string): Observable<Feed> {
    return this.feedSubject.asObservable().pipe(
      map((feeds) => {
        if (id === 'all') return this.getFeedAll(Object.values(feeds));
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

  // getFeedItems(id: string): Observable<FeedItem[]> {
  //   return this.feedSubject.asObservable().pipe(
  //     map((feeds) => {
  //       if (feeds[id]) return feeds[id].items;
  //       else throw new Error('Feed Not Found');
  //     })
  //   );
  //   // if (this.feedSubject.getValue().find((f) => f.id))
  //   //   return this.feedSubject
  //   //     .asObservable()
  //   //     .pipe(map((feeds) => feeds.find((f) => f.id === id)!.items));
  //   // throw new Error('Feed Not Found');
  // }

  /**
   * Refresh existing feed by id
   * @param id
   */
  refreshFeed(id: string) {
    const feedUrls =
      id === 'all'
        ? Object.values(this.feedSubject.getValue()).map((feed) => feed.link)
        : this.feedSubject.getValue()[id]
        ? [this.feedSubject.getValue()[id].link]
        : [];
    feedUrls.forEach((url) =>
      this.loadFeed(url).subscribe((feed) => {
        if (feed) this.addFeed(feed);
      })
    );
    // if (id === 'all')
    //   Object.values(this.feedSubject.getValue()).forEach((feed) =>
    //     this.loadFeed(feed.link).subscribe((feed) => {
    //       if (feed) this.addFeed(feed);
    //     })
    //   );
    // else if (this.feedSubject.getValue()[id])
    //   this.loadFeed(this.feedSubject.getValue()[id].link).subscribe((feed) =>
    //     this.addFeed(feed)
    //   );
    // else throw new Error('Feed Not Found');
  }

  /**
   * Load feed from url
   * @param link url to feed
   * @returns
   */
  loadFeed(link: string): Observable<Feed | undefined> {
    return from(httpsCallable(this.fns, 'getFeed')({ link })).pipe(
      map((result) => (result.data as any).feed as Feed),
      catchError((_) => of(undefined))
    );
  }

  private getFeedAll(feeds: Feed[]): Feed {
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
  }
}
