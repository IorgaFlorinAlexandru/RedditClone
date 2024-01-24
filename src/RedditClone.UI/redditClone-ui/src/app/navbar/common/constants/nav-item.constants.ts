import { NavigationActionType } from "src/app/core/common/enums/navigation.enums";
import { NavigationItem } from "src/app/core/common/models/navigation.models";

export const SUBMIT_NAV_ITEM: NavigationItem = { icon: 'plus', name: 'Create Post', route: 'submit',actionType: NavigationActionType.ROUTE };
export const HOME_NAV_ITEM: NavigationItem = { icon: 'home', name: 'Home', route: '',actionType: NavigationActionType.ROUTE };
export const POPULAR_NAV_ITEM: NavigationItem = { icon: 'trending-up', name: 'Popular', route: 'popular',actionType: NavigationActionType.ROUTE };
export const ALL_NAV_ITEM: NavigationItem = { icon: 'chart', name: 'All', route: 'all',actionType: NavigationActionType.ROUTE };