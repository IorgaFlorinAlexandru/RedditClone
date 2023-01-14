import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommunityType } from 'src/app/posts/common/enums/communityType';
import { PostListData } from 'src/app/posts/common/models/postListData';
import { Subreddit } from '../../common/models/subreddit';
import { SubredditService } from '../../services/subreddit.service';

@Component({
  selector: 'SubredditPage',
  templateUrl: './subreddit-page.component.html',
  styleUrls: ['./subreddit-page.component.css']
})
export class SubredditPageComponent implements OnInit, OnDestroy {
  constructor(private subredditService: SubredditService){}
  
  subreddit : Subreddit = new Subreddit;
  data : Promise<PostListData> | null = null;

  ngOnInit(): void {
    this.subredditService.getSubreddit(1).subscribe({
      next: (response) => {
        this.subreddit = response
        
        this.data = new Promise((resolve,reject) => {
          resolve(new PostListData(this.subreddit.id, CommunityType.Subreddit));
        })
      },
      error: (error) => console.error(error)
    });
  }
  
  ngOnDestroy(): void {
    
  }

}
