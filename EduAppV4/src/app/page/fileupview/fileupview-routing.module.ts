import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileupviewPage } from './fileupview.page';

const routes: Routes = [
  {
    path: '',
    component: FileupviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileupviewPageRoutingModule {}
