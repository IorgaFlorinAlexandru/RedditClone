import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuTriggerDirective } from './directives/dropdown-menu-trigger.directive';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownMenuItemDirective } from './directives/dropdown-menu-item.directive';
import { HideOnClickAwayDirective } from '../../directives/hide-on-click-away.directive';

@NgModule({
  declarations: [
    DropdownMenuTriggerDirective,
    DropdownMenuComponent,
    DropdownMenuItemDirective
  ],
  imports: [
    CommonModule,
    HideOnClickAwayDirective
  ],
  exports: [
    DropdownMenuTriggerDirective,
    DropdownMenuItemDirective,
    DropdownMenuComponent
  ]
})
export class DropdownMenuModule { }
