import { Component, EventEmitter, Output } from '@angular/core';
import { AuthFormRoutes, RegisterSteps } from '../../common/enums/auth.enums';
import { AuthFormComponent } from '../../common/models/auth.models';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements AuthFormComponent {

  @Output() changeForm: EventEmitter<AuthFormRoutes> = new EventEmitter<AuthFormRoutes>();
  
  public navigateToForm(route: string): void {
    this.changeForm.emit(route as AuthFormRoutes);
  }

  public REGISTER_STEP = RegisterSteps.SET_EMAIL;
  public SET_EMAIL_STEP = RegisterSteps.SET_EMAIL;
  public SET_USER_AND_PASS_STEP = RegisterSteps.SET_USERNAME_AND_PASSWORD;

  public goToNextStep(): void {
    this.REGISTER_STEP++;
  }

  public goToPreviousStep(): void {
    this.REGISTER_STEP--;
  }
}
