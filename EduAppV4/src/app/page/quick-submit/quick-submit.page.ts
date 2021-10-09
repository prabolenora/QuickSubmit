import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AssignmentService } from 'src/app/service/assignment.service';

@Component({
  selector: 'app-quick-submit',
  templateUrl: './quick-submit.page.html',
  styleUrls: ['./quick-submit.page.scss'],
})
export class QuickSubmitPage implements OnInit {
  chemAssigmnetList;
  physicsAssigmnetList;
  pureAssigmnetList;
  appliedAssigmnetList;
  subjectList: ['chem', 'pure', 'applied', 'physics']

  visiblePure=false;
  visibleApplied=false;
  visibleChem=false;
  visiblePhysics=false;
  visibleBio=false;
  subject;
  constructor(private menu: MenuController, private assignmentService: AssignmentService) { }

  async ngOnInit() {

    if (localStorage.getItem('stream').toString() == "maths") {
      this.visibleApplied=true;
      this.visibleChem=true;
      this.visiblePure=true;
      this.visiblePhysics=true;
      this.getPureMaths();
      this.getAppliedMaths();
      this.getPhysics();
      this.getChemistry();

    } else if (localStorage.getItem('stream').toString() == "bio") {
      this.visibleChem=true;
      this.visibleBio=true;
      this.visiblePhysics=true;
      this.getPhysics();
      this.getChemistry();
    }

  }
  optionsFn(){
    //alert(this.subject)
    localStorage.setItem("LogedSubject", this.subject);
  }
  async loadData(refresh = false, refresher?) {
    await this.assignmentService.getAllSubjectAssignment("chem").subscribe((data) => {
      this.chemAssigmnetList = data.map((e) => {
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

    await this.assignmentService.getAllSubjectAssignment("pure").subscribe((data) => {
      this.pureAssigmnetList = data.map((e) => {
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

    await this.assignmentService.getAllSubjectAssignment("applied").subscribe((data) => {
      this.appliedAssigmnetList = data.map((e) => {
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

    await this.assignmentService.getAllSubjectAssignment("physics").subscribe((data) => {
      this.physicsAssigmnetList = data.map((e) => {
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

    if (refresher) {
      refresher.target.complete();
    }
  }

  async getPureMaths() {
    await this.assignmentService.getAllSubjectAssignment("pure").subscribe((data) => {
      this.pureAssigmnetList = data.map((e) => {
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

  async getAppliedMaths() {
    await this.assignmentService.getAllSubjectAssignment("applied").subscribe((data) => {
      this.appliedAssigmnetList = data.map((e) => {
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

  async getChemistry() {
    await this.assignmentService.getAllSubjectAssignment("chem").subscribe((data) => {
      this.chemAssigmnetList = data.map((e) => {
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

  async getPhysics() {
    await this.assignmentService.getAllSubjectAssignment("physics").subscribe((data) => {
      this.physicsAssigmnetList = data.map((e) => {
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

  getBio() {

  }
  //bind the menu
  openFirst() {
    this.menu.enable(true, 'first');
    //this.menu.open('first');
  }

  expandChemItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.chemAssigmnetList.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  expandPhysicsItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.physicsAssigmnetList.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  expandPureItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.pureAssigmnetList.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  expandAppliedItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.appliedAssigmnetList.map(listItem => {
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
