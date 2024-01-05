import { Directive, HostListener, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[dropdownMenuTriggerFor]'
})
export class DropdownMenuTriggerDirective implements OnDestroy {

  @Input('dropdownMenuTriggerFor') set menu(dropdownMenu: DropdownMenuComponent | null) {
    if(dropdownMenu) {
      this._menu = dropdownMenu;
      this._menu.close.pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.closeDropdownMenu();
      });
    }
  };
  get menu(): DropdownMenuComponent | null {
    return this._menu;
  }

  private _menu: DropdownMenuComponent | null = null;
  private isClosed = true;
  private destroy$: Subject<boolean> = new Subject();

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  @HostListener('click') onClick(): void {
    this.openCloseMenu();
  }

  private openCloseMenu(): void {
    if (this.isClosed) { 
      this.openDropdownMenu();
    }
    else {
      this.closeDropdownMenu();
    }
  }

  private openDropdownMenu(): void {
    if(this.menu) {
      this.viewContainerRef.createEmbeddedView(this.menu.templateMenu);
      const element = this.viewContainerRef.element.nativeElement as HTMLElement;
      const parent = element.parentElement;
      parent?.classList.add('relative');
      this.isClosed = false;
    }
  }

  private closeDropdownMenu(): void {
    this.viewContainerRef.clear();
    this.isClosed = true;
  }

}
