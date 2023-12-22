import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { FeedSettingsComponent } from './components/feed-settings/feed-settings.component';
import { PrivacySettingsComponent } from './components/privacy-settings/privacy-settings.component';
import { NotificationsSettingsComponent } from './components/notifications-settings/notifications-settings.component';


@NgModule({
  declarations: [  
    SettingsPageComponent,
    ProfileSettingsComponent,
    AccountSettingsComponent,
    FeedSettingsComponent,
    PrivacySettingsComponent,
    NotificationsSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
