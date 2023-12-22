import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostLayout } from '../../common/enums/post-layout';
import * as fromSettings from '../../../state/settings/index';
import { Post } from '../../common/models/post.models';
import * as fromPostState from '../../state/index';
import { StateEntity } from 'src/app/shared/models/store-entity.models';
import { RequestStatus } from 'src/app/shared/enums/status.enum';


@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  postLayout$: Observable<PostLayout> = new Observable();
  postListEntity$: Observable<StateEntity<Post[]>> = new Observable();

  cardLayout = PostLayout.Card;
  LOADING_STATUS = RequestStatus.LOADING;
  POST_LAYOUT: typeof PostLayout = PostLayout;

  constructor(private router: Router,private store: Store) {}

  ngOnInit(): void {
    this.loadAllPosts();
    this.setPostLayout();
    this.setPostList();
  }

  public navigateToSubmitPage(route: string): void {
    this.router.navigateByUrl(route);
  }

  private setPostLayout(): void {
    this.postLayout$ = this.store.select(fromSettings.selectPostLayout).pipe();
  }

  private setPostList(): void {
    this.postListEntity$ = this.store.select(fromPostState.selectPostListEntity)
  }

  private loadPostsFromCommunity(): void {

  }

  private loadPostsFromFeed(): void {

  }

  private loadAllPosts(): void {
    this.store.dispatch(fromPostState.loadPostsAction());
  }


}
