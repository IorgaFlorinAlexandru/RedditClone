import { Component, Input, OnInit } from '@angular/core';
import { PostLayout } from '../../common/enums/post-layout';
import { Store } from '@ngrx/store';
import { Post } from '../../common/models/post.models';
import * as NavigationActions from '../../../state/navigation/navigation.actions';
import { NavigationActionType } from 'src/app/core/common/enums/navigation.enums';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private store: Store){}

  @Input() postLayout: PostLayout = PostLayout.Card;
  @Input() post!: Post;

  ngOnInit(): void {
  }

  public navigateToCommunityPage(): void {
    this.store.dispatch(NavigationActions.changeCurrentRoute({item: { route: 'r/', name: this.post.community, icon: 'star', actionType: NavigationActionType.ROUTE, extraOptions: [this.post.community]}}));
  }

}
