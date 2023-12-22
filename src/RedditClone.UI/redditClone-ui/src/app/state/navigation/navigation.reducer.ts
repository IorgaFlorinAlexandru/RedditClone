import { createReducer, on } from "@ngrx/store";
import { Navigation } from "src/app/core/common/models/navigation.models"
import { setupNavigation } from "src/app/core/common/utils/setup-navigation.function"
import * as NavigationActions from "./navigation.actions";

export interface NavigationState {
    navigation: Navigation,
}

const initialState: NavigationState = {
    navigation: setupNavigation(),
}

export const navigationFeatureKey = 'Navigation';

export const navigationReducer = createReducer(
    initialState,
    on(NavigationActions.changeCurrentRoute,(state,{item}) => ({
        ...state,
        navigation: {
            ...state.navigation,
            currentRoute: item
        }
    })),
    on(NavigationActions.showNavMenuAsAside,(state) => ({
        ...state,
        navigation: {
            ...state.navigation,
            showNavigationMenu: true,
        }
    })),
    on(NavigationActions.hideNavMenu,(state) => ({
        ...state,
        navigation: {
            ...state.navigation,
            showNavigationMenu: false,
        }
    })),
);
