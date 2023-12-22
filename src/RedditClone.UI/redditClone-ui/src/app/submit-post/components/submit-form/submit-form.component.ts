import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnChanges{
  @Input() submitFormGroup!: FormGroup;
  private TITLE_CONTROL_NAME = 'title';

  ngOnChanges(changes: SimpleChanges): void {
    const formChanged = changes['submitFormGroup'];
    if(formChanged) {
      const previousForm = formChanged.previousValue as FormGroup;
      const currentForm = formChanged.currentValue as FormGroup;

      currentForm.get(this.TITLE_CONTROL_NAME)?.setValue(previousForm?.get(this.TITLE_CONTROL_NAME)?.value ?? '');
    }
  }
}
