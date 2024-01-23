import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RequestStatus } from 'src/app/shared/enums/status.enum';
import { ModalElementRef } from 'src/app/shared/modules/app-modal/modal.models';
import * as CommunityState from '../../../state/communities/index';
import { CreateCommunityRequest } from '../../common/models/create-community.model';
import { UniqueNameValidator } from '../../common/validators/unique-name.validator';

@Component({
  selector: 'app-create-community-modal',
  templateUrl: './create-community-modal.component.html',
  styleUrls: ['./create-community-modal.component.css'],
})
export class CreateCommunityModalComponent implements OnInit {

  communityFormGroup!: FormGroup;
  nameControl!: FormControl;
  typeControl!: FormControl;
  hasNSFWControl!: FormControl;
  requestStatus$: Observable<RequestStatus> = new Observable();

  LOADING_STATUS = RequestStatus.LOADING;

  constructor(
    private modalRef: ModalElementRef<CreateCommunityModalComponent>,
    private formBuilder: FormBuilder,
    private store: Store,
    private uniqueNameValidator: UniqueNameValidator) {}

  ngOnInit(): void {
    this.initializeCommunityFormGroup();
    this.setRequestStatus();
  }

  public close(): void {
    this.modalRef.closeModal();
  }

  public createCommunity(): void {
    if(!this.communityFormGroup.valid) return;

    const request = this.communityFormGroup.value as CreateCommunityRequest;
    this.store.dispatch(CommunityState.createCommunityAction({ request }))
  }

  public setRequestStatus(): void {
    this.requestStatus$ = this.store.select(CommunityState.selectCreateCommunityStatus);
  }

  private initializeCommunityFormGroup(): void {
    this.nameControl = new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(21)
      ],
      asyncValidators: [
        this.uniqueNameValidator.validate.bind(this.uniqueNameValidator)
      ],
      updateOn: 'change'
  });
    this.typeControl = new FormControl(0);
    this.hasNSFWControl = new FormControl(false);
    this.communityFormGroup = this.formBuilder.group({ 
      name: this.nameControl, 
      communityType: this.typeControl, 
      isNsfw: this.hasNSFWControl});
  }
}
