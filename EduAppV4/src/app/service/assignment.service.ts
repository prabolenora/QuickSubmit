import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router'
import {AngularFireAuthModule,AngularFireAuth} from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { FileService } from './file.service';


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(public fireservices: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private router: Router,) { }

  getAllSubjectAssignment(subject) {   
    if(subject=="chem"){
      return this.fireservices.collection('ChemAssignments').snapshotChanges();
    }else if(subject=="physics"){
      return this.fireservices.collection('physicsAssignments').snapshotChanges();
    }else if(subject=="pure"){
      return this.fireservices.collection('pureMathsAssignmet').snapshotChanges();
    }else if(subject=="applied"){
      return this.fireservices.collection('appliedMathsAssignment').snapshotChanges();
    }    
  }
}
