import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentviewPageRoutingModule } from './assignmentview-routing.module';

import { ComponentsModule } from '../../component/component.modules';
import { AssignmentviewPage } from './assignmentview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AssignmentviewPageRoutingModule
  ],
  declarations: [AssignmentviewPage]
})
export class AssignmentviewPageModule {}
