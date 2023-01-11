import { Component, Input } from '@angular/core';
import { Subreddit } from '../../common/models/subreddit';

@Component({
  selector: 'AboutSubreddit',
  templateUrl: './about-subreddit.component.html',
  styleUrls: ['./about-subreddit.component.css']
})
export class AboutSubredditComponent {
  @Input() subreddit! : Subreddit;
}
