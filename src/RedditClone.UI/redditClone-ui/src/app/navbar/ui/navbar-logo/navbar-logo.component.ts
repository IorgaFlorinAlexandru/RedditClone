import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as NavigationActions from '../../../state/navigation/navigation.actions';
import { HOME_NAV_ITEM } from '../../common/constants/nav-item.constants';

@Component({
  selector: 'navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.css']
})
export class NavbarLogoComponent {

  constructor(private store: Store){}

  navigateToHome(): void {
    this.store.dispatch(NavigationActions.changeCurrentRoute({item: HOME_NAV_ITEM}))
  }
}