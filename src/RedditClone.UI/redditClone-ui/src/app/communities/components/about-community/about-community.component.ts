import { Component, Input } from '@angular/core';
import { RequestStatus } from 'src/app/shared/enums/status.enum';

@Component({
  selector: 'about-community',
  templateUrl: './about-community.component.html',
  styleUrls: ['./about-community.component.css']
})
export class AboutCommunityComponent {
  @Input() description: string | undefined = '';
  @Input() createdDate: Date | undefined;
  @Input() status!: RequestStatus;

  LOADING_STATUS = RequestStatus.LOADING;
}
