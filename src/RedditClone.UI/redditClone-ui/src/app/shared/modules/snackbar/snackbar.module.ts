import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Snackbar } from './snackbar';
import { AppIconModule } from '../app-icon/app-icon.module';



@NgModule({
  declarations: [
    Snackbar
  ],
  imports: [
    CommonModule,
    AppIconModule
  ]
})
export class SnackbarModule { }
