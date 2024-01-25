import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterEmptyNavGroupsPipe } from './pipes/filter-empty-nav-groups.pipe';
import { FocusInputDirective } from './directives/focus-input.directive';
import { TextareaAutosizeDirective } from './directives/textarea-autosize.directive';
import { TestPageComponent } from './components/test-page/test-page.component';
import { AppIconModule } from './modules/app-icon/app-icon.module';
import { ToggleSwitchComponent } from './ui/toggle-switch/toggle-switch.component';
import { AppInputComponent } from './ui/app-input/app-input.component';
import { DynamicSkeletonLoaderDirective } from './directives/dynamic-skeleton-loader.directive';
import { DropdownMenuModule } from './modules/dropdown-menu/dropdown-menu.module';
import { VoteArrowComponent } from './ui/vote-arrow/vote-arrow.component';

@NgModule({
  declarations: [
    FilterEmptyNavGroupsPipe,
    FocusInputDirective,
    TextareaAutosizeDirective,
    TestPageComponent,
    ToggleSwitchComponent,
    AppInputComponent,
    DynamicSkeletonLoaderDirective,
    VoteArrowComponent,
  ],
  imports: [
    CommonModule,
    AppIconModule,
    DropdownMenuModule
  ],
  exports: [
    FilterEmptyNavGroupsPipe,
    FocusInputDirective,
    TextareaAutosizeDirective,
    DynamicSkeletonLoaderDirective,
    TestPageComponent,
    ToggleSwitchComponent,
    VoteArrowComponent
  ]
})
export class SharedModule { }
