import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NavigationState, navigationFeatureKey } from "./navigation.reducer";

export const selectNavigationState = createFeatureSelector<NavigationState>(navigationFeatureKey);

export const selectNavigation = createSelector(selectNavigationState, (s1: NavigationState) => s1.navigation);

export const selectCurrentRoute = createSelector(selectNavigation, (s1) => s1.currentRoute);

export const selectRoutes = createSelector(selectNavigation, (s1) => s1.items);

export const selectShowNavigationMenu = createSelector(selectNavigation, (s1) => s1.showNavigationMenu);