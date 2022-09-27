import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { RouterModule } from '@angular/router';
import { webFeatureFeedRoutes } from './web-feature-feed.routes';
import { HeaderBarModule } from 'libs/shared/ui/header-bar/src';
import { FeedItemListComponent } from 'libs/shared/feature/feed-item-list/src';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(webFeatureFeedRoutes),
    FeedItemListComponent,
    HeaderBarModule,
  ],
  declarations: [FeedComponent],
})
export class WebFeatureFeedModule {}
