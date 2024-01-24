import { Component, Input } from '@angular/core';
import { AboutFeed } from '../../common/models/feed.models';
import { ModalService } from 'src/app/shared/modules/app-modal/services/modal.service';
import { CreateCommunityModalComponent } from 'src/app/communities/components/create-community-modal/create-community-modal.component';
import { Store } from '@ngrx/store';
import * as NavigationActions from '../../../state/navigation/navigation.actions';
import { SUBMIT_NAV_ITEM } from 'src/app/navbar/common/constants/nav-item.constants';

@Component({
  selector: 'about-feed',
  templateUrl: './about-feed.component.html',
  styleUrls: ['./about-feed.component.css']
})
export class AboutFeedComponent {

  @Input() feedDescription!: AboutFeed;

  constructor(
    private modalService: ModalService,
    private store: Store) {}

  openCreateCommunityModal(): void {
    this.modalService.openModalWithComponent(CreateCommunityModalComponent);
  }

  navigateToSubmitPost(): void {
    this.store.dispatch(NavigationActions.changeCurrentRoute({item: SUBMIT_NAV_ITEM}));
  }

}
