import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SubmitState, submitStateFeatureKey } from "./submit.reducer";

export const selectSubmitState = createFeatureSelector<SubmitState>(submitStateFeatureKey);

export const selectCreatedPostId = createSelector(selectSubmitState, (s1) => s1.postId);

export const selectCreatePostStatus = createSelector(selectSubmitState, (s1) => s1.createPostStatus);