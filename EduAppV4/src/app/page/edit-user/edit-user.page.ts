import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AngularFireStorage } from '@angular/fire/compat/storage'

import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { map } from '@firebase/util';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  public static URL;
  imgUrl;
  selectedPhoto;
  public static loading;


  constructor(private camera: Camera,

    public navController: NavController,
    public laodingController: LoadingController,
    public ngFireAuth: AngularFireAuth,
    private angularFirestore: AngularFireStorage,) { }

  ngOnInit() {
   // this.angularFirestore.getReference("/User_Profile_Images").child(userEmail);
  }

  public async OpenCamera() {
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
        alert(err);
      }
    );
  }


  datURLtoBlob(dataURL) {
    try {
      alert('datURLtoBlob')
      alert(dataURL)
      let binay = atob(dataURL.split(',')[1]);
      //let binay = atob(dataURL);
      alert(binay)
      let array = [];
      for (let i = 0; i < binay.length; i++) {
        array.push(binay.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    } catch (ex) {
      alert(ex);
    }



  };

  async uploadImage() {
    EditUserPage.loading = await this.laodingController.create({
      message: 'Uploading...',
      showBackdrop:false,

    })
    await EditUserPage.loading.present();
    if (this.selectedPhoto) {
      alert('4' + this.selectedPhoto);
      var name = new Date().getTime();
      var uploadTask = this.angularFirestore.storage.ref().child(name.toString()).put(this.selectedPhoto);

      EditUserPage.loading.dismiss();
      try{
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          //EditUserPage.URL = downloadURL;
          this.imgUrl = downloadURL
          alert(downloadURL);
          EditUserPage.loading.dismiss();
          alert('onsuc')
        });
      }catch(ex){

      }

      // uploadTask.then(this.onSuccess, this.onError);
    }
  }

  // onSuccess() {
  //   alert('onsuc');
  //   return snapshot => {
  //     snapshot.ref.getDownloadUrl().then(function (downloadURL) {
  //       EditUserPage.URL = downloadURL;
  //       this.imgUrl = downloadURL
  //       alert(downloadURL);
  //       EditUserPage.loading.dismiss();
  //       alert('onsuc')
  //     });
  //   }
  // }

  onError() {
    alert('oneerror');
  }

  onSuccess = snapshot => {
    snapshot.ref.getDownloadUrl().then(function (downloadURL) {
      alert('onsuc1')
      EditUserPage.URL = downloadURL;
      EditUserPage.loading.dismiss();
      alert('onsuc')
    })

  }

  // onError= error=>{
  //   console.log(error);
  //   alert(error)
  // }
}
