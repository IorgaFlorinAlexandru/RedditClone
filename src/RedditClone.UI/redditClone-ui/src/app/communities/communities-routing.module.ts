import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityPageComponent } from './components/community-page/community-page.component';

const routes: Routes = [
    { path: ':communityName', component: CommunityPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunitiesRoutingModule { }
