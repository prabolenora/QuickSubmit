import { Component, Inject, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { AssignmentviewPage } from 'src/app/page/assignmentview/assignmentview.page';
import { FileService } from 'src/app/service/file.service';
import { NetworkService } from 'src/app/service/network.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-submit-assignmnet',
  templateUrl: './submit-assignmnet.component.html',
  styleUrls: ['./submit-assignmnet.component.scss'],
})
export class SubmitAssignmnetComponent implements OnInit {
  @Input() assigmentSubmission: any;
  selectedImage: any = null;
  url: string;
  id: string;
  selectedPhoto;
  public static loading;
  subject;
  studentId;
  assignmentId;
  inputValue: string = "";
  user = {
    email: '',
    password: ''
  }
  stuIdValidator: boolean = true;
  empList: Array<iSubmitList> = [];
  imgUrl: any

  constructor(@Inject(AngularFireStorage) private storage: AngularFireStorage,
    @Inject(FileService) private fileService: FileService,
    private camera: Camera,
    public navController: NavController,
    public laodingController: LoadingController,
    public ngFireAuth: AngularFireAuth,
    private angularFirestore: AngularFireStorage,
    public alertController: AlertController,
    public networkService: NetworkService,
    public notificationService: NotificationService,
  ) {
    console.log('submit');
    // this.networkService.ConnectionStatus();
  }

  ngOnInit() {
    this.subject = localStorage.getItem("LogedSubject").toString();
    this.studentId = localStorage.getItem("StudentId").toString();
  }
  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }

  getAssignmetnId(ev: any) {
    this.assignmentId = ev.target.value;
  }

  async displayAlert(header, subHeader, msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: subHeader,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  async SubmitUploadFile() {
    console.log('SubmitUploadFile');
    if (this.selectedImage == null) {
      this.stuIdValidator = true;
      await this.displayAlert("Error!", "Invalid Input", "Please select a file to upload");
    } else if (localStorage.getItem("LogedSubject").toString() == 'all') {
      await this.displayAlert("Error!", "", "Please select the subject first");
    } else {
      this.subject = localStorage.getItem("LogedSubject").toString();
      var name = this.subject + '/' + this.selectedImage.name;
      const fileRef = this.storage.ref(name);
      AssignmentviewPage.loading = await this.laodingController.create({
        message: 'Uploading...',
        showBackdrop: false,
      })
      await AssignmentviewPage.loading.present();
      //alert(localStorage.getItem('networkConnection'));
      if (localStorage.getItem('networkConnection') == 'false') {
        AssignmentviewPage.loading.dismiss();
        this.empList = JSON.parse(localStorage.getItem('submitList'));
        if (this.empList == null) {
          this.empList = [];
        }
        this.empList.push({
          name: name,
          selectedPicture: this.selectedImage,
          ref: fileRef
        });
        localStorage.setItem("submitList", JSON.stringify(this.empList));
        this.displayAlert("Notice!", "", "Your assignment will be uploaded when you are online");
      }

      this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.url = url;
            this.fileService.insertImageDetails(name, this.url);
            AssignmentviewPage.loading.dismiss();
            this.displayAlert("Success", "", "Assigment submission is success");
          })
        })
      ).subscribe();
    }
  }

  public async OpenCamera(inputValue) {
    // alert(inputValue);
    // alert(this.assigmentSubmission)
    if (this.assignmentId == null) {
      await this.displayAlert("Error!", "Invalid Input ID", "Please insert the assigmnet ID first");
    } else if (localStorage.getItem("LogedSubject").toString() == 'all') {
      await this.displayAlert("Error!", "Invalid Input", "Please select the subject first");
    } else {
      this.subject = localStorage.getItem("LogedSubject").toString();
      const options: CameraOptions = {
        quality: 20,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: true,
      };
      await this.camera.getPicture(options).then(
        (imageData) => {
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.selectedPhoto = this.datURLtoBlob(base64Image);
          this.uploadImage();
        },
        (err) => {
          //alert(err);
        }
      );
    }

  }

  uploadImageV1() {
    let name = this.selectedPhoto.name
    const fileRef = this.storage.ref('myFolder1/' + name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.fileService.insertImageDetails(name, this.url);
          alert('Upload Successful');
        })
      })
    ).subscribe();
  }

  async uploadImage() {
    AssignmentviewPage.loading = await this.laodingController.create({
      message: 'Uploading...',
      showBackdrop: false,
    })
    await AssignmentviewPage.loading.present();
    if (this.selectedPhoto) {

      var name = new Date().getTime();
      //const uploadTask = this.angularFirestore.storage.ref().child(this.subject).child(this.assignmentId + '_' + this.studentId).put(this.selectedPhoto);
      var pathUrl = this.subject + "/" + this.assignmentId + '_' + this.studentId + ".png";
      const uploadTask = this.angularFirestore.ref(pathUrl);
      let upim = uploadTask.put(this.selectedPhoto);
      upim.snapshotChanges().pipe(
        finalize(() => {
          uploadTask.getDownloadURL().subscribe(url => {
            AssignmentviewPage.loading.dismiss();
            alert(url); // <-- do what ever you want with the url..
            this.displayAlert("Success", "", "Assigment submission is success");
          });
        })
      ).subscribe();
    }
  }

  datURLtoBlob(dataURL) {
    try {
      let binay = atob(dataURL.split(',')[1]);
      let array = [];
      for (let i = 0; i < binay.length; i++) {
        array.push(binay.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    } catch (ex) {
    }
  };
}
export class iSubmitList {
  selectedPicture: any;
  name: string;
  ref: any
}