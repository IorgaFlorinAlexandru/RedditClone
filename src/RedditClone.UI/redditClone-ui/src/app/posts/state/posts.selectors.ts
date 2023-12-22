import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState, postsStateFeatureKey } from "./posts.reducer";
import { StateEntity } from "src/app/shared/models/store-entity.models";
import { Post } from "../common/models/post.models";

export const selectPostState = createFeatureSelector<PostState>(postsStateFeatureKey);

export const selectPostListEntity = createSelector(selectPostState, (state: PostState) => state.postListEntity);

export const selectGetPostsStatus = createSelector(selectPostListEntity, (state: StateEntity<Post[]>) => state.status);

export const selectPostList = createSelector(selectPostListEntity, (state: StateEntity<Post[]>) => state.data)