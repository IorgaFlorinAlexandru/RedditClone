import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SettingsState, settingsFeatureKey } from "./settings.reducer";

export const selectSettingsState = createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectPostLayout = createSelector(selectSettingsState, (state: SettingsState) => state.postLayout);

export const selectAppTheme = createSelector(selectSettingsState, (state: SettingsState) => state.theme);