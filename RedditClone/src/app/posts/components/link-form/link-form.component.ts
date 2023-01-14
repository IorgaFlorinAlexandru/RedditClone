import { Component } from '@angular/core';
import { LinkFormModel } from '../../common/models/form-models/link-form';

@Component({
  selector: 'link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css']
})
export class LinkFormComponent {

  linkFormData = new LinkFormModel();
}
