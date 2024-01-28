import { createReducer, on } from "@ngrx/store";
import { Navigation } from "src/app/core/common/models/navigation.models"
import { setupNavigation } from "src/app/core/common/utils/setup-navigation.function"
import * as NavigationActions from "./navigation.actions";
import { NavigationGroupType } from "src/app/core/common/enums/navigation.enums";

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
    on(NavigationActions.addCommunitiesToNav,(state,{navItems}) => {
        const items = [...state.navigation.items];
        const communityIndex = items.findIndex(g => g.type === NavigationGroupType.COMMUNITY);
        const communityGroup = {...items[communityIndex], routes: [...items[communityIndex].routes, ...navItems]}

        const newItems =[
            ...state.navigation.items.slice(0, communityIndex),
            communityGroup,
            ...state.navigation.items.slice(communityIndex + 1)
          ];

        return {
            ...state,
            navigation: {
                ...state.navigation,
                items: newItems
            }
        };
    }),
);
