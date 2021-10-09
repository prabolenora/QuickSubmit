import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonsviewPage } from './lessonsview.page';

const routes: Routes = [
  {
    path: '',
    component: LessonsviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsviewPageRoutingModule {}
