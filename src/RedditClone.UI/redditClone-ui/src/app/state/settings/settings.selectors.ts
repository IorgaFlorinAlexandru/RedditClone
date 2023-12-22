import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SettingsState, settingsFeatureKey } from "./settings.reducer";

export const selectSettingsState = createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectPostLayout = createSelector(selectSettingsState, (s1: SettingsState) => s1.postLayout);