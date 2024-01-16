import { createAction, props } from "@ngrx/store";
import { Community } from "src/app/communities/common/models/communities.models";
import { CreateCommunityRequest } from "src/app/communities/common/models/create-community.model";

export enum CommunitiesStateActionType {
    LOAD_COMMUNITIES = '[Communities] Load Communities',
    LOAD_COMMUNITIES_SUCCESS = '[Communities] Load Communities Success',
    LOAD_COMMUNITIES_FAILED = '[Communities] Load Communities Failed',
    GET_COMMUNITY_BY_NAME = '[Communities] Get Community By Name',
    GET_COMMUNITY_BY_NAME_SUCCESS = '[Communities] Get Community By Name Success',
    GET_COMMUNITY_BY_NAME_FAILED = '[Communities] Get Community By Name Failed',
    CREATE_COMMUNITY_ACTION = '[Communities] Create Community Api Call',
    CREATE_COMMUNITY_ACTION_SUCCESS = '[Communities] Create Community Success',
    CREATE_COMMUNITY_ACTION_FAILED = '[Communities] Create Community Failed',

}

export const loadCommunitiesAction = createAction(
    CommunitiesStateActionType.LOAD_COMMUNITIES,
);

export const loadCommunitiesSuccessAction = createAction(
    CommunitiesStateActionType.LOAD_COMMUNITIES_SUCCESS,
    props<{ communities: Community[]}>()
);

export const loadCommunitiesFailedAction = createAction(
    CommunitiesStateActionType.LOAD_COMMUNITIES_FAILED
);

export const getCommunityByNameAction = createAction(
    CommunitiesStateActionType.GET_COMMUNITY_BY_NAME,
    props<{ communityName: string }>()
);

export const getCommunityByNameSuccessAction = createAction(
    CommunitiesStateActionType.GET_COMMUNITY_BY_NAME_SUCCESS,
    props<{ community: Community }>()
);

export const getCommunityByNameFailedAction = createAction(
    CommunitiesStateActionType.GET_COMMUNITY_BY_NAME_FAILED,
);

export const createCommunityAction = createAction(
    CommunitiesStateActionType.CREATE_COMMUNITY_ACTION,
    props<{ request: CreateCommunityRequest }>()
);

export const createCommunitySuccessAction = createAction(
    CommunitiesStateActionType.CREATE_COMMUNITY_ACTION_SUCCESS,
    props<{ community: Community }>()
);

export const createCommunityFailedAction = createAction(
    CommunitiesStateActionType.CREATE_COMMUNITY_ACTION_FAILED
);