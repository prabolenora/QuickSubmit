import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickSubmitPage } from './quick-submit.page';

const routes: Routes = [
  {
    path: '',
    component: QuickSubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickSubmitPageRoutingModule {}
