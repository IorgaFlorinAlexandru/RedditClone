import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState, userFeatureKey } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

export const selectIsLoggedOn = createSelector(selectUserState, (s1) => s1.isLoggedOn);