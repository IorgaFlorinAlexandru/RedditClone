import { createAction, props } from "@ngrx/store";
import { PostLayout } from "src/app/posts/common/enums/post-layout";

export enum SettingsActionType {
    CHANGE_POST_LAYOUT = '[Settings] Changing post layout'
}

export const changePostLayout = createAction(
    SettingsActionType.CHANGE_POST_LAYOUT,
    props<{postLayout: PostLayout}>()
);