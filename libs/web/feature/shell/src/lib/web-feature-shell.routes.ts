import { Route } from '@angular/router';
import { LayoutComponent } from '@movements/web/feature/layout';

export const webFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
      {
        path: 'feed',
        loadChildren: async () =>
          (await import('@movements/web/feature/feed')).WebFeatureFeedModule,
      },
    ],
  },
];
