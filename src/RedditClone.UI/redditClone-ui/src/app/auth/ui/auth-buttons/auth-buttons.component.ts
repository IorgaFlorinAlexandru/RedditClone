import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/modules/app-modal/services/modal.service';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';

@Component({
  selector: 'auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent {

  constructor(private modalService: ModalService){}

  public openAuthModal(route: string): void {
    this.modalService.openModalWithComponent(AuthModalComponent, { data: route });
  }
}
