import { ComponentRef, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Directive({
  selector: '[dropdownMenuTriggerFor]'
})
export class DropdownMenuTriggerDirective {

  @Input() dropdownMenuTriggerFor!: DropdownMenuComponent;

  constructor(private el: ElementRef) {  
    
  }

  @HostListener('click') onClick() {
    this.openCloseMenu();
  }

  private openCloseMenu(){
    this.dropdownMenuTriggerFor.open(this.el);
  }

  // @Input() dropdownMenuTriggerFor!: DropdownMenuComponent;
  // private componentRef: ComponentRef<DropdownMenuComponent> | null = null;


  // @HostListener('click') onClick() {
  //   if(this.componentRef?.instance){
  //     this.componentRef.destroy();
  //     this.componentRef = null;
  //     this.viewContainerRef.clear();
  //   }
  //   else{
  //     this.componentRef = this.viewContainerRef.createComponent<DropdownMenuComponent>(DropdownMenuComponent);
  //     this.componentRef.instance.template = this.dropdownMenuTriggerFor.template;
  //     this.componentRef.instance.isVisible = true;
  //   }
  //   console.log(this.dropdownMenuTriggerFor.template);
  // }

  // constructor(private viewContainerRef: ViewContainerRef){}

}
