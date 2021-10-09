import { Inject, Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Network } from '@ionic-native/network/ngx';
import { AlertController } from '@ionic/angular';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(
    public network: Network,
    public alertController: AlertController,
    @Inject(AngularFireStorage) private storage: AngularFireStorage,
    @Inject(FileService) private fileService: FileService
  ) {}

  async displayAlert(header, subHeader, msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: subHeader,
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  async ConnectionStatus() {
    /**
     * This will run when you are in offline
     */
    this.network.onDisconnect().subscribe(() => {
      setTimeout(async () => {
        localStorage.setItem('networkConnection', 'false');
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Connection Interrupted!',
          message: 'Your internet connection appears to be offline',
          buttons: ['OK'],
        });
        await alert.present();
        const { role } = await alert.onDidDismiss();
      }, 3000);
    });
    /**
     * This will run when you are in online
     */
    this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          localStorage.setItem('networkConnection', 'true');
        }
      }, 3000);
    });
  }
}
