import { Component } from '@angular/core';
import { MediaFormModel } from '../../common/models/form-models/media-form';

@Component({
  selector: 'media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.css']
})
export class MediaFormComponent {

  mediaFormData = new MediaFormModel();
}
