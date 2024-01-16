import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, fromEvent, skip, takeUntil, tap } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit,AfterViewInit,OnDestroy {
  
  @ViewChild('modalContainer',{read: ViewContainerRef}) modalContainer!: ViewContainerRef;
  @ViewChild('modalElement') modalElementRef!: ElementRef;
  
  @Input() componentType!: Type<any>;
  @Input() modalRefId: string = '';

  destroy$: Subject<boolean> = new Subject();

  constructor(private changeDetector: ChangeDetectorRef,private modalService: ModalService){}
  
  ngOnInit(): void {
    document.body.classList.add('overflow-hidden');
  }
  
  ngAfterViewInit(): void {
    const compRef = this.modalContainer.createComponent(this.componentType);
    this.changeDetector.detectChanges();
    this.checkIfUserClickedOutsideElement();
  }
  
  ngOnDestroy(): void {
    document.body.classList.remove('overflow-hidden');
    this.destroy$.next(true);
  }

  close(): void {
    this.modalService.closeById(this.modalRefId);
  }

  modalClicked(event: MouseEvent){
    event.stopPropagation();
  }

  private checkIfUserClickedOutsideElement(): void {
    fromEvent(document.body,'click').pipe(
      skip(1),
      tap(e => {
        if(this.modalElementRef.nativeElement.contains(e.target)) return;
        for(let el of this.modalService.elementRefs){
          if(el.nativeElement.contains(e.target)) return;
        }
        this.close();
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
