import { Component } from '@angular/core';
import { Notification } from '../../common/models/notifications.models';

@Component({
  selector: 'notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {

  notifications: Notification[] = [
    { community: 'seeinghowthisisdone', date: 'date', postTitle: 'this is a post title', hasBeenRead: true},
    { community: 'seeinghowthisisdone', date: 'date', postTitle: 'this is a post title', hasBeenRead: true},
    { community: 'seeinghowthisisdone', date: 'date', postTitle: 'this is a post title', hasBeenRead: false}
  ]
}
