import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';

import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications: any;
  constructor(public notificationService: NotificationService,
    public alertController: AlertController,
    public network: Network,
    private router:Router,) { 
    // this.network.onDisconnect().subscribe(() => {
    //   setTimeout(async () => {
    //     //alert('network was disconnected');
    //     localStorage.setItem("networkConnection", "false");
    //     const alert = await this.alertController.create({
    //       cssClass: 'my-custom-class',
    //       header: 'Connection Interrupted!',
    //       message: 'Your internet connection appears to be offline',
    //       buttons: ['OK']
    //     });       
    //     await alert.present();       
    //     const { role } = await alert.onDidDismiss();               
    //   }, 3000);
    // });

    // this.network.onConnect().subscribe(() => {
    //   setTimeout(() => {
    //     if (this.network.type === 'wifi') {
    //       localStorage.setItem("networkConnection", "true");
    //     }
    //   }, 3000);
    // });
  }

  ngOnInit() {
    this.notificationService.getAllNotification().subscribe((data) => {
      this.notifications = data.map((e) => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          description: e.payload.doc.data()['description'],
        };
      });
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.notificationService.getAllNotification().subscribe((data) => {
      this.notifications = data.map((e) => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          description: e.payload.doc.data()['description'],
        };
      });
      event.target.complete();
    });
    // setTimeout(async () => {      
    //   await this.loadData();
    //   event.target.complete();
    // }, 3000);
  }
  async loadData(){
    await this.notificationService.getAllNotification().subscribe((data) => {
      this.notifications = data.map((e) => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          description: e.payload.doc.data()['description'],
        };
      });
    });
  }
}
