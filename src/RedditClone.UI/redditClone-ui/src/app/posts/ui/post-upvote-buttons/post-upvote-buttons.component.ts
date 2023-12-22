import { Component, Input } from '@angular/core';
import { PostLayout } from '../../common/enums/post-layout';

@Component({
  selector: 'post-upvote-buttons',
  templateUrl: './post-upvote-buttons.component.html',
  styleUrls: ['./post-upvote-buttons.component.css']
})
export class PostUpvoteButtonsComponent {
  @Input() postLayout = PostLayout.Card;

  compactLayout = PostLayout.Compact;
}
