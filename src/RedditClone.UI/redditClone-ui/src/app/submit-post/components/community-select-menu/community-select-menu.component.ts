import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject, map, takeUntil } from 'rxjs';
import { Community } from 'src/app/communities/common/models/communities.models';
import { CreateCommunityModalComponent } from 'src/app/communities/components/create-community-modal/create-community-modal.component';
import { RequestStatus } from 'src/app/shared/enums/status.enum';
import { StateEntity } from 'src/app/shared/models/store-entity.models';
import { ModalService } from 'src/app/shared/modules/app-modal/services/modal.service';

@Component({
  selector: 'community-select-menu',
  templateUrl: './community-select-menu.component.html',
  styleUrls: ['./community-select-menu.component.css']
})
export class CommunitySelectMenuComponent implements OnInit, OnChanges {
  @Output() setCommunity: EventEmitter<Community | undefined> = new EventEmitter();
  @Input() userCommunitiesEntity!: StateEntity<Community[]>;
  @Input() communityParam: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService) {
      this.searchField = new FormControl('')
      this.searchForm = this.formBuilder.group({searchField: this.searchField});
  }

  public selectedCommunity: Community | undefined = undefined;
  public searchForm: FormGroup;
  public searchField: FormControl;
  public showSelectMenu = false;
  public communities: Community[] = [];
  public LOADING_STATUS = RequestStatus.LOADING;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.listenToSearchForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['userCommunitiesEntity']) {
      if(this.userCommunitiesEntity.status === RequestStatus.SUCCESS) {
        this.setCommunityWithQueryParam(this.communityParam);
      }
    }
  }

  public openSelectMenu(): void {
    this.showSelectMenu = true;
  }

  public selectCommunity(community: Community): void {
    this.setSelectedCommunity(community);
    this.close();
  }

  public close(): void {
    this.showSelectMenu = false;
    if(!this.selectedCommunity) {
      this.searchField.setValue('');
    }
  }

  public openCreateCommunityModal(): void {
    this.close();
    this.modalService.openModalWithComponent(CreateCommunityModalComponent);
  }

  private setSelectedCommunity(community: Community | undefined): void {
    if(community) {
      this.searchField.setValue(community.name);
      this.filterCommunities(community.name);
    }
    this.selectedCommunity = community;
    this.setCommunity.next(community);
  }

  private setCommunityWithQueryParam(communityParam: string | null): void {
    if(!communityParam) return;

    const community = this.userCommunitiesEntity.data.find(c => c.name === communityParam);

    this.setSelectedCommunity(community);
  }

  private filterCommunities(name: string): void {
    this.communities = this.userCommunitiesEntity.data.filter(c => c.name.includes(name));
  }

  private listenToSearchForm(): void {
    this.searchField.valueChanges.pipe(
      takeUntil(this.destroy$),
      map((value: string) => {
        this.filterCommunities(value);
        if(!value) {
          this.selectedCommunity = undefined;
        }
      })
    ).subscribe();
  }
  
}
