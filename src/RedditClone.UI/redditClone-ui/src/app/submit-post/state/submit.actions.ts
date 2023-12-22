import { createAction, props } from "@ngrx/store";
import { CreatePostRequest } from "../common/models/create-post.model";

export enum SubmitActionTypes {
    CREATE_POST = '[Submit] Creating post api call',
    CREATE_POST_SUCCESS = '[Submit] Creating post succeded',
    CREATE_POST_FAILED = '[Submit] Creating post failed'
}

export const createPostAction = createAction(
    SubmitActionTypes.CREATE_POST,
    props<{ request: CreatePostRequest }>()
)

export const createPostSuccessAction = createAction(
    SubmitActionTypes.CREATE_POST_SUCCESS,
    props<{ postId: string }>()
);

export const createPostFailedAction = createAction(
    SubmitActionTypes.CREATE_POST_FAILED
)
