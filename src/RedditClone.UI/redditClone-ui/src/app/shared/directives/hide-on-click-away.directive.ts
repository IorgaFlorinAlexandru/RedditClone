import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Subject, fromEvent, takeUntil, tap } from 'rxjs';

@Directive({
  selector: '[hideOnClickAway]'
})
export class HideOnClickAwayDirective implements AfterViewInit {

  constructor(private element: ElementRef) { }
  
  @Input() hideOnClickAway!: Function;
  
  destroy$: Subject<boolean> = new Subject();
  
  ngAfterViewInit(): void {
    this.checkIfClickedOutside();
  }

  checkIfClickedOutside(): void {
    fromEvent(document.body,'click').pipe(
      tap(e =>{
        if(this.element.nativeElement.contains(e.target)) return;
        
          this.hide();
        }
      ),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  private hide(): void {
    this.destroy$.next(true);
    this.hideOnClickAway();
  }

}
