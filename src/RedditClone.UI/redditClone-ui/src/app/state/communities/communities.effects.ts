import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CommunitiesStateActionType } from "./communities.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { CommunityService } from "src/app/communities/services/community.service";
import * as CommunityActions from './communities.actions';
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CommunitiesEffects {
    constructor(private actions$: Actions,private communityService: CommunityService){}

    loadCommunities$ = createEffect(() => this.actions$.pipe(
        ofType(CommunitiesStateActionType.LOAD_COMMUNITIES),
        switchMap(() => {
            return this.communityService.getCommunities().pipe(
                map(communitiesResponse => CommunityActions.loadCommunitiesSuccessAction({ communities: communitiesResponse})),
                catchError((error: HttpErrorResponse) => {
                    return of(CommunityActions.loadCommunitiesFailedAction());
                })
            );
        })
    ));

    getCommunityByName$ = createEffect(() => this.actions$.pipe(
        ofType(CommunitiesStateActionType.GET_COMMUNITY_BY_NAME),
        switchMap((action: any) => {
            return this.communityService.getCommunityByName(action.communityName).pipe(
                map(communityResponse => CommunityActions.getCommunityByNameSuccessAction({ community: communityResponse})),
                catchError((error: HttpErrorResponse) => {
                    return of(CommunityActions.getCommunityByNameFailedAction())
                })
            )
        })
    ));
}