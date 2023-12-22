import { Component, Input } from '@angular/core';
import { AboutFeed } from '../../common/models/feed.models';
import { ModalService } from 'src/app/shared/modules/app-modal/services/modal.service';
import { Router } from '@angular/router';
import { CreateCommunityModalComponent } from 'src/app/communities/components/create-community-modal/create-community-modal.component';
import { Store } from '@ngrx/store';
import * as NavigationActions from '../../../state/navigation/navigation.actions';
import { NavigationActionType } from 'src/app/core/common/enums/navigation.enums';

@Component({
  selector: 'about-feed',
  templateUrl: './about-feed.component.html',
  styleUrls: ['./about-feed.component.css']
})
export class AboutFeedComponent {

  @Input() feedDescription!: AboutFeed;

  constructor(private modalService: ModalService,private router: Router,private store: Store){}

  openCreateCommunityModal(): void {
    this.modalService.openModalWithComponent(CreateCommunityModalComponent);
  }

  navigateToSubmitPost(): void {
    this.router.navigateByUrl('submit');
    this.store.dispatch(NavigationActions.changeCurrentRoute({item: { icon: 'plus', name: 'Create Post', route: 'submit',actionType: NavigationActionType.ROUTE}}));
  }

}
