import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, of, startWith, switchMap } from 'rxjs';
import { Navigation, NavigationItem } from 'src/app/core/common/models/navigation.models';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { ModalService } from '../../modules/app-modal/services/modal.service';
import { CreateCommunityModalComponent } from 'src/app/communities/components/create-community-modal/create-community-modal.component';
import * as fromNavigation from '../../../state/navigation/index';
import { AppIconModule } from '../../modules/app-icon/app-icon.module';
import { NavigationActionType } from 'src/app/core/common/enums/navigation.enums';
import { DefaultCommunityIconComponent } from '../default-community-icon/default-community-icon.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    AppIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DefaultCommunityIconComponent
  ],
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  navigation$: Observable<Navigation> | undefined;
  filterField: FormControl = new FormControl();
  formGroup: FormGroup;
  navActionTypes : typeof NavigationActionType = NavigationActionType;

  constructor(private store: Store,private router: Router,private formBuilder: FormBuilder,private modalService: ModalService){
    this.formGroup = this.formBuilder.group({filter: this.filterField});
  }

  ngOnInit(): void {
    this.setNavGroups();
  }

  private setNavGroups(): void {
    this.navigation$ = combineLatest([
      this.store.select(fromNavigation.selectNavigation),
      this.filterField.valueChanges.pipe(startWith(''))
    ]).pipe(
      switchMap(([navigation,value]) => {
        const filteredRoutes = navigation.items.map(group => {
          return {...group,routes: group.routes.filter(i => i.name.includes(value) || i.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))}
        })
        return of(
          {...navigation, items: filteredRoutes}
        );
      })
    );
  }

  public navigationItemClicked(item: NavigationItem, currentRoute: NavigationItem): void {
    if(item === currentRoute){
      this.store.dispatch(fromNavigation.hideNavMenu());
      return;
    }

    if(item.actionType === NavigationActionType.CREATE_COMMUNITY_MODAL) {
      this.store.dispatch(fromNavigation.hideNavMenu());
      this.openCreateCommunityModal();
      return;
    }
    this.navigateToRoute(item);
  }

  public hideNavigationMenu(): void {
    this.store.dispatch(fromNavigation.hideNavMenu());
  }

  private navigateToRoute(item: NavigationItem): void {
    this.store.dispatch(fromNavigation.changeCurrentRoute({item: item}));
  }

  private openCreateCommunityModal(): void {
    this.modalService.openModalWithComponent(CreateCommunityModalComponent);
  }
  
}
