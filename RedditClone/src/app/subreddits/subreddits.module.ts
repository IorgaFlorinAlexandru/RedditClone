import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubredditPageComponent } from './ui/subreddit-page/subreddit-page.component';
import { PostsModule } from '../posts/posts.module';
import { SubredditHeaderComponent } from './ui/subreddit-header/subreddit-header.component';
import { SubredditJoinButtonComponent } from './components/subreddit-join-button/subreddit-join-button.component';
import { CreateSubredditComponent } from './components/create-subreddit/create-subreddit.component';
import { AboutSubredditComponent } from './ui/about-subreddit/about-subreddit.component';
import { SubredditRulesComponent } from './ui/subreddit-rules/subreddit-rules.component';
import { SubredditModeratorsComponent } from './ui/subreddit-moderators/subreddit-moderators.component';



@NgModule({
  declarations: [
    SubredditPageComponent,
    SubredditHeaderComponent,
    SubredditJoinButtonComponent,
    CreateSubredditComponent,
    AboutSubredditComponent,
    SubredditRulesComponent,
    SubredditModeratorsComponent
  ],
  imports: [
    CommonModule,
    PostsModule
  ],
  exports: [
    SubredditPageComponent
  ]
})
export class SubredditsModule { }
