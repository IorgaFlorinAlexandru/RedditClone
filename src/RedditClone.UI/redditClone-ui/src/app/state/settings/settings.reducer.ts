import { createReducer, on } from "@ngrx/store";
import { PostLayout } from "src/app/posts/common/enums/post-layout";
import * as SettingsActions from './settings.actions';


export interface SettingsState {
    theme: string;
    postLayout: PostLayout;
}

const initialState: SettingsState = {
    theme: 'dark',
    postLayout: PostLayout.Card
}

export const settingsFeatureKey = 'Settings';

export const settingsReducer = createReducer(initialState,
    on(SettingsActions.changePostLayout,(state,{ postLayout })=>({
        ...state,
        postLayout: postLayout
    }))
);
