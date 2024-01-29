import { NavigationActionType, NavigationGroupType } from "../enums/navigation.enums";
import { Navigation, NavigationGroup, NavigationItem } from "../models/navigation.models";
import { CoreRoutes } from "../enums/core-routes.enum";
import * as NavConst from "src/app/navbar/common/constants/nav-item.constants";


export function setupNavigation(): Navigation {

    const feedRoutes: NavigationGroup = {
        name: 'Feeds',
        routes: [
            NavConst.HOME_NAV_ITEM,
            NavConst.POPULAR_NAV_ITEM,
            NavConst.ALL_NAV_ITEM],
        type: NavigationGroupType.FEEDS
    }

    const communitiesRoutes: NavigationGroup = {
        name: 'Your Communities',
        routes: [NavConst.CREATE_COMMUNITY_NAV_ITEM],
        type: NavigationGroupType.COMMUNITY
    }

    const moderatingRoutes: NavigationGroup = {
        name: 'Moderating',
        routes: [
            NavConst.MOD_QUEUE_NAV_ITEM,
            NavConst.MOD_MAIL_NAV_ITEM,
            NavConst.R_MOD_NAV_ITEM
        ],
        type: NavigationGroupType.MODERATING
    }

    const otherRoutes: NavigationGroup = {
        name: 'Other',
        routes: [
            NavConst.USER_SETTINGS_NAV_ITEM,
            NavConst.MESSAGE_INBOX_NAV_ITEM,
            NavConst.SUBMIT_NAV_ITEM,
            NavConst.NOTIFICATIONS_NAV_ITEM,
            NavConst.TEST_PAGE_NAV_ITEM,
        ],
        type: NavigationGroupType.OTHER
    }

    const navGroups = [moderatingRoutes, communitiesRoutes, feedRoutes, otherRoutes];

    const navigation = { currentRoute: getCurrentRoute(navGroups), items: navGroups, showNavigationMenu: false };

    return navigation;
}

function getCurrentRoute(navGroups: NavigationGroup[]): NavigationItem {

    const items: NavigationItem[] = [];
    navGroups.forEach(group => {
        items.push(...group.routes);
    });

    const windowPath = window.location.pathname.substring(1);

    if (windowPath.startsWith(CoreRoutes.Community)) {
        const communityName = windowPath.substring(2);
        return { route: CoreRoutes.Community, name: communityName, icon: 'star', actionType: NavigationActionType.COMMUNITY_ROUTE, extraOptions: [communityName] }
    }

    const routeName = windowPath.split('/')[0]; // there can be routes like settings/profile, so we just take the first word

    const navRouteItem = items.find(i => i.route === routeName && i.actionType !== NavigationActionType.CREATE_COMMUNITY_MODAL) ?? NavConst.HOME_NAV_ITEM;

    return navRouteItem;
}