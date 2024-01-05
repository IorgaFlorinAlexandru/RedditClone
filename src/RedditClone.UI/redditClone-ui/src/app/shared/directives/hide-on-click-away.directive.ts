import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subject, fromEvent, skip, takeUntil, tap } from 'rxjs';

@Directive({
  selector: '[hideOnClickAway]',
  standalone: true
})
export class HideOnClickAwayDirective implements AfterViewInit, OnDestroy {

  constructor(private element: ElementRef) { }

  @Output('clickedOutsideEvent') clickedOutsideEvent = new EventEmitter<boolean>();

  destroy$: Subject<boolean> = new Subject();

  ngAfterViewInit(): void {
    this.checkIfClickedOutside();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  private checkIfClickedOutside(): void {
    fromEvent(document.body, 'click').pipe(
      skip(1),
      tap(e => {
        if (this.element.nativeElement.contains(e.target)) return;
        this.hide();
      }
      ),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  private hide(): void {
    this.clickedOutsideEvent.emit();
  }

}
