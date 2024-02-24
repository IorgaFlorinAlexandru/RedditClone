import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { PostComponent } from './components/post/post.component';
import { PostUpvoteButtonsComponent } from './ui/post-upvote-buttons/post-upvote-buttons.component';
import { PostButtonsComponent } from './ui/post-buttons/post-buttons.component';
import { TrendingBarComponent } from './components/trending-bar/trending-bar.component';
import { DropdownMenuModule } from '../shared/modules/dropdown-menu/dropdown-menu.module';
import { CreatePostBarComponent } from './ui/create-post-bar/create-post-bar.component';
import { PostCardComponent } from './ui/post-card/post-card.component';
import { PostClassicComponent } from './ui/post-classic/post-classic.component';
import { PostCompactComponent } from './ui/post-compact/post-compact.component';
import { AppIconModule } from '../shared/modules/app-icon/app-icon.module';
import { StoreModule } from '@ngrx/store';
import { postsReducer, postsStateFeatureKey } from './state/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/posts.effects';
import { SkeletonPostCardComponent } from './ui/skeleton-post-card/skeleton-post-card.component';
import { SkeletonPostClassicComponent } from './ui/skeleton-post-classic/skeleton-post-classic.component';
import { SkeletonPostCompactComponent } from './ui/skeleton-post-compact/skeleton-post-compact.component';
import { SharedModule } from '../shared/shared.module';
import { DefaultCommunityIconComponent } from '../shared/components/default-community-icon/default-community-icon.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostPageComponent,
    PostUpvoteButtonsComponent,
    PostButtonsComponent,
    PostComponent,
    TrendingBarComponent,
    CreatePostBarComponent,
    PostCardComponent,
    PostClassicComponent,
    PostCompactComponent,
    SkeletonPostCardComponent,
    SkeletonPostClassicComponent,
    SkeletonPostCompactComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    DropdownMenuModule,
    AppIconModule,
    HttpClientModule,
    StoreModule.forFeature(postsStateFeatureKey,postsReducer),
    EffectsModule.forFeature(PostsEffects),
    SharedModule,
    DefaultCommunityIconComponent
  ],
  exports: [
    PostListComponent
  ]
})
export class PostsModule { }
