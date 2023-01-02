import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './ui/post/post.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PostListComponent,
    PostComponent
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
