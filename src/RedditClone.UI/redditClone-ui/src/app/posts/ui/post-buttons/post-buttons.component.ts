import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../common/models/post.models';
import { PostLayout } from '../../common/enums/post-layout';

@Component({
  selector: 'post-buttons',
  templateUrl: './post-buttons.component.html',
  styleUrls: ['./post-buttons.component.css']
})
export class PostButtonsComponent implements OnInit {
  @Input() post!: Post;
  @Input() layout: PostLayout = PostLayout.Card;

  COMPACT_LAYOUT = PostLayout.Compact;

  public shareMenuBtns: Button[] = [];
  public moreMenuBtns: Button[] = [];

  ngOnInit(): void {
    this.setShareMenuButtons();
    this.setMoreMenuBtns();
  }

  private setShareMenuButtons(): void {
    this.shareMenuBtns.push(
      {name: 'Copy Link', icon: 'link', fn: this.testBtn},
      {name: 'Crosspost', icon: 'hashtag', fn: this.testBtn},
      {name: 'Embed', icon: 'code-bracket-square', fn: this.testBtn},
    );
  }

  private setMoreMenuBtns(): void {
    if(this.layout === PostLayout.Compact) {
      this.moreMenuBtns.push(
        {name: 'Save', icon: 'bookmark', fn: this.testBtn},
        ...this.shareMenuBtns
      )
    }
    this.moreMenuBtns.push(
      {name: `Mute r/${this.post.community}`, icon: 'speaker-no-volume', fn: this.testBtn},
      {name: 'Hide', icon: 'eye-slash', fn: this.testBtn},
      {name: 'Report', icon: 'flag', fn: this.testBtn},
    );
  }

  private testBtn(): void {
    console.log('exe btn');
  }
  
}


interface Button {
  name: string;
  icon: string;
  fn: () => void;
}