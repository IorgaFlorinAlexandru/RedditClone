import { ALL_NAV_ITEM, HOME_NAV_ITEM, POPULAR_NAV_ITEM, SUBMIT_NAV_ITEM } from "src/app/navbar/common/constants/nav-item.constants";
import { NavigationActionType, NavigationGroupType } from "../enums/navigation.enums";
import { Navigation, NavigationGroup } from "../models/navigation.models";

export function setupNavigation() : Navigation {

    const feedRoutes : NavigationGroup = {
        name: 'Feeds',
        routes: [HOME_NAV_ITEM,POPULAR_NAV_ITEM,ALL_NAV_ITEM],
        type: NavigationGroupType.FEEDS
    }

    const communitiesRoutes: NavigationGroup = {
        name: 'Your Communities',
        routes: [
            { icon: 'plus', name: 'Create Community', route: '', actionType: NavigationActionType.CREATE_COMMUNITY_MODAL},
            { icon: 'star', name: 'Test Page', route: 'test', actionType: NavigationActionType.ROUTE},
        ],
        type: NavigationGroupType.COMMUNITY
    }

    const moderatingRoutes: NavigationGroup = {
        name: 'Moderating',
        routes: [
            { icon: 'squares-plus', name: 'Mod Queue', route: '', actionType: NavigationActionType.ROUTE},
            { icon: 'envelope', name: 'Modmail', route: '', actionType: NavigationActionType.ROUTE},
            { icon: 'shield-exclamation', name: 'r/Mod', route: '', actionType: NavigationActionType.ROUTE},
        ],
        type: NavigationGroupType.MODERATING
    }

    const otherRoutes: NavigationGroup = {
        name: 'Other',
        routes: [
            { icon: 'adjustments-h', name: 'User Settings', route: 'settings',actionType: NavigationActionType.ROUTE},
            { icon: 'user-circle', name: 'Messages', route: 'messages/inbox',actionType: NavigationActionType.ROUTE},
            SUBMIT_NAV_ITEM,
            { icon: 'notification', name: 'Notifications', route: 'notifications',actionType: NavigationActionType.ROUTE},
        ],
        type: NavigationGroupType.OTHER
    }

    return { currentRoute: feedRoutes.routes[0], items: [moderatingRoutes,communitiesRoutes,feedRoutes,otherRoutes], showNavigationMenu: false };
}