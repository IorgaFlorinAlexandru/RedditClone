import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPageComponent } from './components/feed-page/feed-page.component';

const routes: Routes = [
  {path: '', component: FeedPageComponent},
  {path: 'all', component: FeedPageComponent},
  {path: 'popular', component: FeedPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedsRoutingModule { }
