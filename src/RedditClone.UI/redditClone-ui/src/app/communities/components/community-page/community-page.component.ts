import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import * as fromCommunityState from '../../../state/communities/index';
import { GetCommunityData } from '../../common/utils/communities.types';
import { RequestStatus } from 'src/app/shared/enums/status.enum';

@Component({
  selector: 'community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})
export class CommunityPageComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute,private store: Store) {}
  
  LOADING_STATUS = RequestStatus.LOADING;

  communityData$: Observable<GetCommunityData> = new Observable();
  destroy$: Subject<boolean> = new Subject();

  public communityName: string = '';
  public communityTitle: string = '';
  public communityDescription: string = '';
  public communityCreatedDate: Date = new Date();
  
  ngOnInit(): void {
    this.handleCommunityPageRouteChange();
    this.setCommunityData();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  private handleCommunityPageRouteChange(): void {
    this.route.paramMap.pipe(
      takeUntil(this.destroy$)
      ).subscribe((params) => {
        const communityName = params.get('communityName');
        if(!communityName) return; // TODO CHECK IN GUARD OR SOME SHIT OR DO THIS IN GUARD WHO KNOWS
        this.callGetCommunityByName(communityName);
    });
  }

  private setCommunityData(): void {
    this.communityData$ = this.store.select(fromCommunityState.selectGetCommunityData).pipe(
      tap((data) => {
        //Also settings the values that i am passing to the ui components 
        // Maybe find a better way
        if(data.community){
          this.communityName = data.community.name;
          this.communityTitle = data.community.title;
          this.communityDescription = data.community.description;
          this.communityCreatedDate = data.community.createdAt;
        }
      })
    );
  }

  private callGetCommunityByName(communityName: string): void {
    this.store.dispatch(fromCommunityState.getCommunityByNameAction({ communityName: communityName}));
  }
}
