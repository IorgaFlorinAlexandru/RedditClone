import { Component } from '@angular/core';

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {

  public onlineStatus = true;
  public darkTheme = true;
  public modMode = false;

  changeOnlineStatus(): void {
    this.onlineStatus = !this.onlineStatus;
  }

  changeAppTheme(): void {
    this.darkTheme = !this.darkTheme;
  }

  changeModMode(): void {
    this.modMode = !this.modMode;
  }
}
