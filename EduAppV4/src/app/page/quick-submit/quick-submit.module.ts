import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickSubmitPageRoutingModule } from './quick-submit-routing.module';

import { ComponentsModule } from '../../component/component.modules';
import { QuickSubmitPage } from './quick-submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickSubmitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QuickSubmitPage]
})
export class QuickSubmitPageModule {}
