import { Injectable } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { NewuserPage } from 'src/app/page/newuser/newuser.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private platform: Platform;
  imagePath: string;
  private win: any = window;
  selectedPhoto;

  constructor(platform: Platform, private camera: Camera,
    public laodingController: LoadingController,
    public ngFireAuth: AngularFireAuth,
    private angularFirestore: AngularFireStorage,) {
    this.platform = platform;
  }

  /**
   * Open the camera and get the photo
   */
  public async OpenCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
    };
    await this.camera.getPicture(options).then(
      (imageData) => {
        localStorage.setItem(
          'imagePath',
          this.win.Ionic.WebView.convertFileSrc(imageData)
        );
      },
      (err) => {
        //alert(err)
      }
    );
  }

/**
 * Open the camera and get the photo
 */
  public async OpenCameraV1(inputValue) {
    localStorage.setItem('imagePath', null);
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
    };
    await this.camera.getPicture(options).then(
      (imageData) => {
        localStorage.setItem('imagePath', this.win.Ionic.WebView.convertFileSrc(imageData));
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        localStorage.setItem(
          'imagePath',
          base64Image
        );
        this.selectedPhoto = this.datURLtoBlob(base64Image);
        this.uploadImage();
        return "success";
      },
      (err) => {
        //alert(err);
      }
    );
    return "";
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

  async uploadImage() {
    NewuserPage.loading = await this.laodingController.create({
      message: 'Uploading...',
      showBackdrop: false,
    })
    await NewuserPage.loading.present();
    if (this.selectedPhoto) {

      var name = new Date().getTime();
      var pathUrl = "UserImages/" + name + ".png";
      const uploadTask = this.angularFirestore.ref(pathUrl);
      let upim = uploadTask.put(this.selectedPhoto);
      upim.snapshotChanges().pipe(
        finalize(() => {
          uploadTask.getDownloadURL().subscribe(url => {
            NewuserPage.loading.dismiss();
            localStorage.setItem(
              'imagePathDB',
              url
            );
            // alert(localStorage.getItem('imagePathDB').toString()); // <-- do what ever you want with the url..
            // this.displayAlert("Success", "", "Assigment submission is success");
          });
        })
      ).subscribe();
    }
  }

  /**
   * Open the phone gallery and upload the photo
   */
  public async OpenGallery() {
    await this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.FILE_URI,
      })
      .then(
        (imageData) => {
          localStorage.setItem(
            'imagePath',
            this.win.Ionic.WebView.convertFileSrc(imageData)
          );
        },
        (err) => { }
      );
  }

  public async OpenGalleryV1() {
    await this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
      })
      .then(
        async (imageData) => {
          var name = new Date().getTime();
          var pathUrl = "UserImages/" + name + ".png";
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          localStorage.setItem(
            'imagePath',
            base64Image
          );
          this.selectedPhoto = this.datURLtoBlob(base64Image);

          const fileRef = this.angularFirestore.ref(pathUrl);
          NewuserPage.loading = await this.laodingController.create({
            message: 'Uploading...',
            showBackdrop: false,
          })
          await NewuserPage.loading.present();
          this.angularFirestore.upload(pathUrl, this.selectedPhoto).snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                localStorage.setItem(
                  'imagePathDB',
                  url
                );
                //this.url = url;
                //this.fileService.insertImageDetails(name, this.url);
                NewuserPage.loading.dismiss();
                //alert(url);
                //this.displayAlert("Success", "", "Assigment submission is success");
              })
            })
          ).subscribe();
        },
        (err) => { }
      );

  }
}
