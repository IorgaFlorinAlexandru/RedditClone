import { RequestStatus } from "src/app/shared/enums/status.enum";
import { Post } from "../common/models/post.models";
import { createReducer, on } from "@ngrx/store";
import * as PostActions from './posts.actions';
import { StateEntity } from "src/app/shared/models/store-entity.models";

export interface PostState {
    postListEntity: StateEntity<Post[]>
}

const initialState: PostState = {
    postListEntity: { data: [], status: RequestStatus.IDLE }
}

export const postsStateFeatureKey = 'Posts';

export const postsReducer = createReducer(
    initialState,
    on(PostActions.loadPostsAction, (state) => ({
        ...state,
        postListEntity: {
            data: [],
            status: RequestStatus.LOADING
        }
    })),
    on(PostActions.loadPostsSuccessAction, (state, { posts }) => ({
        ...state,
        postListEntity: {
            data: posts,
            status: RequestStatus.SUCCESS
        }
    })),
    on(PostActions.loadPostsFailedAction, (state) => ({
        ...state,
        postListEntity: {
            data: [],
            status: RequestStatus.FAILED
        }
    }))
)