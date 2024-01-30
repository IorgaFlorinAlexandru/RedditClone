import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostLayout } from '../../common/enums/post-layout';
import * as fromSettings from '../../../state/settings/index';
import { Post } from '../../common/models/post.models';
import * as fromPostState from '../../state/index';
import * as NavigationActions from '../../../state/navigation/navigation.actions';
import { StateEntity } from 'src/app/shared/models/store-entity.models';
import { RequestStatus } from 'src/app/shared/enums/status.enum';
import { SUBMIT_NAV_ITEM } from 'src/app/navbar/common/constants/nav-item.constants';


@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  //Community
  private _communityIndentifier: string | undefined = undefined;
  @Input() set communityIdentifier(value: string | undefined) {
    if(!value) return;
    this._communityIndentifier = value;
    this.loadPostsFromCommunity(value);
  };
  get communityIdentifier(): string | undefined {
    return this._communityIndentifier;
  } 

  //Feed
  private _feedId: string | undefined = undefined;
  @Input() set feedId(value: string | undefined) {
    if(!value) return;
    this._feedId = value;
    this.loadPostsFromFeed(value);
  };
  get feedId(): string | undefined {
    return this._feedId;
  }

  @Input() getCommunityStatus: RequestStatus = RequestStatus.IDLE;

  postLayout$: Observable<PostLayout> = new Observable();
  postListEntity$: Observable<StateEntity<Post[]>> = new Observable();

  cardLayout = PostLayout.Card;
  LOADING_STATUS = RequestStatus.LOADING;
  POST_LAYOUT: typeof PostLayout = PostLayout;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.setPostLayout();
    this.setPostList();
  }

  public navigateToSubmitPage(query: string): void {
    let queryParams: Params = {};
    if(query) {
      queryParams = { ...queryParams, form: query }
    }
    if(this.communityIdentifier) {
      queryParams = {...queryParams, community: this._communityIndentifier }
    }
    const item = { ...SUBMIT_NAV_ITEM, queryParams }
    this.store.dispatch(NavigationActions.changeCurrentRoute({item}));
  }

  private setPostLayout(): void {
    this.postLayout$ = this.store.select(fromSettings.selectPostLayout).pipe();
  }

  private setPostList(): void {
    this.postListEntity$ = this.store.select(fromPostState.selectPostListEntity)
  }

  private loadPostsFromCommunity(communityIdentifier: string): void {
    this.store.dispatch(fromPostState.loadPostsAction({community: communityIdentifier}));
  }

  private loadPostsFromFeed(feed: string): void {
    this.store.dispatch(fromPostState.loadPostsAction({feed: feed}));
  }
}
