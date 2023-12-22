import { Component, Input } from '@angular/core';
import { RequestStatus } from 'src/app/shared/enums/status.enum';

@Component({
  selector: 'community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.css']
})
export class CommunityHeaderComponent {
 
  @Input() name!: string; 
  @Input() title!: string;
  @Input() status!: RequestStatus;

  LOADING_STATUS = RequestStatus.LOADING;

}
