import { createAction, props } from "@ngrx/store";
import { Post } from "../common/models/post.models";

export enum PostStateActionTypes {
    LOAD_POSTS = '[Posts] Loading Posts',
    LOAD_POSTS_SUCCESS = '[Posts] Loading Posts Success',
    LOAD_POSTS_FAILED = '[Posts] Loading Posts Failed',
}

export const loadPostsAction = createAction(
    PostStateActionTypes.LOAD_POSTS
);

export const loadPostsSuccessAction = createAction(
    PostStateActionTypes.LOAD_POSTS_SUCCESS,
    props<{ posts: Post[] }>()
);

export const loadPostsFailedAction = createAction(
    PostStateActionTypes.LOAD_POSTS_FAILED
)