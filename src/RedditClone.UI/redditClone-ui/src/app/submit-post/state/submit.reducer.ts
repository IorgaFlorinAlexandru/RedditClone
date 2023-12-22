import { createReducer, on } from "@ngrx/store";
import { RequestStatus } from "src/app/shared/enums/status.enum";
import * as SubmitActions from './submit.actions';

export interface SubmitState {
    postId: string;
    createPostStatus: RequestStatus;
}

const initialState: SubmitState = {
    postId: '',
    createPostStatus: RequestStatus.IDLE
}

export const submitStateFeatureKey = 'Submit';

export const submitReducer = createReducer(
    initialState,
    on(SubmitActions.createPostAction, (state, { request }) => ({
        ...state,
        createPostStatus: RequestStatus.LOADING
    })),
    on(SubmitActions.createPostSuccessAction, (state, { postId }) => ({
        postId: postId,
        createPostStatus: RequestStatus.SUCCESS
    })),
    on(SubmitActions.createPostFailedAction, (state) => ({
        ...state,
        createPostStatus: RequestStatus.FAILED
    }))
);