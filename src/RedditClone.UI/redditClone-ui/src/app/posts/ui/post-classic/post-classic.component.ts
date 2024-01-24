import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../common/models/post.models';

@Component({
  selector: 'post-classic',
  templateUrl: './post-classic.component.html',
  styleUrls: ['./post-classic.component.css']
})
export class PostClassicComponent {
  @Input() post!: Post;
  @Output() navigateToCommunity = new EventEmitter<boolean>();

  public navigateToCommunityPage(): void {
    this.navigateToCommunity.emit(true);
  }

}
