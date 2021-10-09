import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AssignmentService } from '../../service/assignment.service';

@Component({
  selector: 'app-assignmentview',
  templateUrl: './assignmentview.page.html',
  styleUrls: ['./assignmentview.page.scss'],
})
export class AssignmentviewPage implements OnInit {
  AssigmentTitle
  Subject
  assigmnetList
  public static loading;
  constructor(private assignmentService:AssignmentService,private router: Router,) { 
    console.log('click');
  }

  async ngOnInit(){
    this.Subject=localStorage.getItem('Subject').toString();   
    localStorage.setItem("Subject", 'all');

    if(this.Subject == 'chem'){
      this.AssigmentTitle="Chemistry Assignmnet";
      localStorage.setItem("LogedSubject", 'chem');
    }else if(this.Subject == 'pure'){
      this.AssigmentTitle="Pure Mathematics Assignmnet";
      localStorage.setItem("LogedSubject", 'pure');
    }else if(this.Subject == 'applied'){
      this.AssigmentTitle="Applied Mathematics Assignmnet";
      localStorage.setItem("LogedSubject", 'applied');
    }else if(this.Subject == 'physics'){
      this.AssigmentTitle="Physics Assignmnet";
      localStorage.setItem("LogedSubject", 'physics');
    }

    await this.assignmentService.getAllSubjectAssignment(this.Subject).subscribe((data) => {
      this.assigmnetList = data.map((e) => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['Title'],
          description: e.payload.doc.data()['DueDate'].toDate(),
          imgId: e.payload.doc.data()['ID'],
          status: e.payload.doc.data()['Active'],
          expanded: false
        };
      });
    });

  }

toggleSection(index){
  //alert(index);
  this.assigmnetList[index].open=true;
}

expandItem(item): void {
  if (item.expanded) {
    item.expanded = false;
  } else {
    this.assigmnetList.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
}
previouspage(){
  this.router.navigate(['/subjects']);
  
}
}
