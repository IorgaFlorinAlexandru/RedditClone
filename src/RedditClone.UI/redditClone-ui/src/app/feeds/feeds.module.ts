import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { AboutFeedComponent } from './ui/about-feed/about-feed.component';
import { PostsModule } from '../posts/posts.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FeedPageComponent,
    AboutFeedComponent
  ],
  imports: [
    CommonModule,
    FeedsRoutingModule,
    PostsModule,
    RouterModule
  ]
})
export class FeedsModule { }
