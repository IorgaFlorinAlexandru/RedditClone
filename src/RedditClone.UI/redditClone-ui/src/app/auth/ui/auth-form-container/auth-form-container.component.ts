import { Component, Input } from '@angular/core';
import { AuthFormRoutes } from '../../common/enums/auth.enums';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-form-container',
  templateUrl: './auth-form-container.component.html',
  styleUrls: ['./auth-form-container.component.css']
})
export class AuthFormContainerComponent {

  constructor(private router: Router){}

  public LOGIN_ROUTE = AuthFormRoutes.LOGIN;
  public REGISTER_ROUTE = AuthFormRoutes.REGISTER;
  public FORGOT_PASS_ROUTE = AuthFormRoutes.FORGOT_PASS;
  public FORGOT_USER_ROUTE = AuthFormRoutes.FORGOT_USER;

  @Input() currentRoute: AuthFormRoutes = AuthFormRoutes.LOGIN; 
  @Input() isNotModal: boolean = false; 

  changeFormComponent(route: AuthFormRoutes): void {
    this.currentRoute = route;
    if(this.isNotModal) this.router.navigateByUrl(route);
  }
}
