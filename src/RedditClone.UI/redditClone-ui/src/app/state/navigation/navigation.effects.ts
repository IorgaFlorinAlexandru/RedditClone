import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ModalService } from "src/app/shared/modules/app-modal/services/modal.service";
import { NavigationStateActionTypes } from "./navigation.actions";
import { map } from "rxjs";
import { Router } from "@angular/router";
import { NavigationItem } from "src/app/core/common/models/navigation.models";

@Injectable()
export class NavigationEffects {

    constructor(
        private actions$: Actions,
        private modalService: ModalService,
        private router: Router) {}

    changingRoute$ = createEffect(() => this.actions$.pipe(
        ofType(NavigationStateActionTypes.CHANGE_CURRENT_ROUTE),
        map((action: any) => {
            this.modalService.closeAll();

            const navItem = action.item as NavigationItem;
            this.navigateToRoute(navItem);
        })
    ),{ dispatch: false});

    private navigateToRoute(navItem: NavigationItem) {
        const commands = [navItem.route];

        if(navItem.extraOptions) commands.push(...navItem.extraOptions);

        this.router.navigate(commands, { queryParams: navItem.queryParams});
    }
}