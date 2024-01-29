import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CommunitiesStateActionType } from "./communities.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { CommunityService } from "src/app/communities/services/community.service";
import * as CommunityActions from './communities.actions';
import * as NavigationActions from '../navigation/navigation.actions'
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationActionType } from "src/app/core/common/enums/navigation.enums";
import { NavigationItem } from "src/app/core/common/models/navigation.models";
import { Community } from "src/app/communities/common/models/communities.models";
import { CoreRoutes } from "src/app/core/common/enums/core-routes.enum";

@Injectable()
export class CommunitiesEffects {
    constructor(
        private actions$: Actions,
        private communityService: CommunityService,
        private router: Router){}

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

    loadCommunitiesSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(CommunitiesStateActionType.LOAD_COMMUNITIES_SUCCESS),
        map((action: any) => {
            const communities = action.communities;
            const navItems: NavigationItem[] = [];

            communities.forEach((community: Community) => {
                navItems.push(
                    {
                        icon: 'star',
                        actionType: NavigationActionType.COMMUNITY_ROUTE,
                        route: CoreRoutes.Community,
                        name: community.name,
                        extraOptions: [community.name]
                    }
                )
            });
            
            return NavigationActions.addCommunitiesToNav({navItems});
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

    createCommunity$ = createEffect(() => this.actions$.pipe(
        ofType(CommunitiesStateActionType.CREATE_COMMUNITY_ACTION),
        switchMap((action: any) => {
            return this.communityService.createCommunity(action.request).pipe(
                map(communityResponse => CommunityActions.createCommunitySuccessAction({ community: communityResponse})),
                catchError((error: HttpErrorResponse) => {
                    return of(CommunityActions.createCommunityFailedAction())
                })
            )
        })
    ));

    createCommunitySuccess$ = createEffect(() => this.actions$.pipe(
        ofType(CommunitiesStateActionType.CREATE_COMMUNITY_ACTION_SUCCESS),
        map((action: any) => {
            return NavigationActions.changeCurrentRoute({
                item : { route: CoreRoutes.Community, name: action.community.name, icon: 'star', actionType: NavigationActionType.COMMUNITY_ROUTE, extraOptions: [action.community.name]}})
        })
    ))
}