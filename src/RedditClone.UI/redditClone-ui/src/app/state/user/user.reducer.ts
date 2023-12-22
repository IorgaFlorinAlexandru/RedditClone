import { createReducer } from "@ngrx/store";

export interface UserState{
    isLoggedOn: boolean;
}

const initialState: UserState = {
    isLoggedOn: false
}

export const userFeatureKey = 'User';

export const userReducer = createReducer(
    initialState
);