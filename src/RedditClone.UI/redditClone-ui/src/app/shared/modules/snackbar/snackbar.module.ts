import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Snackbar } from './snackbar';
import { AppIconModule } from '../app-icon/app-icon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    Snackbar
  ],
  imports: [
    CommonModule,
    AppIconModule,
    BrowserAnimationsModule
  ]
})
export class SnackbarModule { }
