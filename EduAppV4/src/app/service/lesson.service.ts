import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(public fireservices: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private router: Router,) { }
    
    getAllLessons(subject) {   
      if(subject=="chem"){
        return this.fireservices.collection('chemLessons').snapshotChanges();
      }else if(subject=="physics"){
        return this.fireservices.collection('physicsLessons').snapshotChanges();
      }else if(subject=="pure"){
        return this.fireservices.collection('pureMathsLessons').snapshotChanges();
      }else if(subject=="applied"){
        return this.fireservices.collection('appliedMathsLessons').snapshotChanges();
      }    
    }
}
