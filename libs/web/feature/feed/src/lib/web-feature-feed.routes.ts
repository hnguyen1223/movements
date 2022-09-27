import { Route } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

export const webFeatureFeedRoutes: Route[] = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  {
    path: ':id',
    component: FeedComponent,
  },
];
