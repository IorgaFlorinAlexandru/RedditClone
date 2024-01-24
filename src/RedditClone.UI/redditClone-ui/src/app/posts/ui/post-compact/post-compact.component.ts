import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostLayout } from '../../common/enums/post-layout';
import { Post } from '../../common/models/post.models';

@Component({
  selector: 'post-compact',
  templateUrl: './post-compact.component.html',
  styleUrls: ['./post-compact.component.css']
})
export class PostCompactComponent {
  compactLayout = PostLayout.Compact;
  @Input() post!: Post;
  @Output() navigateToCommunity = new EventEmitter<boolean>();

  public navigateToCommunityPage(): void {
    this.navigateToCommunity.emit(true);
  }

}
