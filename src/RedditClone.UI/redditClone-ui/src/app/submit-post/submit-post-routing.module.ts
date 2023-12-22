import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitPostPageComponent } from './components/submit-post-page/submit-post-page.component';

const routes: Routes = [
  {path: '',component: SubmitPostPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitPostRoutingModule { }
