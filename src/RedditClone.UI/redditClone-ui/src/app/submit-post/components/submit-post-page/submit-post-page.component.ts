import { Component, OnInit } from '@angular/core';
import { SubmitFormTab } from '../../common/models/submit.models';
import { SubmitFormService } from '../../services/submit-form.service';
import { FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/shared/modules/app-modal/services/modal.service';
import { DraftsModalComponent } from '../drafts-modal/drafts-modal.component';
import { PostType } from 'src/app/posts/common/enums/post.enums';
import { Community } from 'src/app/communities/common/models/communities.models';
import { ActivatedRoute } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { CreatePostRequest } from '../../common/models/create-post.model';
import { Store } from '@ngrx/store';
import * as SubmitActions from '../../state/submit.actions';
import * as SubmitSelectors from '../../state/submit.selectors';
import * as CommunitySelectors from '../../../state/communities/communities.selectors';
import { RequestStatus } from 'src/app/shared/enums/status.enum';
import { StateEntity } from 'src/app/shared/models/store-entity.models';
import { FormParamToPostTypeMap } from '../../common/constants/submit.constants';

@Component({
  selector: 'app-submit-post-page',
  templateUrl: './submit-post-page.component.html',
  styleUrls: ['./submit-post-page.component.css'],
  providers: [SubmitFormService]
})

export class SubmitPostPageComponent implements OnInit {
  
  constructor(
    private submitFormService: SubmitFormService,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private store: Store)
    {
      this.submitFormGroup = this.submitFormService.getFormGroupByPostType(PostType.TEXT);
    }

  public createPostStatus$: Observable<RequestStatus> = new Observable();
  public userCommunities$: Observable<StateEntity<Community[]>> = new Observable();
  public submitFormTabs: SubmitFormTab[] = [];
  public submitFormGroup: FormGroup;
  public selectedCommunity: Community | undefined = undefined;
  public communityParam: string | null = null;
  public LOADING_STATUS = RequestStatus.LOADING;


  ngOnInit(): void {
    this.setFormTabs();
    this.getRouteParams();
    this.setUserCommunities();
    this.setCreatePostStatus();
  }

  public changeCurrentTab(currentTab: SubmitFormTab): void {
    this.submitFormTabs.forEach(tab => {
      tab.isActive = tab === currentTab;
    });

    this.submitFormGroup = this.submitFormService.getFormGroupByPostType(currentTab.postType);
  }

  public submitPost(): void {
    if(!this.selectedCommunity) return;
    
    const submitValues = Object.values(this.submitFormGroup.value);
    const titleValue = submitValues[0] as string;
    const contentValue = submitValues[1] as string;
    const postType = this.submitFormTabs.find(t => t.isActive)!.postType;

    const createPostRequest: CreatePostRequest = {
      title: titleValue,
      contentType: postType,
      content: contentValue,
      communityId: this.selectedCommunity.id
    }

    this.store.dispatch(SubmitActions.createPostAction({request: createPostRequest}));
  }

  public canSubmitPost(): boolean {
    return this.submitFormGroup.valid;
  }

  public openDraftsModal(): void {
    this.modalService.openModalWithComponent(DraftsModalComponent);
  }

  public hasSelectedCommunity(community: Community | undefined){
    this.selectedCommunity = community;
  }

  public canPost(): boolean {
    return this.submitFormGroup.invalid || this.selectedCommunity === undefined;
  }

  private setFormTabs(): void {
    const textTab: SubmitFormTab = { name: 'Post', icon: 'newspaper', postType: PostType.TEXT, isActive: true, disabled: false };
    const mediaTab: SubmitFormTab = { name: 'Images & Videos', icon: 'photo', postType: PostType.MEDIA, isActive: false, disabled: true };
    const linkTab: SubmitFormTab = { name: 'Link', icon: 'link', postType: PostType.LINK, isActive: false, disabled: false };

    this.submitFormTabs.push(textTab,mediaTab,linkTab);
  }

  private setCreatePostStatus(): void {
    this.createPostStatus$ = this.store.select(SubmitSelectors.selectCreatePostStatus);
  }

  private getRouteParams(): void {
    this.route.queryParamMap.pipe(
      tap(param => {
        const formParam = param.get('form');
        if(formParam) {
          this.changeCurrentTabWithQueryParam(formParam);
        }
        this.communityParam = param.get('community');
      }),
      take(1)
    ).subscribe();
  }

  private setUserCommunities(): void {
    this.userCommunities$ = this.store.select(CommunitySelectors.selectUserCommunitiesEntity);
  }

  private changeCurrentTabWithQueryParam(form: string): void {
    if(!FormParamToPostTypeMap.has(form)) return;

    const postType = FormParamToPostTypeMap.get(form);

    const tab = this.submitFormTabs.find(t => t.postType === postType);
    
    if(tab) {
      this.changeCurrentTab(tab);
    }
  }
}
