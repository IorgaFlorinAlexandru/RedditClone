import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationMenuComponent } from './components/notification-menu/notification-menu.component';
import { NotificationPageComponent } from './components/notification-page/notification-page.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { NotificationCardComponent } from './ui/notification-card/notification-card.component';
import { AppIconModule } from '../shared/modules/app-icon/app-icon.module';
import { RouterModule } from '@angular/router';
import { DropdownMenuModule } from '../shared/modules/dropdown-menu/dropdown-menu.module';
import { DefaultCommunityIconComponent } from '../shared/components/default-community-icon/default-community-icon.component';


@NgModule({
  declarations: [
    NotificationMenuComponent,
    NotificationPageComponent,
    NotificationListComponent,
    NotificationCardComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    DefaultCommunityIconComponent,
    AppIconModule,
    DropdownMenuModule,
    RouterModule
  ],
  exports: [
    NotificationMenuComponent
  ]
})
export class NotificationsModule { }
