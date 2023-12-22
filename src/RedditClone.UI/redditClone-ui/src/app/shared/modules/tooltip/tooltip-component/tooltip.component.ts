import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { ElementPositions } from 'src/app/shared/models/shared.models';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef, private changeDetectore: ChangeDetectorRef) { }

  toolTip: string = '';
  positionStyles: string = '';
  private positions: ElementPositions = new ElementPositions(0,0,0,0);

  ngAfterViewInit() {
    this.positions.right -= this.elementRef.nativeElement.children[0].offsetWidth/2;
    this.positionTooltip();
  }

  private positionTooltip(): void {
    this.positionStyles = `right: ${this.positions.right}px;bottom: ${this.positions.bottom}px;`;
    this.changeDetectore.detectChanges();
  }

  setPositions(domRect: DOMRect): void {
    this.positions.right = document.body.clientWidth - domRect.right + domRect.width/2;
    this.positions.bottom = -domRect.bottom + 20
  }
}
