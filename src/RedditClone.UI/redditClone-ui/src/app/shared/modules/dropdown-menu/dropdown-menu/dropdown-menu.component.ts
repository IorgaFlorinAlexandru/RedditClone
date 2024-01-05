import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DropdownMenuPosition } from '../dropdown-menu.models';

@Component({
  selector: 'dropdown-menu-component',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
})
export class DropdownMenuComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
    this.setPositionClass(this.position);
    this.setDropdownMenuStyle();
  }

  @ViewChild('menu',{static: false}) templateMenu!: TemplateRef<any>;

  @Input() position: DropdownMenuPosition = 'left';
  @Input() offsetY: number = 0;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  positionClass = 'dropdown-menu-left';
  dropdownMenuStyle = '';

  public closeMenu(): void {
    this.close.emit(true);
  }

  private setPositionClass(position: string): void {
    switch(position){
      case 'left':
        this.positionClass = 'dropdown-menu-left';
        break;
      case 'center':
        this.positionClass = 'dropdown-menu-center';
        break;
      case 'right':
        this.positionClass = 'dropdown-menu-right';
        break;
    }
  }

  private setDropdownMenuStyle(): void {
    if(this.offsetY !== 0) {
      this.dropdownMenuStyle += `top: ${this.offsetY}px`;
    }
  }
}
