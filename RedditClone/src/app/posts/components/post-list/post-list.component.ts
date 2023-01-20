import { Component, Input } from '@angular/core';
import { Post } from '../../common/models/post';
import { PostListData } from '../../common/models/postListData';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'PostList',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
 
  posts : Post[] | undefined = undefined;
  @Input() set data(value : PostListData | null){
    if(value == null) return;

    this.postService.getPostsBySubreddit(value.communityId).subscribe(
      {
        next: (response) => this.posts = response,
        error: (error) => console.log(error),
        complete: () => console.log("Got posts!")
      }
    );
    
  };

  constructor(private postService: PostService){
  }


}
