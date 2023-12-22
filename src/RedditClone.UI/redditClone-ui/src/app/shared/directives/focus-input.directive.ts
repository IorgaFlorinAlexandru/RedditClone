import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus-input]'
})
export class FocusInputDirective implements AfterViewInit {

  constructor(private input: ElementRef) { }

  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

}
