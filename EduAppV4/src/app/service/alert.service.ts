import { Injectable } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( public alertController: AlertController) { }

  async defaultNotification(header,message){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      //subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
