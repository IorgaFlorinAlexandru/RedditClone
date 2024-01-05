import { NavigationActionType, NavigationGroupType } from "../enums/navigation.enums";
import { Navigation, NavigationGroup } from "../models/navigation.models";

export function setupNavigation() : Navigation {

    const feedRoutes : NavigationGroup = {
        name: 'Feeds',
        routes: [
            { icon: 'home', name: 'Home', route: '',actionType: NavigationActionType.ROUTE},
            { icon: 'trending-up', name: 'Popular', route: 'popular',actionType: NavigationActionType.ROUTE},
            { icon: 'chart', name: 'All', route: 'all',actionType: NavigationActionType.ROUTE},
        ],
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
            { icon: 'squares-plus', name: 'Mod Queue', route: 'mod/about/queue', actionType: NavigationActionType.ROUTE},
            { icon: 'envelope', name: 'Modmail', route: 'mod/mail', actionType: NavigationActionType.ROUTE},
            { icon: 'shield-exclamation', name: 'r/Mod', route: 'r/Mod', actionType: NavigationActionType.ROUTE},
        ],
        type: NavigationGroupType.MODERATING
    }

    const otherRoutes: NavigationGroup = {
        name: 'Other',
        routes: [
            { icon: 'adjustments-h', name: 'User Settings', route: 'settings',actionType: NavigationActionType.ROUTE},
            { icon: 'user-circle', name: 'Messages', route: 'messages/inbox',actionType: NavigationActionType.ROUTE},
            { icon: 'plus', name: 'Create Post', route: 'submit',actionType: NavigationActionType.ROUTE},
            { icon: 'notification', name: 'Notifications', route: 'notifications',actionType: NavigationActionType.ROUTE},
        ],
        type: NavigationGroupType.OTHER
    }

    return { currentRoute: feedRoutes.routes[0], items: [moderatingRoutes,communitiesRoutes,feedRoutes,otherRoutes], showNavigationMenu: false };
}