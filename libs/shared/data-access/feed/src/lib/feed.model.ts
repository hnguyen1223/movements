import { TrackByFunction } from '@angular/core';

export interface Feed extends CommonDetail {
  items: FeedItem[];
  isFavorite: boolean;
}

export interface FeedItem extends CommonDetail {
  author: string;
}

// export interface Media {
//   link: string;
//   type: string;
// }

// export enum MIMETYPE {}

export interface CommonDetail {
  id: string;
  link: string;
  image: string;
  title: string;
  description: string;
  publishedOn: string;
  updatedOn: string;
}

export const commonDetailTrackBy: TrackByFunction<CommonDetail> = (_, detail) => detail.id;
