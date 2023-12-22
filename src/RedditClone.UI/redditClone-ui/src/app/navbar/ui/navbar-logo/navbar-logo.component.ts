import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as NavigationActions from '../../../state/navigation/navigation.actions';
import { NavigationActionType } from 'src/app/core/common/enums/navigation.enums';

@Component({
  selector: 'navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.css']
})
export class NavbarLogoComponent {

  constructor(private router: Router,private store: Store){}

  navigateToHome(): void {
    this.router.navigateByUrl('');
    this.store.dispatch(NavigationActions.changeCurrentRoute({item: { icon: 'home', name: 'Home', route: '',actionType: NavigationActionType.ROUTE}}))
  }

}
