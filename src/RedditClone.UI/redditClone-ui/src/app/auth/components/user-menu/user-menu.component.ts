import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Theme } from 'src/app/shared/enums/theme.enum';
import * as SettingsState from '../../../state/settings/index';
import { map, take } from 'rxjs';

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public onlineStatus = true;
  public darkTheme = false;
  public modMode = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.setDarkThemeBoolean();
  }

  public changeOnlineStatus(): void {
    this.onlineStatus = !this.onlineStatus;
  }

  public changeAppTheme(): void {
    this.darkTheme = !this.darkTheme;
    const theme = this.darkTheme ? Theme.DARK : Theme.LIGHT;

    this.store.dispatch(SettingsState.changeAppTheme({theme}));
  }

  public changeModMode(): void {
    this.modMode = !this.modMode;
  }

  private setDarkThemeBoolean(): void {
    this.store.select(SettingsState.selectAppTheme).pipe(
      take(1),
      map(theme => {
        return theme === Theme.DARK;
      })
    ).subscribe(
      value => this.darkTheme = value
    );
  }
}
