import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostService } from "src/app/posts/services/post.service";
import { SubmitActionTypes } from "./submit.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import * as SubmitActions from './submit.actions';
import { HttpErrorResponse } from "@angular/common/http";
import { SnackbarService } from "src/app/shared/modules/snackbar/snackbar.service";
import { MessageType } from "src/app/shared/modules/snackbar/snackbar";

@Injectable()
export class SubmitEffects {
    constructor(private actions$: Actions,private postService: PostService,private snackbarService: SnackbarService) {}

    createPost$ = createEffect(() => this.actions$.pipe(
        ofType(SubmitActionTypes.CREATE_POST),
        switchMap((action: any) => {
            return this.postService.createPost(action.request).pipe(
                map(id => SubmitActions.createPostSuccessAction({ postId: id})),
                catchError((error: HttpErrorResponse) => {
                    return of(SubmitActions.createPostFailedAction());
                })
            );
        })
    ));

    createPostSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(SubmitActionTypes.CREATE_POST_SUCCESS),
        //IMPLEMENT ROUTING LOGIC
    ),{dispatch: false});

    createPostFailed$ = createEffect(() => this.actions$.pipe(
        ofType(SubmitActionTypes.CREATE_POST_FAILED),
        tap(() => {
            this.snackbarService.displaySnackbar(MessageType.ERROR,'Error while creating post')
        })
    ),{dispatch: false})
}