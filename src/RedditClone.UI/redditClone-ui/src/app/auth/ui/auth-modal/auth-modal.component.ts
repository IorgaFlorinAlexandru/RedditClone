import { Component, Inject, OnInit } from '@angular/core';
import { MODAL_DATA, ModalElementRef } from 'src/app/shared/modules/app-modal/modal.models';
import { AuthFormRoutes } from '../../common/enums/auth.enums';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {

  constructor(private modalRef: ModalElementRef<AuthModalComponent>, 
    @Inject(MODAL_DATA) private route: string){}

  public modalRoute: AuthFormRoutes = AuthFormRoutes.LOGIN;

  ngOnInit(): void {
    this.modalRoute = this.route as AuthFormRoutes;
  }

  public close(): void {
    this.modalRef.closeModal();
  }
}
