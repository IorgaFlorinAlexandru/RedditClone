import { Component } from '@angular/core';
import { Post } from '../../common/models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'PostList',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
 
  posts : Post[] = [];

  constructor(private postService: PostService){
    this.postService.getPosts().subscribe(
      {
        next: (response) => this.posts = response,
        error: (error) => console.log(error),
        complete: () => console.log("Got posts!")
      }
    );
  }


}
