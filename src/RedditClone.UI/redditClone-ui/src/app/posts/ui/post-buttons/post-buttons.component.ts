import { Component, Input } from '@angular/core';
import { Post } from '../../common/models/post.models';
import { PostLayout } from '../../common/enums/post-layout';

@Component({
  selector: 'post-buttons',
  templateUrl: './post-buttons.component.html',
  styleUrls: ['./post-buttons.component.css']
})
export class PostButtonsComponent {
  @Input() post!: Post;
  @Input() layout: PostLayout = PostLayout.Card;

  COMPACT_LAYOUT = PostLayout.Compact;

  
}
