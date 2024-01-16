import { createReducer, on } from "@ngrx/store";
import { Community } from "src/app/communities/common/models/communities.models";
import { RequestStatus } from "src/app/shared/enums/status.enum";
import * as CommunityActions from './communities.actions';
import { StateEntity } from "src/app/shared/models/store-entity.models";

export interface CommunitiesState {
    userCommunities: StateEntity<Community[]>,
    createdCommunityStatus: RequestStatus,
    community?: Community,
    getCommunityStatus: RequestStatus
}

const initialState: CommunitiesState = {
    userCommunities: { data: [], status: RequestStatus.IDLE },
    createdCommunityStatus: RequestStatus.IDLE,
    community: undefined,
    getCommunityStatus: RequestStatus.IDLE
}

export const communitiesReducer = createReducer(
    initialState,
    on(CommunityActions.loadCommunitiesAction,(state) => ({
        ...state,
        userCommunities: { data: [], status: RequestStatus.LOADING }
    })),    
    on(CommunityActions.loadCommunitiesSuccessAction,(state,{ communities }) => ({
        ...state,
        userCommunities: {data: communities, status: RequestStatus.SUCCESS},
    })),    
    on(CommunityActions.loadCommunitiesFailedAction,(state) => ({
        ...state,
        userCommunities: { data: [], status: RequestStatus.FAILED }
    })),
    on(CommunityActions.getCommunityByNameAction, (state) => ({
        ...state,
        getCommunityStatus: RequestStatus.LOADING
    })),
    on(CommunityActions.getCommunityByNameSuccessAction, (state, { community }) => ({
        ...state,
        community: community,
        getCommunityStatus: RequestStatus.SUCCESS
    })),
    on(CommunityActions.getCommunityByNameFailedAction, (state) => ({
        ...state,
        community: undefined,
        getCommunityStatus: RequestStatus.FAILED
    })),
    on(CommunityActions.createCommunityAction, (state) => ({
        ...state,
        createdCommunityStatus: RequestStatus.LOADING
    })),
    on(CommunityActions.createCommunitySuccessAction, (state) => ({
        ...state,
        createdCommunityStatus: RequestStatus.SUCCESS
    })),
    on(CommunityActions.createCommunityFailedAction, (state) => ({
        ...state,
        createdCommunityStatus: RequestStatus.FAILED
    })),
);