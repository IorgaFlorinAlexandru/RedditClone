import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from '../shared/components/test-page/test-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CoreRoutes } from './common/enums/core-routes.enum';

const routes: Routes = [
 {path: '', component: LayoutComponent, children: [
  { path: CoreRoutes.Feed, loadChildren: () => import('../feeds/feeds.module').then(m => m.FeedsModule) },
  { path: CoreRoutes.Community, loadChildren: () => import('../communities/communities.module').then(m => m.CommunitiesModule) },
  { path: CoreRoutes.Submit, loadChildren: () => import('../submit-post/submit-post.module').then(m => m.SubmitPostModule) },
  { path: CoreRoutes.Settings, loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
  { path: CoreRoutes.Notifications, loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: CoreRoutes.Test, component: TestPageComponent },
 ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
