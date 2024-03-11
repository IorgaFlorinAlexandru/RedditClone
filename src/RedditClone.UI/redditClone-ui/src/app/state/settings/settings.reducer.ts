import { createReducer, on } from "@ngrx/store";
import { PostLayout } from "src/app/posts/common/enums/post-layout";
import * as SettingsActions from './settings.actions';
import { getThemeFromLocalStorage } from "src/app/shared/utils/app-theme";
import { getLayoutFromLocalStorage } from "src/app/shared/utils/post-layout";


export interface SettingsState {
    theme: string;
    postLayout: PostLayout;
    userSettings: any;
}

const initialState: SettingsState = {
    theme: getThemeFromLocalStorage(),
    postLayout: getLayoutFromLocalStorage(),
    userSettings: undefined
}

export const settingsFeatureKey = 'Settings';

export const settingsReducer = createReducer(initialState,
    on(SettingsActions.changePostLayout, (state, { postLayout }) => ({
        ...state,
        postLayout: postLayout
    })),
    on(SettingsActions.changeAppTheme, (state, { theme }) => ({
        ...state,
        theme
    })),);
