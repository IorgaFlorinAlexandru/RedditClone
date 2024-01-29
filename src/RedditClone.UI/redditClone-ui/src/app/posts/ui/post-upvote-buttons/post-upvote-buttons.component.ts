import { Component, Input, OnInit } from '@angular/core';
import { PostLayout } from '../../common/enums/post-layout';

@Component({
  selector: 'post-upvote-buttons',
  templateUrl: './post-upvote-buttons.component.html',
  styleUrls: ['./post-upvote-buttons.component.css']
})
export class PostUpvoteButtonsComponent implements OnInit {
  @Input() postLayout = PostLayout.Card;

  vote: 'upvoted' | 'downvoted' | undefined = undefined;
  containerClasses: string = 'flex flex-col items-center p-2 h-full'; // post-card classes

  ngOnInit(): void {
    this.setContainerClasses();
  }

  public upvote(): void {
    if(this.vote === 'upvoted') {
      this.vote = undefined;
      return;
    }
    this.vote = 'upvoted';
  }

  public downvote(): void {
    if(this.vote === 'downvoted') {
      this.vote = undefined;
      return;
    }
    this.vote = 'downvoted';
  }

  private setContainerClasses(): void {
    if(this.postLayout === PostLayout.Compact) {
      this.containerClasses = 'flex items-center h-full pl-1 pr-1'; // post-compact classes
    }
  }
}
