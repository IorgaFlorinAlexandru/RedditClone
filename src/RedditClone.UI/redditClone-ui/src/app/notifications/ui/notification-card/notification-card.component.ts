import { Component, Input } from '@angular/core';
import { Notification } from '../../common/models/notifications.models';

@Component({
  selector: 'notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.css']
})
export class NotificationCardComponent {

  @Input() notification!: Notification;

}
