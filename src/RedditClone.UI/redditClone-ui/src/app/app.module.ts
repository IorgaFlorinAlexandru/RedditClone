import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppModalModule } from './shared/modules/app-modal/app-modal.module';
import { EffectsModule } from '@ngrx/effects';
import { navigationReducer } from './state/navigation';
import { NavigationEffects } from './state/navigation/navigation.effects';
import { settingsReducer } from './state/settings';
import { userReducer } from './state/user/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { communitiesReducer } from './state/communities/communities.reducer';
import { CommunitiesEffects } from './state/communities/communities.effects';
import { SnackbarModule } from './shared/modules/snackbar/snackbar.module';
import { SettingsEffects } from './state/settings/settings.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({
      Navigation: navigationReducer,
      Settings: settingsReducer,
      User: userReducer,
      Communities: communitiesReducer
    }),
    EffectsModule.forRoot([CommunitiesEffects,NavigationEffects,SettingsEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    AppModalModule,
    SnackbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
