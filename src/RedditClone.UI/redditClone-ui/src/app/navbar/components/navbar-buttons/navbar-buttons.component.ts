import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { NavigationItem } from 'src/app/core/common/models/navigation.models';
import * as NavigationSelectors from '../../../state/navigation/navigation.selectors';
import { NavigationGroupType } from 'src/app/core/common/enums/navigation.enums';

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
}
