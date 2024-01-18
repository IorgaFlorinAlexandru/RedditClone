import { Component, Input } from '@angular/core';
import { RequestStatus } from 'src/app/shared/enums/status.enum';

@Component({
  selector: 'community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.css']
})
export class CommunityHeaderComponent {
 
  @Input() name: string | undefined = ''; 
  @Input() title: string | undefined = '';
  @Input() status: RequestStatus = RequestStatus.LOADING;

  LOADING_STATUS = RequestStatus.LOADING;

}
