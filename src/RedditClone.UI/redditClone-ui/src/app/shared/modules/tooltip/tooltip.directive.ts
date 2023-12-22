import { ComponentRef, Directive, HostListener, Input, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from './tooltip-component/tooltip.component';

@Directive({
  selector: '[toolTip]'
})
export class TooltipDirective {

  @Input() toolTip!: string;
  private componentRef: ComponentRef<TooltipComponent> | null = null;
  private timeout! : ReturnType<typeof setTimeout>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.showTooltip();
  }

  
  @HostListener('mouseleave') onMouseLeave(){
    this.hideTooltip();
  }

  private showTooltip(): void {
    this.timeout = setTimeout(() => {
      this.componentRef = this.viewContainerRef.createComponent<TooltipComponent>(TooltipComponent);
      this.componentRef.instance.toolTip = this.toolTip;
      this.componentRef.instance.setPositions((this.viewContainerRef.element.nativeElement as HTMLElement).getBoundingClientRect());
    },500)
  }

  private hideTooltip(): void {
    clearTimeout(this.timeout);

    if(this.componentRef){
      this.componentRef?.destroy();
      this.componentRef = null;
    }
  }

}
