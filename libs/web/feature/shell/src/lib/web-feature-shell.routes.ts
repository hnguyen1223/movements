import { Route } from '@angular/router';
import { LayoutComponent } from '@movements/web/feature/layout';

export const webFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: async () =>
          (await import('@movements/web/feature/home')).WebFeatureHomeModule,
      },
    ],
  },
];
