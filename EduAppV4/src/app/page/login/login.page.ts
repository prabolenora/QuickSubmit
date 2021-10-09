import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFireAuthModule,
  AngularFireAuth,
} from '@angular/fire/compat/auth';
import { StudentService } from 'src/app/service/student.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: '',
  };
  constructor(
    private router: Router,
    public ngFireAuth: AngularFireAuth,
    private studentService: StudentService,
    public alertController: AlertController
  ) {
    localStorage.setItem('ImportantNotification', null);
  }

  ngOnInit() {}

  async Login() {
    console.log('user');
    try {
      const user = await this.ngFireAuth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      console.log(user);

      if (user.user.email) {
        localStorage.setItem('StudentEmail', user.user.email);
        //StudentEmail
        localStorage.setItem('Subject', 'all');
        localStorage.setItem('LogedSubject', 'all');
        localStorage.setItem('submitList', null);
        this.studentService.getAllstudent();
        this.router.navigate(['/home']);
      } else {
        this.displayAlert('Invalid Login', '', 'Invalid username or password.');
      }
    } catch (ex) {
      this.displayAlert('Invalid Login', '', 'Invalid username or password.');
    }
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
  async RegisterUser() {
    this.router.navigate(['/newuser']);
  }

  RestPassword(){
    this.router.navigate(['/forgotpassword']);
    
  }
}
