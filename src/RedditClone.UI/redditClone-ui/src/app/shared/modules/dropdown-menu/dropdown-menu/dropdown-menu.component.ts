import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { Subject, fromEvent, takeUntil, tap } from 'rxjs';
import { DropdownMenuPosition } from '../dropdown-menu.models';
import { ElementPositions } from 'src/app/shared/models/shared.models';

@Component({
  selector: 'dropdown-menu-component',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
})
export class DropdownMenuComponent implements OnDestroy {

  @ViewChild('menu',{static: false}) menu!: ElementRef;

  @Input() position: DropdownMenuPosition = 'left';
  @Input() hasSameWidth: boolean = false;
  @Input() offsetY: number = 0;

  isVisible: boolean = false;
  destroy$: Subject<boolean> = new Subject();
  private positions: ElementPositions = new ElementPositions(0,0,0,0);
  positionStyle: string = '';

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public checkIfUserClickedOutside(element: ElementRef<any>): void {
    fromEvent(document.body,'click').pipe(
      tap(e => {
        if(this.menu?.nativeElement.contains(e.target) || element.nativeElement.contains(e.target)) return;

        this.close();
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public openClose(): void {
    this.isVisible = !this.isVisible;

  }

  public close(): void {
    this.destroy$.next(true);
    this.isVisible = false;
  }

  public open(triggerElement: ElementRef<any>): void {
    if(!this.isVisible){
      this.isVisible = true;
      this.checkIfUserClickedOutside(triggerElement); 
      this.positionMenu(triggerElement.nativeElement as HTMLElement);
      return;
    }

    this.close();
  }

  private positionMenu(element: HTMLElement): void {
    const domRect = element.getBoundingClientRect();
    if(this.hasSameWidth){
      const rightPos = document.body.clientWidth - domRect.right;
      this.positionStyle = `right: ${rightPos}px;left: ${domRect.left}px;top: ${domRect.top + domRect.height + this.offsetY}px`
      return;
    }

    switch(this.position){
      case 'left':
        const rightPos = document.body.clientWidth - domRect.right;
        this.positionStyle = `right: ${rightPos}px;`
        break;
      case 'center':
        let centerPos = document.body.clientWidth - domRect.right;
        centerPos -= this.menu.nativeElement.offsetWidth/2 - domRect.width/2;
        this.positionStyle = `right: ${centerPos}px;`
        break;
      case 'right':
        let leftPos = document.body.clientWidth - domRect.right;
        leftPos -= this.menu.nativeElement.offsetWidth - domRect.width;
        this.positionStyle = `right: ${leftPos}px;`
        break;
    }
  }
}
