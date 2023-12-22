import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalElementRef } from 'src/app/shared/modules/app-modal/modal.models';

@Component({
  selector: 'app-create-community-modal',
  templateUrl: './create-community-modal.component.html',
  styleUrls: ['./create-community-modal.component.css'],
})
export class CreateCommunityModalComponent {

  communityFormGroup: FormGroup;
  nameControl: FormControl;
  typeControl: FormControl;
  hasNSFWControl: FormControl;


  constructor(private modalRef: ModalElementRef<CreateCommunityModalComponent>,private formBuilder: FormBuilder,private changeDetector: ChangeDetectorRef) {
    this.nameControl = new FormControl('');
    this.typeControl = new FormControl('');
    this.hasNSFWControl = new FormControl(false);
    this.communityFormGroup = this.formBuilder.group({ 
      nameControl: this.nameControl, 
      typeControl: this.typeControl, 
      hasNSFWControl: this.hasNSFWControl});

  }

  close(): void {
    this.modalRef.closeModal();
  }

  createCommunity(): void {
    console.log(this.communityFormGroup);
  }
}
