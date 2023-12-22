import { Component, EventEmitter, Output } from '@angular/core';
import { AuthFormRoutes } from '../../common/enums/auth.enums';
import { AuthFormComponent } from '../../common/models/auth.models';

@Component({
  selector: 'forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent implements AuthFormComponent {
  @Output() changeForm: EventEmitter<AuthFormRoutes> = new EventEmitter<AuthFormRoutes>();
  
  public navigateToForm(route: string): void {
    this.changeForm.emit(route as AuthFormRoutes);
  }
}
