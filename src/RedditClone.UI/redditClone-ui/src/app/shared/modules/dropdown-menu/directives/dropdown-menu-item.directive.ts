import { Directive, ElementRef, Host, HostListener, Inject, Renderer2 } from '@angular/core';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Directive({
  selector: '[dropdown-menu-item]'
})
export class DropdownMenuItemDirective {

  constructor(private element: ElementRef, @Inject(DropdownMenuComponent) private menu: DropdownMenuComponent) {}

  @HostListener('click') onClick() {
    this.closeMenu();
  }

  private closeMenu(): void {
    this.menu.close();
  }

}
