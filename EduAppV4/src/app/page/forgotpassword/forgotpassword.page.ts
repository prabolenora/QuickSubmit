import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  user = {
    email: ''
  };
  constructor( private router: Router,
    public ngFireAuth: AngularFireAuth,
    private studentService: StudentService,
    public alertController: AlertController,
    ) { }

  ngOnInit() {
  }

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

  async sendResetMail(){
    this.studentService.sendResetMail(this.user.email).then(async ()=>{
      this.displayAlert('','','Please check you email.')
      this.router.navigate(['/login']);
    },
    async error=>{
      this.displayAlert('Error','',error)
    }
    )
    
  }
  Cancel(){
    this.router.navigate(['/login']);
  }
}
