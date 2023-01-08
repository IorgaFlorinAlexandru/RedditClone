import { Component, Input } from '@angular/core';

@Component({
  selector: 'PostButtons',
  templateUrl: './post-buttons.component.html',
  styleUrls: ['./post-buttons.component.css']
})
export class PostButtonsComponent {
  @Input() comments : number = 0;
  @Input() postId : number = 0;
  
}
