import { createAction, props } from "@ngrx/store";
import { PostLayout } from "src/app/posts/common/enums/post-layout";
import { Theme } from "src/app/shared/enums/theme.enum";

export enum SettingsActionType {
    CHANGE_POST_LAYOUT = '[Settings] Changing post layout',
    CHANGE_APP_THEME = '[Settings] Changing application theme'
}

export const changePostLayout = createAction(
    SettingsActionType.CHANGE_POST_LAYOUT,
    props<{postLayout: PostLayout}>()
);

export const changeAppTheme = createAction(
    SettingsActionType.CHANGE_APP_THEME,
    props<{ theme: Theme }>()
)