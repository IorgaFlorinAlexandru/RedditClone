import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SettingsActionType } from "./settings.actions";
import { map } from "rxjs";
import { saveThemeToLocalStorage } from "src/app/shared/utils/app-theme";
import { Injectable } from "@angular/core";
import { saveLayoutToLocalStorage } from "src/app/shared/utils/post-layout";

@Injectable()
export class SettingsEffects {
    constructor(private actions$: Actions) { }

    changePostLayout$ = createEffect(() => this.actions$.pipe(
        ofType(SettingsActionType.CHANGE_POST_LAYOUT),
        map((action: any) => {
            saveLayoutToLocalStorage(action.postLayout);
        })

    ), { dispatch: false });

    changeAppTheme$ = createEffect(() => this.actions$.pipe(
        ofType(SettingsActionType.CHANGE_APP_THEME),
        map((action: any) => {
            saveThemeToLocalStorage(action.theme);
        })

    ), { dispatch: false });
}