import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, combineLatest, fromEvent, map, takeUntil, tap } from 'rxjs';
import { NavInfoData } from '../../common/utils/navbar.types';
import * as fromNavigation from '../../../state/navigation/index';

@Component({
  selector: 'navbar-navigation',
  templateUrl: './navbar-navigation.component.html',
  styleUrls: ['./navbar-navigation.component.css']
})
export class NavbarNavigationComponent implements OnInit, OnDestroy {

  @ViewChild('navContainer',{static: false}) navContainer! : ElementRef;
  
  navInfo$: Observable<NavInfoData> = new Observable();

  destroy$: Subject<boolean> = new Subject();
  
  isDropdownOpened : boolean = false;

  constructor(private store: Store){}
  
  ngOnInit(): void {
    this.setNavInfoData();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
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
  //TODO COMMENT FUNCTIONALITY
  private checkIfUserClickedOutsideElement(): void {
    fromEvent(document.body,'click').pipe(
      tap(e => {
        if(this.navContainer.nativeElement.contains(e.target)) return;
        this.close();
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public openClose(showAsAsideMenu: boolean): void {
    if(showAsAsideMenu) return;
    if(this.isDropdownOpened) {
      this.close();
      return;
    }

    this.isDropdownOpened = true;
    this.checkIfUserClickedOutsideElement();
  }

  private close(): void {
    this.isDropdownOpened = false;
    this.destroy$.next(true);
  }

  public showAsAsideMenu(){
    this.store.dispatch(fromNavigation.showNavMenuAsAside());
  }
}
