import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FileupviewPageRoutingModule } from './fileupview-routing.module';

import { FileupviewPage } from './fileupview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileupviewPageRoutingModule
  ],
  declarations: [FileupviewPage]
})
export class FileupviewPageModule {}
