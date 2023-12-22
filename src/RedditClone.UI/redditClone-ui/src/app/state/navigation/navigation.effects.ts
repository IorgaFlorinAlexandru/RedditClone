import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ModalService } from "src/app/shared/modules/app-modal/services/modal.service";
import { NavigationStateActionTypes } from "./navigation.actions";
import { tap } from "rxjs";

@Injectable()
export class NavigationEffects {

    constructor(private actions$: Actions,private modalService: ModalService){}

    changingRoute$ = createEffect(() => this.actions$.pipe(
        ofType(NavigationStateActionTypes.CHANGE_CURRENT_ROUTE),
        tap(() => {
            this.modalService.closeAll();
        })
    ),{ dispatch: false});
}