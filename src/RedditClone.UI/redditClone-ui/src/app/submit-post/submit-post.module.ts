import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitPostRoutingModule } from './submit-post-routing.module';
import { SubmitPostPageComponent } from './components/submit-post-page/submit-post-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedditRulesComponent } from './ui/reddit-rules/reddit-rules.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';
import { RulesIconComponent } from './ui/rules-icon/rules-icon.component';
import { DropdownMenuModule } from '../shared/modules/dropdown-menu/dropdown-menu.module';
import { CommunitySelectComponent } from './components/community-select/community-select.component';
import { AppModalModule } from '../shared/modules/app-modal/app-modal.module';
import { DraftsModalComponent } from './components/drafts-modal/drafts-modal.component';
import { AppIconModule } from '../shared/modules/app-icon/app-icon.module';
import { StoreModule } from '@ngrx/store';
import { submitReducer, submitStateFeatureKey } from './state/submit.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SubmitEffects } from './state/submit.effects';


@NgModule({
  declarations: [
    SubmitPostPageComponent,
    RedditRulesComponent,
    SubmitFormComponent,
    RulesIconComponent,
    CommunitySelectComponent,
    DraftsModalComponent
  ],
  imports: [
    CommonModule,
    SubmitPostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownMenuModule,
    AppModalModule,
    AppIconModule,
    StoreModule.forFeature(submitStateFeatureKey,submitReducer),
    EffectsModule.forFeature(SubmitEffects)
  ],
})
export class SubmitPostModule { }
