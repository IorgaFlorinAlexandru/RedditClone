import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './ui/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
