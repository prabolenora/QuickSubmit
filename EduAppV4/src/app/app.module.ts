import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { environment } from '../environments/environment';
import{FormsModule} from '@angular/forms'
import{StudentService} from './service/student.service'
import{PhotoService} from './service/photo.service'
import{AlertService} from './service/alert.service'
import{FileService} from './service/file.service'

import{AssignmentService} from './service/assignment.service'
import{NotificationService} from './service/notification.service'
import{NetworkService} from './service/network.service'
import { Camera } from '@ionic-native/camera/ngx';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CommonModule } from "@angular/common";
import { Network } from '@ionic-native/network/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
//import{NotificationComponent} from './component/notification/notification.component'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
       AngularFireModule.initializeApp(environment.firebase),
       AngularFireAuthModule,
       AngularFireDatabaseModule,
       AngularFirestoreModule.enablePersistence(),
       FormsModule,
       NgCalendarModule,
       CommonModule
      // Camera
       
    ],
 
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StudentService,
    PhotoService,
    Camera,
    AlertService,
    NotificationService,
    FileService,
    AssignmentService,
    NetworkService,
    Network,
    EmailComposer],
  bootstrap: [AppComponent],
})
export class AppModule {}
