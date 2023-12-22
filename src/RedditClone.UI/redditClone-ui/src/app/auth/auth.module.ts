import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { DropdownMenuModule } from '../shared/modules/dropdown-menu/dropdown-menu.module';
import { AppIconModule } from '../shared/modules/app-icon/app-icon.module';
import { SharedModule } from '../shared/shared.module';
import { AuthButtonsComponent } from './ui/auth-buttons/auth-buttons.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RouterModule } from '@angular/router';
import { AuthModalComponent } from './ui/auth-modal/auth-modal.component';
import { AuthFormContainerComponent } from './ui/auth-form-container/auth-form-container.component';
import { ForgotUsernameFormComponent } from './components/forgot-username-form/forgot-username-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';


@NgModule({
  declarations: [
    UserMenuComponent,
    ProfilePageComponent,
    AuthButtonsComponent,
    AuthPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AuthModalComponent,
    AuthFormContainerComponent,
    ForgotUsernameFormComponent,
    ForgotPasswordFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    DropdownMenuModule,
    AppIconModule,
    SharedModule
  ],
  exports:[
    UserMenuComponent,
    AuthButtonsComponent
  ]
})
export class AuthModule { }
