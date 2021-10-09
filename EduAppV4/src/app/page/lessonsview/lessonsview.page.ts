import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AssignmentService } from 'src/app/service/assignment.service';
import { FileService } from 'src/app/service/file.service';
import { LessonService } from '../../service/lesson.service';

@Component({
  selector: 'app-lessonsview',
  templateUrl: './lessonsview.page.html',
  styleUrls: ['./lessonsview.page.scss'],
})
export class LessonsviewPage implements OnInit {
  lessonsList
  Subject
  LessonTitle
  assigmnetList
  constructor(private menu: MenuController,
    private lessonService:LessonService,
    private router: Router,
    @Inject(FileService) private fileService: FileService, 
    private assignmentService:AssignmentService ) { }

  async ngOnInit() {
    console.log('debug');
    this.Subject=localStorage.getItem('Subject').toString();   
    localStorage.setItem("Subject", 'all');

    if(this.Subject == 'chem'){
      this.LessonTitle="Chemistry Lessons";
    }else if(this.Subject == 'pure'){
      this.LessonTitle="Pure Mathematics Lessons";
    }else if(this.Subject == 'applied'){
      this.LessonTitle="Applied Mathematics Lessons";
    }else if(this.Subject == 'physics'){
      this.LessonTitle="Physics Lessons";
    }


    await this.lessonService.getAllLessons(this.Subject).subscribe((data) => {
      this.lessonsList = data.map((e) => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['Title'],
          description: e.payload.doc.data()['UploadedDate'].toDate(),
          imgId: e.payload.doc.data()['ID'],
          expanded: false
        };
      });
    });

    console.log(this.lessonsList);
  }
  //bind the menu
  openFirst() {
    this.menu.enable(true, 'first');
    //this.menu.open('first');
  }

  async view(){
   
    await this.fileService.getImage(this.lessonsList.imgId);
    
    //alert(localStorage.getItem('dataurl').toString());
    // this.dataurl=localStorage.getItem('dataurl').toString();
    // alert(this.dataurl);
  }

  previouspage(){
    this.router.navigate(['/subjects']);
    
  }
  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.lessonsList.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

}
