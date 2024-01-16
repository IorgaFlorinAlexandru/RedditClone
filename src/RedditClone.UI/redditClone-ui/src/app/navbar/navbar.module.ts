import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarContainerComponent } from './components/navbar-container/navbar-container.component';
import { NavbarLogoComponent } from './ui/navbar-logo/navbar-logo.component';
import { NavbarSearchComponent } from './components/navbar-search/navbar-search.component';
import { NavbarButtonsComponent } from './components/navbar-buttons/navbar-buttons.component';
import { NavbarNavigationComponent } from './components/navbar-navigation/navbar-navigation.component';
import { NavigationMenuComponent } from '../shared/components/navigation-menu/navigation-menu.component';
import { RouterModule } from '@angular/router';
import { DropdownMenuModule } from '../shared/modules/dropdown-menu/dropdown-menu.module';
import { TooltipModule } from '../shared/modules/tooltip/tooltip.module';
import { AppIconModule } from '../shared/modules/app-icon/app-icon.module';
import { AuthModule } from '../auth/auth.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { HideOnClickAwayDirective } from '../shared/directives/hide-on-click-away.directive';



@NgModule({
  declarations: [
    NavbarContainerComponent,
    NavbarLogoComponent,
    NavbarSearchComponent,
    NavbarButtonsComponent,
    NavbarNavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationMenuComponent,
    RouterModule,
    DropdownMenuModule,
    TooltipModule,
    RouterModule,
    AppIconModule,
    AuthModule,
    NotificationsModule,
    HideOnClickAwayDirective
  ],
  exports: [
    NavbarContainerComponent
  ]
})
export class NavbarModule { }
