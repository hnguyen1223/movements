import { Route } from '@angular/router';
import { LayoutComponent } from '@movements/shared-feed-reader-layout';

export const extensionShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
      {
        path: 'feed',
        loadChildren: async () =>
          (await import('@movements/shared-feed-reader-feed'))
            .SharedFeedReaderFeedModule,
      },
    ],
  },
];
