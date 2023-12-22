import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'create-post-bar',
  templateUrl: './create-post-bar.component.html',
  styleUrls: ['./create-post-bar.component.css']
})
export class CreatePostBarComponent {
  @Output() submitRoute = new EventEmitter<string>();

  navigateToSubmit(route: string): void {
    this.submitRoute.emit(route);
  }
}
