import { Component } from '@angular/core';
import { TextFormModel } from '../../common/models/text-form';

@Component({
  selector: 'text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.css']
})
export class TextFormComponent {

  textPostForm : TextFormModel = new TextFormModel();


}
