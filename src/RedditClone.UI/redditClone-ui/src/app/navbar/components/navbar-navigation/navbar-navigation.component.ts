import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, combineLatest, map, tap } from 'rxjs';
import { NavInfoData } from '../../common/utils/navbar.types';
import * as fromNavigation from '../../../state/navigation/index';
import { NavigationActionType } from 'src/app/core/common/enums/navigation.enums';

@Component({
  selector: 'navbar-navigation',
  templateUrl: './navbar-navigation.component.html',
  styleUrls: ['./navbar-navigation.component.css']
})
export class NavbarNavigationComponent implements OnInit, OnDestroy {
  
  navInfo$: Observable<NavInfoData> = new Observable();
  destroy$: Subject<boolean> = new Subject();
  
  isDropdownOpened : boolean = false;
  navActionTypes: typeof NavigationActionType = NavigationActionType;

  constructor(private store: Store){}
  
  ngOnInit(): void {
    this.setNavInfoData();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public openClose(showAsAsideMenu: boolean): void {
    if(showAsAsideMenu) return;
    if(this.isDropdownOpened) {
      this.close();
      return;
    }

    this.isDropdownOpened = true;
  }

  public close(): void {
    this.isDropdownOpened = false;
    this.destroy$.next(true);
  }

  public showAsAsideMenu(){
    this.store.dispatch(fromNavigation.showNavMenuAsAside());
  }

  private setNavInfoData(): void {
    this.navInfo$ = combineLatest([
      this.store.select(fromNavigation.selectCurrentRoute),
      this.store.select(fromNavigation.selectShowNavigationMenu)
    ]).pipe(
      tap(() => {
        this.close();
      }),
      map(([route,show]): NavInfoData => {
        return {currentRoute: route, showAsAsideMenu: show}
      })
    )
  }
}
