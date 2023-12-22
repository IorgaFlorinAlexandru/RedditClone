import { Component, EventEmitter, Output } from '@angular/core';
import { AuthFormComponent } from '../../common/models/auth.models';
import { AuthFormRoutes } from '../../common/enums/auth.enums';

@Component({
  selector: 'forgot-username-form',
  templateUrl: './forgot-username-form.component.html',
  styleUrls: ['./forgot-username-form.component.css']
})
export class ForgotUsernameFormComponent implements AuthFormComponent {
  @Output() changeForm: EventEmitter<AuthFormRoutes> = new EventEmitter<AuthFormRoutes>();
  
  public navigateToForm(route: string): void {
    this.changeForm.emit(route as AuthFormRoutes);
  }

}
