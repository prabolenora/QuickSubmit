import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { ComponentsModule } from '../../component/component.modules';
import { NgCalendarModule  } from 'ionic2-calendar';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    ExploreContainerComponentModule,
    NgCalendarModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
