import { createAction, props } from "@ngrx/store";
import { NavigationItem } from "src/app/core/common/models/navigation.models";

export enum NavigationStateActionTypes {
    CHANGE_CURRENT_ROUTE = '[Navigation] Changing current route',
    SHOW_NAV_MENU_AS_ASIDE = '[Navigation] Show navigation menu as aside menu',
    HIDE_NAV_MENU = '[Navigation] Hiding navigation menu from layout',
    ADD_COMMUNITIES_TO_NAV = '[Navigation] Adding communities to navigation state'
}

export const changeCurrentRoute = createAction(
    NavigationStateActionTypes.CHANGE_CURRENT_ROUTE,
    props<{item : NavigationItem}>()
);

export const showNavMenuAsAside = createAction(
    NavigationStateActionTypes.SHOW_NAV_MENU_AS_ASIDE
);

export const hideNavMenu = createAction(
    NavigationStateActionTypes.HIDE_NAV_MENU
);

export const addCommunitiesToNav = createAction(
    NavigationStateActionTypes.ADD_COMMUNITIES_TO_NAV,
    props<{navItems: NavigationItem[]}>()
)