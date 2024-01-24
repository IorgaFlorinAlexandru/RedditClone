import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { NavigationItem } from 'src/app/core/common/models/navigation.models';
import * as NavigationActions from '../../../state/navigation/navigation.actions';
import * as NavigationSelectors from '../../../state/navigation/navigation.selectors';
import { NavigationGroupType } from 'src/app/core/common/enums/navigation.enums';
import { POPULAR_NAV_ITEM, SUBMIT_NAV_ITEM } from '../../common/constants/nav-item.constants';

@Component({
  selector: 'navbar-buttons',
  templateUrl: './navbar-buttons.component.html',
  styleUrls: ['./navbar-buttons.component.css']
})
export class NavbarButtonsComponent {
  moderatingRoutes$: Observable<NavigationItem[]> = new Observable();

  constructor(private store: Store){
    this.setModeratingRoutes();
  }

  private setModeratingRoutes(): void{
    this.moderatingRoutes$ = this.store.select(NavigationSelectors.selectRoutes).pipe(
      map(groups => {
        return groups.filter(g => g.type === NavigationGroupType.MODERATING)[0].routes;
      })
    )
  }

  navigateToRoute(item: NavigationItem){
    console.log(item);
  }

  navigateToSubmit(): void {
    this.store.dispatch(NavigationActions.changeCurrentRoute({item: SUBMIT_NAV_ITEM}));
  }

  navigateToPopularFeed(): void {
    this.store.dispatch(NavigationActions.changeCurrentRoute({item: POPULAR_NAV_ITEM}));
  }
}
