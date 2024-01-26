import { Component, Input } from '@angular/core';

@Component({
  selector: 'vote-arrow',
  templateUrl: './vote-arrow.component.html',
  styleUrls: ['./vote-arrow.component.css']
})
export class VoteArrowComponent {
  @Input() isDownvote: boolean = false;
  @Input() fill: string = 'none';
}
