import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../common/models/post.models';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() post!: Post;
  @Output() navigateToCommunity = new EventEmitter<boolean>();

  public navigateToCommunityPage(): void {
    this.navigateToCommunity.emit(true);
  }

}
