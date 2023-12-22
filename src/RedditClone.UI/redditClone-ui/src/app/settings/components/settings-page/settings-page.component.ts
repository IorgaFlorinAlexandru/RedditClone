import { Component, OnInit } from '@angular/core';
import { RouteItem } from 'src/app/core/common/models/navigation.models';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  
  ngOnInit(): void {
    this.setSettingsRoutes();
  }

  private setSettingsRoutes(): void {
    this.settingsRoutes.push(
      {name: 'Account',route: 'account'},
      {name: 'Profile',route: 'profile'},
      {name: 'Safety & Privacy',route: 'privacy'},
      {name: 'Feed Settings',route: 'feed'},
      {name: 'Notifications',route: 'notifications'},
    )
  }

  settingsRoutes: RouteItem[] = [];
}
