import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ForgotUsernameFormComponent } from './components/forgot-username-form/forgot-username-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';

const routes: Routes = [
  {path: '', component: AuthPageComponent, children: [
    {path: 'login', component: LoginFormComponent, pathMatch: 'full' },
    {path: 'register', component: RegisterFormComponent,  pathMatch: 'full' },
    {path: 'forgotUsername', component: ForgotUsernameFormComponent,  pathMatch: 'full' },
    {path: 'forgotPassword', component: ForgotPasswordFormComponent,  pathMatch: 'full' },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
