import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ModalService } from 'src/app/shared/modules/app-modal/services/modal.service';
import * as UserStateSelectors from '../../../state/user/user.selectors';

@Component({
  selector: 'navbar',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit,AfterViewInit,OnDestroy {

  @ViewChild('navbarContainer') navbarContainer!: ElementRef;
  public isLoggedOn: boolean = false;
  private destroy$: Subject<boolean> = new Subject();
  public isLoggedOn$: Observable<boolean> = new Observable();

  constructor(private modalService: ModalService,private store: Store){}

  ngOnInit(): void {
    this.setIsLoggedOnBool();
  }

  ngAfterViewInit(): void {
    this.modalService.addElement(this.navbarContainer);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  setIsLoggedOnBool(): void {
    this.isLoggedOn$ = this.store.select(UserStateSelectors.selectIsLoggedOn).pipe(
      takeUntil(this.destroy$)
    );
  }
}
