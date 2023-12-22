import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, combineLatest, fromEvent, of, skip, startWith, switchMap, takeUntil, tap } from 'rxjs';
import * as CommunitySelectors from '../../../state/communities/communities.selectors';
import { Community } from 'src/app/communities/common/models/communities.models';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StateEntity } from 'src/app/shared/models/store-entity.models';
import { RequestStatus } from 'src/app/shared/enums/status.enum';

@Component({
  selector: 'community-select',
  templateUrl: './community-select.component.html',
  styleUrls: ['./community-select.component.css']
})
export class CommunitySelectComponent implements OnInit, OnDestroy {
  
  @ViewChild('communitySelectMenu') selectCommunityMenu!: ElementRef;
  @Output() hasSelectedCommunity: EventEmitter<Community | undefined> = new EventEmitter();
  constructor(private store: Store,private formBuilder: FormBuilder) {
    this.searchField = new FormControl('')
    this.searchForm = this.formBuilder.group({searchField: this.searchField});
  }
  
  userCommunities$: Observable<StateEntity<Community[]>> = new Observable();
  selectedCommunity: Community | undefined = undefined;
  LOADING_STATUS = RequestStatus.LOADING;
  
  searchForm: FormGroup;
  searchField: FormControl;
  

  showSelectMenu: boolean = false;
  destroy$: Subject<boolean> = new Subject();

  ngOnInit(): void {
    this.setUserCommunities();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public openSelectMenu(): void {
    this.showSelectMenu = true;
    this.checkIfUserClickedOutside();
  }

  private close(): void {
    if(this.selectedCommunity) this.searchField.setValue(this.selectedCommunity.title);
    this.showSelectMenu = false;
    this.destroy$.next(true);
  }

  private checkIfUserClickedOutside(): void {
    fromEvent(document.body,'click').pipe(
      skip(1),
      tap(event => {
        if(this.selectCommunityMenu.nativeElement.contains(event.target)) return;

        this.close();
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public selectCommunity(community: Community): void {
    this.searchField.setValue(community.title);
    this.setSelectedCommunity(community);
    this.close();
  }

  private setUserCommunities(): void {
    this.userCommunities$ = combineLatest([
      this.store.select(CommunitySelectors.selectUserCommunitiesEntity),
      this.searchField.valueChanges.pipe(startWith(''))
    ]).pipe(
      switchMap(([userCommunities,searchValue]) => {
        return of(
          { ...userCommunities, data: userCommunities.data.filter(c => c.name.includes(searchValue))}
          );
      })
    );
  }

  private setSelectedCommunity(community: Community | undefined): void {
    this.selectedCommunity = community;
    this.hasSelectedCommunity.next(community);
  }
}
