import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[textareaAutosize]'
})
export class TextareaAutosizeDirective implements AfterViewInit {

  private offsetHeight = 48;
  private minRows = 2;

  constructor(private element: ElementRef) { }
  
  ngAfterViewInit(): void {
    this.resize();
  }

  @HostListener("input") onInput(): void {
      this.resize();
  }

  resize(): void {
    let rows = Math.floor((this.element.nativeElement.scrollHeight - this.offsetHeight)/20);

    rows += this.minRows ;

    this.element.nativeElement.rows = rows;
  }

}
