import { Component, Input } from '@angular/core';

@Component({
  selector: 'UpvoteButtons',
  templateUrl: './post-upvote-buttons.component.html',
  styleUrls: ['./post-upvote-buttons.component.css']
})
export class PostUpvoteButtonsComponent {

  @Input() upvotes : number = 0;
  @Input() postId : number = 0;
}
