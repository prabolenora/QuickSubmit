import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  visiblePure=false;
  visibleApplied=false;
  visibleChem=false;
  visiblePhysics=false;
  visibleBio=false;
  constructor(private menu: MenuController, private router: Router,) {
    console.log('subjects')
    if(localStorage.getItem('stream').toString()=="maths"){
      this.visibleApplied=true;
      this.visibleChem=true;
      this.visiblePure=true;
      this.visiblePhysics=true;

    }else if(localStorage.getItem('stream').toString()=="bio"){
      this.visibleChem=true;
      this.visibleBio=true;
      this.visiblePhysics=true;
    }
   }

  ngOnInit() {
  }
  //bind the menu
  openFirst() {
    this.menu.enable(true, 'first');
    //this.menu.open('first');
  }

  LoadLessons(subject){
    localStorage.setItem("Subject", subject);
    this.router.navigate(['/lessonsview'])
  }

  LoadAssignments(subject){
    localStorage.setItem("Subject", subject);
  
   
   this.router.routeReuseStrategy.shouldReuseRoute = function(){ return false; };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0);
      }
    });

    this.router.navigateByUrl('/assignmentview');
    //this.router.navigate(['/assignmentview'])
  }
}
