import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './ui/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostUpvoteButtonsComponent } from './components/post-upvote-buttons/post-upvote-buttons.component';
import { PostButtonsComponent } from './components/post-buttons/post-buttons.component';
import { PostPageComponent } from './ui/post-page/post-page.component';
import { CreatePostComponent } from './components/create-post/create-post.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
    PostUpvoteButtonsComponent,
    PostButtonsComponent,
    PostPageComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  exports : [
    PostListComponent
  ]
})
export class PostsModule { }
