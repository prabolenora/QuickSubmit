import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from '../component/header/header.component'
import { NotificationComponent } from '../component/notification/notification.component'
import { AssignmentComponent } from '../component/assignment/assignment.component'
import { SubmitAssignmnetComponent } from '../component/submit-assignmnet/submit-assignmnet.component'
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        HeaderComponent,
        NotificationComponent,
        AssignmentComponent,
        SubmitAssignmnetComponent],
    exports: [
        
        HeaderComponent,
        NotificationComponent,
        AssignmentComponent,
        SubmitAssignmnetComponent
    ]
    , schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports:[IonicModule]
})
export class ComponentsModule { }