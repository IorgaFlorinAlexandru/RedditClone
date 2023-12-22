import { Component, EventEmitter, Output } from '@angular/core';
import { AuthFormComponent } from '../../common/models/auth.models';
import { AuthFormRoutes } from '../../common/enums/auth.enums';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements AuthFormComponent {
  @Output() changeForm: EventEmitter<AuthFormRoutes> = new EventEmitter<AuthFormRoutes>();
  
  public navigateToForm(route: string): void {
    this.changeForm.emit(route as AuthFormRoutes);
  }
}
