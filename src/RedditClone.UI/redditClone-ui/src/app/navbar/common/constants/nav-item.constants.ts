import { NavigationActionType } from "src/app/core/common/enums/navigation.enums";
import { NavigationItem } from "src/app/core/common/models/navigation.models";

export const SUBMIT_NAV_ITEM: NavigationItem = { icon: 'plus', name: 'Create Post', route: 'submit',actionType: NavigationActionType.ROUTE };
export const HOME_NAV_ITEM: NavigationItem = { icon: 'home', name: 'Home', route: '',actionType: NavigationActionType.ROUTE };
export const POPULAR_NAV_ITEM: NavigationItem = { icon: 'trending-up', name: 'Popular', route: 'popular',actionType: NavigationActionType.ROUTE };
export const ALL_NAV_ITEM: NavigationItem = { icon: 'chart', name: 'All', route: 'all',actionType: NavigationActionType.ROUTE };
export const CREATE_COMMUNITY_NAV_ITEM: NavigationItem = { icon: 'plus', name: 'Create Community', route: '', actionType: NavigationActionType.CREATE_COMMUNITY_MODAL};
export const MOD_QUEUE_NAV_ITEM: NavigationItem = { icon: 'squares-plus', name: 'Mod Queue', route: 'mod', actionType: NavigationActionType.ROUTE };
export const MOD_MAIL_NAV_ITEM: NavigationItem = { icon: 'envelope', name: 'Modmail', route: 'mod/mail', actionType: NavigationActionType.ROUTE };
export const R_MOD_NAV_ITEM: NavigationItem = { icon: 'shield-exclamation', name: 'r/Mod', route: 'mod/mod', actionType: NavigationActionType.ROUTE };
export const USER_SETTINGS_NAV_ITEM: NavigationItem = { icon: 'adjustments-h', name: 'User Settings', route: 'settings',actionType: NavigationActionType.ROUTE };
export const MESSAGE_INBOX_NAV_ITEM: NavigationItem = { icon: 'user-circle', name: 'Messages', route: 'messages/inbox',actionType: NavigationActionType.ROUTE };
export const NOTIFICATIONS_NAV_ITEM: NavigationItem = { icon: 'notification', name: 'Notifications', route: 'notifications',actionType: NavigationActionType.ROUTE };
export const TEST_PAGE_NAV_ITEM: NavigationItem = { icon: 'star', name: 'Test Page', route: 'test', actionType: NavigationActionType.ROUTE };