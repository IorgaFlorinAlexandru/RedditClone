import { NavigationActionType, NavigationGroupType } from "../enums/navigation.enums";

export interface Navigation {
    currentRoute: NavigationItem,
    items: NavigationGroup[],
    showNavigationMenu: boolean
}

export interface NavigationGroup {
    name: string;
    routes: NavigationItem[],
    type: NavigationGroupType
}

export interface NavigationItem extends RouteItem {
    icon: string;
    actionType: NavigationActionType;
}

export interface RouteItem {
    route: string;
    name: string;
}