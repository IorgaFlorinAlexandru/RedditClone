import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutFeed } from '../../common/models/feed.models';
import { getFeedDescriptionMap } from '../../common/utils/feed-description.function';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  constructor(private router: Router) {}

  feedDescription : AboutFeed | undefined = undefined;
  feedId: string | undefined = undefined;

  ngOnInit(): void {
    this.setFeedId(this.router.url);
    this.setFeedDescription(this.router.url);
  }

  private setFeedDescription(feedRoute: string): void {
    const map = getFeedDescriptionMap();
    
    this.feedDescription = map.get(feedRoute);
  }

  private setFeedId(id: string): void {
    this.feedId = id;
  }

}