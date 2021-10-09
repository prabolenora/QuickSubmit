import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router'
import {AngularFireAuthModule,AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( public fireservices: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private router: Router,) { }

    getAllImportantNotification() {
      return this.fireservices.collection('importanNotifications').snapshotChanges();
    }

    getAllNotification() {
      return this.fireservices.collection('notifications').snapshotChanges();
    }
}
