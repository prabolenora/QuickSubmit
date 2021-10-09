import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/service/alert.service';
import { PhotoService } from 'src/app/service/photo.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  public fnameValidator: boolean = false;
  public lnameValidator: boolean = false;
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
  selectedImage: any = '';
  public imgUrl: SafeResourceUrl;

  constructor(private router: Router,
    public ngFireAuth: AngularFireAuth,
    public studentService: StudentService,
    public photoService: PhotoService,
    public alertService: AlertService,
    private camera: Camera,
    public alertController: AlertController,
    public loadingController: LoadingController,
    @Inject(AngularFireStorage) private storage: AngularFireStorage,) { }

  ngOnInit() {
    console.log('updateus')
    this.student=JSON.parse(localStorage.getItem('StudentData'));
    this.imgUrl=this.student.path
  }

  UpdateUser(){
    console.log('upus');
    if(localStorage.getItem('imagePathDB') != null && localStorage.getItem('imagePathDB') != ""){
      this.student.path=localStorage.getItem('imagePathDB');
    }

    this.studentService.update_employee(localStorage.getItem('iId'),this.student)
    

  }

  CheckInputVal(textField) {
    if (textField == 'fnameValidator') {
      this.fnameValidator = false;
    } else if (textField == 'lnameValidator') {
      this.lnameValidator = false;
    } 
  }

  showPreview(event: any) {
    this.selectedImage = localStorage.getItem('selectedImage');
    alert(this.selectedImage)
  }

  async OpenCamera() {
    await this.photoService.OpenCameraV1(null).then((ret) => {
      if (ret == "success"){
        this.imgUrl = localStorage.getItem('imagePath');
      }
    });
    this.imgUrl = localStorage.getItem('imagePath');
    localStorage.setItem('path',this.imgUrl.toString());
  }

  async OpenGallery() {
    await this.photoService.OpenGalleryV1();
    this.imgUrl = localStorage.getItem('imagePath');
    localStorage.setItem('path',this.imgUrl.toString());
  }
}
