import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input ()notificationList: any;
  constructor(
    public ngFireAuth: AngularFireAuth,
    private fireservices: AngularFirestore,
    public notificationService: NotificationService
    ) { }

  ngOnInit() {
    console.log("notifi comp")

  }

}
