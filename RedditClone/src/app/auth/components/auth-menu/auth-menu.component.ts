import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent {
  showModal : boolean = false;

  openLoginModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }
}
