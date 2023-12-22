import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CommunitiesState } from "./communities.reducer";
import { StateEntity } from "src/app/shared/models/store-entity.models";
import { Community } from "src/app/communities/common/models/communities.models";

export const selectCommunitiesState = createFeatureSelector<CommunitiesState>('Communities');

export const selectUserCommunitiesEntity = createSelector(selectCommunitiesState, (state: CommunitiesState) => state.userCommunities);

export const selectUserCommunities = createSelector(selectUserCommunitiesEntity,(state: StateEntity<Community[]>) => state.data);

export const selectUserCommunitiesStatus = createSelector(selectUserCommunitiesEntity, (state: StateEntity<Community[]>) => state.status);

export const selectGetCommunityStatus = createSelector(selectCommunitiesState, (state: CommunitiesState) => state.getCommunityStatus);

export const selectCommunity = createSelector(selectCommunitiesState, (state: CommunitiesState) => state.community);

export const selectGetCommunityData = createSelector({ community: selectCommunity, status: selectGetCommunityStatus});