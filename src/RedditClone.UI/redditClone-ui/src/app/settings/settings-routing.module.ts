import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { PrivacySettingsComponent } from './components/privacy-settings/privacy-settings.component';
import { FeedSettingsComponent } from './components/feed-settings/feed-settings.component';
import { NotificationsSettingsComponent } from './components/notifications-settings/notifications-settings.component';
import { SettingsRoutes } from './common/enums/settings-routes.enum';

const routes: Routes = [
  {path: '', component: SettingsPageComponent,children: [
    { path: '', redirectTo: SettingsRoutes.Account, pathMatch: 'full' },
    { path: SettingsRoutes.Account, component: AccountSettingsComponent },
    { path: SettingsRoutes.Profile, component: ProfileSettingsComponent },
    { path: SettingsRoutes.Privacy, component: PrivacySettingsComponent },
    { path: SettingsRoutes.Feed, component: FeedSettingsComponent },
    { path: SettingsRoutes.Notifications, component: NotificationsSettingsComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
