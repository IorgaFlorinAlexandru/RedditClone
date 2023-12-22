import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css']
})
export class AppInputComponent {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
