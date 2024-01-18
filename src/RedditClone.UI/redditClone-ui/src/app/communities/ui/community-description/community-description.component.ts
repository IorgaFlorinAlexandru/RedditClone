import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject, fromEvent, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'community-description',
  templateUrl: './community-description.component.html',
  styleUrls: ['./community-description.component.css']
})
export class CommunityDescriptionComponent {

  descriptionForm : FormGroup;

  constructor(private element: ElementRef,private formBuilder: FormBuilder) {
    this.descriptionForm = this.formBuilder.group({ valueControl: new FormControl('') })
  }

  @Input() description: string | undefined = '';
  isEditing: boolean = false;
  destroy$: Subject<boolean> = new Subject();

  editDescription(): void {
    this.isEditing = true;
    setTimeout(() => {
      this.checkIfClickedOutside();
    })
  }

  checkIfClickedOutside(): void {
    fromEvent(document.body,'click').pipe(
      tap(e =>{
        if(this.element.nativeElement.contains(e.target)) return;
        this.cancel();
      }
      ),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  cancel(): void {
    this.isEditing = false;
    this.destroy$.next(true);
    this.descriptionForm.get('valueControl')?.setValue('');
  }

  save(): void{
    this.cancel();
  }

}
