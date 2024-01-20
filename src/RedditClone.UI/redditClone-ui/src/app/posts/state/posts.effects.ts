import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostStateActionTypes } from "./posts.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { PostService } from "../services/post.service";
import * as PostsActions from './posts.actions';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postService: PostService) {}

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(PostStateActionTypes.LOAD_POSTS),
        switchMap((action: any) => {
            return this.postService.getPosts(action.feed,action.community).pipe(
                map((postsResponse) => PostsActions.loadPostsSuccessAction({posts: postsResponse})),
                catchError((error: HttpErrorResponse) => of(PostsActions.loadPostsFailedAction()))
            )
        })
    ));
}