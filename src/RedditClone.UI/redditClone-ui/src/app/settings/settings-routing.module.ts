import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { PrivacySettingsComponent } from './components/privacy-settings/privacy-settings.component';
import { FeedSettingsComponent } from './components/feed-settings/feed-settings.component';
import { NotificationsSettingsComponent } from './components/notifications-settings/notifications-settings.component';

const routes: Routes = [
  {path: '', component: SettingsPageComponent,children: [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: 'account', component: AccountSettingsComponent },
    { path: 'profile', component: ProfileSettingsComponent },
    { path: 'privacy', component: PrivacySettingsComponent },
    { path: 'feed', component: FeedSettingsComponent },
    { path: 'notifications', component: NotificationsSettingsComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
