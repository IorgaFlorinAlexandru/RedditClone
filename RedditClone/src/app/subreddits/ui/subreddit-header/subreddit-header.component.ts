import { Component, Input } from '@angular/core';
import { Subreddit } from '../../common/models/subreddit';

@Component({
  selector: 'SubredditHeader',
  templateUrl: './subreddit-header.component.html',
  styleUrls: ['./subreddit-header.component.css']
})
export class SubredditHeaderComponent {
  @Input() subreddit! : Subreddit;
}
