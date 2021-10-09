import { Component } from '@angular/core';
import {StudentService} from './service/student.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  name;
  studentId;
  imgUrl;
  constructor() {
    console.log('menu');
    this.imgUrl=localStorage.getItem('path');
    this.name=localStorage.getItem('Name');
    this.studentId=localStorage.getItem('StudentId');
    //alert(this.name)
  }
  ngOnInit() {
    
  }
}
