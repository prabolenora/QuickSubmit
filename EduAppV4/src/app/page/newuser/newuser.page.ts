import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { AngularFireAuthModule, AngularFireAuth, } from '@angular/fire/compat/auth';
import { StudentService } from '../../service/student.service';
import { PhotoService } from '../../service/photo.service';
import { AlertService } from '../../service/alert.service';
import { error } from '@angular/compiler/src/util';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IonInput } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.page.html',
  styleUrls: ['./newuser.page.scss'],
})
export class NewuserPage implements OnInit {
  testSubscription: any;
  @ViewChild('input') inputElement: IonInput;
  public imgUrl: SafeResourceUrl;
  private win: any = window;
  public fnameValidator: boolean = false;
  public lnameValidator: boolean = false;
  public emailValidator: boolean = false;
  public passwordValidator: boolean = false;
  public stuIdValidator: boolean = false;
  user = {
    email: '',
    password: '',
  };
  student = {
    firstName: '',
    lastName: '',
    studentId: '',
    path: '',
    createdDate: '',
    updatedDate: '',
    email: '',
    password: '',
    userToken: '',
    stream: ''
  };

  public static loading;
  selectedImage: any = '';

  constructor(
    private router: Router,
    public ngFireAuth: AngularFireAuth,
    public studentService: StudentService,
    public photoService: PhotoService,
    public alertService: AlertService,
    private camera: Camera,
    public alertController: AlertController,
    public loadingController: LoadingController,
    @Inject(AngularFireStorage) private storage: AngularFireStorage,
  ) {
    console.log('newuser');
  }

  async ngOnInit() {
    NewuserPage.loading = await this.loadingController.create({
      message: 'Processing...',
      showBackdrop: false,

    })
  }

  showPreview(event: any) {
    this.selectedImage = localStorage.getItem('selectedImage');
    //alert(this.selectedImage)
  }

  async OpenCamera() {
    await this.photoService.OpenCameraV1(null).then((ret) => {
      if (ret == "success"){
        this.imgUrl = localStorage.getItem('imagePath');
      }
    });
    this.imgUrl = localStorage.getItem('imagePath');
  }


  async OpenGallery() {
    await this.photoService.OpenGalleryV1();
    this.imgUrl = localStorage.getItem('imagePath').toString();
  }

  CheckInputVal(textField) {
    if (textField == 'fnameValidator') {
      this.fnameValidator = false;
    } else if (textField == 'lnameValidator') {
      this.lnameValidator = false;
    } else if (textField == 'emailValidator') {
      this.emailValidator = false;
    } else if (textField == 'passwordValidator') {
      this.passwordValidator = false;
    } else if (textField == 'stuIdValidator') {
      this.stuIdValidator = false;
    }
  }

  checkValidation() {
    let returnVal = true;
    if (this.student.firstName == '') {
      this.fnameValidator = true;
      returnVal = false;
    }
    if (this.student.lastName == '') {
      this.lnameValidator = true;
      returnVal = false;
    }
    if (this.student.email == '') {
      this.emailValidator = true;
      returnVal = false;
    }
    if (this.student.password == '') {
      this.passwordValidator = true;
      returnVal = false;
    }
    if (this.student.studentId == '') {
      this.stuIdValidator = true;
      returnVal = false;
    }
    // this.student.path=this.imgUrl.toString();
    return returnVal;
  }

  async RegisterUser(event: any) {
    console.log('RegisterUser');
    if (this.checkValidation() == true) {

      await NewuserPage.loading.present();
      this.testSubscription = await this.studentService
        .SearchId(this.student.studentId)
        .subscribe(async (detail) => {
          if (detail) {
            if (detail['email'] == this.student.email) {
              this.student.stream = detail['stream']
              this.CheckUserCred();
            } else {
              NewuserPage.loading.dismiss();
              const alert = await this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error!',
                //subHeader: 'Subtitle',
                message: 'Invalid student ID or Email',
                buttons: ['OK']
              });
              await alert.present();
              const { role } = await alert.onDidDismiss();
              console.log('onDidDismiss resolved with role', role);

            }
          } else {
            NewuserPage.loading.dismiss();
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Error!',
              //subHeader: 'Subtitle',
              message: 'Invalid student ID or Email',
              buttons: ['OK']
            });
            await alert.present();
            const { role } = await alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            NewuserPage.loading.dismiss();
          }
        });
    }
  }

  async CheckUserCred() {
    this.selectedImage = localStorage.getItem('imagePathDB');
    if (this.selectedImage != null || this.selectedImage != '')
      this.student.path = this.selectedImage
    else
      this.selectedImage = '';
    await this.studentService.RegisterUserLogin(this.student).toString();
    this.testSubscription.unsubscribe();
    NewuserPage.loading.dismiss();
  }

  RegisterUserImg() {
    var name = this.imgUrl.toString();
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, localStorage.getItem('selectedImage').toString()).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          let url1 = url;
          // this.fileService.insertImageDetails(this.id,this.url);
          //alert('Upload Successful');
        })
      })
    ).subscribe();
  }

  UpdateUser(){
    let dbId="oEA4QeJY5UU8darU1drF";
    this.student.firstName="edit";
    this.student.lastName="user";
    this.student.stream="bio";
    this.student.userToken="213e3efmf";

    this.studentService.update_employee(dbId,this.student)

  }
}
