import { Component, OnInit } from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from "rxjs/operators";
import { FileService } from '../../service/file.service';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-fileupview',
  templateUrl: './fileupview.page.html',
  styleUrls: ['./fileupview.page.scss'],
})
export class FileupviewPage implements OnInit {


  selectedImage: any = null;
  url:string;
  id:string;
  file:string;
  dataurl;
  constructor( @Inject(AngularFireStorage) private storage: AngularFireStorage, 
  @Inject(FileService) private fileService: FileService) { }
  ngOnInit() {
    this.fileService.getImageDetailList();
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    alert(this.selectedImage)
  }

  save() {
    var name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.fileService.insertImageDetails(this.id,this.url);
          alert('Upload Successful');
        })
      })
    ).subscribe();

    // this.fireservices
    //       .collection('student')
    //       .add(student)
    //       .then(async (res) => {           
    //         //this.save(student.email,student.path);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
  }

  async view(){
    await this.fileService.getImage(this.file);
    alert(localStorage.getItem('dataurl').toString());
    // this.dataurl=localStorage.getItem('dataurl').toString();
    // alert(this.dataurl);
  }
}