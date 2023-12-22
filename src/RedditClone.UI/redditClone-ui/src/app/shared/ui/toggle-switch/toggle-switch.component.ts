import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent {

  @Input() value = true;
  @Output() toggleSwitched = new EventEmitter<boolean>();

  toggleClicked(): void {
    this.value = !this.value;
    this.toggleSwitched.emit(this.value);
  }

}
