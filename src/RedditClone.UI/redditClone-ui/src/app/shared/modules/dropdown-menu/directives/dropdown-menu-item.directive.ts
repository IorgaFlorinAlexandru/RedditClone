import { Directive, HostListener, Inject } from '@angular/core';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Directive({
  selector: '[dropdown-menu-item]'
})
export class DropdownMenuItemDirective {

  constructor(@Inject(DropdownMenuComponent) private menu: DropdownMenuComponent) {}

  @HostListener('click') onClick() {
    this.closeDropdownMenu();
  }

  private closeDropdownMenu(): void {
    this.menu.closeMenu();
  }

}
