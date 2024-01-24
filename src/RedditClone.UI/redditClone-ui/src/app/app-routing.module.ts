import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './shared/enums/app-routes.enum';

const routes: Routes = [
  { path: AppRoutes.Core, loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
  { path: AppRoutes.Auth, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
