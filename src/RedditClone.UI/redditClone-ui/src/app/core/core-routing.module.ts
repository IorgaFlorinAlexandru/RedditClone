import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from '../shared/components/test-page/test-page.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
 {path: '', component: LayoutComponent, children: [
  { path: '', loadChildren: () => import('../feeds/feeds.module').then(m => m.FeedsModule) },
  { path: 'r', loadChildren: () => import('../communities/communities.module').then(m => m.CommunitiesModule) },
  { path: 'submit', loadChildren: () => import('../submit-post/submit-post.module').then(m => m.SubmitPostModule) },
  { path: 'settings', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
  { path: 'notifications', loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: 'test', component: TestPageComponent },
 ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
