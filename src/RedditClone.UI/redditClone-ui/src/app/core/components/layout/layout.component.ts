import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as NavigationSelectors from '../../../state/navigation/navigation.selectors';
import * as CommunityActions from '../../../state/communities/communities.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  constructor(private store: Store){}

  showNavMenu$ : Observable<boolean> = new Observable();

  ngOnInit(): void {
    this.setShowNavMenu();
    this.getCommunities(); // move to user effect
  }

  private setShowNavMenu(): void {
    this.showNavMenu$ = this.store.select(NavigationSelectors.selectShowNavigationMenu);
  }

  private getCommunities(): void {
    this.store.dispatch(CommunityActions.loadCommunitiesAction());
  }


}
