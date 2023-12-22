import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarModule } from '../navbar/navbar.module';
import { NavigationMenuComponent } from '../shared/components/navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NavbarModule,
    NavigationMenuComponent,
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
