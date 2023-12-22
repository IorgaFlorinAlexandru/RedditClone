import { Component, OnInit } from '@angular/core';
import { Trend } from '../../common/models/trending.models';
import { PostLayout } from '../../common/enums/post-layout';
import { Store } from '@ngrx/store';
import * as SettingsActions from '../../../state/settings/settings.actions';

@Component({
  selector: 'trending-bar',
  templateUrl: './trending-bar.component.html',
  styleUrls: ['./trending-bar.component.css']
})
export class TrendingBarComponent implements OnInit {

  public trends: Trend[] = [];
  public postLayout = PostLayout;

  constructor(private store: Store){}

  ngOnInit(): void {
    this.setTrends();
  }

  private setTrends(): void {
    const hot: Trend = { icon: 'fire', name: 'Hot', isSelected: true };
    const nw: Trend = { icon: 'star', name: 'New', isSelected: false };
    const top: Trend = { icon: 'trending-up', name: 'Top', isSelected: false };

    this.trends.push(hot,nw,top);
  }

  public changeLayout(layout: PostLayout): void {
    this.store.dispatch(SettingsActions.changePostLayout({postLayout: layout}));
  }

  changeTrend(trend: Trend): void {
    this.trends.map(t => t.isSelected = false);
    trend.isSelected = true;
  }


}
