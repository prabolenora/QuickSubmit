import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonsviewPageRoutingModule } from './lessonsview-routing.module';

import { LessonsviewPage } from './lessonsview.page';
import { ComponentsModule } from '../../component/component.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonsviewPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [LessonsviewPage]
})
export class LessonsviewPageModule {}
