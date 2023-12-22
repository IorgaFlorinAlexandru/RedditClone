import { Component } from '@angular/core';
import { ModalElementRef } from 'src/app/shared/modules/app-modal/modal.models';

@Component({
  selector: 'app-drafts-modal',
  templateUrl: './drafts-modal.component.html',
  styleUrls: ['./drafts-modal.component.css']
})
export class DraftsModalComponent {

  constructor(private modalRef: ModalElementRef<DraftsModalComponent>) {}

  public close(): void {
    this.modalRef.closeModal();
  }
}
