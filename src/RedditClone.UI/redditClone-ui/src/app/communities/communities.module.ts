import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunitiesRoutingModule } from './communities-routing.module';
import { CommunityPageComponent } from './components/community-page/community-page.component';
import { CommunityHeaderComponent } from './ui/community-header/community-header.component';
import { PostsModule } from '../posts/posts.module';
import { AboutCommunityComponent } from './components/about-community/about-community.component';
import { CommunityDescriptionComponent } from './ui/community-description/community-description.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCommunityModalComponent } from './components/create-community-modal/create-community-modal.component';
import { AppIconModule } from '../shared/modules/app-icon/app-icon.module';
import { SkeletonDescriptionComponent } from './ui/skeleton-description/skeleton-description.component';


@NgModule({
  declarations: [
    CommunityPageComponent,
    CommunityHeaderComponent,
    AboutCommunityComponent,
    CommunityDescriptionComponent,
    CreateCommunityModalComponent,
    SkeletonDescriptionComponent,
  ],
  imports: [
    CommonModule,
    CommunitiesRoutingModule,
    PostsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppIconModule,
  ]
})
export class CommunitiesModule { }
