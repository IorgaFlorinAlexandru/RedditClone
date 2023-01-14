import { Component, EventEmitter, Output } from '@angular/core';
import { CreatePostData } from '../../common/models/request-models/create-post-data';
import { TextFormModel } from '../../common/models/form-models/text-form';

@Component({
  selector: 'text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.css']
})
export class TextFormComponent {

  textPostForm : TextFormModel = new TextFormModel();
}
