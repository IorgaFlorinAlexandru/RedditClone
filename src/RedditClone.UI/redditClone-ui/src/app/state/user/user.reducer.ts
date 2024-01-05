import { createReducer } from "@ngrx/store";

export interface UserState{
    isLoggedOn: boolean;
}

const initialState: UserState = {
    isLoggedOn: true
}

export const userFeatureKey = 'User';

export const userReducer = createReducer(
    initialState
);