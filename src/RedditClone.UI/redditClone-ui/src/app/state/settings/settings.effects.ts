import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SettingsActionType } from "./settings.actions";
import { map } from "rxjs";
import { saveThemeToLocalStorage } from "src/app/shared/utils/app-theme";
import { Injectable } from "@angular/core";

@Injectable()
export class SettingsEffects {
    constructor(private actions$: Actions) {}

    changingAppTheme$ = createEffect(() => this.actions$.pipe(
        ofType(SettingsActionType.CHANGE_APP_THEME),
        map((action: any) => {
            saveThemeToLocalStorage(action.theme);
        })

    ),{dispatch: false})
}